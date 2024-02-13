var player=1;

function changePlayer(){
    if (player == 1)    {player = 2;}
    else    {player = 1;}
}

function btn(btn_id){
    var btn = document.getElementById(btn_id);
    if (player==1)  {btn.textContent = "x";
    }

    else    {btn.textContent = "o";}
    changePlayer();
}

function btn1(){btn("btn1"); main();}
function btn2(){btn("btn2"); main();}
function btn3(){btn("btn3"); main();}
function btn4(){btn("btn4"); main();}
function btn5(){btn("btn5"); main();}
function btn6(){btn("btn6"); main();}
function btn7(){btn("btn7"); main();}
function btn8(){btn("btn8"); main();}
function btn9(){btn("btn9"); main();}

// check if all btns are taken
function win(sqr1, sqr2, sqr3){
    if (sqr1.textContent != "" && sqr2.textContent != "" && sqr3.textContent != ""){
        if (sqr1.textContent == sqr2.textContent && sqr1.textContent == sqr2.textContent && sqr1.textContent == sqr3.textContent){
            changePlayer();
            var screen = document.getElementById("screen");
            screen.className = "visible";
            screen.value = "Game Over! Player " + player + " won!";
            reset();
        }
    }
}

function n(sqr1,sqr2,sqr3,sqr4,sqr5,sqr6,sqr7,sqr8,sqr9){
    if (sqr1.textContent != "" && sqr2.textContent != "" && sqr3.textContent != "" && sqr4.textContent != "" && sqr5.textContent != "" && sqr6.textContent != "" && sqr7.textContent != "" && sqr8.textContent != "" && sqr9.textContent != ""){
            var screen = document.getElementById("screen");
            screen.className = "visible";
            screen.value = "Game Over! Tie Game ";
            reset();
    }


}

function reset() {
    document.getElementById("btn1").textContent = "";
    document.getElementById("btn2").textContent = "";
    document.getElementById("btn3").textContent = "";
    document.getElementById("btn4").textContent = "";
    document.getElementById("btn5").textContent = "";
    document.getElementById("btn6").textContent = "";
    document.getElementById("btn7").textContent = "";
    document.getElementById("btn8").textContent = "";
    document.getElementById("btn9").textContent = "";

    player = 1;

    var screen = document.getElementById("screen");
    screen.className = "invisible";
}

function main(){
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");
    var btn5 = document.getElementById("btn5");
    var btn6 = document.getElementById("btn6");
    var btn7 = document.getElementById("btn7");
    var btn8 = document.getElementById("btn8");
    var btn9 = document.getElementById("btn9");

    // horizontally
    win(btn1, btn2, btn3);
    win(btn4, btn5, btn6);
    win(btn7, btn8, btn9);

    // vertically 
    win(btn1, btn4, btn7);
    win(btn2, btn5, btn8);
    win(btn3, btn6, btn9);

    // diagonally
    win(btn1, btn5, btn9);
    win(btn3, btn5, btn7);

    n(btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9);
}
// Make the buttons unchangeable