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