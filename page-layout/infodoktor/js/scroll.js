var frame = 0;
var scrolLeft = document.getElementById("scrolLeft");
var scrolRight = document.getElementById("scrolRight");
var hidden = document.getElementsByClassName("hidden")[0].children;

var rscrol1 = document.getElementById("radioSlaid1");
var rscrol2 = document.getElementById("radioSlaid2");
var rscrol3 = document.getElementById("radioSlaid3");
var rscrol4 = document.getElementById("radioSlaid4");

scrolRight.onclick = function() {
    var styleElem;
    var left;
    var flag = true;

    if (frame == hidden.length - 1) {
        frame =  0;
        for (let i = 0; i < hidden.length; i++) {
            hidden[i].style.transform = "translateX(" + (-20 * frame) + "%)";   
        }  
        flag = false;

    }

    if (flag) {
        for (let i = 0; i < hidden.length; i++) {
            hidden[i].style.transform = "translateX(" + (-20 * (frame + 1)) + "%)";   
        }
        ++frame;
    }
    proverkaScroll(frame);
}

scrolLeft.onclick = function() {
    var styleElem;
    var left;
    var flag = true;

    if (!frame) {
        frame = hidden.length - 1;
        for (let i = 0; i < hidden.length; i++) {
            hidden[i].style.transform = "translateX(" + (-20 * frame) + "%)";   
        }  
        flag = false;
    }

    if (flag) {
        for (let i = 0; i < hidden.length; i++) {
            hidden[i].style.transform = "translateX(" + (-20 * (frame - 1)) + "%)";   
        }
        --frame;
    }
    proverkaScroll(frame);
}

rscrol1.onchange = function() {changeScroll(0)}
rscrol2.onchange = function() {changeScroll(1);}
rscrol3.onchange = function() {changeScroll(2);}
rscrol4.onchange = function() {changeScroll(3);}

function changeScroll(number) {
    frame = number;
    for (let i = 0; i < hidden.length; i++) {
        hidden[i].style.transform = "translateX(" + (-20 * frame) + "%)";   

    }
}

function proverkaScroll(number) {
    if (frame == 0) rscrol1.checked = true;
    else if (frame == 1) rscrol2.checked = true;
    else if (frame == 2) rscrol3.checked = true;
    else if (frame == 3) rscrol4.checked = true;  
}