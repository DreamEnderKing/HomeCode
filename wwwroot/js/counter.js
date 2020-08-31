window.drawPoint = (x, y, r) => {
    //window.alert("Me");
    can.fillRect(x - r / 2, y - r / 2, x + r / 2, y + r / 2);
    return 0;
}

function canvasLoad(){
    can = document.getElementById("canvas").getContext("2d");

    can.scale(0.4, 0.4);
}