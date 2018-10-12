var divWidth = $(".slider-container").width(); //получаем ширину блока
var numImg = 0; //номер листаемого изображения
var imgCount = $('.slide').length; //кол-во изображений в слайдере
var maxWidth = imgCount * divWidth; // ширина блока с учетом всех картинок

//var length = 0; //- высчитывает на сколько прокрутить ленту 

console.log('Ширина блока - ' + divWidth + 'px');


$('.arrow.arrow-left').click(function () {
    numImg--;
    if (numImg == -1) {
        numImg = imgCount;
        console.log('numImg = ' + numImg);

    }
    $('.slide-row').css('left', divWidth * numImg * (-1));
});


$('.arrow.arrow-right').click(function () {
    numImg++;
    if (numImg < imgCount) {
        console.log(numImg);
    } else {
        numImg = 0;
    }
    $('.slide-row').css('left', divWidth * numImg * (-1));
});
