$.fn.slider = function (options) {

    //vars
    var params = $.extend({
        speed: 300,
        circles: true,
        timingFunction: 'ease'
    }, options);


    $selector = this;

    var $slideRow = $selector.find('.slide-row'); //листаемая лента
    var divWidth = $selector.width(); //получаем ширину блока
    var numImg = 0; //номер листаемого изображения
    var imgCount = $selector.find('.slide').length; //кол-во изображений в слайдере
    var maxWidth = imgCount * divWidth; // ширина блока с учетом всех картинок
    var x0, x1, distance = 0;
    var clickFlag = false; // нажата ли кнопка мыши


    //controllers
    function slideController(img) { //листаем ленту и подсвечиваем кружок
        if (img < 0) { //проверка на левый конец ленты
            numImg = imgCount - 1;
            console.log('Отняли numImg = ' + numImg);
        }
        if (img >= imgCount) { //проверка на правый конец ленты
            numImg = 0;
            console.log('numImg = ' + numImg);

        }

        $slideRow.css('left', divWidth * numImg * (-1));
        $selector.find('.circle').removeClass('active');
        $selector.find('#' + numImg).addClass('active');
        console.log('numImg = ' + numImg);
    };

    //Init
    $slideRow.css('transition', 'all ' + params.speed + 'ms ' + 'ease');

    $selector.find('.slide').css('width', divWidth); // задали ширину картинки равную ширине род. контейнера
    $slideRow.css('width', maxWidth + 100 + 'px'); // задали макс.ширину полосы
    console.log('Ширина блока - ' + divWidth + 'px');

    //генерируем кружки для навигации

    for (i = 1; i < imgCount; i++) {
        $selector.find('.circles').append('<div class="circle" data-img=' + i + ' id=' + i + '></div>');
    }

    //Actions
    $selector.find('.circle').click(function () { //Получаем номер кружка, делаем его активным, листаем на необх. количество экранов ленту
        numImg = $(this).attr('data-img');
        slideController(numImg);
    });

    $selector.find('.arrow.arrow-left').click(function () {
        numImg--;
        console.log('Левая стрелка numImg = ' + numImg);
        slideController(numImg);
    });

    $selector.find('.arrow.arrow-right').click(function () {
        numImg++;
        slideController(numImg);
    });

    //  отработка на движение мыши с зажатой клавишей
    $selector.mousedown(function (e) {
        clickFlag = true;
        x0 = e.pageX; //точка нажатия клавиши
    });

    $(this).mousemove(function (e) {
        if (clickFlag) { //проверка зажата ли клавиша
            x1 = e.pageX; //точка до которой довели указатель
            distance = x0 - x1;
            $slideRow.css('transition', 'none');
            $slideRow.css('left', (divWidth * numImg * (-1)) - distance);
        }
    });

    $selector.mouseup(function () {
        console.log('mose up');
        clickFlag = false;
        $slideRow.css('transition', 'all ' + params.speed + 'ms ' + 'ease');
        if (distance > 100) {
            numImg++;
        }
        if (distance < (-100)) {
            numImg--;
        }
        slideController(numImg);

    });
    //  отработка на движение мыши с зажатой клавишей
}
