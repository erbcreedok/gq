var config = {
    apiKey: "AIzaSyATr7_mNah0VdQ3VFhQQ01UfIrft2PAONg",
    authDomain: "kazpromsiz-6abc6.firebaseapp.com",
    databaseURL: "https://kazpromsiz-6abc6.firebaseio.com",
    projectId: "kazpromsiz-6abc6",
    storageBucket: "kazpromsiz-6abc6.appspot.com",
    messagingSenderId: "260998673766"
  };
firebase.initializeApp(config);
var base = firebase.database();
var activeImage = 0;
var activeSection = 0;
var images = [];
var displayValues = ['none', 'block'];
function loadData() {
    item = {};
    $('#catalog-item').html('<div class="item-titles"><a href="catalog.html' + selectedUrl + '" class="lightblue"> <i class="glyphicon glyphicon-chevron-left"></i> Назад к списку </a></div><div id="ballsWaveG"><div id="ballsWaveG_1" class="ballsWaveG"></div><div id="ballsWaveG_2" class="ballsWaveG"></div><div id="ballsWaveG_3" class="ballsWaveG"></div><div id="ballsWaveG_4" class="ballsWaveG"></div><div id="ballsWaveG_5" class="ballsWaveG"></div><div id="ballsWaveG_6" class="ballsWaveG"></div><div id="ballsWaveG_7" class="ballsWaveG"></div><div id="ballsWaveG_8" class="ballsWaveG"></div></div>');
    $("#catalog-also-viewed").css("display","none");
    $(".title-here").html("Загружаем...");
    base.ref('items/' + selectedId).once('value').then(function(snapshot){
        data = snapshot.val();
        images = data.images;
        if (data) {
            $(".title-here").html(data.title);
            var rawData = '';
            rawData += '<div class="item-titles"><a href="catalog.html' + selectedUrl + '" class="lightblue"> <i class="glyphicon glyphicon-chevron-left"></i> Назад к списку </a><h5 class="item-title">' + data.title + '</h5></div><div class="catalog-item"><div class="catalog-item-image item-only" id="image-here-bg" style="background-image: url(' + data.images[0] + ')"><div onclick="onPopupImageClicked(1)" class="image-changer"></div><img src="assets/img/full.png" onmouseup="toggleClass(\'popup\',\'viewed\')" height="34px"></div><div class="catalog-item-images"><div class="catalog-item-images-container">';
            
            for (var i = 0; i < images.length; i++) {
                rawData += '<div class="mini-image" onclick="onMiniImageClicked(' + i + ')" style="background-image: url(' + images[i] + ')"></div>';
            }
            
            rawData += '</div><img onclick="onImageSectionChanged(-1)" class="catalog-item-navigation left-navigation" src="assets/img/left_black.png"><img onclick="onImageSectionChanged(1)" class="catalog-item-navigation right-navigation" src="assets/img/right_black.png"></div><div class="item-text"><h5>' + data.description[0].title + '</h5><br><p class="classic small">' + data.description[0].value + '</p><br></div>';
            
            for (var i = 1; i < data.description.length; i++) {
                rawData += '<h5>' + data.description[i].title + '</h5><p class="classic small">' + data.description[i].value + '</p><br>';
            }
            
            rawData += '<span class="catalog-item-date"></span></div>';
            $("#catalog-item").html(rawData);
            $("#catalog-also-viewed").css("display","block");
            rawData = '<div class="circle"></div>'.repeat(images.length);
            $("popup .circles").html(rawData);
            onImageChanged();
        } else {
            $(".title-here").html("Товар не найден");
            var rawData = '';
            rawData += '<div class="item-titles"><a href="catalog.html' + selectedUrl + '" class="lightblue"> <i class="glyphicon glyphicon-chevron-left"></i> Назад к списку </a><h5 class="item-title">Товар не найден</h5></div><div class="catalog-item">Приносим извинения, так как данный товар не существует или был удален</div></div>';
            $("#catalog-item").html(rawData);
        }
    });
}

function onPopupImageClicked(value) {
    activeImage = activeImage + value;
    if (activeImage < 0) {
        activeImage = images.length - 1;
    }
    activeImage %= images.length;
    onImageChanged();
}

function onMiniImageClicked(value) {
    activeImage = value;
    onImageChanged();
}

function onImageChanged() {
    onPopupImageChanged();
    onMiniImageChanged();
}

function onPopupImageChanged() {
    $('#image-here').attr('src', images[activeImage]);
    $('popup .circles .circle').removeClass('active');
    $('popup .circles .circle:eq(' + activeImage + ')').addClass('active');
    $('popup .toleft').css('display', displayValues[0 + (activeImage !== 0)]);
    $('popup .toright').css('display', displayValues[0 + (activeImage !== images.length - 1 )]);
}

function onMiniImageChanged() {
    $('#image-here-bg').attr('style', 'background-image: url(' + images[activeImage] + ')');
    $('.mini-image').removeClass('active');
    $('.mini-image:eq(' + activeImage + ')').addClass('active');
    sectionIndex = Math.floor(activeImage/4);
    onImageSectionChanged(0);
}

function onImageSectionChanged(value) {
    sectionIndex += value;
    $('.catalog-item-navigation.left-navigation').css('display', displayValues[0 + (sectionIndex !== 0)]);
    $('.catalog-item-navigation.right-navigation').css('display', displayValues[0 + (sectionIndex !== Math.floor(images.length/4))]);  
    $('.catalog-item-images-container').css('margin-top', -60 * (sectionIndex )); 
}