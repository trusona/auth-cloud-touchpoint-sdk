/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const T = window, Q = T.ShadowRoot && (T.ShadyCSS === void 0 || T.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, X = Symbol(), et = /* @__PURE__ */ new WeakMap();
let ut = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== X)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (Q && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = et.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && et.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const mt = (n) => new ut(typeof n == "string" ? n : n + "", void 0, X), k = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce((s, i, r) => s + ((o) => {
    if (o._$cssResult$ === !0)
      return o.cssText;
    if (typeof o == "number")
      return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + n[r + 1], n[0]);
  return new ut(e, n, X);
}, At = (n, t) => {
  Q ? n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach((e) => {
    const s = document.createElement("style"), i = T.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, n.appendChild(s);
  });
}, st = Q ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules)
    e += s.cssText;
  return mt(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var z;
const M = window, it = M.trustedTypes, bt = it ? it.emptyScript : "", nt = M.reactiveElementPolyfillSupport, q = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? bt : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, t) {
  let e = n;
  switch (t) {
    case Boolean:
      e = n !== null;
      break;
    case Number:
      e = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(n);
      } catch {
        e = null;
      }
  }
  return e;
} }, $t = (n, t) => t !== n && (t == t || n == n), B = { attribute: !0, type: String, converter: q, reflect: !1, hasChanged: $t }, K = "finalized";
let A = class extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu();
  }
  static addInitializer(t) {
    var e;
    this.finalize(), ((e = this.h) !== null && e !== void 0 ? e : this.h = []).push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this.elementProperties.forEach((e, s) => {
      const i = this._$Ep(s, e);
      i !== void 0 && (this._$Ev.set(i, s), t.push(i));
    }), t;
  }
  static createProperty(t, e = B) {
    if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const s = typeof t == "symbol" ? Symbol() : "__" + t, i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && Object.defineProperty(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    return { get() {
      return this[e];
    }, set(i) {
      const r = this[t];
      this[e] = i, this.requestUpdate(t, r, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || B;
  }
  static finalize() {
    if (this.hasOwnProperty(K))
      return !1;
    this[K] = !0;
    const t = Object.getPrototypeOf(this);
    if (t.finalize(), t.h !== void 0 && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const e = this.properties, s = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
      for (const i of s)
        this.createProperty(i, e[i]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s)
        e.unshift(st(i));
    } else
      t !== void 0 && e.push(st(t));
    return e;
  }
  static _$Ep(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  _$Eu() {
    var t;
    this._$E_ = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach((e) => e(this));
  }
  addController(t) {
    var e, s;
    ((e = this._$ES) !== null && e !== void 0 ? e : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((s = t.hostConnected) === null || s === void 0 || s.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$ES) === null || e === void 0 || e.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t, e) => {
      this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
    });
  }
  createRenderRoot() {
    var t;
    const e = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions);
    return At(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var t;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var s;
      return (s = e.hostConnected) === null || s === void 0 ? void 0 : s.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var s;
      return (s = e.hostDisconnected) === null || s === void 0 ? void 0 : s.call(e);
    });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$EO(t, e, s = B) {
    var i;
    const r = this.constructor._$Ep(t, s);
    if (r !== void 0 && s.reflect === !0) {
      const o = (((i = s.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? s.converter : q).toAttribute(e, s.type);
      this._$El = t, o == null ? this.removeAttribute(r) : this.setAttribute(r, o), this._$El = null;
    }
  }
  _$AK(t, e) {
    var s;
    const i = this.constructor, r = i._$Ev.get(t);
    if (r !== void 0 && this._$El !== r) {
      const o = i.getPropertyOptions(r), a = typeof o.converter == "function" ? { fromAttribute: o.converter } : ((s = o.converter) === null || s === void 0 ? void 0 : s.fromAttribute) !== void 0 ? o.converter : q;
      this._$El = r, this[r] = a.fromAttribute(e, o.type), this._$El = null;
    }
  }
  requestUpdate(t, e, s) {
    let i = !0;
    t !== void 0 && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || $t)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), s.reflect === !0 && this._$El !== t && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t, s))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((i, r) => this[r] = i), this._$Ei = void 0);
    let e = !1;
    const s = this._$AL;
    try {
      e = this.shouldUpdate(s), e ? (this.willUpdate(s), (t = this._$ES) === null || t === void 0 || t.forEach((i) => {
        var r;
        return (r = i.hostUpdate) === null || r === void 0 ? void 0 : r.call(i);
      }), this.update(s)) : this._$Ek();
    } catch (i) {
      throw e = !1, this._$Ek(), i;
    }
    e && this._$AE(s);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((s) => {
      var i;
      return (i = s.hostUpdated) === null || i === void 0 ? void 0 : i.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$EC !== void 0 && (this._$EC.forEach((e, s) => this._$EO(s, this[s], e)), this._$EC = void 0), this._$Ek();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
A[K] = !0, A.elementProperties = /* @__PURE__ */ new Map(), A.elementStyles = [], A.shadowRootOptions = { mode: "open" }, nt == null || nt({ ReactiveElement: A }), ((z = M.reactiveElementVersions) !== null && z !== void 0 ? z : M.reactiveElementVersions = []).push("1.6.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var I;
const R = window, b = R.trustedTypes, ot = b ? b.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, Z = "$lit$", v = `lit$${(Math.random() + "").slice(9)}$`, vt = "?" + v, Et = `<${vt}>`, y = document, C = () => y.createComment(""), P = (n) => n === null || typeof n != "object" && typeof n != "function", _t = Array.isArray, St = (n) => _t(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", L = `[ 	
\f\r]`, w = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, rt = /-->/g, lt = />/g, _ = RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ht = /'/g, at = /"/g, ft = /^(?:script|style|textarea|title)$/i, wt = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), x = wt(1), E = Symbol.for("lit-noChange"), p = Symbol.for("lit-nothing"), ct = /* @__PURE__ */ new WeakMap(), f = y.createTreeWalker(y, 129, null, !1);
function gt(n, t) {
  if (!Array.isArray(n) || !n.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return ot !== void 0 ? ot.createHTML(t) : t;
}
const xt = (n, t) => {
  const e = n.length - 1, s = [];
  let i, r = t === 2 ? "<svg>" : "", o = w;
  for (let a = 0; a < e; a++) {
    const l = n[a];
    let h, c, d = -1, u = 0;
    for (; u < l.length && (o.lastIndex = u, c = o.exec(l), c !== null); )
      u = o.lastIndex, o === w ? c[1] === "!--" ? o = rt : c[1] !== void 0 ? o = lt : c[2] !== void 0 ? (ft.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = _) : c[3] !== void 0 && (o = _) : o === _ ? c[0] === ">" ? (o = i ?? w, d = -1) : c[1] === void 0 ? d = -2 : (d = o.lastIndex - c[2].length, h = c[1], o = c[3] === void 0 ? _ : c[3] === '"' ? at : ht) : o === at || o === ht ? o = _ : o === rt || o === lt ? o = w : (o = _, i = void 0);
    const $ = o === _ && n[a + 1].startsWith("/>") ? " " : "";
    r += o === w ? l + Et : d >= 0 ? (s.push(h), l.slice(0, d) + Z + l.slice(d) + v + $) : l + v + (d === -2 ? (s.push(void 0), a) : $);
  }
  return [gt(n, r + (n[e] || "<?>") + (t === 2 ? "</svg>" : "")), s];
};
class O {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let r = 0, o = 0;
    const a = t.length - 1, l = this.parts, [h, c] = xt(t, e);
    if (this.el = O.createElement(h, s), f.currentNode = this.el.content, e === 2) {
      const d = this.el.content, u = d.firstChild;
      u.remove(), d.append(...u.childNodes);
    }
    for (; (i = f.nextNode()) !== null && l.length < a; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const d = [];
          for (const u of i.getAttributeNames())
            if (u.endsWith(Z) || u.startsWith(v)) {
              const $ = c[o++];
              if (d.push(u), $ !== void 0) {
                const yt = i.getAttribute($.toLowerCase() + Z).split(v), N = /([.?@])?(.*)/.exec($);
                l.push({ type: 1, index: r, name: N[2], strings: yt, ctor: N[1] === "." ? Pt : N[1] === "?" ? Ut : N[1] === "@" ? Ht : j });
              } else
                l.push({ type: 6, index: r });
            }
          for (const u of d)
            i.removeAttribute(u);
        }
        if (ft.test(i.tagName)) {
          const d = i.textContent.split(v), u = d.length - 1;
          if (u > 0) {
            i.textContent = b ? b.emptyScript : "";
            for (let $ = 0; $ < u; $++)
              i.append(d[$], C()), f.nextNode(), l.push({ type: 2, index: ++r });
            i.append(d[u], C());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === vt)
          l.push({ type: 2, index: r });
        else {
          let d = -1;
          for (; (d = i.data.indexOf(v, d + 1)) !== -1; )
            l.push({ type: 7, index: r }), d += v.length - 1;
        }
      r++;
    }
  }
  static createElement(t, e) {
    const s = y.createElement("template");
    return s.innerHTML = t, s;
  }
}
function S(n, t, e = n, s) {
  var i, r, o, a;
  if (t === E)
    return t;
  let l = s !== void 0 ? (i = e._$Co) === null || i === void 0 ? void 0 : i[s] : e._$Cl;
  const h = P(t) ? void 0 : t._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== h && ((r = l == null ? void 0 : l._$AO) === null || r === void 0 || r.call(l, !1), h === void 0 ? l = void 0 : (l = new h(n), l._$AT(n, e, s)), s !== void 0 ? ((o = (a = e)._$Co) !== null && o !== void 0 ? o : a._$Co = [])[s] = l : e._$Cl = l), l !== void 0 && (t = S(n, l._$AS(n, t.values), l, s)), t;
}
class Ct {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    var e;
    const { el: { content: s }, parts: i } = this._$AD, r = ((e = t == null ? void 0 : t.creationScope) !== null && e !== void 0 ? e : y).importNode(s, !0);
    f.currentNode = r;
    let o = f.nextNode(), a = 0, l = 0, h = i[0];
    for (; h !== void 0; ) {
      if (a === h.index) {
        let c;
        h.type === 2 ? c = new U(o, o.nextSibling, this, t) : h.type === 1 ? c = new h.ctor(o, h.name, h.strings, this, t) : h.type === 6 && (c = new Nt(o, this, t)), this._$AV.push(c), h = i[++l];
      }
      a !== (h == null ? void 0 : h.index) && (o = f.nextNode(), a++);
    }
    return f.currentNode = y, r;
  }
  v(t) {
    let e = 0;
    for (const s of this._$AV)
      s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class U {
  constructor(t, e, s, i) {
    var r;
    this.type = 2, this._$AH = p, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cp = (r = i == null ? void 0 : i.isConnected) === null || r === void 0 || r;
  }
  get _$AU() {
    var t, e;
    return (e = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && e !== void 0 ? e : this._$Cp;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = S(this, t, e), P(t) ? t === p || t == null || t === "" ? (this._$AH !== p && this._$AR(), this._$AH = p) : t !== this._$AH && t !== E && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : St(t) ? this.T(t) : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
  }
  _(t) {
    this._$AH !== p && P(this._$AH) ? this._$AA.nextSibling.data = t : this.$(y.createTextNode(t)), this._$AH = t;
  }
  g(t) {
    var e;
    const { values: s, _$litType$: i } = t, r = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = O.createElement(gt(i.h, i.h[0]), this.options)), i);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === r)
      this._$AH.v(s);
    else {
      const o = new Ct(r, this), a = o.u(this.options);
      o.v(s), this.$(a), this._$AH = o;
    }
  }
  _$AC(t) {
    let e = ct.get(t.strings);
    return e === void 0 && ct.set(t.strings, e = new O(t)), e;
  }
  T(t) {
    _t(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const r of t)
      i === e.length ? e.push(s = new U(this.k(C()), this.k(C()), this, this.options)) : s = e[i], s._$AI(r), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) === null || s === void 0 || s.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cp = t, (e = this._$AP) === null || e === void 0 || e.call(this, t));
  }
}
class j {
  constructor(t, e, s, i, r) {
    this.type = 1, this._$AH = p, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = p;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, s, i) {
    const r = this.strings;
    let o = !1;
    if (r === void 0)
      t = S(this, t, e, 0), o = !P(t) || t !== this._$AH && t !== E, o && (this._$AH = t);
    else {
      const a = t;
      let l, h;
      for (t = r[0], l = 0; l < r.length - 1; l++)
        h = S(this, a[s + l], e, l), h === E && (h = this._$AH[l]), o || (o = !P(h) || h !== this._$AH[l]), h === p ? t = p : t !== p && (t += (h ?? "") + r[l + 1]), this._$AH[l] = h;
    }
    o && !i && this.j(t);
  }
  j(t) {
    t === p ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Pt extends j {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === p ? void 0 : t;
  }
}
const Ot = b ? b.emptyScript : "";
class Ut extends j {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== p ? this.element.setAttribute(this.name, Ot) : this.element.removeAttribute(this.name);
  }
}
class Ht extends j {
  constructor(t, e, s, i, r) {
    super(t, e, s, i, r), this.type = 5;
  }
  _$AI(t, e = this) {
    var s;
    if ((t = (s = S(this, t, e, 0)) !== null && s !== void 0 ? s : p) === E)
      return;
    const i = this._$AH, r = t === p && i !== p || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, o = t !== p && (i === p || r);
    r && this.element.removeEventListener(this.name, this, i), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e, s;
    typeof this._$AH == "function" ? this._$AH.call((s = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && s !== void 0 ? s : this.element, t) : this._$AH.handleEvent(t);
  }
}
class Nt {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    S(this, t);
  }
}
const dt = R.litHtmlPolyfillSupport;
dt == null || dt(O, U), ((I = R.litHtmlVersions) !== null && I !== void 0 ? I : R.litHtmlVersions = []).push("2.8.0");
const Tt = (n, t, e) => {
  var s, i;
  const r = (s = e == null ? void 0 : e.renderBefore) !== null && s !== void 0 ? s : t;
  let o = r._$litPart$;
  if (o === void 0) {
    const a = (i = e == null ? void 0 : e.renderBefore) !== null && i !== void 0 ? i : null;
    r._$litPart$ = o = new U(t.insertBefore(C(), a), a, void 0, e ?? {});
  }
  return o._$AI(n), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var V, W;
class g extends A {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t, e;
    const s = super.createRenderRoot();
    return (t = (e = this.renderOptions).renderBefore) !== null && t !== void 0 || (e.renderBefore = s.firstChild), s;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Tt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!1);
  }
  render() {
    return E;
  }
}
g.finalized = !0, g._$litElement$ = !0, (V = globalThis.litElementHydrateSupport) === null || V === void 0 || V.call(globalThis, { LitElement: g });
const pt = globalThis.litElementPolyfillSupport;
pt == null || pt({ LitElement: g });
((W = globalThis.litElementVersions) !== null && W !== void 0 ? W : globalThis.litElementVersions = []).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = (n) => (t) => typeof t == "function" ? ((e, s) => (customElements.define(e, s), s))(n, t) : ((e, s) => {
  const { kind: i, elements: r } = s;
  return { kind: i, elements: r, finisher(o) {
    customElements.define(e, o);
  } };
})(n, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Mt = (n, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? { ...t, finisher(e) {
  e.createProperty(t.key, n);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: t.key, initializer() {
  typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
}, finisher(e) {
  e.createProperty(t.key, n);
} }, Rt = (n, t, e) => {
  t.constructor.createProperty(e, n);
};
function D(n) {
  return (t, e) => e !== void 0 ? Rt(n, t, e) : Mt(n, t);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var F;
((F = window.HTMLSlotElement) === null || F === void 0 ? void 0 : F.prototype.assignedElements) != null;
const tt = k`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: inherit;
    font-family: Arial, sans-serif;
  }
`;
var kt = Object.defineProperty, jt = Object.getOwnPropertyDescriptor, H = (n, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? jt(t, e) : t, r = n.length - 1, o; r >= 0; r--)
    (o = n[r]) && (i = (s ? o(t, e, i) : o(i)) || i);
  return s && i && kt(t, e, i), i;
};
const Dt = k`
  .auth-button {
    margin-left: auto;
    margin-right: auto;

    align-items: center;
    appearance: none;
    display: flex;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    justify-content: space-around;
    letter-spacing: 1px;
    line-height: 17px;
    min-height: 47px;
    padding: 0 24px;
    text-align: center;
    transition-delay: 0s;
    transition-duration: 0.1s;
    transition-property: box-shadow;
    transition-timing-function: ease;
    width: 100%;
    cursor: pointer;
    background-color: #7B46D1;
    border: 1px solid #7B46D1;
    color: rgb(255, 255, 255);
    border-radius: 5px;
  }

  .auth-button:disabled {
    background-color: #cccccc !important;
    border: 1px solid #cccccc !important;
    color: #444444 !important;
  }

  .auth-btn-content-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }

  .auth-btn-content-text {
    flex: 1;
    text-align: center;
  }
  `;
let m = class extends g {
  constructor() {
    super(...arguments), this.onClick = () => {
    }, this.isProcessing = !1, this.isWaitingForInput = !1, this.getContent = () => (console.log("this.isProcessing", this.isProcessing), this.isProcessing ? x`<span>${this.processingIcon ? this.processingIcon : "Processing..."}</span>` : x`<slot></slot>`);
  }
  render() {
    return x`
      <button part="button"
          @click=${this.onClick}
          ?disabled=${this.isProcessing || this.isWaitingForInput}
          class="auth-button"
      >
        ${this.getContent()}
      </button>
    `;
  }
};
m.styles = [tt, Dt];
H([
  D({ type: Function })
], m.prototype, "onClick", 2);
H([
  D({ type: Boolean })
], m.prototype, "isProcessing", 2);
H([
  D({ type: String })
], m.prototype, "processingIcon", 2);
H([
  D({ type: Boolean })
], m.prototype, "isWaitingForInput", 2);
m = H([
  Y("auth-button")
], m);
var zt = Object.defineProperty, Bt = Object.getOwnPropertyDescriptor, It = (n, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? Bt(t, e) : t, r = n.length - 1, o; r >= 0; r--)
    (o = n[r]) && (i = (s ? o(t, e, i) : o(i)) || i);
  return s && i && zt(t, e, i), i;
};
const Lt = k`
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    display: block;
    align-items: center;
    text-align: center;
    color: #000000;
    margin-bottom: 0;
    margin-top: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
  `;
let J = class extends g {
  render() {
    return x`
        <h1><slot></slot></h1>
    `;
  }
};
J.styles = [tt, Lt];
J = It([
  Y("header-1")
], J);
var Vt = Object.defineProperty, Wt = Object.getOwnPropertyDescriptor, Ft = (n, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? Wt(t, e) : t, r = n.length - 1, o; r >= 0; r--)
    (o = n[r]) && (i = (s ? o(t, e, i) : o(i)) || i);
  return s && i && Vt(t, e, i), i;
};
const qt = k`
  p {
    text-align: center;
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 400;
  }
  `;
let G = class extends g {
  render() {
    return x`
        <p><slot></slot></p>
    `;
  }
};
G.styles = [tt, qt];
G = Ft([
  Y("text-block")
], G);
