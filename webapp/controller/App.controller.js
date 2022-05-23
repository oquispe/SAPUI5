sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"

], function(Controller) {
	"use strict";

	return Controller.extend("Workspace.SAPUI5.controller.App", {

		 onInit: function() {
		 	
	
		},
		
		onOpenHeader : function(){
			
			this.getOwnerComponent().openHelloDialog();
		}
		
	});
});