var x0, x1, distance = 0;
var distance_procent; //расстояние в процентах от блока
var flag = false; //нажата ли левая клавиша мыши
var box_width = parseInt($('.before-after-wrapper').css('width')); //ширина контейнера
var line_pos; //позиция полосы в процентах
var left_img_width; //шир левого изобр в процентах
//console.log(left_img_width);

$('.before-after-wrapper').mousedown(function (e) {
    flag = true;
    x0 = e.pageX;
    line_pos = parseInt($('.line').css('left')) * 100 / box_width;
    left_img_width = parseInt($('.left-img').css('width')) * 100 / box_width;

    $(this).mousemove(function (e) {
        if (flag) {
            x1 = e.pageX;
            distance = x1 - x0;

            distance_procent = distance * 100 / box_width;
            console.log(distance_procent);
            if (!(distance_procent <= -49 || distance_procent >= 51)) {
                $('.left-img').css('width', left_img_width + distance_procent + '%');
                $('.line').css('left', line_pos + distance_procent + '%');
            }
        }
    });
});

$('.before-after-wrapper').mouseup(function () {
    flag = false;
});
