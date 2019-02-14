

var KyberNetworkProxyAddress = "";
var NetworkProxyInstance = "";
var KNC_ADDRESS = "";
var ETH_ADDRESS = "";
var OrderBookReserve_ADDRESS = "";
var OrderbookContractReserve_ADDRESS = "";
var KyberNetwork_ADDRESS = "";
var Medianizer_ADDRESS = "";
var KNCInstance = "";
var OrderBookReserveInstance = "";
var OrderbookContractReserveInstance = "";
var KyberNetworkInstance = "";
var KNC_ABI = "";
var OrderbookReserve_ABI = "";
var OrderbookContractReserve_ABI = "";
var KyberNetwork_ABI = "";
var userWallet = "";
var provider = "";
var web3 = "";
var gasPrice = "";

var walletAddress = "";
var ERC20_ABI = "";
var Medianizer_ABI = "";
var provider = "";

window.setupRopsten = async function(){

	provider = web3.currentProvider;
	await web3.eth.getAccounts(function(error, accounts) {
			console.log(accounts[0]);
			userWallet = accounts[0];
	});

	gasPrice = web3.utils.toWei(new BN(10), 'gwei');

	const KyberNetworkAddress = '0x91a502C678605fbCe581eae053319747482276b9';
	const KyberNetworkProxyABI = [{"constant":false,"inputs":[{"name":"alerter","type":"address"}],"name":"removeAlerter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x01a12fd3"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x26782247"},{"constant":true,"inputs":[],"name":"getOperators","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x27a099d8"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"},{"name":"sendTo","type":"address"}],"name":"withdrawToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x3ccdbb28"},{"constant":false,"inputs":[{"name":"newAlerter","type":"address"}],"name":"addAlerter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x408ee7fe"},{"constant":true,"inputs":[],"name":"kyberNetworkContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x4f61ff8b"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"transferAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x75829def"},{"constant":false,"inputs":[],"name":"claimAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x77f50f97"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"transferAdminQuickly","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x7acc8678"},{"constant":true,"inputs":[],"name":"getAlerters","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x7c423f54"},{"constant":false,"inputs":[{"name":"newOperator","type":"address"}],"name":"addOperator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x9870d7fe"},{"constant":false,"inputs":[{"name":"operator","type":"address"}],"name":"removeOperator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xac8a584a"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"sendTo","type":"address"}],"name":"withdrawEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xce56c454"},{"constant":true,"inputs":[{"name":"token","type":"address"},{"name":"user","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xd4fac45d"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xf851a440"},{"inputs":[{"name":"_admin","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"trader","type":"address"},{"indexed":false,"name":"src","type":"address"},{"indexed":false,"name":"dest","type":"address"},{"indexed":false,"name":"actualSrcAmount","type":"uint256"},{"indexed":false,"name":"actualDestAmount","type":"uint256"}],"name":"ExecuteTrade","type":"event","signature":"0x1849bd6a030a1bca28b83437fd3de96f3d27a5d172fa7e9c78e7b61468928a39"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newNetworkContract","type":"address"},{"indexed":false,"name":"oldNetworkContract","type":"address"}],"name":"KyberNetworkSet","type":"event","signature":"0x8936e1f096bf0a8c9df862b3d1d5b82774cad78116200175f00b5b7ba3010b02"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"sendTo","type":"address"}],"name":"TokenWithdraw","type":"event","signature":"0x72cb8a894ddb372ceec3d2a7648d86f17d5a15caae0e986c53109b8a9a9385e6"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"sendTo","type":"address"}],"name":"EtherWithdraw","type":"event","signature":"0xec47e7ed86c86774d1a72c19f35c639911393fe7c1a34031fdbd260890da90de"},{"anonymous":false,"inputs":[{"indexed":false,"name":"pendingAdmin","type":"address"}],"name":"TransferAdminPending","type":"event","signature":"0x3b81caf78fa51ecbc8acb482fd7012a277b428d9b80f9d156e8a54107496cc40"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAdmin","type":"address"},{"indexed":false,"name":"previousAdmin","type":"address"}],"name":"AdminClaimed","type":"event","signature":"0x65da1cfc2c2e81576ad96afb24a581f8e109b7a403b35cbd3243a1c99efdb9ed"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAlerter","type":"address"},{"indexed":false,"name":"isAdd","type":"bool"}],"name":"AlerterAdded","type":"event","signature":"0x5611bf3e417d124f97bf2c788843ea8bb502b66079fbee02158ef30b172cb762"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newOperator","type":"address"},{"indexed":false,"name":"isAdd","type":"bool"}],"name":"OperatorAdded","type":"event","signature":"0x091a7a4b85135fdd7e8dbc18b12fabe5cc191ea867aa3c2e1a24a102af61d58b"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"dest","type":"address"},{"name":"destAddress","type":"address"},{"name":"maxDestAmount","type":"uint256"},{"name":"minConversionRate","type":"uint256"},{"name":"walletId","type":"address"}],"name":"trade","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function","signature":"0xcb3c28c7"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"dest","type":"address"},{"name":"minConversionRate","type":"uint256"}],"name":"swapTokenToToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x7409e2eb"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"minConversionRate","type":"uint256"}],"name":"swapEtherToToken","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function","signature":"0x7a2a0456"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"minConversionRate","type":"uint256"}],"name":"swapTokenToEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x3bba21dc"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"dest","type":"address"},{"name":"destAddress","type":"address"},{"name":"maxDestAmount","type":"uint256"},{"name":"minConversionRate","type":"uint256"},{"name":"walletId","type":"address"},{"name":"hint","type":"bytes"}],"name":"tradeWithHint","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function","signature":"0x29589f61"},{"constant":false,"inputs":[{"name":"_kyberNetworkContract","type":"address"}],"name":"setKyberNetworkContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xabd188a8"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"dest","type":"address"},{"name":"srcQty","type":"uint256"}],"name":"getExpectedRate","outputs":[{"name":"expectedRate","type":"uint256"},{"name":"slippageRate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x809a9e55"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getUserCapInWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x6432679f"},{"constant":true,"inputs":[{"name":"user","type":"address"},{"name":"token","type":"address"}],"name":"getUserCapInTokenWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8eaaeecf"},{"constant":true,"inputs":[],"name":"maxGasPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3de39c11"},{"constant":true,"inputs":[],"name":"enabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x238dafe0"},{"constant":true,"inputs":[{"name":"field","type":"bytes32"}],"name":"info","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xb64a097e"}];
	KyberNetworkProxyAddress = '0x818E6FECD516Ecc3849DAf6845e3EC868087B755';
	NetworkProxyInstance = new web3.eth.Contract(KyberNetworkProxyABI, KyberNetworkProxyAddress);

	KNC_ABI = [{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"burner","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]

	 OrderbookContractReserve_ABI = [{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"reserveListingStage","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"}],"name":"listOrderbookContract","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"}],"name":"addOrderbookContract","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kyberNetworkContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxOrdersPerTrade","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"kncToken","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"hintReserveIndex","type":"uint256"}],"name":"unlistOrderbookContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"orderFactoryContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ORDERBOOK_BURN_FEE_BPS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"}],"name":"initOrderbookContract","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"reserves","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minNewOrderValueUsd","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"}],"name":"getOrderbookListingStage","outputs":[{"name":"","type":"address"},{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"medianizerContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"kyber","type":"address"},{"name":"factory","type":"address"},{"name":"medianizer","type":"address"},{"name":"knc","type":"address"},{"name":"unsupportedTokens","type":"address[]"},{"name":"maxOrders","type":"uint256"},{"name":"minOrderValueUsd","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"stage","type":"uint8"}],"name":"TokenOrderbookListingStage","type":"event"}]

	OrderbookReserve_ABI = [{"constant":true,"inputs":[],"name":"NUM_ORDERS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"srcAmount","type":"uint128"},{"name":"dstAmount","type":"uint128"},{"name":"hintPrevOrder","type":"uint32"}],"name":"submitEthToTokenOrderWHint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"weiAmount","type":"uint256"}],"name":"calcBurnAmountFromFeeBurner","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint32"},{"name":"srcAmount","type":"uint128"},{"name":"dstAmount","type":"uint128"}],"name":"getEthToTokenUpdateOrderHint","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"makerKnc","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"makerOrdersTokenToEth","outputs":[{"name":"firstOrderId","type":"uint32"},{"name":"takenBitmap","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"maker","type":"address"},{"name":"amount","type":"uint256"}],"name":"depositToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kncPerEthBaseRatePrecision","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdrawEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"srcAmount","type":"uint128"},{"name":"dstAmount","type":"uint128"}],"name":"getTokenToEthAddOrderHint","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BURN_TO_STAKE_FACTOR","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"isEthToToken","type":"bool[]"},{"name":"srcAmount","type":"uint128[]"},{"name":"dstAmount","type":"uint128[]"},{"name":"hintPrevOrder","type":"uint32[]"},{"name":"isAfterPrevOrder","type":"bool[]"}],"name":"addOrderBatch","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"maker","type":"address"}],"name":"depositEther","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"MIN_REMAINING_ORDER_RATIO","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"makerOrdersEthToToken","outputs":[{"name":"firstOrderId","type":"uint32"},{"name":"takenBitmap","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint32"},{"name":"newSrcAmount","type":"uint128"},{"name":"newDstAmount","type":"uint128"},{"name":"hintPrevOrder","type":"uint32"}],"name":"updateEthToTokenOrderWHint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint32"}],"name":"cancelTokenToEthOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"maker","type":"address"}],"name":"getEthToTokenMakerOrderIds","outputs":[{"name":"orderList","type":"uint32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTokenToEthOrderList","outputs":[{"name":"orderList","type":"uint32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"srcAmount","type":"uint128"},{"name":"dstAmount","type":"uint128"}],"name":"getEthToTokenAddOrderHint","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_USD_PER_ETH","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenToEthList","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contracts","outputs":[{"name":"kncToken","type":"address"},{"name":"token","type":"address"},{"name":"feeBurner","type":"address"},{"name":"kyberNetwork","type":"address"},{"name":"medianizer","type":"address"},{"name":"orderListFactory","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint32"}],"name":"getTokenToEthOrder","outputs":[{"name":"_maker","type":"address"},{"name":"_srcAmount","type":"uint128"},{"name":"_dstAmount","type":"uint128"},{"name":"_prevId","type":"uint32"},{"name":"_nextId","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"srcToken","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"dstToken","type":"address"},{"name":"dstAddress","type":"address"},{"name":"conversionRate","type":"uint256"},{"name":"validate","type":"bool"}],"name":"trade","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"srcAmount","type":"uint128"},{"name":"dstAmount","type":"uint128"}],"name":"submitTokenToEthOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"srcAmount","type":"uint128"},{"name":"dstAmount","type":"uint128"}],"name":"submitEthToTokenOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_BURN_FEE_BPS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"srcQty","type":"uint256"},{"name":"blockNumber","type":"uint256"}],"name":"getConversionRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"setKncPerEthBaseRate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"weiAmount","type":"uint256"}],"name":"calcKncStake","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint32"},{"name":"newSrcAmount","type":"uint128"},{"name":"newDstAmount","type":"uint128"}],"name":"updateEthToTokenOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"weiAmount","type":"uint256"}],"name":"calcBurnAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"limits","outputs":[{"name":"minNewOrderSizeUsd","type":"uint256"},{"name":"maxOrdersPerTrade","type":"uint256"},{"name":"minNewOrderSizeWei","type":"uint256"},{"name":"minOrderSizeWei","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"maker","type":"address"}],"name":"makerUnlockedKnc","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint32"},{"name":"srcAmount","type":"uint128"},{"name":"dstAmount","type":"uint128"}],"name":"getTokenToEthUpdateOrderHint","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint32"},{"name":"newSrcAmount","type":"uint128"},{"name":"newDstAmount","type":"uint128"},{"name":"hintPrevOrder","type":"uint32"}],"name":"updateTokenToEthOrderWHint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdrawKncFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint32"},{"name":"newSrcAmount","type":"uint128"},{"name":"newDstAmount","type":"uint128"}],"name":"updateTokenToEthOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"srcAmount","type":"uint128"},{"name":"dstAmount","type":"uint128"},{"name":"hintPrevOrder","type":"uint32"}],"name":"submitTokenToEthOrderWHint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"setMinOrderSizeEth","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"maker","type":"address"}],"name":"getTokenToEthMakerOrderIds","outputs":[{"name":"orderList","type":"uint32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"maker","type":"address"}],"name":"makerRequiredKncStake","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint32"}],"name":"getEthToTokenOrder","outputs":[{"name":"_maker","type":"address"},{"name":"_srcAmount","type":"uint128"},{"name":"_dstAmount","type":"uint128"},{"name":"_prevId","type":"uint32"},{"name":"_nextId","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"HEAD_ID","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"makerTotalOrdersWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"maker","type":"address"},{"name":"amount","type":"uint256"}],"name":"depositKncForFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"makerFunds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"makerBurnFeeBps","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TAIL_ID","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"},{"name":"user","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"init","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kncRateBlocksTrade","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"isEthToToken","type":"bool[]"},{"name":"orderId","type":"uint32[]"},{"name":"newSrcAmount","type":"uint128[]"},{"name":"newDstAmount","type":"uint128[]"},{"name":"hintPrevOrder","type":"uint32[]"}],"name":"updateOrderBatch","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getEthToTokenOrderList","outputs":[{"name":"orderList","type":"uint32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint32"}],"name":"cancelEthToTokenOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ethToTokenList","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"knc","type":"address"},{"name":"reserveToken","type":"address"},{"name":"burner","type":"address"},{"name":"network","type":"address"},{"name":"medianizer","type":"address"},{"name":"factory","type":"address"},{"name":"minNewOrderUsd","type":"uint256"},{"name":"maxOrdersPerTrade","type":"uint256"},{"name":"burnFeeBps","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"srcToken","type":"address"},{"indexed":false,"name":"dstToken","type":"address"},{"indexed":false,"name":"srcAmount","type":"uint256"},{"indexed":false,"name":"dstAmount","type":"uint256"}],"name":"OrderbookReserveTrade","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"maker","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"TokenDeposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"maker","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"EtherDeposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"maker","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"KncFeeDeposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"maker","type":"address"},{"indexed":false,"name":"orderId","type":"uint32"},{"indexed":false,"name":"isEthToToken","type":"bool"},{"indexed":false,"name":"srcAmount","type":"uint128"},{"indexed":false,"name":"dstAmount","type":"uint128"},{"indexed":false,"name":"addedWithHint","type":"bool"}],"name":"NewLimitOrder","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"maker","type":"address"},{"indexed":false,"name":"isEthToToken","type":"bool"},{"indexed":false,"name":"orderId","type":"uint256"},{"indexed":false,"name":"srcAmount","type":"uint128"},{"indexed":false,"name":"dstAmount","type":"uint128"},{"indexed":false,"name":"updatedWithHint","type":"bool"}],"name":"OrderUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"maker","type":"address"},{"indexed":false,"name":"isEthToToken","type":"bool"},{"indexed":false,"name":"orderId","type":"uint32"},{"indexed":false,"name":"srcAmount","type":"uint128"},{"indexed":false,"name":"dstAmount","type":"uint256"}],"name":"OrderCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"maker","type":"address"},{"indexed":false,"name":"orderId","type":"uint32"},{"indexed":false,"name":"isEthToToken","type":"bool"}],"name":"FullOrderTaken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"maker","type":"address"},{"indexed":false,"name":"orderId","type":"uint32"},{"indexed":false,"name":"isEthToToken","type":"bool"},{"indexed":false,"name":"isRemoved","type":"bool"}],"name":"PartialOrderTaken","type":"event"}]

	KyberNetwork_ABI = [{"constant":false,"inputs":[{"name":"alerter","type":"address"}],"name":"removeAlerter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"trader","type":"address"},{"name":"src","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"dest","type":"address"},{"name":"destAddress","type":"address"},{"name":"maxDestAmount","type":"uint256"},{"name":"minConversionRate","type":"uint256"},{"name":"walletId","type":"address"},{"name":"hint","type":"bytes"}],"name":"tradeWithHint","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"dest","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"usePermissionless","type":"bool"}],"name":"searchBestRate","outputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"infoFields","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"feeBurner","type":"address"}],"name":"setFeeBurner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"dest","type":"address"},{"name":"srcAmount","type":"uint256"}],"name":"findBestRateOnlyPermission","outputs":[{"name":"obsolete","type":"uint256"},{"name":"rate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"enabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"reserve","type":"address"},{"name":"index","type":"uint256"}],"name":"removeReserve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOperators","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"reservesPerTokenSrc","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"whiteList","type":"address"}],"name":"setWhiteList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"},{"name":"sendTo","type":"address"}],"name":"withdrawToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxGasPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newAlerter","type":"address"}],"name":"addAlerter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"negligibleRateDiff","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"feeBurnerContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"expectedRate","type":"address"}],"name":"setExpectedRate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"expectedRateContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"whiteListContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"field","type":"bytes32"},{"name":"value","type":"uint256"}],"name":"setInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getUserCapInWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"reserveType","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"transferAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_enable","type":"bool"}],"name":"setEnable","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kyberNetworkProxyContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"transferAdminQuickly","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAlerters","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"dest","type":"address"},{"name":"srcQty","type":"uint256"}],"name":"getExpectedRate","outputs":[{"name":"expectedRate","type":"uint256"},{"name":"slippageRate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"reserves","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"dest","type":"address"},{"name":"srcQty","type":"uint256"}],"name":"getExpectedRateOnlyPermission","outputs":[{"name":"expectedRate","type":"uint256"},{"name":"slippageRate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERM_HINT","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"},{"name":"token","type":"address"}],"name":"getUserCapInTokenWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"reservesPerTokenDest","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOperator","type":"address"}],"name":"addOperator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"reserve","type":"address"},{"name":"isPermissionless","type":"bool"}],"name":"addReserve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"operator","type":"address"}],"name":"removeOperator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxGasPriceValue","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"field","type":"bytes32"}],"name":"info","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"dest","type":"address"},{"name":"srcAmount","type":"uint256"}],"name":"findBestRate","outputs":[{"name":"obsolete","type":"uint256"},{"name":"rate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_maxGasPrice","type":"uint256"},{"name":"_negligibleRateDiff","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"PERM_HINT_GET_RATE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"networkProxy","type":"address"}],"name":"setKyberProxy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"sendTo","type":"address"}],"name":"withdrawEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNumReserves","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"},{"name":"user","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"reserve","type":"address"},{"name":"token","type":"address"},{"name":"ethToToken","type":"bool"},{"name":"tokenToEth","type":"bool"},{"name":"add","type":"bool"}],"name":"listPairForReserve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_admin","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"EtherReceival","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"reserve","type":"address"},{"indexed":false,"name":"add","type":"bool"},{"indexed":false,"name":"isPermissionless","type":"bool"}],"name":"AddReserveToNetwork","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"reserve","type":"address"}],"name":"RemoveReserveFromNetwork","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"reserve","type":"address"},{"indexed":false,"name":"src","type":"address"},{"indexed":false,"name":"dest","type":"address"},{"indexed":false,"name":"add","type":"bool"}],"name":"ListReservePairs","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newContract","type":"address"},{"indexed":false,"name":"currentContract","type":"address"}],"name":"WhiteListContractSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newContract","type":"address"},{"indexed":false,"name":"currentContract","type":"address"}],"name":"ExpectedRateContractSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newContract","type":"address"},{"indexed":false,"name":"currentContract","type":"address"}],"name":"FeeBurnerContractSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"maxGasPrice","type":"uint256"},{"indexed":false,"name":"negligibleRateDiff","type":"uint256"}],"name":"KyberNetwrokParamsSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"isEnabled","type":"bool"}],"name":"KyberNetworkSetEnable","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"proxy","type":"address"},{"indexed":false,"name":"sender","type":"address"}],"name":"KyberProxySet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"trader","type":"address"},{"indexed":false,"name":"src","type":"address"},{"indexed":false,"name":"dest","type":"address"},{"indexed":false,"name":"srcAmount","type":"uint256"},{"indexed":false,"name":"dstAmount","type":"uint256"},{"indexed":false,"name":"destAddress","type":"address"},{"indexed":false,"name":"ethWeiValue","type":"uint256"},{"indexed":false,"name":"reserve1","type":"address"},{"indexed":false,"name":"reserve2","type":"address"},{"indexed":false,"name":"hint","type":"bytes"}],"name":"KyberTrade","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"sendTo","type":"address"}],"name":"TokenWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"sendTo","type":"address"}],"name":"EtherWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"pendingAdmin","type":"address"}],"name":"TransferAdminPending","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAdmin","type":"address"},{"indexed":false,"name":"previousAdmin","type":"address"}],"name":"AdminClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAlerter","type":"address"},{"indexed":false,"name":"isAdd","type":"bool"}],"name":"AlerterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newOperator","type":"address"},{"indexed":false,"name":"isAdd","type":"bool"}],"name":"OperatorAdded","type":"event"}]

	ERC20_ABI = [{"constant": true,"inputs": [],"name": "name","outputs": [{"name": "","type": "string"}],"payable": false,"type": "function"},{"constant": true,"inputs": [],"name": "decimals","outputs": [{"name": "","type": "uint8"}],"payable": false,"type": "function"},{"constant": true,"inputs": [{"name": "_owner","type": "address"}],"name": "balanceOf","outputs": [{"name": "balance","type": "uint256"}],"payable": false,"type": "function"},{"constant": true,"inputs": [],"name": "symbol","outputs": [{"name": "","type": "string"}],"payable": false,"type": "function"}]

	Medianizer_ABI = [{"constant":false,"inputs":[{"name":"dollarPerEth","type":"uint256"}],"name":"setEthPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"peek","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"isValid","type":"bool"}],"name":"setValid","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]

	ETH_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
	KNC_ADDRESS = '0x4E470dc7321E84CA96FcAEDD0C8aBCebbAEB68C6';
	Medianizer_ADDRESS = '0xca582805ebb662974862bce7411b1ae939d366aa';
	OrderbookContractReserve_ADDRESS = '0x405A5FAE110c86eb2E5A76809a17FC5Bee2d3CcD';
	KyberNetwork_ADDRESS = '0x3f9a8e219ab1ad42f96b22c294e564b2b48fe636';

	KNCInstance = new web3.eth.Contract(KNC_ABI, KNC_ADDRESS);
	OrderbookContractReserveInstance = new web3.eth.Contract(OrderbookContractReserve_ABI, OrderbookContractReserve_ADDRESS);
	KyberNetworkInstance = new web3.eth.Contract(KyberNetwork_ABI, KyberNetwork_ADDRESS);

	NetworkProxyInstance.setProvider(provider);
	KNCInstance.setProvider(provider);
	OrderbookContractReserveInstance.setProvider(provider);
	KyberNetworkInstance.setProvider(provider);

};

