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

function toggle_mode(){
    //2つのモードを行き来する、切り替わる瞬間に特別な処理を入れる
    mode = 0
    for (let key in nodes) {
        if (nodes[key][0] === x && nodes[key][1] === y){
                mode = 1;
                pre_idx = Number(key);
            }
    }
    if (mode == 0){ // mode 0 追加モード
        if (pre_mode == 1){
            seq_list.push(pre_idx);
    }
    }
    else{// mode 1 移動モード
        if (pre_mode == 0){
            seq_cluster.push(seq_list);
            seq_list = []
        }
    }
    pre_mode = mode;
    console.log('mode' +mode)
}