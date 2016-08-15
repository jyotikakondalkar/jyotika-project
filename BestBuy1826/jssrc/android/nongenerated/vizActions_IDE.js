/*This is a auto generated file.Any changes to this file will be overwritten.*/

function frmCart_flxSideHome_onTouchStart_mobile() {
    AS_FlexContainer_345f5c38c5984317a4b68854ef0f2654.call(this);
}

function frmCart_btnHamburg_onClick_mobile() {
    AS_Button_3f9041ac2cfe406ab86dad462920fed0.call(this);
}

function frmHome_flxSideHome_onTouchStart_mobile() {
    AS_FlexContainer_e8518e5b20704bd48ee1581af8c10cf4.call(this);
}

function frmHome_btnHamburg_onClick_mobile() {
    AS_Button_b097ef4892264437af6c773e3bd46f0e.call(this);
}

function frmProductDetails_flxSideHome_onTouchStart_mobile() {
    AS_FlexContainer_6c7811bd9850443aae70edf79c324122.call(this);
}

function frmProductDetails_btnHamburg_onClick_mobile() {
    AS_Button_e3e11289af7f4c3a8dcd82f868d227aa.call(this);
}

function frmProductDetails_btnArrow_onClick_mobile() {
    AS_Button_60d459e79c6b4c8885e37668e1721d2f.call(this);
}

function frmProductImage_flxSideHome_onTouchStart_mobile() {
    AS_FlexContainer_171635d9c1f5415285246cb947726e8c.call(this);
}

function frmProductImage_btnHamburg_onClick_mobile() {
    AS_Button_9b47fc42d74448f3969cbf1d29245a21.call(this);
}

function frmProducts_btnHamburg_onClick_mobile() {
    AS_Button_ef1f2458e9cd48fc94f2f32a98cd3d25.call(this);
}

function frmProducts_flxSideHome_onTouchStart_mobile() {
    AS_FlexContainer_f28d83b279064f30addcfa0d37238348.call(this);
}

function frmStoreLocator_flxSideHome_onTouchStart_mobile() {
    AS_FlexContainer_24626435bb6f45fa81f0e11ff9986092.call(this);
}

function frmStoreLocator_btnHamburg_onClick_mobile() {
    AS_Button_8e0a8a8bc1714272a1d6611a096b9ac4.call(this);
}

function animateSideMenuIn(eventobject) {
    return AS_Button_ef1f2458e9cd48fc94f2f32a98cd3d25(eventobject);
}

function AS_Button_ef1f2458e9cd48fc94f2f32a98cd3d25(eventobject) {
    function MOVE_ACTION____1b06f7f1af5648af80901426a8956a8a_Callback() {}
    function MOVE_ACTION____49561935161f429f96a41565079a34e3_Callback() {}
    frmProducts["flxMain"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "80%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____49561935161f429f96a41565079a34e3_Callback
    });
    frmProducts["flxSideMenu"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____1b06f7f1af5648af80901426a8956a8a_Callback
    });
}
function animHomeSideMenuIn(eventobject) {
    return AS_Button_b097ef4892264437af6c773e3bd46f0e(eventobject);
}

function AS_Button_b097ef4892264437af6c773e3bd46f0e(eventobject) {
    function MOVE_ACTION____71c0485956b848aebf383d5bada15616_Callback() {}
    function MOVE_ACTION____de8b680b2dbf4df4ad525095e35b1c04_Callback() {}
    frmHome["flxMain"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "80%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____de8b680b2dbf4df4ad525095e35b1c04_Callback
    });
    frmHome["flxSideMenu"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____71c0485956b848aebf383d5bada15616_Callback
    });
}
function animHomeSideMenuOut(eventobject, x, y) {
    return AS_FlexContainer_e8518e5b20704bd48ee1581af8c10cf4(eventobject, x, y);
}

function AS_FlexContainer_e8518e5b20704bd48ee1581af8c10cf4(eventobject, x, y) {
    function MOVE_ACTION____65f93d68ccc1419299f5d8304730bf51_Callback() {}
    function MOVE_ACTION____ca68fa749a8b450d8d7ad4e772d83736_Callback() {}
    frmHome["flxSideMenu"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "-100%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____ca68fa749a8b450d8d7ad4e772d83736_Callback
    });
    frmHome["flxMain"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____65f93d68ccc1419299f5d8304730bf51_Callback
    });
}
function animSideMenuOut(eventobject, x, y) {
    return AS_FlexContainer_f28d83b279064f30addcfa0d37238348(eventobject, x, y);
}

