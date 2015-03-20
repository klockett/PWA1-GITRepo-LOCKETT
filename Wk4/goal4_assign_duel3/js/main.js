/*
Name:Kenlockett1
Date: 3/20/15.
Assignment:Goal1:Assignment: Duel 3
 */
// Created a self-executing function were the body of the code will be placed
(function(){


//Test to see if Js was connecting


console.log("FIGHT!!!");
//variables added
    var fighter1_txt = document.querySelector("#fighter1text").querySelector("p");
    var fighter2_txt = document.querySelector("#fighter2text").querySelector("p");
    var round_txt = document.querySelector("h4");
    var button = document.getElementById("fight_btn");


    console.log();
    button.addEventListener("click", fight, false);


//  Declared variables and Assigned
//Player name
    var fighters = [

        {
            name: "Spiderman",
            damage: 20,
            health: 100

        },

        {
            name: "Batman",
           damage: 20,
           health: 100


 }];






// var fighter1 = ['Spiderman', 20, 100];                                                                                // player 1 & 2 arrays
 //var fighter2 = ['Batman', 20, 100];
//var playerOneName = "Spiderman";
//var playerTwoName = "Batman";

//player damage
//var player1Damage = 20;
//var player2Damage = 20;

// player health
//var playerOneHealth = 100;
//var playerTwoHealth = 100;
// this var will keep track of what round we will be
//var round =0;
var round = 1;

round_txt.innerHTML = "Click FIGHT BUTTON to Start!";
    fighter1_txt.innerHTML = fighters[0].name + ":" + fighters [0].health;
    fighter2_txt.innerHTML = fighters[1].name + ":" + fighters [1].health;
    //array created for round variable
//function
 /* this function contains the code that loops through rounds and
    and reduces the player's health accordingly'*/
function fight(){
   //console.log('in the fight function');
//alert will display unfo
//alert(playerOne[0]+":"+'playerOneHealth'+playerOne[2]+" *START* "+playerTwo[0]+":"+'playerTwoHealth'+playerTwo[2]);
  //playerOne = {name:Spiderman, health:20, damage:100};
  //playerTwo = {name:Batman, health:20, damage:100};

    fighter1_txt.innerHTML = fighters[0].name + ":" + fighters [0].health;
    fighter2_txt.innerHTML = fighters[1].name + ":" + fighters [1].health;

// arrays was placed into alert to call indexes of array
//for loop added and will loop at least 10 times
    //for (var i = 0; i < 10; i++){

        //random formula is -Math.floor(Math.random() * (max - min) + min);

        //minDamage number defined
        //var minDamage1 = playerOne[1] * [.5];
        //var minDamage2 = playerTwo[1] * [.5];
       // var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1)
        //var f2 = Math.floor(Math.random()*(playerOne[1]-minDamage2)+minDamage2)
        var f1 = Math.floor(Math.random()* fighters[0].damage + fighters[0].damage * .5);
        var f2 = Math.floor(Math.random()* fighters[1].damage + fighters[1].damage * .5);

        //used the two console logs to see if the math formula was working-test
        //console.log(f1);
        //console.log(f2);

        // deducting the damage from players health
        //inflict damage
        //playerOne[2]-=f1;
       // playerTwo[2]-=f2;

        fighters[0].health -= f1;
        fighters[1].health -= f2;



        //out for the players health
       // console.log(playerOneName+":"+ playerOneHealth+""+ playerTwoName+":"+playerTwoHealth);
        //console.log (playerOne[0]+":" + playerOne[2]+":" + playerTwo[0]+":" + playerTwo[2]);                            //arrays was to added to console.log
      var result = winnerCheck();
      console.log(result);


        round_txt.innerHTML = "Round #" + round + "Results:";
        round++;

        //conditional added
        if (result === "no winner")

        {

            fighter1_txt.innerHTML = fighters[0].name + ":" + fighters [0].health;
            fighter2_txt.innerHTML = fighters[1].name + ":" + fighters [1].health;



            // round++;




           // alert(playerOne[0]+":"+playerOne[1]+" *ROUND "+round[0]+" OVER"+"* "+playerTwo[0]+":"+playerTwo[1]);
        }else {

            fighter1_txt.innerHTML = result;
            fighter2_txt.innerHTML = "";



            button.removeEventListener("click", fight, false);

            document.querySelector('.buttonblue').innerHTML = 'Done!!';





            // alert(results[0]);
           // break; //the break is used to break out of the for loop
        }
    }

     // this function will check to see the results after every round and see who is the winner
function winnerCheck(){
    //console.log("in winnerCheck FN")
    var result = "no winner";

    // if player 1 health is less than 1 and player two health is less then 1 they both die
    if (fighters[0].health < 1 && fighters [1].health < 1)
    {
        result = "You Both Die";
        //if player 1 is less than 1 then player 2 wins
    }else if(fighters[0].health < 1){
        //if player 2 is less than 1 then player 1 wins
        result  = fighters[1].name + "WINS!!!"
    }else if(fighters[1].health < 1)
    {
        result = fighters[0].name +" WINS!!!"


    }

    //return will return info back to the winnerCheck and stored in var results = winnerCheck
    return result;
};

   /**** The program gets stated below ****/

   //console.log('program starts')
    //fight call goes up to the fight function to execute code
    //fight();









})();