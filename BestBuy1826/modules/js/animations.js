function showHideSideMenu(frmObj){
	kony.print("Home positioning:=> "+frmObj.flxMain.left);
	if(frmObj.flxMain.left.trim() == "0dp" || frmObj.flxMain.left.trim() == "0%" || frmObj.flxMain.left.trim() == "0"){
		animSlideHomeMenuRight(frmObj);
	}else{
		animSlideHomeMenuLeft(frmObj);
	}
	
}

function animSlideHomeMenuRight(frmObj) {
	frmObj["flxMain"].animate(
		kony.ui.createAnimation({
			"100" : {
				"left" : "80%",
				"stepConfig" : {
					"timingFunction" : kony.anim.EASE
				}
			}
		}), {
		"delay" : 0,
		"iterationCount" : 1,
		"fillMode" : kony.anim.FILL_MODE_FORWARDS,
		"duration" : 0.25
	}, {
		"animationEnd" : moveActionHomeMainMenuRight
	});

	frmObj["flxSideMenu"].animate(
		kony.ui.createAnimation({
			"100" : {
				"left" : "0%",
				"stepConfig" : {
					"timingFunction" : kony.anim.EASE
				}
			}
		}), {
		"delay" : 0,
		"iterationCount" : 1,
		"fillMode" : kony.anim.FILL_MODE_FORWARDS,
		"duration" : 0.25
	}, {
		"animationEnd" : moveActionHomeSideMenuRight
	});
}

function moveActionHomeMainMenuRight() {}

function moveActionHomeSideMenuRight() {}

function animSlideHomeMenuLeft(frmObj) {
	frmObj["flxSideMenu"].animate(
		kony.ui.createAnimation({
			"100" : {
				"left" : "-100%",
				"stepConfig" : {
					"timingFunction" : kony.anim.EASE
				}
			}
		}), {
		"delay" : 0,
		"iterationCount" : 1,
		"fillMode" : kony.anim.FILL_MODE_FORWARDS,
		"duration" : 0.25
	}, {
		"animationEnd" : moveActionHomeMainMenuLeft
	});

	frmObj["flxMain"].animate(
		kony.ui.createAnimation({
			"100" : {
				"left" : "0%",
				"stepConfig" : {
					"timingFunction" : kony.anim.EASE
				}
			}
		}), {
		"delay" : 0,
		"iterationCount" : 1,
		"fillMode" : kony.anim.FILL_MODE_FORWARDS,
		"duration" : 0.25
	}, {
		"animationEnd" : moveActionHomeSideMenuLeft
	});
}

function moveActionHomeMainMenuLeft() {}

function moveActionHomeSideMenuLeft() {}
