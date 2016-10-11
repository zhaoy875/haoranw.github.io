
$(function () {
    $('img').each(function(index, element) {
        oldsrc = $(element).attr('src');
        if (!$(element).attr('lazy-src')){
            $(element).attr({
                'src': '',
                'data-original':  oldsrc
            });
        }
    });
})


