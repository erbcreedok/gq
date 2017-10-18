$(".tab").on('click',function(){
    $('.tab').removeClass('btn-primary').addClass('btn-secondary');
    var elem = $(this).attr('tab-target');
    $('.tab-target').removeClass('d-block').addClass('d-none');
    $(elem).addClass('d-block');
    $(this).removeClass('btn-secondary').addClass('btn-primary');
});