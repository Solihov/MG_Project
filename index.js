let headerMainImg = document.querySelector('.headerMainImg')

window.onload = () => {
    headerMainImg.classList.add('visible')
}

var images = document.querySelectorAll('[hiddenElement]')
console.log(images)
window.addEventListener('scroll', () => {
    for (var i = 0; i < images.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = images[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            images[i].classList.add("visible");
        }
    }
})

for (var i = 0; i < images.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = images[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
        images[i].classList.add("visible");
    }
}

// li active
var liClick = document.querySelectorAll('.headLi')
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

