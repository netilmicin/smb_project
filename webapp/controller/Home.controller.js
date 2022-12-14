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
        let oSalesOfficeModel = new JSONModel("model/mockdata.json");
        this.getView().setModel(new JSONModel(), "display");

        oSalesOfficeModel.dataLoaded().then(() => {
          let oData = oSalesOfficeModel.getData();
          let setOfSalesOffices = new Set();
          let arraySalesOffices = [];

          oData.Orders.forEach((element) => {
            setOfSalesOffices.add(element.SalesOffice);
          });

          /*  MODELNAME = display
          {
            stati: [
              {
                SalesOffice: Arosa,
                Statuses : [
                  {status: inBearbeitung, anzahl: 7 }
                  {status: Ausgeführt, anzahl: 7 }
                  {status: Erfasst, anzahl: 7 }
                ]
              }, 
            ]
          }
        */
          //[Arosa, Lenzerheide, Chur, St. Moriz, Laax, Davos]
          setOfSalesOffices.forEach((element) => {
            arraySalesOffices.push({
              SalesOffice: element,
              Statuses: [
                {
                  status: "In Bearbeitung",
                  anzahl: oData.Orders.filter((e) => {
                    let condition1 = element === e.SalesOffice;
                    let condition2 =
                      "In Bearbeitung" === e.OverallDeliveryStatus;
                    return condition1 && condition2;
                  }).length,
                },
                {
                  status: "Ausgeführt",
                  anzahl: oData.Orders.filter((e) => {
                    let condition1 = element === e.SalesOffice;
                    let condition2 = "Ausgeführt" === e.OverallDeliveryStatus;
                    return condition1 && condition2;
                  }).length,
                },
                {
                  status: "Erfasst",
                  anzahl: oData.Orders.filter((e) => {
                    let condition1 = element === e.SalesOffice;
                    let condition2 = "Erfasst" === e.OverallDeliveryStatus;
                    return condition1 && condition2;
                  }).length,
                },
              ],
            });
          });
          console.log(arraySalesOffices);
          this.getView()
            .getModel("display")
            .setData({ stati: arraySalesOffices });
        });
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
