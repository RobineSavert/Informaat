$(document).ready(function() {
    var $grid = $('.js-grid').isotope({
        itemSelector: '.js-grid-item'
    });

    $grid.on('click', '.js-delete', function(e) {
        e.preventDefault();
        $grid.isotope( 'remove', $(this).parents('.js-grid-item') )
        // layout remaining item elements
            .isotope('layout');
    });


    $(".js-add-user").click(function(){
        $grid.isotope( 'appended', $(this).parents('.js-grid-item') )
        // layout remaining item elements
            .isotope('layout');
    });


});
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



});