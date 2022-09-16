sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/base/strings/formatMessage"
], function (
    Controller
) {
    "use strict";
    return Controller.extend("smbproject1.0.controller.Home", {
        onNavToConfiguration: function() {
            this.getRouter().navTo("configuration");
        },
    });
});