const button = document.getElementById('bt1');

function inverterString(str) {
    return str.split('').reverse().join('');
  }

button.addEventListener("click" , function(event) {
    const string = document.getElementById('bt1')

    const textoInvertido = document.getElementById('p1').textContent = inverterString(string);
})