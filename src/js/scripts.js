const darkSwitch = document.querySelector('.dark-mode-switch');
const lightSwitch = document.querySelector('.light-mode-switch');
const body = document.querySelector('body');
const initialTheme = localStorage.getItem('theme');

function darkMode() {
  body.dataset.theme = 'dark';
  darkSwitch.style.display = 'none';
  lightSwitch.style.display = 'block';
  localStorage.setItem('theme', 'dark');
}

function lightMode() {
  body.dataset.theme = 'light';
  lightSwitch.style.display = 'none';
  darkSwitch.style.display = 'block';
  localStorage.setItem('theme', 'light');
}

darkSwitch.addEventListener('click', darkMode);

darkSwitch.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    darkMode();
  }
});

lightSwitch.addEventListener('click', lightMode);

lightSwitch.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    lightMode();
  }
});

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    if (e.matches) {
      darkMode();
    } else {
      lightMode();
    }
  });

if (initialTheme === 'dark') {
  darkMode();
} else if (initialTheme === 'light') {
  lightMode();
} else if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  darkMode();
}

const wait = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

async function welcome() {
  await wait(2000);
  console.log('👋 thanks for stopping by.');
  await wait(2000);
  console.log('I designed and built this site by hand (and keyboard).');
  await wait(2000);
  console.log(
    'It uses the static site generator Eleventy and is hosted on Netlify.'
  );
  await wait(2000);
  console.log('See the code at https://github.com/hohiemer/hohiemer.com');
}

welcome();
