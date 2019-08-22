$(document).ready(function () {

    $(window).on('load', function (e) {
        e.preventDefault();

        $('.cards').each(function (i) {
            setTimeout(function () {
                $('.cards').eq(i).addClass('showup');
            }, 500 * i);


        });




    });


});