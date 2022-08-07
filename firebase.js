import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyC8UgJ1qhhhMb-EK-qDcxnEo7bYQrg1BTI",
    authDomain: "fitless-338818.firebaseapp.com",
    projectId: "fitless-338818",
    storageBucket: "fitless-338818.appspot.com",
    messagingSenderId: "271365522856",
    appId: "1:271365522856:web:fa3ba42e3690b6da62499d"
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  export default firebase;