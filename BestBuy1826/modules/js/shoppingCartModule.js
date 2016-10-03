/**
 **************************************************************************************************************************************************************************************
 *	Name    : addToCart
 *	Purpose : This function is called on click of Add to Cart of Product details screen.
 **************************************************************************************************************************************************************************************
 */
function addToCart() {
    try {
        var priceSkin = "";
        kony.print("in func addToCart.. ");
        frmCart.lblCartdesc.setVisibility(false);
        var lblProdNameShopCart = new kony.ui.Label({
            "id": "lblProdNameShopCart" + widgetId,
            "top": "1%",
            "left": "1%",
            "width": "64%",
            "height": "98%",
            "zIndex": 1,
            "isVisible": true,
            "text": frmProductDetails.lblProdName.text,
            "skin": "sknProdName"
        }, {
            "padding": [0, 0, 0, 0],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 0
        }, {
            "textCopyable": false
        });
        kony.print("widget id:- " + widgetId);
        gblFreeShipping[widgetId] = gblFreeShippingVar;
        kony.print("added value >>" + JSON.stringify(gblFreeShipping));
        if (gblOnSale == true) {
            priceSkin = "sknPriceRed";
        } else {
            priceSkin = "sknProdName";
        }
        var lblPriceShopCart = new kony.ui.Label({
            "id": "lblPriceShopCart" + widgetId,
            "top": "27%",
            "left": "64%",
            "width": "20%",
            "height": "46%",
            "zIndex": 1,
            "isVisible": true,
            "text": cartProductPriceAddtion(frmProductDetails.lblProdPrice.text),
            //"text": "$"+frmProductDetails.lblProdPrice.text,
            //"skin": setSkin(frmProductList.segmentProductList.selectedItems[0].lblonSalePrice, frmProductList.segmentProductList.selectedItems[0].lblNewProduct)
            "skin": priceSkin

        }, {
            "padding": [0, 0, 0, 0],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 0
        }, {
            "textCopyable": false
        });
        var btnRemoveShopCart = new kony.ui.Button({
            "id": "btnRemoveShopCart" + widgetId,
            "top": "1%",
            "left": "85%",
            "width": "14%",
            "height": "98%",
            "zIndex": 1,
            "isVisible": true,
            "src": "cartremoveitem.png",
            "onTouchStart": removeItemFromCart,
            "skin": "SkinDelete"
        }, {
            "padding": [0, 0, 0, 0],
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 0
        }, {});

        var lblLine = new kony.ui.Label({
            "id": "lblLine" + widgetId,
            "top": "99%",
            "left": "0%",
            "width": "100%",
            "height": "2%",
            "zIndex": 1,
            "isVisible": true,
            "text": null,
            "skin": "linecolor"
        }, {
            "padding": [0, 0, 0, 0],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 0
        }, {
            "textCopyable": false
        });
        var flexShopCartProduct = new kony.ui.FlexContainer({
            "id": "flexShopCartProduct" + widgetId,
            "centerX": "50%",
            //"centerY":"7%",
            "left": "0%",
            "width": "100%",
            "height": "20%",
            "zIndex": 1,
            "isVisible": true,
            "clipBounds": true,
            "Location": "[0,0]",
            "skin": "slFbox",
            "layoutType": kony.flex.FREE_FORM
        }, {
            "padding": [0, 0, 0, 0]
        }, {});;

        flexShopCartProduct.setDefaultUnit(kony.flex.DP)
        flexShopCartProduct.add(lblProdNameShopCart, lblPriceShopCart, btnRemoveShopCart, lblLine);
        frmCart.flxScrollContainer.add(flexShopCartProduct);

        widgetId++;
        kony.print("After increment=> " + widgetId);
        showAlert("Best Buy", "Your Item has been added to Cart Successfully.");

    } catch (e) {
        kony.print("Exception occured at : addToCart " + e);
    }
}

function setSkin(priceSkin, newProduct) {
    try {
        gblFreeShipping[widgetId] = newProduct;
        kony.print("added value >>" + JSON.stringify(gblFreeShipping));
        if (priceSkin == "true") {
            return "skinLabelRedFont"
        } else {

            return "skinLabelProductDetails"
        }
    } catch (exception) {
        kony.print("setSkin method Exception catched " + exception);
    }
}

function showFreeShipping() {
    try {
        kony.print("check value >>" + JSON.stringify(gblFreeShipping));
        frmCart.lblShipping.isVisible = true;
        var tempCounter = 0;
        for (var i = 0; i < gblFreeShipping.length; i++) {

            if (gblFreeShipping[i] == "true" || gblFreeShipping[i] == true) {

                tempCounter++;

            } else {
                kony.print("No Free Shipping Item ");
            }
        }
        kony.print("Counter Value >>>" + tempCounter);
/*   if (tempCounter > 0) {
            frmShoppingCart.lblShipping.text = "You have items that are new. Shipping may be delayed.";
        } else {
            frmShoppingCart.lblShipping.text = "Normal Shipping Schedule.";
        }*/
        if (tempCounter == gblFreeShipping.length) {
            frmCart.lblShipping.text = "Free Shipping";
        } else {
            frmCart.lblShipping.text = "Regular shipping rate";
        }
    } catch (exception) {
        kony.print("showFreeShipping method Exception catched " + exception);
    }
}

/**
 ******************************************************************************************************************************************************
 *	Name    : removeItemFromCart
 *	Author  : 
 *	Purpose : This funtion is called onTouchStart of Remove Cart button of Shopping cart screen. It removes the flex with animation from Shopping cart.
 ******************************************************************************************************************************************************
 */
