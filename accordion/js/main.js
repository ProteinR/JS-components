var $lastSection = $('.accordion-section:first'); //по дефолту открыта первая

$('.accordion-container .accordion-section').click(function () {
    $curentsection = $(this); //записали текущую вкладку по которой кликнули

    if (!($curentsection == $lastSection)) { //если не совпадает с последней открытой
        $lastSection.toggleClass('active'); //закрываем последнюю
        show($curentsection); // открываем нужную
    }


});

function show($curentsection) {
    $curentsection.addClass('active');
    $lastSection = $curentsection;
}
