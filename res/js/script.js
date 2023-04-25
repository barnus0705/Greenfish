document.addEventListener( 'DOMContentLoaded', function() {
    let splide = new Splide( '.splide',{
        direction: 'ttb',
        height   : 'calc(100vh - 64px)',
        wheel    : true,
    } );
    splide.mount();
}
);
