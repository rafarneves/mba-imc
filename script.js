function calculaIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    let resultado = '';

    if (altura <= 0 || isNaN(altura)) {
        resultado = "Altura inválida!"
    } else if (peso <= 0 || isNaN(peso)) {
        resultado = "Peso inválido!"
    }

    const imc = (peso / (altura * altura)).toFixed(2);
    
    if (imc < 18.5) {
        resultado = 'Magreza';
    } else if (imc < 24.9) {
        resultado = 'Normal';
    } else if (imc < 30) {
        resultado = 'Sobrepeso';
    } else {
        resultado = 'Obesidade';
    }

    document.getElementById('resultado').innerText = `IMC = ${imc} - ${resultado}`;
}
