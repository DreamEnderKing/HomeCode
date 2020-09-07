window.drawPoint = (x, y, r) => {
    can = canvasLoad();
    //window.alert("Me");
    can.fillRect(x - r / 2, y - r / 2, r, r);
    return 0;
}

window.isScaled = false;
function canvasLoad(){
    can = document.getElementById("canvas").getContext("2d");
    if(!isScaled) {
        can.scale(0.4, 0.4);
        isScaled = true;
    }
    return can;
}