window.setupMainnet = async function(){

	provider = web3.currentProvider;
	await web3.eth.getAccounts(function(error, accounts) {
			userWallet = accounts[0];
	});

	gasPrice = web3.utils.toWei(new BN(10), 'gwei');

	const KyberNetworkAddress = '0x9ae49C0d7F8F9EF4B864e004FE86Ac8294E20950';
	const KyberNetworkProxyABI = [{"constant":false,"inputs":[{"name":"alerter","type":"address"}],"name":"removeAlerter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"enabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOperators","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"dest","type":"address"},{"name":"destAddress","type":"address"},{"name":"maxDestAmount","type":"uint256"},{"name":"minConversionRate","type":"uint256"},{"name":"walletId","type":"address"},{"name":"hint","type":"bytes"}],"name":"tradeWithHint","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"minConversionRate","type":"uint256"}],"name":"swapTokenToEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"},{"name":"sendTo","type":"address"}],"name":"withdrawToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxGasPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newAlerter","type":"address"}],"name":"addAlerter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kyberNetworkContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getUserCapInWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"dest","type":"address"},{"name":"minConversionRate","type":"uint256"}],"name":"swapTokenToToken","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"transferAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"minConversionRate","type":"uint256"}],"name":"swapEtherToToken","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"transferAdminQuickly","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAlerters","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"dest","type":"address"},{"name":"srcQty","type":"uint256"}],"name":"getExpectedRate","outputs":[{"name":"expectedRate","type":"uint256"},{"name":"slippageRate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"},{"name":"token","type":"address"}],"name":"getUserCapInTokenWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOperator","type":"address"}],"name":"addOperator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_kyberNetworkContract","type":"address"}],"name":"setKyberNetworkContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"operator","type":"address"}],"name":"removeOperator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"field","type":"bytes32"}],"name":"info","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"dest","type":"address"},{"name":"destAddress","type":"address"},{"name":"maxDestAmount","type":"uint256"},{"name":"minConversionRate","type":"uint256"},{"name":"walletId","type":"address"}],"name":"trade","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"sendTo","type":"address"}],"name":"withdrawEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"},{"name":"user","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_admin","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"trader","type":"address"},{"indexed":false,"name":"src","type":"address"},{"indexed":false,"name":"dest","type":"address"},{"indexed":false,"name":"actualSrcAmount","type":"uint256"},{"indexed":false,"name":"actualDestAmount","type":"uint256"}],"name":"ExecuteTrade","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newNetworkContract","type":"address"},{"indexed":false,"name":"oldNetworkContract","type":"address"}],"name":"KyberNetworkSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"sendTo","type":"address"}],"name":"TokenWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"sendTo","type":"address"}],"name":"EtherWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"pendingAdmin","type":"address"}],"name":"TransferAdminPending","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAdmin","type":"address"},{"indexed":false,"name":"previousAdmin","type":"address"}],"name":"AdminClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAlerter","type":"address"},{"indexed":false,"name":"isAdd","type":"bool"}],"name":"AlerterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newOperator","type":"address"},{"indexed":false,"name":"isAdd","type":"bool"}],"name":"OperatorAdded","type":"event"}]
	KyberNetworkProxyAddress = '0x818E6FECD516Ecc3849DAf6845e3EC868087B755';
	NetworkProxyInstance = new web3.eth.Contract(KyberNetworkProxyABI, KyberNetworkProxyAddress);

	KNC_ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"saleStartTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokenSaleContract","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"}],"name":"emergencyERC20Drain","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"saleEndTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"tokenTotalAmount","type":"uint256"},{"name":"startTime","type":"uint256"},{"name":"endTime","type":"uint256"},{"name":"admin","type":"address"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_burner","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}]

	 OrderbookContractReserve_ABI = [{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"reserveListingStage","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"}],"name":"listOrderbookContract","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"}],"name":"addOrderbookContract","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kyberNetworkContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxOrdersPerTrade","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"kncToken","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"hintReserveIndex","type":"uint256"}],"name":"unlistOrderbookContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"orderFactoryContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ORDERBOOK_BURN_FEE_BPS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"}],"name":"initOrderbookContract","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"reserves","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minNewOrderValueUsd","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"}],"name":"getOrderbookListingStage","outputs":[{"name":"","type":"address"},{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"medianizerContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"kyber","type":"address"},{"name":"factory","type":"address"},{"name":"medianizer","type":"address"},{"name":"knc","type":"address"},{"name":"unsupportedTokens","type":"address[]"},{"name":"maxOrders","type":"uint256"},{"name":"minOrderValueUsd","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"stage","type":"uint8"}],"name":"TokenOrderbookListingStage","type":"event"}]

	OrderbookReserve_ABI = [{"constant":true,"inputs":[],"name":"NUM_ORDERS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"srcAmount","type":"uint128"},{"name":"dstAmount","type":"uint128"},{"name":"hintPrevOrder","type":"uint32"}],"name":"submitEthToTokenOrderWHint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"weiAmount","type":"uint256"}],"name":"calcBurnAmountFromFeeBurner","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint32"},{"name":"srcAmount","type":"uint128"},{"name":"dstAmount","type":"uint128"}],"name":"getEthToTokenUpdateOrderHint","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"makerKnc","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"makerOrdersTokenToEth","outputs":[{"name":"firstOrderId","type":"uint32"},{"name":"takenBitmap","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"maker","type":"address"},{"name":"amount","type":"uint256"}],"name":"depositToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kncPerEthBaseRatePrecision","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdrawEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"srcAmount","type":"uint128"},{"name":"dstAmount","type":"uint128"}],"name":"getTokenToEthAddOrderHint","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BURN_TO_STAKE_FACTOR","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"isEthToToken","type":"bool[]"},{"name":"srcAmount","type":"uint128[]"},{"name":"dstAmount","type":"uint128[]"},{"name":"hintPrevOrder","type":"uint32[]"},{"name":"isAfterPrevOrder","type":"bool[]"}],"name":"addOrderBatch","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"maker","type":"address"}],"name":"depositEther","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"MIN_REMAINING_ORDER_RATIO","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"makerOrdersEthToToken","outputs":[{"name":"firstOrderId","type":"uint32"},{"name":"takenBitmap","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint32"},{"name":"newSrcAmount","type":"uint128"},{"name":"newDstAmount","type":"uint128"},{"name":"hintPrevOrder","type":"uint32"}],"name":"updateEthToTokenOrderWHint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint32"}],"name":"cancelTokenToEthOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"maker","type":"address"}],"name":"getEthToTokenMakerOrderIds","outputs":[{"name":"orderList","type":"uint32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTokenToEthOrderList","outputs":[{"name":"orderList","type":"uint32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"srcAmount","type":"uint128"},{"name":"dstAmount","type":"uint128"}],"name":"getEthToTokenAddOrderHint","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_USD_PER_ETH","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenToEthList","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contracts","outputs":[{"name":"kncToken","type":"address"},{"name":"token","type":"address"},{"name":"feeBurner","type":"address"},{"name":"kyberNetwork","type":"address"},{"name":"medianizer","type":"address"},{"name":"orderListFactory","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint32"}],"name":"getTokenToEthOrder","outputs":[{"name":"_maker","type":"address"},{"name":"_srcAmount","type":"uint128"},{"name":"_dstAmount","type":"uint128"},{"name":"_prevId","type":"uint32"},{"name":"_nextId","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"srcToken","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"dstToken","type":"address"},{"name":"dstAddress","type":"address"},{"name":"conversionRate","type":"uint256"},{"name":"validate","type":"bool"}],"name":"trade","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"srcAmount","type":"uint128"},{"name":"dstAmount","type":"uint128"}],"name":"submitTokenToEthOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"srcAmount","type":"uint128"},{"name":"dstAmount","type":"uint128"}],"name":"submitEthToTokenOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_BURN_FEE_BPS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"srcQty","type":"uint256"},{"name":"blockNumber","type":"uint256"}],"name":"getConversionRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"setKncPerEthBaseRate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"weiAmount","type":"uint256"}],"name":"calcKncStake","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint32"},{"name":"newSrcAmount","type":"uint128"},{"name":"newDstAmount","type":"uint128"}],"name":"updateEthToTokenOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"weiAmount","type":"uint256"}],"name":"calcBurnAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"limits","outputs":[{"name":"minNewOrderSizeUsd","type":"uint256"},{"name":"maxOrdersPerTrade","type":"uint256"},{"name":"minNewOrderSizeWei","type":"uint256"},{"name":"minOrderSizeWei","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"maker","type":"address"}],"name":"makerUnlockedKnc","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint32"},{"name":"srcAmount","type":"uint128"},{"name":"dstAmount","type":"uint128"}],"name":"getTokenToEthUpdateOrderHint","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint32"},{"name":"newSrcAmount","type":"uint128"},{"name":"newDstAmount","type":"uint128"},{"name":"hintPrevOrder","type":"uint32"}],"name":"updateTokenToEthOrderWHint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdrawKncFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint32"},{"name":"newSrcAmount","type":"uint128"},{"name":"newDstAmount","type":"uint128"}],"name":"updateTokenToEthOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"srcAmount","type":"uint128"},{"name":"dstAmount","type":"uint128"},{"name":"hintPrevOrder","type":"uint32"}],"name":"submitTokenToEthOrderWHint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"setMinOrderSizeEth","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"maker","type":"address"}],"name":"getTokenToEthMakerOrderIds","outputs":[{"name":"orderList","type":"uint32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"maker","type":"address"}],"name":"makerRequiredKncStake","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint32"}],"name":"getEthToTokenOrder","outputs":[{"name":"_maker","type":"address"},{"name":"_srcAmount","type":"uint128"},{"name":"_dstAmount","type":"uint128"},{"name":"_prevId","type":"uint32"},{"name":"_nextId","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"HEAD_ID","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"makerTotalOrdersWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"maker","type":"address"},{"name":"amount","type":"uint256"}],"name":"depositKncForFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"makerFunds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"makerBurnFeeBps","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TAIL_ID","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"},{"name":"user","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"init","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kncRateBlocksTrade","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"isEthToToken","type":"bool[]"},{"name":"orderId","type":"uint32[]"},{"name":"newSrcAmount","type":"uint128[]"},{"name":"newDstAmount","type":"uint128[]"},{"name":"hintPrevOrder","type":"uint32[]"}],"name":"updateOrderBatch","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getEthToTokenOrderList","outputs":[{"name":"orderList","type":"uint32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint32"}],"name":"cancelEthToTokenOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ethToTokenList","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"knc","type":"address"},{"name":"reserveToken","type":"address"},{"name":"burner","type":"address"},{"name":"network","type":"address"},{"name":"medianizer","type":"address"},{"name":"factory","type":"address"},{"name":"minNewOrderUsd","type":"uint256"},{"name":"maxOrdersPerTrade","type":"uint256"},{"name":"burnFeeBps","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"srcToken","type":"address"},{"indexed":false,"name":"dstToken","type":"address"},{"indexed":false,"name":"srcAmount","type":"uint256"},{"indexed":false,"name":"dstAmount","type":"uint256"}],"name":"OrderbookReserveTrade","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"maker","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"TokenDeposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"maker","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"EtherDeposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"maker","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"KncFeeDeposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"maker","type":"address"},{"indexed":false,"name":"orderId","type":"uint32"},{"indexed":false,"name":"isEthToToken","type":"bool"},{"indexed":false,"name":"srcAmount","type":"uint128"},{"indexed":false,"name":"dstAmount","type":"uint128"},{"indexed":false,"name":"addedWithHint","type":"bool"}],"name":"NewLimitOrder","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"maker","type":"address"},{"indexed":false,"name":"isEthToToken","type":"bool"},{"indexed":false,"name":"orderId","type":"uint256"},{"indexed":false,"name":"srcAmount","type":"uint128"},{"indexed":false,"name":"dstAmount","type":"uint128"},{"indexed":false,"name":"updatedWithHint","type":"bool"}],"name":"OrderUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"maker","type":"address"},{"indexed":false,"name":"isEthToToken","type":"bool"},{"indexed":false,"name":"orderId","type":"uint32"},{"indexed":false,"name":"srcAmount","type":"uint128"},{"indexed":false,"name":"dstAmount","type":"uint256"}],"name":"OrderCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"maker","type":"address"},{"indexed":false,"name":"orderId","type":"uint32"},{"indexed":false,"name":"isEthToToken","type":"bool"}],"name":"FullOrderTaken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"maker","type":"address"},{"indexed":false,"name":"orderId","type":"uint32"},{"indexed":false,"name":"isEthToToken","type":"bool"},{"indexed":false,"name":"isRemoved","type":"bool"}],"name":"PartialOrderTaken","type":"event"}]

	KyberNetwork_ABI = [{"constant":false,"inputs":[{"name":"alerter","type":"address"}],"name":"removeAlerter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"trader","type":"address"},{"name":"src","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"dest","type":"address"},{"name":"destAddress","type":"address"},{"name":"maxDestAmount","type":"uint256"},{"name":"minConversionRate","type":"uint256"},{"name":"walletId","type":"address"},{"name":"hint","type":"bytes"}],"name":"tradeWithHint","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"dest","type":"address"},{"name":"srcAmount","type":"uint256"},{"name":"usePermissionless","type":"bool"}],"name":"searchBestRate","outputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"infoFields","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"feeBurner","type":"address"}],"name":"setFeeBurner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"dest","type":"address"},{"name":"srcAmount","type":"uint256"}],"name":"findBestRateOnlyPermission","outputs":[{"name":"obsolete","type":"uint256"},{"name":"rate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"enabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"reserve","type":"address"},{"name":"index","type":"uint256"}],"name":"removeReserve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOperators","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"reservesPerTokenSrc","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"whiteList","type":"address"}],"name":"setWhiteList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"},{"name":"sendTo","type":"address"}],"name":"withdrawToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxGasPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newAlerter","type":"address"}],"name":"addAlerter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"negligibleRateDiff","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"feeBurnerContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"expectedRate","type":"address"}],"name":"setExpectedRate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"expectedRateContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"whiteListContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"field","type":"bytes32"},{"name":"value","type":"uint256"}],"name":"setInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getUserCapInWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"reserveType","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"transferAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_enable","type":"bool"}],"name":"setEnable","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kyberNetworkProxyContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newAdmin","type":"address"}],"name":"transferAdminQuickly","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAlerters","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"dest","type":"address"},{"name":"srcQty","type":"uint256"}],"name":"getExpectedRate","outputs":[{"name":"expectedRate","type":"uint256"},{"name":"slippageRate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"reserves","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"dest","type":"address"},{"name":"srcQty","type":"uint256"}],"name":"getExpectedRateOnlyPermission","outputs":[{"name":"expectedRate","type":"uint256"},{"name":"slippageRate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERM_HINT","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"},{"name":"token","type":"address"}],"name":"getUserCapInTokenWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"reservesPerTokenDest","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOperator","type":"address"}],"name":"addOperator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"reserve","type":"address"},{"name":"isPermissionless","type":"bool"}],"name":"addReserve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"operator","type":"address"}],"name":"removeOperator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxGasPriceValue","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"field","type":"bytes32"}],"name":"info","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"dest","type":"address"},{"name":"srcAmount","type":"uint256"}],"name":"findBestRate","outputs":[{"name":"obsolete","type":"uint256"},{"name":"rate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_maxGasPrice","type":"uint256"},{"name":"_negligibleRateDiff","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"PERM_HINT_GET_RATE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"networkProxy","type":"address"}],"name":"setKyberProxy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"sendTo","type":"address"}],"name":"withdrawEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNumReserves","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"},{"name":"user","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"reserve","type":"address"},{"name":"token","type":"address"},{"name":"ethToToken","type":"bool"},{"name":"tokenToEth","type":"bool"},{"name":"add","type":"bool"}],"name":"listPairForReserve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_admin","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"EtherReceival","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"reserve","type":"address"},{"indexed":false,"name":"add","type":"bool"},{"indexed":false,"name":"isPermissionless","type":"bool"}],"name":"AddReserveToNetwork","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"reserve","type":"address"}],"name":"RemoveReserveFromNetwork","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"reserve","type":"address"},{"indexed":false,"name":"src","type":"address"},{"indexed":false,"name":"dest","type":"address"},{"indexed":false,"name":"add","type":"bool"}],"name":"ListReservePairs","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newContract","type":"address"},{"indexed":false,"name":"currentContract","type":"address"}],"name":"WhiteListContractSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newContract","type":"address"},{"indexed":false,"name":"currentContract","type":"address"}],"name":"ExpectedRateContractSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newContract","type":"address"},{"indexed":false,"name":"currentContract","type":"address"}],"name":"FeeBurnerContractSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"maxGasPrice","type":"uint256"},{"indexed":false,"name":"negligibleRateDiff","type":"uint256"}],"name":"KyberNetwrokParamsSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"isEnabled","type":"bool"}],"name":"KyberNetworkSetEnable","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"proxy","type":"address"},{"indexed":false,"name":"sender","type":"address"}],"name":"KyberProxySet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"trader","type":"address"},{"indexed":false,"name":"src","type":"address"},{"indexed":false,"name":"dest","type":"address"},{"indexed":false,"name":"srcAmount","type":"uint256"},{"indexed":false,"name":"dstAmount","type":"uint256"},{"indexed":false,"name":"destAddress","type":"address"},{"indexed":false,"name":"ethWeiValue","type":"uint256"},{"indexed":false,"name":"reserve1","type":"address"},{"indexed":false,"name":"reserve2","type":"address"},{"indexed":false,"name":"hint","type":"bytes"}],"name":"KyberTrade","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"sendTo","type":"address"}],"name":"TokenWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"sendTo","type":"address"}],"name":"EtherWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"pendingAdmin","type":"address"}],"name":"TransferAdminPending","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAdmin","type":"address"},{"indexed":false,"name":"previousAdmin","type":"address"}],"name":"AdminClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAlerter","type":"address"},{"indexed":false,"name":"isAdd","type":"bool"}],"name":"AlerterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newOperator","type":"address"},{"indexed":false,"name":"isAdd","type":"bool"}],"name":"OperatorAdded","type":"event"}]

	ERC20_ABI_bytes32 = [{"constant": true,"inputs": [],"name": "name","outputs": [{"name": "","type": "bytes32"}],"payable": false,"type": "function"},{"constant": true,"inputs": [],"name": "decimals","outputs": [{"name": "","type": "uint8"}],"payable": false,"type": "function"},{"constant": true,"inputs": [{"name": "_owner","type": "address"}],"name": "balanceOf","outputs": [{"name": "balance","type": "uint256"}],"payable": false,"type": "function"},{"constant": true,"inputs": [],"name": "symbol","outputs": [{"name": "","type": "bytes32"}],"payable": false,"type": "function"}]

	ERC20_ABI = [{"constant": true,"inputs": [],"name": "name","outputs": [{"name": "","type": "string"}],"payable": false,"type": "function"},{"constant": true,"inputs": [],"name": "decimals","outputs": [{"name": "","type": "uint8"}],"payable": false,"type": "function"},{"constant": true,"inputs": [{"name": "_owner","type": "address"}],"name": "balanceOf","outputs": [{"name": "balance","type": "uint256"}],"payable": false,"type": "function"},{"constant": true,"inputs": [],"name": "symbol","outputs": [{"name": "","type": "string"}],"payable": false,"type": "function"}]

	Medianizer_ABI = [{"constant":false,"inputs":[{"name":"dollarPerEth","type":"uint256"}],"name":"setEthPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"peek","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"isValid","type":"bool"}],"name":"setValid","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]

	ETH_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
	KNC_ADDRESS = '0xdd974d5c2e2928dea5f71b9825b8b646686bd200';
	Medianizer_ADDRESS = '0x729D19f657BD0614b4985Cf1D82531c67569197B';
	OrderbookContractReserve_ADDRESS = '0x84afa106fbf9b45e369724024cae14e8c7529c26';
	KyberNetwork_ADDRESS = '0x9ae49C0d7F8F9EF4B864e004FE86Ac8294E20950';

	KNCInstance = new web3.eth.Contract(KNC_ABI, KNC_ADDRESS);
	OrderbookContractReserveInstance = new web3.eth.Contract(OrderbookContractReserve_ABI, OrderbookContractReserve_ADDRESS);
	KyberNetworkInstance = new web3.eth.Contract(KyberNetwork_ABI, KyberNetwork_ADDRESS);

	NetworkProxyInstance.setProvider(provider);
	KNCInstance.setProvider(provider);
	OrderbookContractReserveInstance.setProvider(provider);
	KyberNetworkInstance.setProvider(provider);

};

