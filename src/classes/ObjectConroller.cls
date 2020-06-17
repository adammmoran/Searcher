public class ObjectConroller {
	@AuraEnabled
	Public static List<String> getObjList(){
//		List<String> str = new List<String>();
//		List<SObjectType> sObjectTypeList = Schema.getGlobalDescribe().Values();
//		Map<String, SObjectType> objs = schema.getGlobalDescribe();
//		for(String key: objs.keySet()){
//			str.add(objs.get(key).getDescribe().getName());
//		}
//		str.sort();
//		return str;


		List<SelectOption> selectOptions = new List<SelectOption>();
		List<String> str = new List<String>();
		List<SObjectType> sObjectTypeList = Schema.getGlobalDescribe().Values();
		for(SObjectType obj : sObjectTypeList){
			if(!obj.getDescribe().isCustom()){
				selectOptions.add(new SelectOption(obj.getDescribe().getName(), obj.getDescribe().getLabel()));
				str.add(obj.getDescribe().getName());
			}
		}
		str.sort();
		str.add(0,'<--Select-->');
		return str;
	}

	public class CustomSelectOption{
		public String label;
		public String value;

		public CustomSelectOption() {
			this.label = '';
			this.value = '';
		}

		public CustomSelectOption(String label, String value) {
			this.label = label;
			this.value = value;
		}
	}
}