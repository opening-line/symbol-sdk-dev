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

/**
 * The Error model module.
 * @module model/Error
 * @version 1.4.13
 */
class Error {
	/**
	 * Constructs a new <code>Error</code>.
	 * Instead of utilizing HTTP status codes to describe node errors (which often do not have a good analog), rich errors are returned using this object. Both the code and message fields can be individually used to correctly identify an error. Implementations MUST use unique values for both fields.
	 * @alias module:model/Error
	 * @param code {Number} Code is a network-specific error code. If desired, this code can be equivalent to an HTTP status code.
	 * @param message {String} Message is a network-specific error message. The message MUST NOT change for a given code. In particular, this means that any contextual information should be included in the details field.
	 * @param retriable {Boolean} An error is retriable if the same request may succeed if submitted again.
	 */
	constructor(code, message, retriable) {

		Error.initialize(this, code, message, retriable);
	}

	/**
	 * Initializes the fields of this object.
	 * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
	 * Only for internal use.
	 */
	static initialize(obj, code, message, retriable) {
		obj['code'] = code;
		obj['message'] = message;
		obj['retriable'] = retriable;
	}

	/**
	 * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
	 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
	 * @param {Object} data The plain JavaScript object bearing properties of interest.
	 * @param {module:model/Error} obj Optional instance to populate.
	 * @return {module:model/Error} The populated <code>Error</code> instance.
	 */
	static constructFromObject(data, obj) {
		if (data) {
			obj = obj || new Error();

			if (data.hasOwnProperty('code')) {
				obj['code'] = ApiClient.convertToType(data['code'], 'Number');
			}
			if (data.hasOwnProperty('message')) {
				obj['message'] = ApiClient.convertToType(data['message'], 'String');
			}
			if (data.hasOwnProperty('description')) {
				obj['description'] = ApiClient.convertToType(data['description'], 'String');
			}
			if (data.hasOwnProperty('retriable')) {
				obj['retriable'] = ApiClient.convertToType(data['retriable'], 'Boolean');
			}
			if (data.hasOwnProperty('details')) {
				obj['details'] = ApiClient.convertToType(data['details'], Object);
			}
		}
		return obj;
	}

	/**
	 * Validates the JSON data with respect to <code>Error</code>.
	 * @param {Object} data The plain JavaScript object bearing properties of interest.
	 * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Error</code>.
	 */
	static validateJSON(data) {
		// check to make sure all required properties are present in the JSON string
		for (const property of Error.RequiredProperties) {
			if (!data.hasOwnProperty(property)) {
				throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
			}
		}
		// ensure the json data is a string
		if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
			throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
		}
		// ensure the json data is a string
		if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
			throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
		}

		return true;
	}


}

Error.RequiredProperties = ["code", "message", "retriable"];

/**
 * Code is a network-specific error code. If desired, this code can be equivalent to an HTTP status code.
 * @member {Number} code
 */
Error.prototype['code'] = undefined;

/**
 * Message is a network-specific error message. The message MUST NOT change for a given code. In particular, this means that any contextual information should be included in the details field.
 * @member {String} message
 */
Error.prototype['message'] = undefined;

/**
 * Description allows the implementer to optionally provide additional information about an error. In many cases, the content of this field will be a copy-and-paste from existing developer documentation. Description can ONLY be populated with generic information about a particular type of error. It MUST NOT be populated with information about a particular instantiation of an error (use `details` for this). Whereas the content of Error.Message should stay stable across releases, the content of Error.Description will likely change across releases (as implementers improve error documentation). For this reason, the content in this field is not part of any type assertion (unlike Error.Message).
 * @member {String} description
 */
Error.prototype['description'] = undefined;

/**
 * An error is retriable if the same request may succeed if submitted again.
 * @member {Boolean} retriable
 */
Error.prototype['retriable'] = undefined;

/**
 * Often times it is useful to return context specific to the request that caused the error (i.e. a sample of the stack trace or impacted account) in addition to the standard error message.
 * @member {Object} details
 */
Error.prototype['details'] = undefined;






export default Error;

