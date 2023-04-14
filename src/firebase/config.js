import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCRFVhrrVdD4gSUwJS-QhErArvnHwiwCZo",
	authDomain: "floppy-ecommerce.firebaseapp.com",
	projectId: "floppy-ecommerce",
	storageBucket: "floppy-ecommerce.appspot.com",
	messagingSenderId: "260299435084",
	appId: "1:260299435084:web:4359c6ed399078f25798e9",
};

initializeApp(firebaseConfig);
const db = getFirestore();

export default db; 

