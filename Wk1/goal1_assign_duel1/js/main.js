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

 var playerOne = ['Spiderman', 20, 100] ;
 var playerTwo = ['Batman', 20, 100];
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
var round =[0] ;
//function
 /* this function contains the code that loops through rounds and
    and reduces the player's health accordingly'*/
function fight(){
   console.log('in the fight function');
//alert will display unfo
alert(playerOne[0]+":"+'playerOneHealth'+playerOne[2]+" *START* "+playerTwo[0]+":"+'playerTwoHealth'+playerTwo[2]);
//for loop added and will loop at least 10 times
    for (var i = 0; i < 10; i++){

        //random formula is -Math.floor(Math.random() * (max - min) + min);

        //minDamage number defined
        var minDamage1 = playerOne[1] * .5;
        var minDamage2 = playerTwo[1] * .5;
        var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1)
        var f2 = Math.floor(Math.random()*(playerOne[1]-minDamage2)+minDamage2)

        //used the two console logs to see if the math formula was working-test
        //console.log(f1);
        //console.log(f2);

        // deducting the damage from players health
        //inflict damage
        playerOne[2]-=f1;
        playerTwo[2]-=f2;

        //out for the players health
       // console.log(playerOneName+":"+ playerOneHealth+""+ playerTwoName+":"+playerTwoHealth);
        console.log (playerOne[0]+":" + playerOne[2]+":" + playerTwo[0]+":" + playerTwo[2]);
      var results = winnerCheck()
      console.log(results);

        //conditional added
        if (results === "no winner"){
            round[0]++;
            alert(playerOne[0]+":"+playerOne[1]+" *ROUND "+round[0]+" OVER"+"* "+playerTwo[0]+":"+playerTwo[1]);
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
    if(playerOne[2]<1 && playerTwo[2]<1){
        result = "You Both Die";
        //if player 1 is less than 1 then player 2 wins
    }else if(playerOne[2]<1) {
        //if player 2 is less than 1 then player 1 wins
        result = playerTwo[0] + "WINS!!!"
    }else if(playerTwo[2]<1){
        result = playerOne[0]+" WINS!!!"


    };

    //return will return info back to the winnerCheck and stored in var results = winnerCheck
    return result;
};

   /**** The program gets stated below ****/

   console.log('program starts')
    //fight call goes up to the fight function to execute code
    fight();









})();