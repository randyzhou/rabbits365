'use strict'

const ETHDIV = 10 ** 18;
const CHAINID = 56;
//const CHAINID = 97;
//const CHAINID = 99;

let PROVIDER;
if (window.ethereum) {
    PROVIDER = new ethers.providers.Web3Provider(window.ethereum);
    (async function() {
        let network = await PROVIDER.getNetwork();
        if (network['chainId'] != CHAINID) {
            alert('Network is not BSC. Requesting to change network');
//             await window.ethereum.request({
//                 method: "wallet_addEthereumChain",
//                 params: [{
//                     chainId: "99",
// //                    rpcUrls: ["https://bsc-dataseed1.binance.org/"],
//                     rpcUrls: ["http://localhost:8555"],
//                 }],
//             });
        }
    })();

} else {
//    PROVIDER = new ethers.providers.JsonRpcProvider("http://localhost:8555", {
// //    PROVIDER = new ethers.providers.JsonRpcProvider("https://bsc-dataseed1.binance.org/", {
//         name: 'BSC',
//         'chainId': 99
//     });
}

const SIGNER = PROVIDER.getSigner();

const ADRS = {};
const ABIS = {};

ABIS['rabbit'] = [{"inputs":[{"internalType":"uint256","name":"_burnedRatioPerBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Burn","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintUnderlying","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"rescueTokens","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[{"internalType":"address","name":"_who","type":"address"},{"internalType":"bool","name":"_value","type":"bool"}],"name":"setBurnedEX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_burnedRatioPerBlock","type":"uint256"}],"name":"setBurnedRatioPerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferUnderlying","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner_","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"balanceOfUnderlying","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"BalanceToBurned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"burnedEX","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnedRatioPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"internalDecimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REBASER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userLastBurnedBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
ADRS['rabbit'] = "0x4Ce4Fb54129Cd4A8A3Cba7b604D6507eb398E709"; //bsc main
//ADRS['rabbit'] = "0xacD79C12FE93f910d36C2873db87A925d287D653"; //bsc test
//ADRS['rabbit'] = "0x4Ea6758171a82734525DbbaE1dD972c298a91D5d"; //local rabbit
//ADRS['rabbit'] = "0xbEB1f2bE9c7bdfe31872F7edfCdC061ec20B1466"; //local eggs

ABIS['chef'] = [{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_account","type":"address"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IRABBITToken","name":"_RABBIT","type":"address"},{"internalType":"contract IUniswapPair","name":"_RABBITLp","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"allocPoint","type":"uint256"},{"indexed":true,"internalType":"contract IERC20","name":"lpToken","type":"address"}],"name":"LogPoolAddition","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogRewardPerBlock","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lockDuration","type":"uint256"}],"name":"LogSetLockDuration","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"allocPoint","type":"uint256"}],"name":"LogSetPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lpSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"accRewardPerShare","type":"uint256"}],"name":"LogUpdatePool","type":"event"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_lockDuration","type":"uint256"}],"name":"setLockDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_new","type":"uint256"}],"name":"setRewardPerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"}],"name":"updateRewardPerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"fees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lockDurations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accRewardPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RABBIT","outputs":[{"internalType":"contract IRABBITToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RABBITLp","outputs":[{"internalType":"contract IUniswapPair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"lockEndedTimestamp","type":"uint256"}],"stateMutability":"view","type":"function"}];
ADRS['chef'] = "0x686A2f65D9BFD2B6715bFDd8455c1084D5D64d5f"; //main
//ADRS['chef'] = "0xD50CA1A1a34E870548E3f272f38acBe4c40e58a2"; //test
//ADRS['chef'] = "0x37C7774cc2a6623a080AeC4643444a4D64f03DFb"; // local rabbit chef
//ADRS['chef'] = "0x032c4BF852823e5209818C00A400E96190A69796"; // local egg chef

ABIS['pair'] = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
ADRS['pair'] = '0x676d21ea629225b77a3a1aa4feb20e3378a832ae'; //bsc main pancakelp
//ADRS['pair'] = '0xBcD163EE8adF9753067724422715Cf8D2a802063'; //bsc test pancakelp
//ADRS['pair'] = '0xa1e1d28063eCE54DCe91b3ad0624E73D46bf6056'; //local lp rabbitlp
//ADRS['pair'] = '0xe3Dcd1E97007fb4d2347Eaf724c670E8DE1bB038'; //local lp eggslp

