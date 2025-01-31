const data = [
    {
        id:1,
        image: './images/Layer\ 3.png',
        title: 'Fig. 1 (plant)',
        text: "Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.",

    },
    {
        id:2,
        image: './images/Layer\ 2.png',
        title: 'Fig. 2 (flower)',
        text: "Прежде всего, синтетическое тестирование влечет за собой процесс внедрения и модернизации условий."
    },
    {
        id:3,
        image: './images/Layer\ 4.png',
        title: "Fig. 3 (leaf)",
        text: "Лишь непосредственные участники прогресса неоднозначны и будут в равной степени предоставлены сами себе для работы."
    },
    {
        id:4,
        image: './images/Layer\ 1\ 1.png',
        title: "Fig. 4 (wood)",
        text: "Базовый вектор развития не даёт нам иного выбора, кроме определения новых предложений."
    }
]

const slider = document.querySelector('.slider')
for (let i = 0;i<data.length;i++){
    let info = document.createElement('div')
    info.className = "info"
    let img = document.createElement('div')
    img.className = "img"
    let image = document.createElement('img')
    image.src = data[i].image
    let info_item = document.createElement('div')
    info_item.className = "info_item"
    let span = document.createElement('span')
    span.innerHTML = data[i].title
    let p = document.createElement('p')
    p.textContent = data[i].text
    let btn = document.createElement("button")
    btn.innerHTML = "Подробнее"

    img.append(image)
    info_item.append(...[span,p,btn])
    info.append(...[img,info_item])
    slider.append(info)
}

const left = document.querySelector('.left')
const right = document.querySelector('.right')
let amount = 1;
let change = 0;
let currentWidth = document.documentElement.clientWidth;

left.addEventListener('click', () => {
    if (currentWidth < 660 ){

    if (change == -651){
        amount=1
        change = 0
        slider.style.marginLeft = 0

    }
    else{
        change-=217

        slider.style.marginLeft = `${change}px`;
        amount+=1
    }
    }
    else if(660 < currentWidth && currentWidth <1000){
        if (change <= -960.3){
            amount=1
            change = 0
            slider.style.marginLeft = 0
    
        }
        else{
            change-=320.1
    
            slider.style.marginLeft = `${change}px`;
            amount+=1
        }
    }
    else{

        if (change == -1200){
            amount=1
            change = 0
            slider.style.marginLeft = 0
    
        }
        else{
            change-=400
    
            slider.style.marginLeft = `${change}px`;
            amount+=1
        }
    }
   
   
});
right.addEventListener('click', () => {
   
    if (currentWidth < 660 ){

        if (change == 651){
            amount=1
            change = 0
            slider.style.marginLeft = 0
    
        }
        else{
            change+=217
    
            slider.style.marginLeft = `${change}px`;
            amount+=1
        }
        }
        else if(660 < currentWidth && currentWidth <1000){
            if (change == 0){
                amount=1
                change = 0
                slider.style.marginLeft = 0
        
            }
            else{
                change+=320.1
        
                slider.style.marginLeft = `${change}px`;
                amount+=1
            }
        }
        else{
    
            if (change == 0){
                amount=1
                change = 0
                slider.style.marginLeft = 0
        
            }
            else{
                change=400
        
                slider.style.marginLeft = `${change}px`;
                amount+=1
            }
        }
});

let btn = document.querySelector('.burger')

const burger_menu = document.querySelector('.burger_menu')
btn.addEventListener('click',()=>{
    btn.children[0].classList.toggle('act_line1')
    btn.children[1].classList.toggle('act_line2')
    btn.children[2].classList.toggle('act_line3')
    burger_menu.classList.toggle('act_burger_menu')
})