console.log("LINKED!");

function main(startingMoney){
    var money = startingMoney;
    var runningBus = true;
    alert("Welcome to the business where you cut grass with your teeth!")
    while(runningBus){
        let userInput = prompt("Would you like to work today?"
        ,"To quit enter q, else work today");
        money = runDay(money);
        if(userInput.toLowerCase() === "q"){
            runningBus = false;
            alert("You end the game with $" + money);
        }else{
            alert("You have $" + money);
        }
    }
}

function runDay(currentMoney){
    return cutWithTeeth() + currentMoney;
}

function cutWithTeeth(){
    return 1;
}

main(0);