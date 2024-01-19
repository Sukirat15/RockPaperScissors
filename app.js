



let choice=document.querySelectorAll(".box");
let msg=document.querySelector("#m1");
let div=document.querySelector(".message");

let compScore=0;
let userScore=0;

let user=document.querySelector("#user");
let comp=document.querySelector("#comp1");

for(let i=0;i<3;i++)
{
   
    choice[i].addEventListener("click",()=>{
        let id=choice[i].getAttribute("id");
        playGame(id);
    });
}

function random()
{
   let r=Math.floor(Math.random()*3);
   return r;
}

function playGame(userchoice)
{   
    let arr=["rock","paper","scissors"];
    let r=random();
    let computerChoice=arr[r];
   
     if(userchoice==computerChoice)
     {msg.innerText="It was a Draw";
     div.style.backgroundColor="black";}
     else
     {
        if(computerChoice=="paper")
        {
            if(userchoice=="rock")
            {
                msg.innerText="You Lose.Computer chooses Paper";
                div.style.backgroundColor="red";
                compScore++;
                comp.innerText=compScore;
            }
            else
            {
                msg.innerText="You win Computer chooses paper";
                div.style.backgroundColor="green";
                userScore++;
                user.innerText=userScore;
            }
        }
        
        if(computerChoice=="rock")
        {
            if(userchoice=="paper")
            {msg.innerText="You win Computer chooses rock";
            div.style.backgroundColor="green";
            userScore++;
            user.innerText=userScore;
            }
            else
            {msg.innerText="You Lose.Computer chooses rock";
            div.style.backgroundColor="red";
            compScore++;
            comp.innerText=compScore;
            }
        }


        if(computerChoice=="scissors")
        {
            if(userchoice=="paper")
            {msg.innerText="You Lose Computer chooses scissors";
            div.style.backgroundColor="red";
            compScore++;
            comp.innerText=compScore;
            }
            else
            {msg.innerText="You win Computer chooses scissors";
            div.style.backgroundColor="green";
            userScore++;
            user.innerText=userScore;
             }
        }
    }

    console.log("Your Score",userScore);
    console.log("Comp Score",compScore);
}
   

        



     