function removeItemFromCart() {
    try {
        var itemId = this.id;
        kony.print("removeItemFromCart=>itemId  " + itemId);
        currentItemId = itemId.slice(17);
        var tempIphone = kony.ui.makeAffineTransform();
        //tempIphone.scale(0, 0);
        //tempIphone.transform(100,0);
        //tempIphone.move(100,0)
        var transformProp1 = kony.ui.makeAffineTransform();
        transformProp1.translate(360, 0);

        var flexId = "flexShopCartProduct" + currentItemId;
        kony.print("itemId = " + itemId);
        kony.print("currentItemId = " + currentItemId);
        kony.print("flexId = " + flexId);
        gblFreeShipping[currentItemId] = "false";
        kony.print("gblFreeShipping[currentItemId]=> " + gblFreeShipping[currentItemId]);
        kony.print("gblFreeShipping in remove item => " + JSON.stringify(gblFreeShipping));
        //#ifdef spaip
        gblPriceSub = 0.00;
        gblPriceSub = parseFloat(mainPriceForSpa[currentItemId]);
        total = parseFloat(total) - parseFloat(gblPriceSub);
        total = total.toFixed(2);
        showFreeShipping();
        //#else
        //#ifdef spaan
        gblPriceSub = 0.00;
        gblPriceSub = parseFloat(mainPriceForSpa[currentItemId]);
        total = parseFloat(total) - parseFloat(gblPriceSub);
        total = total.toFixed(2);
        showFreeShipping();
        //#else
        CartProductPriceSubtraction(currentItemId);
        //#endif
        //#endif


        frmCart.flxScrollContainer[flexId].animate(kony.ui.createAnimation({
            //#ifdef iphone
            "100": {
                "transform": tempIphone
            },
            //#else
            "100": {
                "transform": transformProp1,

                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            }
            //#endif

        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.555
        }, {

            "animationEnd": function() {
                try { //frmShoppingCart.remove(flexId);
                    frmCart.flxScrollContainer[flexId].removeFromParent();
                    frmCart.flxScrollContainer.forceLayout();
                    frmCart.forceLayout();
                    showEmptyCartLabel();
                } catch (exception) {
                    kony.print("animationEnd of removeItemFromCart method Exception catched " + exception);
                }
            }
        });
    } catch (exception) {
        kony.print("removeItemFromCart method Exception catched " + exception);
    }
}


function CartProductPriceSubtraction(subPrice) {
    try {

        kony.print("Main Id ===" + subPrice);

        var lblPriceId = "lblPriceShopCart" + subPrice;
        kony.print("lblPriceId ===" + lblPriceId);

        //var cartPriceText = frmShoppingCart.flexAllShoppingCart[lblPriceId].text;
        var cartPriceText = frmCart.flxScrollContainer[lblPriceId].text;
        kony.print("cartPriceText ===" + cartPriceText);

        // var cartPriceText = cartPriceText.slice(1);
        var cartPriceText = cartPriceText;
        kony.print("cartPriceText Slice Val ===" + cartPriceText);

        total = parseFloat(total) - parseFloat(cartPriceText);
        total = total.toFixed(2);

        kony.print("Total Price Value ===" + total);
        showFreeShipping();
    } catch (exception) {
        kony.print("cartProductPriceAddtion method Exception catched " + exception);
    }
}

function showEmptyCartLabel() {
    try {
        frmCart.lblTotal.text = "Total: $" + total;
        // frmShoppingCart.lblTotalPriceShopCart.text = "Total: $" + total;
        if (total < 1 || total == NaN) {
            frmCart.lblCartdesc.isVisible = true;
            frmCart.lblTotal.isVisible = false;
            frmCart.lblShipping.isVisible = false;

            //frmShoppingCart.lblDefaultEmptyCart.isVisible = true;
            //frmShoppingCart.lblTotalPriceShopCart.isVisible = false;
            //frmShoppingCart.lblShipping.isVisible = false;
        } else {
            frmCart.lblCartdesc.isVisible = false;
            frmCart.lblTotal.isVisible = true;
            //frmShoppingCart.lblTotalPriceShopCart.isVisible = true;
            //frmShoppingCart.lblDefaultEmptyCart.isVisible = false;
        }
    } catch (exception) {
        kony.print("showEmptyCartLabel method Exception catched " + exception);
    }
}

function onShoppingCartBack() {
    frmProductDetails.show();
}

function cartProductPriceAddtion(price) {
    try {
        kony.print("in cartProductPriceAddtion=> " + price);
        // var newPrice = price.slice(1);
        var newPrice = price;
        kony.print("newPrice=> " + newPrice);
        total = parseFloat(total) + parseFloat(newPrice);
        kony.print("total=> " + total);
        mainPriceForSpa[widgetId] = parseFloat(newPrice);
        total = total.toFixed(2);
        return price;
    } catch (exception) {
        kony.print("cartProductPriceAddtion method Exception catched " + exception);
    }
}

function showTotal() {
    try {
        if (widgetId > 0) {
            frmCart.lblTotal.text = "Total: " + total;
            //frmShoppingCart.flexAllShoppingCart.add(lblTotalPriceShopCart);
            kony.print("Total Label Created");
        } else {
            kony.print("lblTotalPriceShopCart is not null");
        }

    } catch (exception) {
        kony.print("createDynamicTotal method Exception catched " + exception);
    }
}