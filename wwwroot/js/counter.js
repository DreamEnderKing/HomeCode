window.drawPoint = (x, y, r) => {
    can = document.getElementById("canvas").getContext("2d");
    can.fillStyle = "#FF0000";
    //window.alert("Me");
    can.fillRect(x, y, r, r);
    can.fill();
    return 0;
}

window.isScaled = false;
function canvasLoad(){
    can = document.getElementById("canvas").getContext("2d");
    can.fillStyle = "#00FF00";
    can.arc(200, 200, 200, 0, 2 * Math.PI);
    can.fill();
    can.strokeStyle = "#000000";
    can.strokeRect(0, 0, 200, 200);
}
