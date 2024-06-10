/*
 * Copyright (c) 2016-2019, Jaguar0625, gimre, BloodyRookie, Tech Bureau, Corp.
 * Copyright (c) 2020-present, Jaguar0625, gimre, BloodyRookie.
 * All rights reserved.
 *
 * This file is part of Catapult.
 *
 * Catapult is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Catapult is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Catapult.  If not, see <http://www.gnu.org/licenses/>.
 */

import importanceBlockHeaderCodec from '../../../src/catapult-sdk/modelBinary/importanceBlockHeaderCodec.js';
import test from '../binaryTestUtils.js';

describe('importance block header codec', () => {
	const generateBlockHeader = () => {
		const votingEligibleAccountsCount = Buffer.of(0x01, 0x00, 0x00, 0x00);// 4b
		const harvestingEligibleAccountsCount = Buffer.of(0x02, 0x00, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00); // 8b
		const totalVotingBalance = Buffer.of(0x03, 0x00, 0x00, 0x00, 0x03, 0x00, 0x00, 0x00); // 8b
		const previousImportanceBlockHash = Buffer.from(test.random.bytes(test.constants.sizes.hash256));

		const buffer = Buffer.concat([
			votingEligibleAccountsCount,
			harvestingEligibleAccountsCount,
			totalVotingBalance,
			previousImportanceBlockHash
		]);
		const object = {
			votingEligibleAccountsCount: 1,
			harvestingEligibleAccountsCount: [
				2,
				2
			],
			totalVotingBalance: [
				3,
				3
			],
			previousImportanceBlockHash
		};
		return {
			buffer,
			object
		};
	};

	test.binary.test.addAll(importanceBlockHeaderCodec, 52, generateBlockHeader);
});
