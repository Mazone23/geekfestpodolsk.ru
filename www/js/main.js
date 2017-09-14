(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [function (require, module, exports) {
        $(document).ready(function () {
            $('a').click(function () {
                if ($(this).attr('href').match(/#/) == "#") {
                    event.preventDefault();

                    var id = $(this).attr('href');
                    var top = $(id).offset().top;

                    $('body, html').animate({
                        scrollTop: top
                    }, 1500);
                }
            });

            $('.section-about_feature').on('click', '.btn', function () {
                var currentProgramm = $(this).parent().index();

                $('.is-visible').removeClass('is-visible');
                $('.programm-holder:eq(' + currentProgramm + ')').addClass('is-visible');
            });
        });
}, {}],
    2: [function (require, module, exports) {
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-60556005-2', 'auto');
        ga('send', 'pageview');

        setTimeout(function () {
            ga('send', 'event', 'timer', 'read');
        }, 30000);

        $(document).on('click', '.ga_msk', function () {
            ga('send', 'event', 'msk_click', 'msk_click', 'msk_click');
        })

        $(document).on('click', '.ga_spb', function () {
            ga('send', 'event', 'spb_click', 'spb_click', 'spb_click');
        })

        $(document).on('click', '.ga_msk_timepad', function () {
            ga('send', 'event', 'msk_click_timepad', 'msk_click_timepad', 'msk_click_timepad');
        })

        $(document).on('click', '.ga_spb_timepad', function () {
            ga('send', 'event', 'spb_click_timepad', 'spb_click_timepad', 'spb_click_timepad');
        })

        $(document).on('click', '.header-org__left', function () {
            ga('send', 'event', 'go_banana', 'go_banana', 'go_banana');
        })

        $(document).on('click', '.header-org__right', function () {
            ga('send', 'event', 'go_preza', 'go_preza', 'go_preza');
        })

        $(document).on('click', '.contacts_presentation', function () {
            ga('send', 'event', 'go_preza_footer', 'go_preza_footer', 'go_preza_footer');
        })
}, {}],
    3: [function (require, module, exports) {
        var ga;

        ga = require('./ga');

        require('./actions');


}, {
        "./actions": 1,
        "./ga": 2
    }]
}, {}, [3]);

function setVisibility(id) {
    if (document.getElementById('bt1').value == 'Скрыть заявку') {
        document.getElementById('bt1').value = 'Открыть заявку';
        document.getElementById(id).style.display = 'none';
    } else {
        document.getElementById('bt1').value = 'Скрыть заявку';
        document.getElementById(id).style.display = 'inline';
    }
}
