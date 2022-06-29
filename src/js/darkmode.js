const localStorageName = "darkModeEnabled";
const lightTheme = "light-theme";
const darkTheme = "dark-theme";

let darkMode = localStorage.getItem(localStorageName);
const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableDarkMode = () => {
  document.body.classList.remove(lightTheme);
  document.body.classList.add(darkTheme);
  localStorage.setItem(localStorageName, true);
};

const disableDarkMode = () => {
  document.body.classList.remove(darkTheme);
  document.body.classList.add(lightTheme);
  localStorage.removeItem(localStorageName);
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
