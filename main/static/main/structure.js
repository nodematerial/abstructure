function draw_points(x, y){
    var pointlist = [[0, 32], [0, 96], [56, 0], [56, 128], [112, 32], [112, 96]]
    
    pointlist.forEach(function(point){
        var flag = false
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
            }
        });
        if (flag == false){
            ctx.fillStyle = 'red';
        }
        else{
            ctx.fillStyle = 'blue';
        }
        ctx.fill();
        ctx.closePath();
    });
}
