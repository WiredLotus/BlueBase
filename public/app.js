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

    // Get site elements
    /*
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignup = document.getElementById('btnSignup');
    const btnLogout = document.getElementById('btnLogout');
    */
    const pWelcome = document.getElementById('pWelcome');
    /*
    // Login button event
    btnLogin.addEventListener('click', e => {
        // Get email and password
        const email = txtEmail.value; 
        const password = txtPassword.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
    });

    // Signup button event
    btnSignup.addEventListener('click', e => {
        // Get email and password
        const email = txtEmail.value; 
        const password = txtPassword.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
    });

    // Logout button event
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    });
    */
    var provider = new firebase.auth.GoogleAuthProvider();   
    var userName = ''  
    // Google Sign in event
    btnGoogleSignin.addEventListener('click', e => {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user.displayName);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    });

    // Google Sign out event
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
            //btnLogout.classList.remove('gray');
            btnGoogleSignout.classList.remove('gray');
            pWelcome.innerHTML = 'A salute to you '+currUser.displayName+'!';     
        } else {
            console.log('not logged in')
            //btnLogout.classList.add('gray');
            btnGoogleSignout.classList.add('gray');
            pWelcome.innerHTML = '';     
        }
    });   
}());