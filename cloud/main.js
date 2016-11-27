


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
	
	userQuery.notEqualTo('CloudPassed',false);
	
	
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

	
	Parse.Push.send({
  where: query,
  data: { alert: "Broadcast to everyone"}
}, { useMasterKey: true })
.then(function() {
  console.log("WORKED!");
}, function(error) {
  console.log("PROBLEM!");
});

	
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










Parse.Cloud.define('automaticConfirmation', function(req, res) {
  var currentRound = req.params.currentRound
  var previousRound = req.params.previousRound
  
  
   var userQuery = new Parse.Query('_User');
	userQuery.limit(1000);
	userQuery.equalTo('CloudPassed',false);
   
 
  
 
   userQuery.find({
  success: function(results) {
 
  
   var totalScore = 0;
	  var counter = 0;
   for (var i = 0; i < results.length; i++) {
  
    var userData = results[i];
	  
    var previousRoundPlayer = userData.get(previousRound);
    var currentRoundPlayers =  userData.get(currentRound);
    
    console.log(previousRoundPlayer[0] + 'WA7eCHHHHHH');
	    counter ++;
	   
	    userData.set('CloudPassed',true);
	   
	 
    if(currentRoundPlayers.length === 0){
	    
	      if(previousRoundPlayer.length === 0){
		      userData.save(null, { useMasterKey: true });
		   
	   }else if(previousRoundPlayer.length >5){
		   for(var h = 0;  h< 5; h++){
			currentRoundPlayers[h] = previousRoundPlayer[h];
		   }
		   
		   userData.set('CloudPassed',true);
		   userData.set(currentRound,currentRoundPlayers);
       		  userData.save(null, { useMasterKey: true }); 
		    
		    }else{
		  userData.set('CloudPassed',true);
	   	  userData.set(currentRound,previousRoundPlayer);
       		  userData.save(null, { useMasterKey: true });
	   }
	    
	    
		
    
    }else{
		console.log("No need to copy");
	        userData.save(null, { useMasterKey: true });
	}
    
    
     
   }
	  
	   res.success(counter);
   
   
     
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
  
  
});


Parse.Cloud.define('computeScoreRound', function(req, res) {
  var currentRoundPlayer = req.params.currentRoundPlayer
  var currentRound = req.params.currentRound
  var currentNumber = req.params.currentNumber
  
  
 
  
 
  
  var totalScoreRound;

 
  var userQuery = new Parse.Query('_User');

	
 
	userQuery.equalTo('Statuser','MarcoTer');
  
  
  userQuery.find({
  success: function(results) {
 
	   var counter = 0;
  
   for (var z = 0; z < results.length; z++) {
  
    var userData = results[z];
	   counter++;
	   
   var bonusStateArray = userData.get('BonusEachRound');
	   var statUser = userData.get('StatUser');
	   console.log('Stat user is ' + statUser);
   var bonusThisRound = bonusStateArray[currentNumber];
   var historyRounds = userData.get('HistoryRoundScore');
	   userData.set('CloudPassed',true);
   
   if (bonusThisRound === 0 || bonusThisRound === 5){
    
    
    var playersInThisRound = userData.get(currentRoundPlayer); 
	   if (playersInThisRound.length === 0 ){
		   console.log('Round1 is Zero');
		    userData.save(null, { useMasterKey: true });
	   }else{
		   var confirmationRounds = userData.get('ConfirmRound');
   
     var queryPlayer = new Parse.Query('Player');
    queryPlayer.containedIn("Name",playersInThisRound);
    
    queryPlayer.find({
  success: function(results) {
 
  
   var totalScore = 0;
   for (var i = 0; i < results.length; i++) {
  
    var userData2 = results[i];
    var namePlayer = userData2.get('Name');
    var playerScore = userData2.get(currentRound);
    if(namePlayer === playersInThisRound[0]){
        playerScore = playerScore * 1.2;
    }
    totalScore = totalScore + playerScore;
    
    
	   
	   
    totalScoreRound = totalScore;
	   console.log(totalScoreRound +' ZIZOUUUU');
    
    
     
   }
	  if(confirmationRounds[currentNumber] === 1){
		  totalScoreRound = totalScoreRound + 5;
	  }
	  totalScoreRound = (totalScoreRound.toFixed(2))/1;
	   historyRounds[currentNumber] = totalScoreRound;
      userData.set('LastScore',totalScoreRound);
     
	  var parsetotalScore = 0;
	    for (var k = 0; k < historyRounds.length; k++) {
		    parsetotalScore += historyRounds[k];
	    }
	  
	  parsetotalScore = (parsetotalScore.toFixed(2))/1;
     
      userData.set('TotalScore',parsetotalScore);
      userData.set('HistoryRoundScore',historyRounds);
      
      
   
     userData.save(null, { useMasterKey: true });
  
  },
	    
	    

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
	   }
    
    
   
     
   }else if(bonusThisRound === 1){
	    console.log('Shakiraaaaa');
	   var playersInThisRound = userData.get(currentRoundPlayer);
	    var confirmationRounds = userData.get('ConfirmRound');
	    var historyRounds = userData.get('HistoryRoundScore');
   
     var queryPlayer = new Parse.Query('Player');
    queryPlayer.containedIn("Name",playersInThisRound);
    
    queryPlayer.find({
  success: function(results) {
 
  
   var totalScore = 0;
   for (var i = 0; i < results.length; i++) {
  
    var userData2 = results[i];
    var namePlayer = userData2.get('Name');
    var playerScore = userData2.get(currentRound);
    if(namePlayer === playersInThisRound[0]){
        playerScore = playerScore * 1.2;
    }
    if(playerScore <0){
		playerScore = playerScore * -1;   
	   }
    totalScore = totalScore + playerScore;
    
    
	   
	   
    totalScoreRound = totalScore;
	   console.log(totalScoreRound +' ZIZOUUUU');
    
    
     
   }
	  if(confirmationRounds[currentNumber] === 1){
		  totalScoreRound = totalScoreRound + 5;
	  }
	  totalScoreRound = (totalScoreRound.toFixed(2))/1;
	   historyRounds[currentNumber] = totalScoreRound;
      userData.set('LastScore',totalScoreRound);
	  
       var parsetotalScore = 0;
	    for (var k = 0; k < historyRounds.length; k++) {
		    parsetotalScore += historyRounds[k];
	    }
	  
	   parsetotalScore = (parsetotalScore.toFixed(2))/1;
     
      userData.set('TotalScore',parsetotalScore);
     
    
      userData.set('HistoryRoundScore',historyRounds);
   
     userData.save(null, { useMasterKey: true });
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
	   
   }else if(bonusThisRound === 4){
	    	 
	   var playersInThisRound = userData.get(currentRoundPlayer);
	    var confirmationRounds = userData.get('ConfirmRound');
	    var historyRounds = userData.get('HistoryRoundScore');
   
     var queryPlayer = new Parse.Query('Player');
    queryPlayer.containedIn("Name",playersInThisRound);
    
    queryPlayer.find({
  success: function(results) {
 
  
   var totalScore = 0;
   for (var i = 0; i < results.length; i++) {
  
    var userData2 = results[i];
    var namePlayer = userData2.get('Name');
    var playerScore = userData2.get(currentRound);
	   
	   console.log(playerScore + ' before multiplying');
        playerScore = playerScore * 1.2;
           console.log(playerScore + ' after multiplying');
  
    totalScore = totalScore + playerScore;
    
    
	   
	   
    totalScoreRound = totalScore;
	   console.log(totalScoreRound +' ZIZOUUUU');
    
    
     
   }
	  if(confirmationRounds[currentNumber] === 1){
		  totalScoreRound = totalScoreRound + 5;
	  }
	  totalScoreRound = (totalScoreRound.toFixed(2))/1;
	   historyRounds[currentNumber] = totalScoreRound;
      userData.set('LastScore',totalScoreRound);
     
     
       var parsetotalScore = 0;
	    for (var k = 0; k < historyRounds.length; k++) {
		    parsetotalScore += historyRounds[k];
	    }
	   parsetotalScore = (parsetotalScore.toFixed(2))/1;
     
      userData.set('TotalScore',parsetotalScore);
      userData.set('HistoryRoundScore',historyRounds);
   
     userData.save(null, { useMasterKey: true });
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
	    
	    }else if(bonusThisRound ==2 ){
		    	    console.log('Shakiraaaaa');
	   var playersInThisRound = userData.get(currentRoundPlayer);
	    var confirmationRounds = userData.get('ConfirmRound');
	    var historyRounds = userData.get('HistoryRoundScore');
   
     var queryPlayer = new Parse.Query('Player');
    queryPlayer.containedIn("Name",playersInThisRound);
    
    queryPlayer.find({
  success: function(results) {
 
  
   var totalScore = 0;
   for (var i = 0; i < results.length; i++) {
  
    var userData2 = results[i];
    var namePlayer = userData2.get('Name');
    var playerScore = userData2.get(currentRound);
    if(namePlayer === playersInThisRound[0]){
        playerScore = playerScore * 1.2;
    }
    if(namePlayer === playersInThisRound[1]){
        playerScore = playerScore * 1.2;
    }
   
    totalScore = totalScore + playerScore;
    
    
	   
	   
    totalScoreRound = totalScore;
	   console.log(totalScoreRound +' ZIZOUUUU');
    
    
     
   }
	  if(confirmationRounds[currentNumber] === 1){
		  totalScoreRound = totalScoreRound + 5;
	  }
	  totalScoreRound = (totalScoreRound.toFixed(2))/1;
	   historyRounds[currentNumber] = totalScoreRound;
      userData.set('LastScore',totalScoreRound);
     
     
       var parsetotalScore = 0;
	    for (var k = 0; k < historyRounds.length; k++) {
		    parsetotalScore += historyRounds[k];
	    }
	  
	   parsetotalScore = (parsetotalScore.toFixed(2))/1;
     
      userData.set('TotalScore',parsetotalScore);
      userData.set('HistoryRoundScore',historyRounds);
   
     userData.save(null, { useMasterKey: true });
  
  },

  error: function(error) {
    // error is an instance of Parse.Error.
  }
});
		     }
    
    
     
   }
	   res.success(counter);  
  
  },
	  
	  

  error: function(error) {
    // error is an instance of Parse.Error.
  }
}); 
});