function tx(result, call) {
  const logs = (result.logs.length > 0) ? result.logs[0] : { address: null, event: null };

  console.log();
  console.log(`   ${call}`);
  console.log('   ------------------------');
  console.log(`   > transaction hash: ${result.transactionHash}`);
  console.log(`   > gas used: ${result.gasUsed}`);
  console.log();
}

async function sendTx(txObject, value = 0) {
  const nonce = await web3.eth.getTransactionCount(userWallet);
  const gas = 7000 * 1000;

  const txData = txObject.encodeABI();
  const txFrom = userWallet;
  const txTo = txObject._parent.options.address;

  const txParams = {
    from: txFrom,
    to: txTo,
    data: txData,
    value: value,
    gas,
    nonce,
    chainId: await web3.eth.net.getId(),
    gasPrice,
  };

  //const signedTx = await web3.eth.signTransaction(txParams);

  return web3.eth.sendTransaction(txParams);
}

window.getRate = async function(sourceToken, destToken){
	let expectedRate;
  	let slippageRate;
  	({ expectedRate, slippageRate } = await NetworkProxyInstance.methods.getExpectedRate(
    OMG_ADDRESS, // srcToken
    KNC_ADDRESS, // destToken
    web3.utils.toWei('1'), // srcQty
  ).call());
  return expectedRate;
}

