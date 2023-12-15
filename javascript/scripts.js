const numberContainer = document.getElementById("number-container");
const myArray = [];
const userArray = [];
const guessedNumbers = [];

for (let i = 0; i < 5; i++) {
    
    const randomNumber = generateRandomInt(1, 100);
    myArray.push(randomNumber);
    
    if (i < 5 - 1) {
        numberContainer.innerHTML += randomNumber + ", ";
    }

    else {
        numberContainer.innerHTML += randomNumber;
    }

}

setTimeout (disappearance, 3000);
setTimeout (fiveUserNumbers, 3010);

// FUNCTION

function generateRandomInt(min, max) {

    return Math.floor((Math.random() * (max + 1 - min)) + min);

}

function disappearance() {

    numberContainer.classList.add("d-none");
    console.log(myArray);

}

function fiveUserNumbers() {

    for (let i = 0; i < 5; i++) {
        
        const userNumber = parseInt(prompt("Inserisci un numero:"));
        userArray.push(userNumber);

    }

    console.log(userArray);

    let score = 0;

    for (let i = 0; i < myArray.length; i++) {
        for (let j = 0; j < userArray.length; j++) {

            if (myArray[i] == userArray[j]) {
                
                score ++;

            }            
        }
    }

    console.log("Hai indovinato " + score + " numeri!");

}