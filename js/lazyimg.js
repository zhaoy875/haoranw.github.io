
window.onload=function () {
    $('img').each(function(index, element) {
        oldsrc = $(element).attr('src');
        if (!$(element).hasClass('lazy-src')) {
            $(element).addClass('lazy-src');
            $(element).attr({
                src: '',
                'lazy-src':  oldsrc
            });
        }
    });
}


