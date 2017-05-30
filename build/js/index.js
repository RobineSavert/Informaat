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

});



$(document).ready(function() {
    $.fn.editable.defaults.mode = 'inline';

    $('.editable').editable();
    $('.datepicker-editable').datepicker();

    /*
     //uncomment these lines to send data on server
     ,pk: 1
     ,url: '/post'
     */
});