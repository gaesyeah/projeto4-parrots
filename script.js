let IMG1; /*guarda o texto(que está como hidden mesmo pra não aparecer) para verificar se as cartas clicadas são iguais*/
let IMG2; /*guarda o texto(que está como hidden mesmo pra não aparecer) para verificar se as cartas clicadas são iguais*/
let contador = 0; /*verifica se tem uma, duas ou nenhuma carta selecionada*/
let victoryPTs = 0; /*conta quantas vezes o jogador clicou em cartas*/
let victory = 0; /*conta quantas vezes o jogador acertou os pares, e na function VERIFY() é verificado se esse numero é igual a QTDcartas*/

/*variaveis para salvar quais divs estão viradas, para caso sejam diferentes a function DIFFERENT() desvirar elas*/
let NEWfront1;
let NEWback1;
let NEWfront2;
let NEWback2;
/*-----------*/

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

/*realoca as divs após o embaralhamento da array*/
const REcontainer = document.querySelector('.container');
REcontainer.innerHTML = '';
lista_cartas.forEach(JS => REcontainer.appendChild(JS));
/*----------------------------------------------------------------------*/
/*muda a quantidade de cartas(hidden) e reduz o tamanho para deixa-las certinhas*/
if (QTDcartas == 12) {
    const x = document.querySelectorAll('.ONE');
    x.forEach(JS => JS.classList.add('hidden'));
    //------
    const y = document.querySelector('.container');
    y.classList.add('size5');

} else if (QTDcartas == 10) {
    const x = document.querySelectorAll('.ONE, .TWO');
    x.forEach(JS => JS.classList.add('hidden'));
    //------
    const y = document.querySelector('.container');
    y.classList.add('size4');

} else if (QTDcartas == 8) {
    const x = document.querySelectorAll('.ONE, .TWO, .THREE');
    x.forEach(JS => JS.classList.add('hidden'));
    //------
    const y = document.querySelector('.container');
    y.classList.add('size3');

} else if (QTDcartas == 6) {
    const x = document.querySelectorAll('.ONE, .TWO, .THREE, .FOUR');
    x.forEach(JS => JS.classList.add('hidden'));
    //------
    const y = document.querySelector('.container');
    y.classList.add('size2');

} else if(QTDcartas == 4) {
    const x = document.querySelectorAll('.ONE, .TWO, .THREE, .FOUR, .FIVE');
    x.forEach(JS => JS.classList.add('hidden'));
    //------
    const y = document.querySelector('.container');
    y.classList.add('size1');
}
/*----------------------------------------------------------------------*/
                        /*MARCADOR DE CARTAS:*/

function select(cards) {

    if (contador === 0) {

        victoryPTs = victoryPTs + 1;

        contador++;
        IMG1 = cards.querySelector('.identifier').innerText;

        NEWfront1 = cards.querySelector('.front-face');
        NEWfront1.classList.add('new_front-face');

        NEWback1 = cards.querySelector('.back-face');
        NEWback1.classList.add('new_back-face');


    } else if (contador === 1) {

        victoryPTs = victoryPTs + 1;

        contador++;
        IMG2 = cards.querySelector('.identifier').innerText

        NEWfront2 = cards.querySelector('.front-face');
        NEWfront2.classList.add('new_front-face');
        
        NEWback2 = cards.querySelector('.back-face');
        NEWback2.classList.add('new_back-face');

        VERIFY();
    } 
}
function VERIFY() {
    contador = 0; /*PARA ZERAR O VALOR DO CONTADOR*/
    if (IMG1 === IMG2) {
        victory = victory + 2;
        if (victory == QTDcartas) {
            setTimeout(function(){
                alert(`Você ganhou em ${victoryPTs} jogadas!`)
            },100);
        }
    } else {
        setTimeout(function(){
            DIFFERENT();
        },1000);
    }
}
/*gira as cartas para a posição original caso elas não sejam iguais*/
function DIFFERENT() {
    NEWfront1.classList.remove('new_front-face');
    NEWback1.classList.remove('new_back-face');
    
    NEWfront2.classList.remove('new_front-face');
    NEWback2.classList.remove('new_back-face');
}