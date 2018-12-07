var config = {
    apiKey: "AIzaSyCvTHHlDjDZMLWYrM2RnsvyDENjcfM8Ks4",
    authDomain: "contactportofolio.firebaseapp.com",
    databaseURL: "https://contactportofolio.firebaseio.com",
    projectId: "contactportofolio",
    storageBucket: "",
    messagingSenderId: "891493462168"
};
firebase.initializeApp(config);
var database = firebase.database();

$("#submit").on('click', function (event) {
    event.preventDefault();
    var name = $('#Name').val().trim();
    var email = $('#Email').val().trim();
    var message = $('#Message').val().trim();

    var newMessage = {
        name: name,
        email: email,
        message: message,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    };

    database.ref().push(newMessage);

    alert("Thank you, we'll be in touch.");

    $('#Name').val("");
    $('#Email').val("");
    $('#Message').val("");
    
});
database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().email);
    console.log(childSnapshot.val().message);
    console.log(childSnapshot.val().dateAdded);
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});