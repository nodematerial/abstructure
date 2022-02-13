(function (target) {
    if (!target || !target.prototype)
        return;
    target.prototype.arrow = function (startX, startY, endX, endY, controlPoints) {
        var dx = endX - startX;
        var dy = endY - startY;
        var len = Math.sqrt(dx * dx + dy * dy);
        var sin = dy / len;
        var cos = dx / len;
        var a = [];
        a.push(0, 0);
        for (var i = 0; i < controlPoints.length; i += 2) {
            var x = controlPoints[i];
            var y = controlPoints[i + 1];
            a.push(x < 0 ? len + x : x, y);
        }
        a.push(len, 0);
        for (var i = controlPoints.length; i > 0; i -= 2) {
            var x = controlPoints[i - 2];
            var y = controlPoints[i - 1];
            a.push(x < 0 ? len + x : x, -y);
        }
        a.push(0, 0);
        for (var i = 0; i < a.length; i += 2) {
            var x = a[i] * cos - a[i + 1] * sin + startX;
            var y = a[i] * sin + a[i + 1] * cos + startY;
            if (i === 0) this.moveTo(x, y);
            else this.lineTo(x, y);
        }
    };
})(CanvasRenderingContext2D);

function arrow_table(list_){
    for (const idx of list_){
        switch (idx) {
            case 0:
                ctx.arrow(x + near, y, x + far, y, [0, 3, -10, 3, -10, 8]);
                break
            case 1:
                ctx.arrow(x, y - near, x, y - far, [0, 3, -10, 3, -10, 8]);
                break
            case 2:
                ctx.arrow(x - near, y, x - far, y, [0, 3, -10, 3, -10, 8]);
                break
            case 3:
                ctx.arrow(x, y + near, x, y + far, [0, 3, -10, 3, -10, 8]);
                break
            case 4:
                ctx.arrow(x + near * 0.65, y - near * 0.65, x + far * 0.65, y - far * 0.65, [0, 3, -10, 3, -10, 8]);
                break
            case 5:
                ctx.arrow(x - near * 0.65, y - near * 0.65, x - far * 0.65, y - far * 0.65, [0, 3, -10, 3, -10, 8]);
                break
            case 6:
                ctx.arrow(x - near * 0.65, y + near * 0.65, x - far * 0.65, y + far * 0.65, [0, 3, -10, 3, -10, 8]);
                break
            case 7:
                ctx.arrow(x + near * 0.65, y + near * 0.65, x + far * 0.65, y + far * 0.65, [0, 3, -10, 3, -10, 8]);
                break
            case 15:
                ctx.arrow(x + near * 0.8, y + near * 0.45, x + far * 0.8, y + far * 0.45, [0, 3, -10, 3, -10, 8]);
                break
            case 12:
                ctx.arrow(x - near * 0.8, y + near * 0.45, x - far * 0.8, y + far * 0.45, [0, 3, -10, 3, -10, 8]);
                break
            case 8:
                ctx.arrow(x + near * 0.8, y - near * 0.45, x + far * 0.8, y - far * 0.45, [0, 3, -10, 3, -10, 8]);
                break
            case 11:
                ctx.arrow(x - near * 0.8, y - near * 0.45, x - far * 0.8, y - far * 0.45, [0, 3, -10, 3, -10, 8]);
                break
            case 14:
                ctx.arrow(x + near * 0.45, y + near * 0.8, x + far * 0.45, y + far * 0.8, [0, 3, -10, 3, -10, 8]);
                break
            case 13:
                ctx.arrow(x - near * 0.45, y + near * 0.8, x - far * 0.45, y + far * 0.8, [0, 3, -10, 3, -10, 8]);
                break
            case 9:
                ctx.arrow(x + near * 0.45, y - near * 0.8, x + far * 0.45, y - far * 0.8, [0, 3, -10, 3, -10, 8]);
                break
            case 10:
                ctx.arrow(x - near * 0.45, y - near * 0.8, x - far * 0.45, y - far * 0.8, [0, 3, -10, 3, -10, 8]);
                break
            default:
                console.log(`Sorry, we are out of ${idx}.`);
        }
    }
    return
}

function drawArrow0() {
    var directslist = [[7,0,4],[4,1,5],[5,2,6],[6,3,7]]
    ctx.beginPath();
    for (i = 0; i<4; i++){
        if(Pressed[i]){
            arrow_table(directslist[i]);
        }
    }
    if(!(Pressed[0] || Pressed[1] || Pressed[2] || Pressed[3])){
        arrow_table([0,1,2,3,4,5,6,7]);
    }
    ctx.strokeStyle = `rgba(${arrow_R}, ${arrow_G}, ${arrow_B}, ${arrow_transparency})`;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();
}

function drawArrow1() {
    var directslist = [[8,0,15],[9,1,10],[11,2,12],[13,3,14]]
    ctx.beginPath();
    for (i = 0; i<4; i++){
        if(Pressed[i]){
            arrow_table(directslist[i]);
        }
    }
        if(!(Pressed[0] || Pressed[1] || Pressed[2] || Pressed[3])){
            arrow_table([0,1,2,3,8,9,10,11,12,13,14,15]);
    }
    ctx.strokeStyle = `rgba(${arrow_R}, ${arrow_G}, ${arrow_B}, ${arrow_transparency})`;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();
}