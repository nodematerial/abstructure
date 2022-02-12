(function(target) {
  if (!target || !target.prototype)
    return;
  target.prototype.arrow = function(startX, startY, endX, endY, controlPoints) {
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

function drawArrow0() {
  ctx.beginPath();
  ctx.arrow(x+near, y, x+far, y, [0, 3, -10, 3, -10, 8]);
  ctx.arrow(x-near, y, x-far, y, [0, 3, -10, 3, -10, 8]);
  ctx.arrow(x, y+near, x, y+far, [0, 3, -10, 3, -10, 8]);
  ctx.arrow(x, y-near, x, y-far, [0, 3, -10, 3, -10, 8]);
  ctx.arrow(x+near*0.65, y+near*0.65, x+far*0.65, y+far*0.65, [0, 3, -10, 3, -10, 8]);
  ctx.arrow(x-near*0.65, y+near*0.65, x-far*0.65, y+far*0.65, [0, 3, -10, 3, -10, 8]);
  ctx.arrow(x+near*0.65, y-near*0.65, x+far*0.65, y-far*0.65, [0, 3, -10, 3, -10, 8]);
  ctx.arrow(x-near*0.65, y-near*0.65, x-far*0.65, y-far*0.65, [0, 3, -10, 3, -10, 8]);
  ctx.strokeStyle = `rgba(${arrow_R}, ${arrow_G}, ${arrow_B}, ${arrow_transparency})`;
  ctx.lineWidth = 1 ;
  ctx.stroke();
  ctx.closePath();
}

function drawArrow1() {
  ctx.beginPath();
  ctx.arrow(x+near, y, x+far, y, [0, 3, -10, 3, -10, 8]);
  ctx.arrow(x-near, y, x-far, y, [0, 3, -10, 3, -10, 8]);
  ctx.arrow(x, y+near, x, y+far, [0, 3, -10, 3, -10, 8]);
  ctx.arrow(x, y-near, x, y-far, [0, 3, -10, 3, -10, 8]);
  ctx.arrow(x+near*0.8, y+near*0.45, x+far*0.8, y+far*0.45, [0, 3, -10, 3, -10, 8]);
  ctx.arrow(x-near*0.8, y+near*0.45, x-far*0.8, y+far*0.45, [0, 3, -10, 3, -10, 8]);
  ctx.arrow(x+near*0.8, y-near*0.45, x+far*0.8, y-far*0.45, [0, 3, -10, 3, -10, 8]);
  ctx.arrow(x-near*0.8, y-near*0.45, x-far*0.8, y-far*0.45, [0, 3, -10, 3, -10, 8]);
  ctx.arrow(x+near*0.45, y+near*0.8, x+far*0.45, y+far*0.8, [0, 3, -10, 3, -10, 8]);
  ctx.arrow(x-near*0.45, y+near*0.8, x-far*0.45, y+far*0.8, [0, 3, -10, 3, -10, 8]);
  ctx.arrow(x+near*0.45, y-near*0.8, x+far*0.45, y-far*0.8, [0, 3, -10, 3, -10, 8]);
  ctx.arrow(x-near*0.45, y-near*0.8, x-far*0.45, y-far*0.8, [0, 3, -10, 3, -10, 8]);
  ctx.strokeStyle = `rgba(${arrow_R}, ${arrow_G}, ${arrow_B}, ${arrow_transparency})`;
  ctx.lineWidth = 1 ;
  ctx.stroke();
  ctx.closePath();
}