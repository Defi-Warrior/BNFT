/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {},
        bsctest: {
            url: "https://data-seed-prebsc-2-s3.binance.org:8545/",
            accounts: [process.env.PRIVATE_KEY],
        },
        bscmainnet: {
            url: "https://bsc-dataseed1.defibit.io/",
            accounts: [process.env.PRIVATE_KEY],
        },
    },
    solidity: {
        version: "0.8.1",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts",
    },
    mocha: {
        timeout: 20000,
    },
};
