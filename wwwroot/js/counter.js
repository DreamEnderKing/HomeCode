window.drawPoint = (x, y, r) => {
    can = canvasLoad();
    //window.alert("Me");
    can.arc(x - r / 2, y - r / 2, r, 0, 2 * Math.PI);
    return 0;
}

window.isScaled = false;
function canvasLoad(){
    can = document.getElementById("canvas").getContext("2d");
    if(!isScaled) {
        can.arc(0, 0, 200, 0, 2 * Math.PI);
        can.rect(0, 0, 200, 200);
        //can.scale(0.4, 0.4);
        isScaled = true;
    }
    return can;
}
