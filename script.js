//Exemplo for
const exemploForDiv = document.getElementById("exemplo-for");

let textoFor = "<h2> exemplo com for: </h2><ul>";

for(let i = 1; i<= 5; i++){
    textoFor += `<li>${i}</li>`;
}

textoFor += "<ul>";
exemploForDiv.innerHTML = textoFor

// Exemplo com while

const exemploWhileDiv = document.getElementById("exemplo-while");
let contador =1;
let textoWhile = "<h3>Exemplo while</h3><ul>";
while(contador <= 5){
    textoWhile += `<li>${contador}</li>`
    contador++;
}
textoWhile += "</ul>";
exemploWhileDiv.innerHTML = textoWhile;

// Exemplo com Do While

const exemploDoWhile = document.getElementById("exemplo-do-while");

let contador2 = 1;
let textoDoWhile = "<h3> Exemplo com do ... while </h3><ul>"
do{
    textoDoWhile += `<li>${contador2}</li>`
    contador2++;
}while(contador2 <= 6);
textoDoWhile += "</ul>";
exemploDoWhile.innerHTML = textoDoWhile;

