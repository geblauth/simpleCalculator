function performOperation(operator) {
    let numeroUm = parseInt(document.getElementById('inputOne').value)
    let numeroDois = parseInt(document.getElementById('inputTwo').value)
    let resultado = document.getElementById('result')

    switch (operator) {
        case '+':
            resultado.textContent = numeroUm+numeroDois
            break;
        
        case '-':
            resultado.textContent = numeroUm-numeroDois
            break;

        case '*':
            resultado.textContent = numeroUm*numeroDois
            break;

        case '/':
            resultado.textContent = numeroUm/numeroDois
            break;
    
        default:
            break;
    }
}

function clearInputs(){

    document.getElementById('inputOne').value = ""
    document.getElementById('inputTwo').value = ""
    document.getElementById('result').textContent =  "0"


}