window.tokenToToken = async function(sourceAddress, destAddress, tokenAmount) {
	console.log("tokenToToken");

  let expectedRate;
  let slippageRate;
  let result;
  let txObject;

	var sourceInstance = new web3.eth.Contract(KNC_ABI, sourceAddress);
	sourceInstance.setProvider(provider);
	var decimals = await sourceInstance.methods.decimals().call();
	var power = Math.pow(10,decimals);

	var tokenAmount = (
		tokenAmount * web3.utils.toBN(power)
	).toString();

  // Approve the KyberNetwork contract to spend user's tokens
  txObject = sourceInstance.methods.approve(
    KyberNetworkProxyAddress,
    tokenAmount,
  );
  await sendTx(txObject);

  ({ expectedRate, slippageRate } = await NetworkProxyInstance.methods.getExpectedRate(
    sourceAddress, // srcToken
    destAddress, // destToken
    tokenAmount, // srcQty
  ).call());

  txObject = NetworkProxyInstance.methods.trade(
    sourceAddress, // srcToken
    tokenAmount, // srcAmount
    destAddress, // destToken
    userWallet, // destAddress
    web3.utils.toWei('100000000000000000000000000000000000'), // maxDestAmount
    expectedRate, // minConversionRate
    '0x0000000000000000000000000000000000000000', // walletId
  );

	try{
  	result = await sendTx(txObject);
	}catch (err){
		result = err;
	}
	return result;
}

