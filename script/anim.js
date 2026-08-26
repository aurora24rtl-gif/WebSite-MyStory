// ANIMATION MAIN BUTTON
const mainBtn = document.querySelector('.link-message');
const text = mainBtn.textContent;

mainBtn.innerHTML = '';

text.split('').forEach((char, index) => {
  const span = document.createElement('span');

  span.textContent = char === ' ' ? '\u00A0' : char;
  span.style.setProperty('--delay', `${index * 0.05}s`);
  mainBtn.appendChild(span);
});
