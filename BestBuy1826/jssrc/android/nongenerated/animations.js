function showHideSideMenu(frmObj) {
    kony.print("Home positioning:=> " + frmObj.flxMain.left);
    if (frmObj.flxMain.left.trim() == "0dp" || frmObj.flxMain.left.trim() == "0%" || frmObj.flxMain.left.trim() == "0") {
        animSlideHomeMenuRight(frmObj);
    } else {
        animSlideHomeMenuLeft(frmObj);
    }
}

function animSlideHomeMenuRight(frmObj) {
    frmObj["flxMain"].animate(
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
        "animationEnd": moveActionHomeMainMenuRight
    });
    frmObj["flxSideMenu"].animate(
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
        "animationEnd": moveActionHomeSideMenuRight
    });
}

function moveActionHomeMainMenuRight() {}

function moveActionHomeSideMenuRight() {}

function animSlideHomeMenuLeft(frmObj) {
    frmObj["flxSideMenu"].animate(
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
        "animationEnd": moveActionHomeMainMenuLeft
    });
    frmObj["flxMain"].animate(
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
        "animationEnd": moveActionHomeSideMenuLeft
    });
}

function moveActionHomeMainMenuLeft() {}

function moveActionHomeSideMenuLeft() {}

function searchRotateAnimation() {
    frmHome.flxFilterContainer.isVisible = true;
    var searchAnim1 = kony.ui.makeAffineTransform();
    searchAnim1.rotate(90);
    var searchAnim2 = kony.ui.makeAffineTransform();
    searchAnim2.rotate(180);
    var searchAnim3 = kony.ui.makeAffineTransform();
    searchAnim3.rotate(270);
    var searchAnim4 = kony.ui.makeAffineTransform();
    searchAnim4.rotate(360);
    frmHome.flxFilterContainer.animate(
    kony.ui.createAnimation({
        "0": {
            "width": "50%",
            "height": "17.5%"
        },
        "10": {
            "transform": searchAnim1
        },
        "35": {
            "transform": searchAnim2
        },
        "65": {
            "transform": searchAnim3
        },
        "85": {
            "transform": searchAnim4
        },
        "100": {
            "width": "100%",
            "height": "35%"
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.5
    }, {
        "animationEnd": null
    });
}

function onClickSearchCancel() {
    frmHome.flxFilterContainer.isVisible = false;
    frmHome.flxFilterContainer.width = "2%";
    frmHome.flxFilterContainer.height = "2%";
}