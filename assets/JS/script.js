function ShowMenu() {
    let menuMobile = document.querySelector('.mobile-ul')
    if( menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "assets/images/menu.svg"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "assets/images/close.svg"
    }
}