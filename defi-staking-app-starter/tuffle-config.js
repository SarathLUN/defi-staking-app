require('babel-register');
require('babel-polyfill');

module.exports = {
    networks : {
        development: {
            host:'localhost',
            port:'7545',
            network_id: '*' //connect to any network
        },
    },
    contract_directory: './src/contracts/',
    contract_build_directory: './src/truffle_abis/',
    compiler:{
        solc: {
            version: '^0.5.0',
            optimizer: {
                enabled: true,
                runs: 200
            },
        },
    },
    
}