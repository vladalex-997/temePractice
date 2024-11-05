function toggleImageVisibility() {
  const image = document.getElementById("myImage");
  if (image.style.display === "none") {
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
}
