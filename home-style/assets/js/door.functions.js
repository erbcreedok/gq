$(".tab").on('click',function(){
    $('.tab').removeClass('active');
    var elem = $(this).attr('tab-target');
    $('.tab-target').addClass('d-none');
    $(elem).removeClass('d-none');
    $(this).addClass('active');
});

$(document).on('click', '.color-box ', function() {
    $('.pasteColorHere').css('color', $(this).css('background-color')).html( $(this).attr('title') );
});