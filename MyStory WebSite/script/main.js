const themeBtn = document.querySelector('.icon-theme');
const themeImg = themeBtn.querySelector('img');

const sunIcon = 'img/icon/svg/theme/sun.svg';
const moonIcon = 'img/icon/svg/theme/moon.svg';

themeBtn.addEventListener('click', function(event)
{
  event.preventDefault();

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    themeImg.src = sunIcon;
    themeImg.alt = 'Day theme';
  } 
  else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeImg.src = moonIcon;
    themeImg.alt = 'Night theme';
  }
});