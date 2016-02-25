
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});



 	var currentUserguess;
 	var oursecrateNumber;
 	var guessCounter=0; 
 	var guessHistory=[];
 	newGame();

	function newGame(){
 		oursecrateNumber= Math.random() * 100;
 		oursecrateNumber= Math.floor(oursecrateNumber + 1);

		//copy some function
		guessCounter = 0;
		displayCouter(guessCounter);
		guessHistory = [];
		displayHistory(guessHistory);
	}

	$('.new').click(newGame);
 	
	$('#guessButton').click(function (evana){
		evana.preventDefault();
		currentUserguess= $('#userGuess').val();
		currentUserguess= parseInt(currentUserguess);
		console.log('current user guess is ' +currentUserguess);
	
		if(currentUserguess<0 || currentUserguess>101){
			alert('please enter a number between 0 to 100');
			$('#userGuess').val('');
    		return;
		}
		if(currentUserguess % 1!==0){
   		 	alert('please input a number');
    		 $('#userGuess').val('');
   	 	 	return;
		}

		guessCounter++
		//Function
		displayCouter(guessCounter);
		//guessHistory function line
		guessHistory.push(currentUserguess);
		//function name
		displayHistory(guessHistory);
		//Number dont stay in the box pamanently
		$('#userGuess').val('');

		var farWay = Math.abs(currentUserguess - oursecrateNumber);
	 	if(currentUserguess == oursecrateNumber){
			$('#feedback').text("You win");
		}
		else if(farWay <= 5){
			$('#feedback').text("red hot");
		}
		else if(farWay <= 10){
			$('#feedback').text("hot");
		}
		else if(farWay <= 20){
			$('#feedback').text("warm");
		}
		else if(farWay <= 30){
			$('#feedback').text("cold");
		}
		else {
			$('#feedback').text("ice cold");
		}	

		if (guessCounter>20){
			$('#feedback').text("You lose! the secrate Number was " + oursecrateNumber);		
			newGame();
		}
	});

	function displayCouter(newguessCounter){
		$('#count').text(newguessCounter);
	}

	function displayHistory(showListing){
		var listingTime= $('#guessList');
		listingTime.empty();
		for(var i=0; i<showListing.length; i++){
			var guess= showListing[i];
		listingTime.append("<li>" + guess + "</li>");
		}
	}
});


