const profiles = document.querySelectorAll('.profile');
const detail = document.querySelector('.detail');
const Close = document.querySelector('.close');

profiles.forEach(profile =>{
    profile.addEventListener('click',()=>{
        detail.classList.toggle('active');
    })
})

Close.addEventListener('click', ()=>{
    detail.classList.toggle('active');
})

