document.addEventListener( 'DOMContentLoaded', function() {
    let splide = new Splide( '.splide',{
        direction: 'ttb',
        height   : 'calc(100vh - 120px)',
        wheel    : true,
    } );
    splide.mount();
}
);
let link = document.getElementById("1");
link.addEventListener("gonetohome", function (){
   let splide = new Splide();
   console.log(splide.getIndex().value)
});
