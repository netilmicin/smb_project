sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/f/library",
	"sap/ui/core/Fragment"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("smbproject1.0.controller.ThirdPage", {
		getPage : function() {
			return this.byId("dynamicPageId");
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