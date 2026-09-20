/* =====================================================
   OLOYO AUTO MECHANIC
   JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.getElementById("nav");


if (menuBtn && nav) {

    menuBtn.addEventListener(
        "click",
        function () {

            nav.classList.toggle("active");

        }
    );

}


/* =====================================================
   CLOSE MENU WHEN LINK IS CLICKED
===================================================== */

const navLinks =
    document.querySelectorAll(".nav a");


navLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            nav.classList.remove("active");

        }
    );

});


/* =====================================================
   HEADER EFFECT WHEN SCROLLING
===================================================== */

const header =
    document.getElementById("header");


if (header) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 50) {

                header.style.background =
                    "rgba(5,5,5,.99)";

            } else {

                header.style.background =
                    "rgba(8,8,8,.96)";

            }

        }
    );

}


/* =====================================================
   AUTOMATIC FOOTER YEAR
===================================================== */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =====================================================
   CONTACT FORM → WHATSAPP
===================================================== */

const contactForm =
    document.getElementById("contactForm");


const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("name")
                    .value
                    .trim();


            const phone =
                document
                    .getElementById("phone")
                    .value
                    .trim();


            const service =
                document
                    .getElementById("service")
                    .value;


            const message =
                document
                    .getElementById("message")
                    .value
                    .trim();


            /* CHECK FORM */

            if (
                !name ||
                !phone ||
                !message
            ) {

                if (formMessage) {

                    formMessage.textContent =
                        "Please fill in all required fields.";

                }

                return;

            }


            /* WHATSAPP MESSAGE */

            const whatsappMessage =

`Hello Oloyo Auto Mechanic,

Name: ${name}

Phone: ${phone}

Service Needed: ${
    service || "General Auto Service"
}

Message:
${message}`;


            /* WHATSAPP NUMBER */

            const whatsappURL =

                "https://wa.me/2348059557860?text=" +

                encodeURIComponent(
                    whatsappMessage
                );


            if (formMessage) {

                formMessage.textContent =
                    "Opening WhatsApp...";

            }


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(

        ".service-card, " +
        ".work-card, " +
        ".why-card, " +
        ".testimonial, " +
        ".specialized-item"

    );


if (
    "IntersectionObserver" in window
) {

    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";

                        }

                    }
                );

            },

            {
                threshold: 0.1
            }

        );


    revealElements.forEach(
        function (element) {

            element.style.opacity =
                "0";

            element.style.transform =
                "translateY(25px)";

            element.style.transition =
                "opacity .6s ease, transform .6s ease";

            observer.observe(
                element
            );

        }
    );

}