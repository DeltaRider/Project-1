var config = {
    apiKey: "AIzaSyBa1e0L-DemkmVuqWy1XrxsrI95fP59GC8",
    authDomain: "first-project-ac7aa.firebaseapp.com",
    databaseURL: "https://first-project-ac7aa.firebaseio.com",
    projectId: "first-project-ac7aa",
    storageBucket: "first-project-ac7aa.appspot.com",
    messagingSenderId: "1045492524479"
};

firebase.initializeApp(config);

var user = localStorage.getItem('a');
var favCities;
var database = firebase.database();
var userRef = database.ref("/favorites/" + user);
userRef.on("value", function(snapshot) {
    favCities = snapshot.val();
    for (var i=0; i<favCities.length; i++){
        $('.over').append(`<div class="popup">
            <img id="popstar" src="./assets/images/icons/icon-star-white.png" alt="Star">
            </div>
        `)
    };
});
