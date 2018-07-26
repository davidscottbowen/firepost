function data() {
  var playersRef = firebase.database().ref("players/");

  playersRef.push({
    John: {
      number: 1,
      age: 30
    },

    Amanda: {
      number: 2,
      age: 20
    }
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