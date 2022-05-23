sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment"

], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("Workspace.SAPUI5.controller.HelloPanel", {

		onInit: function() {

		},

		onShowHello: function() {

			// read text from i18n / model
			var sHello = this.getView().getModel("i18n").getResourceBundle().getText("sayHello");
			var sName = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = sHello.concat(" ").concat(sName);

			MessageToast.show(sMsg);

		},
		onOpenDialog: function() {
				
				this.getOwnerComponent().openHelloDialog();

		}

	});
});