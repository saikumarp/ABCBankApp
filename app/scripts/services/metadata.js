App.factory('MetaDataService', [function(){
	/*MetaData service used for get Bank supported lists like cities, professions...*/	
	/*In Future we can use any REST API services to get following list of data*/
	var metaData = {};
	metaData.getProfessionList = function(){

		return [
			// 'Select City',
			'Ahmadabad',
			'Anakapalli' ,
			'Bengaluru',
			'Delhi', 
			'Hyderabad', 
			'Kolkata', 
			'Mumbai', 
			'Vijayawada', 
			'Visakhapatnam',
			'Vizianagaram'
		];
	};

	metaData.getCitiesList = function() {
		return [/*"Select Profession",*/ "Student","Business","SlefEmp","GovernmentEmp"]
	};

	metaData.getDesignationList = function() {
		return [
			'Software Engineer',
			'Bank Manager', 
			'Program Analyst',
			'Compounder',
			'Driver', 
			'BusinessMan',
			'Artist',
			'Director',
			'Architect',
			'Engineer'
		];
	};

	metaData.getAccountTypesList = function() {
		return ['Current', 'Savings', 'Fixed', 'Recurring'];
	};


	return metaData;
}]);