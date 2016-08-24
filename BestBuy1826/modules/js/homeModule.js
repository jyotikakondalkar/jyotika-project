
function getCategories(catId) {
    try {
        showLoadingIndicator();
     
        var inputParams = {};
        inputParams["serviceID"] = "getCategories";
        inputParams["ServiceName"] = "getCategories";
        inputParams["apiKey"] = gblApiKey;
        inputParams["id"] = catId;
		gblCatId = catId;
        invokeServiceAsync(inputParams, callBackGetCategories);
    } catch (e) {
        kony.print(e.toString());
        dismissLoadingIndicator();

    }
}

function callBackGetCategories(status, resultTable) {
	try {
		kony.print("in get Catgories..");
		if(status == 400 || status == "400") {
		var result = checkServiceResponse(status, resultTable);
		var catDetails = [];
		kony.print("result==> "+JSON.stringify(result));
		if (result != null) {
				var dataSet = result.categoryDataSet;
				var categoryName = "";
				var categoryId = "";
				kony.print("dataSet=> "+JSON.stringify(dataSet));
				kony.print("dataSet.length=> "+dataSet.length);
				if(dataSet.length>0){
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
				gblCategories.push(dataSet);
				gblBreadCrumbs.push(gblSelectedValue);
				if(gblCategories.length>1){
					kony.print("in if btnback");
					frmHome.btnBack.setVisibility(true);
				}else{
					kony.print("in else btnback");
					frmHome.btnBack.setVisibility(false);
				}
				kony.print("crumb value after push=> "+gblBreadCrumbs.length);
				var breadCrumb = "";
				kony.print("=> "+frmHome.lblHomeFlow.text);
				for(var i = 0; i < gblBreadCrumbs.length; i++){
					kony.print("gblBreadCrumbs"+gblBreadCrumbs[i]);
					if(gblBreadCrumbs.length==1){
						breadCrumb = gblBreadCrumbs[0];
					}else{
						if(breadCrumb==""){
							breadCrumb = breadCrumb+gblBreadCrumbs[i];
						}else{
							breadCrumb = breadCrumb + " > " +gblBreadCrumbs[i];
						}
					}
				}
				frmHome.lblHomeFlow.text = breadCrumb;
				}else{
					alert("Product are not available.");
					kony.print("gblCatId=> "+gblCatId);
					getProducts(gblCatId);
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
	kony.print("Selected Index=> "+catId);
	var categoryId = catId.trim();
	//kony.print("counter=> "+counter);
	//if(counter<3){
		getCategories(categoryId);
	//}else{
	//	alert("Counter exceeds greater that 3=> "+counter);
	//}
}

function onBackButtonClick(){
	showLoadingIndicator();
	var catDetails = [];
	var subCategories = [];
	
	if(gblCategories.length>1){
		kony.print("In if length > 0");
		if(gblBackFrom == "Product"){
			subCategories = gblCategories[gblCategories.length - 1];
		}else{
			subCategories = gblCategories[gblCategories.length - 2];
		}
	}
	kony.print("you are in device back");
	kony.print("Dataset is: "+JSON.stringify(gblCategories));
	kony.print("gblCategories length is: "+gblCategories.length);
	kony.print("gblBreadCrumbs=> "+gblBreadCrumbs.length);
	kony.print("subCategories=>"+JSON.stringify(subCategories))
	if(subCategories.length>0){
	frmHome.segProductList.removeAll();

	for(var i = 0; i < subCategories.length; i++) {
					categoryName = subCategories[i]["categoryName"];
					categoryId = subCategories[i]["categoryId"];
					
					catDetails.push({
						lblProdName: categoryName,
						lblProdId: categoryId
					});
	}
	var breadCrumb = "";
	if(gblBackFrom != "Product"){
	for(var i = 0; i < gblBreadCrumbs.length-1; i++){
		if(gblBreadCrumbs.length==1){
			breadCrumb = gblBreadCrumbs[0];
		}else{
		if(breadCrumb==""){
			breadCrumb = breadCrumb+gblBreadCrumbs[i];
		}else{
			breadCrumb = breadCrumb + " > " +gblBreadCrumbs[i];
		}
		}
	}
	}else{
	for(var i = 0; i < gblBreadCrumbs.length; i++){
		if(gblBreadCrumbs.length==1){
			breadCrumb = gblBreadCrumbs[0];
		}else{
		if(breadCrumb==""){
			breadCrumb = breadCrumb+gblBreadCrumbs[i];
		}else{
			breadCrumb = breadCrumb + " > " +gblBreadCrumbs[i];
		}
		}
	}
	}
	frmHome.lblHomeFlow.text = breadCrumb;
	frmHome.segProductList.setData(catDetails);
	if(gblCategories.length>1){
		if(gblBackFrom != "Product"){
			gblCategories.pop();
			gblBreadCrumbs.pop();
		}
	}else{
		alert("This is the home page.");
	}
	}
	if(gblCategories.length>1){
					kony.print("in if btnback");
					frmHome.btnBack.setVisibility(true);
				}else{
					kony.print("in else btnback");
					frmHome.btnBack.setVisibility(false);
				}
	if(gblBackFrom == "Product"){
		frmHome.show();
	}
	kony.print("after pop gblCategories length is: "+gblCategories.length);
	kony.print("after pop gblBreadCrumbs length is: "+gblBreadCrumbs.length);
	dismissLoadingIndicator();
}