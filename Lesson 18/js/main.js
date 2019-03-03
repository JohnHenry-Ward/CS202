$(document).ready(function () {

    // smooth scroll
    $('.scroll').click(function (e) {
        e.preventDefault();

        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 2000);
    });

    // scroll reveal
    // const sr = ScrollReveal();

    // sr.reveal('p', {
    //     origin: 'left',
    //     distance: '100px',
    //     // scale: '2'
    //     delay: '250',
    //     duration: '1000',
    //     reset: true
    // });

    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '100px',
        duration: '1000',
        // reset: true
    });

    sr.reveal('.floatleft', {

    });
    
    sr.reveal('.floatright', {

    });

    // Lightbox
    baguetteBox.run('.gallery');
});