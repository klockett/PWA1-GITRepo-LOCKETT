/*
Name:Kenlockett1
Date: 3/6/15.
Assignment:Goal1:Assignment: Duel 1
 */

// Created a self-executing function were the body of the code will be placed
(function(){


//Test to see if Js was connecting


console.log("FIGHT!!!");

//  Declared variables and Assigned
//Player name
var playerOneName = "Spiderman";
var playerTwoName = "Batman";

//player damage
var player1Damage = 20;
var player2Damage = 20;

// player health
var playerOneHealth = 100;
var playerTwoHealth = 100;
// this var will keep track of what round we will be
var round =0;
//function
 /* this function contains the code that loops through rounds and
    and reduces the playe's health accordingly'*/
function fight(){
   console.log('in the fight function');
//alert will disolay unfo
alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);
//for loop added and will loop at least 10 times
    for (var i = 0; i < 10; i++){

        //random formula is -Math.floor(Math.random() * (max - min) + min);

        //minDamage number defined
        var minDamage1 = player1Damage * .5;
        var minDamage2 = player2Damage * .5;
        var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1)
        var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2)

        //used the two console logs to see if the math formula was working-test
        //console.log(f1);
        //console.log(f2);

        // deducting the damage from players health
        //inflict damage
        playerOneHealth-=f1;
        playerTwoHealth-=f2;

        //out for the players health
        console.log(playerOneName+":"+ playerOneHealth+""+ playerTwoName+":"+playerTwoHealth);

      var results = winnerCheck()
      console.log(results);

        //conditional added
        if (results === "no winner"){
            round++;
            alert(playerOneName+":"+playerOneHealth+" *ROUND "+round+" OVER"+"* "+playerTwoName+":"+playerTwoHealth);
        }else{
            alert(results);
            break; //the break is used to break out of the for loop
        };
    };
};
     // this function will check to see the results after every round and see who is the winner
function winnerCheck(){
    console.log("in winnerCheck FN")
    var result = "no winner";

    // if player 1 health is less than 1 and player two health is less then 1 they both die
    if(playerOneHealth<1 && playerTwoHealth<1){
        result = "You Both Die";
        //if player 1 is less than 1 then player 2 wins
    }else if(playerOneHealth<1) {
        //if player 2 is less than 1 then player 1 wins
        result = playerTwoName + "WINS!!!"
    }else if(playerTwoHealth<1){
        result = playerOneName+" WINS!!!"


    };

    //return will return info back to the winnerCheck and stored in var results = winnerCheck
    return result;
};

   /**** The program gets stated below ****/

   console.log('program starts')
    //fight call goes up to the fight function to execute code
    fight();









})();