let UserScore=0;
let CompUser=0;

let choices=document.querySelectorAll(".choice");
let mes=document.querySelector(".message1");//p chhe a
let mes1=document.querySelector("#message");
let user=document.querySelector("#user-score");
let computer=document.querySelector("#comp-score")
const computerchoice=()=>{
    let num=Math.floor(Math.random()*3);
    return num;
}
const showwiner1=(winer1)=>{
    if(winer1){
        UserScore++;
        user.innerHTML=UserScore;
        console.log("you win ",winer1);
         mes.innerHTML="<i> You win ! </i>";
         mes.style.backgroundColor="green";
         userScore++;
    }
   
}
const showwiner2=(winer1)=>{
    if(winer1){
        CompUser++;
        computer.innerHTML=CompUser;
        console.log("comp win ",winer1);
         mes.innerHTML="<i> You Lose !! Try Again </i>";
         mes.style.backgroundColor="red";
    }
   
}
const draw=()=>{
    mes.innerHTML="<i> Draw </i>";
}

function playgame(userchoice){
    // we need a computer choice using arrray and index value
    let array=["rock","paper","scissors"];
    console.log("user choice is:",userchoice)
    let cmpchoice=computerchoice();
    console.log("comp choice is:",array[cmpchoice]);
    if(array[cmpchoice]===userchoice){
        console.log("draw");
        draw();
    }
    else{
        if(userchoice==='rock' && array[cmpchoice]==='scissors' ||
            userchoice==='scisssors' && array[cmpchoice]==='paper' ||
            userchoice==='paper' && array[cmpchoice]==='rock'
        
        ){
            showwiner1(userchoice);
        }else{
            showwiner2(array[cmpchoice]);
        }
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceid=choice.getAttribute("id");
        playgame(choiceid);
    })
})