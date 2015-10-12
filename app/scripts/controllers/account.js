App.controller('AccountController', ['$scope', 'MetaDataService', 'ParseService', '$location',  function($scope, MetaDataService, ParseService, $location) {
	/*Fill List of Data using MetaData Service*/
	$scope.arrCitie = MetaDataService.getProfessionList();
	$scope.arrProfession = MetaDataService.getCitiesList();
	$scope.arrDesignation = MetaDataService.getDesignationList();
	$scope.arrAccountType = MetaDataService.getAccountTypesList();

	$scope.profession = $scope.arrProfession[0];
	$scope.city = $scope.arrCitie[0];
	$scope.designation = $scope.arrDesignation[0];
	$scope.accounttype = $scope.arrAccountType[0];

	$scope.currentStep = 1;
	$scope.customer = {
		'firstname'  : '',
		'lastname'   : '',
		'age'        : '',
		'city'       : '',
		'profession' : '',
		'pan'        : '',
		'income'     : '',
		'companyname': '',
		'designation': '',
		'address'    : '',
		'pincode'    : '',
		'accounttype': '',
		'applyFixedDeposit' : '',
		'hasCreditCard' : '',
		'agreeTC' : ''
	};
	$scope.next = function() {
		if($scope.currentStep ===1) {
			$scope.customer['firstname'] = $scope.firstname;
			$scope.customer['lastname'] = $scope.lastname;
			$scope.customer['age'] = $scope.age;
			$scope.customer['city'] = $scope.city;
			$scope.customer['profession'] = $scope.profession;
		} else if($scope.currentStep === 2) {
			$scope.customer['pan'] = $scope.pannumber;
			$scope.customer['income'] = $scope.income;
			$scope.customer['companyname'] = $scope.companyName;
			$scope.customer['designation'] = $scope.designation;
			$scope.customer['address'] = $scope.address;
			$scope.customer['pincode'] = $scope.pincode;
		}
		$scope.currentStep = $scope.currentStep + 1;
	};

	$scope.prev = function() {
		$scope.currentStep = $scope.currentStep - 1;
	};

	$scope.reset = function() {
		switch($scope.currentStep) {
			case 1:
				$scope.firstname = '';
				$scope.lastname = '';
				$scope.age = '';
				$scope.city = $scope.arrCitie[0];
				$scope.profession = $scope.arrProfession[0];
			break;
			case 2:
				$scope.pannumber = '';
				$scope.income = '';
				$scope.companyName = '';
				$scope.designation = $scope.arrDesignation[0];
				$scope.address = '';
				$scope.pincode = '';
			break;
			case 3:
				$scope.accounttype = $scope.arrAccountType[0];
				$scope.isApply = '';
				$scope.hasCCard = '';
				$scope.tc = '';
			break;
		}
	};

	$scope.apply = function() {
		$scope.customer['accounttype'] = $scope.accounttype;
		$scope.customer['applyFixedDeposit'] = $scope.isApply;
		$scope.customer['hasCreditCard'] = $scope.hasCCard;
		$scope.customer['agreeTC'] = $scope.tc;
		//Send Customer Data to the Parse Server
		ParseService.submitData($scope.customer);
		$scope.currentStep = 4;
	};

	$scope.ok  = function() {
		$location.path('#/home');
	};
}]);