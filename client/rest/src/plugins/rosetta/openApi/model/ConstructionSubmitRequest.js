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
import NetworkIdentifier from './NetworkIdentifier';

/**
 * The ConstructionSubmitRequest model module.
 * @module model/ConstructionSubmitRequest
 * @version 1.4.13
 */
class ConstructionSubmitRequest {
    /**
     * Constructs a new <code>ConstructionSubmitRequest</code>.
     * The transaction submission request includes a signed transaction.
     * @alias module:model/ConstructionSubmitRequest
     * @param networkIdentifier {module:model/NetworkIdentifier} 
     * @param signedTransaction {String} 
     */
    constructor(networkIdentifier, signedTransaction) { 
        
        ConstructionSubmitRequest.initialize(this, networkIdentifier, signedTransaction);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, networkIdentifier, signedTransaction) { 
        obj['network_identifier'] = networkIdentifier;
        obj['signed_transaction'] = signedTransaction;
    }

    /**
     * Constructs a <code>ConstructionSubmitRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConstructionSubmitRequest} obj Optional instance to populate.
     * @return {module:model/ConstructionSubmitRequest} The populated <code>ConstructionSubmitRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConstructionSubmitRequest();

            if (data.hasOwnProperty('network_identifier')) {
                obj['network_identifier'] = NetworkIdentifier.constructFromObject(data['network_identifier']);
            }
            if (data.hasOwnProperty('signed_transaction')) {
                obj['signed_transaction'] = ApiClient.convertToType(data['signed_transaction'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ConstructionSubmitRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConstructionSubmitRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ConstructionSubmitRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `network_identifier`
        if (data['network_identifier']) { // data not null
          NetworkIdentifier.validateJSON(data['network_identifier']);
        }
        // ensure the json data is a string
        if (data['signed_transaction'] && !(typeof data['signed_transaction'] === 'string' || data['signed_transaction'] instanceof String)) {
            throw new Error("Expected the field `signed_transaction` to be a primitive type in the JSON string but got " + data['signed_transaction']);
        }

        return true;
    }


}

ConstructionSubmitRequest.RequiredProperties = ["network_identifier", "signed_transaction"];

/**
 * @member {module:model/NetworkIdentifier} network_identifier
 */
ConstructionSubmitRequest.prototype['network_identifier'] = undefined;

/**
 * @member {String} signed_transaction
 */
ConstructionSubmitRequest.prototype['signed_transaction'] = undefined;






export default ConstructionSubmitRequest;

