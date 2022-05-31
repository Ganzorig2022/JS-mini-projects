import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEEQr9dw-lGNXdiudy852eBDoGzyi6Xgc",
  authDomain: "fir-leap.firebaseapp.com",
  projectId: "fir-leap",
  storageBucket: "fir-leap.appspot.com",
  messagingSenderId: "373345863908",
  appId: "1:373345863908:web:7f98d7febb2243ff9c44f1",
  measurementId: "G-YCXKCX0XD6",
};

const app = initializeApp(firebaseConfig);

const btn = document.getElementById("btn");
const btnLogin = document.getElementById("btnLogin");

const auth = getAuth(app);

function createUser() {
  const email = document.getElementById("nameInput").value;
  const password = document.getElementById("passInput").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Aldaa zaalaa: ", errorCode, errorMessage);
      // ..
    });
}

btn.addEventListener("click", createUser);

function loginUser() {
  const email = document.getElementById("nameInput").value;
  const password = document.getElementById("passInput").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user, "amjilttai newterlee");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
btnLogin.addEventListener("click", loginUser);
