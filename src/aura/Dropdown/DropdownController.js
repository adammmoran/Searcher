({
    handleClick: function (component, event, helper) {
        let navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": event.target.closest('li').dataset.id
        });
        navEvt.fire();
    }
})