window.etherToToken = async function(destAddress, amount) {
	console.log("etherToToken");
	var destInstance = new web3.eth.Contract(KNC_ABI, destAddress);
	destInstance.setProvider(provider);

  let expectedRate;
  let slippageRate;
  let result;
  let txObject;

   ({ expectedRate, slippageRate } = await NetworkProxyInstance.methods.getExpectedRate(
    ETH_ADDRESS, // srcToken
    destAddress, // destToken
    web3.utils.toWei(amount), // srcQty
  ).call());

  txObject = NetworkProxyInstance.methods.swapEtherToToken(
    destAddress, // destToken
    expectedRate, // minConversionRate
  );

	try{
  	result = await sendTx(txObject, web3.utils.toWei(amount));
	}catch (err){
		result = err;
	}

	return result;
}

window.tokenToEther = async function(sourceAddress, tokenAmount) {
	console.log("tokenToEther");

	var sourceInstance = new web3.eth.Contract(KNC_ABI, sourceAddress);
	sourceInstance.setProvider(provider);

	var decimals = await sourceInstance.methods.decimals().call();
	var power = Math.pow(10,decimals);

	var tokenAmount = (
		tokenAmount * web3.utils.toBN(power)
	).toString();

  let expectedRate;
  let slippageRate;
  let result;
  let txObject;

	// Approve the KyberNetwork contract to spend user's tokens
  txObject = sourceInstance.methods.approve(
    KyberNetworkProxyAddress,
    tokenAmount,
  );
  await sendTx(txObject);

   ({ expectedRate, slippageRate } = await NetworkProxyInstance.methods.getExpectedRate(
    sourceAddress, // srcToken
    ETH_ADDRESS, // destToken
    tokenAmount, // srcQty
  ).call());

  txObject = NetworkProxyInstance.methods.swapTokenToEther(
    sourceAddress, // sourceToken
    tokenAmount, // srcAmount
    expectedRate, // minConversionRate
  );
	try{
  	result = await sendTx(txObject);
	}catch (err){
		result = err;
	}
	return result;
}

