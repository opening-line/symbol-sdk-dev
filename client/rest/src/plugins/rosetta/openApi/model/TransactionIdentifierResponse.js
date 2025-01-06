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

import ApiClient from '../ApiClient.js';
import TransactionIdentifier from './TransactionIdentifier.js';

/**
 * The TransactionIdentifierResponse model module.
 * @module model/TransactionIdentifierResponse
 * @version 1.4.13
 */
class TransactionIdentifierResponse {
	/**
	 * Constructs a new <code>TransactionIdentifierResponse</code>.
	 * TransactionIdentifierResponse contains the transaction_identifier of a transaction that was submitted to either &#x60;/construction/hash&#x60; or &#x60;/construction/submit&#x60;.
	 * @alias module:model/TransactionIdentifierResponse
	 * @param transactionIdentifier {module:model/TransactionIdentifier}
	 */
	constructor(transactionIdentifier) {

		TransactionIdentifierResponse.initialize(this, transactionIdentifier);
	}

	/**
	 * Initializes the fields of this object.
	 * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
	 * Only for internal use.
	 */
	static initialize(obj, transactionIdentifier) {
		obj['transaction_identifier'] = transactionIdentifier;
	}

	/**
	 * Constructs a <code>TransactionIdentifierResponse</code> from a plain JavaScript object, optionally creating a new instance.
	 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
	 * @param {Object} data The plain JavaScript object bearing properties of interest.
	 * @param {module:model/TransactionIdentifierResponse} obj Optional instance to populate.
	 * @return {module:model/TransactionIdentifierResponse} The populated <code>TransactionIdentifierResponse</code> instance.
	 */
	static constructFromObject(data, obj) {
		if (data) {
			obj = obj || new TransactionIdentifierResponse();

			if (data.hasOwnProperty('transaction_identifier')) {
				obj['transaction_identifier'] = TransactionIdentifier.constructFromObject(data['transaction_identifier']);
			}
			if (data.hasOwnProperty('metadata')) {
				obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
			}
		}
		return obj;
	}

	/**
	 * Validates the JSON data with respect to <code>TransactionIdentifierResponse</code>.
	 * @param {Object} data The plain JavaScript object bearing properties of interest.
	 * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionIdentifierResponse</code>.
	 */
	static validateJSON(data) {
		// check to make sure all required properties are present in the JSON string
		for (const property of TransactionIdentifierResponse.RequiredProperties) {
			if (!data.hasOwnProperty(property)) {
				throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
			}
		}
		// validate the optional field `transaction_identifier`
		if (data['transaction_identifier']) { // data not null
		  TransactionIdentifier.validateJSON(data['transaction_identifier']);
		}

		return true;
	}


}

TransactionIdentifierResponse.RequiredProperties = ["transaction_identifier"];

/**
 * @member {module:model/TransactionIdentifier} transaction_identifier
 */
TransactionIdentifierResponse.prototype['transaction_identifier'] = undefined;

/**
 * @member {Object} metadata
 */
TransactionIdentifierResponse.prototype['metadata'] = undefined;






export default TransactionIdentifierResponse;

