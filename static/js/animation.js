var mainHeader = $('.top-header-letters'),
    benefitItems = $(".perks-container");

window.addEventListener("DOMContentLoaded", ()=> {

    gsap.from(mainHeader, {opacity: 0, duration: 5, ease:"linear"});

    setTimeout(()=>{
        gsap.from(benefitItems, {y: 500, duration: 10, stagger: .5, ease: "elastic"});
    }, 1500);
    
});

