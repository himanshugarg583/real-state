jQuery(document).ready(function(e) {
    new Swiper(".homeslider", {
        speed: 1e3,
        slidesPerView: 1,
        spaceBetween: 0,
        loop: !1,
        lazy: !1,
        autoplay: {
            delay: 1000,
        },
        effect: "fade",
        fadeEffect: {
            crossFade: !0
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        }
    }), new Swiper(".products-slider", {
        speed: 1e3,
        slidesPerView: "auto",
        spaceBetween: 0,
        loop: !1,
        freeMode: !0,
        lazy: !1,
        autoplay: {
            delay: 1000,
        },

        scrollbar: {
            el: ".swiper-scrollbar",
            hide: !1,
            draggable: !0
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    }), new Swiper(".realisations-slider", {
        speed: 1e3,
        slidesPerView: "auto",
        spaceBetween: 0,
        centeredSlides: !0,
        loop: !0,
        lazy: !1,
        autoplay: {
            delay: 1000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    }), new Swiper(".images-slider", {
        speed: 1e3,
        slidesPerView: "auto",
        spaceBetween: 0,
        loop: !1,
        freeMode: !0,
        lazy: !1,
        autoplay: {
            delay: 1000,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: !1,
            draggable: !0
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    }), new Swiper(".timeline-slider", {
        speed: 1e3,
        slidesPerView: "auto",
        spaceBetween: 60,
        centeredSlides: !0,
        loop: !1,
        freeMode: !1,
        initialSlide: e(".swiper-slide.stat-is-current").attr("data-current-step-id") - 1,
        lazy: !1,
        autoplay: {
            delay: 1000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    }), e(".swiper-slide-active").addClass("active"), new Swiper(".slider-item_single", {
        speed: 1e3,
        slidesPerView: 1,
        spaceBetween: 16,
        loop: !0,
        lazy: !1,
        autoplay: {
            delay: 1000,
        },
        autoHeight: !0,
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        }
    }), window.lazy_images = function() {
        document.querySelectorAll("img.lazy-item").forEach((e, a) => {
            e.classList.contains("is-inview") && !e.classList.contains("lazyloaded") && (e.setAttribute("src", e.getAttribute("data-src")), e.hasAttribute("srcset") && e.setAttribute("srcset", e.getAttribute("data-srcset")), e.classList.add("ready-to-load"), e.removeAttribute("data-src"), e.hasAttribute("srcset") && e.removeAttribute("data-srcset"), e.classList.remove("lazy-item"))
        }), document.querySelectorAll("img.ready-to-load").forEach((e, a) => {
            e.onload = function() {
                e.classList.add("lazyloaded"), e.parentNode.classList.add("loaded"), e.classList.remove("ready-to-load")
            }
        })
    }, setTimeout(() => {
        e("#navbar_wrapper").on("show.bs.collapse", function(a) {
            "navbar_wrapper" == a.target.attributes.id.nodeValue && (e("#navbar_wrapper").addClass("open"), e("#header").addClass("menu-open"), e("body").addClass("menu-open"), lazy_images())
        }), e("#navbar_wrapper").on("hide.bs.collapse", function(t) {
            "navbar_wrapper" == t.target.attributes.id.nodeValue && (e("#navbar_wrapper").removeClass("open"), e("#header").removeClass("menu-open"), e("body").removeClass("menu-open"), a.start(), e(".main-scrollbar").removeClass("d-none"))
        });
        let a = new LocomotiveScroll({
            el: document.querySelector("[data-scroll-container]"),
            scrollbarClass: "main-scrollbar",
            smooth: !0,
            getDirection: !0,
            mobile: {
                breakpoint: 0,
                smooth: !0,
                getDirection: !0
            },
            tablet: {
                breakpoint: 0,
                smooth: !0,
                getDirection: !0
            },
            reloadOnContextChange: !1
        });
        a.on("scroll", a => {
            (scroll_position = a.scroll.y) > 50 && e("#header").addClass("fixed"), scroll_position < 50 && e("#header").removeClass("fixed"), lazy_images()
        }), lazy_images(), new ResizeObserver(() => a.update()).observe(document.querySelector("[data-scroll-container]")), document.querySelectorAll(".virtualVisitModal").forEach(function(e) {
            e && (e.addEventListener("show.bs.modal", function(e) {
                a.stop()
            }), e.addEventListener("hide.bs.modal", function(e) {
                a.start()
            }))
        }), setTimeout(() => {
            a.update()
        }, 400)
    }, 100), [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e) {
        return new bootstrap.Tooltip(e)
    }), e(".accordion_images-section .accordion-button").click(function(a) {
        e(".accordion_images-bg img").removeClass("show");
        var t = e(this).attr("data-image-id");
        e("#image-id-" + t).addClass("show")
    }), e('a:not([rel="nofollow"])').click(function(a) {
        e(this).attr("href").indexOf("#") > -1 || (a.preventDefault(), e("body").addClass("hide_page"), setTimeout(() => {
            window.location.href = e(this).attr("href")
        }, 300))
    }), e(window).bind("pageshow", function(a) {
        a.originalEvent.persisted && e("body").removeClass("hide_page")
    });
    var a = document.getElementById("modal-video"),
        t = document.getElementById("player-video");
    if (null !== t && (a.addEventListener("shown.bs.modal", function(e) {
            t.play()
        }), a.addEventListener("hidden.bs.modal", function(e) {
            t.play(), t.pause()
        })), e("button.btn-map").click(function(a) {
            a.preventDefault(), e("#heading-map").toggleClass("expended"), e("#heading-map").removeClass("hide-map"), e("#header").addClass("nav-up"), e("#heading-map").hasClass("expended") || e("#heading-map").addClass("hide-map")
        }), e("button.btn-close-map").click(function(a) {
            a.preventDefault(), e("#heading-map").toggleClass("expended"), e("#heading-map").removeClass("hide-map"), e("#header").removeClass("nav-up"), e("#heading-map").hasClass("expended") || e("#heading-map").addClass("hide-map")
        }), e("body").hasClass("single-realisation")) {
        let s = document.querySelector(".divider-container");
        document.querySelector(".divider").addEventListener("input", e => {
            s.style.setProperty("--position", `${e.target.value}%`)
        })
    }
});