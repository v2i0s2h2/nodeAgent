"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the required library
var identity_secp256k1_1 = require("@dfinity/identity-secp256k1");
// Generate a new random identity
var secp256k1Identity = identity_secp256k1_1.Secp256k1KeyIdentity.generate();
console.log('Your identity is:', secp256k1Identity);
exports.default = secp256k1Identity;
