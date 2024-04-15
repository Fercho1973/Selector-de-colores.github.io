const inputColor = document.querySelector('#inputColor');// Se toman los ID de HTML
const btnVisualizar = document.querySelector('#btnVisualizar');// Se toman los ID de HTML
const parrafoExa = document.querySelector('#parrafoExa');// Se toman los ID de HTML
const cardColor = document.querySelector("#cardColor");// Se toman los ID de HTML

console.log(inputColor.value);

btnVisualizar.addEventListener('click', () => {
console.log(inputColor.value);
console.log('Me diste Click');
parrafoExa.textContent = inputColor.value
cardColor.style.backgroundColor = inputColor.value;
navigator.clipboard //Con el de abajo copia el valor del color al portapapeles.
.writeText(inputColor.value) // copia el valor del color al portapapeles
       // .then(() => console.log("texto copiado"))
        //.catch((e) => console.log(e));
})

console.log(inputColor);
console.log(btnVisualizar);
console.log(parrafoExa);
console.log(cardColor);
