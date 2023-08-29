import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
const auth = getAuth();

// signup function
const signUpFunc = () => {
  createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
    .then((resolve) => {
      alert("signup successfully", resolve);
    })
    .catch((error) => {
      alert("error in signup", error);
    });
};

// login function
const logInFunc = () => {
  signInWithEmailAndPassword(auth, userEmail.value, userPassword.value)
    .then((resolve) => {
      alert("login successfully", resolve);
    })
    .catch((error) => {
      alert("error in login", error);
    });
};

// buttons
let signup = document.querySelector(".signUpButton");
let login = document.querySelector(".logInButton");
let logInChange = document.querySelector(".logInChange");
let signUpButtonChange = document.querySelector(".signUpButtonChange");
// divs
let signUpDiv = document.querySelector(".signup");
let logInDiv = document.querySelector(".login");
// infos
let userName = document.querySelector(".userName");
let userEmail = document.querySelector(".userEmail");
let userPassword = document.querySelector(".userPassword");
// body
let body = document.querySelector("body");
// thanks div
let thanks = document.querySelector(".thanks");

signup.addEventListener("click", signUpFunc);
login.addEventListener("click", logInFunc);

// signUpButtonChange
signUpButtonChange.addEventListener("click", () => {
  signUpDiv.style.display = "block";
  logInDiv.style.display = "none";
});
logInChange.addEventListener("click", () => {
  signUpDiv.style.display = "none";
  logInDiv.style.display = "block";
});
