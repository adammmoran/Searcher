({
    searchRecords: function (component, searchText, objName) {
        let action = component.get('c.seBox');
        action.setParams({
            searchText: searchText,
            objName: objName
        });
        action.setCallback(this, function (response) {
            if (response.getState() === 'SUCCESS') {
                let serverResult = response.getReturnValue();
                component.set("v.items", serverResult);
            } else {
                let toastEvent = $A.get("e.force:showToast");
                if (toastEvent) {
                    toastEvent.setParams({
                        title: "Search Error",
                        type: "error",
                        message: "An error occurred, please check logs."
                    });
                    toastEvent.fire();
                }
            }
            // if( $A.util.isEmpty(value) )
            //     // $A.util.addClass(component.find('resultsDiv'),'slds-is-open');
            // $A.util.addClass(component.find("Spinner"), "slds-hide");
        });
        $A.enqueueAction(action);
    },
    searchHandler: function (component, event, helper) {
        let searchText = component.get('v.searchText');
        if (searchText.length >= 2) {
            let searchText = component.get('v.searchText');
            let objName = component.get('v.selectedValue');
            helper.searchRecords(component, searchText, objName);
        } else {
            component.set("v.items", []);
        }
        console.log(searchText);
    },
    debounce : function(f, delay, component) {
        const call = function() {
            let context = this;
            let args = arguments;
            const later = () => {
                component.set('v.timeout', null);
                f.apply(context, args);
            };
            clearTimeout(component.get('v.timeout'));
            let timeout = setTimeout(later, delay);
            component.set('v.timeout', timeout);
        }
        return call();
    }
});