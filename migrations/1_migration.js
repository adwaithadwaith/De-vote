const MultiPostVoting = artifacts.require('../contracts/MultiPostVoting.sol')
const deployedAddress = '0x5c4b1c4E6B46d397af3bee1E879072396cE6b904'
module.exports = function (deployer){
    deployer.deploy(MultiPostVoting)
}