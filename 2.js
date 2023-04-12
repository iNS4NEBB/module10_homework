const btn2 = document.querySelector('.btn2');

// Размер экрана девайса\монитора
const windowScreenWidth = window.screen.width;
const windowScreenHeight = window.screen.height;

// Размер экрана с учётом полосы прокрутки
const windowInnerWidth = window.innerWidth;
const windowInnerHeight = window.innerHeight;

// Размер экрана без учёта полосы прокрутки
const clientWidth = document.documentElement.clientWidth;
const clientHeight = document.documentElement.clientHeight;

btn2.addEventListener('click', () => {

window.alert(`Размер экрана девайса или монитора: ${windowScreenWidth}px x ${windowScreenHeight}px
Размер экрана с учётом полосы прокрутки: ${windowInnerWidth}px x ${windowInnerHeight}px
Размер экрана без учёта полосы прокрутки: ${clientWidth}px x ${clientHeight}px`);

});