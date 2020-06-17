public class SearcherController {
	@AuraEnabled
	public static List<sObject> seBox(String searchText, String objName){
		String searchQuery = 'FIND \'' + searchText +'*' + '\' IN ALL FIELDS RETURNING '+ objName +'(Id, Name)';
		List<List <sObject>> searchList = search.query(searchQuery);
		return searchList[0];
	}
}