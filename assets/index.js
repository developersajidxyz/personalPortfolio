// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});


//////////////// Blogs Popup windows
var readMoreBtns = document.querySelectorAll('.read-more');
var popups = document.querySelectorAll('.popup');
var popupContents = document.querySelectorAll('.popup-content');
var closeBtns = document.querySelectorAll('.close');

// Function to open the popup
function openPopup(index) {
    popups[index].classList.add('show');
    popups[index].style.display = 'block'; // Ensures display is set to block
    setTimeout(() => { // Timeout ensures CSS opacity transition has time to apply
        popups[index].classList.add('visible');
        popupContents[index].classList.add('show');
    }, 10);
}

// Function to close the popup
function closePopup(index) {
    popups[index].classList.remove('visible');
    popupContents[index].classList.remove('show');
    setTimeout(() => { // Delay to allow opacity transition
        popups[index].style.display = 'none';
    }, 400); // Delay should match the CSS transition time
}

// Attach event listeners to "Read more" buttons
readMoreBtns.forEach((btn, index) => {
    btn.addEventListener('click', function(event) {
        event.preventDefault();
        openPopup(index);
    });
});

// Attach event listeners to close buttons
closeBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        closePopup(index);
    });
});

// Close popup when clicking outside of it
window.addEventListener('click', function(event) {
    popups.forEach((popup, index) => {
        if (event.target == popup) {
            closePopup(index);
        }
    });
});

