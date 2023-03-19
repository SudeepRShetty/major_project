choices = ['paper','scissors','rock']; 

const open_rules = document.querySelector('.Check_rules');
const ch_rules = document.querySelector('.chrules');
const close_rules = document.querySelector('.Close-rules');
const game_rules = document.querySelector('.game-rules');
const picked_buttons = document.querySelectorAll('.pick');
const main = document.getElementById('main');
const selection = document.getElementById('selections'); 
const your_score = document.getElementById('your_score');
const comp_score = document.getElementById('cmp_score');
const play_again = document.getElementById('opt'); 
const btn_text = document.getElementById('btn-text'); 
const res_text = document.getElementById('res-text'); 
const userSL = document.getElementById('user_select'); 
const compSL = document.getElementById('computer_select');
const footer1 = document.getElementById('footer1');
const footer2 = document.getElementById('footer2');


let userChoice =undefined;
let userScore=0;
let compScore=0;
// functions  

function updateScoreOfUser(){
    userScore=userScore+1;
    your_score.innerText=userScore;
}

function updateScoreOfComp(){
    compScore=compScore+1;
    comp_score.innerText=compScore;
}

function pickRandom(){
    return choices[Math.floor(Math.random()*choices.length)];
} 

function checkWinner(){
    const compChoice = pickRandom();
    console.log(compChoice); 
    updateSelection(userSL,userChoice);
    updateSelection(compSL,compChoice);

    if(userChoice===compChoice){ 
        //draw
        btn_text.innerText='Replay'; 
        res_text.innerText='Tie up';
        footer1.style.visibility ='visible';
        footer2.style.visibility='hidden';

    }else if(
        userChoice==='scissors'&&compChoice==='paper'||
        userChoice==='paper'&&compChoice==='rock'||
        userChoice==='rock'&&compChoice==='scissors'
    ){
        // userWins
        updateScoreOfUser(); 
        res_text.innerText='You Won';
        btn_text.innerText='Play Again'; 
        footer1.style.visibility ='hidden';
        footer2.style.visibility='visible';
    }else{
        // computer wins
        updateScoreOfComp(); 
        res_text.innerText='You Lost';
        btn_text.innerText='Play Again';
        footer1.style.visibility ='visible';
        footer2.style.visibility='hidden';
    } 
    main.style.display='none';
    selection.style.display='flex';
} 

function updateSelection(selectionEL,choice){ 
    console.log('in update');
    const img = selectionEL.querySelector('img');
    selectionEL.classList.remove('btn-paper');
    selectionEL.classList.remove('btn-rock');
    selectionEL.classList.remove('btn-scissors'); 
    selectionEL.classList.add(`btn-${choice}`);
    img.src = `${choice}.png`;
}



// addEventListener
open_rules.addEventListener('click',function(){
    game_rules.classList.add('open-rules');
}); 

ch_rules.addEventListener('click',function(){
    game_rules.classList.add('open-rules');
}); 

close_rules.addEventListener('click',function(){
    game_rules.classList.remove('open-rules');
}); 

picked_buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        userChoice = button.getAttribute('data-choice');
        console.log(userChoice); 
        checkWinner();
    });
}); 

play_again.addEventListener('click',()=>{
    main.style.display='flex';
    selection.style.display='none';
    footer1.style.visibility ='visible';
    footer2.style.visibility='hidden';
});

