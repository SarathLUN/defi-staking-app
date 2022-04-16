const Tether = artifacts.require("Tether");
const Reward = artifacts.require("Reward");
const DecentralBank = artifacts.require("DecentralBank");

module.exports = async function(deployer, network, accounts){
    // deploy Tether contract
    await deployer.deploy(Tether)
    const tether = await Tether.deployed()
    // deploy reward contract
    await deployer.deploy(Reward)
    const rwd = await Reward.deployed()

    // deploy DecentralBank contract, and because the construct require 2 more params
    await deployer.deploy(DecentralBank, rwd.address, tether.address)
    const decentralBank = await DecentralBank.deployed()

    // transfer all reward token to decentral bank
    await rwd.transfer(decentralBank.address,'1000000000000000000000000')

    // distribute 100 tether to investor once they registering
    // in this example, we will take the 2nd account of Ganache as 1 investor
    await tether.transfer(accounts[1],'100000000000000000000')
};