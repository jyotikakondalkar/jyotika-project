function getProductDetails(sku) {
    try {
        showLoadingIndicator();
     
        var inputParams = {};
        inputParams["serviceID"] = "getProductDetails";
        inputParams["ServiceName"] = "getProductDetails";
        inputParams["apiKey"] = gblApiKey;
        inputParams["sku"] = sku;
        gblSku = sku;

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
				var longDescription = "";
				var topViewImage = "";
				var rightViewImage = "";
				var remoteControlImage = "";
				var accessoriesImage = "";
				var leftViewImage = "";
				var energyGuideImage = "";
				var backViewImage = "";
				var angleImage = "";
				var alternateViewsImage = "";
				
				kony.print("dataSet=> "+JSON.stringify(dataSet));
				kony.print("dataSet.length=> "+dataSet.length);
				//Calling getReviews service to get the pagination segment data.
				getProductReviews(gblSku, 0);
				if(dataSet.length>0){
				//frmProducts.segProductList.removeAll();
				//for(var i = 0; i < dataSet.length; i++) {
					gblProdImages = [];
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
					longDescription = dataSet[0]["longDescription"];
					topViewImage = dataSet[0]["topViewImage"];
					rightViewImage = dataSet[0]["rightViewImage"];
					remoteControlImage = dataSet[0]["remoteControlImage"];
					accessoriesImage = dataSet[0]["accessoriesImage"];
					leftViewImage = dataSet[0]["leftViewImage"];
					energyGuideImage = dataSet[0]["energyGuideImage"];
					backViewImage = dataSet[0]["backViewImage"];
					angleImage = dataSet[0]["angleImage"];
					alternateViewsImage = dataSet[0]["alternateViewsImage"];
					
					//Pushing data to gblProdImages to display the images on the frmProductImages Screen.
					if(image != null && image != "" && image != undefined){
						var element = {imgUrl: image, imgSize: "Normal"};
						gblProdImages.push(element);
					}
					if(largeFrontImage != null && largeFrontImage != "" && largeFrontImage != undefined){
						var element = {imgUrl: largeFrontImage, imgSize: "Large Front"};
						gblProdImages.push(element);
					}
					if(mediumImage != null && mediumImage != "" && mediumImage != undefined){
						var element = {imgUrl: mediumImage, imgSize: "Medium"};
						gblProdImages.push(element);
					}
					if(thumbnailImage != null && thumbnailImage != "" && thumbnailImage != undefined){
						var element = {imgUrl: thumbnailImage, imgSize: "Thumbnail"};
						gblProdImages.push(element);
					}
					if(largeImage != null && largeImage != "" && largeImage != undefined){
						var element = {imgUrl: largeImage, imgSize: "Large"};
						gblProdImages.push(element);
					}
					if(topViewImage != null && topViewImage != "" && topViewImage != undefined){
						var element = {imgUrl: topViewImage, imgSize: "Top View"};
						gblProdImages.push(element);
					}
					if(rightViewImage != null && rightViewImage != "" && rightViewImage != undefined){
						var element = {imgUrl: rightViewImage, imgSize: "Right View"};
						gblProdImages.push(element);
					}
					if(remoteControlImage != null && remoteControlImage != "" && remoteControlImage != undefined){
						var element = {imgUrl: remoteControlImage, imgSize: "Remote Control"};
						gblProdImages.push(element);
					}
					if(accessoriesImage != null && accessoriesImage != "" && accessoriesImage != undefined){
						var element = {imgUrl: accessoriesImage, imgSize: "Accessories"};
						gblProdImages.push(element);
					}
					if(leftViewImage != null && leftViewImage != "" && leftViewImage != undefined){
						var element = {imgUrl: leftViewImage, imgSize: "Left View"};
						gblProdImages.push(element);
					}
					if(energyGuideImage != null && energyGuideImage != "" && energyGuideImage != undefined){
						var element = {imgUrl: energyGuideImage, imgSize: "Energy Guide"};
						gblProdImages.push(element);
					}
					if(backViewImage != null && backViewImage != "" && backViewImage != undefined){
						var element = {imgUrl: backViewImage, imgSize: "Back View"};
						gblProdImages.push(element);
					}
					if(angleImage != null && angleImage != "" && angleImage != undefined){
						var element = {imgUrl: angleImage, imgSize: "Angle"};
						gblProdImages.push(element);
					}
					if(alternateViewsImage != null && alternateViewsImage != "" && alternateViewsImage != undefined){
						var element = {imgUrl: alternateViewsImage, imgSize: "Alternate View"};
						gblProdImages.push(element);
					}
					
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
							
					var desc = "";
					if(shortDescription!=""&&shortDescription!=null&&shortDescription!=undefined){
						desc = shortDescription;
					}else{
						desc = "No Description Available.";
					}
					frmProductDetails.lblDetails.text = desc;
					kony.print("shortDescription=> "+desc);
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

function getProductReviews(sku, page) {
    try {
        showLoadingIndicator();
     
        var inputParams = {};
        inputParams["serviceID"] = "getProductReview";
        inputParams["ServiceName"] = "getProductReview";
        inputParams["apiKey"] = gblApiKey;
        inputParams["sku"] = sku;

        invokeServiceAsync(inputParams, callBackGetProductReview);
    } catch (e) {
        kony.print(e.toString());
        dismissLoadingIndicator();

    }
}

function callBackGetProductReview(status, resultTable) {
	try {
		kony.print("in get callBackGetProductDetails..");
		if(status == 400 || status == "400") {
		var result = checkServiceResponse(status, resultTable);
		var products = [];
		kony.print("result==> "+JSON.stringify(result));
		if (result != null) {
				var dataSet = result.reviewsDataSet;
				var segProdDtlsReviews=[];
				var totalNoOfReviews=resultTable["total"];
				var totalNoOfPages=resultTable["totalPages"];
				var currentPage=resultTable["currentPage"];
				for(var j=0;j< dataSet.length;j++){
						kony.print("dataSet[j]"+dataSet[j]);
							var reviewSubmittedBy=dataSet[j]["reviewer"];
							var rating=dataSet[j]["rating"];
							var title=dataSet[j]["title"];
							var comment=dataSet[j]["comment"];
							var starImage="";
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
					//	var tempData={lblReviweTitle:title,lblReviweSubmmited:"Submitted By: "+reviewSubmittedBy,lblReviweDecs:comment,immgReviewRating:starImage};
						var tempData={
								lblGreating:title,
								lblSubmitedBy: "Submitted By: "+reviewSubmittedBy,
								imgRating: starImage,
								lblDesc: comment
							};
						segProdDtlsReviews.push(tempData);
					}
					kony.print("total no of reviews"+totalNoOfReviews);
					
					frmProductDetails.segReviews.setData(segProdDtlsReviews);
					if(totalNoOfReviews==0){
						frmProductDetails.lblReviews.text = "No of Reviews";
						//flxProductDetails.flexUserReviews.setVisibility(false);
					}else{
						frmProductDetails.lblReviews.text = totalNoOfReviews;
						//flxProductDetails.lblNumberOfReviews.text="Total Num of Reviews :"+totalNoOfReviews;
						//flxProductDetails.flexUserReviews.setVisibility(true);
					/*	flxProductDetails.lblPageCount.text="Page "+currentPage+" of "+ totalNoOfPages;
						if(currentPage=="1"||currentPage==1){
							flxProductDetails.btnPrivous.isVisible=false;
						}else{
							flxProductDetails.btnPrivous.isVisible=true;
						}
						if(currentPage==totalNoOfPages || totalNoOfPages=="1"||totalNoOfPages==1){
							flxProductDetails.btnNext.isVisible=false;
						}else{
							flxProductDetails.btnNext.isVisible=true;
						}
						*/
						
					}
					
					
					//frmProductDetails.show();
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

function onProdDetailsBack(){
	frmProducts.show();
}

function onClickOnMoreBtn() {
	try {
	frmProductImage.imgProduct.src = gblProdImages[0]["imgUrl"];
	//frmProductImage.ListBoxPage.
	var masterArray = [];
	for(var i=0; i < gblProdImages.length;i++){
		masterArray.push([ i, gblProdImages[i]["imgSize"]]);
	}
	kony.print("masterArray=> "+JSON.stringify(masterArray));
	frmProductImage.ListBoxPage.masterData = masterArray;
	frmProductImage.ListBoxPage.selectedKey="0.0";
	frmProductImage.show();
} catch (e) {
	kony.print("stack trace=> "+e);
	dismissLoadingIndicator();
}    
}

function onImageSizeSelection() {
	try {
	var selectedSize = frmProductImage.ListBoxPage.selectedKey;
	kony.print("selectedSize=> "+selectedSize);
	var index = kony.os.toNumber(selectedSize);
	kony.print("Roundup value => "+index);
	frmProductImage.imgProduct.src = gblProdImages[index]["imgUrl"];
} catch (e) {
	kony.print("stack trace=> "+e);
	dismissLoadingIndicator();
}    
}

function onProdImageBack() {
	try {
	frmProductDetails.show();
} catch (e) {
	kony.print("stack trace=> "+e);
	dismissLoadingIndicator();
}    
}