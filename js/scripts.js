var Lilac;
! function (e) {
    "use strict";
    e(document).ready(function () {
        Lilac = {
            initialized: !1,
            mobMenuFlag: !1,
            wookHandler: null,
            wookOptions: null,
            scrollPos: 0,
            sendingMail: !1,
            mobileMenuTitle: mobileMenuTitle,
            hero100PercentHeight: hero100PercentHeight,
            twitter_username: twitter_username,
            map_canvas_id: map_canvas_id,
            map_color: map_color,
            map_initial_zoom: map_initial_zoom,
            map_initial_latitude: map_initial_latitude,
            map_initial_longitude: map_initial_longitude,
            use_default_map_style: use_default_map_style,
            contact_form_success_msg: contact_form_success_msg,
            contact_form_error_msg: contact_form_error_msg,
            c_days: c_days,
            c_hours: c_hours,
            c_minutes: c_minutes,
            c_seconds: c_seconds,
            countdownEndMsg: countdownEndMsg,
            init: function () {
                var e = this;
                e.initialized || (e.initialized = !0, e.build(), e.events())
            },
            build: function () {
                var a = this;
                a.preloader(), a.navigation(), a.createMobileMenu(), a.heroHeight(), a.curvedText(), e("input, textarea").placeholder(), a.bgImageGrid(), a.googleMap(), a.createPrettyPhoto(), a.createOwlSliders(), a.createGallery(), a.countdown(), a.parallaxItems(), a.startNiceScroll()
            },
            events: function () {
                var e = this;
                e.windowResize(), e.resizeVideos(), e.contactForm(), e.buttons(), e.animateElems()
            },
            preloader: function () {
                var a = setInterval(function () {
                    /loaded|complete/.test(document.readyState) && (clearInterval(a), e("#preloader").fadeOut(500))
                }, 10)
            },
            navigation: function () {
                e(".nav li a").on("click", function (a) {
                    var t = e(this),
                        i = 0;
                    "#" === t.attr("href").charAt(0) ? (a.preventDefault(), "#home" !== t.attr("href") && (i = e(t.attr("href")).offset().top - 65), e("html, body").stop().animate({
                        scrollTop: i
                    }, 1500, "easeInOutExpo", function () {
                        t.blur()
                    })) : window.open(t.attr("href"), "_self")
                });
                var a = new Waypoint.Sticky({
                    element: e(".nav-section")
                });
                a = a, e("#wrapper > section").waypoint({
                    handler: function (a) {
                        var t = e(this),
                            i = t[0].element.id;
                        "up" === a && (i = t[0].element.previousElementSibling.id), e(".nav a").removeClass("active"), e('nav a[href="#' + i + '"]').addClass("active")
                    },
                    offset: "50%"
                }), e(window).load(function () {
                    var t = location.hash.replace("#", "");
                    "" !== t && (location.hash = "", e("html, body").stop().animate({
                        scrollTop: e("#" + t).offset().top - 65
                    }, 1500, "easeInOutExpo")), a = new Waypoint.Sticky({
                        element: e(".nav-section")
                    })
                })
            },
            createMobileMenu: function (a) {
                var t, i, n = this,
                    s = e("#wrapper");
                i = e.browser.mobile ? "touchstart" : "click", null !== a && (a = e(window).innerWidth()), 975 >= a && !n.mobMenuFlag && (e("body").prepend('<nav class="nav-mobile"><i class="fa fa-times"></i><h2><i class="fa fa-bars"></i>' + n.mobileMenuTitle + "</h2><ul></ul></nav>"), e(".nav-mobile > ul").html(e(".nav").html()), e(".nav-mobile b").remove(), e(".nav-mobile ul.dropdown-menu").removeClass().addClass("dropdown-mobile"), t = e(".nav-mobile"), e("#nav-mobile-btn").bind(i, function (a) {
                    a.stopPropagation(), a.preventDefault(), setTimeout(function () {
                        s.addClass("open"), t.addClass("open"), t.getNiceScroll().show()
                    }, 25), e(document).bind(i, function (a) {
                        e(a.target).hasClass("nav-mobile") || e(a.target).parents(".nav-mobile").length || (s.removeClass("open"), t.removeClass("open"), e(document).unbind(i))
                    }), e(">i", t).bind(i, function () {
                        t.getNiceScroll().hide(), s.removeClass("open"), t.removeClass("open"), e(document).unbind(i)
                    })
                }), t.niceScroll({
                    autohidemode: !0,
                    cursorcolor: "#888888",
                    cursoropacitymax: "0.7",
                    cursorwidth: 10,
                    cursorborder: "0px solid #000",
                    horizrailenabled: !1,
                    zindex: "1"
                }), t.getNiceScroll().hide(), n.mobMenuFlag = !0, e(".nav-mobile li a").bind("click", function (a) {
                    var n = e(this),
                        o = 0;
                    "#home" !== n.attr("href") && (o = e(n.attr("href")).offset().top - 65), e("html, body").stop().animate({
                        scrollTop: o
                    }, 1500, "easeInOutExpo", function () {
                        n.blur()
                    }), t.getNiceScroll().hide(), s.removeClass("open"), t.removeClass("open"), e(document).unbind(i), a.preventDefault()
                }))
            },
            heroHeight: function () {
                var a = this;
                a.hero100PercentHeight && (e("#home").css({
                    minHeight: e(window).innerHeight() + "px"
                }), e(window).resize(function () {
                    e("#home").css({
                        minHeight: e(window).innerHeight() + "px"
                    })
                }))
            },
            bgImageGrid: function () {
                if (e("#freewall").length) {
                    e("#freewall .item").each(function () {
                        var a = e(this);
                        a.width(Math.floor(260 + 200 * Math.random())), a.css({
                            "background-image": "url(" + e(">img", a).attr("src") + ")"
                        }), e(">img", a).remove()
                    }), e("#freewall").appendTo("#wrapper");
                    var a = new Freewall("#freewall");
                    a.reset({
                        selector: ".item",
                        animate: !1,
                        cellW: 20,
                        gutterX: 0,
                        gutterY: 0,
                        onResize: function () {
                            a.fitWidth()
                        }
                    }), a.fitWidth()
                }
            },
            googleMap: function () {
                if (0 === e("#map_canvas").length || "undefined" === map_markers || 0 === map_markers.length) return !1;
                var a, t, i, n, s, o = this,
                    l = [],
                    r = 0;
                for (/^\d|\.|-$/.test(o.map_initial_latitude) && /^\d|\.|-$/.test(map_initial_longitude) || (o.map_initial_latitude = map_markers[0].latitude, o.map_initial_longitude = map_markers[0].longitude), t = new google.maps.LatLng(o.map_initial_latitude, o.map_initial_longitude), this.use_default_map_style || (l = [{
                    stylers: [{
                        hue: map_color
                    }, {
                        saturation: -75
                    }, {
                        lightness: 5
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [{
                        saturation: 20
                    }, {
                        lightness: -70
                    }]
                }, {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{
                        saturation: -50
                    }, {
                        lightness: 40
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{
                        hue: map_color
                    }, {
                        saturation: -100
                    }, {
                        lightness: 0
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [{
                        hue: map_color
                    }, {
                        saturation: 5
                    }, {
                        lightness: 5
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [{
                        saturation: 10
                    }, {
                        lightness: 0
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{
                        saturation: 0
                    }, {
                        lightness: 20
                    }]
                }, {
                    featureType: "transit",
                    elementType: "geometry",
                    stylers: [{
                        hue: map_color
                    }, {
                        saturation: 30
                    }, {
                        lightness: -30
                    }]
                }]), a = new google.maps.StyledMapType(l, {
                    name: "Lilac"
                }), i = {
                    center: t,
                    zoom: o.map_initial_zoom,
                    scrollwheel: !1,
                    panControl: !1,
                    mapTypeControl: !1,
                    zoomControl: !0,
                    zoomControlOptions: {
                        position: google.maps.ControlPosition.RIGHT_CENTER
                    }
                }, n = new google.maps.Map(document.getElementById(o.map_canvas_id), i), n.mapTypes.set("map_style", a), n.setMapTypeId("map_style"), s = function (e) {
                    var a = e.latitude,
                        t = e.longitude,
                        i = e.icon,
                        s = e.infoWindow,
                        o = new google.maps.InfoWindow({
                            content: '<div class="infoWindow">' + s + "</div>"
                        }),
                        l = new RichMarker({
                            position: new google.maps.LatLng(a, t),
                            map: n,
                            anchor: 8,
                            anchorPoint: new google.maps.Point(0, -40),
                            shadow: "none",
                            content: '<div class="marker"><i class="fa ' + i + '"></i></div>'
                        });
                    google.maps.event.addListener(l, "click", function () {
                        o.open(n, l)
                    })
                }; r < map_markers.length;) s(map_markers[r]), r += 1
            },
            createPrettyPhoto: function () {
                e("a[data-gal^='prettyPhoto']").prettyPhoto({
                    theme: "lilac",
                    hook: "data-gal"
                })
            },
            createOwlSliders: function () {
                e(".timeline-gallery").length && e(".timeline-gallery").owlCarousel({
                    navigation: !0,
                    navigationText: !1,
                    pagination: !1,
                    itemsCustom: [
                        [0, 1],
                        [392, 2],
                        [596, 3],
                        [751, 2],
                        [975, 3],
                        [1183, 3],
                        [1440, 3],
                        [1728, 3]
                    ]
                }), e(".bridesmaids-groomsmen-slider").length && e(".bridesmaids-groomsmen-slider").owlCarousel({
                    itemsCustom: [
                        [0, 1],
                        [590, 2],
                        [751, 2],
                        [975, 3],
                        [1183, 4],
                        [1440, 4],
                        [1728, 4]
                    ]
                })
            },
            createGallery: function () {
                var a = e(".gallery-scroller"),
                    t = !1;
                e(".gallery-right").click(function () {
                    return t ? !1 : (t = !0, void a.animate({
                        scrollLeft: a.scrollLeft() + 380
                    }, function () {
                        t = !1
                    }))
                }), e(".gallery-left").click(function () {
                    return t ? !1 : (t = !0, void a.animate({
                        scrollLeft: a.scrollLeft() - 380
                    }, function () {
                        t = !1
                    }))
                })
            },
            curvedText: function () {
                e(".curve").length && (e(".curve").arctext({
                    radius: 1e3
                }), e(window).resize(function () {
                    e(".curve").arctext("set", {
                        radius: 1e3
                    })
                })), e(".curve2").length && (e(".curve2").arctext({
                    radius: 800,
                    dir: -1
                }), e(window).resize(function () {
                    e(".curve2").arctext("set", {
                        radius: 800,
                        dir: -1
                    })
                }))
            },
            countdown: function (a, t) {
                function i() {
                    var a = new Date,
                        t = o - a;
                    if (0 > t) return l.html('<div class="end">' + s.countdownEndMsg + "</div>"), clearInterval(n), !1;
                    var i = Math.floor(t / 864e5 * 1),
                        r = Math.floor(t % 864e5 / 36e5 * 1),
                        c = Math.floor(t % 864e5 % 36e5 / 6e4 * 1),
                        d = Math.floor(t % 864e5 % 36e5 % 6e4 / 1e3 * 1);
                    e(".days > div", l).html(i), e(".hours > div", l).html(r), e(".minutes > div", l).html(c), e(".seconds > div", l).html(d)
                }
                var n, s = this,
                    o = new Date(t),
                    l = e("" + a);
                l.html('<div class="days"><span>' + s.c_days + '</span><div></div></div><div class="hours"><span>' + s.c_hours + '</span><div></div></div><div class="minutes"><span>' + s.c_minutes + '</span><div></div></div><div class="seconds"><span>' + s.c_seconds + "</span><div></div></div>"), n = setInterval(i, 1e3)
            },
            parallaxItems: function () {
                e.browser.mobile ? e(".parallax").css({
                    "background-position": "50% 50%",
                    "background-size": "cover",
                    "background-attachment": "scroll"
                }) : e.stellar()
            },
            startNiceScroll: function () {
                e(document).ready(function () {
                    e(".gallery-scroller").niceScroll({
                        cursorcolor: "#fff",
                        cursorwidth: "0px",
                        background: "#fff",
                        cursorborder: "0px solid #1F2326",
                        zindex: "999",
                        autohidemode: !1,
                        enablemousewheel: !1,
                        touchbehavior: !0
                    })
                })
            },
            windowResize: function () {
                var a = this;
                e(window).resize(function () {
                    var t = e(window).innerWidth();
                    a.createMobileMenu(t)
                })
            },
            resizeVideos: function () {
                var a = e("iframe[src^='http://player.vimeo.com'], iframe[src^='https://player.vimeo.com'], iframe[src^='http://www.youtube.com'], iframe[src^='https://www.youtube.com'], object, embed"),
                    t = e(".videoEmbed");
                a.each(function () {
                    var a = e(this);
                    a.attr("data-aspectRatio", a.height() / a.width()).removeAttr("height").removeAttr("width")
                }), e(window).resize(function () {
                    var i = t.width();
                    a.each(function () {
                        var a = e(this);
                        a.width(i).height(i * a.attr("data-aspectRatio"))
                    })
                }).resize()
            },
            contactForm: function () {
                var a = this;
                e(".submit_form").click(function (t) {
                    t.preventDefault();
                    var i, n, s, o = e(this),
                        l = o.closest("form"),
                        r = e("input, textarea, .radio-lilac", l),
                        c = 0,
                        d = /\S+@\S+\.\S+/,
                        m = "contact",
                        u = !1,
                        h = [];
                    return r.each(function () {
                        var a = e(this);
                        "hidden" === a.attr("type") ? a.hasClass("subject") ? m += "&subject=" + a.val() : a.hasClass("fromName") || a.hasClass("fromname") ? m += "&fromname=" + a.val() : a.hasClass("fromEmail") || a.hasClass("fromemail") ? m += "&fromemail=" + a.val() : (a.hasClass("emailTo") || a.hasClass("emailto")) && (m += "&emailto=" + a.val()) : a.hasClass("required") && "" === a.val() ? (a.addClass("invalid"), u = !0) : "email" === a.attr("type") && "" !== a.val() && d.test(a.val()) === !1 ? (a.addClass("invalid"), u = !0) : "recaptcha_response_field" !== a.attr("id") && (a.removeClass("invalid"), a.hasClass("subject") ? (m += "&subject=" + a.val(), m += "&subject_label=" + a.attr("name")) : a.hasClass("fromName") || a.hasClass("fromname") ? (m += "&fromname=" + a.val(), m += "&fromname_label=" + a.attr("name")) : a.hasClass("fromEmail") || a.hasClass("fromemail") ? (m += "&fromemail=" + a.val(), m += "&fromemail_label=" + a.attr("name")) : a.hasClass("radio-lilac") ? (m += "&field" + c + "_label=" + a.data("value"), m += "&field" + c + "_value=" + e(".active", a).data("value"), c += 1) : (m += "&field" + c + "_label=" + a.attr("name"), m += "&field" + c + "_value=" + a.val(), c += 1))
                    }), m += "&len=" + c, i = function () {
                        o.width(o.width()), e("i", o).each(function () {
                            var a = e(this),
                                t = a.attr("class");
                            a.removeClass(t).addClass("fa fa-times").delay(1500).queue(function (a) {
                                e(this).removeClass("fa fa-times").addClass(t), a()
                            })
                        }), o.addClass("btn-danger").delay(1500).queue(function (a) {
                            e(this).removeClass("btn-danger"), a()
                        }), e(".form_status_message").html('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + contact_form_error_msg + "</div>")
                    }, n = function () {
                        o.width(o.width()), e("i", o).each(function () {
                            var a = e(this),
                                t = a.attr("class");
                            a.removeClass(t).addClass("fa fa-check").delay(1500).queue(function (a) {
                                e(this).removeClass("fa fa-check").addClass(t), a()
                            })
                        }), o.addClass("btn-success").delay(1500).queue(function (a) {
                            e(this).removeClass("btn-success"), a()
                        }), e(".form_status_message").html('<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + contact_form_success_msg + "</div>")
                    }, s = function () {
                        e("i", o).each(function (a) {
                            var t = e(this);
                            t.removeClass("fa fa-cog fa-spin").addClass(h[a])
                        }), o.removeClass("disabled")
                    }, u || a.sendingMail ? i() : (a.sendingMail = !0, e("i", o).each(function (a) {
                        var t = e(this);
                        h[a] = t.attr("class"), t.removeClass(h[a]).addClass("fa fa-cog fa-spin")
                    }), o.addClass("disabled"), e.ajax({
                        type: "POST",
                        url: "/contact.php",
                        data: m,
                        success: function (e) {
                            s(), "ok" === e ? (n(), l[0].reset()) : i(), a.sendingMail = !1
                        },
                        error: function () {
                            s(), i(), a.sendingMail = !1
                        }
                    })), !1
                })
            },
            buttons: function () {
                var a = !0;
                e(".bridesmaids-groomsmen-buttons .btn").click(function (t) {
                    t.preventDefault();
                    var i = e(this),
                        n = i.data("slider");
                    i.hasClass("active") || (e(".bridesmaids-groomsmen-slider").addClass("hide").css({
                        opacity: 0
                    }), a ? (a = !1, e("#" + n).removeClass("hide")) : e("#" + n).removeClass("hide").animate({
                        opacity: 1
                    }, 500)), e(".bridesmaids-groomsmen-buttons .btn").removeClass("active"), i.addClass("active")
                }), e(".radio-lilac button").click(function (a) {
                    a.preventDefault();
                    var t = e(this);
                    return t.hasClass("active") ? !1 : (t.parent().find("button").removeClass("active"), void t.addClass("active"))
                }), e(".add_button").click(function (a) {
                    a.preventDefault();
                    var t, i = e(this),
                        n = i.data("wrapper"),
                        s = parseInt(e("#" + n).data("count")) + 1 || 1,
                        o = e("#" + i.data("input")),
                        l = o.val();
                    return "" === l ? (o.addClass("invalid"), !1) : (t = '<div class="input-group"><input type="text" class="form-control" name="' + i.data("input") + "_" + s + '" value="' + l + '" /><span class="input-group-addon"><i class="fa fa-trash"></i></span></div>', e("#" + n).data("count", s).append(t), o.val(""), void o.removeClass("invalid"))
                }), e(".add_list").on("click", ".input-group-addon", function () {
                    e(this).closest(".input-group").remove()
                })
            },
            animateElems: function () {
                if (e.browser.mobile) return !1;
                var a = function () {
                    e("[data-animation-delay]").each(function () {
                        var a = e(this),
                            t = e(window).scrollTop(),
                            i = e(window).height(),
                            n = parseInt(a.attr("data-animation-delay"), 10),
                            s = a.data("animation-direction");
                        return void 0 === s ? !1 : (a.addClass("animate-" + s), void (t + i >= a.offset().top && (isNaN(n) || 0 === n ? a.removeClass("animate-" + s).addClass("animation-" + s) : setTimeout(function () {
                            a.removeClass("animate-me").addClass("animation-" + s)
                        }, n))))
                    })
                };
                e(window).innerWidth() >= 751 && (e(window).scroll(function () {
                    a()
                }), a())
            }
        }, Lilac.init()
    })
}(jQuery);
