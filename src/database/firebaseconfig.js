import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBp1Q2xeUmd3I1TGk7Qy70D74f_VbGCbHE",
    authDomain: "graficos-a79c1.firebaseapp.com",
    projectId: "graficos-a79c1",
    storageBucket: "graficos-a79c1.appspot.com",
    messagingSenderId: "623850192734",
    appId: "1:623850192734:web:3ce3f83ea2c489037919cf",
    measurementId: "G-FXD60PNWN7"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
