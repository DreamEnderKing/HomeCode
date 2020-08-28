window.drawPoint = (x, y) => {
    var x = document.getElementById("canvas");
    var can = x.getContext("2d");
    can.scale(2.5, 2.5);
    can.fillRect(x, y, x + 2, y + 2);
    return 0;
}
