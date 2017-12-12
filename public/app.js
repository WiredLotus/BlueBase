(function() {
    // Initialise Firebase
    const config = {
      apiKey: "AIzaSyCCs80X8eawHBw7AmAK_K0dOHjREiTwkGY",
      authDomain: "projectai-451df.firebaseapp.com",
      databaseURL: "https://projectai-451df.firebaseio.com",
      projectId: "projectai-451df",
      storageBucket: "",
      messagingSenderId: "371206613561"
    };
    firebase.initializeApp(config);

    // Get page elements
    const pWelcome = document.getElementById('pWelcome');

    // Initialise variables
    var provider = new firebase.auth.GoogleAuthProvider();

    // Google sign in event
    btnGoogleSignin.addEventListener('click', e => {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user.displayName);
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
          });
    });

    // Google sign out event
    btnGoogleSignout.addEventListener('click', e => {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
        });
    });

    // Realtime authentication listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            var currUser = firebase.auth().currentUser;
            console.log(firebaseUser);
            btnGoogleSignout.classList.remove('gray');
            pWelcome.innerHTML = 'A salute to you '+currUser.displayName+'!';     
        } else {
            console.log('Not signed in ')
            btnGoogleSignout.classList.add('gray');
            pWelcome.innerHTML = '';     
        }
    });   
}());