var blokScroll = document.getElementById("blokScroll");
var scroll = document.getElementsByClassName("scroll");
var FRAME = scroll.length;
var numberFrame = 1;
blokScroll.style.width = (100 * scroll.length) + "%";

var scrolLeft = document.getElementById("scrolLeft");
var scrolRight = document.getElementById("scrolRight");

scrolLeft.onclick = function() {

    if (numberFrame == FRAME) {
        for (let i = 0; i < scroll.length; i++) {
            scroll[i].style.transform = "translateX(0%)";
        }
        numberFrame = 1;
    }

    else if (numberFrame < FRAME) {
        for (let i = 0; i < scroll.length; i++) {
            scroll[i].style.transform = "translateX(" + (-100 * numberFrame) + "%)";
        }
        ++numberFrame;
    }
}

scrolRight.onclick = function() {

    if (numberFrame == 1) {
        for (let i = 0; i < scroll.length; i++) {
            scroll[i].style.transform = "translateX(" + (-100 * (FRAME - 1)) + "%)";
        }
        numberFrame = FRAME;
    }

    else if (numberFrame > 1) {
        for (let i = 0; i < scroll.length; i++) {
            scroll[i].style.transform = "translateX(" + (-100 * (numberFrame - 2)) + "%)";
        }
        --numberFrame;
    }
}

            