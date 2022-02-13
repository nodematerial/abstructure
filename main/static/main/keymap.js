function keyUpHandler(e) {
    if (mode == 0){
        upmode0(e)
    }
    else if (mode == 1){
        upmode1(e)
    }
}

function keyDownHandler(e) {
    if (mode == 0){
        downmode0(e)
    }
    else if (mode == 1){
        downmode1(e)
    }
}

