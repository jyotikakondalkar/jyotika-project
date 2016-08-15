function animSideMenuOut(eventobject, x, y) {
return AS_FlexContainer_f28d83b279064f30addcfa0d37238348(eventobject, x, y);
}
function AS_FlexContainer_f28d83b279064f30addcfa0d37238348(eventobject, x, y) {
function MOVE_ACTION____e6e47fe085bc4b7eb4a9cf2d248ad5f0_Callback(){

}function MOVE_ACTION____d7698bc87e604077a037f4dc5784f4f3_Callback(){

}
frmProducts["flxSideMenu"].animate(
kony.ui.createAnimation({"100":{"left":"-100%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : MOVE_ACTION____d7698bc87e604077a037f4dc5784f4f3_Callback});

frmProducts["flxMain"].animate(
kony.ui.createAnimation({"100":{"left":"0%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : MOVE_ACTION____e6e47fe085bc4b7eb4a9cf2d248ad5f0_Callback});

}