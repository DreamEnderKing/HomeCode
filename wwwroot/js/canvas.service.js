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



function BeginPath(key)
{
   var can = $(key).getContext("2d");
   can.beginPath();
}
function ClosePath(key)
{
   var can = $(key).getContext("2d");
   can.closePath();
}
function FillPath(key)
{
   var can = $(key).getContext("2d");
   can.fill();
}
function StrokePath(key)
{
   var can = $(key).getContext("2d");
   can.stroke();
}
function MoveTo(key, x, y)
{
   var can = $(key).getContext("2d");
   can.moveTo(x, y);
}



function CreateRect(key, left, top, width, height)
{
   var can = $(key).getContext("2d");
   can.rect(left, top, width, height);
}
function CreateArc(key, left, top, radius, sAngle, eAngle, counterClockwise = false)
{
   var can = $(key).getContext("2d");
   can.arc(left, top, radius, sAngle, eAngle, counterClockwise);
}
function CreateQuadraticCurveTo(key, x1, y1, x_end, y_end)
{
   var can = $(key).getContext("2d");
   can.quadraticCurveTo(x1, y1, x_end, y_end);
}
function CreateBezierCurveTo(key, x1, y1, x2, y2, x_end, y_end) 
{
   var can = $(key).getContext("2d");
   can.bezierCurveTo(x1, y1, x2, y2, x_end, y_end);
}
function CreateLine(key, x_end, y_end)
{
   var can = $(key).getContext("2d");
   can.lineTo(x_end, y_end);
}




function SetFont(key, font)
{
   var can = $(key).getContext("2d");
   can.font = font;
}
function SetTextAlign(key, textAlign)
{
   var can = $(key).getContext("2d");
   can.textAlign = textAlign;
}
function SetTextBaseline(key, textBaseline)
{
   var can = $(key).getContext("2d");
   can.textBaseline = textBaseline;
}
function FillText(key, text, x, y)
{
   var can = $(key).getContext("2d");
   can.fillText(text, x, y);
}
function StrokeText(key, text, x, y)
{
   var can = $(key).getContext("2d");
   can.strokeText(text, x, y);
}
function DrawImage(key, url, x, y)
{
   var can = $(key).getContext("2d");
   can.drawImage(url, x, y);
}
function DrawImage(key, url, x, y, width, height)
{
   var can = $(key).getContext("2d");
   can.drawImage(url, x, y, width, height);
}
function DrawImage(key, url, x, y, width, height, sx,sy, swidth, sheight)
{
   var can = $(key).getContext("2d");
   can.drawImage(url, sx, sy, swidth, sheight, x, y, width, height);
}