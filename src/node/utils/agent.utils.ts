import { createAgent } from '@dfinity/utils';
import type { Identity, HttpAgent } from '@dfinity/agent';
import { host } from '../const/host.const';

export const getAgent = async (identity: Identity): Promise<HttpAgent> => {
  return createAgent({
    host,
    identity,
    fetchRootKey: import.meta.env.VITE_BACKEND_CANISTER_ID !== 'true'
  });
};
