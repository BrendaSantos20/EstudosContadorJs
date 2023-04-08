

const btn1 = document.getElementById('botao1');
const btn2 = document.getElementById('botao2');
const p = document.getElementById('p');

let contador = 0;
p.innerHTML = contador;

btn1.addEventListener('click', function () {
    contador--;
    p.innerHTML = contador;
})
btn2.addEventListener('click', function () {
    contador++;
    p.innerHTML = contador;
})


console.log(contador);