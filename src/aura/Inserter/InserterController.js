({
	init: function(component, event, helper) {
		let action = component.get("c.getObjList");
		action.setCallback(this, function(response) {
			if (response.getState() === "SUCCESS") {
				let allValues = response.getReturnValue();
				component.set("v.items", allValues);
			} else{
				let toastEvent = $A.get("e.force:showToast");
				if(toastEvent){
					toastEvent.setParams({
						title: "Get Objects Error",
						type: "error",
						message: "An error occurred, please check logs."
					});
					toastEvent.fire();
				}
			}
		});
		$A.enqueueAction(action);
	}
})