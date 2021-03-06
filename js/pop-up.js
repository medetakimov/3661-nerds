var open = document.querySelector(".pop-up-open");
var popup = document.querySelector(".pop-up");
var close = document.querySelector(".pop-up-close");

var form = document.querySelector(".feedback-form");
var login = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=mail]");
var text = popup.querySelector("[name=textarea]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localstorage.setItem("login");
} catch (err) {
  isStorageSupport= false;
}


open.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("pop-up-show");

  if (storage) {
    login.value = storage;
    mail.focus();
  } else {
    login.focus();
  }

  login.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("pop-up-show");
  popup.classList.remove("pop-up-error");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !mail.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("pop-up-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("pop-up-error");
  } else {
    if (isStorageSupport) {
      localstorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("pop-up-show")) {
      popup.classList.remove("pop-up-show");
      popup.classList.remove("pop-up-error");
    }
  }
});
