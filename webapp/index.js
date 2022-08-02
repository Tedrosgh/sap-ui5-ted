sap.ui.define([
 "sap/m/Text" // specific Sap text controll
    //   'require',
 //   'dependency'
], function(Text) {
    'use strict';
   // alert("UI5 is ready to go")
    new Text({
        //This will be shown in the html file connecting with the content in the body
        text: "Hello UI5!"
    }).placeAt("content")
});