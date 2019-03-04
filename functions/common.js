/*
  Common functions across pages
*/

//Cache-related variables - turn cache on/off from here or set your own URL
//Set cache by default, user can toggle it from the button provided
var ropstenCacheURL = "https://timski.org/dSwaps-reserves-cache/ropstenReserves.json?callback=?";
var mainnetCacheURL = "https://timski.org/dSwaps-reserves-cache/mainnetReserves.json?callback=?";
if(localStorage.getItem('cache_enabled') == 'undefined' || localStorage.getItem('cache_enabled') == null){
  localStorage.setItem('cache_enabled', true);
}
window.cache_enabled = localStorage.getItem('cache_enabled');
//set the button
if(localStorage.getItem('cache_enabled') == "false"){
  $('#cache_button').prop('checked', false);
}else{
  $('#cache_button').prop('checked', true);
}
$( "#cache_button" ).click(function() {
    sessionStorage.clear();
    localStorage.clear();
    localStorage.setItem('cache_enabled', $("#cache_button").is(':checked'));
    location.reload();
});



// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, false);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

showLoadingModal = function(text){
  $("#loader-txt").html("<p>"+text+"</p>");
  $("#loadMe").modal({
    backdrop: "static", //remove ability to close modal with click
    keyboard: false, //remove option to close with keyboard
    show: true //Display loader!
  });
}
hideLoadingModal = function(){
  $("#loadMe").modal("hide");
}

errorModal = function(errorText){
  $("#alertModalText").html("Error");
  $("#alertModalBody").html("<p>"+errorText+"</p>");
  $("#alertModal").modal("show");
}

successModal = function(successText){
  $("#successModalText").html("Success");
  $("#successModalBody").html("<p>"+successText+"</p>");
  $("#successModal").modal("show");
}

handleResult = function(result, text=""){
  if(result.transactionHash != undefined){
    toastr.success("Operation completed!", text+" successful!");
  }else{
    errorModal(result);
  }
}

getReservesOnLoad = async function(){
  if(sessionStorage.getItem('reserveTokenDetails') == null || sessionStorage.getItem('reserveTokenDetails') == undefined){
    var reserveList = await getReserveList();
    reserveTokenDetails = await getReserveDetails(reserveList);
    sessionStorage.setItem('reserveTokenDetails', JSON.stringify(reserveTokenDetails));
  }
}

//remove sessionStorage on each network switch
window.ethereum.on('networkChanged', function (netId) {
  if(sessionStorage.getItem('reserveTokenDetails') != undefined){
    sessionStorage.removeItem('reserveTokenDetails')
  }
})

window.ethereum.on('accountsChanged', function (accounts) {
  location.reload();
})


setupNetwork = async function(){

  await web3.eth.net.getNetworkType().then(async function(value) {
    if(value == "ropsten"){
      $("#networkName").html("Ropsten");
      $("#networkAlert").removeClass('d-none');
      window.cache_URL = ropstenCacheURL;
      chainAddresses = ropstenChainAddresses;
      await setupRopsten();
      getReservesOnLoad();
    }else if(value == "main"){
      $("#networkName").html("Main Ethereum Network");
      $("#networkAlert").addClass('d-none');
      window.cache_URL = mainnetCacheURL;
      chainAddresses = ethChainAddresses;
      await setupMainnet();
      getReservesOnLoad();
    }else{
      $("#networkAlert").removeClass('d-none');
    }
  });
}

