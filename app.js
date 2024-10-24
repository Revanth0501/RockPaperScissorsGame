let userScore=0;
let compScore=0;
let userWin=false;

const choices=document.querySelectorAll(".choice");
messager=document.querySelector("#msg");
choices.forEach((choice) =>
{
    
    const showWinner=(userWin)=>
    {
        if(userWin)
        {
            console.log("User Win");
            messager.innerText="You Win!";
            messager.style.backgroundColor="Green";
            userScore++;
            document.querySelector("#user-score").innerText=userScore;
        }
        else
        {
            console.log("System Win");
            messager.innerText="System Won!";
            messager.style.backgroundColor="Red";
            compScore++;
            document.querySelector("#comp-score").innerText=compScore;
        }
    }
   
    const drawGame=() =>
    {
        console.log("Oops..Game was Drawn");
        messager.innerText="Game Drawn!"
        messager.style.backgroundColor="Blue";
    }
    const genCompChoice=() =>
    {
        const options=["rock","scissors","paper"];
        const randIdx=Math.floor(Math.random()*3);
        return options[randIdx];
    }
    
    const playGame=(userChoice) =>
    {
        console.log("User Choice : " ,userChoice);
        let compChoice=genCompChoice();
        console.log("Computer Choice :",compChoice);

        if(userChoice === compChoice)
            drawGame();

        else
        {
            if(userChoice==="rock")
            {
                userWin=(compChoice=== "paper") ? false:true;
            }
    
            else if(userChoice==="paper")
            {
                userWin=(compChoice=== "rock") ? true:false;
            }
    
            else
            {
                userWin=(compChoice=== "rock") ? false:true;
               
            }
            showWinner(userWin);
        }
    };
    
    choice.addEventListener("click",() => 
    {
        const choiced=choice.getAttribute("id");
        playGame(choiced);
    });
});