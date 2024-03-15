$(document).ready( () => {

    let navText = ["<i class = 'bx bx-chevron-left'></i>", "<i class = 'bx bx-chevron-right'></i>"]
    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        autoplay:true,
        autoplayTimeout:4000,
        nav:true,
        navText: navText,
        autoplayHoverPause: true,
    });
    $('#top-movies-slide').owlCarousel({
        items: 6,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout:4000,
        autoplayHoverPause: true,
    });
    $('.movies-slide').owlCarousel({
        items: 6,
        dots: false,
        loop: true,
        nav: true,
        navText: navText,
        margin: 15
    });
});
// // PLAY VIDEO
// $(document).on('click','.movie-item',function(){
//     $('.play').addClass('active-popup');
// });
// // CLOSE VIDEO
// $(document).on('click','.close-movie',function(){
//     document.getElementById("play").removeClass('play')
// }); 

// SCROLL TOP
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



