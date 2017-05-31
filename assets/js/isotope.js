$(document).ready(function() {
    var $grid = $('.js-grid').isotope({
        itemSelector: '.js-grid-item'
    });
    // Remove user
    $grid.on('click', '.js-delete', function(e) {
        e.preventDefault();
        $grid.isotope( 'remove', $(this).parents('.js-grid-item') )
            .isotope('layout');
    });

    // Add item
    $('.js-add-user').on( 'click', function(e) {
        e.preventDefault();
        var $items = $('.js-grid-item:last').clone();
        $grid.append( $items )
            .isotope( 'appended', $items );
    });

});