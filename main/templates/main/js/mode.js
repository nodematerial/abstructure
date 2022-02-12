function downmove8(e){
    var Arrows = ["ArrowRight","ArrowUp","ArrowLeft","ArrowDown"]
    for (i=0; i<4 ; i++){
        if(e.code  == Arrows[i]) {
                Pressed[i] = true;
            }
        }
    if(Pressed[0] == true && Pressed[1] == true){
        Pressed = [false, false, false, false];
        return 0
    }
    if(Pressed[1] == true && Pressed[2] == true){
        Pressed = [false, false, false, false];
        return 1
    }
    if(Pressed[2] == true && Pressed[3] == true){
        Pressed = [false, false, false, false];
        return 2
    }
    if(Pressed[3] == true && Pressed[0] == true){
        Pressed = [false, false, false, false];
        return 3
    }
    return null
}

function downmove12(e){
    var Arrows = ["ArrowRight","ArrowUp","ArrowLeft","ArrowDown"]
    var numbers = [[10,5],[4,7],[6,9],[8,11]]
    for (i=0; i<4 ; i++){
        if(e.code  == Arrows[i]) {
            var a = (i+3)%4
            var b = (i+1)%4
            console.log(i,a,b)
            if(Pressed[a]){
                Pressed = [false, false, false, false];
                return numbers[i][0]
            }
            if(Pressed[b]){
                Pressed = [false, false, false, false];
                return numbers[i][1]
            }
                Pressed[i] = true;
            }
        }
    return null
}

function upmove(e){
    var Arrows = ["ArrowRight","ArrowUp","ArrowLeft","ArrowDown"]
    for (i=0; i<4 ; i++){
        if(e.code  == Arrows[i]) {
            if(Pressed[i] == true){
                console.log(i);
                Pressed[i] = false;
                return i
            }
        }
    }
    return null
}

function downmode0(e){
    var li = [[1,1],[-1,1],[-1,-1],[1,-1],[0.86,0.5],[0.5,0.86],[-0.5,0.86],
            [-0.86,0.5],[-0.86,-0.5],[-0.5,-0.86],[0.5,-0.86],[0.86,-0.5]]
    var direction
    if (arrow_mode == 0){
        direction = downmove8(e)
    }
    else if (arrow_mode == 1){
        direction = downmove12(e)
    }
    if (direction != null){
        koushin0();
        x += move*li[direction][0];
        y -= move*li[direction][1];
        toggle_mode();
    }

    if(e.key == '/'){
        arrow_mode = ((arrow_mode+1)%2)
    }
    else if(arr.includes(e.key)){
        char += e.key;
    }
    else if(e.code == 'Backspace'){
        char = char.slice(0, -1);
    }
}

function upmode0(e){
    var direction = upmove(e)
    if (direction == null){return}

    koushin0();
    if (direction == 0 || direction == 2){
        x -= move*(direction-1);
    }
    else if (direction == 1 || direction == 3){
        y += move*(direction-2);
    }
    toggle_mode();
}

function downmode1(e){
    var li = [[1,1],[-1,1],[-1,-1],[1,-1],[0.86,0.5],[0.5,0.86],[-0.5,0.86],
            [-0.86,0.5],[-0.86,-0.5],[-0.5,-0.86],[0.5,-0.86],[0.86,-0.5]]
    if (arrow_mode == 0){
        direction = downmove8(e)
    }
    else if (arrow_mode == 1){
        direction = downmove12(e)
        console.log(direction)
    }
    if (direction != null){
        koushin1();
        x += move*li[direction][0];
        y -= move*li[direction][1];
        toggle_mode();
    }

    if(e.key == '/'){
        arrow_mode = ((arrow_mode+1)%2)
    }
    else if(arr.includes(e.key)){
        if (!charwrite_flag){
            char = nodes[pre_idx][2]
            charwrite_flag = 1
        }
        char += e.key;
        nodes[pre_idx][2] = char;
    }
    else if(e.code == 'Backspace'){
        if (!charwrite_flag){
            char = nodes[pre_idx][2]
            charwrite_flag = 1
        }
        char = char.slice(0, -1);
        nodes[pre_idx][2] = char;
    }
    console.log(charwrite_flag)
}

function upmode1(e){
    var direction = upmove(e)
    if (direction == null){return}

    koushin1();
    if (direction == 0 || direction == 2){
        x -= move*(direction-1);
    }
    else if (direction == 1 || direction == 3){
        y += move*(direction-2);
    }
    toggle_mode();
}