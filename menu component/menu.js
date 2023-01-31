const menu = document.querySelector('.menu');
const links = menu.querySelectorAll('a');
const slider = menu.querySelector('.slider');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    const width = link.getBoundingClientRect().width;
    const left = link.offsetLeft;

    slider.style.width = `${width}px`;
    slider.style.transform = `translateX(${left}px)`;
  });
});

menu.addEventListener('mouseleave', () => {
  slider.style.width = '';
  slider.style.transform = '';
});
