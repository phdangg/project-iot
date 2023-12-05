import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkZ8y0M-77Xchh3ANGBpYmCQn8TGy6qYU",
  authDomain: "project-iot-3da59.firebaseapp.com",
  databaseURL: "https://project-iot-3da59-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-iot-3da59",
  storageBucket: "project-iot-3da59.appspot.com",
  messagingSenderId: "684178928187",
  appId: "1:684178928187:web:c89c75e2173e48af64621e",
  measurementId: "G-Y6MR7JM3ZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

