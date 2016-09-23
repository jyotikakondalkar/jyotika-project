function showStoreLocatorScreen(){
	frmStoreLocator.show();
}

function getStoreDetails() {
    try {
	     var storeSearch = frmStoreLocator.TextboxLoactionSearch.text;
	     kony.print("storeSearch=> "+storeSearch);
	      if (storeSearch == null || storeSearch == "") {
	      	showAlert("Please Enter City.", "Info!");
	      	frmStoreLocator.MapStore.locationData = [];
	      	return;
	      }
        showLoadingIndicator();
     
        var inputParams = {};
        inputParams["serviceID"] = "getStoreLocation";
        inputParams["ServiceName"] = "getStoreLocation";
        inputParams["apiKey"] = gblApiKey;
        inputParams["city"] = storeSearch;
		//gblCatId = catId;
        invokeServiceAsync(inputParams, callBackGetStoreDetails);
    } catch (e) {
        kony.print(e.toString());
        dismissLoadingIndicator();

    }
}

function callBackGetStoreDetails(status, resultTable) {
	try {
		kony.print("in get callBackGetStoreDetails..");
		if(status == 400 || status == "400") {
		var result = checkServiceResponse(status, resultTable);
		var storesDataSet = [];
		kony.print("result==> "+JSON.stringify(result));
		if (result != null) {
				var dataSet = result.storesDataSet;
				
				kony.print("dataSet=> "+JSON.stringify(dataSet));
				kony.print("dataSet.length=> "+dataSet.length);
				
				if(dataSet.length>0){
				
				frmStoreLocator.MapStore.calloutTemplate = calloutMaps; //hbxname
                frmStoreLocator.MapStore.calloutWidth = 80;
                
                frmStoreLocator.MapStore.widgetDataMapForCallout = {
                    imgLogo: "imgLogo",
                    lblStoreName: "lblStoreName",
                    lblAddress: "lblAddress",
                    lblHours: "lblHours",
                    lblHoursData: "lblHoursData"
                };
                
				  for (var store in dataSet) {
                    var storeData = {
                        lat: dataSet[store]["lat"],
                        lon: dataSet[store]["lng"],
                        name: dataSet[store]["name"],
                   
                        showcallout: true,
                        calloutData: {
                            imgLogo: "compass.png",
                            lblStoreName: dataSet[store]["name"],
                            lblAddress: "" + dataSet[store]["address"],
                            lblHours: "Hours:",
                            lblHoursData: "" + dataSet[store]["hours"],
                            template: calloutMaps
                        },
                        image: "pinb.png",
                        meta: {
                            color: "red",
                            label: "R"
                        }
                    }
                    storesDataSet.push(storeData);
                }
                
				frmStoreLocator.MapStore.locationData = storesDataSet;
				frmStoreLocator.show();
				
				}else{
					//alert("Product are not available.");
					showAlert("Stores are not available.", "Store Data:");
					//frmStoreLocator.MapStore.locationData = [];
					showCurrentLocation();
				}			
			dismissLoadingIndicator();

		} else {
			dismissLoadingIndicator();
			showAlert("Service is currently unavailable. Please try again later.", "Service Error!")
		}
		}
	}catch (e) {
	kony.print(e.toString());
	dismissLoadingIndicator();
}
}

//------------Default Location on map---------

function showCurrentLocation() {
//var locationData = {
//lat :"32",lon :"-96.3",name: "Texas",desc: "map_default_loc"
//};

  /*lat: "40.712784",
        lon: "-74.005941"*/
var locationData = {
         lat: "32.876068",
        lon: "-96.768257"
    };
    
    
//frmStoreLocator.MapStore.locationData = [];
frmStoreLocator.MapStore.navigateToLocation(locationData, false, false);
}

