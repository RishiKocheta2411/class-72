import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDVX9CdMrdpHSPnU0wLkH-MviAU1oKpnNo",
  authDomain: "wily-88d14.firebaseapp.com",
  projectId: "wily-88d14",
  storageBucket: "wily-88d14.appspot.com",
  messagingSenderId: "804606668804",
  appId: "1:804606668804:web:66617cd09bc0b76f1ac551"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
