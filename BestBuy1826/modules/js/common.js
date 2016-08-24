
// To check network availability
function checkIsNetworkAvailable() {
	if (undefined == constants.NETWORK_TYPE_ANY) {
		return true;
	}
	return kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
}

// To invoke services
function invokeServiceAsync(inputParams, callBackFun) {

	//getGblSecureToken();

	try {
		kony.print("checkIsNetworkAvailable :: " + checkIsNetworkAvailable());

		if (checkIsNetworkAvailable()) {
			kony.print("Input Params: " + JSON.stringify(inputParams));
			appmiddlewareinvokerasync(inputParams, callBackFun);

		} else {
			dismissLoadingIndicator();
			showAlert("Network is not available. Please try again later.", "Network Error!");
		}
	} catch (e) {
		kony.print("************error msg in invokeServiceAsync:" + e);
	}

}

function dismissLoadingIndicator() {
	try {
		kony.application.dismissLoadingScreen();
	} catch (e) {
		kony.print("error msg in dismissLoadingIndicator:" + e);
	}
}

function showLoadingIndicator() {
	try {
		// kony.application.showLoadingScreen(BlockedUI,"Please Wait...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true,true);
		kony.application.showLoadingScreen("sknLoading", "     " + "Please wait..." + "    ", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {});
	} catch (e) {
		kony.print("error msg in showLoadingIndicator:" + e);
	}
}

function showAlert(msg, title) {
	kony.ui.Alert(msg,
		null,
		"info",
		null,
		null,
		title);

}

function checkServiceResponse(status, results) {
	try {
		var resultTable = null;
		var opStatus = "";
			if (status == 400 || status == "400") {
				kony.print("Http Status Code:  " + results["httpStatusCode"]);
				if (results != null && (results["httpStatusCode"] != 404 || results["httpStatusCode"] != "404")) {
					kony.print(" results from JSON SERVICE::::>>" + results);
					opStatus = results.opstatus;
					kony.print(" results from JSON SERVICE opStatus::::>>" + opStatus);
					if ((opStatus == 0 || opStatus == 0.0 || opStatus == "0.0" || opStatus == "0")) {
						resultTable = results;
					} else {
						if (opStatus == "1011" || opStatus == 1011.0 || opStatus == 1011) {
							
							showAlert("Network is currently unavailable. Please try again later.","Network Error!");
						} else {
							showAlert("Service is currently unavailable. Please try again later.","Service Error!");
							kony.print("****************************************************4");
						}
						dismissLoadingIndicator();
					}
				} else {
					//need to handle the error codes
					showAlert("Service is currently unavailable. Please try again later.","Service Error!");
					kony.print("$$$$$$$$____ results are null ____$$$$$$$$$$");
				}
			}
		return resultTable;
	} catch (e) {
		kony.print("*******error msg in checkServiceResponse:" + e);
	}
}


function hideBackButton(frmObj){
kony.print("in hide Back Button: "+frmObj);
	if(frmObj == "frmHome"){
	kony.print("in if");
		//frmHome.btnBack.setVisibility(false);
		frmObj.btnBack.setVisibility(true);
	}else{
		frmObj.btnBack.setVisibility(false);
	}
}

function appOnLaunch(){
	gblCategories = [];
	counter=0;
	gblBreadCrumbs = [];
	gblBreadCrumbs = [];
	gblProducts = [];
	gblSelectedValue = "";
	gblCatId = "";
	gblBackFrom = "";
}