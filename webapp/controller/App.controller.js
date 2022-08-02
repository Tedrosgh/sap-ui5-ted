sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast", // A Module
    "sap/ui/model/json/JSONModel"
], function(Controller, MessageToast, JSONModel) {
    'use strict'
    return Controller.extend("sap.ui.demo.walkthrough.App",{
        //onShowHello : function () {
            onInit : function (){
                var oData = {
                    recipient : {
                        name : "UI5"
                    }
                };
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
            },
            onShowHello : function (){
            //Show a native or vanailla js alert
           // alert("Hello there");
           MessageToast.show("Hello There")
        }
    })
    
});