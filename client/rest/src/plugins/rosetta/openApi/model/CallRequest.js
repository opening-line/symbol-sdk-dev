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
 * The CallRequest model module.
 * @module model/CallRequest
 * @version 1.4.13
 */
class CallRequest {
    /**
     * Constructs a new <code>CallRequest</code>.
     * CallRequest is the input to the &#x60;/call&#x60; endpoint.
     * @alias module:model/CallRequest
     * @param networkIdentifier {module:model/NetworkIdentifier} 
     * @param method {String} Method is some network-specific procedure call. This method could map to a network-specific RPC endpoint, a method in an SDK generated from a smart contract, or some hybrid of the two. The implementation must define all available methods in the Allow object. However, it is up to the caller to determine which parameters to provide when invoking `/call`.
     * @param parameters {Object} Parameters is some network-specific argument for a method. It is up to the caller to determine which parameters to provide when invoking `/call`.
     */
    constructor(networkIdentifier, method, parameters) { 
        
        CallRequest.initialize(this, networkIdentifier, method, parameters);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, networkIdentifier, method, parameters) { 
        obj['network_identifier'] = networkIdentifier;
        obj['method'] = method;
        obj['parameters'] = parameters;
    }

    /**
     * Constructs a <code>CallRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CallRequest} obj Optional instance to populate.
     * @return {module:model/CallRequest} The populated <code>CallRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CallRequest();

            if (data.hasOwnProperty('network_identifier')) {
                obj['network_identifier'] = NetworkIdentifier.constructFromObject(data['network_identifier']);
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CallRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CallRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CallRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `network_identifier`
        if (data['network_identifier']) { // data not null
          NetworkIdentifier.validateJSON(data['network_identifier']);
        }
        // ensure the json data is a string
        if (data['method'] && !(typeof data['method'] === 'string' || data['method'] instanceof String)) {
            throw new Error("Expected the field `method` to be a primitive type in the JSON string but got " + data['method']);
        }

        return true;
    }


}

CallRequest.RequiredProperties = ["network_identifier", "method", "parameters"];

/**
 * @member {module:model/NetworkIdentifier} network_identifier
 */
CallRequest.prototype['network_identifier'] = undefined;

/**
 * Method is some network-specific procedure call. This method could map to a network-specific RPC endpoint, a method in an SDK generated from a smart contract, or some hybrid of the two. The implementation must define all available methods in the Allow object. However, it is up to the caller to determine which parameters to provide when invoking `/call`.
 * @member {String} method
 */
CallRequest.prototype['method'] = undefined;

/**
 * Parameters is some network-specific argument for a method. It is up to the caller to determine which parameters to provide when invoking `/call`.
 * @member {Object} parameters
 */
CallRequest.prototype['parameters'] = undefined;






export default CallRequest;

