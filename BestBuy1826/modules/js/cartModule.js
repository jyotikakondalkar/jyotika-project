function AddProduct() {
    frmCart.flxScrollContainer.removeAll();
    //kony.print("priceGlobal of lable 1 is   " + priceGlobal);
    //kony.print("statusSales  =" + statusSales);
    //kony.print("nameGlobal  is   " + nameGlobal);
    //  kony.print("inside Addshoppingcart");s
    //#ifdef iphone
    // Formtestbkp.flexScrollContainer.remove(lblTotal);
    kony.print("remove lblTotal");
    //Formtestbkp.flexScrollContainer.remove(lblEmptyCardMsg);
    frmCart.lblCartdesc.setVisibility(false);
    //#endif
    //  Formtestbkp.flexScrollContainer.remove(lblTotal);
	frmCart.flxScrollContainer.setVisibility(true);
    
    //  Formtestbkp.flexScrollContainer.remove(lblEmptyCardMsg);
  frmCart.lblCartdesc.setVisibility(false);
  //----    shipping = ProductDetailScreen.LabelFreeShping.text
    //----  kony.print("shipping =" + shipping);

   //----   kony.print("priceGlobalSkin  =" + priceGlobalSkin);
    var a, b, c;
    var tempRecord1 = {
        a: "nameGlobal",
        b: "priceGlobal",
        c: "ProductDetailScreen.LabelFreeShping.text",
        d: "priceGlobalSkin",
        e:"statusSales"
    };


    gblCartProducts.push(tempRecord1);
    gblCartProducts1.push(tempRecord1);
    kony.print("productnamelist1 is ######=" + JSON.stringify(gblCartProducts));
    alert("Product added to the cart succesfully");
    kony.print(" productnamelist cart length = " + gblCartProducts.length);
    
}

