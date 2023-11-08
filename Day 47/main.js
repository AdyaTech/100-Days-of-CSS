const container = document.querySelector('.frame')

for(let i=1;i <= 400;i++){
    addEle(i);
}



const px = document.querySelectorAll('.pixel')
px.forEach(e => {
    e.addEventListener('click', ()=>{
        e.classList.toggle('active')
    })
});

function addEle(i) {
    const pixel = document.createElement('div')
    container.appendChild(pixel)
    pixel.className = 'pixel'
    
    //to create space invader logo
    if(i == 130 || i == 131 || i == 149 || i == 150 || i == 151 || i == 152 || i == 168 || i == 169 || i == 170 || i == 171 || i == 172 || i == 173 || i == 187 || i == 188 || i == 190 || i == 191 || i == 193 || i == 194 || i == 207 || i == 208 || i == 209 || i == 210 || i == 211 || i == 212 || i == 213 || i == 214 || i == 229 || i == 232 || i == 248 || i == 250 || i == 251 || i == 253 || i == 267 || i == 269 || i == 272 || i == 274){
        pixel.classList.add('active')
    }
}