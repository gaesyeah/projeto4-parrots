let QTDcartas = prompt("Com quantas cartas você quer jogar?");
let resto = QTDcartas % 2;

if (QTDcartas < 4 || QTDcartas > 14 || resto !== 0) {
    QTDcartas = prompt("Escolha novamente, só é possivel jogar com 4 a 14 cartas, e precisa ser um número par");
    resto = QTDcartas % 2;
    while (QTDcartas < 4 || QTDcartas > 14 || resto !== 0) {
    QTDcartas = prompt("Escolha novamente, só é possivel jogar com 4 a 14 cartas, e precisa ser um número par");
    resto = QTDcartas % 2;
    }
}

/*----------------------------------------------------------------------*/

/*armazena as divs numa array:*/
const lista_cartas = Array.from(document.querySelectorAll('.card'));

/*muda a posição dos elementos dessa array aleatoriamente:*/
function shuffle() {
    return Math.random() - 0.5;
}
lista_cartas.sort(shuffle);

/*realoca as divs após seu embaralhamento*/
const REcontainer = document.querySelector('.container');
REcontainer.innerHTML = '';
lista_cartas.forEach(JS => REcontainer.appendChild(JS));

/*----------------------------------------------------------------------*/

if (QTDcartas == 12) {
    const x = document.querySelectorAll('.ONE');
    x.forEach(JS => JS.classList.add('hidden'));
} else if (QTDcartas == 10) {
    const x = document.querySelectorAll('.ONE, .TWO');
    x.forEach(JS => JS.classList.add('hidden'));
} else if (QTDcartas == 8) {
    const x = document.querySelectorAll('.ONE, .TWO, .THREE');
    x.forEach(JS => JS.classList.add('hidden'));
} else if (QTDcartas == 6) {
    const x = document.querySelectorAll('.ONE, .TWO, .THREE, .FOUR');
    x.forEach(JS => JS.classList.add('hidden'));
} else if(QTDcartas == 4) {
    const x = document.querySelectorAll('.ONE, .TWO, .THREE, .FOUR, .FIVE');
    x.forEach(JS => JS.classList.add('hidden'));
}







