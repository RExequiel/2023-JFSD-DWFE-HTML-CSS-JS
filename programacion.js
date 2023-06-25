const content = document.getElementById("content");
const buttonDark = document.querySelector(".button");

function changeBackground() {
  buttonDark.addEventListener("click", (e) => {
    if (content.classList.value == "container") {
      content.classList.remove("container");
      content.classList.add("container-dark");
      buttonDark.innerHTML = "&#127773;";
    } else {
      content.classList.remove("container-dark");
      content.classList.add("container");
      buttonDark.innerHTML = "&#127770;";
    }
  });
}

changeBackground();

function mostrarModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}

function cerrarModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
