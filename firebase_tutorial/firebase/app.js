import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";

// firebase--n database-ees shaardlagatai function-uudiig tataj awna.
import {
  getDatabase,
  get,
  ref,
  child,
  onChildChanged,
  push,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

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

let users = [];
const nameEl = document.getElementById("name");
// Initialize Firebase
console.log("Started.");

//firebase-rvv tohirgoo damjuulaad
const app = initializeApp(firebaseConfig);
console.log("Stopped.");
const db = getDatabase(app);
const dbRef = ref(db);

onChildChanged(
  ref(db, "users/", (snapshot) => {
    if (snapshot.exists()) {
      console.log("Child changed", snapshot);
      const changedUser = snapshot.val();
      const findIndex = users.findIndex((user) => user.id === changedUser.id);
      users[findIndex] = changedUser;
      drawUsers();
    }
  })
);

function saveUser(name, id, color = "violet") {
  push(child(dbRef, "users/"), {
    id: id,
    color: color,
    name: name,
  })
    .then(() => {
      alert("successfully saved!!!");
    })
    .catch(() => console.log("error"));
}

//medeelel awsnii daraa ogogdol-oo awna.
function getUsers() {
  // child ni dbRef dotorh users JSON-iig zaaj bga.
  get(child(dbRef, "users/"))
    .then((snapshot) => {
      // herwee snapshot ni TRUE bol...
      if (snapshot.exists()) {
        snapshot.forEach((doc) => {
          // dahiad object irne.
          console.log("data received", doc);
          //   ter object array[] luugaa push-lene. val()-aar ogogdol-iig ogno.
          users.push(doc.val());
        });
        drawUsers();
      }
      //   console.log("response data", snapshot);
    })
    .catch((error) => console.log("DB-error", error));
  console.log("DB started.", db);
}
getUsers();

function drawUsers() {
  const usEl = document.getElementById("user");
  let userList = "";
  users.forEach((user) => {
    userList += `<p style="color: ${user.color}">name: ${user.name}</p>`;
  });
  usEl.innerHTML = userList;
}

const btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", () => {
  const name = nameEl.value;
  saveUser(name, users.length);
});
