

/*
Coffee Cups
*/

let bigCup = {
    volume: 380,
    quantity: 5,
    };

let smallCup = {
    volume: 250,
    quantity: 5,
};

const coffeeCups = {
    espresso: [100, "Эспрессо"],
    latte: [250, "Латте"],
    cappuccino: [250, "Капучино"],
    bananaLatte: [300, "Банановый латте"],
    vanillaLatte: [300, "Ванильный латте"],
    flatWhite: [280,"Флет Вайт"],
    milk: [50, "Молоко"],
    cherrySyrup: [50, "Вишневый сироп"]
};

const coffeeNames = {
    espresso: "Эспрессо",
    latte: "Латте",
    cappuccino: "Капучино",
    bananaLatte: 300,
    vanillaLatte: 300,
    flatWhite: 280,
    milk: 50,
    cherrySyrup: 50,
};

// после каждого нажатия кнопки нужно пересчитывать

let orderedDrink = {
    coffeeName: '',
    coffeeStrength: 0,
    milk: 0,
    cherrySyrup: 0,
};

// countDrinkVolume() Должно быть <=350

function countDrinkVolume (orderedDrink) {
    a = coffeeCups[orderedDrink.coffeeName]*orderedDrink.coffeeStrength;
    b = coffeeCups.milk*orderedDrink.milk;
    c = coffeeCups.cherrySyrup*orderedDrink.cherrySyrup;
    return (a+b+c)
}

// drinkName должен равняться объёму кофе + наполнитель; ещё одна функция

function pourDrink(drinkName) {
    debugger;
    if((coffeeCups[drinkName]<=smallCup.volume)&&(smallCup.quantity>0)) {
        smallCup.quantity -= 1;
    } else if (bigCup.quantity>0) {
        bigCup.quantity -= 1;
    } else {
        return "Извините. Стаканчики закончились."
    }
}
