// const { Chart } = await import('chart.js');

// scrollbar

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href")
    return document.querySelector(id).offsetTop;
}


function nativeScroll (distanceFromTheTop) {

    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth"
    })
}


function scrollToSection(event){
    event.preventDefault()
    const distanceFromTheTop = getDistanceFromTheTop(event.target) -90;
    nativeScroll(distanceFromTheTop)
    
}

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
})  



//menu

console.log("oioi")

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this)
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = " ")
            :(link.style.animation = `navLinkFade 0.5 ease forwards {index/7 + 0.3}s`)
        });
    }

handleClick(){
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks()
}

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick)
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent()
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
)

mobileNavbar.init()

//carrossel

const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 0;
const interval = 3000; // Intervalo de tempo entre os slides (3 segundos)

function nextSlide() {
  counter++;
  if (counter >= images.length) {
    counter = 0;
  }
  slide.style.transform = `translateX(${-counter * 50}px)`; /* Ajuste o valor conforme a largura das imagens + espaço entre elas */
}

setInterval(nextSlide, interval);

//gráfico charset

let ctx = document.getElementById('chart').getContext('2d')
let chart = new Chart(ctx, {
//tipo de gráfico
    type: 'pie',

//dados p o gráfico
    data:{
        labels: ["Back-End", "Front-End"],
        datasets: [{
            label:"My first dataset",
            backgroundColor: [ 'rgba(71, 71, 86, 0.259)', '#23232e'],
            borderColor: 'rgb(0, 0, 0)',
            data: [70, 30],
        }]
    },
//opção de configuração
    options: {}
})

//gráfico charset 2

let cty = document.getElementById('chart2').getContext('2d')
let chart2 = new Chart(cty, {
//tipo de gráfico
    type: 'bar',

//dados p o gráfico
    data:{
        labels: ["Javascript", "Node.js", "React.js", "Express", "Jest", "JWT", ],
        datasets: [{
            label:"Pontuation",
            backgroundColor: [ 'rgb(255, 215, 0)', 'rgb(0,128,0)', 'rgb(192, 57, 43)', 'rgb(144, 238, 144)','rgb(0, 0, 205)', 'rgb(160, 32, 240)'  ],
            borderColor: 'rgb(0, 0, 0)',
            data: [83, 69, 50, 47, 40, 43],
        }]
    },
//opção de configuração
    options: {}
})

