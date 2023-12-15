const number_container = document.getElementById("number-container");

for (let i = 0; i < 5; i++) {
    
    random_number = generateRandomInt(1, 100);
    
    if (i < 5 - 1) {
        number_container.innerHTML += random_number + ", ";
    }

    else {
        number_container.innerHTML += random_number;
    }

}

setTimeout (disappearance, 30000);


// FUNCTION

function generateRandomInt(min, max) {

    return Math.floor((Math.random() * (max + 1 - min)) + min);

}

function disappearance() {

    number_container.classList.add("d-none");

}