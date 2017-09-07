var config = {
    apiKey: "AIzaSyDbJxxFkSwYdaL1xFLpYBHWAeMoHWte1Ug",
    authDomain: "protivogaz-50cea.firebaseapp.com",
    databaseURL: "https://protivogaz-50cea.firebaseio.com",
    projectId: "protivogaz-50cea",
    storageBucket: "protivogaz-50cea.appspot.com",
    messagingSenderId: "951990760643"
  };
firebase.initializeApp(config);
var base = firebase.database();

function loadData() {
    item = {};
    $('#catalog-item').html('<div class="item-titles"><a href="catalog.html' + selectedUrl + '" class="lightblue"> <i class="glyphicon glyphicon-chevron-left"></i> Назад к списку </a></div><div id="ballsWaveG"><div id="ballsWaveG_1" class="ballsWaveG"></div><div id="ballsWaveG_2" class="ballsWaveG"></div><div id="ballsWaveG_3" class="ballsWaveG"></div><div id="ballsWaveG_4" class="ballsWaveG"></div><div id="ballsWaveG_5" class="ballsWaveG"></div><div id="ballsWaveG_6" class="ballsWaveG"></div><div id="ballsWaveG_7" class="ballsWaveG"></div><div id="ballsWaveG_8" class="ballsWaveG"></div></div>');
    $("#catalog-also-viewed").css("display","none");
    $(".title-here").html("Загружаем...");
    base.ref('items/' + selectedId).once('value').then(function(snapshot){
        data = snapshot.val();
        if (data) {
            $(".title-here").html(data.title);
            var rawData = '';
            rawData += '<div class="item-titles"><a href="catalog.html' + selectedUrl + '" class="lightblue"> <i class="glyphicon glyphicon-chevron-left"></i> Назад к списку </a><h5 class="item-title">' + data.title + '</h5></div><div class="catalog-item"><div class="catalog-item-image item-only" style="background-image: url(' + data.images[0] + ')"><img src="assets/img/full.png" onmouseup="toggleClass(\'popup\',\'viewed\')" height="34px"></div><div class="item-text"><h5>' + data.description[0].title + '</h5><br><p class="classic small">' + data.description[0].value + '</p><br></div>';
            for (var i = 1; i < data.description.length; i++) {
                rawData += '<h5>' + data.description[i].title + '</h5><p class="classic small">' + data.description[i].value + '</p><br>';
            }
            rawData += '<span class="catalog-item-date"></span></div>';
            $("#catalog-item").html(rawData);
            $("#catalog-also-viewed").css("display","block");
        } else {
            $(".title-here").html("Товар не найден");
            var rawData = '';
            rawData += '<div class="item-titles"><a href="catalog.html' + selectedUrl + '" class="lightblue"> <i class="glyphicon glyphicon-chevron-left"></i> Назад к списку </a><h5 class="item-title">Товар не найден</h5></div><div class="catalog-item">Приносим извинения, так как данный товар не существует или был удален</div></div>';
            $("#catalog-item").html(rawData);
        }
    });
}