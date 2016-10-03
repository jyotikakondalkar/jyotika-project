function getProductDetails(sku) {
    try {
        showLoadingIndicator();
     	frmProductDetails.btnArrow.top = "96%";
		frmProductDetails.flxReviews.top = "100%";
		
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
				getProductReviews(gblSku, 1);
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
							
					var reviewAvg = "";
					if(customerReviewAverage.trim()=="" ||customerReviewAverage==null){
						reviewAvg = "";
					}else{
						reviewAvg = "Avg review: "+customerReviewAverage;
					}
					if(onSale == true || onSale == "true"){
						gblOnSale = true;
						priceToShow = salePrice;
					}else{
						gblOnSale = false;
						priceToShow = regularPrice;
					}
					gblFreeShippingVar = freeShipping;
					//frmProductDetails.imgProduct
					frmProductDetails.lblProdName.text = name;
					frmProductDetails.lblProdPrice.text = "$"+priceToShow;
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
					dismissLoadingIndicator();
					alert("Product Details are not available.");
				}			
		//	dismissLoadingIndicator();

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
		kony.print("getProductReviews=> "+page);
     	gblCurrentPage = page;
        var inputParams = {};
        inputParams["serviceID"] = "getProductReview";
        inputParams["ServiceName"] = "getProductReview";
        inputParams["apiKey"] = gblApiKey;
        inputParams["sku"] = sku;
        inputParams["page"] = page+"".trim();

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
					kony.print("totalNoOfPages==> "+totalNoOfPages);
					frmProductDetails.segReviews.setData(segProdDtlsReviews);
					var totalPagesInt;
					if(totalNoOfPages!=""){
						totalPagesInt = parseInt(totalNoOfPages);
					}else{
						totalPagesInt = 0;
					}
					
					if(totalPagesInt <= 1){
						frmProductDetails.lblPageResult.text = "Page " + gblCurrentPage + " of " +totalNoOfPages;
						frmProductDetails.pageNoList.isVisible = false;
					}else{
						kony.print("In else..");
						var masterArray = [];
						for(var i=0; i < totalPagesInt;i++){
							masterArray.push([ i, (i+1)+""]);
						}
						kony.print("Review masterArray=> "+JSON.stringify(masterArray));
						frmProductDetails.pageNoList.masterData = masterArray;
						//frmProductDetails.pageNoList.masterData="0.0";
						if(gblCurrentPage == "1" || gblCurrentPage == 1){
							frmProductDetails.pageNoList.selectedKey = "0.0";
						}else{
							frmProductDetails.pageNoList.selectedKey = gblCurrentPage +".0";
						}
						
						frmProductDetails.pageNoList.isVisible = true;
						frmProductDetails.lblPageResult.text = "Page " + gblCurrentPage + " of " +totalNoOfPages;
					}
					dismissLoadingIndicator();
					if(totalNoOfReviews==0){
						frmProductDetails.lblReviews.text = "No Reviews";
						frmProductDetails.btnArrow.setVisibility(false);
						frmProductDetails.lblnoofReviews.setVisibility(false);
						//flxProductDetails.flexUserReviews.setVisibility(false);
					}else{
						frmProductDetails.btnArrow.setVisibility(true);
						frmProductDetails.lblReviews.text = totalNoOfReviews;
						frmProductDetails.lblnoofReviews.setVisibility(false);
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
				//	dismissLoadingIndicator();
				

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

function onPageSelction(){
	var selectedSize = frmProductDetails.pageNoList.selectedKey;
	frmProductDetails.pageNoList.selectedKey = selectedSize;
	
	kony.print("onPageSelction selectedSize=> "+selectedSize);
	var index = kony.os.toNumber(selectedSize);
	kony.print("onPageSelction Roundup value => "+index);
	getProductReviews(gblSku, index+1);
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

//----ideal timeout---
function timeout()
  {
 	kony.application.registerForIdleTimeout(2, proddetls);
  }
 
 function proddetls()
  {
    //alert("application timed out");
	kony.print("application timed out");
	//counter=1;
	gblCategories = [];
//gblBreadCrumbs=[];
//gblSelectedValue="Home";
	
	frmHome.flxFadeContainer.isVisible = false;
	frmHome.flxFilterContainer.isVisible = false;
	frmHome.destroy();
	frmHome.listFilterby.selectedKey = "1";
	frmHome.txtSearch.text = "";

 	frmHome.show();
   	frmProductDetails.destroy();
  }
