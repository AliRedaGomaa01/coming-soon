function loadSection(sectionName, sectionContainerId = 'section-container' ) {
  fetch(`sections/${sectionName}.html`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Section not found");
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById(sectionContainerId).innerHTML += html;
    })
    .catch((error) => {
      console.log(`Error loading section ${sectionName}:`, error);
    });
}

async function fillContent() {
  setTimeout(() => {
    loadSection("logo");
  }, 50);
  setTimeout(() => {
    loadSection("english-content-mobile" , 'en-section-container');
  }, 100);
  setTimeout(() => {
    loadSection("arabic-content-mobile", 'ar-section-container');
  }, 100);
  setTimeout(() => {
    loadSection("english-content-tablet" , 'en-section-container');
  }, 100);
  setTimeout(() => {
    loadSection("arabic-content-tablet", 'ar-section-container');
  }, 100);
}

fillContent();

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


