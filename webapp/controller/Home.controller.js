sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/base/strings/formatMessage"],
  function (Controller) {
    "use strict";
    return Controller.extend("smbproject1.0.controller.Home", {
      /*   onNavToConfiguration: function() {
            this.getRouter().navTo("configuration");
        }, */

        /**
         * @override
         */
         /* onInit: function() {
          Controller.prototype.onInit.apply(this, arguments);
          const obj = JSON.parse(orders);
          console.log(obj.OverallDeliveryStatus);
        },  */
      onChartPressed: function (oEvent) {
        let oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("secondPage", {
          location: oEvent.getSource().getTitle(),
        });
      },
    });
  }
);
