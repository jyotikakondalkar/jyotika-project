//startup.js file
function BestBuy1826postappinit_seq0(params) {
    appOnLaunch.call(this);
};
var globalhttpheaders = {};
var appConfig = {
    appId: "BestBuy1826",
    appName: "BestBuy1826",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.125.128.65",
    serverPort: "8085",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "middleware",
    isMFApp: false,
    eventTypes: [],
    secureurl: "https://10.125.128.65:443/middleware/MWServlet",
    url: "http://10.125.128.65:8085/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmCartGlobals();
    frmHomeGlobals();
    frmProductDetailsGlobals();
    frmProductImageGlobals();
    frmProductsGlobals();
    frmStoreLocatorGlobals();
    hhoGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6500
    })
};

function themeCallBack() {
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        postappinit: appOnLaunch,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes
    }
    kony.setupsdks(sdkInitConfig, null, null);
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;