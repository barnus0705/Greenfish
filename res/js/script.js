document.addEventListener( 'DOMContentLoaded', function() {
    let splide = new Splide( '.splide',{
        direction: 'ttb',
        height   : 'calc(100vh - 100px)',
        wheel    : true,
    } );
    splide.mount();
}
);
