var divWidth = $(".slider-container").width(); //получаем ширину блока
var numImg = 0; //номер листаемого изображения
var imgCount = $('.slide').length; //кол-во изображений в слайдере
var maxWidth = imgCount * divWidth; // ширина блока с учетом всех картинок

console.log('Ширина блока - ' + divWidth + 'px');

for (i = 1; i < imgCount; i++) { //генерируем кружки для навигации
    $('.circles').append('<div class="circle" data-img=' + i + ' id=' + i + '></div>');
    console.log('Цикл for i= ' + i);
}


$('.circle').click(function () { //Получаем номер кружка, делаем его активным, листаем на необх. количество экранов ленту
    numImg = $(this).attr('data-img');
    slide(numImg);
});

$('.arrow.arrow-left').click(function () {
    numImg--;
    if (numImg == -1) {
        numImg = imgCount - 1;
        console.log('numImg = ' + numImg);
    }
    slide(numImg);
});

$('.arrow.arrow-right').click(function () {
    numImg++;
    if (numImg >= imgCount) {
        numImg = 0;
    }
    slide(numImg);
});


function slide(numImg) { //листаем ленту и подсвечиваем кружок
    $('.slide-row').css('left', divWidth * numImg * (-1));
    $('.circle').removeClass('active');
    $('#' + numImg).addClass('active');
};
