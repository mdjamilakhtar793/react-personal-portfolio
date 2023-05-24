import { initializeApp } from "firebase/app";
import { getFireStore } from "firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDHv9aHgC90eLjUlo0pxdGTWgSeNmO_caY",
  authDomain: "jamil-react-portfolio.firebaseapp.com",
  projectId: "jamil-react-portfolio",
  storageBucket: "jamil-react-portfolio.appspot.com",
  messagingSenderId: "511098983686",
  appId: "1:511098983686:web:e88965fb0af5851216fa87",
  measurementId: "G-1HFZ1CHWHD",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFireStore();
