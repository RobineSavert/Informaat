$(document).ready(function() {
    //toggle `popup` / `inline` mode
    $.fn.editable.defaults.mode = 'inline';

    //make username editable
    $('.editable').editable();
    $('#datepicker').datepicker();

    //make status editable
    $('#status').editable({
        type: 'select',
        title: 'Select status',
        placement: 'right',
        value: 2,
        source: [
            {value: 1, text: 'status 1'},
            {value: 2, text: 'status 2'},
            {value: 3, text: 'status 3'}
        ]
        /*
         //uncomment these lines to send data on server
         ,pk: 1
         ,url: '/post'
         */
    });


    var $grid = $('.js-grid').isotope({
        itemSelector: '.js-grid-item'
    });

    var $item = $('.js-grid-item');

    $grid.on('click', '.js-grid-item .js-delete', function() {
        $(this).parent().parent().remove();
        $grid.isotope();
        $grid.isotope('reloadItems')
        $grid.isotope('layout');

        return false;
    });




});