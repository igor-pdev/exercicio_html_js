document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter os valores dos campos A e B
    let campoA = parseFloat(document.getElementById('campoA').value);
    let campoB = parseFloat(document.getElementById('campoB').value);

    // Validar o formulário
    if (campoB > campoA) {
        showMessage('Formulário válido!', 'valid');
    } else {
        showMessage('Formulário inválido! O número B deve ser maior que o número A.', 'invalid');
    }
});

function showMessage(message, type) {
    let messageBox = document.getElementById('messageBox');
    messageBox.textContent = message;
    messageBox.className = 'message ' + type;
}
