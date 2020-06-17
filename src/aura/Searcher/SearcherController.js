({
    clearOption : function (component, event, helper) {
        component.set("v.items", [])
        component.set('v.searchText', "");
    },
    searcher: function (component, event, helper){
        let searchText = component.get('v.searchText');
        if(event.keyCode >= 48 && event.keyCode <= 90 || (event.keyCode === 8 && searchText)){
            const call = function (){
                setTimeout($A.getCallback(helper.searchHandler(component, event, helper)),0);
            };
            helper.debounce(call,500, component);
        }
    }
})