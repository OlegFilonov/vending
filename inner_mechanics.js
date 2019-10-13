/*Progress bar function*/

function move() {
    let elem = document.getElementById("myBar");
    let width = 1;
    let id = setInterval(frame, (setDrinkType() / 100));
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

/*
Coffee Cups
*/

let bigCup = {
    volume: 380,
    quantity: 6,
};

let smallCup = {
    volume: 250,
    quantity: 5,
};

// drinkName должен равняться объёму кофе + наполнитель; ещё одна функция

function pourDrink() {
    if (choice.drinkVolume <= 250) {
        smallCup.quantity -= 1;
    } else {
        bigCup.quantity -= 1;
    }
}

/*
function pourDrink(drinkName) {
    debugger;
    if((coffeeCups[drinkName]<=smallCup.volume)&&(smallCup.quantity>0)) {
        smallCup.quantity -= 1;
    } else if (bigCup.quantity>0) {
        bigCup.quantity -= 1;
    } else {
        return "Извините. Стаканчики закончились."
    }
}*/
