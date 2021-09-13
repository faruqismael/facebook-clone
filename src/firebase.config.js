import { initializeApp } from "@firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyw2KdEGcaAZvrtQv3MDPqI-CRNWH0q-4",
  authDomain: "facebook-clone-7f3de.firebaseapp.com",
  projectId: "facebook-clone-7f3de",
  storageBucket: "facebook-clone-7f3de.appspot.com",
  messagingSenderId: "476541659208",
  appId: "1:476541659208:web:7b20de90a68870d2e4107d",
  measurementId: "G-FY101K2GRQ",
};

const firebaseApp = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const auth = getAuth();
