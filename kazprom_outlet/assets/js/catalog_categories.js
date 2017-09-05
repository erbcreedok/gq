var translittedTitles = {
    protivogazy: "Противогазы",
    filtruyushie: "Фильтрующие",
    grazhdanskie: "Гражданскиe",
    promyshlennye: "Промышленные",
    izoliruyushie: "Изолирующие",
    litsevye_chasti: "Лицевые части",
    panoramnye_maski: "Панорамные маски",
    polumaski: "Полумаски",
    filtry_i_komplektuyushie: "Фильтры и комплектующие",
    filtry: "Фильтры",
    kombinirovannye: "Комбинированные",
    protivoaerozolnye: "Противоаэрозольные",
    protivogazovye: "Противогазовые",
    sumki: "Сумки",
    prochie_komplektuyushie: "Прочие комплектующие",
    polumaski_filtruyushie: "Полумаски фильтрующие",
    voennye: "Военные",
    samospasateli: "Самоспасатели",
    drager: "Dräger",
    gazoizmeritelnye_pribory: "Газоизмерительные приборы",
    pribory_dlya_obnaruzheniya_alkogolya_i_narkotikov: "Приборы для обнаружения алкоголя и наркотиков",
    sredstva_individualnoy_zashity: "Средства индивидуальной защиты",
    dyhatelnye_apparaty: "Дыхательные аппараты",
    zashita_tela: "Защита тела",
    samospasateli_drager: "Самоспасатели Drager",
    teplovizionnye_kamery: "Тепловизионные камеры",
    drugie_siz: "Другие СИЗ",
    siz_glaz: "СИЗ глаз",
    ochki_zashitnye_otkrytye: "Очки защитные открытые",
    ochki_zashitnye_zakrytye: "Очки защитные закрытые",
    ochki_zashitnye_kozyrkovye: "Очки защитные козырьковые",
    zashitnye_ochki_ekran: "Защитные очки-экран",
    siz_golovy: "СИЗ головы",
    kaski_zashitnye: "Каски защитные",
    kaski_zashitnye_shahterskie: "Каски защитные шахтерские",
    kaski_zashitnye_lyuministsentnye: "Каски защитные люминесцентные",
    siz_litsa: "СИЗ лица",
    shitki_zashitnye_litsevye: "Щитки защитные лицевые",
    zashitnye_litsevye_shitki_svarshika: "Защитные лицевые щитки сварщика",
    siz_organov_sluha: "СИЗ органов слуха",
    siz_ot_padeniya_s_vysoty: "СИЗ от падения с высоты",
    strahovochnye_i_uderzhivayushie_sistemy: "Страховочные и удерживающие системы",
    uderzhivayushie_stropy: "Удерживающие стропы",
    siz_ruk: "СИЗ рук",
    siz_tela: "СИЗ тела",
    zashitnye_kostyumy_himicheskie: "Защитные костюмы химические",
    zashitnaya_odezhda_filtruyushya: "Защитная одежда фильтрующая",
    sizod_s_prinuditelnoy_podachey_vozduha: "СИЗОД с принудительной подачей воздуха",
    sredstva_meditsinskoy_zashity: "Средства медицинской защиты",
}

$(document).ready(function() {
    onPageUrlChanged();
});

$(window).on('hashchange', function() {
    onPageUrlChanged();
});

function onPageUrlChanged(){
    selectedUrl = window.location.hash;
    
    if (selectedUrl === '#' || selectedUrl === '') {
        window.location.hash = '#protivogazy/filtruyushie/grazhdanskie';
    }
    
    selectedCategory = selectedUrl.slice(1);
    categoryHierarchy = selectedCategory.split('/');
    
    selectedUrl = selectedUrl.split("/id");
    selectedId = selectedUrl[1];
    selectedUrl = selectedUrl[0];
    selectedElem = $('a[href$=\'' + selectedUrl + '\']');
    
    
    $('.catalog-sidebar p, .catalog-sidebar a').removeClass("selected");
    $(selectedElem).addClass('selected');
    $(selectedElem).parentsUntil('.category').addClass('selected');
    $(selectedElem).parentsUntil('.catalog-sidebar').addClass('viewed');
    
    $('p.catalog-nav-hierarchy').html('<a href="#">Каталог</a>');
    hrefs = 'catalog.html#';
    for (var i = 0; i < categoryHierarchy.length-1; i++) {
        hrefs += categoryHierarchy[i];
        $('p.catalog-nav-hierarchy').append('<a href="' + hrefs + '">' + translittedTitles[categoryHierarchy[i]] + '</a>');
        hrefs += '/'
    }
    if(!selectedId) {
        $('p.catalog-nav-hierarchy').append('<span>' + translittedTitles[categoryHierarchy[categoryHierarchy.length-1]] + '</span>');
    } else {
        $('p.catalog-nav-hierarchy').append('<span>' + selectedId + '</span>');
    }
    $('.title-here').html(translittedTitles[categoryHierarchy[categoryHierarchy.length-1]]);
    loadData();   
}
