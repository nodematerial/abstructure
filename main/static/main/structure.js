function draw_points(x, y){
    var pointlist = [[0, 30], [0, 90], [53, 121], [106, 90], [106, 30], [54, 0]]
    var i = 0;
    var isConnected = false;
    pointlist.forEach(function(point){
        var flag = false
        var j = 0;
        ctx.beginPath();
        Object.values(nodes).forEach(function(node){
            var nodex = node[0]
            var nodey = node[1]
            var pointx = x + point[0]
            var pointy = y + point[1]
            ctx.arc(pointx, pointy, 3, 0, 2 * Math.PI, false);
            dist = Math.pow(nodex - pointx, 2) + Math.pow(nodey - pointy, 2);
            if (dist < 64){
                flag = true;
                isConnected = true;
                point_a = i;
                point_b = j;
            }
            j ++;
        });
        if (flag == false){
            ctx.fillStyle = 'red';
        }
        else{
            ctx.fillStyle = 'blue';
        }
        ctx.fill();
        ctx.closePath();
        i++;
    });
    if (isConnected == false){
        point_a = -1;
        point_b = -1;
    }
}
