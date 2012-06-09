// Make your card constructor again here, but make sure to use private
// variables!
function Card(s,n) {
    var suit = s;
    var number =n;
    this.getSuit = function(){
        return suit;
    };
    this.getNumber = function(){
        return number;
    };
    this.getValue = function(){
        if(n >9){
            return 10;
        }else if(n === 1){
            return 11;
        }else {
            return n;
        }
    };
}

function Hand() {
    var card1 = deal();
    var card2 = deal();
    this.score = function() {
        return card1.getValue() + card2.getValue();
    }
}

// Make a deal function here.  It should return a new card with a suit
// that is a random number from 1 to 4, and a number that is a random
// number between 1 and 13
function deal(){
    var s = Math.floor(Math.random()*4 + 1);
    var n = Math.floor(Math.random()*13 + 1);
    return new Card(s,n);
}


// examples of the deal function in action
var myHand = new Hand(); 
var yourHand = new Hand();

console.log("I scored a "+myHand.score()+" and you scored a "+ yourHand.score());

if(yourHand.score() > myHand.score())
    console.log("you win!"); 
else if(yourHand.score() < myHand.score()) 
    console.log("I win!"); 
else 
    console.log("We tied!");
