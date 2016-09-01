function getProductDetails(sku) {
    try {
        showLoadingIndicator();
     
        var inputParams = {};
        inputParams["serviceID"] = "getProductDetails";
        inputParams["ServiceName"] = "getProductDetails";
        inputParams["apiKey"] = gblApiKey;
        inputParams["sku"] = sku;

        invokeServiceAsync(inputParams, callBackGetProductDetails);
    } catch (e) {
        kony.print(e.toString());
        dismissLoadingIndicator();

    }
}

function callBackGetProductDetails(status, resultTable) {
	try {
		kony.print("in get callBackGetProductDetails..");
		if(status == 400 || status == "400") {
		var result = checkServiceResponse(status, resultTable);
		var products = [];
		kony.print("result==> "+JSON.stringify(result));
		if (result != null) {
				var dataSet = result.productData;
				var sku = "";
				var name = "";
				var productId = "";
				var newTag = "";
				var regularPrice = "";
				var salePrice = "";
				var onSale = "";
				var customerReviewCount = "";
				var customerReviewAverage = "";
				var freeShipping = "";
				var shippingCost = "";
				var image = "";
				var largeFrontImage = "";
				var mediumImage = "";
				var thumbnailImage = "";
				var largeImage = "";
				var shortDescription = "";
				
				kony.print("dataSet=> "+JSON.stringify(dataSet));
				kony.print("dataSet.length=> "+dataSet.length);
				if(dataSet.length>0){
				//frmProducts.segProductList.removeAll();
				//for(var i = 0; i < dataSet.length; i++) {
				
					sku = dataSet[0]["sku"];
					name = dataSet[0]["name"];
					productId = dataSet[0]["productId"];
					newTag = dataSet[0]["newTag"];
					regularPrice = dataSet[0]["regularPrice"];
					salePrice = dataSet[0]["salePrice"];
					onSale = dataSet[0]["onSale"];
					customerReviewCount = dataSet[0]["customerReviewCount"];
					customerReviewAverage = dataSet[0]["customerReviewAverage"];
					freeShipping = dataSet[0]["freeShipping"];
					shippingCost = dataSet[0]["shippingCost"];
					image = dataSet[0]["image"];
					largeFrontImage = dataSet[0]["largeFrontImage"];
					mediumImage = dataSet[0]["mediumImage"];
					thumbnailImage = dataSet[0]["thumbnailImage"];
					largeImage = dataSet[0]["largeImage"];
					shortDescription = dataSet[0]["shortDescription"];
					
					var reviewAvg = "";
					if(customerReviewAverage.trim()=="" ||customerReviewAverage==null){
						reviewAvg = "";
					}else{
						reviewAvg = "Avg review: "+customerReviewAverage;
					}
					if(onSale == true || onSale == "true"){
						priceToShow = salePrice;
					}else{
						priceToShow = regularPrice;
					}
					
					//frmProductDetails.imgProduct
					frmProductDetails.lblProdName.text = name;
					frmProductDetails.lblProdPrice.text = priceToShow;
					frmProductDetails.lblProdAvg.text = reviewAvg;
					var starImage="";
					var rating=customerReviewAverage;
						if(kony.os.toNumber(rating) < 2 && kony.os.toNumber(rating)>0){
								starImage="ratings_star_1.png";
							}else if(kony.os.toNumber(rating) >=2 && kony.os.toNumber(rating) < 3){
								starImage="ratings_star_2.png";
							}else if(kony.os.toNumber(rating) >=3 && kony.os.toNumber(rating) < 4){
								starImage="ratings_star_3.png";
							}else if(kony.os.toNumber(rating) >=4 && kony.os.toNumber(rating) < 5){
								starImage="ratings_star_4.png";
							}else if(kony.os.toNumber(rating) >=5){
								starImage="ratings_star_5.png";
							}
					frmProductDetails.lblDetails.text = shortDescription;
					kony.print("shortDescription=> "+shortDescription);
					frmProductDetails.imgReview.src = starImage;
					kony.print("starImage=> "+starImage);
					var prodImage = "";
					if(thumbnailImage.trim()=="" || thumbnailImage==null){
						prodImage = mediumImage;
					}else{
						prodImage = thumbnailImage;
					}
					kony.print("prodImage=> "+prodImage);
					frmProductDetails.imgProduct.src = prodImage;
					frmProductDetails.show();
				}else{
					alert("Product Details are not available.");
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