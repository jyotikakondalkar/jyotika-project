function animHomeSideMenuOut(eventobject, x, y) {
return AS_FlexContainer_e8518e5b20704bd48ee1581af8c10cf4(eventobject, x, y);
}
function AS_FlexContainer_e8518e5b20704bd48ee1581af8c10cf4(eventobject, x, y) {
function MOVE_ACTION____65f93d68ccc1419299f5d8304730bf51_Callback(){

}function MOVE_ACTION____ca68fa749a8b450d8d7ad4e772d83736_Callback(){

}
frmHome["flxSideMenu"].animate(
kony.ui.createAnimation({"100":{"left":"-100%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : MOVE_ACTION____ca68fa749a8b450d8d7ad4e772d83736_Callback});

frmHome["flxMain"].animate(
kony.ui.createAnimation({"100":{"left":"0%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : MOVE_ACTION____65f93d68ccc1419299f5d8304730bf51_Callback});

}