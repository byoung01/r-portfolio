import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB7oX_9wk8_vAP20prvCvGgbRLeXyFm2lY",
  authDomain: "portfolio-contact-488ee.firebaseapp.com",
  projectId: "portfolio-contact-488ee",
  storageBucket: "portfolio-contact-488ee.appspot.com",
  messagingSenderId: "276631209054",
  appId: "1:276631209054:web:7cd8c16290098a9f26e0cf",
  measurementId: "G-1FSQ3P47JJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
