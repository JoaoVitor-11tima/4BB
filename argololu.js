function calcularCoordenadas() {
    const inputX = document.getElementById("x");
    const inputY = document.getElementById("y");
    const paragrafoResultado = document.getElementById("resultado");

    let x = Number(inputX.value);
    let y = Number(inputY.value);

    let resultado;

    if (x === 0 && y === 0) {
        resultado = "Origem";
    } else if (x === 0) {
        resultado = "Eixo Y";
    } else if (y === 0) {
        resultado = "Eixo X";
    } else if (x > 0 && y > 0) {
        resultado = "Q1";
    } else if (x < 0 && y > 0) {
        resultado = "Q2";
    } else if (x < 0 && y < 0) {
        resultado = "Q3";
    } else if (x > 0 && y < 0) {
        resultado = "Q4";
    }

    paragrafoResultado.innerHTML = resultado;
}