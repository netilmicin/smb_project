sap.ui.define(
  [
    "sap/base/Log",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/core/format/DateFormat",
    "sap/ui/thirdparty/jquery",
    "sap/base/util/UriParameters",
  ],
  function (Log, Controller, JSONModel, MessageToast, DateFormat, jQuery) {
    "use strict";

    return Controller.extend("smbproject1.0.controller.SecondPage", {
      _onObjectMatched: function (oEvent) {
        let location = oEvent.getParameter("arguments").location;
        this.getView().byId("secondPage").setTitle(location);
      },
      onInit: function () {
        // set explored app's demo model on this sample
        var oJSONModel = new JSONModel("model/mockdata.json");
        this.getView().setModel(oJSONModel, "orders");

        let oRouter = this.getOwnerComponent().getRouter();
        oRouter
          .getRoute("secondPage")
          .attachMatched(this._onObjectMatched, this);
      },

      onPaste: function (oEvent) {
        var aData = oEvent.getParameter("data");
        MessageToast.show("Pasted Data: " + aData);
      },

      onStatusChanged: function (oEvent) {
        let oTable = this.byId("orderTable");
        let oComboBox = this.byId("idSelectStatus");
        let chosenKey = oComboBox.getSelectedKey();
        switch (chosenKey) {
          case "Ausgeführt":
            break;
        }
      },

      onPressBackButton: function (oEvent) {
        let oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("home", {});
      },

      onRowPressed: function (oEvent) {
        let oItem = oEvent
          .getSource()
          .getBindingContext("orders")
          .getPath();
		  
        let oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("thirdPage", {
          orders: window.encodeURIComponent(oItem)
        });
      },
    });
  }
);
