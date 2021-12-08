const db = firebase.firestore();
let tasks = [];
let currentUser = {};

function getUser() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      currentUser.uid = user.uid;
      let userLabel = document.getElementById("usuarioLogin");
      userLabel.innerHTML = user.email;
    } else {
      swal
        .fire({
          icon: "success",
          title: "Redirecionando para a tela de autenticação",
        })
        .then(() => {
          setTimeout(() => {
            window.location.replace("login.html");
          }, 1000);
        });
    }
  });
}

var slideIndex = 0;
Slides();

function Slides() {
  var i;
  var slides = document.getElementsByClassName("carrossel");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(Slides, 2500);
}

window.onload = function () {
  getUser();
};
