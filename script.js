function toggleMode() {
  const html = document.documentElement; // documentElement representa HTML
  const imgAvatar = document.querySelector("#profile > img");

  html.classList.toggle("light");

  if (html.classList.contains("light")) {
    // imgAvatar.src = "./assets/avatar-light.png";
    imgAvatar.setAttribute("src", "./assets/avatar-light.png");
    imgAvatar.setAttribute(
      "alt",
      "Foto de Lucas sorrindo com barba, terno preto e fundo preto"
    );
  } else {
    // imgAvatar.src = "./assets/avatar.png";
    imgAvatar.setAttribute("src", "./assets/avatar.png");
    imgAvatar.setAttribute(
      "alt",
      "Foto de Lucas sorrindo com barba, terno preto e fundo amarelo"
    );
  }
}
