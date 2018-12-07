$.fn.tab = function () {

    $selector = this;
    var $dataTab, $curentClick, $id;
    //    $thisSelector = this.attr('data-tab');
    //    console.log($thisSelector);

    //controllers
    function closeAllTabsController() {
      $selector.find('li').removeClass('active-tab');//убрали подсветку у всех вкладок
    }

    function openTabController($id) {
      $selector.find('.active-p').removeClass('active-p');
      $($id).addClass('active-p');
    }

    //init

    //action
    $selector.find('li').click(function () {
            // console.log('done');
            $id = $(this).attr('data-tab');
            $curentClick = this;
            // console.log($curentClick);
            closeAllTabsController();
            openTabController($id);
            // $this.click().openTabController();
    })


}

/*
//tabs
$('.tabs li').click(function () {
    var target = $(this).attr('data-tab'); //достали номер вкладки
    //    console.log(target);
    $('li').removeClass(); //убрали подсветку у всех вкладок
    $(this).addClass('active-tab'); //подсветили вкладку на которую нажали

    $('.tab-container .content p').removeClass('active-p');
    $(target).addClass('active-p'); //выбрали абзац с id = target
});
*/
