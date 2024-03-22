#!/usr/bin/python

from pathlib import Path
from enum import Enum
import catparser
from catparser.DisplayType import DisplayType

from generator import constant
from generator import util
from generator import array_generator
from generator import integer_generator
from generator import enum_generator
from generator import struct_generator
from generator import factory_generator

class Generator:
    @staticmethod
    def generate(ast_models, output):
        print(f'python catbuffer generator called with output: {output}')
        generate_files(ast_models, Path(output))

def generate_files(ast_models, output_directory: Path):
    
    util.update_int_type_of_struct(ast_models)
    output_directory.mkdir(exist_ok=True)

    with open(output_directory / 'models.rs', 'w', encoding='utf8', newline='') as output_file:
        import copy
        output = '//! This file was generated by running script \n//! symbol/sdk/rust/scripts/run_catbuffer_generator.sh.\n\n'
        output += 'pub use crate::symbol::models_header::*;\n\n'

        for trait in constant.TRAITS:
            type = util.get_type_of_trait(trait, ast_models)
            output += f'pub trait Trait{util.snake_to_camel(trait)} {{'
            output += f'fn get_{trait}(&self) -> &{type};'
            output += f'fn set_{trait}(&mut self, {trait}: {type});'
            output += '}'
            
        factory_types = util.get_factory_types(ast_models)

        for ast_model in ast_models:
            if ast_model.name in ('Signature', 'PublicKey'):
                continue
            
            ast_model = copy.deepcopy(ast_model)
            output += util.header_for_each_ast_model(ast_model)
            if ast_model.name in factory_types:
                factory = ast_model
                factory_name = factory.name
                products = []
                for ast_model in ast_models:
                    if util.get_factory_type(ast_model) == factory_name:
                        products.append(copy.deepcopy(ast_model))
                output += factory_generator.generate_factory(factory, products)
            elif ast_model.display_type == DisplayType.STRUCT:
                output += struct_generator.generate_struct(ast_model)
            elif ast_model.display_type == DisplayType.ENUM:
                output += enum_generator.generate_enum(ast_model)
            elif ast_model.display_type == DisplayType.BYTE_ARRAY:
                output += array_generator.generate_bytearray(ast_model)
            elif ast_model.display_type == DisplayType.INTEGER:
                output += integer_generator.generate_integer(ast_model)
            else:
                raise 'Unexpected'

        output_file.write(output)
