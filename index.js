let images = document.querySelectorAll('[hiddenElement]')
console.log(images)
window.addEventListener('scroll', () => {
    for (let i = 0; i < images.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = images[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            images[i].classList.add("visible");
        }
    }
})

for (let i = 0; i < images.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = images[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
        images[i].classList.add("visible");
    }
}

// li active
let liClick = document.querySelectorAll('.headLi')
liClick.forEach(element => {
    element.addEventListener('click', (e) => {
        disable()
        e.target.classList.add('activeLi')
    })

});
const disable = () => {
    liClick.forEach(element => {
        element.classList.remove('activeLi')
    });
}
let toggleBtn = document.querySelector('.telMenu')
let navBar = document.querySelector('.head_nav')
let ulMenu = document.querySelector('.menu_ul')
toggleBtn.addEventListener('click', () => {
    if (toggleBtn.classList.contains('active')) {
        toggleBtn.classList.remove('active')
        navBar.classList.remove('active')
    } else {
        toggleBtn.classList.add('active')
        navBar.classList.add('active')
        ulMenu.classList.add('active')
    }
})
