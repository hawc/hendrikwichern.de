!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("popper.js")) : "function" == typeof define && define.amd ? define(["popper.js"], e) : (t = t || self).tippy = e(t.Popper) }(this, function (t) { "use strict"; t = t && t.hasOwnProperty("default") ? t.default : t; function e() { return (e = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var a = arguments[e]; for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r]) } return t }).apply(this, arguments) } var a = "undefined" != typeof window, r = a && navigator.userAgent, n = /MSIE |Trident\//.test(r), i = /UCBrowser\//.test(r), p = a && /iPhone|iPad|iPod/.test(navigator.platform) && !window.MSStream, o = { a11y: !0, allowHTML: !0, animateFill: !0, animation: "shift-away", appendTo: function () { return document.body }, aria: "describedby", arrow: !1, arrowType: "sharp", boundary: "scrollParent", content: "", delay: [0, 20], distance: 10, duration: [325, 275], flip: !0, flipBehavior: "flip", flipOnUpdate: !1, followCursor: !1, hideOnClick: !0, ignoreAttributes: !1, inertia: !1, interactive: !1, interactiveBorder: 2, interactiveDebounce: 0, lazy: !0, maxWidth: 350, multiple: !1, offset: 0, onHidden: function () { }, onHide: function () { }, onMount: function () { }, onShow: function () { }, onShown: function () { }, placement: "top", popperOptions: {}, role: "tooltip", showOnInit: !1, size: "regular", sticky: !1, target: "", theme: "dark", touch: !0, touchHold: !1, trigger: "mouseenter focus", updateDuration: 0, wait: null, zIndex: 9999 }, s = ["arrow", "arrowType", "boundary", "distance", "flip", "flipBehavior", "flipOnUpdate", "offset", "placement", "popperOptions"], l = { POPPER: ".tippy-popper", TOOLTIP: ".tippy-tooltip", CONTENT: ".tippy-content", BACKDROP: ".tippy-backdrop", ARROW: ".tippy-arrow", ROUND_ARROW: ".tippy-roundarrow" }, c = a ? Element.prototype : {}, d = c.matches || c.matchesSelector || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector; function f(t) { return [].slice.call(t) } function m(t, e) { return (c.closest || function (t) { for (var e = this; e;) { if (d.call(e, t)) return e; e = e.parentElement } }).call(t, e) } function u(t, e) { for (; t;) { if (e(t)) return t; t = t.parentElement } } function b(t) { return "[object Object]" === {}.toString.call(t) } function y(t, e) { return {}.hasOwnProperty.call(t, e) } function h(t, e, a) { if (Array.isArray(t)) { var r = t[e]; return null == r ? a : r } return t } function v(t, e) { var a; return function () { var r = this, n = arguments; clearTimeout(a), a = setTimeout(function () { return t.apply(r, n) }, e) } } function x(t, e) { return t && t.modifiers && t.modifiers[e] } function w(t, e) { return t.indexOf(e) > -1 } function g(t) { return b(t) || t instanceof Element } function k(t, e) { return "function" == typeof t ? t.apply(null, e) : t } function E(t, e) { t.filter(function (t) { return "flip" === t.name })[0].enabled = e } function A() { return document.createElement("div") } function C(t, e) { t.innerHTML = e instanceof Element ? e.innerHTML : e } function O(t, e) { e.content instanceof Element ? (C(t, ""), t.appendChild(e.content)) : t[e.allowHTML ? "innerHTML" : "textContent"] = e.content } function X(t) { return { tooltip: t.querySelector(l.TOOLTIP), backdrop: t.querySelector(l.BACKDROP), content: t.querySelector(l.CONTENT), arrow: t.querySelector(l.ARROW) || t.querySelector(l.ROUND_ARROW) } } function Y(t) { t.setAttribute("data-inertia", "") } function L(t) { var e = A(); return "round" === t ? (e.className = "tippy-roundarrow", C(e, '<svg viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg"><path d="M3 8s2.021-.015 5.253-4.218C9.584 2.051 10.797 1.007 12 1c1.203-.007 2.416 1.035 3.761 2.782C19.012 8.005 21 8 21 8H3z"/></svg>')) : e.className = "tippy-arrow", e } function T() { var t = A(); return t.className = "tippy-backdrop", t.setAttribute("data-state", "hidden"), t } function I(t, e) { t.setAttribute("tabindex", "-1"), e.setAttribute("data-interactive", "") } function S(t, e) { t.forEach(function (t) { t && (t.style.transitionDuration = "".concat(e, "ms")) }) } function P(t, e, a) { var r = i && void 0 !== document.body.style.WebkitTransition ? "webkitTransitionEnd" : "transitionend"; t[e + "EventListener"](r, a) } function z(t) { var e = t.getAttribute("x-placement"); return e ? e.split("-")[0] : "" } function H(t, e) { t.forEach(function (t) { t && t.setAttribute("data-state", e) }) } function M(t, e, a) { a.split(" ").forEach(function (a) { t.classList[e](a + "-theme") }) } function _() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.checkHideOnClick, a = t.exclude, r = t.duration; f(document.querySelectorAll(l.POPPER)).forEach(function (t) { var n = t._tippy; !n || e && !0 !== n.props.hideOnClick || a && t === a.popper || n.hide(r) }) } var D = { passive: !0 }, N = 3, R = !1; function V() { R || (R = !0, p && document.body.classList.add("tippy-iOS"), window.performance && document.addEventListener("mousemove", B)) } var W = 0; function B() { var t = performance.now(); t - W < 20 && (R = !1, document.removeEventListener("mousemove", B), p || document.body.classList.remove("tippy-iOS")), W = t } function U(t) { var e = t.target; if (!(e instanceof Element)) return _(); var a = m(e, l.POPPER); if (!(a && a._tippy && a._tippy.props.interactive)) { var r = u(e, function (t) { return t._tippy && t._tippy.reference === t }); if (r) { var n = r._tippy, i = w(n.props.trigger, "click"); if (R || i) return _({ exclude: n, checkHideOnClick: !0 }); if (!0 !== n.props.hideOnClick || i) return; n.clearDelayTimeouts() } _({ checkHideOnClick: !0 }) } } function q() { var t = document.activeElement; t && t.blur && t._tippy && t.blur() } var j = Object.keys(o); function F(t, a) { var r = e({}, a, { content: k(a.content, [t]) }, a.ignoreAttributes ? {} : function (t) { return j.reduce(function (e, a) { var r = (t.getAttribute("data-tippy-".concat(a)) || "").trim(); if (!r) return e; if ("content" === a) e[a] = r; else try { e[a] = JSON.parse(r) } catch (t) { e[a] = r } return e }, {}) }(t)); return (r.arrow || i) && (r.animateFill = !1), r } function K() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0; Object.keys(t).forEach(function (t) { if (!y(e, t)) throw new Error("[tippy]: `".concat(t, "` is not a valid option")) }) } var J = 1; function G(a, r) { var i = F(a, r); if (!i.multiple && a._tippy) return null; var p = {}, c = null, b = 0, g = 0, C = !1, _ = function () { }, V = [], W = i.interactiveDebounce > 0 ? v(nt, i.interactiveDebounce) : nt, B = null, U = J++, q = function (t, e) { var a = A(); a.className = "tippy-popper", a.id = "tippy-".concat(t), a.style.zIndex = e.zIndex, e.role && a.setAttribute("role", e.role); var r = A(); r.className = "tippy-tooltip", r.style.maxWidth = e.maxWidth + ("number" == typeof e.maxWidth ? "px" : ""), r.setAttribute("data-size", e.size), r.setAttribute("data-animation", e.animation), r.setAttribute("data-state", "hidden"), M(r, "add", e.theme); var n = A(); return n.className = "tippy-content", n.setAttribute("data-state", "hidden"), e.interactive && I(a, r), e.arrow && r.appendChild(L(e.arrowType)), e.animateFill && (r.appendChild(T()), r.setAttribute("data-animatefill", "")), e.inertia && Y(r), O(n, e), r.appendChild(n), a.appendChild(r), a }(U, i); q.addEventListener("mouseenter", function (t) { Q.props.interactive && Q.state.isVisible && "mouseenter" === p.type && $(t) }), q.addEventListener("mouseleave", function () { Q.props.interactive && "mouseenter" === p.type && document.addEventListener("mousemove", W) }); var j, Q = { id: U, reference: a, popper: q, popperChildren: X(q), popperInstance: null, props: i, state: { isEnabled: !0, isVisible: !1, isDestroyed: !1, isMounted: !1, isShown: !1 }, clearDelayTimeouts: ht, set: vt, setContent: function (t) { vt({ content: t }) }, show: xt, hide: wt, enable: function () { Q.state.isEnabled = !0 }, disable: function () { Q.state.isEnabled = !1 }, destroy: gt }; return ut(), i.lazy || (ct(), Q.popperInstance.disableEventListeners()), i.showOnInit && $(), i.a11y && !i.target && ((j = a) instanceof Element && (!d.call(j, "a[href],area[href],button,details,input,textarea,select,iframe,[tabindex]") || j.hasAttribute("disabled"))) && a.setAttribute("tabindex", "0"), a._tippy = Q, q._tippy = Q, Q; function Z(t) { var e = c = t, a = e.clientX, r = e.clientY; if (Q.popperInstance) { var n = z(Q.popper), i = Q.popperChildren.arrow ? N + 16 : N, p = w(["top", "bottom"], n), o = w(["left", "right"], n), s = p ? Math.max(i, a) : a, l = o ? Math.max(i, r) : r; p && s > i && (s = Math.min(a, window.innerWidth - i)), o && l > i && (l = Math.min(r, window.innerHeight - i)); var d = Q.reference.getBoundingClientRect(), f = Q.props.followCursor, m = "horizontal" === f, u = "vertical" === f; Q.popperInstance.reference = { getBoundingClientRect: function () { return { width: 0, height: 0, top: m ? d.top : l, bottom: m ? d.bottom : l, left: u ? d.left : s, right: u ? d.right : s } }, clientWidth: 0, clientHeight: 0 }, Q.popperInstance.scheduleUpdate(), "initial" === f && Q.state.isVisible && et() } } function $(t) { if (ht(), !Q.state.isVisible) { if (Q.props.target) return function (t) { var a = m(t.target, Q.props.target); a && !a._tippy && (G(a, e({}, Q.props, { content: k(r.content, [a]), appendTo: r.appendTo, target: "", showOnInit: !0 })), $(t)) }(t); if (C = !0, Q.props.wait) return Q.props.wait(Q, t); dt() && !Q.state.isMounted && document.addEventListener("mousemove", Z); var a = h(Q.props.delay, 0, o.delay); a ? b = setTimeout(function () { xt() }, a) : xt() } } function tt() { if (ht(), !Q.state.isVisible) return et(); C = !1; var t = h(Q.props.delay, 1, o.delay); t ? g = setTimeout(function () { Q.state.isVisible && wt() }, t) : wt() } function et() { document.removeEventListener("mousemove", Z), c = null } function at() { document.body.removeEventListener("mouseleave", tt), document.removeEventListener("mousemove", W) } function rt(t) { Q.state.isEnabled && !lt(t) && (Q.state.isVisible || (p = t, R && w(t.type, "mouse") && (c = t)), "click" === t.type && !1 !== Q.props.hideOnClick && Q.state.isVisible ? tt() : $(t)) } function nt(t) { var e = u(t.target, function (t) { return t._tippy }), a = m(t.target, l.POPPER) === Q.popper, r = e === Q.reference; a || r || function (t, e, a, r) { if (!t) return !0; var n = a.clientX, i = a.clientY, p = r.interactiveBorder, o = r.distance, s = e.top - i > ("top" === t ? p + o : p), l = i - e.bottom > ("bottom" === t ? p + o : p), c = e.left - n > ("left" === t ? p + o : p), d = n - e.right > ("right" === t ? p + o : p); return s || l || c || d }(z(Q.popper), Q.popper.getBoundingClientRect(), t, Q.props) && (at(), tt()) } function it(t) { if (!lt(t)) return Q.props.interactive ? (document.body.addEventListener("mouseleave", tt), void document.addEventListener("mousemove", W)) : void tt() } function pt(t) { t.target === Q.reference && (Q.props.interactive && t.relatedTarget && Q.popper.contains(t.relatedTarget) || tt()) } function ot(t) { m(t.target, Q.props.target) && $(t) } function st(t) { m(t.target, Q.props.target) && tt() } function lt(t) { var e = "ontouchstart" in window, a = w(t.type, "touch"), r = Q.props.touchHold; return e && R && r && !a || R && !r && a } function ct() { var a = Q.props.popperOptions, r = Q.popperChildren, n = r.tooltip, i = r.arrow; Q.popperInstance = new t(Q.reference, Q.popper, e({ placement: Q.props.placement }, a, { modifiers: e({}, a ? a.modifiers : {}, { preventOverflow: e({ boundariesElement: Q.props.boundary, padding: N }, x(a, "preventOverflow")), arrow: e({ element: i, enabled: !!i }, x(a, "arrow")), flip: e({ enabled: Q.props.flip, padding: Q.props.distance + N, behavior: Q.props.flipBehavior }, x(a, "flip")), offset: e({ offset: Q.props.offset }, x(a, "offset")) }), onUpdate: function (t) { Q.props.flipOnUpdate || (t.flipped && (Q.popperInstance.options.placement = t.placement), E(Q.popperInstance.modifiers, !1)); var e = n.style; e.top = "", e.bottom = "", e.left = "", e.right = "", e[z(Q.popper)] = -(Q.props.distance - 10) + "px" } })) } function dt() { return Q.props.followCursor && !R && "focus" !== p.type } function ft(t, e) { if (0 === t) return e(); var a = Q.popperChildren.tooltip, r = function t(r) { r.target === a && (P(a, "remove", t), e()) }; P(a, "remove", _), P(a, "add", r), _ = r } function mt(t, e) { var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]; Q.reference.addEventListener(t, e, a), V.push({ eventType: t, handler: e, options: a }) } function ut() { Q.props.touchHold && !Q.props.target && (mt("touchstart", rt, D), mt("touchend", it, D)), Q.props.trigger.trim().split(" ").forEach(function (t) { if ("manual" !== t) if (Q.props.target) switch (t) { case "mouseenter": mt("mouseover", ot), mt("mouseout", st); break; case "focus": mt("focusin", ot), mt("focusout", st); break; case "click": mt(t, ot) } else switch (mt(t, rt), t) { case "mouseenter": mt("mouseleave", it); break; case "focus": mt(n ? "focusout" : "blur", pt) } }) } function bt() { V.forEach(function (t) { var e = t.eventType, a = t.handler, r = t.options; Q.reference.removeEventListener(e, a, r) }), V = [] } function yt() { return [Q.popperChildren.tooltip, Q.popperChildren.backdrop, Q.popperChildren.content] } function ht() { clearTimeout(b), clearTimeout(g) } function vt() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; K(t, o); var a = Q.props, r = F(Q.reference, e({}, Q.props, t, { ignoreAttributes: !0 })); r.ignoreAttributes = y(t, "ignoreAttributes") ? t.ignoreAttributes : a.ignoreAttributes, Q.props = r, (y(t, "trigger") || y(t, "touchHold")) && (bt(), ut()), y(t, "interactiveDebounce") && (at(), W = v(nt, t.interactiveDebounce)), function (t, e, a) { var r = X(t), n = r.tooltip, i = r.content, p = r.backdrop, o = r.arrow; t.style.zIndex = a.zIndex, n.setAttribute("data-size", a.size), n.setAttribute("data-animation", a.animation), n.style.maxWidth = a.maxWidth + ("number" == typeof a.maxWidth ? "px" : ""), a.role ? t.setAttribute("role", a.role) : t.removeAttribute("role"), e.content !== a.content && O(i, a), !e.animateFill && a.animateFill ? (n.appendChild(T()), n.setAttribute("data-animatefill", "")) : e.animateFill && !a.animateFill && (n.removeChild(p), n.removeAttribute("data-animatefill")), !e.arrow && a.arrow ? n.appendChild(L(a.arrowType)) : e.arrow && !a.arrow && n.removeChild(o), e.arrow && a.arrow && e.arrowType !== a.arrowType && n.replaceChild(L(a.arrowType), o), !e.interactive && a.interactive ? I(t, n) : e.interactive && !a.interactive && function (t, e) { t.removeAttribute("tabindex"), e.removeAttribute("data-interactive") }(t, n), !e.inertia && a.inertia ? Y(n) : e.inertia && !a.inertia && function (t) { t.removeAttribute("data-inertia") }(n), e.theme !== a.theme && (M(n, "remove", e.theme), M(n, "add", a.theme)) }(Q.popper, a, r), Q.popperChildren = X(Q.popper), Q.popperInstance && (Q.popperInstance.update(), s.some(function (e) { return y(t, e) }) && (Q.popperInstance.destroy(), ct(), Q.state.isVisible || Q.popperInstance.disableEventListeners(), Q.props.followCursor && c && Z(c))) } function xt() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h(Q.props.duration, 0, o.duration[0]); if (!Q.state.isDestroyed && Q.state.isEnabled && (!R || Q.props.touch)) return Q.reference.isVirtual || document.documentElement.contains(Q.reference) ? void (Q.reference.hasAttribute("disabled") || !1 !== Q.props.onShow(Q) && (Q.popper.style.visibility = "visible", Q.state.isVisible = !0, Q.props.interactive && Q.reference.classList.add("tippy-active"), S([Q.popper, Q.popperChildren.tooltip, Q.popperChildren.backdrop], 0), function (t) { var e = !(dt() || "initial" === Q.props.followCursor && R); Q.popperInstance ? (dt() || (Q.popperInstance.scheduleUpdate(), e && Q.popperInstance.enableEventListeners()), E(Q.popperInstance.modifiers, !0)) : (ct(), e || Q.popperInstance.disableEventListeners()), Q.popperInstance.reference = Q.reference; var a = Q.popperChildren.arrow; if (dt()) { a && (a.style.margin = "0"); var r = h(Q.props.delay, 0, o.delay); p.type && Z(r && c ? c : p) } else a && (a.style.margin = ""); !function (t, e) { var a = t.popper, r = t.options, n = r.onCreate, i = r.onUpdate; r.onCreate = r.onUpdate = function (t) { !function (t) { t.offsetHeight }(a), e(), i(t), r.onCreate = n, r.onUpdate = i } }(Q.popperInstance, t); var n = Q.props.appendTo; (B = "parent" === n ? Q.reference.parentNode : k(n, [Q.reference])).contains(Q.popper) || (B.appendChild(Q.popper), Q.props.onMount(Q), Q.state.isMounted = !0) }(function () { Q.state.isVisible && (dt() || Q.popperInstance.update(), R && "initial" === Q.props.followCursor && Z(c), S([Q.popper], i.updateDuration), S(yt(), t), Q.popperChildren.backdrop && (Q.popperChildren.content.style.transitionDelay = Math.round(t / 12) + "ms"), Q.props.sticky && (S([Q.popper], n ? 0 : Q.props.updateDuration), function t() { Q.popperInstance && Q.popperInstance.scheduleUpdate(), Q.state.isMounted ? requestAnimationFrame(t) : S([Q.popper], 0) }()), H(yt(), "visible"), function (t, e) { ft(t, e) }(t, function () { Q.popperChildren.tooltip.classList.add("tippy-notransition"), Q.props.aria && Q.reference.setAttribute("aria-".concat(Q.props.aria), Q.popper.id), Q.props.onShown(Q), Q.state.isShown = !0 })) }))) : gt() } function wt() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h(Q.props.duration, 1, o.duration[1]); !Q.state.isDestroyed && Q.state.isEnabled && !1 !== Q.props.onHide(Q) && (Q.popperChildren.tooltip.classList.remove("tippy-notransition"), Q.props.interactive && Q.reference.classList.remove("tippy-active"), Q.popper.style.visibility = "hidden", Q.state.isVisible = !1, Q.state.isShown = !1, S(yt(), t), H(yt(), "hidden"), function (t, e) { ft(t, function () { !Q.state.isVisible && B && B.contains(Q.popper) && e() }) }(t, function () { C || et(), Q.props.aria && Q.reference.removeAttribute("aria-".concat(Q.props.aria)), Q.popperInstance.disableEventListeners(), Q.popperInstance.options.placement = Q.props.placement, B.removeChild(Q.popper), Q.props.onHidden(Q), Q.state.isMounted = !1 })) } function gt(t) { Q.state.isDestroyed || (Q.state.isMounted && wt(0), bt(), delete Q.reference._tippy, Q.props.target && t && f(Q.reference.querySelectorAll(Q.props.target)).forEach(function (t) { t._tippy && t._tippy.destroy() }), Q.popperInstance && Q.popperInstance.destroy(), Q.state.isDestroyed = !0) } } var Q = !1; function Z(t, a) { K(a, o), Q || (document.addEventListener("click", U, !0), document.addEventListener("touchstart", V, D), window.addEventListener("blur", q), Q = !0); var r = e({}, o, a); b(t) && function (t) { var e = { isVirtual: !0, attributes: t.attributes || {}, setAttribute: function (e, a) { t.attributes[e] = a }, getAttribute: function (e) { return t.attributes[e] }, removeAttribute: function (e) { delete t.attributes[e] }, hasAttribute: function (e) { return e in t.attributes }, addEventListener: function () { }, removeEventListener: function () { }, classList: { classNames: {}, add: function (e) { t.classList.classNames[e] = !0 }, remove: function (e) { delete t.classList.classNames[e] }, contains: function (e) { return e in t.classList.classNames } } }; for (var a in e) t[a] = e[a] }(t); var n = function (t) { if (g(t)) return [t]; if (t instanceof NodeList) return f(t); if (Array.isArray(t)) return t; try { return f(document.querySelectorAll(t)) } catch (t) { return [] } }(t).reduce(function (t, e) { var a = e && G(e, r); return a && t.push(a), t }, []); return g(t) ? n[0] : n } return Z.version = "4.0.2", Z.defaults = o, Z.setDefaults = function (t) { Object.keys(t).forEach(function (e) { o[e] = t[e] }) }, Z.hideAll = _, Z.group = function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = e.delay, r = void 0 === a ? t[0].props.delay : a, n = e.duration, i = void 0 === n ? 0 : n, p = !1; function o(t) { p = t, d() } function s(e) { e._originalProps.onShow(e), t.forEach(function (t) { t.set({ duration: i }), t.hide() }), o(!0) } function l(t) { t._originalProps.onHide(t), o(!1) } function c(t) { t._originalProps.onShown(t), t.set({ duration: t._originalProps.duration }) } function d() { t.forEach(function (t) { t.set({ onShow: s, onShown: c, onHide: l, delay: p ? [0, Array.isArray(r) ? r[1] : r] : r, duration: p ? i : t._originalProps.duration }) }) } t.forEach(function (t) { t._originalProps = { duration: t.props.duration, onHide: t.props.onHide, onShow: t.props.onShow, onShown: t.props.onShown } }), d() }, a && setTimeout(function () { f(document.querySelectorAll("[data-tippy]")).forEach(function (t) { var e = t.getAttribute("data-tippy"); e && Z(t, { content: e }) }) }), function (t) { if (a) { var e = document.createElement("style"); e.type = "text/css", e.textContent = t; var r = document.head, n = r.firstChild; n ? r.insertBefore(e, n) : r.appendChild(e) } }('.tippy-iOS{cursor:pointer!important}.tippy-notransition{transition:none}.tippy-popper{transition-timing-function:cubic-bezier(.165,.84,.44,1);max-width:calc(100% - 10px);pointer-events:none;outline:0}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-8px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;bottom:-7px;margin:0 6px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 25%;transform-origin:0 25%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-55%);transform:scale(1) translate(-50%,-55%)}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%,-45%);transform:scale(.2) translate(-50%,-45%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(-10px) rotateX(0);transform:perspective(700px) translateY(-10px) rotateX(0)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) translateY(0) rotateX(60deg);transform:perspective(700px) translateY(0) rotateX(60deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=top] [data-animation=scale]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(-10px) scale(1);transform:translateY(-10px) scale(1)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px) scale(.5);transform:translateY(-10px) scale(.5)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-8px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(0);transform:rotate(0)}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;top:-7px;margin:0 6px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -50%;transform-origin:0 -50%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-45%);transform:scale(1) translate(-50%,-45%)}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%);transform:scale(.2) translate(-50%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(10px) rotateX(0);transform:perspective(700px) translateY(10px) rotateX(0)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) translateY(0) rotateX(-60deg);transform:perspective(700px) translateY(0) rotateX(-60deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=bottom] [data-animation=scale]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(10px) scale(1);transform:translateY(10px) scale(1)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px) scale(.5);transform:translateY(10px) scale(.5)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-16px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-75%,-50%);transform:scale(.2) translate(-75%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(-10px) rotateY(0);transform:perspective(700px) translateX(-10px) rotateY(0)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) translateX(0) rotateY(-60deg);transform:perspective(700px) translateX(0) rotateY(-60deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=left] [data-animation=scale]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(-10px) scale(1);transform:translateX(-10px) scale(1)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px) scale(.5);transform:translateX(-10px) scale(.5)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-16px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-50% 0;transform-origin:-50% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-25%,-50%);transform:scale(.2) translate(-25%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(10px) rotateY(0);transform:perspective(700px) translateX(10px) rotateY(0)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) translateX(0) rotateY(60deg);transform:perspective(700px) translateX(0) rotateY(60deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=right] [data-animation=scale]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(10px) scale(1);transform:translateX(10px) scale(1)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px) scale(.5);transform:translateX(10px) scale(.5)}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:.9rem;padding:.3rem .6rem;line-height:1.4;text-align:center;will-change:transform;background-color:#333}.tippy-tooltip[data-size=small]{padding:.2rem .4rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.4rem .8rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:transparent}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:24px;height:8px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;will-change:transform;background-color:#333;border-radius:50%;width:calc(110% + 2rem);left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:"";float:left;padding-top:100%}.tippy-backdrop+.tippy-content{transition-property:opacity;will-change:opacity}.tippy-backdrop+.tippy-content[data-state=visible]{opacity:1}.tippy-backdrop+.tippy-content[data-state=hidden]{opacity:0}'), Z });
//# sourceMappingURL=index.all.min.js.map
