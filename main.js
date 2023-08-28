function CalcularSalario(){
    var salarioBruto = parseFloat(document.getElementById("salario_bruto").value)

    let inss, ifpr, salarioLiquido;

    // Cálculo do INSS
    if (salarioBruto <= 1100) {
        inss = salarioBruto * 0.075;
        } else if (salarioBruto <= 2203.48) {
        inss = salarioBruto * 0.09;
        } else if (salarioBruto <= 3305.22) {
        inss = salarioBruto * 0.12;
        } else if (salarioBruto <= 6433.57) {
        inss = salarioBruto * 0.14;
        } else {
        inss = 6433.57 * 0.14; 
        }

    // Cálculo Imposto de Renda IFPR
    if (salarioBruto <= 1903.98) {
        ifpr = 0; 
        } else if (salarioBruto <= 2826.65) {
        ifpr = salarioBruto * 0.075 - 142.8;
        } else if (salarioBruto <= 3751.05) {
        ifpr = salarioBruto * 0.15 - 354.8;
        } else if (salarioBruto <= 4664.68) {
        ifpr = salarioBruto * 0.225 - 636.13;
        } else {
        ifpr = salarioBruto * 0.275 - 869.36;
        }

        salarioLiquido = salarioBruto - (inss + ifpr)

        document.getElementById("resposta").innerHTML = parseFloat(salarioLiquido.toFixed(2));
}