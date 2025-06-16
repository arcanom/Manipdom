let score = document.getElementById("score");
let scoreOne = 0;
let scoreTwo = 0;
let limit = document.getElementById("limit");
let playerOne =  document.getElementById("playerOne");
let playerTwo =  document.getElementById("playerTwo");
let reset = document.getElementById("reset");
let styleOne ="";
let styleTwo="";
function refreshScore(){
     if (scoreOne ===  parseInt(limit.value) && scoreOne > scoreTwo) {
            styleOne = 'style="color: green; font-weight: bold;"';
         
        }
        if (scoreTwo ===  parseInt(limit.value) && scoreTwo > scoreOne) {
            styleTwo = 'style="color: green; font-weight: bold;"';

        }
score.innerHTML = `

<p> <span ${styleOne}> ${scoreOne} </span> to <span ${styleTwo}> ${scoreTwo} </span> </p>

<p>Playing to: ${limit.value || "?"}</p>
`
}

refreshScore();

playerOne.addEventListener("click",()=>{
    if(scoreOne < parseInt(limit.value)){
        scoreOne++
    }
    refreshScore();
})
playerTwo.addEventListener("click",()=>{
    if(scoreTwo < parseInt(limit.value)){
        scoreTwo++
    }
    refreshScore();
})


reset.addEventListener("click",()=>{
    limit.value = ""
    scoreOne = 0;
    scoreTwo = 0;
    refreshScore();
})