function AS_FlexContainer_f28d83b279064f30addcfa0d37238348(eventobject, x, y) {
    function MOVE_ACTION____e6e47fe085bc4b7eb4a9cf2d248ad5f0_Callback() {}
    function MOVE_ACTION____d7698bc87e604077a037f4dc5784f4f3_Callback() {}
    frmProducts["flxSideMenu"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "-100%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____d7698bc87e604077a037f4dc5784f4f3_Callback
    });
    frmProducts["flxMain"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____e6e47fe085bc4b7eb4a9cf2d248ad5f0_Callback
    });
}
function AS_Button_3f9041ac2cfe406ab86dad462920fed0(eventobject) {
    function ___onClick_509be8c29f624509bef7c5b2ea708b78_Callback() {}
    function ___onClick_da52fa8c212e449184b1b71fbe5ccd76_Callback() {}
    frmHome["flxMain"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "80%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": ___onClick_da52fa8c212e449184b1b71fbe5ccd76_Callback
    });
    frmHome["flxSideMenu"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": ___onClick_509be8c29f624509bef7c5b2ea708b78_Callback
    });
}
function AS_Button_60d459e79c6b4c8885e37668e1721d2f(eventobject) {
    function MOVE_ACTION____dddb79cf20ef4b139f73836968233b44_Callback() {}
    frmProductDetails["flxReviews"].animate(
    kony.ui.createAnimation({
        "100": {
            "top": "65%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.3
    }, {
        "animationEnd": MOVE_ACTION____dddb79cf20ef4b139f73836968233b44_Callback
    });
}
function AS_Button_8e0a8a8bc1714272a1d6611a096b9ac4(eventobject) {
    function ___onClick_b0ca08016ba74311aa387ec326784edf_Callback() {}
    function ___onClick_223788a4566b46b4b3691185592ddbfe_Callback() {}
    frmHome["flxMain"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "80%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": ___onClick_223788a4566b46b4b3691185592ddbfe_Callback
    });
    frmHome["flxSideMenu"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": ___onClick_b0ca08016ba74311aa387ec326784edf_Callback
    });
}
function AS_Button_9b47fc42d74448f3969cbf1d29245a21(eventobject) {
    function ___onClick_79319e7082134bcd8bd108519205fe3a_Callback() {}
    function ___onClick_128817cdeba048239bd8b0a773678f43_Callback() {}
    frmHome["flxMain"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "80%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": ___onClick_128817cdeba048239bd8b0a773678f43_Callback
    });
    frmHome["flxSideMenu"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": ___onClick_79319e7082134bcd8bd108519205fe3a_Callback
    });
}
function AS_Button_e3e11289af7f4c3a8dcd82f868d227aa(eventobject) {
    function ___onClick_7edd98071d914d20a6881c09bc2fc9c8_Callback() {}
    function ___onClick_f79b1c262c324b5383ded3c2e7560e4e_Callback() {}
    frmHome["flxMain"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "80%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": ___onClick_f79b1c262c324b5383ded3c2e7560e4e_Callback
    });
    frmHome["flxSideMenu"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": ___onClick_7edd98071d914d20a6881c09bc2fc9c8_Callback
    });
}
function AS_FlexContainer_171635d9c1f5415285246cb947726e8c(eventobject, x, y) {
    function ___onTouchStart_aeeae854e5544fc8b477f428e28c0cdf_Callback() {}
    function ___onTouchStart_9009891236d54908bcb7294c27aeba22_Callback() {}
    frmHome["flxSideMenu"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "-100%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": ___onTouchStart_9009891236d54908bcb7294c27aeba22_Callback
    });
    frmHome["flxMain"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": ___onTouchStart_aeeae854e5544fc8b477f428e28c0cdf_Callback
    });
}
function AS_FlexContainer_24626435bb6f45fa81f0e11ff9986092(eventobject, x, y) {
    function ___onTouchStart_dd5c827ba1ea4294ad66603cfae83f9c_Callback() {}
    function ___onTouchStart_f0aaaca1bd314de2b70fa628aa6e61f2_Callback() {}
    frmHome["flxSideMenu"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "-100%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": ___onTouchStart_f0aaaca1bd314de2b70fa628aa6e61f2_Callback
    });
    frmHome["flxMain"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": ___onTouchStart_dd5c827ba1ea4294ad66603cfae83f9c_Callback
    });
}
function AS_FlexContainer_345f5c38c5984317a4b68854ef0f2654(eventobject, x, y) {
    function ___onTouchStart_7b0a8a35e6014bc29e5b9661c329993a_Callback() {}
    function ___onTouchStart_9706668daf9e4919be56bfacfa34b9a5_Callback() {}
    frmHome["flxSideMenu"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "-100%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": ___onTouchStart_9706668daf9e4919be56bfacfa34b9a5_Callback
    });
    frmHome["flxMain"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": ___onTouchStart_7b0a8a35e6014bc29e5b9661c329993a_Callback
    });
}
function AS_FlexContainer_6c7811bd9850443aae70edf79c324122(eventobject, x, y) {
    function ___onTouchStart_7c1edd7f76d944c7b6d881a0938405db_Callback() {}
    function ___onTouchStart_5f786ad68ba842e5b6fd8053e381e704_Callback() {}
    frmHome["flxSideMenu"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "-100%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": ___onTouchStart_5f786ad68ba842e5b6fd8053e381e704_Callback
    });
    frmHome["flxMain"].animate(
    kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": ___onTouchStart_7c1edd7f76d944c7b6d881a0938405db_Callback
    });
}