require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */

//const INFURA_API_KEY = "KEY";
const SEPOLIA_PRIVATE_KEY = "a7344b5fdf865f3d28191d14dd2785313e5f3b7d910d396121ed2d0cb5b92823";

module.exports = {
  solidity: "0.8.24",
  networks:{
    sepolia:{
      url:'https://eth-sepolia.g.alchemy.com/v2/4g2omNzkeIxc6EqZzALwesrApKCZWBcj',
      accounts:[SEPOLIA_PRIVATE_KEY]
    }
  }
};
