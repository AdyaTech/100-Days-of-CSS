const button = document.querySelectorAll('.button');

var child =1;
button.forEach((e)=>{
    e.addEventListener('click', ()=>{
        document.querySelector('.card:nth-child(' + child +')').classList.remove('active');
        document.querySelector('.card:nth-child(' + child +')').classList.add('inactive');
        if(child == 3){
            child=0;
        }
        child++;
        document.querySelector('.card:nth-child(' + child +')').classList.add('active');
        document.querySelector('.card:nth-child(' + child +')').classList.remove('inactive');
    
    });
    
});

