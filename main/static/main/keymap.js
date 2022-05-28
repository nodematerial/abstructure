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
    if (point_a != -1){
        var li = [[0, 1], [0.86, 0.5], [0.86, -0.5], [0, -1], [-0.86, -0.5], [-0.86, 0.5]]
        var point_now = point_a;
        if (mode == 0){
            koushin0()
            seq_cluster.push(seq_list);
            seq_list = [];
            direction_cluster.push(direction_list.slice(0, -1));
            direction_list = [];
            seq_list.push(point_b);
        }

        x = nodes[point_b][0]; y = nodes[point_b][1]; 
        for (i = 0; i < li.length; i++){
            if(i != 0){koushin0();}
            //else{seq_list.push(point_b)}
            x += parseInt(move * li[point_now][0]);
            y += parseInt(move * li[point_now][1]);
            toggle_mode()
            point_now++; point_now %= 6;
        }
        console.log(idx)
        //chain_list.push([point_b, idx])
    }
}

