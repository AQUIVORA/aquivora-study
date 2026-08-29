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

/*
========================================
AQUIVORA RESOURCE LIBRARY
SEARCH + FILTER SYSTEM
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("resourceSearch");

    const filterButtons = document.querySelectorAll(
        ".resource-filter"
    );

    const resourceCards = document.querySelectorAll(
        ".resource-card"
    );

    const noResults = document.getElementById(
        "resourceNoResults"
    );

    let currentFilter = "all";


    function updateResources() {

        const searchText = searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";

        let visibleCards = 0;


        resourceCards.forEach(function (card) {

            const subject =
                card.getAttribute("data-subject") || "";

            const searchData =
                card.getAttribute("data-search") || "";


            const matchesFilter =
                currentFilter === "all" ||
                subject === currentFilter;


            const matchesSearch =
                searchText === "" ||
                searchData
                    .toLowerCase()
                    .includes(searchText);


            if (matchesFilter && matchesSearch) {

    card.style.setProperty("display", "block", "important");

    visibleCards++;

} else {

    card.style.setProperty("display", "none", "important");

            }

        });


        if (noResults) {

            if (visibleCards === 0) {

                noResults.classList.add("show");

            } else {

                noResults.classList.remove("show");

            }

        }

    }


    /* ================================
       SUBJECT FILTER BUTTONS
    ================================= */

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            currentFilter =
                button.getAttribute("data-filter") || "all";


            updateResources();

        });

    });


    /* ================================
       SEARCH BOX
    ================================= */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            updateResources
        );

    }


    /* ================================
       INITIAL LOAD
    ================================= */

    updateResources();

});
