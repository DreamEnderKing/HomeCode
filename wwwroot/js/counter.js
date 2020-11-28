window.drawPoint = (x, y, r) => {
    can = canvasLoad();
    //window.alert("Me");
    can.fillRect(x, y, r, r);
    can.fill();
    return 0;
}

window.isScaled = false;
function canvasLoad(){
    can = document.getElementById("canvas").getContext("2d");
    if(!isScaled) {
        can.fillStyle = "#00FF00";
        can.arc(0, 0, 200, 0, 2 * Math.PI);
        can.fill();
        can.strokeStyle = "#000000";
        can.strokeRect(0, 0, 200, 200);
        //can.scale(0.4, 0.4);
        
        isScaled = true;
    }
    else {
        can.fillStyle = "FF0000";
    }
    return can;
}
