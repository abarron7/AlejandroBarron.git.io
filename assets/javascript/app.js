//add to .env
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
     name == "" ? alert("Please fill out your name")
    : email == "" ? alert("Please fill out your email")
    : message == "" ? alert("Please fill out your message")
    :   newMessage = {
        name: name,
        email: email,
        message: message,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    };
    
    // if (name == "") {
    //     alert("Please fill out your name");
    // } else if (email == "") {
    //     alert("Please fill out your email");
    // } else if (message == "") {  
    //     alert("Please fill out your message");
    // } else {
    // var newMessage = {
    //     name: name,
    //     email: email,
    //     message: message,
    //     dateAdded: firebase.database.ServerValue.TIMESTAMP
    // };
    
    database.ref().push(newMessage);

    alert("Thank you, we'll be in touch.");

    $('#Name').val("");
    $('#Email').val("");
    $('#Message').val("");
    // }
    console.log = function(){};
});

// database.ref().on("child_added", function (childSnapshot) {
//     console.log(childSnapshot.val().name);
//     console.log(childSnapshot.val().email);
//     console.log(childSnapshot.val().message);
//     console.log(childSnapshot.val().dateAdded);
// }, function (errorObject) {
//     console.log("Errors handled: " + errorObject.code);
// });