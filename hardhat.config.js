/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-waffle")

const ALCHEMY_API_KEY = "oTHD4xdvb5WBIM-NGYFIcm5PvEGnTx1V";
const GOERLI_PRIVATE_KEY = "2d215bbdb3d88d49ef2f343b0b6bc1d41155d05ae7ae661883610b21e7c8071a";



module.exports = {
  solidity: "0.8.9",

  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${GOERLI_PRIVATE_KEY}`]
    }
  }

};

