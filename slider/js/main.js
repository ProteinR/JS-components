var divWidth = $(".slider-container").width(); //получаем ширину блока
var numImg = 0; //номер листаемого изображения
var imgCount = $('.slide').length; //кол-во изображений в слайдере
var maxWidth = imgCount * divWidth; // ширина блока с учетом всех картинок

console.log('Ширина блока - ' + divWidth + 'px');

for (i = 1; i < imgCount; i++) { //генерируем кружки для навигации
    //    $('.circle').clone().appendTo('.circles'); //clone не подходит т.к. клонирует свои же клонированные блоки
    $('.circles').append('<div class="circle" data-img=' + i + '></div>');
    console.log('Цикл for i= ' + i);
}


$('.circle').click(function () { //Получаем номер кружка, делаем его активным, листаем на необх. количество экранов ленту
    numImg = $(this).attr('data-img');
    $('.circle').removeClass('active');
    $(this).addClass('active');
    $('.slide-row').css('left', divWidth * numImg * (-1));
});

$('.arrow.arrow-left').click(function () {
    numImg--;
    if (numImg == -1) {
        numImg = imgCount - 1;
        console.log('numImg = ' + numImg);
    }
    $('.slide-row').css('left', divWidth * numImg * (-1));
});

$('.arrow.arrow-right').click(function () {
    numImg++;
    if (numImg >= imgCount) {
        numImg = 0;
    }
    $('.circle').removeClass('active');
    $('[data-slide="numImg"]').addClass('active');
    console.log(numImg);
    //    $activeCircle.addClass('active');
    $('.slide-row').css('left', divWidth * numImg * (-1));
});
