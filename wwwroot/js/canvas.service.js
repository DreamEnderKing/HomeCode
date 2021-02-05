function SetFillStyle(key, style, alpha)
{
   var can = $(key).getContext("2d");
   can.fillStyle = style;
   can.globalAlpha = alpha;
}
function SetStrokeStyle(key, style,alpha)
{
   var can = $(key).getContext("2d");
   can.strokeStyle = style;
   can.globalAlpha = alpha;
}
function SetShadow(key, color, alpha, blur, offsetX, offsetY)
{
   var can = $(key).getContext("2d");
   can.shadowColor = color;
   can.shadowBlur = blur;
   can.shadowOffsetX = offsetX;
   can.shadowOffsetY = offsetY;
   can.globalAlpha = alpha;
}
function SetLineCap(key, cap)
{
   var can = $(key).getContext("2d");
   can.lineCap = cap;
}
function SetLineJoin(key, join)
{
   var can = $(key).getContext("2d");
   can.lineJoin = join;
}
function SetLineWidth(key, width)
{
   var can = $(key).getContext("2d");
   can.lineWidth = width;
}
function SetLineMiter(key, width)
{
   var can = $(key).getContext("2d");
   can.miterLimit = width;
}

function FillRect(key, left, top, width, height)
{
   var can = $(key).getContext("2d");
   can.fillRect(left, top, width, height);
}
