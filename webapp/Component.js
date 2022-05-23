sap.ui.define([
		"sap/ui/core/UIComponent",
		"Workspace/SAPUI5/model/models",
		"sap/ui/model/resource/ResourceModel",
		"./controller/HelloDialog"
	], function(UIComponent, models, ResourceModel,HelloDialog) {

		return UIComponent.extend("Workspace.SAPUI5.Component", {

			metadata: {
				manifest : "json"

			},

			init: function() {
				//call the init function of the parent
				UIComponent.prototype.init.apply(this, arguments);

				//set model on view
				this.setModel(models.createRecipient());

				//set i18n model on view
				var i18nModel = new ResourceModel({
					bundleName: "Workspace.SAPUI5.i18n.i18n"
				});
				this.setModel(i18nModel, "i18n");
				
				this._helloDialog = new HelloDialog(this.getRootControl());

			},
			
			exit:function(){
				this._helloDialog.destroy();
				delete this._helloDialog;
			},
			
			openHelloDialog : function (){
				this._helloDialog.open();
			}
		});
	}

);