import { icActor } from 'src/node/utils/actor.utils';
import secp256k1Identity from '../utils/identity';
import { Principal } from '@dfinity/principal';

export const web3diskCanisterStatus = async () => {
	const { canisterStatus } = await icActor(secp256k1Identity);

	const canister_id = Principal.fromText(
		import.meta.env.VITE_BACKEND_CANISTER_ID
	);

	return await canisterStatus(canister_id);
};
