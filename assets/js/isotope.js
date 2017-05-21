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


