//Form JS File
function frmProductDetails_btnHamburg_onClick_seq0(eventobject) {
    showHideSideMenu.call(this, frmProductDetails);
};

function addWidgetsfrmProductDetails() {
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
        "focusSkin": "sknHomeMenuFocus",
        "onClick": frmProductDetails_btnHamburg_onClick_seq0
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
        "left": "2%",
        "width": "40%",
        "height": "40%",
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
    var lblProdName = new kony.ui.Label({
        "id": "lblProdName",
        "top": "0%",
        "left": "1%",
        "right": "1",
        "width": "98%",
        "zIndex": 1,
        "isVisible": true,
        "text": "dghdghdghd dddu ufufryufjuf fyurfuruy fgdfgd fgdf gdfg dgfdfg df  dfgd dfg dfg dfg r fufhjfjfjhfj fhfjljvfsarew2143346vbjbk gugjkgg",
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
    var lblProdPrice = new kony.ui.Label({
        "id": "lblProdPrice",
        "top": "1%",
        "left": "1%",
        "width": "98%",
        "zIndex": 1,
        "isVisible": true,
        "text": "$545",
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
        "top": "1%",
        "left": "1%",
        "width": "80%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Average Review:4.0",
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
    var imgReview = new kony.ui.Image2({
        "id": "imgReview",
        "top": "1%",
        "left": "1%",
        "width": "50%",
        "height": "20.00%",
        "zIndex": 1,
        "isVisible": true,
        "src": "ratings_star_4.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var FlexProductDetails = new kony.ui.FlexContainer({
        "id": "FlexProductDetails",
        "top": "3%",
        "left": "43%",
        "width": "56%",
        "height": "50%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[193,6]",
        "skin": "slFbox",
        "layoutType": kony.flex.FLOW_VERTICAL
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexProductDetails.setDefaultUnit(kony.flex.DP)
    FlexProductDetails.add(
    lblProdName, lblProdPrice, lblProdAvg, imgReview);
    var btnMore = new kony.ui.Button({
        "id": "btnMore",
        "top": "46%",
        "left": "2%",
        "width": "40%",
        "height": "8%",
        "zIndex": 1,
        "isVisible": true,
        "text": "More...",
        "skin": "sknMore"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var lblDetails = new kony.ui.Label({
        "id": "lblDetails",
        "top": "2%",
        "left": "2%",
        "width": "98%",
        "zIndex": 1,
        "isVisible": true,
        "text": "hjkhkh hhkhfgkfd jhh hkjh kjh kjhjk jkhjkhjk khhjkh  h hkfh khndc oofspgfdggfdgfgdgffdggdr opfopwfv gbmbllkMXnvn598567v mm;lmfeljjdfjdlfjnvnbxcjkgdjfgd; ;fdjhskhisfhhjjk odu8236395873vbkn h89cb9943rb ",
        "skin": "CopyslLabel061ece12e1c8141"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var btnCart = new kony.ui.Button({
        "id": "btnCart",
        "top": "2%",
        "left": "15%",
        "width": "70%",
        "height": "25%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Add to Cart",
        "skin": "CopyslButtonGlossBlue0bafb5635443e4b"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var FlexContainerdetails = new kony.ui.FlexContainer({
        "id": "FlexContainerdetails",
        "top": "55%",
        "left": "2dp",
        "width": "98%",
        "height": "32%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[2,111]",
        "skin": "slFbox",
        "layoutType": kony.flex.FLOW_VERTICAL
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainerdetails.setDefaultUnit(kony.flex.DP)
    FlexContainerdetails.add(
    lblDetails, btnCart);
    var flxDetails = new kony.ui.FlexContainer({
        "id": "flxDetails",
        "top": "10%",
        "left": "0.00%",
        "width": "100%",
        "height": "45%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,45]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxDetails.setDefaultUnit(kony.flex.DP)
    flxDetails.add(
    imgProduct, FlexProductDetails, btnMore, FlexContainerdetails);
    var lblnoofReviews = new kony.ui.Label({
        "id": "lblnoofReviews",
        "top": "10%",
        "left": "2%",
        "width": "40%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Total number of Reviews:",
        "skin": "CopyslLabel0edc1a57b1b6840"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var btnArrow = new kony.ui.Button({
        "id": "btnArrow",
        "top": "50%",
        "left": "45%",
        "width": "10%",
        "height": "40%",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "sknImageDown"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var lblReviews = new kony.ui.Label({
        "id": "lblReviews",
        "top": "10%",
        "left": "42%",
        "width": "30%",
        "zIndex": 1,
        "isVisible": true,
        "text": "7",
        "skin": "CopyslLabel0809a675ced7641"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var FlexContainerSlider = new kony.ui.FlexContainer({
        "id": "FlexContainerSlider",
        "top": "55%",
        "left": "0%",
        "width": "100%",
        "height": "9.06%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,247]",
        "skin": "CopyslFbox03af5ba9dd9044f",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    FlexContainerSlider.setDefaultUnit(kony.flex.DP)
    FlexContainerSlider.add(
    lblnoofReviews, btnArrow, lblReviews);
    var segReviewsbox = new kony.ui.FlexContainer({
        "id": "segReviewsbox",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var segReviews = new kony.ui.SegmentedUI2({
        "id": "segReviews",
        "top": "2%",
        "left": "2%",
        "width": "96%",
        "height": "90%",
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblGreating": "lblGreating",
            "lblSubmitedBy": "lblSubmitedBy",
            "lblDesc": "lblDesc",
            "flxSeg": "flxSeg",
            "imgRating": "imgRating"
        },
        "data": [{
            "lblGreating": "Great",
            "lblSubmitedBy": "Submitted by: Test 1",
            "lblDesc": "test kjhkjh jhkj jkhasjkh dkjash djkah sjkh ajskdh akjs hdjkash jkhad akjshd jkash dkj",
            "imgRating": "ratings_star_1.png"
        }, {
            "lblGreating": "Great Done",
            "lblSubmitedBy": "Submitted by: Test 2",
            "lblDesc": "test kjhkjh jhkj jkhasjkh dkjash djkah sjkh ajskdh akjs hdjkash jkhad akjshd jkash dkj",
            "imgRating": "ratings_star_3.png"
        }, {
            "lblGreating": "Great Done 1",
            "lblSubmitedBy": "Submitted by: Test 3",
            "lblDesc": "test kjhkjh jhkj jkhasjkh dkjash djkah sjkh ajskdh akjs hdjkash jkhad akjshd jkash dkj",
            "imgRating": "ratings_star_5.png"
        }],
        "Location": "[9,3]",
        "rowTemplate": segReviewsbox,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "pageOnDotImage": "pageOnDot.png",
        "pageOffDotImage": "pageOffDot.png",
        "needPageIndicator": true,
        "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    var lblGreating = new kony.ui.Label({
        "id": "lblGreating",
        "top": "1%",
        "left": "1%",
        "width": "98%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "sknLabelSmall"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var lblSubmitedBy = new kony.ui.Label({
        "id": "lblSubmitedBy",
        "top": "1%",
        "left": "1%",
        "width": "98%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "sknLabelSmall"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var imgRating = new kony.ui.Image2({
        "id": "imgRating",
        "top": "0dp",
        "left": "1%",
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
        "containerWeight": 0
    }, {});
    var lblDesc = new kony.ui.Label({
        "id": "lblDesc",
        "top": "1%",
        "left": "1%",
        "width": "98%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "sknLabelSmall"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var flxSeg = new kony.ui.FlexContainer({
        "id": "flxSeg",
        "top": "0%",
        "left": "0%",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "slFbox",
        "layoutType": kony.flex.FLOW_VERTICAL
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxSeg.setDefaultUnit(kony.flex.DP)
    flxSeg.add(
    lblGreating, lblSubmitedBy, imgRating, lblDesc);
    segReviewsbox.add(
    flxSeg);
    var flxReviews = new kony.ui.FlexContainer({
        "id": "flxReviews",
        "top": "102%",
        "left": "0%",
        "width": "100%",
        "height": "35%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,459]",
        "skin": "slFbox",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxReviews.setDefaultUnit(kony.flex.DP)
    flxReviews.add(
    segReviews);
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
    flxHeader, flxDetails, FlexContainerSlider, flxReviews);
    frmProductDetails.add(
    flxSideMenu, flxMain);
};

function frmProductDetailsGlobals() {
    var MenuId = [];
    frmProductDetails = new kony.ui.Form2({
        "id": "frmProductDetails",
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
        "addWidgets": addWidgetsfrmProductDetails
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
    frmProductDetails.setDefaultUnit(kony.flex.DP);
};