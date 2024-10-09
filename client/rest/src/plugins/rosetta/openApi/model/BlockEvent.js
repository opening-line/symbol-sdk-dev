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
import BlockEventType from './BlockEventType.js';
import BlockIdentifier from './BlockIdentifier.js';

/**
 * The BlockEvent model module.
 * @module model/BlockEvent
 * @version 1.4.13
 */
class BlockEvent {
	/**
	 * Constructs a new <code>BlockEvent</code>.
	 * BlockEvent represents the addition or removal of a BlockIdentifier from storage. Streaming BlockEvents allows lightweight clients to update their own state without needing to implement their own syncing logic.
	 * @alias module:model/BlockEvent
	 * @param sequence {Number} sequence is the unique identifier of a BlockEvent within the context of a NetworkIdentifier.
	 * @param blockIdentifier {module:model/BlockIdentifier}
	 * @param type {module:model/BlockEventType}
	 */
	constructor(sequence, blockIdentifier, type) {

		BlockEvent.initialize(this, sequence, blockIdentifier, type);
	}

	/**
	 * Initializes the fields of this object.
	 * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
	 * Only for internal use.
	 */
	static initialize(obj, sequence, blockIdentifier, type) {
		obj['sequence'] = sequence;
		obj['block_identifier'] = blockIdentifier;
		obj['type'] = type;
	}

	/**
	 * Constructs a <code>BlockEvent</code> from a plain JavaScript object, optionally creating a new instance.
	 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
	 * @param {Object} data The plain JavaScript object bearing properties of interest.
	 * @param {module:model/BlockEvent} obj Optional instance to populate.
	 * @return {module:model/BlockEvent} The populated <code>BlockEvent</code> instance.
	 */
	static constructFromObject(data, obj) {
		if (data) {
			obj = obj || new BlockEvent();

			if (data.hasOwnProperty('sequence')) {
				obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Number');
			}
			if (data.hasOwnProperty('block_identifier')) {
				obj['block_identifier'] = BlockIdentifier.constructFromObject(data['block_identifier']);
			}
			if (data.hasOwnProperty('type')) {
				obj['type'] = BlockEventType.constructFromObject(data['type']);
			}
		}
		return obj;
	}

	/**
	 * Validates the JSON data with respect to <code>BlockEvent</code>.
	 * @param {Object} data The plain JavaScript object bearing properties of interest.
	 * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BlockEvent</code>.
	 */
	static validateJSON(data) {
		// check to make sure all required properties are present in the JSON string
		for (const property of BlockEvent.RequiredProperties) {
			if (!data.hasOwnProperty(property)) {
				throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
			}
		}
		// validate the optional field `block_identifier`
		if (data['block_identifier']) { // data not null
		  BlockIdentifier.validateJSON(data['block_identifier']);
		}

		return true;
	}


}

BlockEvent.RequiredProperties = ["sequence", "block_identifier", "type"];

/**
 * sequence is the unique identifier of a BlockEvent within the context of a NetworkIdentifier.
 * @member {Number} sequence
 */
BlockEvent.prototype['sequence'] = undefined;

/**
 * @member {module:model/BlockIdentifier} block_identifier
 */
BlockEvent.prototype['block_identifier'] = undefined;

/**
 * @member {module:model/BlockEventType} type
 */
BlockEvent.prototype['type'] = undefined;






export default BlockEvent;

