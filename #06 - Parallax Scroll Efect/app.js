
let sky = document.getElementById('sky');
let cerro = document.getElementById('cerro');
let estepa = document.getElementById('estepa');
let text = document.getElementById('text');
let moon = document.getElementById('moon');
let btn = document.getElementById('btn');
let sol = document.getElementById('sol');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    sol.style.left = value * 0.5 + 'px';
   //sky.style.top = value * 0.5 + 'px'; 
    cerro.style.top = value * 0.5 + 'px';
    estepa.style.top = value * 0 + 'px';
    //text.style.marginRight = value * 0.5 + 'px';
    btn.style.marginTop = value * 1 + 'px';
    header.style.top = value * 0.5 + 'px';
})
