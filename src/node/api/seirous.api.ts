import { seirousActor } from '../utils/actor.utils';
import secp256k1Identity from '../utils/identity';
const fs = require('fs');
// import type {} from '$declarations/backend.did';

// Function to convert a hexadecimal string to a Uint8Array
function hexToUint8Array(hexString: string) {
    const bytes = new Uint8Array(Math.ceil(hexString.length / 2));
    for (let i = 0; i < bytes.length; i++) {
        bytes[i] = parseInt(hexString.substr(i * 2, 2), 16);
    }
    return bytes;
}

// Read the file
const hexString = fs.readFileSync('../data/simple1.txt', 'utf-8');

// Remove the 'blob' prefix and quotes from the string
const cleanedHexString = hexString.replace('blob', '').replace(/"/g, '').trim();

// Convert the hexadecimal string to a Uint8Array
const blob = hexToUint8Array(cleanedHexString);


const getActor = async () => {

    return await seirousActor(secp256k1Identity);
};

export const login = async () => {
    const actor = await getActor();
    return await actor.greet(blob);
};

