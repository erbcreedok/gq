//var config = {
//    apiKey: "AIzaSyDbJxxFkSwYdaL1xFLpYBHWAeMoHWte1Ug",
//    authDomain: "protivogaz-50cea.firebaseapp.com",
//    databaseURL: "https://protivogaz-50cea.firebaseio.com",
//    projectId: "protivogaz-50cea",
//    storageBucket: "protivogaz-50cea.appspot.com",
//    messagingSenderId: "951990760643"
//};
//firebase.initializeApp(config);
//var db = firebase.firestore();
//db.collection("filtry").add({
//    title: "Ada",
//    url: "Lovelace"
//})
//.then(function(docRef) {
//    console.log("Document written with ID: ", docRef.id);
//})
//.catch(function(error) {
//    console.error("Error adding document: ", error);
//});

//db.collection("filtry").where('title','LIKE','Ada').get().then((querySnapshot) => {
//    querySnapshot.forEach((doc) => {
//        console.log(`${doc.id} => ${doc.data().title}`);
//    });
//});
function a(n){
    sum = 0
    for (var x4 = Math.floor(n/4); x4>=0; x4--){
        for (var x3 = Math.floor((n - (x4 * 4))/3); x3>=0; x3--){
            for (var x2 = Math.floor((n - (x4 * 4)) - (x3 * 3) /2); x2>=0; x2--){
                for (var x1 = Math.floor((n - (x4 * 4)) - (x3 * 3) - (x2 * 2) / 1); x1>=0; x1--){
                    console.log(x1,x2,x3,x4);
                    console.log(x1 + x2*2 + x3*3 + x4*4);
                    sum+=1;
                }
            }
        }
    }
    return sum;
}