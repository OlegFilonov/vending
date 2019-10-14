/*Vending menu*/

const coffeeCups = {
    /*Объем, Название, Картинка, Цена*/
    espresso: [100, "Эспрессо", './img/espresso.jpg', 90],
    latte: [250, "Латте", './img/latte.jpg', 130],
    cappuccino: [250, "Капучино", './img/cappuccino.jpg', 110],
    bananaLatte: [300, "Банановый латте", './img/bananaLatte.jpg', 150],
    vanillaLatte: [300, "Ванильный латте", './img/vanillaLatte.jpg', 150],
    flatWhite: [280,"Флет Вайт", './img/flatWhite.jpg', 100],
    milk: [50, "Молоко", './img/milk.jpg', 25],
    cherrySyrup: [50, "Вишневый сироп", "" , 25]
};

/*Vending Cups*/

let bigCup = {
    volume: 380,
    quantity: 6,
};

let smallCup = {
    volume: 250,
    quantity: 5,
};

/*Vending process time*/

const makingTime = {
    basic: 3000,
    author: 5000,
    custom: 8000,
};