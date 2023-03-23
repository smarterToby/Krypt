require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: "0.8.0",
    networks: {
        goerli: {
            url: "https://eth-goerli.g.alchemy.com/v2/QIKOGGLiQJ53N6gqIjayWtmvFkxfRGOC",
            accounts: [
                '99adb67bb47f15fb1ce4e607bf57b148dee39a524bf6891dd6b98524b2510527'
            ]
        }
    }
}