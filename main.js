function playGame(tiri) {
    let player1 = 0;
    let player2 = 0;


    for (let i = 0; i < tiri; i++) {
        let player1Roll = Math.floor(Math.random() * 6) + 1;
        let player2Roll = Math.floor(Math.random() * 6) + 1;

        player1 = player1 + player1Roll
        player2 = player2 + player2Roll
    }

    if(player1 > player2){
        return `player 1 ha vinto con punteggio pari a ${player1}`
    }else if (player2 > player1){
        return `player 2 ha vinto con un punteggio pari a ${player2}`
    }else {
        return `pareggio con punteggio di ${player1}`
    }
}

let tiri = Number(prompt(`qnanti tiri devono effettuare io giorvatori?`))

let result = playGame(tiri)
console.log(result);










