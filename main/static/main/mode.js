function downmove8(e) {
    var Arrows = ["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown"]
    for (i = 0; i < 4; i++) {
        if (e.code == Arrows[i]) {
            Pressed[i] = true;
        }
    }
    if (Pressed[0] == true && Pressed[1] == true) {
        Pressed = [false, false, false, false];
        return 4
    }
    if (Pressed[1] == true && Pressed[2] == true) {
        Pressed = [false, false, false, false];
        return 5
    }
    if (Pressed[2] == true && Pressed[3] == true) {
        Pressed = [false, false, false, false];
        return 6
    }
    if (Pressed[3] == true && Pressed[0] == true) {
        Pressed = [false, false, false, false];
        return 7
    }
    return null
}

function downmove12(e) {
    var Arrows = ["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown"]
    var numbers = [[14, 9], [8, 11], [10, 13], [12, 15]]
    for (i = 0; i < 4; i++) {
        if (e.code == Arrows[i]) {
            var a = (i + 3) % 4
            var b = (i + 1) % 4
            console.log(i, a, b)
            if (Pressed[a]) {
                Pressed = [false, false, false, false];
                return numbers[i][0]
            }
            if (Pressed[b]) {
                Pressed = [false, false, false, false];
                return numbers[i][1]
            }
            Pressed[i] = true;
        }
    }
    return null
}

function upmove(e) {
    var Arrows = ["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown"]
    for (i = 0; i < 4; i++) {
        if (e.code == Arrows[i]) {
            if (Pressed[i] == true) {
                Pressed[i] = false;
                return i
            }
        }
    }
    return null
}

function downmode0(e) {
    var li = [[1, 1], [-1, 1], [-1, -1], [1, -1], [0.86, 0.5], [0.5, 0.86], [-0.5, 0.86],
    [-0.86, 0.5], [-0.86, -0.5], [-0.5, -0.86], [0.5, -0.86], [0.86, -0.5]]
    direction
    if (arrow_mode == 0) {
        direction = downmove8(e)
    }
    else if (arrow_mode == 1) {
        direction = downmove12(e)
    }
    if (direction != null) {
        koushin0();
        x += parseInt(move * li[direction - 4][0]);
        y -= parseInt(move * li[direction - 4][1]);
        toggle_mode();
        console.log(direction)
    }

    if (e.key == '/') {
        arrow_mode = ((arrow_mode + 1) % 2)
    }

    else if (e.key == ':') {
        console.log(': is pressed');
        chain_mode = ((chain_mode + 1) % 2)
    }

    else if (arr.includes(e.key)) {
        char += e.key;
    }
    else if (e.code == 'Backspace') {
        char = char.slice(0, -1);
    }
}

function upmode0(e) {
    direction = upmove(e)
    if (direction == null) { return }

    koushin0();
    if (direction == 0 || direction == 2) {
        x -= move * (direction - 1);
    }
    else if (direction == 1 || direction == 3) {
        y += move * (direction - 2);
    }
    toggle_mode();
}

function downmode1(e) {
    var li = [[1, 1], [-1, 1], [-1, -1], [1, -1], [0.86, 0.5], [0.5, 0.86], [-0.5, 0.86],
    [-0.86, 0.5], [-0.86, -0.5], [-0.5, -0.86], [0.5, -0.86], [0.86, -0.5]]

    if (e.key == '/') {
        arrow_mode = ((arrow_mode + 1) % 2)
    }

    if (e.key == ':') {
        console.log(': is pressed');
        chain_mode = ((chain_mode + 1) % 2)
    }

    else if (chain_mode) {
        if (numb.includes(e.key)) {
            chain_number += e.key;
        }

        else if (e.code == 'Backspace') {
            chain_number = chain_number.slice(0, -1);
        }

        else if (e.code == 'Enter') {
            if (chain_from == '') {
                chain_from = chain_number
                chain_number = ''
            }
            else if (chain_number != '') {
                chain_to = chain_number
                chain_number = ''
                console.log([parseInt(chain_from)])
                console.log([parseInt(chain_to)])
                chain_list.push([parseInt(chain_from), parseInt(chain_to)])
                chain_from = ''
                chain_to = ''
            }
        }
    }

    else if (!chain_mode) {

        if (arrow_mode == 0) {
            direction = downmove8(e)
        }
        else if (arrow_mode == 1) {
            direction = downmove12(e)
            console.log(direction)
        }
        if (direction != null) {
            koushin1();
            x += move * li[direction - 4][0];
            y -= move * li[direction - 4][1];
            toggle_mode();
        }

        if (arr.includes(e.key)) {
            if (!charwrite_flag) {
                char = nodes[pre_idx][2]
                charwrite_flag = 1
            }
            char += e.key;
            nodes[pre_idx][2] = char;
        }
        else if (e.code == 'Backspace') {
            if (!charwrite_flag) {
                char = nodes[pre_idx][2]
                charwrite_flag = 1
            }
            char = char.slice(0, -1);
            nodes[pre_idx][2] = char;
        }
    }
}

function upmode1(e) {
    direction = upmove(e)
    if (direction == null) { return }

    koushin1();
    if (direction == 0 || direction == 2) {
        x -= move * (direction - 1);
    }
    else if (direction == 1 || direction == 3) {
        y += move * (direction - 2);
    }
    toggle_mode();
}

function toggle_mode() {
    //2つのモードを行き来する、切り替わる瞬間に特別な処理を入れる
    mode = 0
    for (let key in nodes) {
        if (nodes[key][0] === x && nodes[key][1] === y) {
            mode = 1;
            pre_idx = Number(key);
        }
    }
    if (mode == 0) { // mode 0 追加モード
        if (pre_mode == 1) {
            seq_list.push(pre_idx);
            direction_list.push(direction);
        }
    }
    else {// mode 1 移動モード
        if (pre_mode == 0) {
            seq_cluster.push(seq_list);
            seq_list = [];
            direction_cluster.push(direction_list.slice(0, -1));
            direction_list = [];
        }
    }
    pre_mode = mode;
}