/* PERMISSIONLESS FUNCTIONS
*/

//get tokenDetails from token's original contract
window.getTokenNameFromAddress = async function(tokenAddress){
		if(tokenAddress == "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359" || tokenAddress == "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2" || tokenAddress == "0x623B925b0A57a24EA8dE301F2E3E692cE903f0c3"){
			var abi = ERC20_ABI_bytes32;
		}else{
			var abi = ERC20_ABI;
		}
		var tokenContract = new web3.eth.Contract(abi, tokenAddress);
		tokenContract.setProvider(provider);

		if(tokenAddress == "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359" || tokenAddress == "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2" || tokenAddress == "0x623B925b0A57a24EA8dE301F2E3E692cE903f0c3"){
			var tokenSymbol = web3.utils.hexToAscii(await tokenContract.methods.symbol().call()).replace(/\u0000*$/, '');
		}else{
			var tokenSymbol = await tokenContract.methods.symbol().call();
		}

		return tokenSymbol;
}

//getExpectedRate of a token from KyberNetwork - EthToToken
window.getExpectedRateFromAddress = async function(sourceAddress, destinationAddress = ETH_ADDRESS){
	//console.log("getExpectedRateFromAddress");
	if(sourceAddress != ETH_ADDRESS){
		var sourceInstance = new web3.eth.Contract(KNC_ABI, sourceAddress);
		sourceInstance.setProvider(provider);
		var decimals = await sourceInstance.methods.decimals().call();
		var power = Math.pow(10,decimals);
		var tokenAmount = (
			new BN('1').mul(web3.utils.toBN(power))
		).toString();
	}else{
		var tokenAmount = web3.utils.toWei('1');
	}

	({ expectedRate, slippageRate } = await NetworkProxyInstance.methods.getExpectedRate(
	 sourceAddress, // srcToken
	 destinationAddress, // destToken
	 tokenAmount, // srcQty
 	).call());
	return web3.utils.fromWei(expectedRate);
}

window.getReserveList = async function(){
	console.log("getReserveList");
	var permissionlessReservesArr = [];
	var allReservesList = await KyberNetworkInstance.methods.getReserves().call();
	for (var i = 0; i < allReservesList.length; i++) {
		var reserveType = await KyberNetworkInstance.methods.reserveType(allReservesList[i]).call();

		if(reserveType == 2){
			permissionlessReservesArr.push(allReservesList[i]);
		}
	}
	return(permissionlessReservesArr);
}

window.getReserveDetails = async function(permissionlessReservesList){
	var reserveDetails = [];
	for (var i = 0; i < permissionlessReservesList.length; i++) {
		var tokenArr = [];
		//get tokenAddress from reserve
		var customReserveInstance = new web3.eth.Contract(OrderbookReserve_ABI, permissionlessReservesList[i]);
		customReserveInstance.setProvider(provider);
		var reserveTokenSrcAddress = await customReserveInstance.methods.contracts().call();
		tokenArr.push(permissionlessReservesList[i]);
		tokenArr.push(reserveTokenSrcAddress["token"]);

		//Find address of the token from the reserve contract and getTokenNameFromAddress
		var tokenDetails = await getTokenNameFromAddress(reserveTokenSrcAddress["token"]);
		tokenArr.push(tokenDetails);
		reserveDetails.push(tokenArr);
	}
	return reserveDetails;
}

window.getReserveTokenExpectedRate = async function(reserveDetails){
	for (var i = 0; i < reserveDetails.length; i++) {
		var tokenArr = [];
		var tokenExpectedRate = await getExpectedRateFromAddress(reserveDetails[i][1], ETH_ADDRESS);
		tokenArr.push(tokenExpectedRate);
		reserveDetails[i].push(tokenArr);
	}
	return reserveDetails;
}

window.getReserveListingStage = async function(token){
	console.log("getReserveListingStage");
	console.log(web3);
	var result = "";
	var isAddress = web3.utils.isAddress(token);
	if(isAddress){
		try{
			var result = await OrderbookContractReserveInstance.methods.getOrderbookListingStage(token).call();
		}catch (err){
			result = err;
		}
	}else{
		result = "invalid_address";
	}
	return result;
}

//View Orderbook Functions
window.getEtherToTokenOrderList = async function(tokenContractAddress, tokenAddress){
	var customReserveInstance = new web3.eth.Contract(OrderbookReserve_ABI, tokenContractAddress);
	customReserveInstance.setProvider(provider);
	var tokenInstance = new web3.eth.Contract(KNC_ABI, tokenAddress);
	tokenInstance.setProvider(provider);
	var decimals = await tokenInstance.methods.decimals().call();
	var power = Math.pow(10,decimals);

	try {
		var orderList = await customReserveInstance.methods.getEthToTokenOrderList().call();
		var ethToTokenArr = [];
		for (var i = 0; i < orderList.length; i++) {
			var orderDetails = await customReserveInstance.methods.getEthToTokenOrder(orderList[i]).call();
			var tokenAmount = (
				orderDetails._dstAmount / web3.utils.toBN(power)
		  ).toString();
			orderDetails = [web3.utils.fromWei(orderDetails._srcAmount), tokenAmount, orderDetails._maker];
			ethToTokenArr.push(orderDetails);
		}
	}catch (err){
		ethToTokenArr = "";
	}
	return ethToTokenArr;
}

