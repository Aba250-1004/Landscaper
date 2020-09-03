console.log("LINKED!");

function main(){
    var money = 0;
    var runningBus = true;
    alert("Welcome to the business where you cut grass with your teeth!")
    while(runningBus){
        let userInput = prompt("What would you like to do today: quit, use teeth, or buy scissors"
        ,"To quit enter q, ");
        if(userInput.toLowerCase() === "q"){
            runningBus = false;
            alert("You end the game with $" + money);
        }else{
            money = runDay(money,userInput);
            console.log(money)
            alert("You have $" + money);
        }
    }
}

function runDay(currentMoney,userInput){
    if(userInput.toLowerCase() === "use teeth"){
        return cutWithTeeth(currentMoney);
    }else if(userInput.toLowerCase() === "buy scissors"){
        if (currentMoney >= 5){
            return buyScissors(currentMoney)
        }else{
            alert("You wasted your day trying to buy a scissor");
            return currentMoney
        }  
    }
    
}

function cutWithTeeth(currentMoney){
    return currentMoney + 1;
}

function buyScissors(currentMoney){
    return currentMoney - 5;
    
}


main();