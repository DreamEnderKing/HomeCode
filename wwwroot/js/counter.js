window.drawPoint = (x, y) => {
    var x = document.getElementById("canvas");
    var can = x.getContext("2d");
    can.Scale(0.4， 0.4);
    can.FillRect(x, y, x + 2, y + 2);
}