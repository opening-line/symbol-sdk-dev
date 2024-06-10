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

/** @module sockets/nodePeersCodec */
import nodeInfoCodec from './nodeInfoCodec.js';

export default {
	/**
	 * Parses node peers, composed of multiple nodes info
	 * @param {object} parser Parser.
	 * @returns {object} Parsed node peers.
	 */
	deserialize: parser => {
		const nodePeers = [];
		while (0 !== parser.buffers.numUnprocessedBytes)
			nodePeers.push(nodeInfoCodec.deserialize(parser));

		return nodePeers;
	}
};
