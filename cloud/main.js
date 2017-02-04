


Parse.Cloud.define('resetMoney', function(req, res) {
 
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.notEqualTo("Money",80);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set("Money",80);
    userData.save(null, { useMasterKey: true });
    
     
   }
	    totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});
	  
	  
	  


Parse.Cloud.define('daFiftyNormal', function(req, res) {
 
	 var myArray = new Array(50).fill(0);
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.notEqualTo(columnName,myArray);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set(columnName,myArray);
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});

Parse.Cloud.define('daFifty', function(req, res) {
 
	 var myArray = new Array(50).fill(0);
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.doesNotExist(columnName);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set(columnName,myArray);
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});


Parse.Cloud.define('resetArray', function(req, res) {
 
	 var myArray = new Array();
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.doesNotExist(columnName);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set(columnName,myArray);
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});


Parse.Cloud.define('resetArrayNormal', function(req, res) {
 
	 var myArray = new Array();
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.notEqualTo(columnName,myArray);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set(columnName,myArray);
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});


Parse.Cloud.define('resetString', function(req, res) {
 
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.doesNotExist(columnName);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set(columnName,'');
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});

Parse.Cloud.define('resetStringNormal', function(req, res) {
 
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.notEqualTo(columnName,'');
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set(columnName,'');
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});

Parse.Cloud.define('resetNumberNormal', function(req, res) {
 
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.notEqualTo(columnName,0);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set(columnName,0);
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});


Parse.Cloud.define('resetNumber', function(req, res) {
 
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.doesNotExist(columnName);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set(columnName,0);
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});


Parse.Cloud.define('resetNumberNormalPlayer', function(req, res) {
 
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('Player');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.notEqualTo(columnName,0);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set(columnName,0);
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});


Parse.Cloud.define('resetNumberPlayer', function(req, res) {
 
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('Player');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.doesNotExist(columnName);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set(columnName,0);
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});






Parse.Cloud.define('resetConf', function(req, res) {
 
	 var myArray = new Array();
	
	var columnName = req.params.roundNumbs;
	
	var  totalCounter;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.notEqualTo(columnName,'');
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set(columnName,'');
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});	
});



Parse.Cloud.define('resetOther', function(req, res) {
 
	 var myArray = new Array();
	
	
	
	var  totalCounter;
	 var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	
	
	
	   
		userQuery.notEqualTo("Money",80);
	
	
	 userQuery.find({
  success: function(results) {
 
   var  counter =0

   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
   
	   counter++
    userData.set("Money",80);
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  totalCounter = counter;
	  
	  console.log(totalCounter);
	  
    res.success('I passed on ' + counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
		
	
	
	
	
	
	
	
 
});

Parse.Cloud.define('cloudPass', function(req, res) {
  var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	
	userQuery.equalTo('username','zoukoum');
	
	
	 userQuery.find({
  success: function(results) {
 
  
 
var counter = 0;
   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
    userData.set('CloudPassed',false);
    userData.save(null, { useMasterKey: true });
	   counter++;
    
     
   }
    res.success('I passed on '+counter + ' users');
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
	
	
 
});





Parse.Cloud.define('scoretotal', function(req, res) {
 
	var totalEff = 0;
	
	var query = new Parse.Query(Parse.Installation);


	
	 var userQuery = new Parse.Query('Player');
	
	userQuery.limit(1000);
		 userQuery.find({
  success: function(results) {
 
  
 
   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
    totalEff += userData.get('Average_Efficiency');
    
     
   }
	  
	   var totaleffi = new Parse.Query('TotalEfficiency');
	  	 totaleffi.find({
  success: function(results) {
 
  
 
   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
    userData.set('totalEfficiency',totalEff);
    userData.save(null, { useMasterKey: true });
    
     
   }
	  
	  
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
	
  res.success('Hiya');
});

Parse.Cloud.define('postStatUser', function(req, res) {
   var currentUser = req.params.currentUser
   
   
     
   var userQuery = new Parse.Query('_User');
	
	
   userQuery.equalTo('username',currentUser);
	
	 userQuery.find({
  success: function(results) {
 
  
 
   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
    userData.set("StatUser",currentUser);
    userData.save(null, { useMasterKey: true });
    
     
   }
   
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
	
	

   
});










