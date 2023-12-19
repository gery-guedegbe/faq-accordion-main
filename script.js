const button = document.querySelectorAll("#button");

button.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    const response = this.nextElementSibling;
    const plusIcon = this.querySelector("#icon-plus");
    const moinsIcon = this.querySelector("#icon-moins");

    if (response.style.maxHeight) {
      response.style.maxHeight = null;
      plusIcon.style.display = "block";
      moinsIcon.style.display = "none";
    } else {
      response.style.maxHeight = response.scrollHeight + "px";
      plusIcon.style.display = "none";
      moinsIcon.style.display = "block";
    }
  });
});
