// Import the required library
import { Secp256k1KeyIdentity } from '@dfinity/identity-secp256k1';

// Generate a new random identity
const secp256k1Identity = Secp256k1KeyIdentity.generate();

console.log('Your identity is:', secp256k1Identity);

export default secp256k1Identity;

