/* Mechanics of coffee machine */

let choice = {
    drinkName: '',
    drinkType: '',
    howMany: 0,
    milk: 0,
    cherrySyrup: 0,
    price: 0,
    drinkVolume: 0,
};



$(function(){
    $(".payment").on("click",function(){
        makingCoffee();
    });

    $('button').on('click', function () {
        let action = $(this).attr("class");
        ckeckoutCups(action);
    });

    $('.reject').append('<button>Отмена заказа</button>');

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
        $('.extra-status').empty();
        console.log(choice)
    })
});

function ckeckoutCups (what) {
    if ((smallCup.quantity+bigCup.quantity) > 0) {

        /*Well, it's not really effective
        3)Если любое следующее нажатие кнопки может превысить
        объем большого стакана - можно нажать только кнопку оплаты.
        We need more profound mechanism of solving Cups problem here

        choice.drinkVolume > 280 condition protects us from '4th espresso' situation, but blocks extra milk and syrup.
        */

        if ((bigCup.quantity>0)&&(choice.drinkVolume > 280)&&(choice.drinkName==='espresso')) {
            $('.status-order').append('<p class="extra-status" >Оплатите или отмените заказа</p>');
        } else if ((bigCup.quantity>0)&&(choice.drinkVolume > 330)&&(choice.drinkName='milk')) {
            $('.status-order').append('<p class="extra-status" >Оплатите или отмените заказа</p>');
        } else if ((choice.drinkVolume > 200) && (bigCup.quantity === 0)) {
            $('.status-order').append('<p>Можно добавить только молоко</p>');
            actionChoice(what);
        } else {
            actionChoice(what);
        }
    } else {
        $('.drink').text("Извините. Стаканчики закончились.");
    }
}

function actionChoice (action) {
    if ((action !== 'cherrySyrup') && (action !== 'payment') && (action !== 'reject')) {

        setDrinkType(action);
        updateMilkButton();
        decisionTree(action);
        console.log(choice);


        /*No syrup without coffee and no more than 100ml of cherrySyrup*/

    } else if ((action === 'cherrySyrup') && (choice.howMany > 0) && (choice.cherrySyrup<2) && (choice.drinkType === 'basic')) {
        choice.cherrySyrup += 1;
        choice.price += coffeeCups.cherrySyrup[3];
        console.log(choice);
        console.log(countDrinkVolume(choice));
    }

    updateDrinkName();
    $('.price').text("Цена: " + choice.price);
    choice.drinkVolume = countDrinkVolume(choice);
    console.log(countDrinkVolume(choice));
}

// countDrinkVolume() Должно быть <=350

function countDrinkVolume (orderedDrink) {
    const a = coffeeCups[orderedDrink.drinkName][0]*orderedDrink.howMany;
    const b = coffeeCups.milk[0]*orderedDrink.milk;
    const c = coffeeCups.cherrySyrup[0]*orderedDrink.cherrySyrup;
    return (a+b+c)
}

/*function countDrinkPrice (orderedDrink) {
    const a = coffeeCups[orderedDrink.drinkName][3]*orderedDrink.howMany;
    const b = coffeeCups.milk[3]*orderedDrink.milk;
    const c = coffeeCups.cherrySyrup[3]*orderedDrink.cherrySyrup;
    return (a+b+c)
}*/

/*Find out a drink type*/
function setDrinkType(action) {
    if ((action === 'espresso')||
        (action === 'latte')||
        (action === 'cappuccino')) {
        return choice.drinkType = 'basic';
    } else if ((action === 'bananaLatte')||
        (action === 'vanillaLatte')||
        (action === 'flatWhite')) {
        return choice.drinkType = 'author'

// Milk choice is possible only from beginning of interconnection or after 'reject' button
    } else if (choice.drinkType === '') {
        return choice.drinkType = 'milk'
    }
}

function decisionTree(action) {
    if (choice.drinkType === 'author') {
        authorsDrinks(action);
    } else if ((choice.drinkType === 'basic') && action === 'milk') {
        giveMilk();
    } else if (choice.drinkType === 'basic') {
        basicDrinks(action);
    } else if (action === 'milk') {
        giveMilk();
    }
}

function authorsDrinks (action) {
    if (action !== 'milk') {
        choice.drinkName = action;
        choice.howMany = 1;
        choice.milk = 0;
        choice.cherrySyrup = 0;
        choice.price = coffeeCups[action][3];
    }
}

function basicDrinks (action) {

// Condition action === 'espresso' was added while coping with Cup volume problem
    if ((choice.drinkName === action) && (action === 'espresso')) {
        choice.howMany += 1;
        choice.price += coffeeCups[action][3]
    } else {
        if (action !== 'milk') {
            choice.drinkName = action;
            choice.howMany = 1;
            choice.price = coffeeCups[action][3];
        }
    }
}

function giveMilk () {
    if ((choice.drinkName === "") && (choice.drinkType !== 'author') && (choice.drinkType !== 'basic')) {
        choice.drinkName = 'milk';
        choice.milk = 1;
        choice.price = coffeeCups.milk[3];
    } else if (choice.drinkType !== "author") {
        choice.milk += 1;
        choice.price += coffeeCups.milk[3];
    }
}

function updateDrinkName() {
    let name = "Напиток: " + coffeeCups[choice.drinkName][1];

    if (choice.drinkName === 'milk') {
        if (choice.milk > 1 && !choice.cherrySyrup)
            name += ", " + choice.milk + ' порция(и)';
    } else if (choice.cherrySyrup > 0 || choice.milk > 0) {
        name += " c " + choice.milk + ' порцией(ми) молока и ' + choice.cherrySyrup + ' сиропа';
    }

    $('.drink').text(name);
}

/*
ProgressBar activation
*/

function getDrinkTime () {

    // IMHO, double or triple basic drinks are also custom type. Then (choice.howMany > 1)

    if (((choice.milk + choice.cherrySyrup) > 0) || (choice.howMany > 1)) {
        return makingTime.custom;
    } else if (choice.drinkType === 'author') {
        return makingTime.author;
    } else {
        return makingTime.basic;
    }
}

function makingCoffee() {
    let progressBar = $('.reject');
    progressBar.empty();
    progressBar.addClass("progress");
    progressBar.removeClass('reject');
    $(document).ready(function () {
        $('.progress').append('<div id="myBar"></div>');
        move();
        setTimeout(coffeeIsReady, getDrinkTime())
    });
}

function coffeeIsReady() {
    let coffeeResult = $('.progress');
    coffeeResult.empty();
    coffeeResult.addClass("result");
    coffeeResult.removeClass('progress');
    $(document).ready(function(){
        $('.result').append('<img src=' + coffeeCups[choice.drinkName][2] + ' style="width:200px" alt="Coffee is ready">');

        // delivery image appears

        $('#delivery').append('<img src="https://source.unsplash.com/200x200/?coffee" alt="Your coffee is ready. Take it, please">');
    });
    pourDrink();
    console.log("Больших стаканов: " + bigCup.quantity + '; маленьких: ' + smallCup.quantity);
    blink();
    setTimeout( function () {
        music.play()
    }, 5000);

    setTimeout(function () {
        music.pause();
        $('.status-order').append('<p class="extra-status" >НАПИТОК В ЗОНЕ ВЫДАЧИ</p>')
    }, 25000)}


    function updateMilkButton() {
        if (choice.drinkType === "author") {
            $(".milk").attr("disabled", "disabled");
        } else {
            $(".milk").removeAttr("disabled");
        }
    }
