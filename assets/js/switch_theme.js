let root = document.documentElement;
let toggle_button = document.getElementById("toggle-theme");

// get and init theme

if (!sessionStorage.getItem("theme"))
  sessionStorage.setItem(
    "theme",
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

switch_theme(sessionStorage.getItem("theme"));

// methods

/**
 * Switches the theme to the theme specified
 * @param {"dark" | "light"} theme
 */
function switch_theme(theme) {
  let toggle_icon_light = document.getElementById("toggle-theme-img-light");
  let toggle_icon_dark = document.getElementById("toggle-theme-img-dark");

  if (theme === "dark") {
    root.classList.remove("theme-light");
    root.classList.add("theme-dark");
    toggle_icon_light.style.display = "block";
    toggle_icon_dark.style.display = "none";
  } else if (theme === "light") {
    root.classList.add("theme-light");
    root.classList.remove("theme-dark");
    toggle_icon_light.style.display = "none";
    toggle_icon_dark.style.display = "block";
  }
}

/** Toggles the theme */
function toggle_theme() {
  let theme = sessionStorage.getItem("theme") === "dark" ? "light" : "dark"; // swap theme
  sessionStorage.setItem("theme", theme);
  switch_theme(theme);
}
