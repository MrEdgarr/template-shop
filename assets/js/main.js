document.addEventListener('DOMContentLoaded', function () {
    var Show_menu = document.querySelector('.navbar-menu')
    var Submenu = document.querySelector('.submenu')
    var Submenu_in = document.querySelector('.submenu ul')
    var Navbar_togger = document.querySelector('.navbar-togger')
    var Click_cart = document.querySelector('.dropdown a')
    var Dropdown_cart = document.querySelector('.dropdown-menu')
    var Search = document.querySelector('.search .fa-search')
    var Top_Search = document.querySelector('.top-search')


    //BARS
    Navbar_togger.innerHTML = '<i class="fa fa-bars "></i>'
    var check = false;
    Navbar_togger.onclick = () => {
        if (check == true) {
            Show_menu.classList.remove('show_menu');
            Navbar_togger.innerHTML = '<i class="fa fa-bars "></i>'
            check = false
        } else {
            Show_menu.classList.add('show_menu');
            Navbar_togger.innerHTML = '<i class="fa fa-xmark "></i>'
            check = true
        }
    }


    //SUBMENU
    Submenu.onclick = function () {
        Submenu_in.classList.toggle('in');
    }
    // Submenu.onmouseout = () => {
    //     Submenu_in.classList.remove('in')
    // }


    //CART
    Click_cart.onclick = () => {
        Dropdown_cart.classList.toggle('d-block')
    }
    //SEARCH
    Search.onclick = () => {
        Top_Search.classList.toggle('d-block')
        var Close = document.querySelector('.fa-times')
        Close.onclick = () => {
            Top_Search.classList.remove('d-block')
        }
    }



    window.addEventListener('scroll', function () {
        var navbar_Area = document.querySelector('.navbar-area')


        if (window.pageYOffset >= 300) {
            navbar_Area.classList.add('background-header');
        }
        else {
            navbar_Area.classList.remove('background-header');

        }
        // window.pageYOffset >= 300 ? navbar_Area.classList.add('background-header') : navbar_Area.classList.remove('background-header');

    })


    const section = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-menu .navbar-nav>li>a')


    window.onscroll = () => {
        Submenu_in.classList.remove('in');
        Dropdown_cart.classList.remove('d-block');
        Show_menu.classList.remove('show_menu');
        Top_Search.classList.remove('d-block')

        section.forEach(sec => {

            let top = window.scrollY;
            let height = sec.offsetHeight;
            let offset = sec.offsetTop - 150;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('.navbar-menu .navbar-nav>li>a[href*=' + id + ']').classList.add('active');
                });
            };

        });

    }
})



loader = () => {
    document.querySelector('.loader-container').classList.add('fade-out');
}
fadeOut = () => {
    setInterval(loader, 2000);
}
window.onload = fadeOut;