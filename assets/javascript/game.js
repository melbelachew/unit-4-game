// declare variables

var randomNumber;
var wins=0;
var losses=0;
var firstNumber = 0;

//make 4 divs for crystals and assign a class then generate random numer for each crystal

for(var i =0; i<4; i++) {
    
    var randomNumber = Math.floor(Math.random()*(12-1)+1);

    // console.log(randomNumber);

    var crystal = $("<div>");

        crystal.attr({"class": 'crystal', "value-random":randomNumber});

       $(".crystals").append(crystal);

}

//random selection

 resultNumber = Math.floor(Math.random() * (120 - 19) + 19);

//  console.log(resultNumber);

 $("#result").html('Result: ' + resultNumber);

  
 //onclick function on crystals

 $(".crystal").on('click', function() {

    // console.log($(this));

    var num = parseInt($(this).attr('value-random'));

    firstNumber += num;

    // console.log(firstNumber);
    
    //conditional statement for wins and losses


    if(firstNumber > randomNumber){

        // console.log("lost")
        losses--;
        
        $("#losses").html('You lost');
    }

    else if (firstNumber === randomNumber){
        // console.log("win");
        wins++;

        $("#wins").html('You win');
    }
 });

 //reset game
