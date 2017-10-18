$(".tab").on('click',function(){
    $('.tab').removeClass('btn-primary').addClass('btn-secondary');
    var elem = $(this).attr('tab-target');
    $('.tab-target').addClass('d-none');
    $(elem).removeClass('d-none');
    $(this).removeClass('btn-secondary').addClass('btn-primary');
});