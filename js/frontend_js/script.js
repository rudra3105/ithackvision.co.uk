($ = jQuery.noConflict()),
$(window).on("load", function() {
        "use strict";
        setTimeout(function() {
            $(".loader").fadeOut("slow");
        }, 1e3);
    }),
    $(".modal").each(function(e) {
        $(this).on("show.bs.modal", function(e) {
            var t = $(this).attr("data-easein");
            "shake" == t
                ?
                $(".modal-dialog").velocity("callout." + t) :
                "pulse" == t ?
                $(".modal-dialog").velocity("callout." + t) :
                "tada" == t ?
                $(".modal-dialog").velocity("callout." + t) :
                "flash" == t ?
                $(".modal-dialog").velocity("callout." + t) :
                "bounce" == t ?
                $(".modal-dialog").velocity("callout." + t) :
                "swing" == t ?
                $(".modal-dialog").velocity("callout." + t) :
                $(".modal-dialog").velocity("transition." + t);
        });
    }),
    jQuery(function(e) {
        "use strict";
        e(window).on("scroll", function() {
                e(this).scrollTop() > 220 ? e("header").addClass("header-appear") : e("header").removeClass("header-appear");
            }),
            e(".progress-bar").each(function() {
                e(this).appear(function() {
                    e(this).animate({
                        width: e(this).attr("aria-valuenow") + "%"
                    }, 3e3);
                });
            }),
            e(".count").each(function() {
                e(this).appear(function() {
                    e(this)
                        .prop("Counter", 0)
                        .animate({
                            Counter: e(this).text()
                        }, {
                            duration: 3e3,
                            easing: "swing",
                            step: function(t) {
                                e(this).text(Math.ceil(t));
                            },
                        });
                });
            }),
            e(window).on("scroll", function() {
                e(this).scrollTop() > 500 ? e(".scroll-top-arrow").fadeIn("slow") : e(".scroll-top-arrow").fadeOut("slow");
            });
        var t = e(".bottom-nav");
        if (
            (e(window).on("scroll", function() {
                    var o = e(window).height() - t.height();
                    e(this).scrollTop() > o ? t.addClass("navbar-bottom-top") : t.removeClass("navbar-bottom-top");
                }),
                e(document).on("click", ".scroll-top-arrow", function() {
                    return e("html, body").animate({
                        scrollTop: 0
                    }, 800), !1;
                }),
                e("body").hasClass("intrective") ?
                e(".scroll").on("click", function(t) {
                    t.preventDefault(), e("html,body").animate({
                        scrollTop: e(this.hash).offset().top
                    }, 1200);
                }) :
                e(".scroll").on("click", function(t) {
                    t.preventDefault(), e("html,body").animate({
                        scrollTop: e(this.hash).offset().top - 60
                    }, 1200);
                }),
                e(window).width() > 992 && e(".parallax").parallaxie({
                    speed: 0.55,
                    offset: 0
                }),
                e("#sidemenu_toggle").length &&
                (e("#sidemenu_toggle").on("click", function() {
                        e(".pushwrap").toggleClass("active"), e(".side-menu").addClass("side-menu-active"), e("#close_side_menu").fadeIn(700);
                    }),
                    e("#close_side_menu").on("click", function() {
                        e(".side-menu").removeClass("side-menu-active"), e(this).fadeOut(200), e(".pushwrap").removeClass("active");
                    }),
                    e(".side-nav .navbar-nav .nav-link").on("click", function() {
                        e(".side-menu").removeClass("side-menu-active"), e("#close_side_menu").fadeOut(200), e(".pushwrap").removeClass("active");
                    }),
                    e("#btn_sideNavClose").on("click", function() {
                        e(".side-menu").removeClass("side-menu-active"), e("#close_side_menu").fadeOut(200), e(".pushwrap").removeClass("active");
                    })),
                e(".sidemenu_toggle1").on("click", function() {
                    var t = e(this).attr("data-val");
                    0 != t &&
                        (e.ajax({
                                data: {
                                    id: t
                                },
                                url: "sitetype/ajax",
                                type: "POST",
                                dataType: "json",
                                success: function(t) {
                                    console.log(t);
                                    for (var o = "", i = t.tech_images.length - 1; i >= 0; i--) o += '<span title="name"><img src="https://www.nivida.in/public/image/technology/' + t.tech_images[i] + '" alt="Neme"></span>';
                                    e("#tecimage").html(o),
                                        e("#Techname").html(t.use_technology),
                                        e("#desc").html(t.description),
                                        e("#BuiltFor").html(t.built_for),
                                        e("#Industry").html(t.industry),
                                        e("#Country").html(t.country),
                                        e("#PName").html(t.title),
                                        e("#ScreenShot").html('<div class="screenshot" style="background-image:url(https://www.nivida.in/public/image/portfolio/' + t.website_screenshot + ');" title="">'),
                                        e("#WebSiteLink").attr("href", t.website_link);
                                },
                                error: function(t) {
                                    console.log("Error:", t), e("#saveBtn").html("Save Changes");
                                },
                            }),
                            e(".pushwrap").toggleClass("active"),
                            e(".pdiv").addClass("side-menu-active"));
                }),
                e("#close_side_menu").on("click", function() {
                    e(".pdiv").removeClass("side-menu-active"), e(this).fadeOut(200), e(".pushwrap").removeClass("active");
                }),
                e(".side-nav .navbar-nav .nav-link").on("click", function() {
                    e(".side-menu").removeClass("side-menu-active"), e("#close_side_menu").fadeOut(200), e(".pushwrap").removeClass("active");
                }),
                e("#btn_sideNavCloseHome").on("click", function() {
                    e(".pdiv").removeClass("side-menu-active"), e("#close_side_homemenu").fadeOut(200), e(".pushwrap").removeClass("active");
                }),
                e(document).on("click", "body .sidemenu_toggle12", function() {
                    var t = e(this).attr("data-val");
                    0 != t &&
                        (e.ajax({
                                data: {
                                    id: t
                                },
                                url: "/portfolio/ajax",
                                type: "POST",
                                dataType: "json",
                                success: function(t) {
                                    console.log(t);
                                    for (var o = "", i = t.tech_images.length - 1; i >= 0; i--) o += '<span title="name"><img src="https://www.nivida.in/public/image/technology/' + t.tech_images[i] + '" alt="Neme"></span>';
                                    e("#tecimage").html(o),
                                        e("#Techname").html(t.use_technology),
                                        e("#desc").html(t.description),
                                        e("#BuiltFor").html(t.built_for),
                                        e("#Industry").html(t.industry),
                                        e("#Country").html(t.country),
                                        e("#PName").html(t.title),
                                        e("#ScreenShot").html('<div class="screenshot" style="background-image:url(https://www.nivida.in/public/image/portfolio/' + t.website_screenshot + ');" title="">'),
                                        e("#WebSiteLink").attr("href", t.website_link);
                                },
                                error: function(t) {
                                    console.log("Error:", t), e("#saveBtn").html("Save Changes");
                                },
                            }),
                            e(".pushwrap").toggleClass("active"),
                            e(".pdiv").addClass("side-menu-active"));
                }),
                e("#close_side_menu").on("click", function() {
                    e(".pdiv").removeClass("side-menu-active"), e(this).fadeOut(200), e(".pushwrap").removeClass("active");
                }),
                e(".side-nav .navbar-nav .nav-link").on("click", function() {
                    e(".side-menu").removeClass("side-menu-active"), e("#close_side_menu").fadeOut(200), e(".pushwrap").removeClass("active");
                }),
                e("#btn_sideNavCloseHome").on("click", function() {
                    e(".pdiv").removeClass("side-menu-active"), e("#close_side_homemenu").fadeOut(200), e(".pushwrap").removeClass("active");
                }),
                e(".side_class2").on("click", function() {
                    var t = e(this).attr("data-val");
                    e(".pushwrap").toggleClass("active"),
                        e(".pdiv" + t).addClass("side-menu-active"),
                        e("#close_side_menu").fadeIn(700),
                        e("#close_side_menu").on("click", function() {
                            e(".pdiv" + t).removeClass("side-menu-active"), e(this).fadeOut(200), e(".pushwrap").removeClass("active");
                        }),
                        e(".side-nav .navbar-nav .nav-link").on("click", function() {
                            e(".side-menu").removeClass("side-menu-active"), e("#close_side_menu").fadeOut(200), e(".pushwrap").removeClass("active");
                        }),
                        e("#btn_sideNavClose" + t).on("click", function() {
                            e(".pdiv" + t).removeClass("side-menu-active"), e("#close_side_menu").fadeOut(200), e(".pushwrap").removeClass("active");
                        });
                }),
                e(".side-right-btn").length &&
                (e(".side-right-btn").click(function() {
                        e(".navbar.navbar-right").toggleClass("show");
                    }),
                    e(".navbar.navbar-right .navbar-nav .nav-link").click(function() {
                        e(".navbar.navbar-right").toggleClass("showdsf");
                    })),
                e(".sbtn").length &&
                (e(".sbtn").click(function() {
                        e(".schedule-popup").toggleClass("show");
                    }),
                    e(".close").on("click", function() {
                        e(".schedule-popup").removeClass("show");
                    })),
                e(".rcbtn").length &&
                (e(".rcbtn").click(function() {
                        e("#requestCbId").toggleClass("show");
                    }),
                    e(".rbclose").on("click", function() {
                        e("#requestCbId").removeClass("show");
                    })),
                e("#js-rotating").length && e("#js-rotating").Morphext({
                    animation: "flipInX",
                    separator: ",",
                    speed: 3e3,
                    complete: function() {}
                }),
                e("#typewriting").length)
        ) {
            var o = document.getElementById("typewriting");
            new Typewriter(o, {
                loop: !0
            }).typeString("Way to achieve success").pauseFor(2e3).deleteAll().typeString("Style to achieve success").pauseFor(2e3).deleteAll().typeString("Method to achieve success").start();
        }
        if (e("#personal").length) {
            o = document.getElementById("personal");
            new Typewriter(o, {
                loop: !0
            }).typeString("UI/UX Designer").pauseFor(2e3).deleteAll().typeString("Web Developer").pauseFor(2e3).deleteAll().typeString("Wordpress Developer").start();
        }
        if ((e(".count_down").length && e(".count_down").downCount({
                date: "03/3/2019 12:00:00",
                offset: 10
            }), e(window).width() > 767)) {
            new WOW({
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !1,
                live: !0
            });
            new WOW().init();
        }
        e(window).width() > 991 &&
            setTimeout(function() {
                !(function() {
                    if (e("#aimated-cursor").length) {
                        var t = {
                                x: 0,
                                y: 0
                            },
                            o = {
                                x: 0,
                                y: 0
                            },
                            i = !1,
                            a = document.getElementById("cursor"),
                            s = document.getElementById("cursor-loader");
                        TweenLite.set(a, {
                                xPercent: -50,
                                yPercent: -50
                            }),
                            document.addEventListener("mousemove", function(e) {
                                var o = window.pageYOffset || document.documentElement.scrollTop;
                                (t.x = e.pageX), (t.y = e.pageY - o);
                            }),
                            TweenLite.ticker.addEventListener("tick", function() {
                                i || ((o.x += 0.25 * (t.x - o.x)), (o.y += 0.25 * (t.y - o.y)), TweenLite.set(a, {
                                    x: o.x,
                                    y: o.y
                                }));
                            }),
                            e(".animated-wrap").mouseenter(function(t) {
                                TweenMax.to(this, 0.3, {
                                        scale: 2
                                    }),
                                    TweenMax.to(a, 0.3, {
                                        scale: 2,
                                        borderWidth: "1px",
                                        opacity: 0.2
                                    }),
                                    TweenMax.to(s, 0.3, {
                                        scale: 2,
                                        borderWidth: "1px",
                                        top: 1,
                                        left: 1
                                    }),
                                    TweenMax.to(e(this).children(), 0.3, {
                                        scale: 0.5
                                    }),
                                    (i = !0);
                            }),
                            e(".animated-wrap").mouseleave(function(t) {
                                TweenMax.to(this, 0.3, {
                                        scale: 1
                                    }),
                                    TweenMax.to(a, 0.3, {
                                        scale: 1,
                                        borderWidth: "2px",
                                        opacity: 1
                                    }),
                                    TweenMax.to(s, 0.3, {
                                        scale: 1,
                                        borderWidth: "2px",
                                        top: 0,
                                        left: 0
                                    }),
                                    TweenMax.to(e(this).children(), 0.3, {
                                        scale: 1,
                                        x: 0,
                                        y: 0
                                    }),
                                    (i = !1);
                            }),
                            e(".animated-wrap").mousemove(function(e) {
                                var t, i, s, l, n, r, d, c, u, m, p, h;
                                (t = e),
                                (i = this.getBoundingClientRect()),
                                (s = t.pageX - i.left),
                                (l = t.pageY - i.top),
                                (n = window.pageYOffset || document.documentElement.scrollTop),
                                (o.x = i.left + i.width / 2 + (s - i.width / 2) / 2),
                                (o.y = i.top + i.height / 2 + (l - i.height / 2 - n) / 2),
                                TweenMax.to(a, 0.3, {
                                        x: o.x,
                                        y: o.y
                                    }),
                                    (r = e),
                                    (d = this),
                                    (c = this.querySelector(".animated-element")),
                                    (u = d.getBoundingClientRect()),
                                    (m = r.pageX - u.left),
                                    (p = r.pageY - u.top),
                                    (h = window.pageYOffset || document.documentElement.scrollTop),
                                    TweenMax.to(c, 0.3, {
                                        x: ((m - u.width / 2) / u.width) * 20,
                                        y: ((p - u.height / 2 - h) / u.height) * 20,
                                        ease: Power2.easeOut
                                    });
                            }),
                            e(".hide-cursor,.btn,.tp-bullets").mouseenter(function(e) {
                                TweenMax.to("#cursor", 0.2, {
                                    borderWidth: "1px",
                                    scale: 2,
                                    opacity: 0
                                });
                            }),
                            e(".hide-cursor,.btn,.tp-bullets").mouseleave(function(e) {
                                TweenMax.to("#cursor", 0.3, {
                                    borderWidth: "2px",
                                    scale: 1,
                                    opacity: 1
                                });
                            }),
                            e(".link").mouseenter(function(e) {
                                TweenMax.to("#cursor", 0.2, {
                                    borderWidth: "0px",
                                    scale: 3,
                                    backgroundColor: "rgba(255, 255, 255, 0.27)",
                                    opacity: 0.15
                                });
                            }),
                            e(".link").mouseleave(function(e) {
                                TweenMax.to("#cursor", 0.3, {
                                    borderWidth: "2px",
                                    scale: 1,
                                    backgroundColor: "rgba(255, 255, 255, 0)",
                                    opacity: 1
                                });
                            });
                    }
                })();
            }, 1e3),
            e("#laptop-slide").owlCarousel({
                items: 1,
                loop: !0,
                dots: !1,
                nav: !1,
                animateOut: "fadeOut",
                animateIn: "fadeIn",
                autoplay: !0,
                autoplayTimeout: 3e3,
                responsive: {
                    1280: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    320: {
                        items: 1
                    }
                }
            }),
            e("#desktop-slide").owlCarousel({
                items: 1,
                loop: !0,
                dots: !1,
                nav: !1,
                animateOut: "fadeOut",
                animateIn: "fadeIn",
                autoplay: !0,
                autoplayTimeout: 3e3,
                responsive: {
                    1280: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    320: {
                        items: 1
                    }
                },
            }),
            e("#blogside-slide").owlCarousel({
                items: 1,
                loop: !0,
                dots: !1,
                nav: !1,
                autoplay: !0,
                autoplayTimeout: 3e3,
                responsive: {
                    1280: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    320: {
                        items: 1
                    }
                }
            }),
            e("#app-slider").owlCarousel({
                items: 1,
                loop: !0,
                dots: !1,
                nav: !1,
                animateOut: "fadeOut",
                animateIn: "fadeIn",
                autoplay: !0,
                autoplayTimeout: 3e3,
                responsive: {
                    1280: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    320: {
                        items: 1
                    }
                }
            }),
            e("#team-slider").owlCarousel({
                items: 3,
                dots: !1,
                nav: !1,
                responsive: {
                    991: {
                        items: 3
                    },
                    767: {
                        items: 2
                    },
                    320: {
                        items: 1
                    }
                }
            }),
            e("#price-slider").owlCarousel({
                items: 3,
                dots: !1,
                nav: !1,
                responsive: {
                    991: {
                        items: 3
                    },
                    767: {
                        items: 2
                    },
                    320: {
                        items: 1
                    }
                }
            }),
            e("#team-three-slider").owlCarousel({
                items: 4,
                dots: !1,
                nav: !1,
                responsive: {
                    991: {
                        items: 4
                    },
                    767: {
                        items: 2
                    },
                    320: {
                        items: 1
                    }
                }
            }),
            e("#testimonial_slider").owlCarousel({
                items: 1,
                dots: !0,
                nav: !1
            }),
            e("#profolio_slider").owlCarousel({
                autoHeight: true,
                items: 1,
                dots: !0,
                nav: !0,
                loop: !0,
                autoplay: !1,
                autoplayTimeout: 3e3
            }),
            e("#challange_slider").owlCarousel({
                items: 1,
                dots: !1,
                nav: !0,
                loop: !0,
                autoplay: !1,
                autoplayTimeout: 3e3
            }),
            e("#meeting_slider").owlCarousel({
                items: 1,
                dots: !1,
                nav: !1,
                loop: !0,
                mouseDrag: !1,
                autoplay: !0,
                autoplayTimeout: 3e3
            }),
            e("#tech_slider").owlCarousel({
                items: 5,
                dots: !1,
                nav: !1,
                loop: !0,
                mouseDrag: !1,
                autoplay: !0,
                autoplayTimeout: 3e3
            }),
            e("#techdev_slider").owlCarousel({
                items: 5,
                dots: !1,
                nav: !1,
                loop: !0,
                mouseDrag: !1,
                autoplay: !0,
                autoplayTimeout: 3e3,
                responsive: {
                    1920: {
                        items: 5
                    },
                    1369: {
                        items: 5
                    },
                    1024: {
                        items: 3
                    },
                    991: {
                        items: 2,
                        autoplayHoverPause: !0,
                        autoplay: !0,
                        autoplayTimeout: 3e3
                    },
                    768: {
                        items: 3
                    },
                    600: {
                        items: 2
                    },
                    480: {
                        items: 2
                    },
                    320: {
                        items: 2
                    },
                },
            }),
            e("#single-slider").owlCarousel({
                items: 1,
                nav: !1,
                loop: !0,
                mouseDrag: !0,
                animateOut: "fadeOut",
                animateIn: "fadeIn",
                autoplay: !0,
                autoplayTimeout: 3e3
            }),
            e("#team-slider-two").owlCarousel({
                items: 1,
                nav: !1,
                loop: !0,
                dots: !1,
                responsive: {
                    991: {
                        items: 2,
                        autoplayHoverPause: !0,
                        autoplay: !0,
                        autoplayTimeout: 3e3
                    },
                    320: {
                        items: 1
                    }
                }
            }),
            e("#submit_btn").click(function() {
                e("#submit_btn").attr("disabled", "disabled"), e("#submit_btn span").text("Sending"), e("#submit_btn i").removeClass("d-none");
                var t,
                    o,
                    i = e("input[name=first_name]").val() + " " + e("input[name=last_name]").val(),
                    a = e("input[name=email]").val(),
                    s = e("input[name=phone]").val(),
                    l = e("textarea[name=message]").val(),
                    n = !0;
                "" == i && (n = !1),
                    "" == a && (n = !1),
                    "" == l && (n = !1),
                    n ?
                    ((t = {
                            userName: i,
                            userEmail: a,
                            userPhone: s,
                            userMessage: l
                        }),
                        e.post(
                            "contact.php",
                            t,
                            function(t) {
                                "error" == t.type ?
                                    (o = '<div class="alert-danger" style="padding:10px; margin-bottom:30px;">' + t.text + "</div>") :
                                    ((o = '<div class="alert-success" style="padding:10px; margin-bottom:30px;">' + t.text + "</div>"), e(".contact-form input").val(""), e(".contact-form textarea").val("")),
                                    e("#result").hide().html(o).slideDown(),
                                    e("#submit_btn").removeAttr("disabled"),
                                    e("#submit_btn span").text("Contact Now"),
                                    e("#submit_btn i").addClass("d-none");
                            },
                            "json"
                        )) :
                    ((o = '<div class="alert-danger" style="padding:10px; margin-bottom:30px;">Please provide the missing fields.</div>'),
                        e("#result").hide().html(o).slideDown(),
                        e("#submit_btn").removeAttr("disabled"),
                        e("#submit_btn span").text("Contact Now"),
                        e("#submit_btn i").addClass("d-none"));
            }),
            e("#js-grid-mosaic-flat").cubeportfolio({
                filters: "#js-filters-mosaic-flat",
                layoutMode: "mosaic",
                sortByDimension: !0,
                mediaQueries: [{
                        width: 1500,
                        cols: 6
                    },
                    {
                        width: 1100,
                        cols: 4
                    },
                    {
                        width: 800,
                        cols: 3
                    },
                    {
                        width: 480,
                        cols: 1,
                        options: {
                            gapHorizontal: 15,
                            gapVertical: 15
                        }
                    },
                ],
                defaultFilter: "*",
                animationType: "fadeOutTop",
                gapHorizontal: 0,
                gapVertical: 0,
                gridAdjustment: "responsive",
                caption: "zoom",
                lightboxDelegate: ".cbp-lightbox",
                lightboxGallery: !0,
                lightboxTitleSrc: "data-title",
                plugins: {
                    loadMore: {
                        element: "#js-loadMore-mosaic-flat",
                        action: "click",
                        loadItems: 3
                    }
                },
            }),
            e("#portfolio-measonry").cubeportfolio({
                filters: "#measonry-filters",
                loadMoreAction: "click",
                layoutMode: "grid",
                defaultFilter: "*",
                animationType: "scaleSides",
                gapHorizontal: 30,
                gapVertical: 30,
                gridAdjustment: "responsive",
                mediaQueries: [{
                        width: 1500,
                        cols: 2
                    },
                    {
                        width: 1100,
                        cols: 2
                    },
                    {
                        width: 768,
                        cols: 2
                    },
                    {
                        width: 480,
                        cols: 1
                    },
                    {
                        width: 320,
                        cols: 1
                    },
                ],
            }),
            e("#rev_slider_19_1")
            .show()
            .revolution({
                sliderType: "standard",
                jsFileLocation: "//localhost:82/revslider/revslider/public/assets/js/",
                sliderLayout: "fullscreen",
                dottedOverlay: "none",
                delay: 9e3,
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    mouseScrollReverse: "default",
                    onHoverStop: "off",
                    bullets: {
                        enable: !0,
                        hide_onmobile: !0,
                        hide_under: 767,
                        style: "wexim",
                        hide_onleave: !1,
                        direction: "vertical",
                        h_align: "left",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0,
                        space: 5,
                        tmp: '<div class="tp-bullet-inner"></div><div class="tp-line"></div>',
                    },
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: !1
                    },
                },
                responsiveLevels: [1900, 1600, 1200, 1024, 778, 580],
                visibilityLevels: [1900, 1600, 1024, 778, 580],
                gridwidth: [1100, 1200, 1140, 960, 750, 480],
                gridheight: [868, 768, 960, 720],
                lazyType: "none",
                scrolleffect: {
                    on_slidebg: "on"
                },
                parallax: {
                    type: "mouse",
                    origo: "slidercenter",
                    speed: 2e3,
                    speedbg: 0,
                    speedls: 0,
                    levels: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                    disable_onmobile: "on"
                },
                shadow: 0,
                spinner: "off",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                fullScreenAutoWidth: "off",
                fullScreenAlignForce: "off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "",
                disableProgressBar: "on",
                hideThumbsOnMobile: "on",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: !1,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: !1
                },
            }),
            e("#rev_single")
            .show()
            .revolution({
                sliderType: "hero",
                jsFileLocation: "js/revolution",
                sliderLayout: "fullscreen",
                scrollbarDrag: "true",
                dottedOverlay: "none",
                delay: 9e3,
                navigation: {},
                responsiveLevels: [1240, 1024, 778, 480],
                visibilityLevels: [1240, 1024, 778, 480],
                gridwidth: [1170, 1024, 778, 480],
                gridheight: [868, 768, 960, 720],
                lazyType: "none",
                parallax: {
                    type: "scroll",
                    origo: "slidercenter",
                    speed: 400,
                    levels: [10, 15, 20, 25, 30, 35, 40, -10, -15, -20, -25, -30, -35, -40, -45, 55]
                },
                shadow: 0,
                spinner: "off",
                autoHeight: "off",
                fullScreenAutoWidth: "off",
                fullScreenAlignForce: "off",
                fullScreenOffsetContainer: "",
                disableProgressBar: "on",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: !1,
                fallbacks: {
                    simplifyAll: "off",
                    disableFocusListener: !1
                },
            }),
            e("#rev_slider_1064_1")
            .show()
            .revolution({
                sliderType: "standard",
                jsFileLocation: "revolution/js/",
                sliderLayout: "fullscreen",
                dottedOverlay: "none",
                delay: 9e3,
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    mouseScrollReverse: "default",
                    onHoverStop: "off",
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "vertical",
                        drag_block_vertical: !1
                    },
                },
                responsiveLevels: [1240, 1024, 778, 480],
                visibilityLevels: [1240, 1024, 778, 480],
                gridwidth: [1240, 1024, 778, 480],
                gridheight: [868, 768, 960, 720],
                lazyType: "none",
                shadow: 0,
                spinner: "off",
                stopLoop: "on",
                stopAfterLoops: 0,
                stopAtSlide: 1,
                shuffle: "off",
                autoHeight: "off",
                fullScreenAutoWidth: "off",
                fullScreenAlignForce: "off",
                fullScreenOffsetContainer: ".header",
                fullScreenOffset: "",
                disableProgressBar: "on",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: !1,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: !1
                },
            });
    }),
    $(document).ready(function() {
        var e = $("li.fancyTab").length;
        12 == e && $("li.fancyTab").width("8.3%"),
            11 == e && $("li.fancyTab").width("9%"),
            10 == e && $("li.fancyTab").width("10%"),
            9 == e && $("li.fancyTab").width("11.1%"),
            8 == e && $("li.fancyTab").width("12.5%"),
            7 == e && $("li.fancyTab").width("14.2%"),
            6 == e && $("li.fancyTab").width("16.666666666666667%"),
            5 == e && $("li.fancyTab").width("20%"),
            4 == e && $("li.fancyTab").width("25%"),
            3 == e && $("li.fancyTab").width("33.3%"),
            2 == e && $("li.fancyTab").width("50%");
    }),
    $(window).on("load", function() {
        $(".fancyTabs").each(function() {
            var e = 0;
            $(".fancyTab a", this).each(function() {
                    $(this).height() > e && (e = $(this).height());
                }),
                $(".fancyTab a", this).height(e);
        });
    });
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        $(".solution-filter").addClass("sticky");
    } else {
        $(".solution-filter").removeClass("sticky");
    }
});