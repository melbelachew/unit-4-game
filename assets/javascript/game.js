// declare variables

var randomNumber;
var wins=0;
var losses=0;
var score = 0;
var imgs=["./assets/images/Img1.png", "./assets/images/Img2.png","./assets/images/Img3.png","./assets/images/Img5.png",]

//make 4 divs for crystals and assign a class then generate random numer for each crystal

//wrap the forloop iteration into a reset function

for(var i =0; i<4; i++) {
    
    var random = Math.floor(Math.random()*(12-1)+1);

    // console.log(random);

    var crystal = $("<img>");

        crystal.attr({"class": 'crystals', "value-random":random});
        crystal.attr("src",imgs[i]);
        crystal.attr("height","100");

       $(".crystals").append(crystal);
    console.log(crystal)
}   

//Reset function

function resetCrystals () {
    for(var i =0; i<4; i++) {
        var crystal = $("<img>");

        crystal.attr({"class": 'crystals', "value-random":random});
        crystal.attr("src",imgs[i]);
        crystal.attr("height","100");

       $(".crystals").append(crystal);
}}
  

//random selection

resultNumber = Math.floor(Math.random() * (120 - 19) + 19);

//  console.log(resultNumber);

$("#randomNumGenerated").append(resultNumber);

  
 //onclick function on crystals

 $(".crystals").on('click', function() {

    console.log($(this));

    var num = parseInt($(this).attr('value-random'));

    score += num;

    $("#totalScore").text(score);

    
    //conditional statement for wins and losses


    if(score > randomNumGenerated){

        // console.log("losses")
        losses--;
        
        $("#losses").html('You lost');
    }

    else if (score === randomNumGenerated){
        // console.log("wins");
        wins++;

        $("#wins").html('You win');
    }
 });

 //reset game
