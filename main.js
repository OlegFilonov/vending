/*Объем, Название, Картинка, Цена*/

// Не меняется название напитка после выбора молока

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

let music = new Audio('Cha.mp3');
music.volume = 0.3;


