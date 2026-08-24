/* ==========================================
   AQUIVORA-STUDY JAVASCRIPT
========================================== */


/* ==========================================
   PAGE LOADER
========================================== */

window.addEventListener("load", function () {

    const loader =
        document.querySelector(".page-loader");

    setTimeout(function () {

        loader.classList.add("hide");

    }, 700);

});



/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});



/* ==========================================
   MOBILE MENU
========================================== */

const menuButton =
    document.querySelector(".menu-button");


const mobileMenu =
    document.querySelector(".mobile-menu");


menuButton.addEventListener(
    "click",
    function () {

        mobileMenu.classList.toggle("active");

    }
);



/* ==========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================== */

const mobileLinks =
    document.querySelectorAll(
        ".mobile-menu a"
    );


mobileLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            mobileMenu.classList.remove(
                "active"
            );

        }
    );

});



/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(7,10,18,0.88)";

        } else {

            navbar.style.background =
                "rgba(7,10,18,0.65)";

        }

    }
);
