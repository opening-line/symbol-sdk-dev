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
import AccountIdentifier from './AccountIdentifier.js';

/**
 * The ConstructionPreprocessResponse model module.
 * @module model/ConstructionPreprocessResponse
 * @version 1.4.13
 */
class ConstructionPreprocessResponse {
	/**
	 * Constructs a new <code>ConstructionPreprocessResponse</code>.
	 * ConstructionPreprocessResponse contains &#x60;options&#x60; that will be sent unmodified to &#x60;/construction/metadata&#x60;. If it is not necessary to make a request to &#x60;/construction/metadata&#x60;, &#x60;options&#x60; should be omitted.  Some blockchains require the PublicKey of particular AccountIdentifiers to construct a valid transaction. To fetch these PublicKeys, populate &#x60;required_public_keys&#x60; with the AccountIdentifiers associated with the desired PublicKeys. If it is not necessary to retrieve any PublicKeys for construction, &#x60;required_public_keys&#x60; should be omitted.
	 * @alias module:model/ConstructionPreprocessResponse
	 */
	constructor() {

		ConstructionPreprocessResponse.initialize(this);
	}

	/**
	 * Initializes the fields of this object.
	 * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
	 * Only for internal use.
	 */
	static initialize(obj) {
	}

	/**
	 * Constructs a <code>ConstructionPreprocessResponse</code> from a plain JavaScript object, optionally creating a new instance.
	 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
	 * @param {Object} data The plain JavaScript object bearing properties of interest.
	 * @param {module:model/ConstructionPreprocessResponse} obj Optional instance to populate.
	 * @return {module:model/ConstructionPreprocessResponse} The populated <code>ConstructionPreprocessResponse</code> instance.
	 */
	static constructFromObject(data, obj) {
		if (data) {
			obj = obj || new ConstructionPreprocessResponse();

			if (data.hasOwnProperty('options')) {
				obj['options'] = ApiClient.convertToType(data['options'], Object);
			}
			if (data.hasOwnProperty('required_public_keys')) {
				obj['required_public_keys'] = ApiClient.convertToType(data['required_public_keys'], [AccountIdentifier]);
			}
		}
		return obj;
	}

	/**
	 * Validates the JSON data with respect to <code>ConstructionPreprocessResponse</code>.
	 * @param {Object} data The plain JavaScript object bearing properties of interest.
	 * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConstructionPreprocessResponse</code>.
	 */
	static validateJSON(data) {
		if (data['required_public_keys']) { // data not null
			// ensure the json data is an array
			if (!Array.isArray(data['required_public_keys'])) {
				throw new Error("Expected the field `required_public_keys` to be an array in the JSON data but got " + data['required_public_keys']);
			}
			// validate the optional field `required_public_keys` (array)
			for (const item of data['required_public_keys']) {
				AccountIdentifier.validateJSON(item);
			};
		}

		return true;
	}


}



/**
 * The options that will be sent directly to `/construction/metadata` by the caller.
 * @member {Object} options
 */
ConstructionPreprocessResponse.prototype['options'] = undefined;

/**
 * @member {Array.<module:model/AccountIdentifier>} required_public_keys
 */
ConstructionPreprocessResponse.prototype['required_public_keys'] = undefined;






export default ConstructionPreprocessResponse;