window.getTokenToEtherOrderList = async function(tokenContractAddress, tokenAddress){
	var customReserveInstance = new web3.eth.Contract(OrderbookReserve_ABI, tokenContractAddress);
	customReserveInstance.setProvider(provider);
	var tokenInstance = new web3.eth.Contract(KNC_ABI, tokenAddress);
	tokenInstance.setProvider(provider);
	var decimals = await tokenInstance.methods.decimals().call();
	var power = Math.pow(10,decimals);

	try {
		var orderList = await customReserveInstance.methods.getTokenToEthOrderList().call();
		var tokenToEthArr = [];
		for (var i = 0; i < orderList.length; i++) {
			var orderDetails = await customReserveInstance.methods.getTokenToEthOrder(orderList[i]).call();
			var tokenAmount = (
				orderDetails._srcAmount / web3.utils.toBN(power)
		  ).toString();
			orderDetails = [tokenAmount, web3.utils.fromWei(orderDetails._dstAmount), orderDetails._maker];
			tokenToEthArr.push(orderDetails);
		}
	}catch (err){
		tokenToEthArr = "";
	}
	return tokenToEthArr;
}

window.getEthToTokenMakerOrderList = async function(tokenContractAddress, tokenAddress){
	var customReserveInstance = new web3.eth.Contract(OrderbookReserve_ABI, tokenContractAddress);
	customReserveInstance.setProvider(provider);
	var tokenInstance = new web3.eth.Contract(KNC_ABI, tokenAddress);
	tokenInstance.setProvider(provider);
	var decimals = await tokenInstance.methods.decimals().call();
	var power = Math.pow(10,decimals);

	var makerOrderArr = [];
	try {
		var ethToTokenList = await customReserveInstance.methods.getEthToTokenMakerOrderIds(userWallet).call();
		for (var i = 0; i < ethToTokenList.length; i++) {
			var orderDetails = await customReserveInstance.methods.getEthToTokenOrder(ethToTokenList[i]).call();
			var tokenAmount = (
				orderDetails._dstAmount / web3.utils.toBN(power)
		  ).toString();
			var ethAmount = web3.utils.fromWei(orderDetails._srcAmount);
			var rate = tokenAmount/ethAmount;
			orderDetails = ["Buy", ethAmount, tokenAmount, orderDetails._maker, ethToTokenList[i], rate];
			makerOrderArr.push(orderDetails);
		}
	}catch (err){
		makerOrderArr = "";
	}
	return makerOrderArr;
}

window.getTokenToEthMakerOrderList = async function(tokenContractAddress, tokenAddress){
	var customReserveInstance = new web3.eth.Contract(OrderbookReserve_ABI, tokenContractAddress);
	customReserveInstance.setProvider(provider);
	var tokenInstance = new web3.eth.Contract(KNC_ABI, tokenAddress);
	tokenInstance.setProvider(provider);
	var decimals = await tokenInstance.methods.decimals().call();
	var power = Math.pow(10,decimals);

	var makerOrderArr = [];
	try {
		var tokenToEthList = await customReserveInstance.methods.getTokenToEthMakerOrderIds(userWallet).call();
		for (var i = 0; i < tokenToEthList.length; i++) {
			var orderDetails = await customReserveInstance.methods.getTokenToEthOrder(tokenToEthList[i]).call();
			var tokenAmount = (
				orderDetails._srcAmount / web3.utils.toBN(power)
		  ).toString();
			var ethAmount = web3.utils.fromWei(orderDetails._dstAmount);
			var rate = ethAmount/tokenAmount;
			orderDetails = ["Sell", tokenAmount, ethAmount, orderDetails._maker, tokenToEthList[i], rate];
			makerOrderArr.push(orderDetails);
		}
	}catch (err){
		makerOrderArr = "";
	}
	return makerOrderArr;
}

// Balance Functions
window.getKncBalanceInReserve = async function(tokenContractAddress){
	//console.log(tokenContractAddress);
	console.log(userWallet);
	var customReserveInstance = new web3.eth.Contract(OrderbookReserve_ABI, tokenContractAddress);
	customReserveInstance.setProvider(provider);
	var makerUnlockedKnc = await customReserveInstance.methods.makerUnlockedKnc(userWallet).call();
	return web3.utils.fromWei(makerUnlockedKnc);
}

window.getTokenBalanceInReserve = async function(tokenReserveContractAddress, tokenAddress = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"){
	var customReserveInstance = new web3.eth.Contract(OrderbookReserve_ABI, tokenReserveContractAddress);
	customReserveInstance.setProvider(provider);

	var tokenFunds = await customReserveInstance.methods.makerFunds(userWallet, tokenAddress).call();

	if(tokenAddress == "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"){
		var inUnits = web3.utils.fromWei(tokenFunds);
	}else{
		var tokenInstance = new web3.eth.Contract(KNC_ABI, tokenAddress);
		tokenInstance.setProvider(provider);
		var decimals = await tokenInstance.methods.decimals().call();
		var inUnits = tokenFunds / (Math.pow(10,decimals));
	}
	return inUnits;
}

//get token balance for the current user - used in deposits
window.getTokenBalanceInWallet = async function(tokenAddress){

	var customTokenInstance = new web3.eth.Contract(KNC_ABI, tokenAddress);
	customTokenInstance.setProvider(provider);

	var tokenBalance = await customTokenInstance.methods.balanceOf(userWallet).call();

	if(tokenAddress == "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"){
		var inUnits = web3.utils.fromWei(tokenBalance);
	}else{
		var tokenInstance = new web3.eth.Contract(KNC_ABI, tokenAddress);
		tokenInstance.setProvider(provider);
		var decimals = await tokenInstance.methods.decimals().call();
		var inUnits = tokenBalance / (Math.pow(10,decimals));
	}
	return inUnits;
}

//get ETH balance in user wallet - used in deposits
window.getETHBalanceInWallet = async function(){
	var ethBalance = "";
	try {
        await web3.eth.getBalance(userWallet, function (error, wei) {
            if (!error) {
                ethBalance = web3.utils.fromWei(wei);
            }
        });
    } catch (err) {
        ethBalance = err;
    }
	return ethBalance;
}

window.depositEthBalance = async function(reserveContractAddress, ETHAmount){
	console.log("depositEthBalance");
	var customReserveInstance = new web3.eth.Contract(OrderbookReserve_ABI, reserveContractAddress);
	ETHAmount = web3.utils.toWei(ETHAmount);
	customReserveInstance.setProvider(provider);
	var result = "";
	// Deposit ETH to POR
	var txObject = customReserveInstance.methods.depositEther(userWallet);
	try {
  	result = await sendTx(txObject, ETHAmount);
	}catch (err){
		result = err;
	}
	return result;
}

window.depositTokenBalance = async function(reserveContractAddress, tokenAddress, tokenAmount){
	console.log("depositTokenBalance");
	var customReserveInstance = new web3.eth.Contract(OrderbookReserve_ABI, reserveContractAddress);
	customReserveInstance.setProvider(provider);
	var tokenInstance = new web3.eth.Contract(KNC_ABI, tokenAddress);
	tokenInstance.setProvider(provider);
	var decimals = await tokenInstance.methods.decimals().call();
	var power = Math.pow(10,decimals);
	tokenAmount = (
    tokenAmount * web3.utils.toBN(power)
  ).toString();

	var txObject = tokenInstance.methods.approve(
    reserveContractAddress,
    tokenAmount,
  );
  var approve = await sendTx(txObject);

	var result = "";
	var txObject = customReserveInstance.methods.depositToken(userWallet, tokenAmount);
	try {
  	result = await sendTx(txObject);
	}catch (err){
		result = err;
	}
	return result;
}

window.depositKncBalance = async function(reserveContractAddress, tokenAddress, tokenAmount){
	console.log("depositKncForFee");
	var customReserveInstance = new web3.eth.Contract(OrderbookReserve_ABI, reserveContractAddress);
	customReserveInstance.setProvider(provider);
	var tokenInstance = new web3.eth.Contract(KNC_ABI, tokenAddress);
	tokenInstance.setProvider(provider);
	var decimals = await tokenInstance.methods.decimals().call();
	var power = Math.pow(10,decimals);
	tokenAmount = (
		tokenAmount * web3.utils.toBN(power)
  ).toString();

	var txObject = tokenInstance.methods.approve(
    reserveContractAddress,
    tokenAmount,
  );
  var approve = await sendTx(txObject);

	var result = "";
	var txObject = customReserveInstance.methods.depositKncForFee(userWallet, tokenAmount);
	try {
  	result = await sendTx(txObject);
	}catch (err){
		result = err;
	}
	return result;
}

window.withdrawEtherBalance = async function(reserveContractAddress, tokenAmount){
	console.log("withdrawEtherBalance");
	var customReserveInstance = new web3.eth.Contract(OrderbookReserve_ABI, reserveContractAddress);
	customReserveInstance.setProvider(provider);
	tokenAmount = web3.utils.toWei(tokenAmount);
	var result = "";
	var txObject = customReserveInstance.methods.withdrawEther(tokenAmount);
	try {
  	result = await sendTx(txObject);
	}catch (err){
		result = err;
	}
	return result;
}

