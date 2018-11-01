var x0, x1, distance = 0;
var flag = false; //нажата ли левая клавиша мыши


$('.before-after-wrapper').mousedown(function (e) {
    flag = true;
    x0 = e.pageX;
    //    alert('click');

    //    alert(flag);
    $(this).mousemove(function (e) {
        if (flag) {
            x1 = e.pageX;
            distance = x1 - x0;
            $('.line').css('left', +distance);
            $('.left-img').css('width', +distance);
        }
    })
});

$('.before-after-wrapper').mouseup(function () {
    flag = false;
    console.log(flag);
})
