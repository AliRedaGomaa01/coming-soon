function changeLanguage() {
  const arSection = document.getElementById("ar-section-container");
  const enSection = document.getElementById("en-section-container");
  const languageToggle = document.getElementById("language-toggle");

  if (arSection.classList.contains("hidden")) {
    arSection.classList.remove("hidden");
    enSection.classList.add("hidden");
    languageToggle.textContent = "En";
  } else {
    arSection.classList.add("hidden");
    enSection.classList.remove("hidden");
    languageToggle.textContent = "Ar";
  }
}


