function DebugWrite(str) {
   console.log(str);
}
function LoadCanvas(key) {
   try {
      console.log("Canvas finding......");
      $(document).ready(function() {
         window.can = document.getElementById(key).getContext("2d");        
      });
    } catch (error) {
      console.log("No canvas is found.");
    }
}
function SetSolid(style, type) {
   if(type) can.fillStyle = style;
   else can.strokeStyle = style;
}
function SetAlpha(alpha) {
   can.globalAlpha = alpha;
}
function SetShadow(color, alpha, blur, offsetX, offsetY) {
   can.shadowColor = color;
   can.shadowBlur = blur;
   can.shadowOffsetX = offsetX;
   can.shadowOffsetY = offsetY;
   can.globalAlpha = alpha;
}
function SetLineCap(cap) {
   can.lineCap = cap;
}
function SetLineJoin(join) {
   can.lineJoin = join;
}
function SetLineWidth(width) {
   can.lineWidth = width;
}
function SetLineMiter(width) {
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



function BeginPath(key) {
   can.beginPath();
}
function ClosePath(key) {
   can.closePath();
}
function FillPath(key) {
   can.fill();
}
function StrokePath(key) {
   can.stroke();
}
function MoveTo(x, y) {
   can.moveTo(x, y);
}



function CreateRect(left, top, width, height) {
   can.rect(left, top, width, height);
}
function CreateArc(left, top, radius, sAngle, eAngle, counterClockwise = false) {
   can.arc(left, top, radius, sAngle, eAngle, counterClockwise);
}
function CreateQuadraticCurveTo(x1, y1, x_end, y_end) {
   can.quadraticCurveTo(x1, y1, x_end, y_end);
}
function CreateBezierCurveTo(x1, y1, x2, y2, x_end, y_end)  {
   can.bezierCurveTo(x1, y1, x2, y2, x_end, y_end);
}
function CreateLine(x_end, y_end) {
   can.lineTo(x_end, y_end);
}




function SetFont(font) {
   can.font = font;
}
function SetTextAlign(textAlign) {
   can.textAlign = textAlign;
}
function SetTextBaseline(textBaseline) {
   can.textBaseline = textBaseline;
}
function FillText(text, x, y) {
   can.fillText(text, x, y);
}
function StrokeText(text, x, y) {
   can.strokeText(text, x, y);
}
function DrawImage(url, x, y) {
   can.drawImage(url, x, y);
}
function DrawImage(url, x, y, width, height) {
   can.drawImage(url, x, y, width, height);
}
function DrawImage(url, x, y, width, height, sx,sy, swidth, sheight) {
   can.drawImage(url, sx, sy, swidth, sheight, x, y, width, height);
}