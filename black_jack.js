// Card Constructor
function Card(s,n){
    var suit = s;
    var number = n;
    
    /*getSuit()
    *param: none
    *return: integer value of the suit for the  card
    */
    this.getSuit = function(){
        
        switch(suit){
            case 1 :
                return "clubs";
                break;
            case 2 :
                return "moons";
                break;
            case 3 :
                return "stars";
                break;
            case 4 :
                return "spades";
                break;
                
            
        }
    };
    
    /*getNumber()
    *param: none
    *return: -number::integer value of the number for the  card
    */
    this.getNumber = function(){
                return number;       
    };
    
    /*getValue()
    *param: none
    *return: -num::integer value of 10 if face card, 1 or 11 if Aces, as-is if other
    */
    this.getValue= function(){
        var num = this.getNumber();
        if(num === 1){
            return 11;
        }else if(num >= 11 && num <= 13){
            return 10;
        }else{
            return num;
        }
    };
}

/*deal()
*param: none
*return: -Card::a Card object with random suit and number
*/
var deal = function(){
    var suit = Math.floor(Math.random()*4 +1);
    var number = Math.floor(Math.random()*13 +1);
    
    var newCard = new Card(suit,number);
    return newCard;
};

function Hand() {
    var cards =[];
    cards.push(deal());
    cards.push(deal());
    this.getHand = function(){
        return cards;
    };
    this.Score = function() {
        var score = 0;
        for(var c in cards){
            score += cards[c].getValue();
        }
        return score;
    };
    this.printHand = function() {
        var print = "";
        for(var c in cards){
            var rank = ""; 
            switch(cards[c].getNumber()){
            case 1:
                rank = "A";
                break;
            case 13:
                rank = "K";
                break;
            case 12:
                rank = "Q";
                break;
            case 11:
                rank = "J";
                break;
            default:
                rank = cards[c].getNumber();
        }
           
            print += rank + " of " +  cards[c].getSuit();
            if(c < cards.length-1){
                print += ", and ";
            }
        }
       // console.log(print);
        return print;
    };
    this.hitMe = function() {
        cards.push(deal());
    };
}

function playAsDealer(){
    var dealerHand = new Hand();
        while(dealerHand.Score() < 17){
            dealerHand.hitMe();
        }
        return dealerHand;
}

function playAsUser(){
    var userHand = new Hand();
    
        var hit = confirm("You have " + userHand.printHand() + ", would you like to it. OK to Hit or cancel to Stand.");
        while(hit){
            userHand.hitMe();
            hit = confirm("You have " + userHand.printHand() + ", would you like to it. OK to Hit or cancel to Stand.");
        }
        return userHand;
}

function declareWinner(userHand, dealerHand){
    var dealerScore = dealerHand.Score();
    var userScore = userHand.Score();
    if(userScore < 22){
        if(dealerScore > 21 || userScore > dealerScore){
            return "You win!";
        }else if(userScore === dealerScore){
            return "You tied!.";
        }
    }
    return "You lose!";
}

function playGame () {
    var userHand = playAsUser();
    var dealerHand = playAsDealer();
    var winOrLose = declareWinner(userHand, dealerHand);

    console.log("\n");
    console.log("You have " + userHand.printHand() + " for a score of " + userHand.Score());
    console.log("Dealer has " + dealerHand.printHand() + " for a score of " + dealerHand.Score());
    console.log(winOrLose);


}

playGame();