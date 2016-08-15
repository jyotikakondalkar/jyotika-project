//Form JS File
function addWidgetsfrmProductImage() {
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
        "width": "100%",
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
        "focusSkin": "sknHomeMenuFocus"
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
        "focusSkin": "sknHomeBackFocus"
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
        "focusSkin": "sknHomeSrchFocus"
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
    var imgProduct = new kony.ui.Image2({
        "id": "imgProduct",
        "top": "5%",
        "left": "12dp",
        "width": "340dp",
        "height": "199dp",
        "zIndex": 1,
        "isVisible": true,
        "src": "imagedrag.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var flxDetails = new kony.ui.FlexContainer({
        "id": "flxDetails",
        "top": "70dp",
        "left": "0.00%",
        "width": "100%",
        "height": "45.29%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,70]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxDetails.setDefaultUnit(kony.flex.DP)
    flxDetails.add(
    imgProduct);
    var ListBoxPage = new kony.ui.ListBox({
        "id": "ListBoxPage",
        "top": "50%",
        "left": "62dp",
        "width": "75%",
        "height": "5%",
        "zIndex": 1,
        "isVisible": true,
        "masterData": [
            ["lb1", "Listbox One"],
            ["lb2", "Listbox Two"],
            ["lb3", "Listbox Three"]
        ],
        "selectedKey": "lb1",
        "skin": "slListBox"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "popupIcon": null,
        "applySkinsToPopup": true,
        "dropDownImage": null,
        "placeholder": null,
        "popupTitle": null,
        "tickedImage": null,
        "untickedImage": null,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
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
    flxHeader, flxDetails, ListBoxPage);
    frmProductImage.add(
    flxSideMenu, flxMain);
};

function frmProductImageGlobals() {
    var MenuId = [];
    frmProductImage = new kony.ui.Form2({
        "id": "frmProductImage",
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
        "addWidgets": addWidgetsfrmProductImage
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
    frmProductImage.setDefaultUnit(kony.flex.DP);
};