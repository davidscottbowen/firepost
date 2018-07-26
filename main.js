function data() {
  var playersRef = firebase.database().ref("journal");

  playersRef.set ({
     Day1: {
        entry: "I hate all"
     }
  });
}

function read() {
// some HTML element on the page
var postElement = document.getElementById("readdata");

// here I will assume that this function simply 
// updates the contents of the element with a value
var updateStarCount = function(element, value) {
    element.textContent = value;
};

var starCountRef = firebase.database().ref("journal");
starCountRef.on('value', function(snapshot) {
    updateStarCount(postElement, snapshot.val().Day1.entry);
});

}

function login() {
  var userEmail = document.getElementById("email").value;
  var userPassword = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    windows.alert("Error : " + errorMessage);
  });

}

function logout() {
  firebase.auth().signOut()
}

function register() {
  var userEmail = document.getElementById("email").value;
  var userPassword = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // document.getElementById("bottom").style.display = "block";
    // document.getElementById("top").style.display = "none";

    var user = firebase.auth().currentUser;

    if (user != null) {
      var email_id = user.email;
      document.getElementById("userInfo").innerHTML = email_id;
    }
  } else {
    document.getElementById("userInfo").innerHTML = "";
    // document.getElementById("bottom").style.display = "none";
    // document.getElementById("top").style.display = "block";
  }
});