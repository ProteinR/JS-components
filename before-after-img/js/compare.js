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
    var right_border_distance;

    //controllers
    function compareController() {
        $selector.find('.left-img').css('width', left_img_width + distance_procent + '%');
        $selector.find('.line').css('left', line_pos + distance_procent + '%');
    }


    //init
    $selector.find('.left-img').css('width', params.percent + '%'); //задаём ширину левого(верхнего изображения)
    $selector.find('.line').css('left', -100 + params.percent + '%');
    $selector.find('.left-img > img').css('width', box_width);

    if (params.arrows == true) {
        $selector.find('.line').addClass('line-true');
        console.log('arrow true');
    } else {
        $selector.find('.line').addClass('line-false');
        console.log('arrow false');
    }

    //action
    $selector.find('.line').mousedown(function (e) {
        flag = true;
        x0 = e.pageX;
        line_pos = parseInt($('.line').css('left')) * 100 / box_width;
        left_img_width = parseInt($selector.find('.left-img').css('width')) * 100 / box_width;
        right_border_distance = 100 - left_img_width;

        console.log(right_border_distance);
    });

    $(document).mouseup(function (e) {
        flag = false;
    });

    $selector.mousemove(function (e) {
        if (flag) {
            x1 = e.pageX;
            distance = x1 - x0;
            distance_procent = distance * 100 / box_width;
            console.log(distance_procent);

            if (!(distance_procent <= -left_img_width || distance_procent > right_border_distance)) {
                console.log($selector.find('.left-img').css('width' + 'perc'));

                compareController();
            }
        }
    })
}
