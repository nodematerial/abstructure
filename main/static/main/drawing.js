function drawBall(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw_list_components(seq_list){
    for(j=0; j<seq_list.length-1; j++){
        now_idx = seq_list[j]
        nxt_idx = seq_list[j+1]
        var pre_x = nodes[now_idx][0],
            pre_y = nodes[now_idx][1],
            pre_char = nodes[now_idx][2],
            now_x = nodes[nxt_idx][0],
            now_y = nodes[nxt_idx][1],
            now_char = nodes[nxt_idx][2];
        drawChar(now_x, now_y, now_char, fontsize-3*now_char.length);

        if (pre_char != '' && now_char != ''){
            _x = pre_x*0.8+now_x*0.2;
            _y = pre_y*0.8+now_y*0.2;
            now_x = pre_x*0.2+now_x*0.8;
            now_y = pre_y*0.2+now_y*0.8;
            pre_x = _x;
            pre_y = _y;
        }
        else if (pre_char != ''){
            pre_x = pre_x*0.8+now_x*0.2;
            pre_y = pre_y*0.8+now_y*0.2;
        }
        else if (now_char != ''){
            now_x = pre_x*0.2+now_x*0.8;
            now_y = pre_y*0.2+now_y*0.8;
        }
        
        ctx.beginPath();
        ctx.moveTo(pre_x, pre_y);
        ctx.lineTo(now_x, now_y);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
    }
}

function draw_all_components() {
    //矢印を描画する
    draw_arrow()
    //描画モードの際、現在の座標の元素を描画する
    if (mode == 0){
        drawChar(x, y, char, fontsize-3*char.length)
    }
    if (0 in nodes){
        var cha = nodes[0][2]
        drawChar(nodes[0][0], nodes[0][1], cha, fontsize-3*cha.length);   
    }
    for (i=0; i< seq_cluster.length; i++){
        draw_list_components(seq_cluster[i]);
        draw_number(seq_cluster[i])
    }
    draw_list_components(seq_list);
    for (i=0; i< chain_list.length; i++){
        draw_list_components(chain_list[i]);
    }
    draw_number(seq_list)
    draw_chain_number()
}

function drawChar(x, y, char, fontsize) {
    var size = fontsize;
    ctx.font =`${fontsize}px serif`;
    var measure = ctx.measureText(char);
    var width = measure.width;
    var height = measure.actualBoundingBoxAscent + measure.actualBoundingBoxDescent;
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.fillText(char, x-width/2, y+height/2);
    ctx.fill();
    ctx.closePath();
}

function draw_arrow(){
    if (arrow_mode == 0){
        drawArrow0();
    }
    else if (arrow_mode == 1){
        drawArrow1();
    }
}

function draw_number(seq_list){
    if (chain_mode == 1){
        for(j=1; j<seq_list.length; j++){
            now_idx = seq_list[j]
            nxt_idx = seq_list[j+1]
            var now_x = nodes[now_idx][0],
                now_y = nodes[now_idx][1];
            drawChar(now_x-8, now_y-10, now_idx, 12);
        }
    }
}

function draw_chain_number(){
    if (chain_mode == 1){
        drawChar(nodes[0][0]-8, nodes[0][1]-10, 0, 12);
        drawChar(100, canvas.height-30 , 'Chain Mode', 30)
        drawChar(80, 30, chain_number, 20)
    }
}

function draw_structure(chara, x, y){
    ctx.drawImage(chara, x, y);
    draw_points(x, y);
}