ABIS['factory'] = ["function getPair(address tokenA, address tokenB) view returns (address pair)",];
ADRS['factory'] = "0xca143ce32fe78f1f7019d7d551a6402fc5350c73 "; //bsc main pancake
//ADRS['factory'] = "0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc"; //bsc test
//ADRS['factory'] = "0xCc6cfC3F8df539bEf9a1f45e75A2f56c0C549807"; //local

ABIS['router'] = ["function getAmountsOut(uint, address[]) view returns (uint[])","function swapExactETHForTokens(uint, address[], address, uint) payable returns (uint[])",];
ADRS['router'] = "0x10ed43c718714eb63d5aa57b78b54704e256024e"; //bsc main pancake
//ADRS['router'] = "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3"; //bsc test
//ADRS['router'] = "0xaa4dD75054c8f7C0bf4B17189C1e90658970b0B1"; //local

ABIS['usdt'] = ["function name() view returns (string)","function symbol() view returns (string)","function totalSupply() view returns (uint256)","function balanceOf(address) view returns (uint)","function transfer(address to, uint amount)","event Transfer(address indexed from, address indexed to, uint amount)",];
ADRS['usdt'] = "0x55d398326f99059ff775485246999027b3197955"; // bsc main
//ADRS['usdt'] = "0x41717c1dCe909422E521707f5301C902bB07D9a8"; //bsc test
//ADRS['usdt'] = "0xe277E57D55af83D0076A1fA92cE97CB868e74028"; // local


const CONTS = {};
const SIGNS = {};
for (let name in ABIS) {
    CONTS[name] = new ethers.Contract(ADRS[name], ABIS[name], PROVIDER);
    SIGNS[name] = CONTS[name].connect(SIGNER);
}

const STARTBLOCK = 16282771;

let CURBLOCK;
(async () => {
    CURBLOCK = await PROVIDER.getBlockNumber();
})();

////////////////////////////////// base
function loadJS(url,callback){
  try{
    //if($) $("#netloading").show();
    let head = document.getElementsByTagName('head');
    if(head&&head.length){
      head = head[0];
    }else{
      head = document.body;
    }
    let script = document.createElement('script');
    script.src = url;
    script.type = "text/javascript";
    head.appendChild(script);
    script.onload = script.onreadystatechange = function(){
        if ((!this.readyState) || this.readyState == "complete" || this.readyState == "loaded" ){
          if(callback){
            callback('ok');
          }
      }
    }
  }catch(e){
    //if($) $("#netloading").html(e).show();
    alert("程序错误，点击刷新");
  }
}

function INT(n) {
    return parseInt(n);
}

function ethInt (value) {
    return ethers.utils.formatEther(value);
}
function STR(s) {
    return String(s);
}

function ROUND(v, n = 0) {
    return v.toFixed(n);
}

function BNB(value, n = 4) {
    value = INT(value);
    return ROUND(value / ETHDIV, n);
}

function WRAP(v) {
    return "[" + v + "]";
}

