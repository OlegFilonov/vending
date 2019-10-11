/*
Mechanics of coffee machine
*/

/*$('.espresso').on('click', function() {
    $('.status').text("Это эспрессо!")
});*/


// Можно сделать в html место специальное под текст и добавлять его через text.
// Потому что append добавляет код в конец материанскоого элемента
$(document).ready(function(){
    $("button").on("click",function(){
            $('.status').append('<p>Напиток: ' + coffeeCups[$(this).attr("class")][1] + '</p>');
            $('.status').append('<p>Стоит: ' + coffeeCups[$(this).attr("class")][0] + '</p>');

            $('.header').append('<p>Плати мне: ' + coffeeCups[$(this).attr("class")][0] + '</p>');

      //  $('.status').text("Стоит: " + coffeeCups[$(this).attr("class")][0]);
    });
});