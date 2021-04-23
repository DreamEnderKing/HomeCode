function SetSolid(key, style, type)
{
   let can = document.getElementById(key).getContext("2d");
   if(type) can.fillStyle = style;
   else can.strokeStyle = style;
}
function SetAlpha(key, alpha)
{
   let can = document.getElementById(key).getContext("2d");
   can.globalAlpha = alpha;
}
function SetShadow(key, color, alpha, blur, offsetX, offsetY)
{
   let can = document.getElementById(key).getContext("2d");
   can.shadowColor = color;
   can.shadowBlur = blur;
   can.shadowOffsetX = offsetX;
   can.shadowOffsetY = offsetY;
   can.globalAlpha = alpha;
}
function SetLineCap(key, cap)
{
   let can = document.getElementById(key).getContext("2d");
   can.lineCap = cap;
}
function SetLineJoin(key, join)
{
   let can = document.getElementById(key).getContext("2d");
   can.lineJoin = join;
}
function SetLineWidth(key, width)
{
   let can = document.getElementById(key).getContext("2d");
   can.lineWidth = width;
}
function SetLineMiter(key, width)
{
   let can = document.getElementById(key).getContext("2d");
   can.miterLimit = width;
}
function SetLinearGradient() {
   let can = document.getElementById(arguments[0]).getContext("2d");
   let gra = can.createLinearGradient(arguments[1], arguments[2], arguments[3], arguments[4]);
   let arg = arguments[5];
   for (let i = 0; i < arg.length; i = i + 2) {
      gra.addColorStop(arg[i], arg[i + 1]);
   }
   if(arguments[6]) can.fillStyle = gra;
   else can.strokeStyle = gra;
}
function SetRadialGradient() {
   let can = document.getElementById(arguments[0]).getContext("2d")
   let gra = can.createRadialGradient(arguments[1], arguments[2], arguments[5], arguments[3], arguments[4], arguments[6]);
   let arg = arguments[7];
   for (let i = 0; i < arg.length; i = i + 2) {
      gra.addColorStop(arg[i], arg[i + 1]);
   }
   if(arguments[8]) can.fillStyle = gra;
   else can.strokeStyle = gra;
}



function BeginPath(key)
{
   let can = document.getElementById(key).getContext("2d");
   can.beginPath();
}
function ClosePath(key)
{
   let can = document.getElementById(key).getContext("2d");
   can.closePath();
}
function FillPath(key)
{
   let can = document.getElementById(key).getContext("2d");
   can.fill();
}
function StrokePath(key)
{
   let can = document.getElementById(key).getContext("2d");
   can.stroke();
}
function MoveTo(key, x, y)
{
   let can = document.getElementById(key).getContext("2d");
   can.moveTo(x, y);
}



function CreateRect(key, left, top, width, height)
{
   let can = document.getElementById(key).getContext("2d");
   can.rect(left, top, width, height);
}
function CreateArc(key, left, top, radius, sAngle, eAngle, counterClockwise = false)
{
   let can = document.getElementById(key).getContext("2d");
   can.arc(left, top, radius, sAngle, eAngle, counterClockwise);
}
function CreateQuadraticCurveTo(key, x1, y1, x_end, y_end)
{
   let can = document.getElementById(key).getContext("2d");
   can.quadraticCurveTo(x1, y1, x_end, y_end);
}
function CreateBezierCurveTo(key, x1, y1, x2, y2, x_end, y_end) 
{
   let can = document.getElementById(key).getContext("2d");
   can.bezierCurveTo(x1, y1, x2, y2, x_end, y_end);
}
function CreateLine(key, x_end, y_end)
{
   let can = document.getElementById(key).getContext("2d");
   can.lineTo(x_end, y_end);
}




function SetFont(key, font)
{
   let can = document.getElementById(key).getContext("2d");
   can.font = font;
}
function SetTextAlign(key, textAlign)
{
   let can = document.getElementById(key).getContext("2d");
   can.textAlign = textAlign;
}
function SetTextBaseline(key, textBaseline)
{
   let can = document.getElementById(key).getContext("2d");
   can.textBaseline = textBaseline;
}
function FillText(key, text, x, y)
{
   let can = document.getElementById(key).getContext("2d");
   can.fillText(text, x, y);
}
function StrokeText(key, text, x, y)
{
   let can = document.getElementById(key).getContext("2d");
   can.strokeText(text, x, y);
}
function DrawImage(key, url, x, y)
{
   let can = document.getElementById(key).getContext("2d");
   can.drawImage(url, x, y);
}
function DrawImage(key, url, x, y, width, height)
{
   let can = document.getElementById(key).getContext("2d");
   can.drawImage(url, x, y, width, height);
}
function DrawImage(key, url, x, y, width, height, sx,sy, swidth, sheight)
{
   let can = document.getElementById(key).getContext("2d");
   can.drawImage(url, sx, sy, swidth, sheight, x, y, width, height);
}