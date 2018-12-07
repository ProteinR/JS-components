var arrow = $('.arrow');

$('input[type="range"]').mousemove(function () {
    var rangeVal = $('input[type="range"]').val();


    $('.current-value > .val > span').html(rangeVal);
    $('.current-value > .val').css('left', rangeVal + '%');

    if (rangeVal < 10) {
        arrow.css('left', '-19px');
    } else {
        arrow.css('left', '-23px');
    }
});
