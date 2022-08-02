sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict'
    return Controller.extend("sap.ui.demo.ted.App",{
        onShowHello : function () {
            //Show a native or vanailla js alert
            alert("Hello there");
            console.log(Controller);
        }
    })
    
});