var chainAddresses = "";
var ropstenChainAddresses = {
        "ETH": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "ADX": "0x499990DB50b34687CDaFb2C8DaBaE4E99d6F38A7",
        "APPC": "0x2799f05B55d56be756Ca01Af40Bf7350787F48d4",
        "AST": "0xeF06F410C26a0fF87b3a43927459Cce99268a2eF",
        "BAT": "0xDb0040451F373949A4Be60dcd7b6B8D6E42658B6",
        "BBO": "0xa94758d328af7ef1815e73053e95b5F86588C16D",
        "BQX": "0x9504A86A881F63Da06302FB3639d4582022097DB",
        "COFI": "0xb91786188f8d4e35d6d67799e9f162587bf4da03",
        "DAI": "0xaD6D458402F60fD3Bd25163575031ACDce07538D",
        "ELF": "0x9Fcc27c7320703c43368cf1A4bf076402cd0D6B4",
        "ENG": "0x95cc8d8f29D0f7fcC425E8708893E759d1599c97",
        "GTO": "0xe55c607d58c53b2B06A8E38f67F4c0FcAeEd2c31",
        "IOST": "0x27db28a6C4ac3D82a08D490cfb746E6F02bC467C",
        "KNC": "0x4E470dc7321E84CA96FcAEDD0C8aBCebbAEB68C6",
        "LINK": "0xb4f7332ed719Eb4839f091EDDB2A3bA309739521",
        "MANA": "0x72fd6C7C1397040A66F33C2ecC83A0F71Ee46D5c",
        "MOC": "0x1742c81075031b8f173d2327e3479d1fc3feaa76",
        "OMG": "0x4BFBa4a8F28755Cb2061c413459EE562c6B9c51b",
        "POWR": "0xa577731515303F0C0D00E236041855A5C4F114dC",
        "RCN": "0x99338aa9218C6C23AA9d8cc2f3EFaf29954ea26B",
        "RDN": "0x5422Ef695ED0B1213e2B953CFA877029637D9D26",
        "REQ": "0xb43D10BbE7222519Da899B72bF2c7f094b6F79D7",
        "SALT": "0xB47f1A9B121BA114d5e98722a8948e274d0F4042",
        "SNT": "0xbF5d8683b9BE6C43fcA607eb2a6f2626A18837a6",
        "STORM": "0x8FFf7De21de8ad9c510704407337542073FDC44b",
        "ZIL": "0xaD78AFbbE48bA7B670fbC54c65708cbc17450167"
    };

    var ethChainAddresses = {
        "ETH": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "ABT": "0xb98d4c97425d9908e66e53a6fdf673acca0be986",
        "ADX": "0x4470BB87d77b963A013DB939BE332f927f2b992e",
        "AE": "0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d",
        "AION": "0x4CEdA7906a5Ed2179785Cd3A40A69ee8bc99C466",
        "APPC": "0x1a7a8bd9106f2b8d977e08582dc7d24c723ab0db",
        "AST": "0x27054b13b1b798b345b591a4d22e6562d47ea75a",
        "BAT": "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
        "BBO": "0x84f7c44b6fed1080f647e354d552595be2cc602f",
        "BLZ": "0x5732046a883704404f284ce41ffadd5b007fd668",
        "BNT": "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
        "BQX": "0x5af2be193a6abca9c8817001f45744777db30756",
        "CHAT": "0x442bc47357919446eabc18c7211e57a13d983469",
        "COFI": "0x3136ef851592acf49ca4c825131e364170fa32b3",
        "CVC": "0x41e5560054824ea6b0732e656e3ad64e20e94e45",
        "DAI": "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
        "DGX": "0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf",
        "DTA": "0x69b148395ce0015c13e36bffbad63f49ef874e03",
        "EDU": "0xf263292e14d9d8ecd55b58dad1f1df825a874b7c",
        "ELEC": "0xd49ff13661451313ca1553fd6954bd1d9b6e02b9",
        "ELF": "0xbf2179859fc6d5bee9bf9158632dc51678a4100e",
        "ENG": "0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4",
        "ENJ": "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
        "GTO": "0xc5bbae50781be1669306b9e001eff57a2957b09d",
        "IOST": "0xfa1a856cfa3409cfa145fa4e20eb270df3eb21ab",
        "KNC": "0xdd974d5c2e2928dea5f71b9825b8b646686bd200",
        "LBA": "0xfe5f141bf94fe84bc28ded0ab966c16b17490657",
        "LEND": "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03",
        "LINK": "0x514910771af9ca656af840dff83e8264ecf986ca",
        "MANA": "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
        "MDS": "0x66186008C1050627F979d464eABb258860563dbE",
        "MOC": "0x865ec58b06bf6305b886793aa20a2da31d034e68",
        "MOT": "0x263c618480dbe35c300d8d5ecda19bbb986acaed",
        "MTL": "0xF433089366899D83a9f26A773D59ec7eCF30355e",
        "OMG": "0xd26114cd6ee289accf82350c8d8487fedb8a0c07",
        "PAL": "0xfedae5642668f8636a11987ff386bfd215f942ee",
        "PAY": "0xB97048628DB6B661D4C2aA833e95Dbe1A905B280",
        "POE": "0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195",
        "POLY": "0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec",
        "POWR": "0x595832f8fc6bf59c85c527fec3740a1b7a361269",
        "RCN": "0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6",
        "RDN": "0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6",
        "REQ": "0x8f8221afbb33998d8584a2b05749ba73c37a938a",
        "SALT": "0x4156d3342d5c385a87d264f90653733592000581",
        "SNT": "0x744d70fdbe2ba4cf95131626614a1763df805b9e",
        "STORM": "0xd0a4b8946cb52f0661273bfbc6fd0e0c75fc6433",
        "SUB": "0x12480e24eb5bec1a9d4369cab6a80cad3c0a377a",
        "TOMO": "0x8b353021189375591723E7384262F45709A3C3dC",
        "ZIL": "0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27",
        "TUSD": "0x8dd5fbce2f6a956c3022ba3663759011dd51e73e",
        "WABI": "0x286BDA1413a2Df81731D4930ce2F862a35A609fE",
        "WAX": "0x39bb259f66e1c59d5abef88375979b4d20d98022",
        "WBTC": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
        "WETH": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        "WINGS": "0x667088b212ce3d06a1b553a7221E1fD19000d9aF",
    };
