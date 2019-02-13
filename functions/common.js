const mnemonic = 'gesture rather obey video awake genuine patient base soon parrot upset lounge';
const rpcUrlRopsten = 'https://ropsten.infura.io/v3/b8a2f3da69ed42e49780464311838538';
//setupTrade(mnemonic, rpcUrlRopsten, "Ropsten");

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
    //hideLoadingModal();
    toastr.success("Operation completed!", text+" successful!");
    //successModal(text+" successful!");
  }else{
    //hideLoadingModal();
    errorModal(result);
  }
}
