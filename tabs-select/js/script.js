$('.button-dropdown').on('click', function () {
    //    alert('click');
    $('ul').toggleClass('active');
});

$('.button-dropdown').blur(function () {
    alert('blur');
    $('ul').removeClass('active');
});



//tabs
$('.tabs li').click(function () {
    var target = $(this).attr('data-tab'); //достали номер вкладки
    console.log(target);
    $('li').removeClass(); //убрали подсветку у всех вкладок
    $(this).addClass('active-tab'); //подсветили вкладку на которую нажали

    $('.tab-container .content p').removeClass('active-p');
    $(target).addClass('active-p'); //выбрали абзац с id = target
});
