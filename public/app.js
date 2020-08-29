let userScore = 0;
let compScore = 0;

const userScoreElem = document.getElementById("user-score");
const compScoreElem = document.getElementById("comp-score");
const scoreBoardElem = document.querySelector(".score-board");
const resultElem = document.querySelector(".result p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");

function compChoice(){
    const choices = ['r','p','s'];
    return choices[Math.floor(Math.random()*3)];
}

function main(){
    rock.addEventListener("click",function(){
        Game("r");
    });

    paper.addEventListener("click",function(){
        Game("p");
    });

    scissor.addEventListener("click",function(){
        Game("s");
    });
}

main();


function Game(user){
    const comp = compChoice();
    if(user == 'r'){
        if(comp == 's'){
            console.log("You Won..!!");
            userScore++;
            userScoreElem.innerText = userScore;
            resultElem.innerHTML = "Rock Beats Scissor. You Win !";
            document.getElementById(user).classList.add('green');
            setTimeout(function(){ document.getElementById(user).classList.remove('green')},1300);
        }
        else if(comp == 'p'){
            console.log("You Lost..!!");
            compScore++;
            compScoreElem.innerText = compScore;
            resultElem.innerHTML = "Paper Covers Rock. You Lost !";
            document.getElementById(user).classList.add('red');
            setTimeout(function(){ document.getElementById(user).classList.remove('red')},1300);
        }
        else if(comp == 'r'){
            console.log("TIe..!!");
            resultElem.innerHTML = "It's a TIE !";
            document.getElementById(user).classList.add('gray');
            setTimeout(function(){ document.getElementById(user).classList.remove('gray')},1300);
        }
    }

    else if(user == 'p'){
        if(comp == 'r'){
            console.log("You Won..!!");
            userScore++;
            userScoreElem.innerText = userScore;
            resultElem.innerHTML = "Paper Covers Rock. You Win !";
            document.getElementById(user).classList.add('green');
            setTimeout(function(){ document.getElementById(user).classList.remove('green')},1300);
        }
        else if(comp == 's'){
            console.log("You Lost..!!");
            compScore++;
            compScoreElem.innerText = compScore;
            resultElem.innerHTML = "Scissor Cuts Paper. You Lost !";
            document.getElementById(user).classList.add('red');
            setTimeout(function(){ document.getElementById(user).classList.remove('red')},1300);
        }
        else if(comp == 'p'){
            console.log("TIe..!!");
            resultElem.innerHTML = "It's a TIE !";
            document.getElementById(user).classList.add('gray');
            setTimeout(function(){ document.getElementById(user).classList.remove('gray')},1300);
        }
    }

    else if(user == 's'){
        if(comp == 'p'){
            console.log("You Won..!!");
            userScore++;
            userScoreElem.innerText = userScore;
            resultElem.innerHTML = "Scissors Cuts Paper. You Win !";
            document.getElementById(user).classList.add('green');
            setTimeout(function(){ document.getElementById(user).classList.remove('green')},1300);
        }
        else if(comp == 'r'){
            console.log("You Lost..!!");
            compScore++;
            compScoreElem.innerText = compScore;
            resultElem.innerHTML = "Rock Beats Scissor. You Lost !";
            document.getElementById(user).classList.add('red');
            setTimeout(function(){ document.getElementById(user).classList.remove('red')},1300);
        }
        else if(comp == 's'){
            console.log("TIe..!!");
            resultElem.innerHTML = "It's a TIE !";
            document.getElementById(user).classList.add('gray');
            setTimeout(function(){ document.getElementById(user).classList.remove('gray')},1300);
        }
    }
}
