var $slideRow = $('.slide-row'); //листаемая лента
var divWidth = $(".slider-container").width(); //получаем ширину блока
var numImg = 0; //номер листаемого изображения
var imgCount = $('.slide').length; //кол-во изображений в слайдере
var maxWidth = imgCount * divWidth; // ширина блока с учетом всех картинок
var x0, x1, distance = 0;
var clickFlag = false; // нажата ли кнопка мыши


$('.slide').css('width', divWidth); // задали ширину картинки равную ширине род. контейнера
$slideRow.css('width', maxWidth + 100 + 'px'); // задали макс.ширину полосы

console.log('Ширина блока - ' + divWidth + 'px');

for (i = 1; i < imgCount; i++) { //генерируем кружки для навигации
    $('.circles').append('<div class="circle" data-img=' + i + ' id=' + i + '></div>');
}

$('.circle').click(function () { //Получаем номер кружка, делаем его активным, листаем на необх. количество экранов ленту
    numImg = $(this).attr('data-img');
    slide(numImg);
});

$('.arrow.arrow-left').click(function () {
    numImg--;
    console.log('Левая стрелка numImg = ' + numImg);
    slide(numImg);
});

$('.arrow.arrow-right').click(function () {
    numImg++;
    slide(numImg);
});


function slide(img) { //листаем ленту и подсвечиваем кружок
    if (img < 0) { //проверка на левый конец ленты
        numImg = imgCount - 1;
        console.log('Отняли numImg = ' + numImg);
    }
    if (img >= imgCount) { //проверка на правый конец ленты
        numImg = 0;
        console.log('numImg = ' + numImg);

    }

    $slideRow.css('left', divWidth * numImg * (-1));
    $('.circle').removeClass('active');
    $('#' + numImg).addClass('active');
    console.log('numImg = ' + numImg);

};

//  отработка на движение мыши с зажатой клавишей
$(".slider-container").mousedown(function (e) {
    clickFlag = true;
    x0 = e.pageX; //точка нажатия клавиши

    $(this).mousemove(function (e) {
        if (clickFlag) { //проверка зажата ли клавиша
            x1 = e.pageX; //точка до которой довели указатель
            distance = x0 - x1;
            $slideRow.css('transition', 'none');
            $slideRow.css('left', (divWidth * numImg * (-1)) - distance);
        }
    });
});





$(".slider-container").mouseup(function () {
    console.log('mose up');
    clickFlag = false;
    $slideRow.css('transition', 'all 0.5s ease');
    if (distance > 100) {
        numImg++;
    }
    if (distance < (-100)) {
        numImg--;
    }
    slide(numImg);

});
//  отработка на движение мыши с зажатой клавишей