window.withdrawKncFeeBalance = async function(reserveContractAddress, tokenAmount){
	console.log("withdrawKncFeeBalance");
	var customReserveInstance = new web3.eth.Contract(OrderbookReserve_ABI, reserveContractAddress);
	customReserveInstance.setProvider(provider);
	tokenAmount = web3.utils.toWei(tokenAmount);
	var result = "";
	var txObject = customReserveInstance.methods.withdrawKncFee(tokenAmount);
	try {
  	result = await sendTx(txObject);
	}catch (err){
		result = err;
	}
	return result;
}

window.withdrawTokenBalance = async function(reserveContractAddress, tokenAddress, tokenAmount){
	console.log("withdrawTokenBalance");
	var customReserveInstance = new web3.eth.Contract(OrderbookReserve_ABI, reserveContractAddress);
	customReserveInstance.setProvider(provider);

	var tokenInstance = new web3.eth.Contract(KNC_ABI, tokenAddress);
	tokenInstance.setProvider(provider);
	var decimals = await tokenInstance.methods.decimals().call();
	var power = Math.pow(10,decimals);
	tokenAmount = (
		tokenAmount * web3.utils.toBN(power)
  ).toString();

	var result = "";
	var txObject = customReserveInstance.methods.withdrawToken(tokenAmount);
	try {
  	result = await sendTx(txObject);
	}catch (err){
		result = err;
	}
	return result;
}

window.getMedianizerEthRate = async function(){
	//console.log("getMedianizerEthRate");
	var customReserveInstance = new web3.eth.Contract(Medianizer_ABI, Medianizer_ADDRESS);
	customReserveInstance.setProvider(provider);
	var peek = await customReserveInstance.methods.peek().call();
	var toBN = web3.utils.toBN(peek[0]);
	return web3.utils.fromWei(toBN);
}

window.getKnctoEthRateInReserve = async function(reserveContractAddress){
	console.log("getKnctoEthRateInReserve");
	var customReserveInstance = new web3.eth.Contract(OrderbookReserve_ABI, reserveContractAddress);
	customReserveInstance.setProvider(provider);
	var baseRate = await customReserveInstance.methods.kncPerEthBaseRatePrecision().call();
	return web3.utils.fromWei(baseRate);
}

window.calcKncStakeValue = async function(reserveContractAddress, ethAmount){
	//console.log("calcKncStakeValue");
	var customReserveInstance = new web3.eth.Contract(OrderbookReserve_ABI, reserveContractAddress);
	customReserveInstance.setProvider(provider);

	ethAmount = web3.utils.toWei(ethAmount);
	var stakeRequired = await customReserveInstance.methods.calcKncStake(ethAmount).call();
	return web3.utils.fromWei(stakeRequired);
}

//Make buy orders - ETHtoToken
window.submitEthToTokenOrderToReserve = async function(tokenReserveContractAddress, tokenAddress, ethAmount, tokenAmount){
	console.log("submitEthToTokenOrderToReserve");
	var customReserveInstance = new web3.eth.Contract(OrderbookReserve_ABI, tokenReserveContractAddress);
	customReserveInstance.setProvider(provider);
//console.log(web3.utils.toBN(tokenAmount));
	var tokenInstance = new web3.eth.Contract(KNC_ABI, tokenAddress);
	tokenInstance.setProvider(provider);
	var decimals = await tokenInstance.methods.decimals().call();
	var power = Math.pow(10,decimals);
	tokenAmount = (
		tokenAmount * web3.utils.toBN(power)
  ).toString();
	console.log(tokenAmount);
	ethAmount = web3.utils.toWei(ethAmount);

	var result = "";
	var txObject = customReserveInstance.methods.submitEthToTokenOrder(
    ethAmount,
		tokenAmount
  );
	try {
  	result = await sendTx(txObject);
	}catch (err){
		result = err;
	}
	return result;
}

//Make sell orders - TokenToEth
window.submitTokenToEthOrderToReserve = async function(tokenReserveContractAddress, tokenAddress, tokenAmount, ethAmount){
	console.log("submitTokenToEthOrderToReserve");
	var customReserveInstance = new web3.eth.Contract(OrderbookReserve_ABI, tokenReserveContractAddress);
	customReserveInstance.setProvider(provider);

	var tokenInstance = new web3.eth.Contract(KNC_ABI, tokenAddress);
	tokenInstance.setProvider(provider);
	var decimals = await tokenInstance.methods.decimals().call();
	var power = Math.pow(10,decimals);
	tokenAmount = (
		tokenAmount * web3.utils.toBN(power)
  ).toString();

	ethAmount = web3.utils.toWei(ethAmount);

	var result = "";
	var txObject = customReserveInstance.methods.submitTokenToEthOrder(
    tokenAmount,
		ethAmount
  );
	try {
  	result = await sendTx(txObject);
	}catch (err){
		result = err;
	}
	return result;
}

//Update buy orders - ETHtoToken
window.updateEthToTokenOrderInReserve = async function(tokenReserveContractAddress, tokenAddress, orderId, ethAmount, tokenAmount){
	console.log("updateEthToTokenOrderInReserve");
	var customReserveInstance = new web3.eth.Contract(OrderbookReserve_ABI, tokenReserveContractAddress);
	customReserveInstance.setProvider(provider);

	var tokenInstance = new web3.eth.Contract(KNC_ABI, tokenAddress);
	tokenInstance.setProvider(provider);
	var decimals = await tokenInstance.methods.decimals().call();
	var power = Math.pow(10,decimals);
	tokenAmount = (
		tokenAmount * web3.utils.toBN(power)
  ).toString();

	ethAmount = web3.utils.toWei(ethAmount);

	var result = "";
	var txObject = customReserveInstance.methods.updateEthToTokenOrder(
		orderId,
    ethAmount,
		tokenAmount
  );
	try {
  	result = await sendTx(txObject);
	}catch (err){
		result = err;
	}
	return result;
}

//Update sell orders - TokenToEth
window.updateTokenToEthOrderInReserve = async function(tokenReserveContractAddress, tokenAddress, orderId, tokenAmount, ethAmount){
	console.log("updateTokenToEthOrderInReserve");
	var customReserveInstance = new web3.eth.Contract(OrderbookReserve_ABI, tokenReserveContractAddress);
	customReserveInstance.setProvider(provider);

	var tokenInstance = new web3.eth.Contract(KNC_ABI, tokenAddress);
	tokenInstance.setProvider(provider);
	var decimals = await tokenInstance.methods.decimals().call();
	var power = Math.pow(10,decimals);
	tokenAmount = (
		tokenAmount * web3.utils.toBN(power)
  ).toString();

	ethAmount = web3.utils.toWei(ethAmount);

	var result = "";
	var txObject = customReserveInstance.methods.updateTokenToEthOrder(
		orderId,
    tokenAmount,
		ethAmount
  );
	try {
  	result = await sendTx(txObject);
	}catch (err){
		result = err;
	}
	return result;
}

//Cancel buy orders - ETHtoToken
window.cancelEthToTokenOrderInReserve = async function(tokenReserveContractAddress, orderId){
	console.log("cancelEthToTokenOrderInReserve");
	var customReserveInstance = new web3.eth.Contract(OrderbookReserve_ABI, tokenReserveContractAddress);
	customReserveInstance.setProvider(provider);

	var result = "";
	var txObject = customReserveInstance.methods.cancelEthToTokenOrder(
		orderId
  );
	try {
  	result = await sendTx(txObject);
	}catch (err){
		result = err;
	}
	return result;
}

//Cancel sell orders - TokenToEth
window.cancelTokenToEthOrderInReserve = async function(tokenReserveContractAddress, orderId){
	console.log("updateTokenToEthOrderInReserve");
	var customReserveInstance = new web3.eth.Contract(OrderbookReserve_ABI, tokenReserveContractAddress);
	customReserveInstance.setProvider(provider);

	var result = "";
	var txObject = customReserveInstance.methods.cancelTokenToEthOrder(
		orderId
  );
	try {
  	result = await sendTx(txObject);
	}catch (err){
		result = err;
	}
	return result;
}


//Create Reserve Functions
window.addOrderbook = async function(token){
	console.log("addOrderbookContract");
	var result = "";
	//Step 1: add the OrderBook
	txObject = OrderbookContractReserveInstance.methods.addOrderbookContract(
    token
  );
	try {
  	result = await sendTx(txObject);
	}catch (err){
		result = err;
	}
	return result;
}

window.initOrderbook = async function(token){
	console.log("initOrderbookContract");
	var result = "";
	//Step 2: Initiate the OrderBook
	txObject = OrderbookContractReserveInstance.methods.initOrderbookContract(
    token
  );
	try {
  	result = await sendTx(txObject);
	}catch (err){
		result = err;
	}

	return result;
}

window.listOrderbook = async function(token){
	console.log("listOrderbookContract");
	var result = "";
	//Step 3: List the Orderbook
	txObject = OrderbookContractReserveInstance.methods.listOrderbookContract(
    token
  );
	try {
  	result = await sendTx(txObject);
	}catch (err){
		result = err;
	}

	return result;
}
