sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/f/library",
	"sap/ui/core/Fragment"
], function(
	Controller,
	JSONModel
) {
	"use strict";

	return Controller.extend("smbproject1.0.controller.ThirdPage", {
		getPage : function() {
			return this.byId("dynamicPageId");
		},
		onInit: function(){
			var oJSONModel = new JSONModel("model/mockdata.json");
			this.getView().setModel(oJSONModel, "orders");
			let oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("thirdPage").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched:function(oEvent){
			let path = window.decodeURIComponent(oEvent.getParameter("arguments").orders);
			console.log(path)
			this.getView().bindElement({
				path:  path,
				model: "orders"
			})
		},
		toggleAreaPriority : function () {
			var oTitle = this.getPage().getTitle(),
				sNewPrimaryArea = oTitle.getPrimaryArea() === DynamicPageTitleArea.Begin ? DynamicPageTitleArea.Middle : DynamicPageTitleArea.Begin;
			oTitle.setPrimaryArea(sNewPrimaryArea);
		},

		onPressBackButton: function(oEvent) {
			let oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("secondPage",{});
		},
		/* deleteArea : function () {
			for (let i = 0; i < $orders.length; i++){
				delete $orders[i].position;
			}
		} */
	});
});