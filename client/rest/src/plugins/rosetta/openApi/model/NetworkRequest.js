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
 * The NetworkRequest model module.
 * @module model/NetworkRequest
 * @version 1.4.13
 */
class NetworkRequest {
    /**
     * Constructs a new <code>NetworkRequest</code>.
     * A NetworkRequest is utilized to retrieve some data specific exclusively to a NetworkIdentifier.
     * @alias module:model/NetworkRequest
     * @param networkIdentifier {module:model/NetworkIdentifier} 
     */
    constructor(networkIdentifier) { 
        
        NetworkRequest.initialize(this, networkIdentifier);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, networkIdentifier) { 
        obj['network_identifier'] = networkIdentifier;
    }

    /**
     * Constructs a <code>NetworkRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkRequest} obj Optional instance to populate.
     * @return {module:model/NetworkRequest} The populated <code>NetworkRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkRequest();

            if (data.hasOwnProperty('network_identifier')) {
                obj['network_identifier'] = NetworkIdentifier.constructFromObject(data['network_identifier']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NetworkRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NetworkRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NetworkRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `network_identifier`
        if (data['network_identifier']) { // data not null
          NetworkIdentifier.validateJSON(data['network_identifier']);
        }

        return true;
    }


}

NetworkRequest.RequiredProperties = ["network_identifier"];

/**
 * @member {module:model/NetworkIdentifier} network_identifier
 */
NetworkRequest.prototype['network_identifier'] = undefined;

/**
 * @member {Object} metadata
 */
NetworkRequest.prototype['metadata'] = undefined;






export default NetworkRequest;

