

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

/*Объем, Название, Картинка, Цена*/

const coffeeCups = {
    espresso: [100, "Эспрессо", './vendors/img/espresso.jpg', 90],
    latte: [250, "Латте", './vendors/img/latte.jpg', 130],
    cappuccino: [250, "Капучино", './vendors/img/cappuccino.jpg', 110],
    bananaLatte: [300, "Банановый латте", './vendors/img/bananaLatte.jpg', 150],
    vanillaLatte: [300, "Ванильный латте", './vendors/img/vanillaLatte.jpg', 150],
    flatWhite: [280,"Флет Вайт", './vendors/img/flatWhite.jpg', 100],
    milk: [50, "Молоко", './vendors/img/milk.jpg', 25],
    cherrySyrup: [50, "Вишневый сироп", "" , 25]
};

// после каждого нажатия кнопки нужно пересчитывать



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
