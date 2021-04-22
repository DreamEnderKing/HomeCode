function SetFillStyle(key, style, alpha)
{
   var can = document.getElementById(key).getContext("2d");
   can.fillStyle = style;
   can.globalAlpha = alpha;
}
function SetStrokeStyle(key, style,alpha)
{
   var can = document.getElementById(key).getContext("2d");
   can.strokeStyle = style;
   can.globalAlpha = alpha;
}
function SetShadow(key, color, alpha, blur, offsetX, offsetY)
{
   var can = document.getElementById(key).getContext("2d");
   can.shadowColor = color;
   can.shadowBlur = blur;
   can.shadowOffsetX = offsetX;
   can.shadowOffsetY = offsetY;
   can.globalAlpha = alpha;
}
function SetLineCap(key, cap)
{
   var can = document.getElementById(key).getContext("2d");
   can.lineCap = cap;
}
function SetLineJoin(key, join)
{
   var can = document.getElementById(key).getContext("2d");
   can.lineJoin = join;
}
function SetLineWidth(key, width)
{
   var can = document.getElementById(key).getContext("2d");
   can.lineWidth = width;
}
function SetLineMiter(key, width)
{
   var can = document.getElementById(key).getContext("2d");
   can.miterLimit = width;
}
function CreateLinearGradient() {
   var gra = document.getElementById(arguments[0]).getContext("2d").createLinearGradient(arguments[1], arguments[2], arguments[3], arguments[4]);
   var arg = arguments[5];
   for (let i = 0; i < arg.length; i = i + 2) {
      gra.addColorStop(arg[i], arg[i + 1]);
   }
   return gra;
}
function CreateRadialGradient() {
   var gra = document.getElementById(arguments[0]).getContext("2d").createRadialGradient(arguments[1], arguments[2], arguments[5], arguments[3], arguments[4], arguments[6]);
   var arg = arguments[7];
   for (let i = 0; i < arg.length; i = i + 2) {
      gra.addColorStop(arg[i], arg[i + 1]);
   }
   return gra;
}



function BeginPath(key)
{
   var can = document.getElementById(key).getContext("2d");
   can.beginPath();
}
function ClosePath(key)
{
   var can = document.getElementById(key).getContext("2d");
   can.closePath();
}
function FillPath(key)
{
   var can = document.getElementById(key).getContext("2d");
   can.fill();
}
function StrokePath(key)
{
   var can = document.getElementById(key).getContext("2d");
   can.stroke();
}
function MoveTo(key, x, y)
{
   var can = document.getElementById(key).getContext("2d");
   can.moveTo(x, y);
}



function CreateRect(key, left, top, width, height)
{
   var can = document.getElementById(key).getContext("2d");
   can.rect(left, top, width, height);
}
function CreateArc(key, left, top, radius, sAngle, eAngle, counterClockwise = false)
{
   var can = document.getElementById(key).getContext("2d");
   can.arc(left, top, radius, sAngle, eAngle, counterClockwise);
}
function CreateQuadraticCurveTo(key, x1, y1, x_end, y_end)
{
   var can = document.getElementById(key).getContext("2d");
   can.quadraticCurveTo(x1, y1, x_end, y_end);
}
function CreateBezierCurveTo(key, x1, y1, x2, y2, x_end, y_end) 
{
   var can = document.getElementById(key).getContext("2d");
   can.bezierCurveTo(x1, y1, x2, y2, x_end, y_end);
}
function CreateLine(key, x_end, y_end)
{
   var can = document.getElementById(key).getContext("2d");
   can.lineTo(x_end, y_end);
}




function SetFont(key, font)
{
   var can = document.getElementById(key).getContext("2d");
   can.font = font;
}
function SetTextAlign(key, textAlign)
{
   var can = document.getElementById(key).getContext("2d");
   can.textAlign = textAlign;
}
function SetTextBaseline(key, textBaseline)
{
   var can = document.getElementById(key).getContext("2d");
   can.textBaseline = textBaseline;
}
function FillText(key, text, x, y)
{
   var can = document.getElementById(key).getContext("2d");
   can.fillText(text, x, y);
}
function StrokeText(key, text, x, y)
{
   var can = document.getElementById(key).getContext("2d");
   can.strokeText(text, x, y);
}
function DrawImage(key, url, x, y)
{
   var can = document.getElementById(key).getContext("2d");
   can.drawImage(url, x, y);
}
function DrawImage(key, url, x, y, width, height)
{
   var can = document.getElementById(key).getContext("2d");
   can.drawImage(url, x, y, width, height);
}
function DrawImage(key, url, x, y, width, height, sx,sy, swidth, sheight)
{
   var can = document.getElementById(key).getContext("2d");
   can.drawImage(url, sx, sy, swidth, sheight, x, y, width, height);
}