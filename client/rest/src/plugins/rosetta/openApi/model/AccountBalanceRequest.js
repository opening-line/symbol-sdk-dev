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
import AccountIdentifier from './AccountIdentifier';
import Currency from './Currency';
import NetworkIdentifier from './NetworkIdentifier';
import PartialBlockIdentifier from './PartialBlockIdentifier';

/**
 * The AccountBalanceRequest model module.
 * @module model/AccountBalanceRequest
 * @version 1.4.13
 */
class AccountBalanceRequest {
    /**
     * Constructs a new <code>AccountBalanceRequest</code>.
     * An AccountBalanceRequest is utilized to make a balance request on the /account/balance endpoint. If the block_identifier is populated, a historical balance query should be performed.
     * @alias module:model/AccountBalanceRequest
     * @param networkIdentifier {module:model/NetworkIdentifier} 
     * @param accountIdentifier {module:model/AccountIdentifier} 
     */
    constructor(networkIdentifier, accountIdentifier) { 
        
        AccountBalanceRequest.initialize(this, networkIdentifier, accountIdentifier);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, networkIdentifier, accountIdentifier) { 
        obj['network_identifier'] = networkIdentifier;
        obj['account_identifier'] = accountIdentifier;
    }

    /**
     * Constructs a <code>AccountBalanceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountBalanceRequest} obj Optional instance to populate.
     * @return {module:model/AccountBalanceRequest} The populated <code>AccountBalanceRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountBalanceRequest();

            if (data.hasOwnProperty('network_identifier')) {
                obj['network_identifier'] = NetworkIdentifier.constructFromObject(data['network_identifier']);
            }
            if (data.hasOwnProperty('account_identifier')) {
                obj['account_identifier'] = AccountIdentifier.constructFromObject(data['account_identifier']);
            }
            if (data.hasOwnProperty('block_identifier')) {
                obj['block_identifier'] = PartialBlockIdentifier.constructFromObject(data['block_identifier']);
            }
            if (data.hasOwnProperty('currencies')) {
                obj['currencies'] = ApiClient.convertToType(data['currencies'], [Currency]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AccountBalanceRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AccountBalanceRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AccountBalanceRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `network_identifier`
        if (data['network_identifier']) { // data not null
          NetworkIdentifier.validateJSON(data['network_identifier']);
        }
        // validate the optional field `account_identifier`
        if (data['account_identifier']) { // data not null
          AccountIdentifier.validateJSON(data['account_identifier']);
        }
        // validate the optional field `block_identifier`
        if (data['block_identifier']) { // data not null
          PartialBlockIdentifier.validateJSON(data['block_identifier']);
        }
        if (data['currencies']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['currencies'])) {
                throw new Error("Expected the field `currencies` to be an array in the JSON data but got " + data['currencies']);
            }
            // validate the optional field `currencies` (array)
            for (const item of data['currencies']) {
                Currency.validateJSON(item);
            };
        }

        return true;
    }


}

AccountBalanceRequest.RequiredProperties = ["network_identifier", "account_identifier"];

/**
 * @member {module:model/NetworkIdentifier} network_identifier
 */
AccountBalanceRequest.prototype['network_identifier'] = undefined;

/**
 * @member {module:model/AccountIdentifier} account_identifier
 */
AccountBalanceRequest.prototype['account_identifier'] = undefined;

/**
 * @member {module:model/PartialBlockIdentifier} block_identifier
 */
AccountBalanceRequest.prototype['block_identifier'] = undefined;

/**
 * In some cases, the caller may not want to retrieve all available balances for an AccountIdentifier. If the currencies field is populated, only balances for the specified currencies will be returned. If not populated, all available balances will be returned.
 * @member {Array.<module:model/Currency>} currencies
 */
AccountBalanceRequest.prototype['currencies'] = undefined;






export default AccountBalanceRequest;

