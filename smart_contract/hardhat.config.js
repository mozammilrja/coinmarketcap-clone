require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

module.exports = {
  solidity: "0.8.16",
  networks: {
    rinkeby: {
      url: process.env.SPEEDY_NODE,
      accounts: [process.env.ACCOUNT],
    },
  },
};
