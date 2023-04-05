let IMG1; /*guarda o texto(que está como hidden mesmo pra não aparecer) para verificar se as cartas clicadas são iguais*/
let IMG2; /*guarda o texto(que está como hidden mesmo pra não aparecer) para verificar se as cartas clicadas são iguais*/
let contador = 0; /*verifica se tem uma, duas ou nenhuma carta selecionada*/
let victoryPTs = 0; /*conta quantas vezes o jogador clicou em cartas*/
let victory = 0; /*conta quantas vezes o jogador acertou os pares, e na function VERIFY() é verificado se esse numero é igual a QTDcartas*/
let QTDcartas = 0;
/*--------------------------------------------------------------------*/
let lista_cartas,REcontainer, x,y;
/*--------------------------------------------------------------------*/

START();

function START() {
    QTDcartas = prompt("Com quantas cartas você quer jogar?");
    let resto = QTDcartas % 2;

    if (QTDcartas < 4 || QTDcartas > 14 || resto !== 0) {
        QTDcartas = prompt("Escolha novamente, só é possivel jogar com 4 a 14 cartas, e precisa ser um número par");
        resto = QTDcartas % 2;
        while (QTDcartas < 4 || QTDcartas > 14 || resto !== 0) {
        QTDcartas = prompt("Escolha novamente, só é possivel jogar com 4 a 14 cartas, e precisa ser um número par");
        resto = QTDcartas % 2;
        }
    }
}

/*variaveis para salvar quais divs estão viradas, para caso sejam diferentes a function DIFFERENT() desvirar elas*/
let NEWfront1;
let NEWback1;
let NEWfront2;
let NEWback2;

/*----------------------------------------------------------------------*/
MESS();

function MESS() {

    /*armazena as divs numa array:*/
    lista_cartas = Array.from(document.querySelectorAll('.card'));

    /*muda a posição dos elementos dessa array aleatoriamente:*/
    function shuffle() {
        return Math.random() - 0.5;
    }
    lista_cartas.sort(shuffle);

    /*realoca as divs após o embaralhamento da array*/
    REcontainer = document.querySelector('.container');
    REcontainer.innerHTML = '';
    lista_cartas.forEach(JS => REcontainer.appendChild(JS));

}
/*----------------------------------------------------------------------*/
DIFFICULTY();

function DIFFICULTY(){

    /*muda a quantidade de cartas(hidden) e reduz o tamanho para deixa-las certinhas*/
    if (QTDcartas == 12) {
        x = document.querySelectorAll('.ONE');
        x.forEach(JS => JS.classList.add('hidden'));
        //------
        y = document.querySelector('.container');
        y.classList.add('size5');

    } else if (QTDcartas == 10) {
        x = document.querySelectorAll('.ONE, .TWO');
        x.forEach(JS => JS.classList.add('hidden'));
        //------
        y = document.querySelector('.container');
        y.classList.add('size4');

    } else if (QTDcartas == 8) {
        x = document.querySelectorAll('.ONE, .TWO, .THREE');
        x.forEach(JS => JS.classList.add('hidden'));
        //------
        y = document.querySelector('.container');
        y.classList.add('size3');

    } else if (QTDcartas == 6) {
        x = document.querySelectorAll('.ONE, .TWO, .THREE, .FOUR');
        x.forEach(JS => JS.classList.add('hidden'));
        //------
        y = document.querySelector('.container');
        y.classList.add('size2');

    } else if(QTDcartas == 4) {
        x = document.querySelectorAll('.ONE, .TWO, .THREE, .FOUR, .FIVE');
        x.forEach(JS => JS.classList.add('hidden'));
        //------
        y = document.querySelector('.container');
        y.classList.add('size1');
    }
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
        IMG2 = cards.querySelector('.identifier').innerText;

        NEWfront2 = cards.querySelector('.front-face');
        NEWfront2.classList.add('new_front-face');
        
        NEWback2 = cards.querySelector('.back-face');
        NEWback2.classList.add('new_back-face');

        VERIFY();
    }
}
function ANTIbug() {
    //DESABILITA O ONCLICK DE TODAS AS CARTAS POR 1 SEGUNDO

    const await = document.querySelectorAll('.card');

    await.forEach(JS => {
        /*é necessário salvar o parametro atual da função ativada pelo onclick, 
        para que no final ele seja retornado novamente, reativando o mesmo e
        não também dando problemas com a função select()*/
        const OLDonclickPARAM = JS.getAttribute('onclick');

        JS.setAttribute('onclick', null);
        //reativa o onclick após 1 segundo, utilizando setTimeout
        setTimeout(function(){
            JS.setAttribute('onclick', OLDonclickPARAM);
        },1000);
    });

}
function VERIFY() {

    contador = 0; /*PARA ZERAR O VALOR DO CONTADOR*/

    ANTIbug();

    if (IMG1 === IMG2) {
        victory = victory + 2;

        if (victory == QTDcartas) {
            setTimeout(function(){
                alert(`Você ganhou em ${victoryPTs} jogadas!`);
                EQUALS();
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

function EQUALS() {

    let replay = prompt('Gostaria de reiniciar a partida? Por favor, digite sim ou não')

    if (replay === 'sim') {

    //"zera" o valor das variaveis necessárias para a função onclick funcionar do "zero" 
        IMG1 ='';
        IMG2 ='';
        contador = 0;
        victoryPTs = 0;
        victory = 0;
        QTDcartas = 0;
    //chama novamente a função para ser perguntada a quantidade de cartas ao usuario
        START();
    //chama novamente a função para reembaralhar
        MESS();
    //remove o hidden de todas as cartas para que elas possam ser "recolocadas" com a função DIFFICULTY() usando os valores da START();
        let reDO = document.querySelectorAll('.hidden');
        reDO.forEach(JS => JS.classList.remove('hidden'));
    //esconde novamente todas as cartas
        let restart1 = document.querySelectorAll('.new_front-face');
        restart1.forEach(JS => JS.classList.remove('new_front-face'));
        let restart2 = document.querySelectorAll('.new_back-face');
        restart2.forEach(JS => JS.classList.remove('new_back-face'));
    //deixa apenas a classe container nessa tag(para redefinir o tamanho do container)
        let elemento = document.querySelector('.container');
        elemento.className = "container";
    //chama novamente a função da dificuldade para redefinir o tamanho do container e a quantidade de cartas na tela
        DIFFICULTY();
        
    } else if (replay === 'não') {
        let z = document.querySelector('.container');
        let w = z.querySelectorAll('div');
        w.forEach(JS => JS.setAttribute('onclick', null)); 
    } else {
        replay = '';
        alert('você não digitou sim ou não corretamente, digite novamente')

        EQUALS();
    }
}
