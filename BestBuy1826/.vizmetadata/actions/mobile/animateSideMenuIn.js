function animateSideMenuIn(eventobject) {
return AS_Button_ef1f2458e9cd48fc94f2f32a98cd3d25(eventobject);
}
function AS_Button_ef1f2458e9cd48fc94f2f32a98cd3d25(eventobject) {
function MOVE_ACTION____1b06f7f1af5648af80901426a8956a8a_Callback(){

}function MOVE_ACTION____49561935161f429f96a41565079a34e3_Callback(){

}
frmProducts["flxMain"].animate(
kony.ui.createAnimation({"100":{"left":"80%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : MOVE_ACTION____49561935161f429f96a41565079a34e3_Callback});

frmProducts["flxSideMenu"].animate(
kony.ui.createAnimation({"100":{"left":"0%","stepConfig":{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.25},
 {"animationEnd" : MOVE_ACTION____1b06f7f1af5648af80901426a8956a8a_Callback});

}