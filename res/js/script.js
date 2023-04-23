document.addEventListener( 'DOMContentLoaded', function() {
    let splide = new Splide( '.splide',{
        direction: 'ttb',
        height   : 'calc(100vh - 120px)',
        wheel    : true,
    } );
    splide.mount();
}
);
