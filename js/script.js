// Управление историями
let addStories = document.querySelector('.header__menu-setting');
let popupStories = document.querySelector('.popup__setting');
let backStories = document.querySelector('.popup__setting-back');
addStories.addEventListener('click', ()=> {
    popupStories.classList.add('active')
});
backStories.addEventListener('click', ()=> {
    popupStories.classList.remove('active')
});
// Управление личным кабинетом 
let addSetting = document.querySelector('.header__menu-time');
let popupSetting = document.querySelector('.popup__stories');
let backSetting = document.querySelector('.popup__stories-back');
addSetting.addEventListener('click', ()=> {
    popupSetting.classList.add('active')
});
backSetting.addEventListener('click', ()=> {
    popupSetting.classList.remove('active')
});
// Управление кристалами
let addCrystal = document.querySelector('.header__menu-crystal');
let popupCrystal = document.querySelector('.popup__crystal');
let backCrystal = document.querySelector('#crystal-return');
addCrystal.addEventListener('click', ()=> {
    popupCrystal.classList.add('active')
});
backCrystal.addEventListener('click', ()=> {
    popupCrystal.classList.remove('active')
});