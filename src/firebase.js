import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC4TCjWKD5uGLBJbIsXaOdJryperxzjMRs",
    authDomain: "e-clone-8a039.firebaseapp.com",
    databaseURL: "https://e-clone-8a039.firebaseio.com",
    projectId: "e-clone-8a039",
    storageBucket: "e-clone-8a039.appspot.com",
    messagingSenderId: "792955753732",
    appId: "1:792955753732:web:00f526fcebca60f6a0ac51",
    measurementId: "G-BMWSPEP1ZJ"
});


const auth = firebaseApp.auth();

export {auth};