var y = 0;

$(window).load(function () {
    y = ($(this).scrollTop() / ($(document).height() - $(window).height()) * 100);
    $('.status-bar').css('width', y + '%');
});

$(window).scroll(function () {
    y = ($(this).scrollTop() / ($(document).height() - $(window).height()) * 100);
    console.log(y);
    $('.status-bar').css('width', y + '%');
})
