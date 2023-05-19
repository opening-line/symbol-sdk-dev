from abc import ABC, abstractmethod


class MethodDescriptor:
	def __init__(self, method_name=None, arguments=None, body='pass', result=''):
		self.method_name = method_name
		self.arguments = arguments or []
		self.body = body
		self.result = result
		self.annotations = []


class AbstractTypeFormatter(ABC):
	@abstractmethod
	def typename(self):
		pass

	def get_base_class(self):
		# pylint: disable=no-self-use
		return ''

	@abstractmethod
	def get_ctor_descriptor(self) -> MethodDescriptor:
		pass

	def get_comparer_descriptor(self) -> MethodDescriptor:
		pass

	def get_sort_descriptor(self) -> MethodDescriptor:
		pass

	@abstractmethod
	def get_deserialize_descriptor(self) -> MethodDescriptor:
		pass

	@abstractmethod
	def get_serialize_descriptor(self) -> MethodDescriptor:
		pass

	@abstractmethod
	def get_size_descriptor(self) -> MethodDescriptor:
		pass

	def get_getter_descriptors(self):
		# pylint: disable=no-self-use
		return []

	def get_setter_descriptors(self):
		# pylint: disable=no-self-use
		return []

	def get_str_descriptor(self) -> MethodDescriptor:
		# pylint: disable=no-self-use
		return None

	def get_fields(self):
		# pylint: disable=no-self-use
		return []
