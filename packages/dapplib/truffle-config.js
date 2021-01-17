require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remind hole grid kiwi olympic ghost'; 
let testAccounts = [
"0xb28d92094403f848b87bce85ead2e36730e71e22ddcbb885d930ba6e69042076",
"0x1e1b206f11fb7b1b0bc9e054c0f92922f2b32022bb1bea4265912f44a1624b1c",
"0x0c27bbbab448affa045b17716146ab29b2775e770595de56295bc947ba5d84d0",
"0xe2da64245d88b6da740669fb47654bb4dab479835b4eb341745b3a083dd3b37f",
"0xe04248b88acc3e41b686fafce7e8969e738bd50927692de588213a7e365d0374",
"0xe9d3e3488d6cf8ac28f9beb02eb4782526509220aa7bb93dadd2a1d2ca1c90c6",
"0xbc95570b6b1e937e44faa59a9b2b6eb86434ccd143bf04f3e533fa761f8384d2",
"0xabbd3ccc9caaaab14e974596fac72fe04213fe8b18594097f33455e13c77f53e",
"0x47d64a617b277febf1498fda2bcc1f6938984e2e51b403360b486531de4d76ed",
"0x54292adf625c468208c7b96d36dbe4eb29146e9788bce11957c458bbc3586e4e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
