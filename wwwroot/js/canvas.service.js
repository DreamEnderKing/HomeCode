function SetFillStyle(key, style)
{
   var can = #(key).getContext("2d");
   can.fillStyle = style;
}
function SetStrokeStyle(key, style)
{
   var can = #(key).getContext("2d");
   can.strokeStyle = style;
}
function SetShadow(key, color, blur, offsetX, offsetY)
{
   var can = #(key).getContext("2d");
   can.shadowColor = color;
   can.shadowBlur = blur;
   can.shadowOffsetX = offsetX;
   can.shadowOffsetY = offsetY;
}
