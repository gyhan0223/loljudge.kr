const searchInput = document.querySelector('.search-bar input[type="text"]');
const searchButton = document.querySelector('.search-bar button[type="submit"]');

searchButton.addEventListener('click', () => {
const searchTerm = searchInput.value.trim();
if (searchTerm !== '') {
    window.location.href = `https://www.op.gg/summoner/userName=${searchTerm}`;
}
});

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
