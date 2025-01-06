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
* Enum class CurveType.
* @enum {}
* @readonly
*/
export default class CurveType {

		/**
		 * value: "secp256k1"
		 * @const
		 */
		"secp256k1" = "secp256k1";


		/**
		 * value: "secp256k1_bip340"
		 * @const
		 */
		"secp256k1_bip340" = "secp256k1_bip340";


		/**
		 * value: "secp256r1"
		 * @const
		 */
		"secp256r1" = "secp256r1";


		/**
		 * value: "edwards25519"
		 * @const
		 */
		"edwards25519" = "edwards25519";

		/**
		 * value: "edwards25519_keccak"
		 * @const
		 */
		"edwards25519_keccak" = "edwards25519_keccak";

		/**
		 * value: "tweedle"
		 * @const
		 */
		"tweedle" = "tweedle";


		/**
		 * value: "pallas"
		 * @const
		 */
		"pallas" = "pallas";



	/**
	* Returns a <code>CurveType</code> enum value from a Javascript object name.
	* @param {Object} data The plain JavaScript object containing the name of the enum value.
	* @return {module:model/CurveType} The enum <code>CurveType</code> value.
	*/
	static constructFromObject(object) {
		return object;
	}
}

