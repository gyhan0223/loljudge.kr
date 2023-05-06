const searchInput = document.querySelector('.search-bar input[type="text"]');
const searchButton = document.querySelector('.search-bar button[type="submit"]');

if (searchButton != null) {
searchButton.addEventListener('click', () => {
const searchTerm = searchInput.value.trim();
if (searchTerm !== '') {
window.location.href = `https://www.op.gg/summoner/userName=${searchTerm}`;
}
});
} else {
console.log("Search button not found");
}

const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach((link) => {
if (link.href === window.location.href) {
link.classList.add('active');
}
});

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
document.documentElement.setAttribute('data-theme', e.target.checked ? 'dark' : 'light');
}

toggleSwitch.addEventListener('change', switchTheme, false);

const themeSwitch = document.querySelector('.theme-switch-wrapper input[type="checkbox"]');
const themeSwitchText = document.querySelector('.theme-switch-wrapper em');
const themeSwitchButton = document.querySelector('.theme-switch-wrapper .switch');


themeSwitch.addEventListener('change', function(event) {
if (event.target.checked) {
themeSwitchText.textContent = 'Day';
const element = document.getElementById('element-id');
if (element) {
element.style.backgroundColor = 'red';
}  } else {
themeSwitchText.textContent = 'Night';
const element = document.getElementById('element-id');
if (element) {
element.parentNode.removeChild(element);
}  }
});