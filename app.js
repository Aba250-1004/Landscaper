// console.log("LINKED!");

function main(){
    var money = 0;
    var runningBus = true;
    var tools = [];
    alert("Welcome to Landscaper where you can grow your business from cutting grass with your teeth to using scissors!")
    while(runningBus){
        let userInput = prompt("What would you like to do today: quit, use teeth, buy scissors, use scissors"
        ,"To quit enter q, enter desired prompt above");
        if(userInput.toLowerCase() === "q"){
            runningBus = false;
            alert("You end the game with $" + money);
        }else{
            day = runDay(money,userInput,tools);
            console.log(day);
            money = day[0];
            tools = day[1];
            alert("You have $" + money);
        }
    }
}

function runDay(currentMoney, userInput, tools){
    // use tools add to list if not in tools list 
    if(userInput.toLowerCase() === "use teeth"){
        return [cutWithTeeth(currentMoney),tools]
    }else if(userInput.toLowerCase() === "buy scissors"){
        if (tools.includes(("scissor"))){
            alert("You already own scissors buddy");
            return [currentMoney,tools]
        }else if (currentMoney >= 5){
            alert("You have successfully bought scissors");
            tools.push("scissor")
            return [buyScissors(currentMoney),tools];
        }else{
            alert("You wasted your day trying to buy a scissor");
            return [currentMoney,tools]
        }  
    }else if(userInput.toLowerCase() === "use scissors"){
        if(tools.includes("scissor")){
            return [useScissors(currentMoney),tools];
        }
    }else{
        alert("invalid input, you wasted a day. Great.")
        return [currentMoney,tools];
    }
    
}

function cutWithTeeth(currentMoney){
    return currentMoney + 1;
}

function buyScissors(currentMoney){
    return currentMoney - 5;
}

function useScissors(currentMoney){
    return currentMoney + 5;
}


main();