function populateCartList() {
    frmCart.flxScrollContainer.removeAll();
    //alert(" productnamelist1 length = "+productnamelist1.length)
    kony.print("::::::::::::::::::; productnamelist cart::::::::: 1..= " + gblCartProducts.length);
    kony.print("::::::::::::::::::; productnamelist cart::::::::: 123..= " + gblCartProducts1.length);
    var temp = 0;
    //  try {
    for (i = 0; i < gblCartProducts.length; i++) {

        // temp =i*20+5;
        temp = 5;

        kony.print("inside flow second temp" + temp);
        kony.print("::::::::::::::::::; productnamelist cart:::: i value:::::=" + i);
        try {

            lblProductName = new kony.ui.Label({
                "id": "lblProductName" + i,
                // "top": "5%",
                "left": "1%",
                "width": "60%",
                "height": "98%",
                "zIndex": 1,
                "isVisible": true,
                "text": "Label",
                "skin": "CopyslLabel0ef446629d27946"
            }, {
                "padding": [0, 0, 0, 0],
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "marginInPixel": false,
                "paddingInPixel": false,
                "containerWeight": 0
            }, {
                "textCopyable": false
            });
            lblProductPrice = new kony.ui.Label({
                "id": "lblProductPrice" + i,
                //   "top": "5%",
                "left": "65%",
                "width": "20%",
                "height": "98%",
                "zIndex": 1,
                "isVisible": true,
                "text": "Label",
                "skin": "CopyslLabel0ef446629d27946"
            }, {
                "padding": [0, 0, 0, 0],
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "marginInPixel": false,
                "paddingInPixel": false,
                "containerWeight": 0
            }, {
                "textCopyable": false
            });

            var ImgDelete = new kony.ui.Button({
                "id": "ImgDelete" + i,
              //  "top": "1%",
                "left": "80%",
                "width": "15%",
                "height": "25%",
                "centerY": "50%",
                "zIndex": 1,
                "isVisible": true,
                "skin": "SkinDelete",
                "focusSkin": "noSkinButtonNormal",
                "onClick": removeItem123545
            }, {
                "padding": [0, 0, 0, 0],
                "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
                "displayText": true,
                "marginInPixel": false,
                "paddingInPixel": false,
                "containerWeight": 0
            }, {});
//#ifdef spaan
 var ImgDelete = new kony.ui.Button({
                "id": "ImgDelete" + i,
              //  "top": "1%",
               // "bottom"
                "left": "80%",
                "width": "15%",
                "height": "25%",
              //  "centerY": "50%",
                "zIndex": 1,
                "isVisible": true,
                "skin": "SkinDelete",
                "focusSkin": "noSkinButtonNormal",
                "onClick": removeItem123545
            }, {
                "padding": [0, 0, 2, 0],
                "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
                "displayText": true,
                "marginInPixel": false,
                "paddingInPixel": false,
                "containerWeight": 0
            }, {});
            //#endif
//#ifdef spaip
 var ImgDelete = new kony.ui.Button({
                "id": "ImgDelete" + i,
              //  "top": "1%",
               // "bottom"
                "left": "80%",
                "width": "15%",
                "height": "25%",
              //  "centerY": "50%",
                "zIndex": 1,
                "isVisible": true,
                "skin": "SkinDelete",
                "focusSkin": "noSkinButtonNormal",
                "onClick": removeItem123545
            }, {
                "padding": [0, 0, 2, 0],
                "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
                "displayText": true,
                "marginInPixel": false,
                "paddingInPixel": false,
                "containerWeight": 0
            }, {});
            //#endif
            Labelline = new kony.ui.Label({
                "id": "LabelLine" + i,
                "top": "98%",
                "left": "0%",
                "width": "100%",
                "height": "3.0%",
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

			kony.print("cart temp=> "+temp);
            flxShopingCart = new kony.ui.FlexContainer({
                "id": "flxParent" + "ImgDelete_" + i,
                "top": "" + temp + "%",
                "left": "0%",
                "width": "100%",
                "height": "20%",
                "minWidth": "0.0%",
                "maxWidth": "96%",
                "minHeight": "0.0%",
                "maxHeight": "50.0%",
                "zIndex": 1,
                "isVisible": true,
                "clipBounds": true,
                "Location": "[0,8]",
                "skin": "CopyslFbox0a0b58c5b90c84d",
                "layoutType": kony.flex.FREE_FORM
            }, {
                "padding": [0, 0, 0, 0]
            }, {});;
			
			flxShopingCart.setDefaultUnit(kony.flex.DP);
            flxShopingCart.add(lblProductName, lblProductPrice, ImgDelete, Labelline);
            
            kony.print(" flxShopingCart.add()");


            //lblProductPrice.text = productnamelist1[i].b;
            //  kony.print("PriceProduct of   " + lblProductPrice.text);
            //lblProductName.text = ProductDetailScreen.LabelProductName.text;
            //var abcSkin = priceGlobalSkin;
            //            kony.print("abcSkin  is  " + abcSkin);
            //            var PriceProduct = productnamelist1[i].b; //priceGlobal;
            //            kony.print("productnamelist1 price  of lable is =  " + productnamelist1[i].b);
            //            kony.print("PriceProduct of lable is =  " + PriceProduct);
            // var PriceProductSplit = PriceProduct.split("On Sale!");
            // PriceProductSplit = PriceProductSplit[1];
            //lblProductPrice.text = PriceProductSplit; 
            var temp = gblCartProducts[i].b;
            kony.print("temp=  " + temp);
       //--     PriceProductSplit = temp.split("On Sale!");
       //--     PriceProductSplit = PriceProductSplit[1];
            kony.print("productnamelist1[i].d=  " + gblCartProducts[i].d);
      //--      kony.print("PriceProductSplit=  " + PriceProductSplit);
 		//--	 kony.print("statusSales  =" + statusSales);

            var Displyprice = "";
            var onsalePrcSkin = "";
            if ( gblCartProducts[i].e == "true") {
                kony.print("inside statusSales =true");
                 Displyprice = gblCartProducts[i].b;
           //--     lblProductPrice.text = PriceProductSplit;
				lblProductPrice.text = "Constant J";
                onsalePrcSkin = gblCartProducts[i].d;
				onsalePrcSkin = gblCartProducts[i].d;
            } else {
                kony.print("inside statusSales =false");
                Displyprice = gblCartProducts[i].b;
                onsalePrcSkin = gblCartProducts[i].d;
                lblProductPrice.text = Displyprice;
            }
            lblProductPrice.skin = onsalePrcSkin;
            lblProductName.text = gblCartProducts[i].a;
        } catch (e) {
            kony.print("shopping cstt exception 1: " + e);
        }
        frmCart.flxScrollContainer.add(flxShopingCart);
       // Formtestbkp.flexScrollContainer.add(flxShopingCart);
    } // enf of For
    // temp=temp+5;
    kony.print("temp  total height is  " + temp);
/*    if (labelFlag == false) {
        labelFlag = true;
        lblTotal = new kony.ui.Label({
            "id": "lblTotal",
            //  "top": ""+temp+"%",
            "left": "55%",
            "zIndex": 1,
            "isVisible": true,
            "text": "Label11",
            "skin": "sknProdData"
        }, {
            "padding": [0, 0, 0, 0],
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 0
        }, {
            "textCopyable": false
        });
    }*/
//--	frmCart.flxScrollContainer.add(lblTotal);
 //   Formtestbkp.flexScrollContainer.add(lblTotal);
    //	kony.print("Formtestbkp lblProductName: "+ Formtestbkp.flexScrollContainer["lblProductName"+i-1].text);
    // kony.ui.Alert(basicProperties, platformSpecificProperties)
//--    showTotal();
    kony.print("call Total 1");
    frmCart.forceLayout();
    // } catch (e) {
    //        kony.print("shopping cart exception 2: " + e);
    //
    //    }
}

function removeItem123545(eventObject) {
    try {
       kony.application.showLoadingScreen("", "Please wait . .  ", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {});
 
        kony.print("inside removeItem(eventObject)")

        var flxDeleteId = eventObject.parent.id;
        flxDeleteId = flxDeleteId.toString();
        kony.print("flx Delete Id flxDeleteId= " + flxDeleteId);
        var currDeleteId = flxDeleteId.split("_");
        currDeleteId = currDeleteId[1];
        kony.print("currDeleteId id =" + currDeleteId);
        kony.print("productnamelist1 before delete.......=" + productnamelist1.length)

        if (productnamelist1.length == 1) {
            kony.print("inside length 1")
            productnamelist1 = [];
            productnamelist123 = [];
        }
        if (productnamelist1.length <= currDeleteId) {
            kony.print("productnamelist1 delete 1 case")
            productnamelist1.splice(productnamelist1.length - 1, 1)
        }

        for (i = 0; i < productnamelist123.length; i++) {
            if (i == currDeleteId) {
                kony.print("productnamelist1 delete 2 case")
                productnamelist123.splice(i, 1);
            }
        }
        for (i = 0; i < productnamelist1.length; i++) {
            if (i == currDeleteId) {
                kony.print("productnamelist1 delete 3 case")
                productnamelist1.splice(i, 1);
            }
        }
        var trans100 = kony.ui.makeAffineTransform();
        eventObject.parent.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "100%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": trans100
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.6
        }, {
            "animationEnd": function() {

                // kony.print("inside animation call back");
                Formtestbkp.flexScrollContainer[flxDeleteId].removeFromParent(); //   remove(eventObject.parent);
                //  kony.print("inside animation call back2" + Formtestbkp.flexScrollContainer); // Formtestbkp.flexScrollContainer.remove(eventObject.parent);
                Formtestbkp.flexScrollContainer.removeAll();
                populateCartList();
                Formtestbkp.flexScrollContainer.forceLayout();
                Formtestbkp.flexMain.forceLayout();
                Formtestbkp.forceLayout();
                  kony.application.dismissLoadingScreen();
                //  kony.print("inside animation call back3");
            }
        })
        kony.print("productnamelist1 after delete.......=" + productnamelist1.length);
        kony.print("productnamelist1 after delete.......=" + JSON.stringify(productnamelist1));
 

    } catch (e) {
        kony.print("error message :" + e.message);
    }
}