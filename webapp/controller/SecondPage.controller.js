sap.ui.define([
	"sap/base/Log",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/ui/core/format/DateFormat",
	"sap/ui/thirdparty/jquery"
], function(Log, Controller, JSONModel, MessageToast, DateFormat, jQuery) {
	"use strict";

	return Controller.extend("sap.ui.table.sample.Basic.Controller", {

		onInit : function() {
			// set explored app's demo model on this sample
			var oJSONModel = new JSONModel("model/mockdata.json");
			this.getView().setModel(oJSONModel, "orders");
		},

		/* initSampleDataModel : function() {
			var oModel = new JSONModel();

			var oDateFormat = DateFormat.getDateInstance({source: {pattern: "timestamp"}, pattern: "dd/MM/yyyy"});

			jQuery.ajax(sap.ui.require.toUrl("sap/ui/demo/mock/products.json"), {
				dataType: "json",
				success: function(oData) {
					var aTemp1 = [];
					var aTemp2 = [];
					var aSuppliersData = [];
					var aCategoryData = [];
					for (var i = 0; i < oData.ProductCollection.length; i++) {
						var oProduct = oData.ProductCollection[i];
						if (oProduct.SupplierName && aTemp1.indexOf(oProduct.SupplierName) < 0) {
							aTemp1.push(oProduct.SupplierName);
							aSuppliersData.push({Name: oProduct.SupplierName});
						}
						if (oProduct.Category && aTemp2.indexOf(oProduct.Category) < 0) {
							aTemp2.push(oProduct.Category);
							aCategoryData.push({Name: oProduct.Category});
						}
						oProduct.DeliveryDate = (new Date()).getTime() - (i % 10 * 4 * 24 * 60 * 60 * 1000);
						oProduct.DeliveryDateStr = oDateFormat.format(new Date(oProduct.DeliveryDate));
						oProduct.Heavy = oProduct.WeightMeasure > 1000 ? "true" : "false";
						oProduct.Available = oProduct.Status == "Available" ? true : false;
					}

					oData.Suppliers = aSuppliersData;
					oData.Categories = aCategoryData;

					oModel.setData(oData);
				},
				error: function() {
					Log.error("failed to load json");
				}
			});

			return oModel;
		}, */
		formatAvailableToObjectState : function(bAvailable) {
			return bAvailable ? "Success" : "Error";
		},


		onPaste: function(oEvent) {
			var aData = oEvent.getParameter("data");
			MessageToast.show("Pasted Data: " + aData);
		},

		onStatusChanged: function(oEvent) {
			let oTable = this.byId("orderTable");
			let oComboBox = this.byId("idSelectStatus");
			let chosenKey = oComboBox.getSelectedKey();
			switch(chosenKey){
				case "Ausgeführt":
					
					break;
			}
		},

		onPressBackButton: function(oEvent) {
			let oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("home",{});
		}
	});

});