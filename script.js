const panel_1 = document.querySelector(".panel_1");
const panel_2 = document.querySelector(".panel_2");
const panel_3 = document.querySelector(".panel_3");
const panel_4 = document.querySelector(".panel_4");
const panel_5 = document.querySelector(".panel_5");
const active = document.querySelector("active");


panel_1.addEventListener("click",()=>{
    removeActiveClasses();
    panel_1.classList.add("active");
})

function removeActiveClasses(){
    panel_2.classList.remove("active");
    panel_3.classList.remove("active");
    panel_4.classList.remove("active");
    panel_5.classList.remove("active");
}

panel_2.addEventListener("click",()=>{
    removeActiveClasses2();
    panel_2.classList.add("active");
})

function removeActiveClasses2(){
    panel_1.classList.remove("active");
    panel_3.classList.remove("active");
    panel_4.classList.remove("active");
    panel_5.classList.remove("active");
}

panel_3.addEventListener("click",()=>{
    removeActiveClasses3();
    panel_3.classList.add("active");
})

function removeActiveClasses3(){
    panel_1.classList.remove("active");
    panel_2.classList.remove("active");
    panel_4.classList.remove("active");
    panel_5.classList.remove("active");
}

panel_4.addEventListener("click",()=>{
    removeActiveClasses4();
    panel_4.classList.add("active");
})

function removeActiveClasses4(){
    panel_2.classList.remove("active");
    panel_3.classList.remove("active");
    panel_1.classList.remove("active");
    panel_5.classList.remove("active");
}

panel_5.addEventListener("click",()=>{
    removeActiveClasses5();
    panel_5.classList.add("active");
})

function removeActiveClasses5(){
    panel_1.classList.remove("active");
    panel_2.classList.remove("active");
    panel_3.classList.remove("active");
    panel_4.classList.remove("active");
}