! function(t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.Treeviz = n() : t.Treeviz = n()
}(window, (function() {
    return function(t) {
        var n = {};

        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
        }
        return e.m = t, e.c = n, e.d = function(t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                enumerable: !0,
                get: r
            })
        }, e.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, e.t = function(t, n) {
            if (1 & n && (t = e(t)), 8 & n) return t;
            if (4 & n && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (e.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & n && "string" != typeof t)
                for (var i in t) e.d(r, i, function(n) {
                    return t[n]
                }.bind(null, i));
            return r
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, e.p = "/", e(e.s = 23)
    }([function(t, n, e) {
        "use strict";
        e.r(n), e.d(n, "create", (function() {
            return o
        })), e.d(n, "creator", (function() {
            return r.a
        })), e.d(n, "local", (function() {
            return a
        })), e.d(n, "matcher", (function() {
            return s.a
        })), e.d(n, "mouse", (function() {
            return l.a
        })), e.d(n, "namespace", (function() {
            return f.a
        })), e.d(n, "namespaces", (function() {
            return h.a
        })), e.d(n, "clientPoint", (function() {
            return d.a
        })), e.d(n, "select", (function() {
            return i.a
        })), e.d(n, "selectAll", (function() {
            return v
        })), e.d(n, "selection", (function() {
            return p.b
        })), e.d(n, "selector", (function() {
            return y.a
        })), e.d(n, "selectorAll", (function() {
            return m.a
        })), e.d(n, "style", (function() {
            return g.b
        })), e.d(n, "touch", (function() {
            return _.a
        })), e.d(n, "touches", (function() {
            return x
        })), e.d(n, "window", (function() {
            return b.a
        })), e.d(n, "event", (function() {
            return k.c
        })), e.d(n, "customEvent", (function() {
            return k.a
        }));
        var r = e(2),
            i = e(11),
            o = function(t) {
                return Object(i.a)(Object(r.a)(t).call(document.documentElement))
            },
            u = 0;

        function a() {
            return new c
        }

        function c() {
            this._ = "@" + (++u).toString(36)
        }
        c.prototype = a.prototype = {
            constructor: c,
            get: function(t) {
                for (var n = this._; !(n in t);)
                    if (!(t = t.parentNode)) return;
                return t[n]
            },
            set: function(t, n) {
                return t[this._] = n
            },
            remove: function(t) {
                return this._ in t && delete t[this._]
            },
            toString: function() {
                return this._
            }
        };
        var s = e(13),
            l = e(17),
            f = e(8),
            h = e(4),
            d = e(3),
            p = e(1),
            v = function(t) {
                return "string" == typeof t ? new p.a([document.querySelectorAll(t)], [document.documentElement]) : new p.a([null == t ? [] : t], p.c)
            },
            y = e(7),
            m = e(12),
            g = e(14),
            _ = e(18),
            w = e(10),
            x = function(t, n) {
                null == n && (n = Object(w.a)().touches);
                for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e) i[e] = Object(d.a)(t, n[e]);
                return i
            },
            b = e(9),
            k = e(6)
    }, function(t, n, e) {
        "use strict";
        e.d(n, "c", (function() {
            return $
        })), e.d(n, "a", (function() {
            return G
        }));
        var r = e(7),
            i = e(12),
            o = e(13),
            u = function(t) {
                return new Array(t.length)
            };

        function a(t, n) {
            this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
        }
        a.prototype = {
            constructor: a,
            appendChild: function(t) {
                return this._parent.insertBefore(t, this._next)
            },
            insertBefore: function(t, n) {
                return this._parent.insertBefore(t, n)
            },
            querySelector: function(t) {
                return this._parent.querySelector(t)
            },
            querySelectorAll: function(t) {
                return this._parent.querySelectorAll(t)
            }
        };

        function c(t, n, e, r, i, o) {
            for (var u, c = 0, s = n.length, l = o.length; c < l; ++c)(u = n[c]) ? (u.__data__ = o[c], r[c] = u) : e[c] = new a(t, o[c]);
            for (; c < s; ++c)(u = n[c]) && (i[c] = u)
        }

        function s(t, n, e, r, i, o, u) {
            var c, s, l, f = {},
                h = n.length,
                d = o.length,
                p = new Array(h);
            for (c = 0; c < h; ++c)(s = n[c]) && (p[c] = l = "$" + u.call(s, s.__data__, c, n), l in f ? i[c] = s : f[l] = s);
            for (c = 0; c < d; ++c)(s = f[l = "$" + u.call(t, o[c], c, o)]) ? (r[c] = s, s.__data__ = o[c], f[l] = null) : e[c] = new a(t, o[c]);
            for (c = 0; c < h; ++c)(s = n[c]) && f[p[c]] === s && (i[c] = s)
        }

        function l(t, n) {
            return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
        }
        var f = e(8);

        function h(t) {
            return function() {
                this.removeAttribute(t)
            }
        }

        function d(t) {
            return function() {
                this.removeAttributeNS(t.space, t.local)
            }
        }

        function p(t, n) {
            return function() {
                this.setAttribute(t, n)
            }
        }

        function v(t, n) {
            return function() {
                this.setAttributeNS(t.space, t.local, n)
            }
        }

        function y(t, n) {
            return function() {
                var e = n.apply(this, arguments);
                null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
            }
        }

        function m(t, n) {
            return function() {
                var e = n.apply(this, arguments);
                null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
            }
        }
        var g = e(14);

        function _(t) {
            return function() {
                delete this[t]
            }
        }

        function w(t, n) {
            return function() {
                this[t] = n
            }
        }

        function x(t, n) {
            return function() {
                var e = n.apply(this, arguments);
                null == e ? delete this[t] : this[t] = e
            }
        }

        function b(t) {
            return t.trim().split(/^|\s+/)
        }

        function k(t) {
            return t.classList || new M(t)
        }

        function M(t) {
            this._node = t, this._names = b(t.getAttribute("class") || "")
        }

        function z(t, n) {
            for (var e = k(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
        }

        function A(t, n) {
            for (var e = k(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
        }

        function N(t) {
            return function() {
                z(this, t)
            }
        }

        function O(t) {
            return function() {
                A(this, t)
            }
        }

        function E(t, n) {
            return function() {
                (n.apply(this, arguments) ? z : A)(this, t)
            }
        }
        M.prototype = {
            add: function(t) {
                this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
            },
            remove: function(t) {
                var n = this._names.indexOf(t);
                n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
            },
            contains: function(t) {
                return this._names.indexOf(t) >= 0
            }
        };

        function j() {
            this.textContent = ""
        }

        function S(t) {
            return function() {
                this.textContent = t
            }
        }

        function P(t) {
            return function() {
                var n = t.apply(this, arguments);
                this.textContent = null == n ? "" : n
            }
        }

        function L() {
            this.innerHTML = ""
        }

        function T(t) {
            return function() {
                this.innerHTML = t
            }
        }

        function q(t) {
            return function() {
                var n = t.apply(this, arguments);
                this.innerHTML = null == n ? "" : n
            }
        }

        function B() {
            this.nextSibling && this.parentNode.appendChild(this)
        }

        function C() {
            this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
        }
        var D = e(2);

        function H() {
            return null
        }

        function I() {
            var t = this.parentNode;
            t && t.removeChild(this)
        }

        function R() {
            var t = this.cloneNode(!1),
                n = this.parentNode;
            return n ? n.insertBefore(t, this.nextSibling) : t
        }

        function X() {
            var t = this.cloneNode(!0),
                n = this.parentNode;
            return n ? n.insertBefore(t, this.nextSibling) : t
        }
        var V = e(6),
            Y = e(9);

        function W(t, n, e) {
            var r = Object(Y.a)(t),
                i = r.CustomEvent;
            "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
        }

        function F(t, n) {
            return function() {
                return W(this, t, n)
            }
        }

        function U(t, n) {
            return function() {
                return W(this, t, n.apply(this, arguments))
            }
        }
        var $ = [null];

        function G(t, n) {
            this._groups = t, this._parents = n
        }

        function Q() {
            return new G([
                [document.documentElement]
            ], $)
        }
        G.prototype = Q.prototype = {
            constructor: G,
            select: function(t) {
                "function" != typeof t && (t = Object(r.a)(t));
                for (var n = this._groups, e = n.length, i = new Array(e), o = 0; o < e; ++o)
                    for (var u, a, c = n[o], s = c.length, l = i[o] = new Array(s), f = 0; f < s; ++f)(u = c[f]) && (a = t.call(u, u.__data__, f, c)) && ("__data__" in u && (a.__data__ = u.__data__), l[f] = a);
                return new G(i, this._parents)
            },
            selectAll: function(t) {
                "function" != typeof t && (t = Object(i.a)(t));
                for (var n = this._groups, e = n.length, r = [], o = [], u = 0; u < e; ++u)
                    for (var a, c = n[u], s = c.length, l = 0; l < s; ++l)(a = c[l]) && (r.push(t.call(a, a.__data__, l, c)), o.push(a));
                return new G(r, o)
            },
            filter: function(t) {
                "function" != typeof t && (t = Object(o.a)(t));
                for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                    for (var u, a = n[i], c = a.length, s = r[i] = [], l = 0; l < c; ++l)(u = a[l]) && t.call(u, u.__data__, l, a) && s.push(u);
                return new G(r, this._parents)
            },
            data: function(t, n) {
                if (!t) return y = new Array(this.size()), h = -1, this.each((function(t) {
                    y[++h] = t
                })), y;
                var e, r = n ? s : c,
                    i = this._parents,
                    o = this._groups;
                "function" != typeof t && (e = t, t = function() {
                    return e
                });
                for (var u = o.length, a = new Array(u), l = new Array(u), f = new Array(u), h = 0; h < u; ++h) {
                    var d = i[h],
                        p = o[h],
                        v = p.length,
                        y = t.call(d, d && d.__data__, h, i),
                        m = y.length,
                        g = l[h] = new Array(m),
                        _ = a[h] = new Array(m);
                    r(d, p, g, _, f[h] = new Array(v), y, n);
                    for (var w, x, b = 0, k = 0; b < m; ++b)
                        if (w = g[b]) {
                            for (b >= k && (k = b + 1); !(x = _[k]) && ++k < m;);
                            w._next = x || null
                        }
                }
                return (a = new G(a, i))._enter = l, a._exit = f, a
            },
            enter: function() {
                return new G(this._enter || this._groups.map(u), this._parents)
            },
            exit: function() {
                return new G(this._exit || this._groups.map(u), this._parents)
            },
            join: function(t, n, e) {
                var r = this.enter(),
                    i = this,
                    o = this.exit();
                return r = "function" == typeof t ? t(r) : r.append(t + ""), null != n && (i = n(i)), null == e ? o.remove() : e(o), r && i ? r.merge(i).order() : i
            },
            merge: function(t) {
                for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a)
                    for (var c, s = n[a], l = e[a], f = s.length, h = u[a] = new Array(f), d = 0; d < f; ++d)(c = s[d] || l[d]) && (h[d] = c);
                for (; a < r; ++a) u[a] = n[a];
                return new G(u, this._parents)
            },
            order: function() {
                for (var t = this._groups, n = -1, e = t.length; ++n < e;)
                    for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0;)(r = i[o]) && (u && 4 ^ r.compareDocumentPosition(u) && u.parentNode.insertBefore(r, u), u = r);
                return this
            },
            sort: function(t) {
                function n(n, e) {
                    return n && e ? t(n.__data__, e.__data__) : !n - !e
                }
                t || (t = l);
                for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
                    for (var u, a = e[o], c = a.length, s = i[o] = new Array(c), f = 0; f < c; ++f)(u = a[f]) && (s[f] = u);
                    s.sort(n)
                }
                return new G(i, this._parents).order()
            },
            call: function() {
                var t = arguments[0];
                return arguments[0] = this, t.apply(null, arguments), this
            },
            nodes: function() {
                var t = new Array(this.size()),
                    n = -1;
                return this.each((function() {
                    t[++n] = this
                })), t
            },
            node: function() {
                for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
                        var u = r[i];
                        if (u) return u
                    }
                return null
            },
            size: function() {
                var t = 0;
                return this.each((function() {
                    ++t
                })), t
            },
            empty: function() {
                return !this.node()
            },
            each: function(t) {
                for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                    for (var i, o = n[e], u = 0, a = o.length; u < a; ++u)(i = o[u]) && t.call(i, i.__data__, u, o);
                return this
            },
            attr: function(t, n) {
                var e = Object(f.a)(t);
                if (arguments.length < 2) {
                    var r = this.node();
                    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
                }
                return this.each((null == n ? e.local ? d : h : "function" == typeof n ? e.local ? m : y : e.local ? v : p)(e, n))
            },
            style: g.a,
            property: function(t, n) {
                return arguments.length > 1 ? this.each((null == n ? _ : "function" == typeof n ? x : w)(t, n)) : this.node()[t]
            },
            classed: function(t, n) {
                var e = b(t + "");
                if (arguments.length < 2) {
                    for (var r = k(this.node()), i = -1, o = e.length; ++i < o;)
                        if (!r.contains(e[i])) return !1;
                    return !0
                }
                return this.each(("function" == typeof n ? E : n ? N : O)(e, n))
            },
            text: function(t) {
                return arguments.length ? this.each(null == t ? j : ("function" == typeof t ? P : S)(t)) : this.node().textContent
            },
            html: function(t) {
                return arguments.length ? this.each(null == t ? L : ("function" == typeof t ? q : T)(t)) : this.node().innerHTML
            },
            raise: function() {
                return this.each(B)
            },
            lower: function() {
                return this.each(C)
            },
            append: function(t) {
                var n = "function" == typeof t ? t : Object(D.a)(t);
                return this.select((function() {
                    return this.appendChild(n.apply(this, arguments))
                }))
            },
            insert: function(t, n) {
                var e = "function" == typeof t ? t : Object(D.a)(t),
                    i = null == n ? H : "function" == typeof n ? n : Object(r.a)(n);
                return this.select((function() {
                    return this.insertBefore(e.apply(this, arguments), i.apply(this, arguments) || null)
                }))
            },
            remove: function() {
                return this.each(I)
            },
            clone: function(t) {
                return this.select(t ? X : R)
            },
            datum: function(t) {
                return arguments.length ? this.property("__data__", t) : this.node().__data__
            },
            on: V.b,
            dispatch: function(t, n) {
                return this.each(("function" == typeof n ? U : F)(t, n))
            }
        };
        n.b = Q
    }, function(t, n, e) {
        "use strict";
        var r = e(8),
            i = e(4);

        function o(t) {
            return function() {
                var n = this.ownerDocument,
                    e = this.namespaceURI;
                return e === i.b && n.documentElement.namespaceURI === i.b ? n.createElement(t) : n.createElementNS(e, t)
            }
        }

        function u(t) {
            return function() {
                return this.ownerDocument.createElementNS(t.space, t.local)
            }
        }
        n.a = function(t) {
            var n = Object(r.a)(t);
            return (n.local ? u : o)(n)
        }
    }, function(t, n, e) {
        "use strict";
        n.a = function(t, n) {
            var e = t.ownerSVGElement || t;
            if (e.createSVGPoint) {
                var r = e.createSVGPoint();
                return r.x = n.clientX, r.y = n.clientY, [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
            }
            var i = t.getBoundingClientRect();
            return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop]
        }
    }, function(t, n, e) {
        "use strict";
        e.d(n, "b", (function() {
            return r
        }));
        var r = "http://www.w3.org/1999/xhtml";
        n.a = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: r,
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        }
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.RefreshQueue = n.setNodeLocation = n.getFirstDisplayedAncestor = n.getAreaSize = void 0, n.getAreaSize = function(t) {
            var n = document.querySelector("#" + t);
            if (null === n) throw new Error("Cannot find dom element with id:" + t);
            var e = n.clientWidth,
                r = n.clientHeight;
            if (0 === r || 0 === e) throw new Error("The tree can't be display because the svg height or width of the container is null");
            return {
                areaWidth: e,
                areaHeight: r
            }
        }, n.getFirstDisplayedAncestor = function(t, e, r) {
            try {
                var i = t.find((function(t) {
                        return t.id === r
                    })),
                    o = i.ancestors()[1].id;
                return e.some((function(t) {
                    return t.id === o
                })) ? i.ancestors()[1] : n.getFirstDisplayedAncestor(t, e, o)
            } catch (n) {
                return t.find((function(t) {
                    return t.id === r
                }))
            }
        }, n.setNodeLocation = function(t, n, e) {
            return e.isHorizontal ? "translate(" + n + "," + t + ")" : "translate(" + t + "," + n + ")"
        };
        var r = function() {
            function t() {}
            return t.add = function(t, n) {
                var e = this;
                this.queue.push({
                    delayNextCallback: t + this.extraDelayBetweenCallbacks,
                    callback: n
                }), this.log(this.queue.map((function(t) {
                    return t.delayNextCallback
                })), "<-- New task !!!"), this.runner || (this.runnerFunction(), this.runner = setInterval((function() {
                    return e.runnerFunction()
                }), this.runnerSpeed))
            }, t.runnerFunction = function() {
                if (this.queue[0]) {
                    if (this.queue[0].callback) {
                        this.log("Executing task, delaying next task...");
                        try {
                            this.queue[0].callback()
                        } catch (t) {
                            console.error(t)
                        } finally {
                            this.queue[0].callback = null
                        }
                    }
                    this.queue[0].delayNextCallback -= this.runnerSpeed, this.log(this.queue.map((function(t) {
                        return t.delayNextCallback
                    }))), this.queue[0].delayNextCallback <= 0 && this.queue.shift()
                } else this.log("No task found"), clearInterval(this.runner), this.runner = 0
            }, t.log = function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                this.showQueueLog && console.log.apply(console, t)
            }, t.queue = [], t.runnerSpeed = 100, t.extraDelayBetweenCallbacks = 100, t.showQueueLog = !1, t
        }();
        n.RefreshQueue = r
    }, function(t, n, e) {
        "use strict";
        e.d(n, "c", (function() {
            return i
        })), e.d(n, "a", (function() {
            return l
        }));
        var r = {},
            i = null;
        "undefined" != typeof document && ("onmouseenter" in document.documentElement || (r = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }));

        function o(t, n, e) {
            return t = u(t, n, e),
                function(n) {
                    var e = n.relatedTarget;
                    e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
                }
        }

        function u(t, n, e) {
            return function(r) {
                var o = i;
                i = r;
                try {
                    t.call(this, this.__data__, n, e)
                } finally {
                    i = o
                }
            }
        }

        function a(t) {
            return t.trim().split(/^|\s+/).map((function(t) {
                var n = "",
                    e = t.indexOf(".");
                return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
                    type: t,
                    name: n
                }
            }))
        }

        function c(t) {
            return function() {
                var n = this.__on;
                if (n) {
                    for (var e, r = 0, i = -1, o = n.length; r < o; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
                    ++i ? n.length = i : delete this.__on
                }
            }
        }

        function s(t, n, e) {
            var i = r.hasOwnProperty(t.type) ? o : u;
            return function(r, o, u) {
                var a, c = this.__on,
                    s = i(n, o, u);
                if (c)
                    for (var l = 0, f = c.length; l < f; ++l)
                        if ((a = c[l]).type === t.type && a.name === t.name) return this.removeEventListener(a.type, a.listener, a.capture), this.addEventListener(a.type, a.listener = s, a.capture = e), void(a.value = n);
                this.addEventListener(t.type, s, e), a = {
                    type: t.type,
                    name: t.name,
                    value: n,
                    listener: s,
                    capture: e
                }, c ? c.push(a) : this.__on = [a]
            }
        }

        function l(t, n, e, r) {
            var o = i;
            t.sourceEvent = i, i = t;
            try {
                return n.apply(e, r)
            } finally {
                i = o
            }
        }
        n.b = function(t, n, e) {
            var r, i, o = a(t + ""),
                u = o.length;
            if (!(arguments.length < 2)) {
                for (l = n ? s : c, null == e && (e = !1), r = 0; r < u; ++r) this.each(l(o[r], n, e));
                return this
            }
            var l = this.node().__on;
            if (l)
                for (var f, h = 0, d = l.length; h < d; ++h)
                    for (r = 0, f = l[h]; r < u; ++r)
                        if ((i = o[r]).type === f.type && i.name === f.name) return f.value
        }
    }, function(t, n, e) {
        "use strict";

        function r() {}
        n.a = function(t) {
            return null == t ? r : function() {
                return this.querySelector(t)
            }
        }
    }, function(t, n, e) {
        "use strict";
        var r = e(4);
        n.a = function(t) {
            var n = t += "",
                e = n.indexOf(":");
            return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), r.a.hasOwnProperty(n) ? {
                space: r.a[n],
                local: t
            } : t
        }
    }, function(t, n, e) {
        "use strict";
        n.a = function(t) {
            return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
        }
    }, function(t, n, e) {
        "use strict";
        var r = e(6);
        n.a = function() {
            for (var t, n = r.c; t = n.sourceEvent;) n = t;
            return n
        }
    }, function(t, n, e) {
        "use strict";
        var r = e(1);
        n.a = function(t) {
            return "string" == typeof t ? new r.a([
                [document.querySelector(t)]
            ], [document.documentElement]) : new r.a([
                [t]
            ], r.c)
        }
    }, function(t, n, e) {
        "use strict";

        function r() {
            return []
        }
        n.a = function(t) {
            return null == t ? r : function() {
                return this.querySelectorAll(t)
            }
        }
    }, function(t, n, e) {
        "use strict";
        n.a = function(t) {
            return function() {
                return this.matches(t)
            }
        }
    }, function(t, n, e) {
        "use strict";
        e.d(n, "b", (function() {
            return a
        }));
        var r = e(9);

        function i(t) {
            return function() {
                this.style.removeProperty(t)
            }
        }

        function o(t, n, e) {
            return function() {
                this.style.setProperty(t, n, e)
            }
        }

        function u(t, n, e) {
            return function() {
                var r = n.apply(this, arguments);
                null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
            }
        }

        function a(t, n) {
            return t.style.getPropertyValue(n) || Object(r.a)(t).getComputedStyle(t, null).getPropertyValue(n)
        }
        n.a = function(t, n, e) {
            return arguments.length > 1 ? this.each((null == n ? i : "function" == typeof n ? u : o)(t, n, null == e ? "" : e)) : a(this.node(), t)
        }
    }, , function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.generateLinkLayout = void 0, n.generateLinkLayout = function(t, n, e) {
            var i = e.isHorizontal,
                o = e.nodeHeight,
                u = e.nodeWidth,
                a = e.linkShape;
            return "orthogonal" === a ? i ? "M " + t.y + " " + (t.x + o / 2) + "\n        L " + (t.y + n.y + u) / 2 + " " + (t.x + o / 2) + "\n        L  " + (t.y + n.y + u) / 2 + " " + (n.x + o / 2) + "\n          " + (n.y + u) + " " + (n.x + o / 2) : "M " + (t.x + u / 2) + " " + t.y + "\n        L " + (t.x + u / 2) + " " + (t.y + n.y + o) / 2 + "\n        L  " + (n.x + u / 2) + " " + (t.y + n.y + o) / 2 + "\n          " + (n.x + u / 2) + " " + (n.y + o) + " " : "curve" === a ? i ? "M " + t.y + " " + (t.x + o / 2) + "\n      L " + (t.y - (t.y - n.y - u) / 2 + 15) + " " + (t.x + o / 2) + "\n      Q" + (t.y - (t.y - n.y - u) / 2) + " " + (t.x + o / 2) + "\n       " + (t.y - (t.y - n.y - u) / 2) + " " + (t.x + o / 2 - r(t.x, n.x, 15)) + "\n      L " + (t.y - (t.y - n.y - u) / 2) + " " + (n.x + o / 2) + "\n      L " + (n.y + u) + " " + (n.x + o / 2) : "M " + (t.x + u / 2) + " " + t.y + "\n      L " + (t.x + u / 2) + " " + (t.y - (t.y - n.y - o) / 2 + 15) + "\n      Q" + (t.x + u / 2) + " " + (t.y - (t.y - n.y - o) / 2) + "\n      " + (t.x + u / 2 - r(t.x, n.x, 15)) + " " + (t.y - (t.y - n.y - o) / 2) + "\n      L " + (n.x + u / 2) + " " + (t.y - (t.y - n.y - o) / 2) + " \n      L " + (n.x + u / 2) + " " + (n.y + o) + " " : i ? "M " + t.y + " " + (t.x + o / 2) + "\n        C " + (t.y + n.y + u) / 2 + " " + (t.x + o / 2) + "\n          " + (t.y + n.y + u) / 2 + " " + (n.x + o / 2) + "\n          " + (n.y + u) + " " + (n.x + o / 2) : "M " + (t.x + u / 2) + " " + t.y + "\n        C " + (t.x + u / 2) + " " + (t.y + n.y + o) / 2 + "\n          " + (n.x + u / 2) + " " + (t.y + n.y + o) / 2 + "\n          " + (n.x + u / 2) + " " + (n.y + o) + " "
        };
        var r = function(t, n, e) {
            return t > n ? e : t < n ? -e : 0
        }
    }, function(t, n, e) {
        "use strict";
        var r = e(10),
            i = e(3);
        n.a = function(t) {
            var n = Object(r.a)();
            return n.changedTouches && (n = n.changedTouches[0]), Object(i.a)(t, n)
        }
    }, function(t, n, e) {
        "use strict";
        var r = e(10),
            i = e(3);
        n.a = function(t, n, e) {
            arguments.length < 3 && (e = n, n = Object(r.a)().changedTouches);
            for (var o, u = 0, a = n ? n.length : 0; u < a; ++u)
                if ((o = n[u]).identifier === e) return Object(i.a)(t, o);
            return null
        }
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e(33),
            i = e(0),
            o = e(32);
        n.default = {
            hierarchy: r.hierarchy,
            stratify: r.stratify,
            tree: r.tree,
            treemap: r.treemap,
            select: i.select,
            selectAll: i.selectAll,
            event: i.event,
            zoom: o.zoom
        }
    }, , , , function(t, n, e) {
        "use strict";
        var r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var n, e = 1, r = arguments.length; e < r; e++)
                        for (var i in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                    return t
                }).apply(this, arguments)
            },
            i = this && this.__spreadArrays || function() {
                for (var t = 0, n = 0, e = arguments.length; n < e; n++) t += arguments[n].length;
                var r = Array(t),
                    i = 0;
                for (n = 0; n < e; n++)
                    for (var o = arguments[n], u = 0, a = o.length; u < a; u++, i++) r[i] = o[u];
                return r
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.create = void 0;
        var o = e(24),
            u = e(25),
            a = e(26),
            c = e(27),
            s = e(28),
            l = e(29),
            f = e(30),
            h = e(31),
            d = e(5);
        n.create = function(t) {
            var n = r(r({}, {
                htmlId: "",
                idKey: "id",
                relationnalField: "father",
                hasFlatData: !0,
                nodeWidth: 160,
                nodeHeight: 100,
                mainAxisNodeSpacing: 300,
                renderNode: function() {
                    return "Node"
                },
                linkColor: function() {
                    return "#ffcc80"
                },
                linkWidth: function() {
                    return 10
                },
                linkShape: "quadraticBeziers",
                isHorizontal: !0,
                hasPanAndZoom: !1,
                duration: function() {
                    return 600
                },
                onNodeClick: function() {},
                onNodeMouseEnter: function() {},
                onNodeMouseLeave: function() {},
                marginBottom: 0,
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                secondaryAxisNodeSpacing: 1.25
            }), t);
            void 0 !== t.hasPanAndZoom && console.warn("[DEPRECATED] hasPanAndZoom is deprecated and will be removed in treeviz version 3. Use hasPan and hasZoom instead");
            var e = [],
                p = {
                    refresh: function(t, o) {
                        d.RefreshQueue.add(n.duration(), (function() {
                            o && (n = r(r({}, n), o));
                            var d = h.generateNestedData(t, n),
                                p = h.generateBasicTreemap(n)(d);
                            ! function(t, r) {
                                var o = r.descendants(),
                                    h = r.descendants().slice(1),
                                    d = n.mainAxisNodeSpacing;
                                "auto" !== d && o.forEach((function(t) {
                                    t.y = t.depth * n.nodeWidth * d
                                })), o.forEach((function(t) {
                                    var n = e.find((function(n) {
                                        return n.id === t.id
                                    }));
                                    t.x0 = n ? n.x0 : t.x, t.y0 = n ? n.y0 : t.y
                                }));
                                var p = t.selectAll("g.node").data(o, (function(t) {
                                        return t[n.idKey]
                                    })),
                                    v = s.drawNodeEnter(p, n, o, e);
                                f.drawNodeUpdate(v, p, n), l.drawNodeExit(p, n, o, e);
                                var y = t.selectAll("path.link").data(h, (function(t) {
                                        return t.id
                                    })),
                                    m = u.drawLinkEnter(y, n, o, e);
                                c.drawLinkUpdate(m, y, n), a.drawLinkExit(y, n, o, e), e = i(o)
                            }(v, p)
                        }))
                    },
                    clean: function(t) {
                        var r = t ? document.querySelector("#" + n.htmlId + " svg g") : document.querySelector("#" + n.htmlId);
                        if (r)
                            for (; r.firstChild;) r.removeChild(r.firstChild);
                        e = []
                    }
                },
                v = o.initiliazeSVG(n);
            return p
        }
    }, function(t, n, e) {
        "use strict";
        var r = this && this.__createBinding || (Object.create ? function(t, n, e, r) {
                void 0 === r && (r = e), Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function() {
                        return n[e]
                    }
                })
            } : function(t, n, e, r) {
                void 0 === r && (r = e), t[r] = n[e]
            }),
            i = this && this.__setModuleDefault || (Object.create ? function(t, n) {
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: n
                })
            } : function(t, n) {
                t.default = n
            }),
            o = this && this.__importStar || function(t) {
                if (t && t.__esModule) return t;
                var n = {};
                if (null != t)
                    for (var e in t) "default" !== e && Object.hasOwnProperty.call(t, e) && r(n, t, e);
                return i(n, t), n
            },
            u = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.initiliazeSVG = void 0;
        var a = o(e(0)),
            c = u(e(19)),
            s = e(5);
        n.initiliazeSVG = function(t) {
            var n = t.htmlId,
                e = t.isHorizontal,
                r = t.hasPanAndZoom,
                i = t.hasPan,
                o = t.hasZoom,
                u = t.mainAxisNodeSpacing,
                f = t.nodeHeight,
                h = t.nodeWidth,
                d = t.marginBottom,
                p = t.marginLeft,
                v = t.marginRight,
                y = t.marginTop,
                m = v,
                g = d,
                _ = p,
                w = s.getAreaSize(t.htmlId),
                x = w.areaHeight,
                b = w.areaWidth,
                k = b - _ - m,
                M = x - y - g,
                z = a.select("#" + n).append("svg").attr("width", b).attr("height", x).call(c.default.zoom().on("zoom", (function() {
                    return E.attr("transform", a.event.transform)
                }))),
                A = l(r, i, o),
                N = A[0],
                O = A[1];
            N || z.on("mousedown.zoom", null).on("touchstart.zoom", null).on("touchmove.zoom", null).on("touchend.zoom", null), O || z.on("wheel.zoom", null).on("mousewheel.zoom", null).on("mousemove.zoom", null).on("DOMMouseScroll.zoom", null).on("dblclick.zoom", null);
            var E = z.append("g");
            return E.append("g").attr("transform", "auto" === u ? "translate(0,0)" : e ? "translate(" + _ + "," + (y + M / 2 - f / 2) + ")" : "translate(" + (_ + k / 2 - h / 2) + "," + y + ")")
        };
        var l = function(t, n, e) {
            var r = [!1, !1];
            return !0 !== t && !1 !== t || (r = [t, t]), !0 !== n && !1 !== n || (r[0] = n), !0 !== e && !1 !== e || (r[1] = e), r
        }
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.drawLinkEnter = void 0;
        var r = e(5),
            i = e(16);
        n.drawLinkEnter = function(t, n, e, o) {
            return t.enter().insert("path", "g").attr("class", "link").attr("d", (function(t) {
                var u = r.getFirstDisplayedAncestor(e, o, t.id),
                    a = {
                        x: u.x0,
                        y: u.y0
                    };
                return i.generateLinkLayout(a, a, n)
            })).attr("fill", "none").attr("stroke-width", (function(t) {
                var e = t.data;
                return n.linkWidth(e)
            })).attr("stroke", (function(t) {
                var e = t.data;
                return n.linkColor(e)
            }))
        }
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.drawLinkExit = void 0;
        var r = e(5),
            i = e(16);
        n.drawLinkExit = function(t, n, e, o) {
            t.exit().transition().duration(n.duration()).style("opacity", 0).attr("d", (function(t) {
                var u = r.getFirstDisplayedAncestor(o, e, t.id),
                    a = {
                        x: u.x0,
                        y: u.y0
                    };
                return i.generateLinkLayout(a, a, n)
            })).remove()
        }
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.drawLinkUpdate = void 0;
        var r = e(16);
        n.drawLinkUpdate = function(t, n, e) {
            t.merge(n).transition().duration(e.duration()).attr("d", (function(t) {
                return r.generateLinkLayout(t, t.parent, e)
            })).attr("fill", "none").attr("stroke-width", (function(t) {
                var n = t.data;
                return e.linkWidth(n)
            })).attr("stroke", (function(t) {
                var n = t.data;
                return e.linkColor(n)
            }))
        }
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.drawNodeEnter = void 0;
        var r = e(5);
        n.drawNodeEnter = function(t, n, e, i) {
            var o = t.enter().append("g").attr("class", "node").attr("transform", (function(t) {
                var o = r.getFirstDisplayedAncestor(e, i, t.id);
                return r.setNodeLocation(o.x0, o.y0, n)
            }));
            return o.append("foreignObject").attr("width", n.nodeWidth).attr("height", n.nodeHeight), o
        }
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.drawNodeExit = void 0;
        var r = e(5);
        n.drawNodeExit = function(t, n, e, i) {
            var o = t.exit().transition().duration(n.duration()).style("opacity", 0).attr("transform", (function(t) {
                var o = r.getFirstDisplayedAncestor(i, e, t.id);
                return r.setNodeLocation(o.x0, o.y0, n)
            })).remove();
            o.select("rect").style("fill-opacity", 1e-6), o.select("circle").attr("r", 1e-6), o.select("text").style("fill-opacity", 1e-6)
        }
    }, function(t, n, e) {
        "use strict";
        var r = this && this.__assign || function() {
            return (r = Object.assign || function(t) {
                for (var n, e = 1, r = arguments.length; e < r; e++)
                    for (var i in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                return t
            }).apply(this, arguments)
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.drawNodeUpdate = void 0, n.drawNodeUpdate = function(t, n, e) {
            var i = t.merge(n);
            i.transition().duration(e.duration()).attr("transform", (function(t) {
                return e.isHorizontal ? "translate(" + t.y + "," + t.x + ")" : "translate(" + t.x + "," + t.y + ")"
            })), i.select("foreignObject").attr("width", e.nodeWidth).attr("height", e.nodeHeight).style("overflow", "visible").on("click", e.onNodeClick).on("mouseenter", e.onNodeMouseEnter).on("mouseleave", e.onNodeMouseLeave).html((function(t) {
                return e.renderNode(r(r({}, t), {
                    settings: e
                }))
            }))
        }
    }, function(t, n, e) {
        "use strict";
        var r = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.generateBasicTreemap = n.generateNestedData = void 0;
        var i = r(e(19)),
            o = e(5);
        n.generateNestedData = function(t, n) {
            var e = n.idKey,
                r = n.relationnalField;
            return n.hasFlatData ? i.default.stratify().id((function(t) {
                return t[e]
            })).parentId((function(t) {
                return t[r]
            }))(t) : i.default.hierarchy(t, (function(t) {
                return t[r]
            }))
        }, n.generateBasicTreemap = function(t) {
            var n = o.getAreaSize(t.htmlId),
                e = n.areaHeight,
                r = n.areaWidth;
            return "auto" === t.mainAxisNodeSpacing && t.isHorizontal ? i.default.tree().size([e - t.nodeHeight, r - t.nodeWidth]) : "auto" !== t.mainAxisNodeSpacing || t.isHorizontal ? !0 === t.isHorizontal ? i.default.tree().nodeSize([t.nodeHeight * t.secondaryAxisNodeSpacing, t.nodeWidth]) : i.default.tree().nodeSize([t.nodeWidth * t.secondaryAxisNodeSpacing, t.nodeHeight]) : i.default.tree().size([r - t.nodeWidth, e - t.nodeHeight])
        }
    }, function(t, n, e) {
        "use strict";
        e.r(n), e.d(n, "zoom", (function() {
            return Hn
        })), e.d(n, "zoomTransform", (function() {
            return jn
        })), e.d(n, "zoomIdentity", (function() {
            return En
        }));
        var r = {
            value: function() {}
        };

        function i() {
            for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
                if (!(t = arguments[n] + "") || t in r || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
                r[t] = []
            }
            return new o(r)
        }

        function o(t) {
            this._ = t
        }

        function u(t, n) {
            return t.trim().split(/^|\s+/).map((function(t) {
                var e = "",
                    r = t.indexOf(".");
                if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                return {
                    type: t,
                    name: e
                }
            }))
        }

        function a(t, n) {
            for (var e, r = 0, i = t.length; r < i; ++r)
                if ((e = t[r]).name === n) return e.value
        }

        function c(t, n, e) {
            for (var i = 0, o = t.length; i < o; ++i)
                if (t[i].name === n) {
                    t[i] = r, t = t.slice(0, i).concat(t.slice(i + 1));
                    break
                } return null != e && t.push({
                name: n,
                value: e
            }), t
        }
        o.prototype = i.prototype = {
            constructor: o,
            on: function(t, n) {
                var e, r = this._,
                    i = u(t + "", r),
                    o = -1,
                    s = i.length;
                if (!(arguments.length < 2)) {
                    if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                    for (; ++o < s;)
                        if (e = (t = i[o]).type) r[e] = c(r[e], t.name, n);
                        else if (null == n)
                        for (e in r) r[e] = c(r[e], t.name, null);
                    return this
                }
                for (; ++o < s;)
                    if ((e = (t = i[o]).type) && (e = a(r[e], t.name))) return e
            },
            copy: function() {
                var t = {},
                    n = this._;
                for (var e in n) t[e] = n[e].slice();
                return new o(t)
            },
            call: function(t, n) {
                if ((e = arguments.length - 2) > 0)
                    for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2];
                if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                for (o = 0, e = (r = this._[t]).length; o < e; ++o) r[o].value.apply(n, i)
            },
            apply: function(t, n, e) {
                if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e)
            }
        };
        var s = i,
            l = e(11),
            f = e(6);
        var h = function() {
                f.c.preventDefault(), f.c.stopImmediatePropagation()
            },
            d = function(t) {
                var n = t.document.documentElement,
                    e = Object(l.a)(t).on("dragstart.drag", h, !0);
                "onselectstart" in n ? e.on("selectstart.drag", h, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
            };

        function p(t, n) {
            var e = t.document.documentElement,
                r = Object(l.a)(t).on("dragstart.drag", null);
            n && (r.on("click.drag", h, !0), setTimeout((function() {
                r.on("click.drag", null)
            }), 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
        }
        var v = Math.SQRT2;

        function y(t) {
            return ((t = Math.exp(t)) + 1 / t) / 2
        }
        var m, g, _ = function(t, n) {
                var e, r, i = t[0],
                    o = t[1],
                    u = t[2],
                    a = n[0],
                    c = n[1],
                    s = n[2],
                    l = a - i,
                    f = c - o,
                    h = l * l + f * f;
                if (h < 1e-12) r = Math.log(s / u) / v, e = function(t) {
                    return [i + t * l, o + t * f, u * Math.exp(v * t * r)]
                };
                else {
                    var d = Math.sqrt(h),
                        p = (s * s - u * u + 4 * h) / (2 * u * 2 * d),
                        m = (s * s - u * u - 4 * h) / (2 * s * 2 * d),
                        g = Math.log(Math.sqrt(p * p + 1) - p),
                        _ = Math.log(Math.sqrt(m * m + 1) - m);
                    r = (_ - g) / v, e = function(t) {
                        var n, e = t * r,
                            a = y(g),
                            c = u / (2 * d) * (a * (n = v * e + g, ((n = Math.exp(2 * n)) - 1) / (n + 1)) - function(t) {
                                return ((t = Math.exp(t)) - 1 / t) / 2
                            }(g));
                        return [i + c * l, o + c * f, u * a / y(v * e + g)]
                    }
                }
                return e.duration = 1e3 * r, e
            },
            w = e(17),
            x = e(18),
            b = e(1),
            k = 0,
            M = 0,
            z = 0,
            A = 0,
            N = 0,
            O = 0,
            E = "object" == typeof performance && performance.now ? performance : Date,
            j = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
                setTimeout(t, 17)
            };

        function S() {
            return N || (j(P), N = E.now() + O)
        }

        function P() {
            N = 0
        }

        function L() {
            this._call = this._time = this._next = null
        }

        function T(t, n, e) {
            var r = new L;
            return r.restart(t, n, e), r
        }

        function q() {
            N = (A = E.now()) + O, k = M = 0;
            try {
                ! function() {
                    S(), ++k;
                    for (var t, n = m; n;)(t = N - n._time) >= 0 && n._call.call(null, t), n = n._next;
                    --k
                }()
            } finally {
                k = 0,
                    function() {
                        var t, n, e = m,
                            r = 1 / 0;
                        for (; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : m = n);
                        g = t, C(r)
                    }(), N = 0
            }
        }

        function B() {
            var t = E.now(),
                n = t - A;
            n > 1e3 && (O -= n, A = t)
        }

        function C(t) {
            k || (M && (M = clearTimeout(M)), t - N > 24 ? (t < 1 / 0 && (M = setTimeout(q, t - E.now() - O)), z && (z = clearInterval(z))) : (z || (A = E.now(), z = setInterval(B, 1e3)), k = 1, j(q)))
        }
        L.prototype = T.prototype = {
            constructor: L,
            restart: function(t, n, e) {
                if ("function" != typeof t) throw new TypeError("callback is not a function");
                e = (null == e ? S() : +e) + (null == n ? 0 : +n), this._next || g === this || (g ? g._next = this : m = this, g = this), this._call = t, this._time = e, C()
            },
            stop: function() {
                this._call && (this._call = null, this._time = 1 / 0, C())
            }
        };
        var D = function(t, n, e) {
                var r = new L;
                return n = null == n ? 0 : +n, r.restart((function(e) {
                    r.stop(), t(e + n)
                }), n, e), r
            },
            H = s("start", "end", "cancel", "interrupt"),
            I = [],
            R = function(t, n, e, r, i, o) {
                var u = t.__transition;
                if (u) {
                    if (e in u) return
                } else t.__transition = {};
                ! function(t, n, e) {
                    var r, i = t.__transition;

                    function o(c) {
                        var s, l, f, h;
                        if (1 !== e.state) return a();
                        for (s in i)
                            if ((h = i[s]).name === e.name) {
                                if (3 === h.state) return D(o);
                                4 === h.state ? (h.state = 6, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete i[s]) : +s < n && (h.state = 6, h.timer.stop(), h.on.call("cancel", t, t.__data__, h.index, h.group), delete i[s])
                            } if (D((function() {
                                3 === e.state && (e.state = 4, e.timer.restart(u, e.delay, e.time), u(c))
                            })), e.state = 2, e.on.call("start", t, t.__data__, e.index, e.group), 2 === e.state) {
                            for (e.state = 3, r = new Array(f = e.tween.length), s = 0, l = -1; s < f; ++s)(h = e.tween[s].value.call(t, t.__data__, e.index, e.group)) && (r[++l] = h);
                            r.length = l + 1
                        }
                    }

                    function u(n) {
                        for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(a), e.state = 5, 1), o = -1, u = r.length; ++o < u;) r[o].call(t, i);
                        5 === e.state && (e.on.call("end", t, t.__data__, e.index, e.group), a())
                    }

                    function a() {
                        for (var r in e.state = 6, e.timer.stop(), delete i[n], i) return;
                        delete t.__transition
                    }
                    i[n] = e, e.timer = T((function(t) {
                        e.state = 1, e.timer.restart(o, e.delay, e.time), e.delay <= t && o(t - e.delay)
                    }), 0, e.time)
                }(t, e, {
                    name: n,
                    index: r,
                    group: i,
                    on: H,
                    tween: I,
                    time: o.time,
                    delay: o.delay,
                    duration: o.duration,
                    ease: o.ease,
                    timer: null,
                    state: 0
                })
            };

        function X(t, n) {
            var e = Y(t, n);
            if (e.state > 0) throw new Error("too late; already scheduled");
            return e
        }

        function V(t, n) {
            var e = Y(t, n);
            if (e.state > 3) throw new Error("too late; already running");
            return e
        }

        function Y(t, n) {
            var e = t.__transition;
            if (!e || !(e = e[n])) throw new Error("transition not found");
            return e
        }
        var W, F, U, $, G = function(t, n) {
                var e, r, i, o = t.__transition,
                    u = !0;
                if (o) {
                    for (i in n = null == n ? null : n + "", o)(e = o[i]).name === n ? (r = e.state > 2 && e.state < 5, e.state = 6, e.timer.stop(), e.on.call(r ? "interrupt" : "cancel", t, t.__data__, e.index, e.group), delete o[i]) : u = !1;
                    u && delete t.__transition
                }
            },
            Q = function(t, n) {
                return t = +t, n = +n,
                    function(e) {
                        return t * (1 - e) + n * e
                    }
            },
            Z = 180 / Math.PI,
            K = {
                translateX: 0,
                translateY: 0,
                rotate: 0,
                skewX: 0,
                scaleX: 1,
                scaleY: 1
            },
            J = function(t, n, e, r, i, o) {
                var u, a, c;
                return (u = Math.sqrt(t * t + n * n)) && (t /= u, n /= u), (c = t * e + n * r) && (e -= t * c, r -= n * c), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, c /= a), t * r < n * e && (t = -t, n = -n, c = -c, u = -u), {
                    translateX: i,
                    translateY: o,
                    rotate: Math.atan2(n, t) * Z,
                    skewX: Math.atan(c) * Z,
                    scaleX: u,
                    scaleY: a
                }
            };

        function tt(t, n, e, r) {
            function i(t) {
                return t.length ? t.pop() + " " : ""
            }
            return function(o, u) {
                var a = [],
                    c = [];
                return o = t(o), u = t(u),
                    function(t, r, i, o, u, a) {
                        if (t !== i || r !== o) {
                            var c = u.push("translate(", null, n, null, e);
                            a.push({
                                i: c - 4,
                                x: Q(t, i)
                            }, {
                                i: c - 2,
                                x: Q(r, o)
                            })
                        } else(i || o) && u.push("translate(" + i + n + o + e)
                    }(o.translateX, o.translateY, u.translateX, u.translateY, a, c),
                    function(t, n, e, o) {
                        t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({
                            i: e.push(i(e) + "rotate(", null, r) - 2,
                            x: Q(t, n)
                        })) : n && e.push(i(e) + "rotate(" + n + r)
                    }(o.rotate, u.rotate, a, c),
                    function(t, n, e, o) {
                        t !== n ? o.push({
                            i: e.push(i(e) + "skewX(", null, r) - 2,
                            x: Q(t, n)
                        }) : n && e.push(i(e) + "skewX(" + n + r)
                    }(o.skewX, u.skewX, a, c),
                    function(t, n, e, r, o, u) {
                        if (t !== e || n !== r) {
                            var a = o.push(i(o) + "scale(", null, ",", null, ")");
                            u.push({
                                i: a - 4,
                                x: Q(t, e)
                            }, {
                                i: a - 2,
                                x: Q(n, r)
                            })
                        } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")")
                    }(o.scaleX, o.scaleY, u.scaleX, u.scaleY, a, c), o = u = null,
                    function(t) {
                        for (var n, e = -1, r = c.length; ++e < r;) a[(n = c[e]).i] = n.x(t);
                        return a.join("")
                    }
            }
        }
        var nt = tt((function(t) {
                return "none" === t ? K : (W || (W = document.createElement("DIV"), F = document.documentElement, U = document.defaultView), W.style.transform = t, t = U.getComputedStyle(F.appendChild(W), null).getPropertyValue("transform"), F.removeChild(W), t = t.slice(7, -1).split(","), J(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
            }), "px, ", "px)", "deg)"),
            et = tt((function(t) {
                return null == t ? K : ($ || ($ = document.createElementNS("http://www.w3.org/2000/svg", "g")), $.setAttribute("transform", t), (t = $.transform.baseVal.consolidate()) ? (t = t.matrix, J(t.a, t.b, t.c, t.d, t.e, t.f)) : K)
            }), ", ", ")", ")"),
            rt = e(8);

        function it(t, n) {
            var e, r;
            return function() {
                var i = V(this, t),
                    o = i.tween;
                if (o !== e)
                    for (var u = 0, a = (r = e = o).length; u < a; ++u)
                        if (r[u].name === n) {
                            (r = r.slice()).splice(u, 1);
                            break
                        } i.tween = r
            }
        }

        function ot(t, n, e) {
            var r, i;
            if ("function" != typeof e) throw new Error;
            return function() {
                var o = V(this, t),
                    u = o.tween;
                if (u !== r) {
                    i = (r = u).slice();
                    for (var a = {
                            name: n,
                            value: e
                        }, c = 0, s = i.length; c < s; ++c)
                        if (i[c].name === n) {
                            i[c] = a;
                            break
                        } c === s && i.push(a)
                }
                o.tween = i
            }
        }

        function ut(t, n, e) {
            var r = t._id;
            return t.each((function() {
                    var t = V(this, r);
                    (t.value || (t.value = {}))[n] = e.apply(this, arguments)
                })),
                function(t) {
                    return Y(t, r).value[n]
                }
        }
        var at = function(t, n, e) {
            t.prototype = n.prototype = e, e.constructor = t
        };

        function ct(t, n) {
            var e = Object.create(t.prototype);
            for (var r in n) e[r] = n[r];
            return e
        }

        function st() {}
        var lt = "\\s*([+-]?\\d+)\\s*",
            ft = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
            ht = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
            dt = /^#([0-9a-f]{3,8})$/,
            pt = new RegExp("^rgb\\(" + [lt, lt, lt] + "\\)$"),
            vt = new RegExp("^rgb\\(" + [ht, ht, ht] + "\\)$"),
            yt = new RegExp("^rgba\\(" + [lt, lt, lt, ft] + "\\)$"),
            mt = new RegExp("^rgba\\(" + [ht, ht, ht, ft] + "\\)$"),
            gt = new RegExp("^hsl\\(" + [ft, ht, ht] + "\\)$"),
            _t = new RegExp("^hsla\\(" + [ft, ht, ht, ft] + "\\)$"),
            wt = {
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            };

        function xt() {
            return this.rgb().formatHex()
        }

        function bt() {
            return this.rgb().formatRgb()
        }

        function kt(t) {
            var n, e;
            return t = (t + "").trim().toLowerCase(), (n = dt.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), 6 === e ? Mt(n) : 3 === e ? new Ot(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : 8 === e ? zt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (255 & n) / 255) : 4 === e ? zt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, ((15 & n) << 4 | 15 & n) / 255) : null) : (n = pt.exec(t)) ? new Ot(n[1], n[2], n[3], 1) : (n = vt.exec(t)) ? new Ot(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = yt.exec(t)) ? zt(n[1], n[2], n[3], n[4]) : (n = mt.exec(t)) ? zt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = gt.exec(t)) ? Pt(n[1], n[2] / 100, n[3] / 100, 1) : (n = _t.exec(t)) ? Pt(n[1], n[2] / 100, n[3] / 100, n[4]) : wt.hasOwnProperty(t) ? Mt(wt[t]) : "transparent" === t ? new Ot(NaN, NaN, NaN, 0) : null
        }

        function Mt(t) {
            return new Ot(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
        }

        function zt(t, n, e, r) {
            return r <= 0 && (t = n = e = NaN), new Ot(t, n, e, r)
        }

        function At(t) {
            return t instanceof st || (t = kt(t)), t ? new Ot((t = t.rgb()).r, t.g, t.b, t.opacity) : new Ot
        }

        function Nt(t, n, e, r) {
            return 1 === arguments.length ? At(t) : new Ot(t, n, e, null == r ? 1 : r)
        }

        function Ot(t, n, e, r) {
            this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
        }

        function Et() {
            return "#" + St(this.r) + St(this.g) + St(this.b)
        }

        function jt() {
            var t = this.opacity;
            return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
        }

        function St(t) {
            return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
        }

        function Pt(t, n, e, r) {
            return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Tt(t, n, e, r)
        }

        function Lt(t) {
            if (t instanceof Tt) return new Tt(t.h, t.s, t.l, t.opacity);
            if (t instanceof st || (t = kt(t)), !t) return new Tt;
            if (t instanceof Tt) return t;
            var n = (t = t.rgb()).r / 255,
                e = t.g / 255,
                r = t.b / 255,
                i = Math.min(n, e, r),
                o = Math.max(n, e, r),
                u = NaN,
                a = o - i,
                c = (o + i) / 2;
            return a ? (u = n === o ? (e - r) / a + 6 * (e < r) : e === o ? (r - n) / a + 2 : (n - e) / a + 4, a /= c < .5 ? o + i : 2 - o - i, u *= 60) : a = c > 0 && c < 1 ? 0 : u, new Tt(u, a, c, t.opacity)
        }

        function Tt(t, n, e, r) {
            this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
        }

        function qt(t, n, e) {
            return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
        }

        function Bt(t, n, e, r, i) {
            var o = t * t,
                u = o * t;
            return ((1 - 3 * t + 3 * o - u) * n + (4 - 6 * o + 3 * u) * e + (1 + 3 * t + 3 * o - 3 * u) * r + u * i) / 6
        }
        at(st, kt, {
            copy: function(t) {
                return Object.assign(new this.constructor, this, t)
            },
            displayable: function() {
                return this.rgb().displayable()
            },
            hex: xt,
            formatHex: xt,
            formatHsl: function() {
                return Lt(this).formatHsl()
            },
            formatRgb: bt,
            toString: bt
        }), at(Ot, Nt, ct(st, {
            brighter: function(t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Ot(this.r * t, this.g * t, this.b * t, this.opacity)
            },
            darker: function(t) {
                return t = null == t ? .7 : Math.pow(.7, t), new Ot(this.r * t, this.g * t, this.b * t, this.opacity)
            },
            rgb: function() {
                return this
            },
            displayable: function() {
                return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
            },
            hex: Et,
            formatHex: Et,
            formatRgb: jt,
            toString: jt
        })), at(Tt, (function(t, n, e, r) {
            return 1 === arguments.length ? Lt(t) : new Tt(t, n, e, null == r ? 1 : r)
        }), ct(st, {
            brighter: function(t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Tt(this.h, this.s, this.l * t, this.opacity)
            },
            darker: function(t) {
                return t = null == t ? .7 : Math.pow(.7, t), new Tt(this.h, this.s, this.l * t, this.opacity)
            },
            rgb: function() {
                var t = this.h % 360 + 360 * (this.h < 0),
                    n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                    e = this.l,
                    r = e + (e < .5 ? e : 1 - e) * n,
                    i = 2 * e - r;
                return new Ot(qt(t >= 240 ? t - 240 : t + 120, i, r), qt(t, i, r), qt(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
            },
            displayable: function() {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
            },
            formatHsl: function() {
                var t = this.opacity;
                return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")")
            }
        }));
        var Ct = function(t) {
            return function() {
                return t
            }
        };

        function Dt(t, n) {
            return function(e) {
                return t + e * n
            }
        }

        function Ht(t) {
            return 1 == (t = +t) ? It : function(n, e) {
                return e - n ? function(t, n, e) {
                    return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
                        function(r) {
                            return Math.pow(t + r * n, e)
                        }
                }(n, e, t) : Ct(isNaN(n) ? e : n)
            }
        }

        function It(t, n) {
            var e = n - t;
            return e ? Dt(t, e) : Ct(isNaN(t) ? n : t)
        }
        var Rt = function t(n) {
            var e = Ht(n);

            function r(t, n) {
                var r = e((t = Nt(t)).r, (n = Nt(n)).r),
                    i = e(t.g, n.g),
                    o = e(t.b, n.b),
                    u = It(t.opacity, n.opacity);
                return function(n) {
                    return t.r = r(n), t.g = i(n), t.b = o(n), t.opacity = u(n), t + ""
                }
            }
            return r.gamma = t, r
        }(1);

        function Xt(t) {
            return function(n) {
                var e, r, i = n.length,
                    o = new Array(i),
                    u = new Array(i),
                    a = new Array(i);
                for (e = 0; e < i; ++e) r = Nt(n[e]), o[e] = r.r || 0, u[e] = r.g || 0, a[e] = r.b || 0;
                return o = t(o), u = t(u), a = t(a), r.opacity = 1,
                    function(t) {
                        return r.r = o(t), r.g = u(t), r.b = a(t), r + ""
                    }
            }
        }
        Xt((function(t) {
            var n = t.length - 1;
            return function(e) {
                var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
                    i = t[r],
                    o = t[r + 1],
                    u = r > 0 ? t[r - 1] : 2 * i - o,
                    a = r < n - 1 ? t[r + 2] : 2 * o - i;
                return Bt((e - r / n) * n, u, i, o, a)
            }
        })), Xt((function(t) {
            var n = t.length;
            return function(e) {
                var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                    i = t[(r + n - 1) % n],
                    o = t[r % n],
                    u = t[(r + 1) % n],
                    a = t[(r + 2) % n];
                return Bt((e - r / n) * n, i, o, u, a)
            }
        }));
        var Vt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
            Yt = new RegExp(Vt.source, "g");
        var Wt = function(t, n) {
                var e, r, i, o = Vt.lastIndex = Yt.lastIndex = 0,
                    u = -1,
                    a = [],
                    c = [];
                for (t += "", n += "";
                    (e = Vt.exec(t)) && (r = Yt.exec(n));)(i = r.index) > o && (i = n.slice(o, i), a[u] ? a[u] += i : a[++u] = i), (e = e[0]) === (r = r[0]) ? a[u] ? a[u] += r : a[++u] = r : (a[++u] = null, c.push({
                    i: u,
                    x: Q(e, r)
                })), o = Yt.lastIndex;
                return o < n.length && (i = n.slice(o), a[u] ? a[u] += i : a[++u] = i), a.length < 2 ? c[0] ? function(t) {
                    return function(n) {
                        return t(n) + ""
                    }
                }(c[0].x) : function(t) {
                    return function() {
                        return t
                    }
                }(n) : (n = c.length, function(t) {
                    for (var e, r = 0; r < n; ++r) a[(e = c[r]).i] = e.x(t);
                    return a.join("")
                })
            },
            Ft = function(t, n) {
                var e;
                return ("number" == typeof n ? Q : n instanceof kt ? Rt : (e = kt(n)) ? (n = e, Rt) : Wt)(t, n)
            };

        function Ut(t) {
            return function() {
                this.removeAttribute(t)
            }
        }

        function $t(t) {
            return function() {
                this.removeAttributeNS(t.space, t.local)
            }
        }

        function Gt(t, n, e) {
            var r, i, o = e + "";
            return function() {
                var u = this.getAttribute(t);
                return u === o ? null : u === r ? i : i = n(r = u, e)
            }
        }

        function Qt(t, n, e) {
            var r, i, o = e + "";
            return function() {
                var u = this.getAttributeNS(t.space, t.local);
                return u === o ? null : u === r ? i : i = n(r = u, e)
            }
        }

        function Zt(t, n, e) {
            var r, i, o;
            return function() {
                var u, a, c = e(this);
                if (null != c) return (u = this.getAttribute(t)) === (a = c + "") ? null : u === r && a === i ? o : (i = a, o = n(r = u, c));
                this.removeAttribute(t)
            }
        }

        function Kt(t, n, e) {
            var r, i, o;
            return function() {
                var u, a, c = e(this);
                if (null != c) return (u = this.getAttributeNS(t.space, t.local)) === (a = c + "") ? null : u === r && a === i ? o : (i = a, o = n(r = u, c));
                this.removeAttributeNS(t.space, t.local)
            }
        }

        function Jt(t, n) {
            return function(e) {
                this.setAttribute(t, n.call(this, e))
            }
        }

        function tn(t, n) {
            return function(e) {
                this.setAttributeNS(t.space, t.local, n.call(this, e))
            }
        }

        function nn(t, n) {
            var e, r;

            function i() {
                var i = n.apply(this, arguments);
                return i !== r && (e = (r = i) && tn(t, i)), e
            }
            return i._value = n, i
        }

        function en(t, n) {
            var e, r;

            function i() {
                var i = n.apply(this, arguments);
                return i !== r && (e = (r = i) && Jt(t, i)), e
            }
            return i._value = n, i
        }

        function rn(t, n) {
            return function() {
                X(this, t).delay = +n.apply(this, arguments)
            }
        }

        function on(t, n) {
            return n = +n,
                function() {
                    X(this, t).delay = n
                }
        }

        function un(t, n) {
            return function() {
                V(this, t).duration = +n.apply(this, arguments)
            }
        }

        function an(t, n) {
            return n = +n,
                function() {
                    V(this, t).duration = n
                }
        }

        function cn(t, n) {
            if ("function" != typeof n) throw new Error;
            return function() {
                V(this, t).ease = n
            }
        }
        var sn = e(13);

        function ln(t, n, e) {
            var r, i, o = function(t) {
                return (t + "").trim().split(/^|\s+/).every((function(t) {
                    var n = t.indexOf(".");
                    return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
                }))
            }(n) ? X : V;
            return function() {
                var u = o(this, t),
                    a = u.on;
                a !== r && (i = (r = a).copy()).on(n, e), u.on = i
            }
        }
        var fn = e(7),
            hn = e(12),
            dn = b.b.prototype.constructor,
            pn = e(14);

        function vn(t) {
            return function() {
                this.style.removeProperty(t)
            }
        }

        function yn(t, n, e) {
            return function(r) {
                this.style.setProperty(t, n.call(this, r), e)
            }
        }

        function mn(t, n, e) {
            var r, i;

            function o() {
                var o = n.apply(this, arguments);
                return o !== i && (r = (i = o) && yn(t, o, e)), r
            }
            return o._value = n, o
        }

        function gn(t) {
            return function(n) {
                this.textContent = t.call(this, n)
            }
        }

        function _n(t) {
            var n, e;

            function r() {
                var r = t.apply(this, arguments);
                return r !== e && (n = (e = r) && gn(r)), n
            }
            return r._value = t, r
        }
        var wn = 0;

        function xn(t, n, e, r) {
            this._groups = t, this._parents = n, this._name = e, this._id = r
        }

        function bn() {
            return ++wn
        }
        var kn = b.b.prototype;
        xn.prototype = function(t) {
            return Object(b.b)().transition(t)
        }.prototype = {
            constructor: xn,
            select: function(t) {
                var n = this._name,
                    e = this._id;
                "function" != typeof t && (t = Object(fn.a)(t));
                for (var r = this._groups, i = r.length, o = new Array(i), u = 0; u < i; ++u)
                    for (var a, c, s = r[u], l = s.length, f = o[u] = new Array(l), h = 0; h < l; ++h)(a = s[h]) && (c = t.call(a, a.__data__, h, s)) && ("__data__" in a && (c.__data__ = a.__data__), f[h] = c, R(f[h], n, e, h, f, Y(a, e)));
                return new xn(o, this._parents, n, e)
            },
            selectAll: function(t) {
                var n = this._name,
                    e = this._id;
                "function" != typeof t && (t = Object(hn.a)(t));
                for (var r = this._groups, i = r.length, o = [], u = [], a = 0; a < i; ++a)
                    for (var c, s = r[a], l = s.length, f = 0; f < l; ++f)
                        if (c = s[f]) {
                            for (var h, d = t.call(c, c.__data__, f, s), p = Y(c, e), v = 0, y = d.length; v < y; ++v)(h = d[v]) && R(h, n, e, v, d, p);
                            o.push(d), u.push(c)
                        } return new xn(o, u, n, e)
            },
            filter: function(t) {
                "function" != typeof t && (t = Object(sn.a)(t));
                for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                    for (var o, u = n[i], a = u.length, c = r[i] = [], s = 0; s < a; ++s)(o = u[s]) && t.call(o, o.__data__, s, u) && c.push(o);
                return new xn(r, this._parents, this._name, this._id)
            },
            merge: function(t) {
                if (t._id !== this._id) throw new Error;
                for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a)
                    for (var c, s = n[a], l = e[a], f = s.length, h = u[a] = new Array(f), d = 0; d < f; ++d)(c = s[d] || l[d]) && (h[d] = c);
                for (; a < r; ++a) u[a] = n[a];
                return new xn(u, this._parents, this._name, this._id)
            },
            selection: function() {
                return new dn(this._groups, this._parents)
            },
            transition: function() {
                for (var t = this._name, n = this._id, e = bn(), r = this._groups, i = r.length, o = 0; o < i; ++o)
                    for (var u, a = r[o], c = a.length, s = 0; s < c; ++s)
                        if (u = a[s]) {
                            var l = Y(u, n);
                            R(u, t, e, s, a, {
                                time: l.time + l.delay + l.duration,
                                delay: 0,
                                duration: l.duration,
                                ease: l.ease
                            })
                        } return new xn(r, this._parents, t, e)
            },
            call: kn.call,
            nodes: kn.nodes,
            node: kn.node,
            size: kn.size,
            empty: kn.empty,
            each: kn.each,
            on: function(t, n) {
                var e = this._id;
                return arguments.length < 2 ? Y(this.node(), e).on.on(t) : this.each(ln(e, t, n))
            },
            attr: function(t, n) {
                var e = Object(rt.a)(t),
                    r = "transform" === e ? et : Ft;
                return this.attrTween(t, "function" == typeof n ? (e.local ? Kt : Zt)(e, r, ut(this, "attr." + t, n)) : null == n ? (e.local ? $t : Ut)(e) : (e.local ? Qt : Gt)(e, r, n))
            },
            attrTween: function(t, n) {
                var e = "attr." + t;
                if (arguments.length < 2) return (e = this.tween(e)) && e._value;
                if (null == n) return this.tween(e, null);
                if ("function" != typeof n) throw new Error;
                var r = Object(rt.a)(t);
                return this.tween(e, (r.local ? nn : en)(r, n))
            },
            style: function(t, n, e) {
                var r = "transform" == (t += "") ? nt : Ft;
                return null == n ? this.styleTween(t, function(t, n) {
                    var e, r, i;
                    return function() {
                        var o = Object(pn.b)(this, t),
                            u = (this.style.removeProperty(t), Object(pn.b)(this, t));
                        return o === u ? null : o === e && u === r ? i : i = n(e = o, r = u)
                    }
                }(t, r)).on("end.style." + t, vn(t)) : "function" == typeof n ? this.styleTween(t, function(t, n, e) {
                    var r, i, o;
                    return function() {
                        var u = Object(pn.b)(this, t),
                            a = e(this),
                            c = a + "";
                        return null == a && (this.style.removeProperty(t), c = a = Object(pn.b)(this, t)), u === c ? null : u === r && c === i ? o : (i = c, o = n(r = u, a))
                    }
                }(t, r, ut(this, "style." + t, n))).each(function(t, n) {
                    var e, r, i, o, u = "style." + n,
                        a = "end." + u;
                    return function() {
                        var c = V(this, t),
                            s = c.on,
                            l = null == c.value[u] ? o || (o = vn(n)) : void 0;
                        s === e && i === l || (r = (e = s).copy()).on(a, i = l), c.on = r
                    }
                }(this._id, t)) : this.styleTween(t, function(t, n, e) {
                    var r, i, o = e + "";
                    return function() {
                        var u = Object(pn.b)(this, t);
                        return u === o ? null : u === r ? i : i = n(r = u, e)
                    }
                }(t, r, n), e).on("end.style." + t, null)
            },
            styleTween: function(t, n, e) {
                var r = "style." + (t += "");
                if (arguments.length < 2) return (r = this.tween(r)) && r._value;
                if (null == n) return this.tween(r, null);
                if ("function" != typeof n) throw new Error;
                return this.tween(r, mn(t, n, null == e ? "" : e))
            },
            text: function(t) {
                return this.tween("text", "function" == typeof t ? function(t) {
                    return function() {
                        var n = t(this);
                        this.textContent = null == n ? "" : n
                    }
                }(ut(this, "text", t)) : function(t) {
                    return function() {
                        this.textContent = t
                    }
                }(null == t ? "" : t + ""))
            },
            textTween: function(t) {
                var n = "text";
                if (arguments.length < 1) return (n = this.tween(n)) && n._value;
                if (null == t) return this.tween(n, null);
                if ("function" != typeof t) throw new Error;
                return this.tween(n, _n(t))
            },
            remove: function() {
                return this.on("end.remove", (t = this._id, function() {
                    var n = this.parentNode;
                    for (var e in this.__transition)
                        if (+e !== t) return;
                    n && n.removeChild(this)
                }));
                var t
            },
            tween: function(t, n) {
                var e = this._id;
                if (t += "", arguments.length < 2) {
                    for (var r, i = Y(this.node(), e).tween, o = 0, u = i.length; o < u; ++o)
                        if ((r = i[o]).name === t) return r.value;
                    return null
                }
                return this.each((null == n ? it : ot)(e, t, n))
            },
            delay: function(t) {
                var n = this._id;
                return arguments.length ? this.each(("function" == typeof t ? rn : on)(n, t)) : Y(this.node(), n).delay
            },
            duration: function(t) {
                var n = this._id;
                return arguments.length ? this.each(("function" == typeof t ? un : an)(n, t)) : Y(this.node(), n).duration
            },
            ease: function(t) {
                var n = this._id;
                return arguments.length ? this.each(cn(n, t)) : Y(this.node(), n).ease
            },
            end: function() {
                var t, n, e = this,
                    r = e._id,
                    i = e.size();
                return new Promise((function(o, u) {
                    var a = {
                            value: u
                        },
                        c = {
                            value: function() {
                                0 == --i && o()
                            }
                        };
                    e.each((function() {
                        var e = V(this, r),
                            i = e.on;
                        i !== t && ((n = (t = i).copy())._.cancel.push(a), n._.interrupt.push(a), n._.end.push(c)), e.on = n
                    }))
                }))
            }
        };
        var Mn = {
            time: null,
            delay: 0,
            duration: 250,
            ease: function(t) {
                return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
            }
        };

        function zn(t, n) {
            for (var e; !(e = t.__transition) || !(e = e[n]);)
                if (!(t = t.parentNode)) return Mn.time = S(), Mn;
            return e
        }
        b.b.prototype.interrupt = function(t) {
            return this.each((function() {
                G(this, t)
            }))
        }, b.b.prototype.transition = function(t) {
            var n, e;
            t instanceof xn ? (n = t._id, t = t._name) : (n = bn(), (e = Mn).time = S(), t = null == t ? null : t + "");
            for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
                for (var u, a = r[o], c = a.length, s = 0; s < c; ++s)(u = a[s]) && R(u, t, n, s, a, e || zn(u, n));
            return new xn(r, this._parents, t, n)
        };
        var An = function(t) {
            return function() {
                return t
            }
        };

        function Nn(t, n, e) {
            this.target = t, this.type = n, this.transform = e
        }

        function On(t, n, e) {
            this.k = t, this.x = n, this.y = e
        }
        On.prototype = {
            constructor: On,
            scale: function(t) {
                return 1 === t ? this : new On(this.k * t, this.x, this.y)
            },
            translate: function(t, n) {
                return 0 === t & 0 === n ? this : new On(this.k, this.x + this.k * t, this.y + this.k * n)
            },
            apply: function(t) {
                return [t[0] * this.k + this.x, t[1] * this.k + this.y]
            },
            applyX: function(t) {
                return t * this.k + this.x
            },
            applyY: function(t) {
                return t * this.k + this.y
            },
            invert: function(t) {
                return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
            },
            invertX: function(t) {
                return (t - this.x) / this.k
            },
            invertY: function(t) {
                return (t - this.y) / this.k
            },
            rescaleX: function(t) {
                return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
            },
            rescaleY: function(t) {
                return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
            },
            toString: function() {
                return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
            }
        };
        var En = new On(1, 0, 0);

        function jn(t) {
            for (; !t.__zoom;)
                if (!(t = t.parentNode)) return En;
            return t.__zoom
        }

        function Sn() {
            f.c.stopImmediatePropagation()
        }
        jn.prototype = On.prototype;
        var Pn = function() {
            f.c.preventDefault(), f.c.stopImmediatePropagation()
        };

        function Ln() {
            return !f.c.ctrlKey && !f.c.button
        }

        function Tn() {
            var t = this;
            return t instanceof SVGElement ? (t = t.ownerSVGElement || t).hasAttribute("viewBox") ? [
                [(t = t.viewBox.baseVal).x, t.y],
                [t.x + t.width, t.y + t.height]
            ] : [
                [0, 0],
                [t.width.baseVal.value, t.height.baseVal.value]
            ] : [
                [0, 0],
                [t.clientWidth, t.clientHeight]
            ]
        }

        function qn() {
            return this.__zoom || En
        }

        function Bn() {
            return -f.c.deltaY * (1 === f.c.deltaMode ? .05 : f.c.deltaMode ? 1 : .002)
        }

        function Cn() {
            return navigator.maxTouchPoints || "ontouchstart" in this
        }

        function Dn(t, n, e) {
            var r = t.invertX(n[0][0]) - e[0][0],
                i = t.invertX(n[1][0]) - e[1][0],
                o = t.invertY(n[0][1]) - e[0][1],
                u = t.invertY(n[1][1]) - e[1][1];
            return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), u > o ? (o + u) / 2 : Math.min(0, o) || Math.max(0, u))
        }
        var Hn = function() {
            var t, n, e = Ln,
                r = Tn,
                i = Dn,
                o = Bn,
                u = Cn,
                a = [0, 1 / 0],
                c = [
                    [-1 / 0, -1 / 0],
                    [1 / 0, 1 / 0]
                ],
                h = 250,
                v = _,
                y = s("start", "zoom", "end"),
                m = 0;

            function g(t) {
                t.property("__zoom", qn).on("wheel.zoom", O).on("mousedown.zoom", E).on("dblclick.zoom", j).filter(u).on("touchstart.zoom", S).on("touchmove.zoom", P).on("touchend.zoom touchcancel.zoom", L).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
            }

            function b(t, n) {
                return (n = Math.max(a[0], Math.min(a[1], n))) === t.k ? t : new On(n, t.x, t.y)
            }

            function k(t, n, e) {
                var r = n[0] - e[0] * t.k,
                    i = n[1] - e[1] * t.k;
                return r === t.x && i === t.y ? t : new On(t.k, r, i)
            }

            function M(t) {
                return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
            }

            function z(t, n, e) {
                t.on("start.zoom", (function() {
                    A(this, arguments).start()
                })).on("interrupt.zoom end.zoom", (function() {
                    A(this, arguments).end()
                })).tween("zoom", (function() {
                    var t = this,
                        i = arguments,
                        o = A(t, i),
                        u = r.apply(t, i),
                        a = null == e ? M(u) : "function" == typeof e ? e.apply(t, i) : e,
                        c = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]),
                        s = t.__zoom,
                        l = "function" == typeof n ? n.apply(t, i) : n,
                        f = v(s.invert(a).concat(c / s.k), l.invert(a).concat(c / l.k));
                    return function(t) {
                        if (1 === t) t = l;
                        else {
                            var n = f(t),
                                e = c / n[2];
                            t = new On(e, a[0] - n[0] * e, a[1] - n[1] * e)
                        }
                        o.zoom(null, t)
                    }
                }))
            }

            function A(t, n, e) {
                return !e && t.__zooming || new N(t, n)
            }

            function N(t, n) {
                this.that = t, this.args = n, this.active = 0, this.extent = r.apply(t, n), this.taps = 0
            }

            function O() {
                if (e.apply(this, arguments)) {
                    var t = A(this, arguments),
                        n = this.__zoom,
                        r = Math.max(a[0], Math.min(a[1], n.k * Math.pow(2, o.apply(this, arguments)))),
                        u = Object(w.a)(this);
                    if (t.wheel) t.mouse[0][0] === u[0] && t.mouse[0][1] === u[1] || (t.mouse[1] = n.invert(t.mouse[0] = u)), clearTimeout(t.wheel);
                    else {
                        if (n.k === r) return;
                        t.mouse = [u, n.invert(u)], G(this), t.start()
                    }
                    Pn(), t.wheel = setTimeout(s, 150), t.zoom("mouse", i(k(b(n, r), t.mouse[0], t.mouse[1]), t.extent, c))
                }

                function s() {
                    t.wheel = null, t.end()
                }
            }

            function E() {
                if (!n && e.apply(this, arguments)) {
                    var t = A(this, arguments, !0),
                        r = Object(l.a)(f.c.view).on("mousemove.zoom", s, !0).on("mouseup.zoom", h, !0),
                        o = Object(w.a)(this),
                        u = f.c.clientX,
                        a = f.c.clientY;
                    d(f.c.view), Sn(), t.mouse = [o, this.__zoom.invert(o)], G(this), t.start()
                }

                function s() {
                    if (Pn(), !t.moved) {
                        var n = f.c.clientX - u,
                            e = f.c.clientY - a;
                        t.moved = n * n + e * e > m
                    }
                    t.zoom("mouse", i(k(t.that.__zoom, t.mouse[0] = Object(w.a)(t.that), t.mouse[1]), t.extent, c))
                }

                function h() {
                    r.on("mousemove.zoom mouseup.zoom", null), p(f.c.view, t.moved), Pn(), t.end()
                }
            }

            function j() {
                if (e.apply(this, arguments)) {
                    var t = this.__zoom,
                        n = Object(w.a)(this),
                        o = t.invert(n),
                        u = t.k * (f.c.shiftKey ? .5 : 2),
                        a = i(k(b(t, u), n, o), r.apply(this, arguments), c);
                    Pn(), h > 0 ? Object(l.a)(this).transition().duration(h).call(z, a, n) : Object(l.a)(this).call(g.transform, a)
                }
            }

            function S() {
                if (e.apply(this, arguments)) {
                    var n, r, i, o, u = f.c.touches,
                        a = u.length,
                        c = A(this, arguments, f.c.changedTouches.length === a);
                    for (Sn(), r = 0; r < a; ++r) i = u[r], o = [o = Object(x.a)(this, u, i.identifier), this.__zoom.invert(o), i.identifier], c.touch0 ? c.touch1 || c.touch0[2] === o[2] || (c.touch1 = o, c.taps = 0) : (c.touch0 = o, n = !0, c.taps = 1 + !!t);
                    t && (t = clearTimeout(t)), n && (c.taps < 2 && (t = setTimeout((function() {
                        t = null
                    }), 500)), G(this), c.start())
                }
            }

            function P() {
                if (this.__zooming) {
                    var n, e, r, o, u = A(this, arguments),
                        a = f.c.changedTouches,
                        s = a.length;
                    for (Pn(), t && (t = clearTimeout(t)), u.taps = 0, n = 0; n < s; ++n) e = a[n], r = Object(x.a)(this, a, e.identifier), u.touch0 && u.touch0[2] === e.identifier ? u.touch0[0] = r : u.touch1 && u.touch1[2] === e.identifier && (u.touch1[0] = r);
                    if (e = u.that.__zoom, u.touch1) {
                        var l = u.touch0[0],
                            h = u.touch0[1],
                            d = u.touch1[0],
                            p = u.touch1[1],
                            v = (v = d[0] - l[0]) * v + (v = d[1] - l[1]) * v,
                            y = (y = p[0] - h[0]) * y + (y = p[1] - h[1]) * y;
                        e = b(e, Math.sqrt(v / y)), r = [(l[0] + d[0]) / 2, (l[1] + d[1]) / 2], o = [(h[0] + p[0]) / 2, (h[1] + p[1]) / 2]
                    } else {
                        if (!u.touch0) return;
                        r = u.touch0[0], o = u.touch0[1]
                    }
                    u.zoom("touch", i(k(e, r, o), u.extent, c))
                }
            }

            function L() {
                if (this.__zooming) {
                    var t, e, r = A(this, arguments),
                        i = f.c.changedTouches,
                        o = i.length;
                    for (Sn(), n && clearTimeout(n), n = setTimeout((function() {
                            n = null
                        }), 500), t = 0; t < o; ++t) e = i[t], r.touch0 && r.touch0[2] === e.identifier ? delete r.touch0 : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
                    if (r.touch1 && !r.touch0 && (r.touch0 = r.touch1, delete r.touch1), r.touch0) r.touch0[1] = this.__zoom.invert(r.touch0[0]);
                    else if (r.end(), 2 === r.taps) {
                        var u = Object(l.a)(this).on("dblclick.zoom");
                        u && u.apply(this, arguments)
                    }
                }
            }
            return g.transform = function(t, n, e) {
                var r = t.selection ? t.selection() : t;
                r.property("__zoom", qn), t !== r ? z(t, n, e) : r.interrupt().each((function() {
                    A(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
                }))
            }, g.scaleBy = function(t, n, e) {
                g.scaleTo(t, (function() {
                    var t = this.__zoom.k,
                        e = "function" == typeof n ? n.apply(this, arguments) : n;
                    return t * e
                }), e)
            }, g.scaleTo = function(t, n, e) {
                g.transform(t, (function() {
                    var t = r.apply(this, arguments),
                        o = this.__zoom,
                        u = null == e ? M(t) : "function" == typeof e ? e.apply(this, arguments) : e,
                        a = o.invert(u),
                        s = "function" == typeof n ? n.apply(this, arguments) : n;
                    return i(k(b(o, s), u, a), t, c)
                }), e)
            }, g.translateBy = function(t, n, e) {
                g.transform(t, (function() {
                    return i(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), r.apply(this, arguments), c)
                }))
            }, g.translateTo = function(t, n, e, o) {
                g.transform(t, (function() {
                    var t = r.apply(this, arguments),
                        u = this.__zoom,
                        a = null == o ? M(t) : "function" == typeof o ? o.apply(this, arguments) : o;
                    return i(En.translate(a[0], a[1]).scale(u.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, c)
                }), o)
            }, N.prototype = {
                start: function() {
                    return 1 == ++this.active && (this.that.__zooming = this, this.emit("start")), this
                },
                zoom: function(t, n) {
                    return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this
                },
                end: function() {
                    return 0 == --this.active && (delete this.that.__zooming, this.emit("end")), this
                },
                emit: function(t) {
                    Object(f.a)(new Nn(g, t, this.that.__zoom), y.apply, y, [t, this.that, this.args])
                }
            }, g.wheelDelta = function(t) {
                return arguments.length ? (o = "function" == typeof t ? t : An(+t), g) : o
            }, g.filter = function(t) {
                return arguments.length ? (e = "function" == typeof t ? t : An(!!t), g) : e
            }, g.touchable = function(t) {
                return arguments.length ? (u = "function" == typeof t ? t : An(!!t), g) : u
            }, g.extent = function(t) {
                return arguments.length ? (r = "function" == typeof t ? t : An([
                    [+t[0][0], +t[0][1]],
                    [+t[1][0], +t[1][1]]
                ]), g) : r
            }, g.scaleExtent = function(t) {
                return arguments.length ? (a[0] = +t[0], a[1] = +t[1], g) : [a[0], a[1]]
            }, g.translateExtent = function(t) {
                return arguments.length ? (c[0][0] = +t[0][0], c[1][0] = +t[1][0], c[0][1] = +t[0][1], c[1][1] = +t[1][1], g) : [
                    [c[0][0], c[0][1]],
                    [c[1][0], c[1][1]]
                ]
            }, g.constrain = function(t) {
                return arguments.length ? (i = t, g) : i
            }, g.duration = function(t) {
                return arguments.length ? (h = +t, g) : h
            }, g.interpolate = function(t) {
                return arguments.length ? (v = t, g) : v
            }, g.on = function() {
                var t = y.on.apply(y, arguments);
                return t === y ? g : t
            }, g.clickDistance = function(t) {
                return arguments.length ? (m = (t = +t) * t, g) : Math.sqrt(m)
            }, g
        }
    }, function(t, n, e) {
        "use strict";

        function r(t, n) {
            return t.parent === n.parent ? 1 : 2
        }

        function i(t, n) {
            return t + n.x
        }

        function o(t, n) {
            return Math.max(t, n.y)
        }
        e.r(n), e.d(n, "cluster", (function() {
            return u
        })), e.d(n, "hierarchy", (function() {
            return c
        })), e.d(n, "pack", (function() {
            return L
        })), e.d(n, "packSiblings", (function() {
            return N
        })), e.d(n, "packEnclose", (function() {
            return p
        })), e.d(n, "partition", (function() {
            return H
        })), e.d(n, "stratify", (function() {
            return Y
        })), e.d(n, "tree", (function() {
            return Z
        })), e.d(n, "treemap", (function() {
            return et
        })), e.d(n, "treemapBinary", (function() {
            return rt
        })), e.d(n, "treemapDice", (function() {
            return D
        })), e.d(n, "treemapSlice", (function() {
            return K
        })), e.d(n, "treemapSliceDice", (function() {
            return it
        })), e.d(n, "treemapSquarify", (function() {
            return nt
        })), e.d(n, "treemapResquarify", (function() {
            return ot
        }));
        var u = function() {
            var t = r,
                n = 1,
                e = 1,
                u = !1;

            function a(r) {
                var a, c = 0;
                r.eachAfter((function(n) {
                    var e = n.children;
                    e ? (n.x = function(t) {
                        return t.reduce(i, 0) / t.length
                    }(e), n.y = function(t) {
                        return 1 + t.reduce(o, 0)
                    }(e)) : (n.x = a ? c += t(n, a) : 0, n.y = 0, a = n)
                }));
                var s = function(t) {
                        for (var n; n = t.children;) t = n[0];
                        return t
                    }(r),
                    l = function(t) {
                        for (var n; n = t.children;) t = n[n.length - 1];
                        return t
                    }(r),
                    f = s.x - t(s, l) / 2,
                    h = l.x + t(l, s) / 2;
                return r.eachAfter(u ? function(t) {
                    t.x = (t.x - r.x) * n, t.y = (r.y - t.y) * e
                } : function(t) {
                    t.x = (t.x - f) / (h - f) * n, t.y = (1 - (r.y ? t.y / r.y : 1)) * e
                })
            }
            return a.separation = function(n) {
                return arguments.length ? (t = n, a) : t
            }, a.size = function(t) {
                return arguments.length ? (u = !1, n = +t[0], e = +t[1], a) : u ? null : [n, e]
            }, a.nodeSize = function(t) {
                return arguments.length ? (u = !0, n = +t[0], e = +t[1], a) : u ? [n, e] : null
            }, a
        };

        function a(t) {
            var n = 0,
                e = t.children,
                r = e && e.length;
            if (r)
                for (; --r >= 0;) n += e[r].value;
            else n = 1;
            t.value = n
        }

        function c(t, n) {
            var e, r, i, o, u, a = new h(t),
                c = +t.value && (a.value = t.value),
                l = [a];
            for (null == n && (n = s); e = l.pop();)
                if (c && (e.value = +e.data.value), (i = n(e.data)) && (u = i.length))
                    for (e.children = new Array(u), o = u - 1; o >= 0; --o) l.push(r = e.children[o] = new h(i[o])), r.parent = e, r.depth = e.depth + 1;
            return a.eachBefore(f)
        }

        function s(t) {
            return t.children
        }

        function l(t) {
            t.data = t.data.data
        }

        function f(t) {
            var n = 0;
            do {
                t.height = n
            } while ((t = t.parent) && t.height < ++n)
        }

        function h(t) {
            this.data = t, this.depth = this.height = 0, this.parent = null
        }
        h.prototype = c.prototype = {
            constructor: h,
            count: function() {
                return this.eachAfter(a)
            },
            each: function(t) {
                var n, e, r, i, o = this,
                    u = [o];
                do {
                    for (n = u.reverse(), u = []; o = n.pop();)
                        if (t(o), e = o.children)
                            for (r = 0, i = e.length; r < i; ++r) u.push(e[r])
                } while (u.length);
                return this
            },
            eachAfter: function(t) {
                for (var n, e, r, i = this, o = [i], u = []; i = o.pop();)
                    if (u.push(i), n = i.children)
                        for (e = 0, r = n.length; e < r; ++e) o.push(n[e]);
                for (; i = u.pop();) t(i);
                return this
            },
            eachBefore: function(t) {
                for (var n, e, r = this, i = [r]; r = i.pop();)
                    if (t(r), n = r.children)
                        for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
                return this
            },
            sum: function(t) {
                return this.eachAfter((function(n) {
                    for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) e += r[i].value;
                    n.value = e
                }))
            },
            sort: function(t) {
                return this.eachBefore((function(n) {
                    n.children && n.children.sort(t)
                }))
            },
            path: function(t) {
                for (var n = this, e = function(t, n) {
                        if (t === n) return t;
                        var e = t.ancestors(),
                            r = n.ancestors(),
                            i = null;
                        t = e.pop(), n = r.pop();
                        for (; t === n;) i = t, t = e.pop(), n = r.pop();
                        return i
                    }(n, t), r = [n]; n !== e;) n = n.parent, r.push(n);
                for (var i = r.length; t !== e;) r.splice(i, 0, t), t = t.parent;
                return r
            },
            ancestors: function() {
                for (var t = this, n = [t]; t = t.parent;) n.push(t);
                return n
            },
            descendants: function() {
                var t = [];
                return this.each((function(n) {
                    t.push(n)
                })), t
            },
            leaves: function() {
                var t = [];
                return this.eachBefore((function(n) {
                    n.children || t.push(n)
                })), t
            },
            links: function() {
                var t = this,
                    n = [];
                return t.each((function(e) {
                    e !== t && n.push({
                        source: e.parent,
                        target: e
                    })
                })), n
            },
            copy: function() {
                return c(this).eachBefore(l)
            }
        };
        var d = Array.prototype.slice;
        var p = function(t) {
            for (var n, e, r = 0, i = (t = function(t) {
                    for (var n, e, r = t.length; r;) e = Math.random() * r-- | 0, n = t[r], t[r] = t[e], t[e] = n;
                    return t
                }(d.call(t))).length, o = []; r < i;) n = t[r], e && m(e, n) ? ++r : (e = _(o = v(o, n)), r = 0);
            return e
        };

        function v(t, n) {
            var e, r;
            if (g(n, t)) return [n];
            for (e = 0; e < t.length; ++e)
                if (y(n, t[e]) && g(w(t[e], n), t)) return [t[e], n];
            for (e = 0; e < t.length - 1; ++e)
                for (r = e + 1; r < t.length; ++r)
                    if (y(w(t[e], t[r]), n) && y(w(t[e], n), t[r]) && y(w(t[r], n), t[e]) && g(x(t[e], t[r], n), t)) return [t[e], t[r], n];
            throw new Error
        }

        function y(t, n) {
            var e = t.r - n.r,
                r = n.x - t.x,
                i = n.y - t.y;
            return e < 0 || e * e < r * r + i * i
        }

        function m(t, n) {
            var e = t.r - n.r + 1e-6,
                r = n.x - t.x,
                i = n.y - t.y;
            return e > 0 && e * e > r * r + i * i
        }

        function g(t, n) {
            for (var e = 0; e < n.length; ++e)
                if (!m(t, n[e])) return !1;
            return !0
        }

        function _(t) {
            switch (t.length) {
                case 1:
                    return {
                        x: (n = t[0]).x, y: n.y, r: n.r
                    };
                case 2:
                    return w(t[0], t[1]);
                case 3:
                    return x(t[0], t[1], t[2])
            }
            var n
        }

        function w(t, n) {
            var e = t.x,
                r = t.y,
                i = t.r,
                o = n.x,
                u = n.y,
                a = n.r,
                c = o - e,
                s = u - r,
                l = a - i,
                f = Math.sqrt(c * c + s * s);
            return {
                x: (e + o + c / f * l) / 2,
                y: (r + u + s / f * l) / 2,
                r: (f + i + a) / 2
            }
        }

        function x(t, n, e) {
            var r = t.x,
                i = t.y,
                o = t.r,
                u = n.x,
                a = n.y,
                c = n.r,
                s = e.x,
                l = e.y,
                f = e.r,
                h = r - u,
                d = r - s,
                p = i - a,
                v = i - l,
                y = c - o,
                m = f - o,
                g = r * r + i * i - o * o,
                _ = g - u * u - a * a + c * c,
                w = g - s * s - l * l + f * f,
                x = d * p - h * v,
                b = (p * w - v * _) / (2 * x) - r,
                k = (v * y - p * m) / x,
                M = (d * _ - h * w) / (2 * x) - i,
                z = (h * m - d * y) / x,
                A = k * k + z * z - 1,
                N = 2 * (o + b * k + M * z),
                O = b * b + M * M - o * o,
                E = -(A ? (N + Math.sqrt(N * N - 4 * A * O)) / (2 * A) : O / N);
            return {
                x: r + b + k * E,
                y: i + M + z * E,
                r: E
            }
        }

        function b(t, n, e) {
            var r, i, o, u, a = t.x - n.x,
                c = t.y - n.y,
                s = a * a + c * c;
            s ? (i = n.r + e.r, i *= i, u = t.r + e.r, i > (u *= u) ? (r = (s + u - i) / (2 * s), o = Math.sqrt(Math.max(0, u / s - r * r)), e.x = t.x - r * a - o * c, e.y = t.y - r * c + o * a) : (r = (s + i - u) / (2 * s), o = Math.sqrt(Math.max(0, i / s - r * r)), e.x = n.x + r * a - o * c, e.y = n.y + r * c + o * a)) : (e.x = n.x + e.r, e.y = n.y)
        }

        function k(t, n) {
            var e = t.r + n.r - 1e-6,
                r = n.x - t.x,
                i = n.y - t.y;
            return e > 0 && e * e > r * r + i * i
        }

        function M(t) {
            var n = t._,
                e = t.next._,
                r = n.r + e.r,
                i = (n.x * e.r + e.x * n.r) / r,
                o = (n.y * e.r + e.y * n.r) / r;
            return i * i + o * o
        }

        function z(t) {
            this._ = t, this.next = null, this.previous = null
        }

        function A(t) {
            if (!(i = t.length)) return 0;
            var n, e, r, i, o, u, a, c, s, l, f;
            if ((n = t[0]).x = 0, n.y = 0, !(i > 1)) return n.r;
            if (e = t[1], n.x = -e.r, e.x = n.r, e.y = 0, !(i > 2)) return n.r + e.r;
            b(e, n, r = t[2]), n = new z(n), e = new z(e), r = new z(r), n.next = r.previous = e, e.next = n.previous = r, r.next = e.previous = n;
            t: for (a = 3; a < i; ++a) {
                b(n._, e._, r = t[a]), r = new z(r), c = e.next, s = n.previous, l = e._.r, f = n._.r;
                do {
                    if (l <= f) {
                        if (k(c._, r._)) {
                            e = c, n.next = e, e.previous = n, --a;
                            continue t
                        }
                        l += c._.r, c = c.next
                    } else {
                        if (k(s._, r._)) {
                            (n = s).next = e, e.previous = n, --a;
                            continue t
                        }
                        f += s._.r, s = s.previous
                    }
                } while (c !== s.next);
                for (r.previous = n, r.next = e, n.next = e.previous = e = r, o = M(n);
                    (r = r.next) !== e;)(u = M(r)) < o && (n = r, o = u);
                e = n.next
            }
            for (n = [e._], r = e;
                (r = r.next) !== e;) n.push(r._);
            for (r = p(n), a = 0; a < i; ++a)(n = t[a]).x -= r.x, n.y -= r.y;
            return r.r
        }
        var N = function(t) {
            return A(t), t
        };

        function O(t) {
            return null == t ? null : E(t)
        }

        function E(t) {
            if ("function" != typeof t) throw new Error;
            return t
        }

        function j() {
            return 0
        }
        var S = function(t) {
            return function() {
                return t
            }
        };

        function P(t) {
            return Math.sqrt(t.value)
        }
        var L = function() {
            var t = null,
                n = 1,
                e = 1,
                r = j;

            function i(i) {
                return i.x = n / 2, i.y = e / 2, t ? i.eachBefore(T(t)).eachAfter(q(r, .5)).eachBefore(B(1)) : i.eachBefore(T(P)).eachAfter(q(j, 1)).eachAfter(q(r, i.r / Math.min(n, e))).eachBefore(B(Math.min(n, e) / (2 * i.r))), i
            }
            return i.radius = function(n) {
                return arguments.length ? (t = O(n), i) : t
            }, i.size = function(t) {
                return arguments.length ? (n = +t[0], e = +t[1], i) : [n, e]
            }, i.padding = function(t) {
                return arguments.length ? (r = "function" == typeof t ? t : S(+t), i) : r
            }, i
        };

        function T(t) {
            return function(n) {
                n.children || (n.r = Math.max(0, +t(n) || 0))
            }
        }

        function q(t, n) {
            return function(e) {
                if (r = e.children) {
                    var r, i, o, u = r.length,
                        a = t(e) * n || 0;
                    if (a)
                        for (i = 0; i < u; ++i) r[i].r += a;
                    if (o = A(r), a)
                        for (i = 0; i < u; ++i) r[i].r -= a;
                    e.r = o + a
                }
            }
        }

        function B(t) {
            return function(n) {
                var e = n.parent;
                n.r *= t, e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y)
            }
        }
        var C = function(t) {
                t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1)
            },
            D = function(t, n, e, r, i) {
                for (var o, u = t.children, a = -1, c = u.length, s = t.value && (r - n) / t.value; ++a < c;)(o = u[a]).y0 = e, o.y1 = i, o.x0 = n, o.x1 = n += o.value * s
            },
            H = function() {
                var t = 1,
                    n = 1,
                    e = 0,
                    r = !1;

                function i(i) {
                    var o = i.height + 1;
                    return i.x0 = i.y0 = e, i.x1 = t, i.y1 = n / o, i.eachBefore(function(t, n) {
                        return function(r) {
                            r.children && D(r, r.x0, t * (r.depth + 1) / n, r.x1, t * (r.depth + 2) / n);
                            var i = r.x0,
                                o = r.y0,
                                u = r.x1 - e,
                                a = r.y1 - e;
                            u < i && (i = u = (i + u) / 2), a < o && (o = a = (o + a) / 2), r.x0 = i, r.y0 = o, r.x1 = u, r.y1 = a
                        }
                    }(n, o)), r && i.eachBefore(C), i
                }
                return i.round = function(t) {
                    return arguments.length ? (r = !!t, i) : r
                }, i.size = function(e) {
                    return arguments.length ? (t = +e[0], n = +e[1], i) : [t, n]
                }, i.padding = function(t) {
                    return arguments.length ? (e = +t, i) : e
                }, i
            },
            I = {
                depth: -1
            },
            R = {};

        function X(t) {
            return t.id
        }

        function V(t) {
            return t.parentId
        }
        var Y = function() {
            var t = X,
                n = V;

            function e(e) {
                var r, i, o, u, a, c, s, l = e.length,
                    d = new Array(l),
                    p = {};
                for (i = 0; i < l; ++i) r = e[i], a = d[i] = new h(r), null != (c = t(r, i, e)) && (c += "") && (p[s = "$" + (a.id = c)] = s in p ? R : a);
                for (i = 0; i < l; ++i)
                    if (a = d[i], null != (c = n(e[i], i, e)) && (c += "")) {
                        if (!(u = p["$" + c])) throw new Error("missing: " + c);
                        if (u === R) throw new Error("ambiguous: " + c);
                        u.children ? u.children.push(a) : u.children = [a], a.parent = u
                    } else {
                        if (o) throw new Error("multiple roots");
                        o = a
                    } if (!o) throw new Error("no root");
                if (o.parent = I, o.eachBefore((function(t) {
                        t.depth = t.parent.depth + 1, --l
                    })).eachBefore(f), o.parent = null, l > 0) throw new Error("cycle");
                return o
            }
            return e.id = function(n) {
                return arguments.length ? (t = E(n), e) : t
            }, e.parentId = function(t) {
                return arguments.length ? (n = E(t), e) : n
            }, e
        };

        function W(t, n) {
            return t.parent === n.parent ? 1 : 2
        }

        function F(t) {
            var n = t.children;
            return n ? n[0] : t.t
        }

        function U(t) {
            var n = t.children;
            return n ? n[n.length - 1] : t.t
        }

        function $(t, n, e) {
            var r = e / (n.i - t.i);
            n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e
        }

        function G(t, n, e) {
            return t.a.parent === n.parent ? t.a : e
        }

        function Q(t, n) {
            this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n
        }
        Q.prototype = Object.create(h.prototype);
        var Z = function() {
                var t = W,
                    n = 1,
                    e = 1,
                    r = null;

                function i(i) {
                    var c = function(t) {
                        for (var n, e, r, i, o, u = new Q(t, 0), a = [u]; n = a.pop();)
                            if (r = n._.children)
                                for (n.children = new Array(o = r.length), i = o - 1; i >= 0; --i) a.push(e = n.children[i] = new Q(r[i], i)), e.parent = n;
                        return (u.parent = new Q(null, 0)).children = [u], u
                    }(i);
                    if (c.eachAfter(o), c.parent.m = -c.z, c.eachBefore(u), r) i.eachBefore(a);
                    else {
                        var s = i,
                            l = i,
                            f = i;
                        i.eachBefore((function(t) {
                            t.x < s.x && (s = t), t.x > l.x && (l = t), t.depth > f.depth && (f = t)
                        }));
                        var h = s === l ? 1 : t(s, l) / 2,
                            d = h - s.x,
                            p = n / (l.x + h + d),
                            v = e / (f.depth || 1);
                        i.eachBefore((function(t) {
                            t.x = (t.x + d) * p, t.y = t.depth * v
                        }))
                    }
                    return i
                }

                function o(n) {
                    var e = n.children,
                        r = n.parent.children,
                        i = n.i ? r[n.i - 1] : null;
                    if (e) {
                        ! function(t) {
                            for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0;)(n = i[o]).z += e, n.m += e, e += n.s + (r += n.c)
                        }(n);
                        var o = (e[0].z + e[e.length - 1].z) / 2;
                        i ? (n.z = i.z + t(n._, i._), n.m = n.z - o) : n.z = o
                    } else i && (n.z = i.z + t(n._, i._));
                    n.parent.A = function(n, e, r) {
                        if (e) {
                            for (var i, o = n, u = n, a = e, c = o.parent.children[0], s = o.m, l = u.m, f = a.m, h = c.m; a = U(a), o = F(o), a && o;) c = F(c), (u = U(u)).a = n, (i = a.z + f - o.z - s + t(a._, o._)) > 0 && ($(G(a, n, r), n, i), s += i, l += i), f += a.m, s += o.m, h += c.m, l += u.m;
                            a && !U(u) && (u.t = a, u.m += f - l), o && !F(c) && (c.t = o, c.m += s - h, r = n)
                        }
                        return r
                    }(n, i, n.parent.A || r[0])
                }

                function u(t) {
                    t._.x = t.z + t.parent.m, t.m += t.parent.m
                }

                function a(t) {
                    t.x *= n, t.y = t.depth * e
                }
                return i.separation = function(n) {
                    return arguments.length ? (t = n, i) : t
                }, i.size = function(t) {
                    return arguments.length ? (r = !1, n = +t[0], e = +t[1], i) : r ? null : [n, e]
                }, i.nodeSize = function(t) {
                    return arguments.length ? (r = !0, n = +t[0], e = +t[1], i) : r ? [n, e] : null
                }, i
            },
            K = function(t, n, e, r, i) {
                for (var o, u = t.children, a = -1, c = u.length, s = t.value && (i - e) / t.value; ++a < c;)(o = u[a]).x0 = n, o.x1 = r, o.y0 = e, o.y1 = e += o.value * s
            },
            J = (1 + Math.sqrt(5)) / 2;

        function tt(t, n, e, r, i, o) {
            for (var u, a, c, s, l, f, h, d, p, v, y, m = [], g = n.children, _ = 0, w = 0, x = g.length, b = n.value; _ < x;) {
                c = i - e, s = o - r;
                do {
                    l = g[w++].value
                } while (!l && w < x);
                for (f = h = l, y = l * l * (v = Math.max(s / c, c / s) / (b * t)), p = Math.max(h / y, y / f); w < x; ++w) {
                    if (l += a = g[w].value, a < f && (f = a), a > h && (h = a), y = l * l * v, (d = Math.max(h / y, y / f)) > p) {
                        l -= a;
                        break
                    }
                    p = d
                }
                m.push(u = {
                    value: l,
                    dice: c < s,
                    children: g.slice(_, w)
                }), u.dice ? D(u, e, r, i, b ? r += s * l / b : o) : K(u, e, r, b ? e += c * l / b : i, o), b -= l, _ = w
            }
            return m
        }
        var nt = function t(n) {
                function e(t, e, r, i, o) {
                    tt(n, t, e, r, i, o)
                }
                return e.ratio = function(n) {
                    return t((n = +n) > 1 ? n : 1)
                }, e
            }(J),
            et = function() {
                var t = nt,
                    n = !1,
                    e = 1,
                    r = 1,
                    i = [0],
                    o = j,
                    u = j,
                    a = j,
                    c = j,
                    s = j;

                function l(t) {
                    return t.x0 = t.y0 = 0, t.x1 = e, t.y1 = r, t.eachBefore(f), i = [0], n && t.eachBefore(C), t
                }

                function f(n) {
                    var e = i[n.depth],
                        r = n.x0 + e,
                        l = n.y0 + e,
                        f = n.x1 - e,
                        h = n.y1 - e;
                    f < r && (r = f = (r + f) / 2), h < l && (l = h = (l + h) / 2), n.x0 = r, n.y0 = l, n.x1 = f, n.y1 = h, n.children && (e = i[n.depth + 1] = o(n) / 2, r += s(n) - e, l += u(n) - e, (f -= a(n) - e) < r && (r = f = (r + f) / 2), (h -= c(n) - e) < l && (l = h = (l + h) / 2), t(n, r, l, f, h))
                }
                return l.round = function(t) {
                    return arguments.length ? (n = !!t, l) : n
                }, l.size = function(t) {
                    return arguments.length ? (e = +t[0], r = +t[1], l) : [e, r]
                }, l.tile = function(n) {
                    return arguments.length ? (t = E(n), l) : t
                }, l.padding = function(t) {
                    return arguments.length ? l.paddingInner(t).paddingOuter(t) : l.paddingInner()
                }, l.paddingInner = function(t) {
                    return arguments.length ? (o = "function" == typeof t ? t : S(+t), l) : o
                }, l.paddingOuter = function(t) {
                    return arguments.length ? l.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : l.paddingTop()
                }, l.paddingTop = function(t) {
                    return arguments.length ? (u = "function" == typeof t ? t : S(+t), l) : u
                }, l.paddingRight = function(t) {
                    return arguments.length ? (a = "function" == typeof t ? t : S(+t), l) : a
                }, l.paddingBottom = function(t) {
                    return arguments.length ? (c = "function" == typeof t ? t : S(+t), l) : c
                }, l.paddingLeft = function(t) {
                    return arguments.length ? (s = "function" == typeof t ? t : S(+t), l) : s
                }, l
            },
            rt = function(t, n, e, r, i) {
                var o, u, a = t.children,
                    c = a.length,
                    s = new Array(c + 1);
                for (s[0] = u = o = 0; o < c; ++o) s[o + 1] = u += a[o].value;
                ! function t(n, e, r, i, o, u, c) {
                    if (n >= e - 1) {
                        var l = a[n];
                        return l.x0 = i, l.y0 = o, l.x1 = u, void(l.y1 = c)
                    }
                    var f = s[n],
                        h = r / 2 + f,
                        d = n + 1,
                        p = e - 1;
                    for (; d < p;) {
                        var v = d + p >>> 1;
                        s[v] < h ? d = v + 1 : p = v
                    }
                    h - s[d - 1] < s[d] - h && n + 1 < d && --d;
                    var y = s[d] - f,
                        m = r - y;
                    if (u - i > c - o) {
                        var g = (i * m + u * y) / r;
                        t(n, d, y, i, o, g, c), t(d, e, m, g, o, u, c)
                    } else {
                        var _ = (o * m + c * y) / r;
                        t(n, d, y, i, o, u, _), t(d, e, m, i, _, u, c)
                    }
                }(0, c, t.value, n, e, r, i)
            },
            it = function(t, n, e, r, i) {
                (1 & t.depth ? K : D)(t, n, e, r, i)
            },
            ot = function t(n) {
                function e(t, e, r, i, o) {
                    if ((u = t._squarify) && u.ratio === n)
                        for (var u, a, c, s, l, f = -1, h = u.length, d = t.value; ++f < h;) {
                            for (c = (a = u[f]).children, s = a.value = 0, l = c.length; s < l; ++s) a.value += c[s].value;
                            a.dice ? D(a, e, r, i, r += (o - r) * a.value / d) : K(a, e, r, e += (i - e) * a.value / d, o), d -= a.value
                        } else t._squarify = u = tt(n, t, e, r, i, o), u.ratio = n
                }
                return e.ratio = function(n) {
                    return t((n = +n) > 1 ? n : 1)
                }, e
            }(J)
    }])
}));