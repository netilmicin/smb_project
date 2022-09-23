sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/base/strings/formatMessage",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/FilterOperator",
  ],

  function (Controller, formatMessage, JSONModel, FilterOperator) {
    "use strict";

    return Controller.extend("smbproject1.0.controller.Home", {
      /**
       * @override
       */
      onInit: function () {
        /* Controller.prototype.onInit.apply(this, arguments);
        let oSalesOfficeModel = new JSONModel("model/mockdata.json");
        let setOfSalesOffices = new Set();
        oSalesOfficeModel.forEach((element) => {
          setOfSalesOffices.add(element.Orders>SalesOffice);
        });
        setOfSalesOffices.forEach((element) => {
          console.log(element);
        });
         */
      },

      onChartPressed: function (oEvent) {
        let oRouter = this.getOwnerComponent().getRouter();

        oRouter.navTo("secondPage", {
          location: oEvent.getSource().getTitle(),
        });
      },
    });
  }
);
