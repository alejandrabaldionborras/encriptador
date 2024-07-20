function encryptText() {
    const inputText = document.getElementById('inputText').value;
    
    
    if (!/^[a-z\s]+$/.test(inputText)) {
        alert('Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.');
        return;
    }
    
    let encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    document.getElementById('outputImage').style.display = 'none'; 
    document.getElementById('outputText').style.display = 'block'; 
    document.getElementById('outputText').value = encryptedText;
    document.getElementById('inputText').value = ''; 
    disableButtons();
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    
    
    if (!/^[a-z\s]+$/.test(inputText)) {
        alert('Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.');
        return;
    }
    
    let decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    document.getElementById('outputImage').style.display = 'none'; 
    document.getElementById('outputText').style.display = 'block'; 
    document.getElementById('outputText').value = decryptedText;
    document.getElementById('inputText').value = ''; 
    disableButtons();
}

function disableButtons() {
    document.getElementById('encryptBtn').disabled = true;
    document.getElementById('decryptBtn').disabled = true;
    document.getElementById('copyBtn').style.display = 'inline-block'; 
}

function enableButtons() {
    document.getElementById('encryptBtn').disabled = false;
    document.getElementById('decryptBtn').disabled = false;
    document.getElementById('copyBtn').style.display = 'none'; 
}

function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles.');
    resetProcess(); 
}

function resetProcess() {
    document.getElementById('inputText').value = ''; 
    document.getElementById('outputText').value = ''; 
    document.getElementById('outputText').style.display = 'none'; 
    document.getElementById('outputImage').style.display = 'block'; 
    enableButtons(); 
}


document.getElementById('inputText').addEventListener('input', function() {
    enableButtons();
});