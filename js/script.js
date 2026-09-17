
const imagesAvcLien = document.querySelectorAll(".imageShadow");

const estVisible = new IntersectionObserver((entres) =>{
    entres.forEach(vue =>{
        if (vue.isIntersecting){
            vue.target.classList.add("visible");
        } else {
            vue.target.classList.remove("visible");
        }
    });
},{
    threshol:0.3
});

imagesAvcLien.forEach(image => estVisible.observe(image));