function COMMA(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function SHORTADR(adr) {
    return adr.slice(0, 6) + '..' + adr.slice(-4);;
}

function KEYS(dict) {
    return Object.keys(dict);
}

function ADELAY(milSec) {
    return new Promise(r => setTimeout(r, milSec));
}

function DELAY(milSec) {
    var start = new Date().getTime();
    var end = 0;
    while ((end - start) < milSec) {
        end = new Date().getTime();
    }
}

///////////////////////////////// html

function HREF(link, txt) {
    return `<a href="${link}">${txt}</a>`;
}


function makeElem(elemType, elemId = null, elemClass = null) {
    let elem = document.createElement(elemType);
    if (elemId) {
        elem.setAttribute('id', elemId);
    }
    if (elemClass) {
        elem.setAttribute('class', elemClass);
    }

    return elem;
}
let nullDiv = makeElem('div', 'NULL', null);
nullDiv.style.width = '1px';
nullDiv.style.display = 'none';
document.body.append(nullDiv);

function select (el, all = false) {
    if (!el) return;
    el = el.trim();
    let elms = [...document.querySelectorAll(el)];
    if (elms.length == 0) {
        elms = [document.querySelector('#NULL')]; // how to erase inner?
    }

    if (all) {
        return elms;
    }

    return elms[0];
}

function displayText(el, text) {
    let els = select(el, true);
    if (els == null) {
        return;
    }

    for (var idx = 0; idx < els.length; idx++) {
        els[idx].innerHTML = text;
    }
}



function setCookie(name, value, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}




function copy(value) {
    const input = document.createElement('textarea');
    input.value = value;
    document.body.appendChild(input);

    var isiOSDevice = navigator.userAgent.match(/ipad|iphone/i);

    if (isiOSDevice) {

        var editable = input.contentEditable;
        var readOnly = input.readOnly;

        input.contentEditable = true;
        input.readOnly = false;

        var range = document.createRange();
        range.selectNodeContents(input);

        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        input.setSelectionRange(0, 999999);
        input.contentEditable = editable;
        input.readOnly = readOnly;

    } else {
        // document.body.appendChild(input);
        input.select();

    }

    document.execCommand('copy');
    //if (!isiOSDevice) {
    document.body.removeChild(input);
    //}
}

function swapComma(id, isOn) {
    var $input = $("#" + id);

    if (isOn == false) {
        $input.off("keyup");
        return;
    }

    $input.on("keyup", function(event) {

        // 1.
        var selection = window.getSelection().toString();
        if (selection !== '') {
            return;
        }

        // 2.
        if ($.inArray(event.keyCode, [38, 40, 37, 39]) !== -1) {
            return;
        }

        // 3
        var $this = $(this);
        var input = $this.val();

        // 4
        var input = input.replace(/[\D\s\._\-]+/g, "");

        // 5
        input = input ? parseInt(input, 10) : 0;

        // 6
        $this.val(function() {
            return (input === 0) ? "" : input.toLocaleString("en-US");
        });

    });
}


let inputHandlerBuy = function(e) {
    (async function() {
        valueIn = e.target.value;
        valueIn = valueIn.replace(/,/g, '');
        result = select('#buy-output');
        if (valueIn == 0) {
            result.value = 0;
            return;
        }

        valueIn = ethers.utils.parseEther(valueIn);
        valueOut = valueIn.mul(3330000);

        valueOut_ = ethers.utils.formatEther(valueOut);
        valueOut_ = parseInt(valueOut_);
        valueOut_ = numberWithCommas(valueOut_);
        result.value = valueOut_;

    })();
}




///////////////////////////////// rabbit

function BSC(type, txt) {
    return `https://bscscan.com/${type}/${txt}`;
}


function BIG(s, decimals = 18) {
    if (decimals == 18) {
        return ethers.utils.parseEther(s);
    } else {
        return ethers.utils.parseUnits(s, decimals);
    }
}

function ETH(big, decimals = 18) {
    if (decimals == 18) {
        return ethers.utils.formatEther(big);
    } else {
        return ethers.utils.formatUnits(big, decimals);
    }
}



function ADR(address) {
    let checksumAdr;
    try {
        checksumAdr = ethers.utils.getAddress(address);
    } catch (error) {
        alert('Wrong Format Address: [' + address + ']');

        return '';
    }
    return checksumAdr;
}




async function getBalance(adr) {
    let balance = await PROVIDER.getBalance(adr);

    return balance;
}

async function getPrice() {
    let r = await CONTS[`pair`].getReserves();
    let t0 = await CONTS[`pair`].token0();
    let usdt = r[0];
    let rabbit = r[1];

    if (t0.toLowerCase() != ADRS['usdt'].toLowerCase()) {
        usdt = r[1];
        rabbit = r[0];
    }
    if (rabbit <= 0) return 0;
    let usdtRabbitPrice = usdt / rabbit;
    return (usdtRabbitPrice);
}


let CURADR = null;
async function getCurAdr () {
    try {
        CURADR = await SIGNER.getAddress();
    } catch (err) {
        console.log('not connected yet');
        CURADR = null;
    }
}



function displayAccountInformation() {
    let shortAdrStr = SHORTADR(CURADR);

    displayText('.connect-wallet', shortAdrStr);

    getBalance(CURADR)
        .then((res) => {
            displayText('#balance-number', BNB(res, 4));
        });

    return;
}



async function handleAccountsChanged(accounts) {
    if (accounts.length == 0) {
        displayText("connectResult", 'Please Connect Metamask');
        return;
    }

    if (accounts.length == 0) {
        console.log('no acount');
        CURADR = null;
        return;
    }
    CURADR = ADR(accounts[0]);
    displayAccountInformation();
}

async function conn(func = null, popup = false) {
    try {
        /* CURADR = await PROVIDER.send("eth_requestAccounts", []) */
        ;
        let accounts = await ethereum.request({method: 'eth_requestAccounts'}); // eth_requestAccounts
        await handleAccountsChanged(accounts);
        await doAfterConnect();
        if (func != null) {
            await func();
        }
      
        location.reload();
        console.log(accounts)
    } catch (err) {
        if (err == 'ReferenceError: ethereum is not defined') {
            alert('Use Dapp to connect wallet!');
            return;
        }

        console.log(err);
        if ('message' in err) {
            err = err['message'];
        }

        if (popup) {
            alert(JSON.stringify(err));
        }
    }
}

async function doAfterConnect() { // dummy
}

function handleChainChanged(_chainId) {
    // Reload the page
    window.location.reload();
}





////////////////////////////////// tx

async function ERR(err) {
    let result = err;

    if (!('code' in err)) {
        console.log('no code', err);
        return result;
    }

    if (err['code'] == -32603) {
        if (!('data' in err)) {
            console.log('no data', err);
            return result;
        }

        let data = err['data'];
        if (!('code' in data)) {
            console.log('no code data', err);
            return result;
        }

        if (data['code'] == 3) {
            msg = data['message'];
            result = msg;
            return result;
        }

        if (data['code'] == -32000) {
            msg = data['message'];
            result = msg;
            return result;
        }
    }

    return result;
}

async function SIGN(name, msg, bin = false) {
    if (bin == true) {
        msg = ethers.utils.arrayify(msg);
    }
    return await SIGNS[name].signMessage(msg);
}


async function SEND_ETH(from = ADRS["fund"], to = ADRS["fund"], value = '0.0') {
    const data = {
        from: from,
        to: to,
        value: BIG(value),
        /* nonce: window.ethersProvider.getTransactionCount(send_account, "latest"),
            gasLimit: ethers.utils.hexlify(gas_limit), // 100000
            gasPrice: gas_price, */
    };

    try {
        let result = await SIGNER.sendTransaction(data);
        console.log('result', result);
        return [false, result];
    } catch (err) {
        err = await ERR(err);
        return [true, err];
    }
}

async function READ_TX(name, method, args, from = "0xe7F0704b198585B8777abe859C3126f57eB8C989") {
    const overrides = {
        from: from,
    };

    try {
        let result = await CONTS[name][method](...args, overrides);
        console.log('result', result);
        return [false, result];
    } catch (err) {
        err = await ERR(err);
        return [true, err];
    }

}

async function GAS(name, method, args, value = null) {
    let overrides = {};
    if (value != null) {
        overrides['value'] = BIG(value);
    }


    let result;
    try {
        result = await SIGNS[name].estimateGas[method](...args, overrides);
        console.log('result', result);
        return [false, result];
    } catch (err) {
        result = await ERR(err);
        return [true, result];
    };
}

async function SEND_TX(name, method, args, value = null, check = false) {
    let overrides = {};
    if (value != null) {
        overrides['value'] = BIG(value);
    }

    if (check == true) {
        let [res, data] = await GAS(name, method, args, value);
        if (res == true) {
            console.log(res);
            return [true, data];
        }

        // use gas result
        console.log('gas', res, INT(data));
        overrides['gasLimit'] = INT(data * 1.3);
    }

    try {
        let result;
        result = await SIGNS[name][method](...args, overrides);
        console.log('hash', result['hash']);
        console.log('result', result);
//        return [false, result];

        // if (wait == true) {
        let txResult = await result.wait();
        alert("Transaction succeed and refresh the page.");
        location.reload();
        //   console.log('txResult', txResult);
        //   return [ false, txResult ];
        //   // event, eventSignature
        // } else {

        // }
        /* console.log(tx.hash); */
        // wait()
        // receipt.events
    } catch (err) {
        err = await ERR(err);
        console.log(err);
        alert("Transaction failed，please try again!");
        return [true, err];
    }
}


let buyTxhashData;
async function privateBuy() {
    let buyAmount = select('#buy-input').value;
    let {
        res,
        data
    } = await SEND_ETH(CURADR, ADRS['fund'], buyAmount);
    if (res == true) {
        // err
        return [true, data];
    }

    let buyResult = select('#buy-result');
    buyResult.innerHTML = 'Success';
    let buyTxhash = select('#buy-txhash');
    buyTxhash.innerHTML = HREF(BSC('tx', data.hash), SHORTADR(data.hash));
    buyTxhashData = data.hash;
}


/* 
await CONTS[name].balanceOf(adr)
 */

/* SIGNS[name].transfer(adr, balance); */

/* CONTS[name].on("Transfer", (from, to, amount, event) => {
  console.log(`${ from } sent ${ formatEther(amount) } to ${ to}`);
      // The event object contains the verbatim log data, the
    // EventFragment and functions to fetch the block,
    // transaction and receipt and event functions
})
 */
// filter






// while (true) {
// 	if (isScriptLoaded == SCRIPTS.length) {
//     break;
//   }

//   DELAY(100);
// }



(async () => {
    if (window.ethereum) {
        ethereum.on('chainChanged', handleChainChanged);
        ethereum.on('accountsChanged', handleAccountsChanged);
    }
})();