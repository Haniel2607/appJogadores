import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCvoZFLx-BtcvFVPSKH44VuWXm0STu7zaM",
  authDomain: "appjogadores.firebaseapp.com",
  projectId: "appjogadores",
  storageBucket: "appjogadores.appspot.com",
  messagingSenderId: "271375955815",
  appId: "1:271375955815:web:b3ef3f07816feb80c421c2"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);