const production = import.meta.env.PROD;

const MAINNET = 'https://icp0.io';
const LOCALHOST = 'http://localhost:8080';

export const host = production ? MAINNET : LOCALHOST;

// const LOCAL_II_HOST = 'http://qhbym-qaaaa-aaaaa-aaafq-cai.localhost:8080';
// const PROD_II_HOST = 'https://identity.internetcomputer.org';

// export const identityProvider = production ? PROD_II_HOST : LOCAL_II_HOST;
