// Управление настройками
let addSetting = document.querySelector('.header__menu-setting');
let popupSetting = document.querySelector('.popup__setting');
let backSetting= document.querySelector('.popup__setting-back');
addSetting.addEventListener('click', ()=> {
    popupSetting.classList.add('active');

});
backSetting.addEventListener('click', ()=> {
    popupSetting.classList.remove('active');
});

//  Управление историями
let addStories = document.querySelector('.header__menu-time');
let popupStories = document.querySelector('.popup__stories');
let backStories = document.querySelector('.popup__stories-back');
addStories.addEventListener('click', ()=> {
    popupStories.classList.add('active')
});
backStories.addEventListener('click', ()=> {
    popupStories.classList.remove('active')
});

// Вход в личный кабинет
let addMyOffice = document.getElementById('myoffice');
let office = document.getElementById('office');
let officeBack = document.querySelector('.office__back')
addMyOffice.addEventListener('click', ()=> {
    popupSetting.style.opacity = '0';
    popupSetting.style.transition = '.12s';
    popupSetting.style.display = 'none';      
    office.classList.add('active');  
});
officeBack.addEventListener('click', ()=> {    
    popupSetting.style.opacity = '1';
    popupSetting.style.transition = '.12s';
    popupSetting.style.display = 'flex';     
    office.classList.remove('active');
});

// Ссылка друзьям
let addMyFriends = document.getElementById('myFriends');
let friends = document.getElementById('friends');
let friendsBack = document.querySelector('.friends__back')
addMyFriends.addEventListener('click', ()=> {    
    popupSetting.style.opacity = '0';
    popupSetting.style.transition = '.12s';
    popupSetting.style.display = 'none';      
    friends.classList.add('active'); 
});
friendsBack.addEventListener('click', ()=> {    
    popupSetting.style.opacity = '1';
    popupSetting.style.transition = '.12s';
    popupSetting.style.display = 'flex';     
    friends.classList.remove('active');
});

// Управление кристалами
let addCrystal = document.querySelector('.header__menu-crystal');
let popupCrystal = document.querySelector('.popup__crystal');
let backCrystal = document.querySelector('#crystal-return');
let trait = document.querySelector('.popup__crystal-trait')
addCrystal.addEventListener('click', ()=> {
    popupCrystal.classList.add('active')
});
backCrystal.addEventListener('click', ()=> {
    popupCrystal.classList.remove('active')
});
trait.addEventListener('click', ()=> {
    popupCrystal.classList.remove('active')
});
// Оценка сайта
const stars = document.querySelectorAll('.appraisal__star');
let appraisalButton = document.querySelector('.appraisal__btn')
stars.forEach(star => {
    star.addEventListener('click', () => {
        const value = star.getAttribute('data-value');
        // Удаляем класс 'selected' у всех звезд
        stars.forEach(s => {
            s.classList.remove('selected');
            s.src = '../icons/star-white.png';
        });
        for (let i = 0; i < value; i++) {
            stars[i].src = '../icons/fulstar.png'; 
        }
    });
});
appraisalButton.addEventListener('click', () => {
    if (selectedValue) {
        fetch('/submit-rating', { // Замените '/submit-rating' на ваш URL сервера
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ rating: selectedValue }),
        })
        .then(response => {
            if (response.ok) {
                alert('Оценка успешно отправлена');
            } else {
                alert('Ошибка при отправке оценки');
            }
        })
        .catch(error => {
            alert('Ошибка:', error);
        });
    } else {
        alert('Пожалуйста, выберите оценку перед отправкой');
    }
});
let addMyappraisal = document.getElementById('my-appraisal');
let appraisal = document.getElementById('appraisal');
let appraisalBack = document.querySelector('.appraisal__back')
addMyappraisal.addEventListener('click', ()=> {    
    popupSetting.style.opacity = '0';
    popupSetting.style.transition = '.12s';
    popupSetting.style.display = 'none';      
    appraisal.classList.add('active'); 
});
appraisalBack.addEventListener('click', ()=> {    
    popupSetting.style.opacity = '1';
    popupSetting.style.transition = '.12s';
    popupSetting.style.display = 'flex';     
    appraisal.classList.remove('active');
});
// Условия использования
let addMyconditions = document.getElementById('my-conditions');
let conditions = document.getElementById('conditions');
let conditionsBack = document.querySelector('.conditions__back')
addMyconditions.addEventListener('click', ()=> {    
    popupSetting.style.opacity = '0';
    popupSetting.style.transition = '.12s';
    popupSetting.style.display = 'none';      
    conditions.classList.add('active'); 
});
conditionsBack.addEventListener('click', ()=> {    
    popupSetting.style.opacity = '1';
    popupSetting.style.transition = '.12s';
    popupSetting.style.display = 'flex';     
    conditions.classList.remove('active');
});
// Политика конфедициальности
let addMypolicy = document.getElementById('my-policy');
let policy = document.getElementById('policy');
let policyBack = document.querySelector('.policy__back')
addMypolicy.addEventListener('click', ()=> {    
    popupSetting.style.opacity = '0';
    popupSetting.style.transition = '.12s';
    popupSetting.style.display = 'none';      
    policy.classList.add('active'); 
});
policyBack.addEventListener('click', ()=> {    
    popupSetting.style.opacity = '1';
    popupSetting.style.transition = '.12s';
    popupSetting.style.display = 'flex';     
    policy.classList.remove('active');
});

// Смена темы