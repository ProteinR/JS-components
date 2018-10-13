$('.buttons .button-modal').click(function () {
    idModal = $(this).attr('data-modal');
    $('.backgroundDark').css('visibility', 'visible');
    $(idModal).css('visibility', 'visible');
});

$('.close').click(function () {
    $('.backgroundDark').css('visibility', 'hidden');
    $(idModal).css('visibility', 'hidden');
});
