import { ledgerActor } from '../utils/actor.utils';
import secp256k1Identity from '../utils/identity';

// import { authStore } from '$lib/stores/auth.store';

export const balance = async () => {
	// const identity = await authStore.identity();
	const { balance } = await ledgerActor(secp256k1Identity);
	return balance;
};
