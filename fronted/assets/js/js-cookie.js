! function(e) {
    var r = !1;
    if ("function" == typeof define && define.amd && (define(e), r = !0), "object" == typeof exports && (module.exports = e(), r = !0), !r) {
        var t = window.Cookies,
            i = window.Cookies = e();
        i.noConflict = function() {
            return window.Cookies = t, i
        }
    }
}(function() {
    function e() {
        for (var e = 0, r = {}; e < arguments.length; e++) {
            var t = arguments[e];
            for (var i in t) r[i] = t[i]
        }
        return r
    }
    return function r(t) {
        function i(r, n, o) {
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if ("number" == typeof(o = e({
                            path: "/"
                        }, i.defaults, o)).expires) {
                        var c, a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * o.expires), o.expires = a
                    }
                    try {
                        c = JSON.stringify(n), /^[\{\[]/.test(c) && (n = c)
                    } catch (s) {}
                    return n = t.write ? t.write(n, r) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), r = (r = (r = encodeURIComponent(String(r))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape), document.cookie = [r, "=", n, o.expires ? "; expires=" + o.expires.toUTCString() : "", o.path ? "; path=" + o.path : "", o.domain ? "; domain=" + o.domain : "", o.secure ? "; secure" : ""].join("")
                }
                r || (c = {});
                for (var f = document.cookie ? document.cookie.split("; ") : [], p = /(%[0-9A-Z]{2})+/g, l = 0; l < f.length; l++) {
                    var u = f[l].split("="),
                        h = u.slice(1).join("=");
                    '"' === h.charAt(0) && (h = h.slice(1, -1));
                    try {
                        var d = u[0].replace(p, decodeURIComponent);
                        if (h = t.read ? t.read(h, d) : t(h, d) || h.replace(p, decodeURIComponent), this.json) try {
                            h = JSON.parse(h)
                        } catch (g) {}
                        if (r === d) {
                            c = h;
                            break
                        }
                        r || (c[d] = h)
                    } catch (v) {}
                }
                return c
            }
        }
        return i.set = i, i.get = function(e) {
            return i.call(i, e)
        }, i.getJSON = function() {
            return i.apply({
                json: !0
            }, [].slice.call(arguments))
        }, i.defaults = {}, i.remove = function(r, t) {
            i(r, "", e(t, {
                expires: -1
            }))
        }, i.withConverter = r, i
    }(function() {})
});