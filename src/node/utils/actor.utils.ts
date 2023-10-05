import { Actor } from '@dfinity/agent';
import type { Identity, ActorSubclass} from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
import type { _SERVICE } from '../declarations/backend.did';

import { idlFactory } from '../declarations/index';
import { getAgent } from './agent.utils';
import { IcrcLedgerCanister } from '@dfinity/ledger';
import { ICManagementCanister } from '@dfinity/ic-management';

export const seirousActor = async (
	identity: Identity
): Promise<ActorSubclass<_SERVICE>> => {
	const agent = await getAgent(identity);

	return Actor.createActor<_SERVICE>(idlFactory, {
		agent,
		canisterId: import.meta.env.VITE_BACKEND_CANISTER_ID
	});
};

export const ledgerActor = async (identity: Identity) => {
	const agent = await getAgent(identity);

	return IcrcLedgerCanister.create({
		agent,
		canisterId: Principal.fromText(import.meta.env.VITE_LEDGER_CANISTER_ID)
	});
};

export const icActor = async (identity: Identity) => {
	const agent = await getAgent(identity);

	return ICManagementCanister.create({
		agent
	});
};
