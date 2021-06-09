function values (){
    let funcionario = {
        vetorizacao: 10,
        tempo: 2000,
    }
    return funcionario
}


function draw (){
    values(); 
    const draw = document.getElementById("graphicData");
    const drawLine = draw.getContext("2d");
    drawLine.beginPath();
    //posicionamento de (x,y) ponto INICIAL
    drawLine.moveTo(20,420);
    //posicionamento de (x,y) ponto FINAL, quanto menor o ponto y mais alto no grafico
    drawLine.lineTo(100,120);
    //estilos da linha
    drawLine.lineWidth = 5;
    drawLine.stroke()

}

draw(); 


function drawLineY() {
    const graphicY = document.getElementById("graphicData");
    const lineY = graphicY.getContext("2d");
    lineY.beginPath();
    //posicionamento de (x,y) do primeiro ponto, inicio
    lineY.moveTo(20, 15);
    //posicionamento de (x,y) do segunto ponto, final
    lineY.lineTo(20, 420);
    //estilos da linha
    lineY.lineWidth = 3;
    lineY.stroke();
}

function drawLineX() {
    const graphicX = document.getElementById("graphicData");
    const lineX = graphicX.getContext("2d");
    lineX.beginPath();
    //posicionamento de (x,y) do primeiro ponto, inicio
    //limite de valor para o eixo y = 420
    lineX.moveTo(18, 420);
    //posicionamento de (x,y) do segunto ponto, final
    //limite de valor para o eixo x = 830
    lineX.lineTo(830, 420);
    //estilos da linha
    lineX.lineWidth = 3;
    lineX.stroke();
}

drawLineX();
drawLineY();