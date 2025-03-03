function ParImpar(){
    const inp1 = document.getElementById('input1')
    const value1 = parseFloat(inp1.value);

    

    if (value1 %2 == 0) {
        document.getElementById('p1').textContent = "O valor é par"
    }
    else{
        document.getElementById('p1').textContent = "O valor é impar"
    }

}