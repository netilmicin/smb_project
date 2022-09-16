/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"smb_project_1.0/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
