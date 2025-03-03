function somarInputs() {
    
    const input1 = document.getElementById('inp1');
    const valor1 = parseFloat(input1.value);
  
    const input2 = document.getElementById('inp2');
    const valor2 = parseFloat(input2.value);
  
   
    if (isNaN(valor1) || isNaN(valor2)) {
      document.getElementById('resultado').textContent = "Por favor, insira números válidos.";
      return; // Encerra a função se os valores forem inválidos
    }
  
    
    const resultado = valor1 + valor2;
  
    
    document.getElementById('resultado').textContent = "Resultado: " + resultado;
  }