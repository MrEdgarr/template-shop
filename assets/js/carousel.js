document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.querySelectorAll('.carousel-item ')
    var pagination = document.querySelectorAll('.controls-pagination')
    const productContainer = document.querySelectorAll('.carousel_js')
    const nxtBtn = document.querySelectorAll('.next')
    const preBtn = document.querySelectorAll('.prev')

    // ******* Carousel Home Start 
    for (let i = 0; i < pagination.length; i++) {
        pagination[i].onclick = () => {
            var vitrislide = 0;
            var element = pagination[i]
            for (let i = 0; element = element.previousElementSibling; vitrislide++) { //current position
            }
            console.log(vitrislide);
            for (let i = 0; i < carousel.length; i++) {
                carousel[i].classList.remove('active');
                carousel[vitrislide].classList.add('active');
            }
            for (let i = 0; i < pagination.length; i++) {
                pagination[i].classList.remove('active');
                pagination[vitrislide].classList.add('active');
            }
        }
    }
    // Auto slider
    setInterval(function () {
        var slider_Auto = document.querySelector('.carousel-item.active')
        var location_slide = 0;

        for (let i = 0; slider_Auto = slider_Auto.previousElementSibling; location_slide++) { //current position
        }
        for (let i = 0; i < carousel.length; i++) {
            carousel[i].classList.remove('active')
        }
        for (let k = 0; k < pagination.length; k++) {
            pagination[k].classList.remove('active')
        }
        if (location_slide === carousel.length - 1) {
            carousel[0].classList.add('active');
            pagination[0].classList.add('active')
        }
        else {
            //Chuyen sang slide tiep theo
            carousel[location_slide].nextElementSibling.classList.add('active')
            pagination[location_slide].nextElementSibling.classList.add('active')
        }
    }, 3000)
    // ******* Carousel Home End 



    // Slider item product start
    productContainer.forEach((item, i) => {
        let dimensition = item.getBoundingClientRect();
        let containerWidth = dimensition.width;
        nxtBtn[i].onclick = () => {
            item.scrollLeft += containerWidth
            console.log('ok');
        }
        preBtn[i].onclick = () => {
            item.scrollLeft -= containerWidth
            console.log('ok');
        }
    })
    // Slider item product end





    const singleProductView = document.querySelectorAll('.carousel-item img');
    const productSlider = document.querySelector('.product-slider');
    for (let i = 0; i < singleProductView.length; i++) {
        singleProductView[i].onclick = () =>{
            let productImg = singleProductView[i].src;
            productSlider.innerHTML = `<img src="${productImg}" alt="card image cap">`
        }
    }
})


