App.factory('ParseService',[function() {
  var saveObj = {},
      ParseService = {}, 
      query = '';
  /* Parse Intialize with Application ID & JavaScriptKey */
  Parse.initialize("mUvsG32q6Q71OgGR6xPphQ4myo9SeSlWGBDNMaMU", "6E3XHnUjG3fSxti1NfDZVlFNCbi5ZHhx0TD3UtXS");

  /*Extend OBJ  with server data*/ 
  saveObj = Parse.Object.extend('saveCustomerObject');
  query =  new Parse.Query(saveObj);

  /*get Previously Saved Data*/
  query.find({
    success: function(results){
      console.log(results);
      if(results.length) {
        ParseService.results = results;
      } 
      ParseService.saveObject = new saveObj();
    },
    error: function(error) {
      console.log(error);
    }
  });

  ParseService.submitData = function(userdata) {
    ParseService.saveObject.save(userdata, {
      success: function(result) {
        console.log(result);
      }, 
      error: function(error){
        console.log(error);
      }
    })
  };

  return ParseService;  
}]);