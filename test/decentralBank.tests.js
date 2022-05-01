const Tether = artifacts.require("Tether");
const Reward = artifacts.require("Reward");
const DecentralBank = artifacts.require("DecentralBank");

require('chai')
.use(require('chai-as-promised'))
.should();

contract('DecentralBank', ([owner, customer]) => {
    let tether, rwd, decentralBank;
    function tokens(number){
        return web3.utils.toWei(number, 'ether');
    }

    before(async () => {
        // load contracts
        tether = await Tether.new();
        rwd = await Reward.new();
        decentralBank = await DecentralBank.new(rwd.address, tether.address);
        // transfer all token to DecentralBank (1 Million)
        await rwd.transfer(decentralBank.address, tokens('1000000'));
        // transfer 100 eth to customer
        await tether.transfer(customer, tokens('100'),{from:owner})

    });
    describe('Testing Tether token', async () => {
        it('the name matched successful', async () => {
            let tether = await Tether.new();
            const name = await tether.name();
            assert.equal(name,'Tether');
        });
    });

    describe('Testing Reward token', async () => {
        it('the name matched successful', async () => {
            let rwd = await Reward.new();
            const name = await rwd.name();
            assert.equal(name,'Reward');
        });
    });
});