$('.button-dropdown').on('click', function () { //по клику кнопки вкл/выкл класс
    $('ul').toggleClass('active'); //выпадающий список
    $('i').toggleClass('active'); //переворот стрелочки
});

$('.button-dropdown').blur(function () { //клик вне кнопки скроет список (!не раб)
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
