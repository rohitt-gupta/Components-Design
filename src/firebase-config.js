import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyDKoT0IQNQYaAXQH57htj7t4a2MkVGD_OU",
	authDomain: "react-auth-7e594.firebaseapp.com",
	projectId: "react-auth-7e594",
	storageBucket: "react-auth-7e594.appspot.com",
	messagingSenderId: "435197592068",
	appId: "1:435197592068:web:60b3d7ba713799d32eeb51",
	measurementId: "G-SHCP8CR2M1",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
