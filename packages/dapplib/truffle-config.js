require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy riot machine evil idea civil army gesture'; 
let testAccounts = [
"0x1f0b34fd1059f2807d93133e754f9b05d0cfbea40055f0ac3b134df7dbf31ac4",
"0xc0700abe08823a38858f6549575b5d6c56a90cb9260236ce44c3236009031114",
"0x3db2118c9047dbc0104663f1f88a25c2af95106d711b55b8b7d9eb9dee20f567",
"0xee8202abdbe8210897d06b7b7162e043198f0177f0b19c86b552c79a99086476",
"0xd661f9fbd17dec5a6455353c955bfa2109666296e2b7836259762f5d9da548cb",
"0x15b12a40ef6e10c06b24d9e771f4b5d729ce6aa7dc3b515eeb1b211a06a0fb89",
"0xa6d1ec254294d9e231545e67c7016227d4c885b8afc6d41dc997708379de2119",
"0x0906b29d09f6be5a92ba360a196af97a9b173992e9b7d1d669f143bdb9225c25",
"0x7cbba70c765329a8ddb76a23f61360f5eea66e856c1b1fe5392af0ed769f9d65",
"0x21e4ad497f72d915695e379ba6c76115d5cdcb5cdf0eafe5ca12355ef59fc608"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


