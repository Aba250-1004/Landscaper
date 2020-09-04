// console.log("LINKED!");

function main(){
    var money = 0;
    var runningBus = true;
    var tools = [];
    alert("Welcome to Landscaper where you can grow your business from cutting grass with your teeth to using a old-timey push lawnmower, buy battery-powered lawnmower, use battery-powered lawnmower, buy a team of students, and use a team of students!")
    while(runningBus){
        let userInput = prompt("What would you like to do today: quit, use teeth, buy scissors, use scissors, buy old-timey push lawnmower, use old-timey push lawnmower, buy battery-powered lawnmower, use battery-powered lawnmower, buy a team of students, use a team of students"
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
            if(money >= 1000){
                runningBus = false;
                alert("Congrats you won the game!");
            }
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
    }else if(userInput.toLowerCase() === "buy old-timey push lawnmower"){
        return buyOldLawnmower(currentMoney,tools);
    }else if (userInput.toLowerCase() === "use old-timey push lawnmower"){
        return useOldLawnmower(currentMoney,tools);
    }else if(userInput.toLowerCase() === "buy battery-powered lawnmower"){
        return buyBatLawnmower(currentMoney,tools);
    }else if(userInput.toLowerCase() === "use battery-powered lawnmower"){
        return useBatLawnmower(currentMoney,tools);
    }else if(userInput.toLowerCase() === "buy a team of students"){
        return buyStudents(currentMoney,tools);
    }else if(userInput.toLowerCase() === "use a team of students"){
        return useStudents(currentMoney,tools);
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


function buyOldLawnmower(currentMoney,tools){
    if(tools.includes("old-timey push lawnmower")){
        alert("you already own this lawnmower");
        return [currentMoney,tools]
    }else if(currentMoney >= 25){
        tools.push("old-timey push lawnmower");
        return [currentMoney-25, tools];
    }else{
        alert("you can't afford the old-timey push lawnmower");
        return [currentMoney,tools];
    }
}

function useOldLawnmower(currentMoney,tools){
    if (tools.includes(("old-timey push lawnmower"))){
        return [currentMoney+25, tools]
    }else{
        alert("You don't own a old-timey push lawnmower")
        return [currentMoney,tools];
    }
}

function buyBatLawnmower(currentMoney,tools){
    if(tools.includes("battery-powered lawnmower")){
        alert("you already own the battery-powered lawnmower");
        return [currentMoney,tools]
    }else if(currentMoney >= 250){
        tools.push("battery-powered lawnmower");
        return [currentMoney-250, tools];
    }else{
        alert("you can't afford the battery-powered lawnmower");
        return [currentMoney,tools];
    }
}

function useBatLawnmower(currentMoney,tools){
    if (tools.includes(("battery-powered lawnmower"))){
        return [currentMoney+100, tools]
    }else{
        alert("You don't own a old-timey push lawnmower")
        return [currentMoney,tools];
    }
}

function buyStudents(currentMoney,tools){
    if(tools.includes("students")){
        alert("you already own a team of students");
        return [currentMoney,tools]
    }else if(currentMoney >= 500){
        tools.push("students");
        return [currentMoney-500, tools];
    }else{
        alert("you can't afford a team of students");
        return [currentMoney,tools];
    }
}

function useStudents(currentMoney, tools){
    if (tools.includes(("students"))){
        return [currentMoney+250, tools]
    }else{
        alert("You don't own a team of students")
        return [currentMoney,tools];
    }
}

main();