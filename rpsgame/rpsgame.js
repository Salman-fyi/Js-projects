let userScore=0;
let pcScore=0; 
let chs=document.querySelectorAll(".choice");
const msg=document.querySelector("#r-msg");
const user=document.querySelector("#user");
const pc=document.querySelector("#pc");


chs.forEach((ch) =>{ 
ch.addEventListener("click",()=>{
    const selected = ch.getAttribute("id");
    const userchoice= playGame(selected);
});
});

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const optidx=Math.floor(Math.random()*3);
    return options[optidx];
}
const playGame=(userchoice)=>{
    console.log("Your Choice is",userchoice);
    const compchoice=gencompchoice();
    console.log("Computer's choice is",compchoice);
    let winner=true;
 
    if(userchoice===compchoice){
        console.log("It's a Draw");
        msg.innerText="It's a Draw - Play Again";
        msg.style.backgroundColor="#081b31"
    }
    else
    {
        if(userchoice==="rock"){
            winner=compchoice==="paper"?false :true;
        }
        else if(userchoice==="paper"){
            winner=compchoice==="scissors"?false:true;
        }
        else{
            winner=compchoice==="rock"?false:true;
        }
        if(winner){
            console.log("You Won");
            msg.innerText=`You Won!-Your ${userchoice} beats ${compchoice}`;
            msg.style.backgroundColor="Green";
            //to change scores
            userScore++;
            user.innerText=userScore;
        }
        else{
            console.log("Computer Won");
            msg.innerText=`Computer Won-${compchoice} beats your ${userchoice}`;
            msg.style.backgroundColor="Red";
            //to change scores
            pcScore++;
            pc.innerText=pcScore;
        }
    }
}