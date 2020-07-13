var slideContainer = $(".slide-container"),
    slides = $(".testimonial-container"),
    btnNext = $(".arrow-right"),
    btnPrev = $(".arrow-left"),
    navigationBtn = $(".navigation-btn");

var numberOfTestimonials = slides.length,
    counter = 0,
    slideLastChild = slideContainer[0].children[slides.length],
    slideFirstChild = slideContainer[0].children[0];

var ctaButton = $(".cta-btn");


btnNext.click(() => {
    nextSlide();
});

btnPrev.click(() => {
    prevSlide();
});

$(window).scroll(function () {
    var  currentPosition = $(window).scrollTop(),
        pointTwoPosition = 1300;

    navBtnDisplay(navigationBtn, currentPosition, pointTwoPosition);
   
    showCtaBtn(currentPosition, pointTwoPosition);

});


function navBtnDisplay (navigationButton, scrollPosition, showNavigationPositionUp) {
    // Animates navigation button: Changing arrow directions and translations (moving to bottom or top of the page)
    
    var arrowNavigation = $(".arrow-navigation"),
        topOfScreen = 38;

    if (scrollPosition > topOfScreen && scrollPosition < showNavigationPositionUp) {
        navigationButton.attr("href", "#contact-us");
        navigationButton.removeClass("navigation-btn-show");
        navigationButton.addClass("navigation-btn-hide");
        arrowNavigation.addClass("fa-arrow-down");
        arrowNavigation.removeClass("fa-arrow-up");

    } else if (scrollPosition < topOfScreen){
        navigationButton.removeClass("navigation-btn-hide");


    }  else if (scrollPosition > showNavigationPositionUp){
        
        navigationButton.attr("href", "#");
        arrowNavigation.removeClass("fa-arrow-down");
        arrowNavigation.addClass("fa-arrow-up");
        navigationButton.removeClass("navigation-btn-hide");
        navigationButton.addClass("navigation-btn-show");
    }
}

function nextSlide() {
    // Deals with the slide right functionality: translations

    if (counter === numberOfTestimonials - 1) {
        return;

    } else {

        $(".arrow-right").addClass("arrow-clicked");

        setTimeout(() => {
            $(".arrow-right").removeClass("arrow-clicked");
        }, 300);

        $(".slide-dot").css("color", "#0000008c");
        counter++;
        slideContainer.css("transform", "translateX(" + (-counter * 100) + "vw)");
        $(".slide-dot-" + counter).css("color", "#000000eb");
    }
}

function prevSlide() {
    // Deals with the slide left functionality: translations
    if (counter === 0) {
        return;
    } else {

        $(".arrow-left").addClass("arrow-clicked");

        setTimeout(() => {
            $(".arrow-left").removeClass("arrow-clicked");
        }, 300);

        $(".slide-dot").css("color", "#0000008c");
        counter--;
        slideContainer.css("transform", "translateX(" + (-counter * 100) + "vw)");
        $(".slide-dot-" + counter).css("color", "#000000eb");
    }
}

function showCtaBtn (scrollPosition, showBtnPosition) {
    // introduces the call to action button to the dom once we scroll to a certain position

    if (scrollPosition >= showBtnPosition) {
        ctaButton.removeClass("cta-btn-hide");
    } else {
        ctaButton.addClass("cta-btn-hide");
    }
}