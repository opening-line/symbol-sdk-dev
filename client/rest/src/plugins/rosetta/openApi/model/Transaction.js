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
import Operation from './Operation';
import RelatedTransaction from './RelatedTransaction';
import TransactionIdentifier from './TransactionIdentifier';

/**
 * The Transaction model module.
 * @module model/Transaction
 * @version 1.4.13
 */
class Transaction {
    /**
     * Constructs a new <code>Transaction</code>.
     * Transactions contain an array of Operations that are attributable to the same TransactionIdentifier.
     * @alias module:model/Transaction
     * @param transactionIdentifier {module:model/TransactionIdentifier} 
     * @param operations {Array.<module:model/Operation>} 
     */
    constructor(transactionIdentifier, operations) { 
        
        Transaction.initialize(this, transactionIdentifier, operations);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, transactionIdentifier, operations) { 
        obj['transaction_identifier'] = transactionIdentifier;
        obj['operations'] = operations;
    }

    /**
     * Constructs a <code>Transaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Transaction} obj Optional instance to populate.
     * @return {module:model/Transaction} The populated <code>Transaction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Transaction();

            if (data.hasOwnProperty('transaction_identifier')) {
                obj['transaction_identifier'] = TransactionIdentifier.constructFromObject(data['transaction_identifier']);
            }
            if (data.hasOwnProperty('operations')) {
                obj['operations'] = ApiClient.convertToType(data['operations'], [Operation]);
            }
            if (data.hasOwnProperty('related_transactions')) {
                obj['related_transactions'] = ApiClient.convertToType(data['related_transactions'], [RelatedTransaction]);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Transaction</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Transaction</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Transaction.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `transaction_identifier`
        if (data['transaction_identifier']) { // data not null
          TransactionIdentifier.validateJSON(data['transaction_identifier']);
        }
        if (data['operations']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['operations'])) {
                throw new Error("Expected the field `operations` to be an array in the JSON data but got " + data['operations']);
            }
            // validate the optional field `operations` (array)
            for (const item of data['operations']) {
                Operation.validateJSON(item);
            };
        }
        if (data['related_transactions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['related_transactions'])) {
                throw new Error("Expected the field `related_transactions` to be an array in the JSON data but got " + data['related_transactions']);
            }
            // validate the optional field `related_transactions` (array)
            for (const item of data['related_transactions']) {
                RelatedTransaction.validateJSON(item);
            };
        }

        return true;
    }


}

Transaction.RequiredProperties = ["transaction_identifier", "operations"];

/**
 * @member {module:model/TransactionIdentifier} transaction_identifier
 */
Transaction.prototype['transaction_identifier'] = undefined;

/**
 * @member {Array.<module:model/Operation>} operations
 */
Transaction.prototype['operations'] = undefined;

/**
 * @member {Array.<module:model/RelatedTransaction>} related_transactions
 */
Transaction.prototype['related_transactions'] = undefined;

/**
 * Transactions that are related to other transactions (like a cross-shard transaction) should include the tranaction_identifier of these transactions in the metadata.
 * @member {Object} metadata
 */
Transaction.prototype['metadata'] = undefined;






export default Transaction;

