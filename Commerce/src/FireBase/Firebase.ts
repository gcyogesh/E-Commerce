import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGLWJI_yZ2Udx8JkrVscNYuskWC2LGqoE",
  authDomain: "signin-8b40c.firebaseapp.com",
  projectId: "signin-8b40c",
  storageBucket: "signin-8b40c.appspot.com",
  messagingSenderId: "874111057141",
  appId: "1:874111057141:web:dbafe2e4b29fb20d9599bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider};
