//Form JS File
function frmProducts_btnHamburg_onClick_seq0(eventobject) {
    showHideSideMenu.call(this, frmProducts);
};

function frmProducts_btnBack_onClick_seq0(eventobject) {
    gblBackFrom = "Product";
    onBackButtonClick.call(this);
};

function addWidgetsfrmProducts() {
    var imgBstBuy = new kony.ui.Image2({
        "id": "imgBstBuy",
        "top": "1%",
        "left": "40%",
        "width": "25%",
        "height": "60%",
        "zIndex": 1,
        "isVisible": true,
        "src": "bestbuy.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var btnHamburg = new kony.ui.Button({
        "id": "btnHamburg",
        "top": "2%",
        "left": "1%",
        "width": "10%",
        "height": "65%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "sknBtnMenu",
        "focusSkin": "sknMenuFocus",
        "onClick": frmProducts_btnHamburg_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var btnBack = new kony.ui.Button({
        "id": "btnBack",
        "top": "2%",
        "left": "18%",
        "width": "10%",
        "height": "60%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "sknBtnBack",
        "focusSkin": "sknBackFocus",
        "onClick": frmProducts_btnBack_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var btnSarch = new kony.ui.Button({
        "id": "btnSarch",
        "top": "2%",
        "left": "88%",
        "right": "2%",
        "width": "10%",
        "height": "60%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "sknBtnSearch",
        "focusSkin": "sknSearchFocus"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var lblLine = new kony.ui.Label({
        "id": "lblLine",
        "top": "90%",
        "left": "0%",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "CopyslLabel01dd3131f27764c"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var flxHeader = new kony.ui.FlexContainer({
        "id": "flxHeader",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "10%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxHeader.setDefaultUnit(kony.flex.DP)
    flxHeader.add(
    imgBstBuy, btnHamburg, btnBack, btnSarch, lblLine);
    var lblResultFor = new kony.ui.Label({
        "id": "lblResultFor",
        "top": "11%",
        "left": "2%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Result For:",
        "skin": "sknResulFor"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var lblResultData = new kony.ui.Label({
        "id": "lblResultData",
        "top": "11%",
        "left": "25%",
        "width": "72%",
        "zIndex": 1,
        "isVisible": true,
        "text": "All Flat Panel TV",
        "skin": "sknResulFor"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var segProductListbox = new kony.ui.FlexContainer({
        "id": "segProductListbox",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "28%",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var segProductList = new kony.ui.SegmentedUI2({
        "id": "segProductList",
        "top": "0dp",
        "left": "2%",
        "width": "96%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "flxProdDetails": "flxProdDetails",
            "lblProdName": "lblProdName",
            "lblSku": "lblSku",
            "lblProdAvg": "lblProdAvg",
            "lblFreeShipping": "lblFreeShipping",
            "imgProd": "imgProd",
            "lblProdPrice": "lblProdPrice",
            "lblProductId": "lblProductId"
        },
        "data": [{
            "lblProdName": "Dynex \u2013 24 (FLat Panel Tv with 42 inch and sound system and good quality remote controls)",
            "lblSku": "",
            "lblProdAvg": "Avg User Rating: 4.4",
            "lblFreeShipping": "!!!Free Shipping !!!",
            "imgProd": "imagedrag.png",
            "lblProdPrice": "$249.99",
            "lblProductId": ""
        }, {
            "lblProdName": "Videocon \u2013 24 (FLat Panel Tv with 42 inch and sound system and good quality remote controls)",
            "lblSku": "",
            "lblProdAvg": "Avg User Rating: 5.0",
            "lblFreeShipping": "!!!Free Shipping !!!",
            "imgProd": "imagedrag.png",
            "lblProdPrice": "$249.99",
            "lblProductId": ""
        }, {
            "lblProdName": "Samsung \u2013 24 (FLat Panel Tv with 42 inch and sound system and good quality remote controls)",
            "lblSku": "",
            "lblProdAvg": "Avg User Rating: 3.2",
            "lblFreeShipping": "!!!Free Shipping !!!",
            "imgProd": "imagedrag.png",
            "lblProdPrice": "$249.99",
            "lblProductId": ""
        }, {
            "lblProdName": "Samsung \u2013 24 (FLat Panel Tv with 42 inch and sound system and good quality remote controls)",
            "lblSku": "",
            "lblProdAvg": "Avg User Rating: 3.2",
            "lblFreeShipping": "!!!Free Shipping !!!",
            "imgProd": "imagedrag.png",
            "lblProdPrice": "$249.99",
            "lblProductId": ""
        }, {
            "lblProdName": "Samsung \u2013 24 (FLat Panel Tv with 42 inch and sound system and good quality remote controls)",
            "lblSku": "",
            "lblProdAvg": "Avg User Rating: 3.2",
            "lblFreeShipping": "!!!Free Shipping !!!",
            "imgProd": "imagedrag.png",
            "lblProdPrice": "$249.99",
            "lblProductId": ""
        }, {
            "lblProdName": "Samsung \u2013 24 (FLat Panel Tv with 42 inch and sound system and good quality remote controls)",
            "lblSku": "",
            "lblProdAvg": "Avg User Rating: 3.2",
            "lblFreeShipping": "!!!Free Shipping !!!",
            "imgProd": "imagedrag.png",
            "lblProdPrice": "$249.99",
            "lblProductId": ""
        }],
        "Location": "[9,0]",
        "rowTemplate": segProductListbox,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    var imgProd = new kony.ui.Image2({
        "id": "imgProd",
        "top": "18%",
        "left": "1%",
        "width": "35%",
        "height": "78%",
        "zIndex": 1,
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": "imagedrag.png"
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 79
    }, {});
    var lblFreeShipping = new kony.ui.Label({
        "id": "lblFreeShipping",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "15%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "sknFreeShipping"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 15
    }, {
        "textCopyable": false
    });
    var lblProdName = new kony.ui.Label({
        "id": "lblProdName",
        "top": "2%",
        "left": "0%",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
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
    var lblProdPrice = new kony.ui.Label({
        "id": "lblProdPrice",
        "top": "2%",
        "left": "0%",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "sknProdAvg"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var lblProdAvg = new kony.ui.Label({
        "id": "lblProdAvg",
        "top": "2%",
        "left": "0%",
        "width": "80%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "sknProdAvg"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var lblSku = new kony.ui.Label({
        "id": "lblSku",
        "top": "58dp",
        "left": "156dp",
        "width": "100dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": false
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var lblProductId = new kony.ui.Label({
        "id": "lblProductId",
        "top": "7dp",
        "left": "156dp",
        "width": "100dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": false
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var flxProdDetails = new kony.ui.FlexContainer({
        "id": "flxProdDetails",
        "top": "16%",
        "left": "37%",
        "width": "62%",
        "height": "80%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[159,53]",
        "skin": "slFbox",
        "layoutType": kony.flex.FLOW_VERTICAL
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxProdDetails.setDefaultUnit(kony.flex.DP)
    flxProdDetails.add(
    lblProdName, lblProdPrice, lblProdAvg, lblSku, lblProductId);
    segProductListbox.add(
    imgProd, lblFreeShipping, flxProdDetails);
    var flxSegContainer = new kony.ui.FlexContainer({
        "id": "flxSegContainer",
        "top": "18%",
        "left": "0dp",
        "width": "100%",
        "height": "75%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,81]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxSegContainer.setDefaultUnit(kony.flex.DP)
    flxSegContainer.add(
    segProductList);
    var flxMain = new kony.ui.FlexContainer({
        "id": "flxMain",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "sknMain",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxMain.setDefaultUnit(kony.flex.DP)
    flxMain.add(
    flxHeader, lblResultFor, lblResultData, flxSegContainer);
    var imgHome = new kony.ui.Image2({
        "id": "imgHome",
        "top": "2%",
        "left": "4%",
        "bottom": "2%",
        "width": "15%",
        "height": "80%",
        "zIndex": 1,
        "isVisible": true,
        "src": "appmenuhome.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var lblHome = new kony.ui.Label({
        "id": "lblHome",
        "top": "26.55%",
        "left": "24%",
        "width": "60%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Home",
        "skin": "sknMenuLabel"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var lblDivider1 = new kony.ui.Label({
        "id": "lblDivider1",
        "top": "95%",
        "left": "0%",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "CopyslLabel04d09d72970184a"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var flxSideHome = new kony.ui.FlexContainer({
        "id": "flxSideHome",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "12%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxSideHome.setDefaultUnit(kony.flex.DP)
    flxSideHome.add(
    imgHome, lblHome, lblDivider1);
    var imgStore = new kony.ui.Image2({
        "id": "imgStore",
        "top": "2%",
        "left": "4%",
        "bottom": "2%",
        "width": "15%",
        "height": "80%",
        "zIndex": 1,
        "isVisible": true,
        "src": "appmenustore.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var lblStore = new kony.ui.Label({
        "id": "lblStore",
        "top": "26.55%",
        "left": "24%",
        "width": "60%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Store",
        "skin": "sknMenuLabel"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var lblDivider2 = new kony.ui.Label({
        "id": "lblDivider2",
        "top": "95%",
        "left": "0%",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "CopyslLabel04d09d72970184a"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var flxSideStore = new kony.ui.FlexContainer({
        "id": "flxSideStore",
        "top": "12%",
        "left": "0%",
        "width": "100%",
        "height": "12%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,54]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxSideStore.setDefaultUnit(kony.flex.DP)
    flxSideStore.add(
    imgStore, lblStore, lblDivider2);
    var imgCart = new kony.ui.Image2({
        "id": "imgCart",
        "top": "2%",
        "left": "4%",
        "bottom": "2%",
        "width": "15%",
        "height": "80%",
        "zIndex": 1,
        "isVisible": true,
        "src": "appmenucart.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var lblCart = new kony.ui.Label({
        "id": "lblCart",
        "top": "26.55%",
        "left": "24%",
        "width": "60%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Cart",
        "skin": "sknMenuLabel"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var lblDividor3 = new kony.ui.Label({
        "id": "lblDividor3",
        "top": "95%",
        "left": "0%",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "CopyslLabel04d09d72970184a"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var flxSideCart = new kony.ui.FlexContainer({
        "id": "flxSideCart",
        "top": "24%",
        "left": "0%",
        "width": "100%",
        "height": "12%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,108]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxSideCart.setDefaultUnit(kony.flex.DP)
    flxSideCart.add(
    imgCart, lblCart, lblDividor3);
    var flxSideMenu = new kony.ui.FlexContainer({
        "id": "flxSideMenu",
        "top": "0%",
        "left": "-100%",
        "width": "80%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[-450,0]",
        "skin": "CopyslFbox0a0b58c5b90c84d",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxSideMenu.setDefaultUnit(kony.flex.DP)
    flxSideMenu.add(
    flxSideHome, flxSideStore, flxSideCart);
    frmProducts.add(
    flxMain, flxSideMenu);
};

function frmProductsGlobals() {
    var MenuId = [];
    frmProducts = new kony.ui.Form2({
        "id": "frmProducts",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": false,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "slForm",
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmProducts
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": false,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
    frmProducts.setDefaultUnit(kony.flex.DP);
};