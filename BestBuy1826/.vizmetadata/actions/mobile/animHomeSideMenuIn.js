function animHomeSideMenuIn(eventobject) {
return AS_Button_b097ef4892264437af6c773e3bd46f0e(eventobject);
}
function AS_Button_b097ef4892264437af6c773e3bd46f0e(eventobject) {
function MOVE_ACTION____71c0485956b848aebf383d5bada15616_Callback(){

}function MOVE_ACTION____de8b680b2dbf4df4ad525095e35b1c04_Callback(){

}
frmHome["flxMain"].animate(
kony.ui.createAnimation({"100":{"left":"80%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : MOVE_ACTION____de8b680b2dbf4df4ad525095e35b1c04_Callback});

frmHome["flxSideMenu"].animate(
kony.ui.createAnimation({"100":{"left":"0%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : MOVE_ACTION____71c0485956b848aebf383d5bada15616_Callback});

}