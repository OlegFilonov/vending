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


/*Set default settings*/

$(document).ready(function (){
    $('#delivery').on('click', function () {
        $('.drink').text("Напиток:");
        $('.price').text("Цена:");
        choice = {
            drinkName: '',
            drinkType: '',
            howMany: 0,
            milk: 0,
            cherrySyrup: 0,
            price: 0,
            drinkVolume: 0
        };
        $('.extra-status').empty();
        console.log(choice);
        let coffeeResult = $('.result');
        coffeeResult.empty();
        coffeeResult.addClass("reject");
        coffeeResult.removeClass('result');
        $('#delivery').empty();
        //правильно ли вставил кнопку?
        $('.reject').append('<button>Отмена</button>');
        clearInterval(blinkingBorder);
        music.pause()

    })
});


/*
blinking border
*/

function blinkingBorder () {
    setInterval(function () {
        if ($("#delivery").attr('class') === "noact") {
            $("#delivery").addClass("active");
            $("#delivery").removeClass("noact");
        } else {
            $("#delivery").addClass("noact");
            $("#delivery").removeClass("active");
        }
    }, 1500);
}

function playMelody() {

}