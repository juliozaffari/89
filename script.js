canvas = document.getElementById("meuCanvas");

ctx= canvas.getContext('2d');

var ultimaPosX , ultimaPosY;
color = "red";
largura = 2

var width = screen.width;
canvasWidth = width - 70;
canvasHeight = width - 300;

if (width < 998){
    document.getElementById("meuCanvas").width = canvasWidth
    document.getElementById("meuCanvas").heigth = canvasHeight
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
    color = document.getElementById("cor").value
    largura = document.getElementById("largura").value

    ultimaPosX = e.touches[0].clientX - canvas.offsetLeft;
    ultimaPosY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    Atualmouse_x = e.touches[0].clientX - canvas.offsetLeft;
    Atualmouse_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = largura;

    ctx.moveTo(ultimaPosX, ultimaPosY);
    ctx.lineTo(Atualmouse_x, Atualmouse_y);
    ctx.stroke();

    ultimaPosX = Atualmouse_x;
    ultimaPosY = Atualmouse_y;
}

function limparCanvas(){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.heigth);
}
