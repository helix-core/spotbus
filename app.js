
        // Import the functions you need from the SDKs you need
        import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js'        
        import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js'
        import { getAuth,signInWithPopup,GoogleAuthProvider,onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'
        import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js'
        import { } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-installations.js"
    



        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries


        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyBV5_jzh6zerP7sMTGIkKl6AT4OcZM6VDs",
            authDomain: "spotbus-50165.firebaseapp.com",
            projectId: "spotbus-50165",
            storageBucket: "spotbus-50165.appspot.com",
            messagingSenderId: "899174977210",
            appId: "1:899174977210:web:2b5dd295688838f2f9fc83",
            measurementId: "G-39TS793HVY"
        };

        // Initialize Firebase
        const firebaseApp = initializeApp(firebaseConfig);
        const auth = getAuth(firebaseApp);
        const analytics = getAnalytics(firebaseApp);
        const provider = new GoogleAuthProvider();

        //Grab HTML Elements
        document.addEventListener('DOMContentLoaded', () => {
            const whenSignedIn = document.getElementById('whenSignedIn');
            const whenSignedOut = document.getElementById('whenSignedOut');

            const signInBtn = document.getElementById('signInBtn');
            const signOutBtn = document.getElementById('signOutBtn');

            const userDetails = document.getElementById('userDetails');
        
            /// Sign in event handlers

            signInBtn.onclick = () => {
                signInWithPopup(auth, provider)
                .then((result) => console.log(result))
                .catch((error) => console.log(error));
            };
            signOutBtn.onclick = () => auth.signOut();

            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // signed in
                    whenSignedIn.hidden = false;
                    whenSignedOut.hidden = true;
                    userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
                } else {
                    // not signed in
                    whenSignedIn.hidden = true;
                    whenSignedOut.hidden = false;
                    userDetails.innerHTML = '';
                }
            });
         
        });  