$.fn.compare = function (options) {

    //vars
    var params = $.extend({
        percent: 50,
        arrows: true
    }, options);

    $selector = this;
    var x0, x1, distance = 0;
    var distance_procent; //расстояние в процентах от блока
    var flag = false; //нажата ли левая клавиша мыши
    var box_width = parseInt($selector.css('width')); //ширина контейнера
    console.log(box_width);
    var line_pos; //позиция полосы в процентах
    var left_img_width; //шир левого изобр в процентах

    //controllers


    //init
    $selector.find('.left-img').css('width', params.percent + '%'); //задаём ширину левого(верхнего изображения)
    $selector.find('.line').css('left', -100 + params.percent + '%');

    //action
    $selector.find('.line').mousedown(function (e) {
        flag = true;
        x0 = e.pageX;
        line_pos = parseInt($('.line').css('left')) * 100 / box_width;
        left_img_width = parseInt($selector.find('.left-img').css('width')) * 100 / box_width;
        console.log(line_pos);
    });

    $selector.mouseup(function (e) {
        flag = false;
    });

    $selector.mousemove(function (e) {
        if (flag) {
            x1 = e.pageX;
            distance = x1 - x0;
            distance_procent = distance * 100 / box_width;
            console.log(distance_procent);

            if (!(distance_procent <= -49 || distance_procent >= 51)) {
                $selector.find('.left-img').css('width', left_img_width + distance_procent + '%');
                $selector.find('.line').css('left', line_pos + distance_procent + '%');
            }

        }
    })







}
