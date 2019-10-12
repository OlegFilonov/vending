/*
Mechanics of coffee machine
*/

/*$('.espresso').on('click', function() {
    $('.status').text("Это эспрессо!")
});*/


// Можно сделать в html место специальное под текст и добавлять его через text.
// Потому что append добавляет код в конец материанскоого элемента

let choice = {
    drinkName: '',
    drinkType: '',
    howMany: 0,
    milk: 0,
    cherrySyrup: 0
};

$(document).ready(function () {
   $('button').on('click', function () {

       let action = $(this).attr("class");
       actionChoice(action);
    });

});

function actionChoice (action) {

    if ((action !== 'cherrySyrup') && (action !== 'payment') && (action !== 'reject')) {
        $('.drink').text("Напиток: " + coffeeCups[action][1]);
        $('.price').text("Цена: " + coffeeCups[action][0]);
        seeDrinkType(action);
        decisionTree(action);
        console.log(choice);
        console.log(countDrinkVolume(choice))
    }

}

// countDrinkVolume() Должно быть <=350

function countDrinkVolume (orderedDrink) {
    a = coffeeCups[orderedDrink.drinkName][0]*orderedDrink.howMany;
    b = coffeeCups.milk[0]*orderedDrink.milk;
    c = coffeeCups.cherrySyrup[0]*orderedDrink.cherrySyrup;
    return (a+b+c)
}

/*Find out a drink type*/
function seeDrinkType(action) {
    if ((action === 'espresso')||
        (action === 'latte')||
        (action === 'cappuccino')) {
        return choice.drinkType = 'basic';
    } else if ((action === 'bananaLatte')||
        (action === 'vanillaLatte')||
        (action === 'flatWhite')) {
        return choice.drinkType = 'author'
    } else {
        return choice.drinkType = 'milk'
    }
}

function decisionTree(action) {
    if (choice.drinkType === 'author') {
        authorsDrinks(action);
    } else if (choice.drinkType === 'basic') {
        basicDrinks(action);
    } else {
        giveMilk();
    }
}

function authorsDrinks (action) {
    choice.drinkName = action;
    choice.howMany = 1;
    choice.milk = 0;
    choice.cherrySyrup = 0;
}

function basicDrinks (action) {
    if (choice.drinkName === action) {
        choice.howMany += 1;
    } else {
        choice.drinkName = action;
        choice.howMany = 1;
    }
}

function giveMilk () {
    if (choice.drinkName === "") {
        choice.drinkName = 'milk'
    }
    choice.milk += 1;
}


$(document).ready(function(){
    $(".payment").on("click",function(){
        $('header').append('<img src="https://source.unsplash.com/200x200/?coffee" alt="coffee">');
    });
});

$(document).ready(function(){
        $('.reject').append('<button>Отмена</button>');
        $('.reject').on('click', function () {
            $('.drink').text("Напиток:");
            $('.price').text("Цена:");
            choice = {
                drinkName: '',
                drinkType: '',
                howMany: 0,
                milk: 0,
                cherrySyrup: 0
            };
            console.log(choice)
    })
    });


// image appears

/*
$(document).ready(function(){
    $("button").on("click",function(){
            $('.status').append('<p>Напиток: ' + coffeeCups[$(this).attr("class")][1] + '</p>');
            $('.status').append('<p>Стоит: ' + coffeeCups[$(this).attr("class")][0] + '</p>');
    });
});
*/


