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

function loadData() {
    catalogItems = [];
    $(".catalog-list").html('<div id="ballsWaveG"><div id="ballsWaveG_1" class="ballsWaveG"></div><div id="ballsWaveG_2" class="ballsWaveG"></div><div id="ballsWaveG_3" class="ballsWaveG"></div><div id="ballsWaveG_4" class="ballsWaveG"></div><div id="ballsWaveG_5" class="ballsWaveG"></div><div id="ballsWaveG_6" class="ballsWaveG"></div><div id="ballsWaveG_7" class="ballsWaveG"></div><div id="ballsWaveG_8" class="ballsWaveG"></div></div>');
    base.ref(selectedCategory).once('value').then(function(snapshot){
        data = snapshot.val();
        catalogItems = organizeData(data, catalogItems);
        $(".catalog-list").html('');
        for (var item in catalogItems) {
            item = catalogItems[item];
            $(".catalog-list").append('<div class="catalog-list-item"><div class="catalog-item-image" style="background-image: url(' + item.image + ')"></div><div class="catalog-item-text"><a href="catalog-item.html' + selectedUrl + '/id' + item.id + '"><p class="catalog-item-title">' + item.title + '</p></a><p class="catalog-item-description">' + item.description + '</p></div><span class="catalog-item-date">' + item.timestamp + '</span><a href="catalog-item.html' + selectedUrl + '/id' + item.id + '"><button class="catalog-item-button blue">Узнать больше</button></a></div>');
        }
    });
}

function organizeData(input, output) {
    if (input.type === 'items') {
        delete input.type;
        return output.concat(convertToArray(input));
    } else if (input.type === 'containers') {
        for (var cat in input) {
            if (cat !== 'type') {
                output = organizeData(input[cat], output);
            }
        }
        return output;
    }
    return [];
}

function convertToArray(object) {
    return $.map(object, function(value, index) { 
        return [value];
    });
}
