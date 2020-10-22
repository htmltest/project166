function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    });
}

var links = document.querySelectorAll('.links-item a');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
        scrollTo(document.querySelector(this.getAttribute('href')));
        e.preventDefault();
    });
}