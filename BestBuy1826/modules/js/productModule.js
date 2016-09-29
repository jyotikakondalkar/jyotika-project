function getProducts(catId) {
    try {
       // showLoadingIndicator();
     	kony.print("You are in getProducts(");
        var inputParams = {};
        inputParams["serviceID"] = "getProducts";
        inputParams["ServiceName"] = "getProducts";
        inputParams["apiKey"] = gblApiKey;
        inputParams["catId"] = catId;
        inputParams["page"] = "1";

        invokeServiceAsync(inputParams, callBackGetProducts);
    } catch (e) {
        kony.print(e.toString());
        dismissLoadingIndicator();

    }
}

function getSearchProducts(searchTxt1) {
    try {
        showLoadingIndicator();
        var selectedFilter = "";
        var searchTxt1 = frmHome.txtSearch.text;
        var appendingString = "";
        gblSearchedText = searchTxt1;
        kony.print("searchTxt1=> "+searchTxt1);
     	if(searchTxt1=="" || searchTxt1==null || searchTxt1 ==undefined){
	     	alert("Please Enter Search Criteria.");
	     	dismissLoadingIndicator();
	     	return;
     	}
     	selectedFilter = frmHome.listFilterby.selectedKeyValue;
     	kony.print("selectedFilter=> "+selectedFilter);
     	var searchText2 = selectedFilter[1];
     	kony.print("searchText2=> "+searchText2);
     	if(searchText2.trim() == "<Select a value>"){
     		appendingString = "";
     	}else if(searchText2.trim() == "On sale"){
     		appendingString = "&onSale=true";
     	}else if(searchText2.trim() == "Not on sale"){
     		appendingString = "&onSale=false";
     	}else if(searchText2.trim() == "New"){
     		appendingString = "&new=true";
     	}else if(searchText2.trim() == "Not new"){
     		appendingString = "&new=false";
     	}else if(searchText2.trim() == "Free Shipping"){
     		appendingString = "&freeShipping=true";
     	}else if(searchText2.trim() == "No Free Shipping"){
     		appendingString = "&freeShipping=false";
     	}
        var inputParams = {};
        inputParams["serviceID"] = "getSearchedProducts";
        inputParams["ServiceName"] = "getSearchedProducts";
        inputParams["apiKey"] = gblApiKey;
        inputParams["search"] = searchTxt1+appendingString;
		kony.print("searchTxt1+appendingString=> "+searchTxt1+appendingString);
        invokeServiceAsync(inputParams, callBackGetProducts);
    } catch (e) {
        kony.print(e.toString());
        dismissLoadingIndicator();

    }
}

function callBackGetProducts(status, resultTable) {
	try {
		kony.print("in get Catgories..");
		if(status == 400 || status == "400") {
		var result = checkServiceResponse(status, resultTable);
		var products = [];
		kony.print("result==> "+JSON.stringify(result));
		if (result != null) {
				var dataSet = result.productsDataSet;
				var sku = "";
				var productId = "";
				var name = "";
				var type = "";
				var startDate = "";
				var newStatus = "";
				var active = "";
				var lowPriceGuarantee = "";
				var regularPrice = "";
				var salePrice = "";
				var onSale = "";
				var thumbnailImage = "";
				var freeShipping = "";
				var customerReviewAverage = "";
				var priceToShow = "";
				var skinOnPrice ="";
				var lblToShowOnShipping ="";
				
				kony.print("dataSet=> "+JSON.stringify(dataSet));
				kony.print("dataSet.length=> "+dataSet.length);
				if(dataSet.length>0){
				frmProducts.segProductList.removeAll();
				for(var i = 0; i < dataSet.length; i++) {
					sku = dataSet[i]["sku"];
					productId = dataSet[i]["productId"];
					name = dataSet[i]["name"];
					type = dataSet[i]["type"];
					newStatus = dataSet[i]["newStatus"];
					active = dataSet[i]["active"];
					lowPriceGuarantee = dataSet[i]["lowPriceGuarantee"];
					regularPrice = dataSet[i]["regularPrice"];
					salePrice = dataSet[i]["salePrice"];
					onSale = dataSet[i]["onSale"];
					thumbnailImage = dataSet[i]["thumbnailImage"];
					freeShipping = dataSet[i]["freeShipping"];
					customerReviewAverage=dataSet[i]["customerReviewAverage"];
					var reviewAvg = "";
					if(customerReviewAverage.trim()=="" ||customerReviewAverage==null){
						reviewAvg = "";
					}else{
						reviewAvg = "Avg User Rating: "+customerReviewAverage;
					}
					if(onSale == true || onSale == "true"){
						priceToShow = salePrice;
						skinOnPrice = "sknProdAvgRed";
					}else{
						priceToShow = regularPrice;
						skinOnPrice = "sknProdAvg";
					}
					
					if(freeShipping== true || freeShipping== "true"){
						lblToShowOnShipping = "!!!Free Shipping !!!";
					}else{
						lblToShowOnShipping = "";
					}
					
					products.push({
						imgProd : thumbnailImage,
						lblFreeShipping :lblToShowOnShipping,
						lblProdName: name,
						lblProdPrice: {
										text: "$" + priceToShow,
										skin: skinOnPrice
									   },
						lblProdAvg: reviewAvg,
						lblSku: sku,
						lblProductId: productId
					});
				}
				frmProducts.segProductList.setData(products);
				if(gblSearchedText != ""){
					frmProducts.lblResultData.text = gblSearchedText;
				}else{
					frmProducts.lblResultData.text = gblSelectedValue;
				}
				
				gblProducts.push(dataSet);
				frmProducts.show();
				}else{
					alert("Product are not available.");
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