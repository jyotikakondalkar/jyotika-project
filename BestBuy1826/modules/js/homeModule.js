
function getCategories(catId) {
    try {
        showLoadingIndicator();
     
        var inputParams = {};
        inputParams["serviceID"] = "getCategories";
        inputParams["ServiceName"] = "getCategories";
        inputParams["apiKey"] = gblApiKey;
        inputParams["id"] = catId;

        invokeServiceAsync(inputParams, callBackGetCategories);
    } catch (e) {
        kony.print(e.toString());
        dismissLoadingIndicator();

    }
}

function callBackGetCategories(status, resultTable) {
	try {
	kony.print("in get Catgories..")
		if(status == 400 || status == "400") {
		var result = checkServiceResponse(status, resultTable);
		var catDetails = [];
		if (result != null) {
				var dataSet = result.categoryDataSet;
				var categoryName = "";
				var categoryId = "";
				kony.print("dataSet=> "+JSON.stringify(dataSet));
				frmHome.segProductList.removeAll();
				for(var i = 0; i < dataSet.length; i++) {
					categoryName = dataSet[i]["categoryName"];
					categoryId = dataSet[i]["categoryId"];
					
					catDetails.push({
						lblProdName: categoryName,
						lblProdId: categoryId
					});
				}
				frmHome.segProductList.setData(catDetails);
				if(counter==1){
					gblCategories.push(catDetails);
				}else if(counter==2){
					gblSubCategories1.push(catDetails);
				}else if(counter==3){
					gblSubCategories2.push(catDetails);
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

function onCategoriesSegClick(catId){
	counter++;
	kony.print("Selected Index=> "+catId);
	var categoryId = catId.trim();
	if(counter<=3){
		getCategories(categoryId);
	}else{
		alert("Counter exceeds greater that 3=> "+counter);
	}
}