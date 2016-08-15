//Form JS File
function addWidgetsfrmCart() {
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
    var lblCartdesc = new kony.ui.Label({
        "id": "lblCartdesc",
        "top": "73dp",
        "left": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Shopping Cart is empty.Please browse the products ",
        "skin": "CopyslLabel0df9a970e434b43"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var SegmentCartbox = new kony.ui.FlexContainer({
        "id": "SegmentCartbox",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "40dp",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var SegmentCart = new kony.ui.SegmentedUI2({
        "id": "SegmentCart",
        "top": "135dp",
        "left": "6dp",
        "width": "95.31%",
        "height": "120dp",
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "imgCart": "imgCart"
        },
        "data": [{
            "imgCart": "imagedrag.png"
        }, {
            "imgCart": "imagedrag.png"
        }, {
            "imgCart": "imagedrag.png"
        }],
        "Location": "[6,135]",
        "rowTemplate": SegmentCartbox,
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
    var imgCart = new kony.ui.Image2({
        "id": "imgCart",
        "top": "20%",
        "left": "70%",
        "width": "30%",
        "height": "60%",
        "zIndex": 1,
        "isVisible": true,
        "imageWhenFailed": null,
        "imageWhileDownloading": null,
        "src": "imagedrag.png"
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 61
    }, {});
    SegmentCartbox.add(
    imgCart);
    var lblShipping = new kony.ui.Label({
        "id": "lblShipping",
        "top": "90%",
        "left": "2%",
        "width": "95%",
        "height": "4%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "CopyslLabel00e3929bba61c4c"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
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
    flxHeader, lblCartdesc, SegmentCart, lblShipping);
    frmCart.add(
    flxSideMenu, flxMain);
};

function frmCartGlobals() {
    var MenuId = [];
    frmCart = new kony.ui.Form2({
        "id": "frmCart",
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
        "addWidgets": addWidgetsfrmCart
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
    frmCart.setDefaultUnit(kony.flex.DP);
};