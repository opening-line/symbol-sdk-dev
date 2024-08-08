import AccountIdentifier from '../../../../../src/plugins/rosetta/openApi/model/AccountIdentifier.js';
import SigningPayload from '../../../../../src/plugins/rosetta/openApi/model/SigningPayload.js';
import { utils } from 'symbol-sdk';
import { NemFacade, models } from 'symbol-sdk/nem';

export default class PayloadResultVerifier {
	constructor(timestamp) {
		this.timestampProperties = {
			timestamp,
			deadline: timestamp + (60 * 60)
		};

		this.facade = new NemFacade('testnet');
		this.transaction = undefined;
	}

	setTransfer(signerPublicKey, recipientAddress, amount, fee) {
		this.transaction = this.facade.transactionFactory.create({
			type: 'transfer_transaction_v1',
			signerPublicKey,
			...this.timestampProperties,
			fee,

			recipientAddress,
			amount
		});
	}

	setTransferWithArbitraryMosaic(signerPublicKey, recipientAddress) {
		const textEncoder = new TextEncoder();
		this.transaction = this.facade.transactionFactory.create({
			type: 'transfer_transaction_v2',
			signerPublicKey,
			...this.timestampProperties,
			fee: 50000n * 25n,

			recipientAddress,
			amount: 2_000000,
			mosaics: [
				{
					mosaic: {
						mosaicId: { namespaceId: { name: textEncoder.encode('nem') }, name: textEncoder.encode('xem') },
						amount: 12345_000000
					}
				},
				{
					mosaic: {
						mosaicId: { namespaceId: { name: textEncoder.encode('foo') }, name: textEncoder.encode('bar') },
						amount: 54321_000000
					}
				}
			]
		});
	}

	setMultisigModification(signerPublicKey, metadata) {
		this.transaction = this.facade.transactionFactory.create({
			type: 'multisig_account_modification_transaction_v2',
			signerPublicKey,
			...this.timestampProperties,
			fee: 50000n * 10n,

			...metadata
		});
	}

	makeMultisig(signerPublicKey, cosignerPublicKeys) {
		this.transaction = this.facade.transactionFactory.create({
			type: 'multisig_transaction_v1',
			signerPublicKey,
			...this.timestampProperties,
			fee: this.transaction.fee,

			innerTransaction: this.facade.transactionFactory.static.toNonVerifiableTransaction(this.transaction),

			cosignatures: cosignerPublicKeys.map(cosignerPublicKey => {
				const cosignature = new models.SizePrefixedCosignatureV1();
				cosignature.cosignature = this.facade.transactionFactory.create({
					type: 'cosignature_v1',
					signerPublicKey: cosignerPublicKey,
					...this.timestampProperties,
					fee: 50000n * 3n
				});
				return cosignature;
			})
		});
	}

	makeSigningPayload(address) {
		const signingPayload = new SigningPayload(utils.uint8ToHex(this.facade.extractSigningPayload(this.transaction)));
		signingPayload.account_identifier = new AccountIdentifier(address);
		signingPayload.signature_type = 'ed25519_keccak';
		return signingPayload;
	}

	makeCosigningPayload(address) {
		const aggregateTransactionHash = this.facade.hashTransaction(this.transaction);
		const signingPayload = new SigningPayload(utils.uint8ToHex(aggregateTransactionHash.bytes));
		signingPayload.account_identifier = new AccountIdentifier(address);
		signingPayload.signature_type = 'ed25519_keccak';
		return signingPayload;
	}

	toHexString() {
		return utils.uint8ToHex(this.transaction.serialize());
	}
}
