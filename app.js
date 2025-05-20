let secretNumber = randomNumber();
let shots = 1;

function showText (tag, text) {
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
}

function showTextOnScreen() {
    showText(".title", "Joguinho do número secreto.");
    showText(".texto__paragrafo", "Escolha um número entre 1 e 100.")
}

showTextOnScreen();

function checkShot() {
    let shot = document.querySelector(".container__input").value;
    
    if (secretNumber == shot) {
        showText(".title", "Você Acertou!");

        let wordShots = shots > 1 ? "tentativas" : "Tentativa";
        let mesageShots = `Você descobriu o número secreto com um total de ${shots} ${wordShots}!`

        showText(".texto__paragrafo", mesageShots);
        document.querySelector("#reiniciar").removeAttribute("disabled");
    } else if (secretNumber < shot){
        showText(".title", "Você Errou!!!");
        showText(".texto__paragrafo", "O número secreto é menor do que o escolhido");
        clearInput();
    } else {
        showText(".title", "Você Errou!!!");
        showText(".texto__paragrafo", "O número secreto é maior do que o escolhido");
        clearInput();
    }
    shots++;
}

function randomNumber() {
    return parseInt(Math.random() * 100 + 1);
}

function clearInput() {
    shot = document.querySelector(".container__input");
    shot.value = '';
}

function restart() {
    secretNumber = randomNumber();
    shots = 1;
    showTextOnScreen();
    clearInput();
    document.querySelector("#reiniciar").setAttribute("disabled", true);
}