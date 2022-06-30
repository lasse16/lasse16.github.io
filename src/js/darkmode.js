const localStorageName = "darkModeEnabled";
const lightTheme = "light-theme";
const darkTheme = "dark-theme";

let darkMode = localStorage.getItem(localStorageName);
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const sunIcon = document.querySelector("#sun-icon");
const moonIcon = document.querySelector("#moon-icon");

const enableDarkMode = () => {
  document.body.classList.remove(lightTheme);
  document.body.classList.add(darkTheme);
  localStorage.setItem(localStorageName, true);
  setDisplayedIconSun();
};

const disableDarkMode = () => {
  document.body.classList.remove(darkTheme);
  document.body.classList.add(lightTheme);
  localStorage.removeItem(localStorageName);
  setDisplayedIconMoon();
};

const setDisplayedIconSun = () => {
  moonIcon.style.gridRow = "";
  sunIcon.style.gridRow = "1";
};

const setDisplayedIconMoon = () => {
  sunIcon.style.gridRow = "";
  moonIcon.style.gridRow = "1";
};

if (darkMode) {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem(localStorageName);

  if (darkMode) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});
