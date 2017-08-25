import * as firebase from "firebase";

//Initialise firebase
var config = {
  apiKey: "AIzaSyBrLOyRxAH_H2JKZZlMNAov5nyQBgTfVGk",
  authDomain: "global-poler.firebaseapp.com",
  databaseURL: "https://global-poler.firebaseio.com",
  projectId: "global-poler",
  storageBucket: "",
  messagingSenderId: "806403697914"
};

firebase.initializeApp(config);

export default firebase;
