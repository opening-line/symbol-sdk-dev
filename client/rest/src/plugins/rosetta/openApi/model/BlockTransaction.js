/**
 * Rosetta
 * Build Once. Integrate Your Blockchain Everywhere.
 *
 * The version of the OpenAPI document: 1.4.13
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BlockIdentifier from './BlockIdentifier';
import Transaction from './Transaction';

/**
 * The BlockTransaction model module.
 * @module model/BlockTransaction
 * @version 1.4.13
 */
class BlockTransaction {
    /**
     * Constructs a new <code>BlockTransaction</code>.
     * BlockTransaction contains a populated Transaction and the BlockIdentifier that contains it.
     * @alias module:model/BlockTransaction
     * @param blockIdentifier {module:model/BlockIdentifier} 
     * @param transaction {module:model/Transaction} 
     */
    constructor(blockIdentifier, transaction) { 
        
        BlockTransaction.initialize(this, blockIdentifier, transaction);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blockIdentifier, transaction) { 
        obj['block_identifier'] = blockIdentifier;
        obj['transaction'] = transaction;
    }

    /**
     * Constructs a <code>BlockTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BlockTransaction} obj Optional instance to populate.
     * @return {module:model/BlockTransaction} The populated <code>BlockTransaction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlockTransaction();

            if (data.hasOwnProperty('block_identifier')) {
                obj['block_identifier'] = BlockIdentifier.constructFromObject(data['block_identifier']);
            }
            if (data.hasOwnProperty('transaction')) {
                obj['transaction'] = Transaction.constructFromObject(data['transaction']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BlockTransaction</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BlockTransaction</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BlockTransaction.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `block_identifier`
        if (data['block_identifier']) { // data not null
          BlockIdentifier.validateJSON(data['block_identifier']);
        }
        // validate the optional field `transaction`
        if (data['transaction']) { // data not null
          Transaction.validateJSON(data['transaction']);
        }

        return true;
    }


}

BlockTransaction.RequiredProperties = ["block_identifier", "transaction"];

/**
 * @member {module:model/BlockIdentifier} block_identifier
 */
BlockTransaction.prototype['block_identifier'] = undefined;

/**
 * @member {module:model/Transaction} transaction
 */
BlockTransaction.prototype['transaction'] = undefined;






export default BlockTransaction;

