function keyUpHandler(e) {
    if (mode == 0) {
        upmode0(e)
    }
    else if (mode == 1) {
        upmode1(e)
    }
}

function keyDownHandler(e) {
    if (mode == 0) {
        downmode0(e)
    }
    else if (mode == 1) {
        downmode1(e)
    }
}

function mouseDownHandler(e) {
    isDragging = true;
    start.x = e.clientX;
    start.y = e.clientY;
}

function mouseMoveHandler(e) {
    if (isDragging) {
        diff.x = (e.clientX - start.x) + end.x;
        diff.y = (e.clientY - start.y) + end.y;
    }
}

function mouseUpHandler(e) {
    isDragging = false;
    end.x = diff.x;
    end.y = diff.y;
}
