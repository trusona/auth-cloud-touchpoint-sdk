/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const D = window, it = D.ShadowRoot && (D.ShadyCSS === void 0 || D.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, st = Symbol(), nt = /* @__PURE__ */ new WeakMap();
let gt = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== st)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (it && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = nt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && nt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const St = (s) => new gt(typeof s == "string" ? s : s + "", void 0, st), O = (s, ...t) => {
  const e = s.length === 1 ? s[0] : t.reduce((i, n, r) => i + ((o) => {
    if (o._$cssResult$ === !0)
      return o.cssText;
    if (typeof o == "number")
      return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + s[r + 1], s[0]);
  return new gt(e, s, st);
}, xt = (s, t) => {
  it ? s.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach((e) => {
    const i = document.createElement("style"), n = D.litNonce;
    n !== void 0 && i.setAttribute("nonce", n), i.textContent = e.cssText, s.appendChild(i);
  });
}, ot = it ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules)
    e += i.cssText;
  return St(e);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var z;
const B = window, rt = B.trustedTypes, wt = rt ? rt.emptyScript : "", lt = B.reactiveElementPolyfillSupport, G = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? wt : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, t) {
  let e = s;
  switch (t) {
    case Boolean:
      e = s !== null;
      break;
    case Number:
      e = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(s);
      } catch {
        e = null;
      }
  }
  return e;
} }, $t = (s, t) => t !== s && (t == t || s == s), W = { attribute: !0, type: String, converter: G, reflect: !1, hasChanged: $t }, Q = "finalized";
let x = class extends HTMLElement {
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
    return this.elementProperties.forEach((e, i) => {
      const n = this._$Ep(i, e);
      n !== void 0 && (this._$Ev.set(n, i), t.push(n));
    }), t;
  }
  static createProperty(t, e = W) {
    if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const i = typeof t == "symbol" ? Symbol() : "__" + t, n = this.getPropertyDescriptor(t, i, e);
      n !== void 0 && Object.defineProperty(this.prototype, t, n);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    return { get() {
      return this[e];
    }, set(n) {
      const r = this[t];
      this[e] = n, this.requestUpdate(t, r, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || W;
  }
  static finalize() {
    if (this.hasOwnProperty(Q))
      return !1;
    this[Q] = !0;
    const t = Object.getPrototypeOf(this);
    if (t.finalize(), t.h !== void 0 && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const e = this.properties, i = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
      for (const n of i)
        this.createProperty(n, e[n]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const n of i)
        e.unshift(ot(n));
    } else
      t !== void 0 && e.push(ot(t));
    return e;
  }
  static _$Ep(t, e) {
    const i = e.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  _$Eu() {
    var t;
    this._$E_ = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach((e) => e(this));
  }
  addController(t) {
    var e, i;
    ((e = this._$ES) !== null && e !== void 0 ? e : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((i = t.hostConnected) === null || i === void 0 || i.call(t));
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
    return xt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var t;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var i;
      return (i = e.hostConnected) === null || i === void 0 ? void 0 : i.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var i;
      return (i = e.hostDisconnected) === null || i === void 0 ? void 0 : i.call(e);
    });
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$EO(t, e, i = W) {
    var n;
    const r = this.constructor._$Ep(t, i);
    if (r !== void 0 && i.reflect === !0) {
      const o = (((n = i.converter) === null || n === void 0 ? void 0 : n.toAttribute) !== void 0 ? i.converter : G).toAttribute(e, i.type);
      this._$El = t, o == null ? this.removeAttribute(r) : this.setAttribute(r, o), this._$El = null;
    }
  }
  _$AK(t, e) {
    var i;
    const n = this.constructor, r = n._$Ev.get(t);
    if (r !== void 0 && this._$El !== r) {
      const o = n.getPropertyOptions(r), a = typeof o.converter == "function" ? { fromAttribute: o.converter } : ((i = o.converter) === null || i === void 0 ? void 0 : i.fromAttribute) !== void 0 ? o.converter : G;
      this._$El = r, this[r] = a.fromAttribute(e, o.type), this._$El = null;
    }
  }
  requestUpdate(t, e, i) {
    let n = !0;
    t !== void 0 && (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || $t)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), i.reflect === !0 && this._$El !== t && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t, i))) : n = !1), !this.isUpdatePending && n && (this._$E_ = this._$Ej());
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
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((n, r) => this[r] = n), this._$Ei = void 0);
    let e = !1;
    const i = this._$AL;
    try {
      e = this.shouldUpdate(i), e ? (this.willUpdate(i), (t = this._$ES) === null || t === void 0 || t.forEach((n) => {
        var r;
        return (r = n.hostUpdate) === null || r === void 0 ? void 0 : r.call(n);
      }), this.update(i)) : this._$Ek();
    } catch (n) {
      throw e = !1, this._$Ek(), n;
    }
    e && this._$AE(i);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((i) => {
      var n;
      return (n = i.hostUpdated) === null || n === void 0 ? void 0 : n.call(i);
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
    this._$EC !== void 0 && (this._$EC.forEach((e, i) => this._$EO(i, this[i], e)), this._$EC = void 0), this._$Ek();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
x[Q] = !0, x.elementProperties = /* @__PURE__ */ new Map(), x.elementStyles = [], x.shadowRootOptions = { mode: "open" }, lt == null || lt({ ReactiveElement: x }), ((z = B.reactiveElementVersions) !== null && z !== void 0 ? z : B.reactiveElementVersions = []).push("1.6.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var K;
const M = window, w = M.trustedTypes, at = w ? w.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, X = "$lit$", m = `lit$${(Math.random() + "").slice(9)}$`, yt = "?" + m, Pt = `<${yt}>`, C = document, T = () => C.createComment(""), I = (s) => s === null || typeof s != "object" && typeof s != "function", mt = Array.isArray, Ot = (s) => mt(s) || typeof (s == null ? void 0 : s[Symbol.iterator]) == "function", Z = `[ 	
\f\r]`, k = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ht = /-->/g, dt = />/g, b = RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ct = /'/g, ut = /"/g, _t = /^(?:script|style|textarea|title)$/i, kt = (s) => (t, ...e) => ({ _$litType$: s, strings: t, values: e }), _ = kt(1), E = Symbol.for("lit-noChange"), u = Symbol.for("lit-nothing"), pt = /* @__PURE__ */ new WeakMap(), A = C.createTreeWalker(C, 129, null, !1);
function bt(s, t) {
  if (!Array.isArray(s) || !s.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return at !== void 0 ? at.createHTML(t) : t;
}
const Tt = (s, t) => {
  const e = s.length - 1, i = [];
  let n, r = t === 2 ? "<svg>" : "", o = k;
  for (let a = 0; a < e; a++) {
    const l = s[a];
    let h, d, c = -1, f = 0;
    for (; f < l.length && (o.lastIndex = f, d = o.exec(l), d !== null); )
      f = o.lastIndex, o === k ? d[1] === "!--" ? o = ht : d[1] !== void 0 ? o = dt : d[2] !== void 0 ? (_t.test(d[2]) && (n = RegExp("</" + d[2], "g")), o = b) : d[3] !== void 0 && (o = b) : o === b ? d[0] === ">" ? (o = n ?? k, c = -1) : d[1] === void 0 ? c = -2 : (c = o.lastIndex - d[2].length, h = d[1], o = d[3] === void 0 ? b : d[3] === '"' ? ut : ct) : o === ut || o === ct ? o = b : o === ht || o === dt ? o = k : (o = b, n = void 0);
    const $ = o === b && s[a + 1].startsWith("/>") ? " " : "";
    r += o === k ? l + Pt : c >= 0 ? (i.push(h), l.slice(0, c) + X + l.slice(c) + m + $) : l + m + (c === -2 ? (i.push(void 0), a) : $);
  }
  return [bt(s, r + (s[e] || "<?>") + (t === 2 ? "</svg>" : "")), i];
};
class F {
  constructor({ strings: t, _$litType$: e }, i) {
    let n;
    this.parts = [];
    let r = 0, o = 0;
    const a = t.length - 1, l = this.parts, [h, d] = Tt(t, e);
    if (this.el = F.createElement(h, i), A.currentNode = this.el.content, e === 2) {
      const c = this.el.content, f = c.firstChild;
      f.remove(), c.append(...f.childNodes);
    }
    for (; (n = A.nextNode()) !== null && l.length < a; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) {
          const c = [];
          for (const f of n.getAttributeNames())
            if (f.endsWith(X) || f.startsWith(m)) {
              const $ = d[o++];
              if (c.push(f), $ !== void 0) {
                const Et = n.getAttribute($.toLowerCase() + X).split(m), H = /([.?@])?(.*)/.exec($);
                l.push({ type: 1, index: r, name: H[2], strings: Et, ctor: H[1] === "." ? Ft : H[1] === "?" ? Lt : H[1] === "@" ? Nt : j });
              } else
                l.push({ type: 6, index: r });
            }
          for (const f of c)
            n.removeAttribute(f);
        }
        if (_t.test(n.tagName)) {
          const c = n.textContent.split(m), f = c.length - 1;
          if (f > 0) {
            n.textContent = w ? w.emptyScript : "";
            for (let $ = 0; $ < f; $++)
              n.append(c[$], T()), A.nextNode(), l.push({ type: 2, index: ++r });
            n.append(c[f], T());
          }
        }
      } else if (n.nodeType === 8)
        if (n.data === yt)
          l.push({ type: 2, index: r });
        else {
          let c = -1;
          for (; (c = n.data.indexOf(m, c + 1)) !== -1; )
            l.push({ type: 7, index: r }), c += m.length - 1;
        }
      r++;
    }
  }
  static createElement(t, e) {
    const i = C.createElement("template");
    return i.innerHTML = t, i;
  }
}
function P(s, t, e = s, i) {
  var n, r, o, a;
  if (t === E)
    return t;
  let l = i !== void 0 ? (n = e._$Co) === null || n === void 0 ? void 0 : n[i] : e._$Cl;
  const h = I(t) ? void 0 : t._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== h && ((r = l == null ? void 0 : l._$AO) === null || r === void 0 || r.call(l, !1), h === void 0 ? l = void 0 : (l = new h(s), l._$AT(s, e, i)), i !== void 0 ? ((o = (a = e)._$Co) !== null && o !== void 0 ? o : a._$Co = [])[i] = l : e._$Cl = l), l !== void 0 && (t = P(s, l._$AS(s, t.values), l, i)), t;
}
class It {
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
    const { el: { content: i }, parts: n } = this._$AD, r = ((e = t == null ? void 0 : t.creationScope) !== null && e !== void 0 ? e : C).importNode(i, !0);
    A.currentNode = r;
    let o = A.nextNode(), a = 0, l = 0, h = n[0];
    for (; h !== void 0; ) {
      if (a === h.index) {
        let d;
        h.type === 2 ? d = new U(o, o.nextSibling, this, t) : h.type === 1 ? d = new h.ctor(o, h.name, h.strings, this, t) : h.type === 6 && (d = new Ht(o, this, t)), this._$AV.push(d), h = n[++l];
      }
      a !== (h == null ? void 0 : h.index) && (o = A.nextNode(), a++);
    }
    return A.currentNode = C, r;
  }
  v(t) {
    let e = 0;
    for (const i of this._$AV)
      i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class U {
  constructor(t, e, i, n) {
    var r;
    this.type = 2, this._$AH = u, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = n, this._$Cp = (r = n == null ? void 0 : n.isConnected) === null || r === void 0 || r;
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
    t = P(this, t, e), I(t) ? t === u || t == null || t === "" ? (this._$AH !== u && this._$AR(), this._$AH = u) : t !== this._$AH && t !== E && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : Ot(t) ? this.T(t) : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
  }
  _(t) {
    this._$AH !== u && I(this._$AH) ? this._$AA.nextSibling.data = t : this.$(C.createTextNode(t)), this._$AH = t;
  }
  g(t) {
    var e;
    const { values: i, _$litType$: n } = t, r = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = F.createElement(bt(n.h, n.h[0]), this.options)), n);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === r)
      this._$AH.v(i);
    else {
      const o = new It(r, this), a = o.u(this.options);
      o.v(i), this.$(a), this._$AH = o;
    }
  }
  _$AC(t) {
    let e = pt.get(t.strings);
    return e === void 0 && pt.set(t.strings, e = new F(t)), e;
  }
  T(t) {
    mt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, n = 0;
    for (const r of t)
      n === e.length ? e.push(i = new U(this.k(T()), this.k(T()), this, this.options)) : i = e[n], i._$AI(r), n++;
    n < e.length && (this._$AR(i && i._$AB.nextSibling, n), e.length = n);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for ((i = this._$AP) === null || i === void 0 || i.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const n = t.nextSibling;
      t.remove(), t = n;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cp = t, (e = this._$AP) === null || e === void 0 || e.call(this, t));
  }
}
class j {
  constructor(t, e, i, n, r) {
    this.type = 1, this._$AH = u, this._$AN = void 0, this.element = t, this.name = e, this._$AM = n, this.options = r, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = u;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, i, n) {
    const r = this.strings;
    let o = !1;
    if (r === void 0)
      t = P(this, t, e, 0), o = !I(t) || t !== this._$AH && t !== E, o && (this._$AH = t);
    else {
      const a = t;
      let l, h;
      for (t = r[0], l = 0; l < r.length - 1; l++)
        h = P(this, a[i + l], e, l), h === E && (h = this._$AH[l]), o || (o = !I(h) || h !== this._$AH[l]), h === u ? t = u : t !== u && (t += (h ?? "") + r[l + 1]), this._$AH[l] = h;
    }
    o && !n && this.j(t);
  }
  j(t) {
    t === u ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ft extends j {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === u ? void 0 : t;
  }
}
const Ut = w ? w.emptyScript : "";
class Lt extends j {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== u ? this.element.setAttribute(this.name, Ut) : this.element.removeAttribute(this.name);
  }
}
class Nt extends j {
  constructor(t, e, i, n, r) {
    super(t, e, i, n, r), this.type = 5;
  }
  _$AI(t, e = this) {
    var i;
    if ((t = (i = P(this, t, e, 0)) !== null && i !== void 0 ? i : u) === E)
      return;
    const n = this._$AH, r = t === u && n !== u || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, o = t !== u && (n === u || r);
    r && this.element.removeEventListener(this.name, this, n), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e, i;
    typeof this._$AH == "function" ? this._$AH.call((i = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && i !== void 0 ? i : this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ht {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    P(this, t);
  }
}
const ft = M.litHtmlPolyfillSupport;
ft == null || ft(F, U), ((K = M.litHtmlVersions) !== null && K !== void 0 ? K : M.litHtmlVersions = []).push("2.8.0");
const Dt = (s, t, e) => {
  var i, n;
  const r = (i = e == null ? void 0 : e.renderBefore) !== null && i !== void 0 ? i : t;
  let o = r._$litPart$;
  if (o === void 0) {
    const a = (n = e == null ? void 0 : e.renderBefore) !== null && n !== void 0 ? n : null;
    r._$litPart$ = o = new U(t.insertBefore(T(), a), a, void 0, e ?? {});
  }
  return o._$AI(s), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var q, J;
class y extends x {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t, e;
    const i = super.createRenderRoot();
    return (t = (e = this.renderOptions).renderBefore) !== null && t !== void 0 || (e.renderBefore = i.firstChild), i;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Dt(e, this.renderRoot, this.renderOptions);
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
y.finalized = !0, y._$litElement$ = !0, (q = globalThis.litElementHydrateSupport) === null || q === void 0 || q.call(globalThis, { LitElement: y });
const vt = globalThis.litElementPolyfillSupport;
vt == null || vt({ LitElement: y });
((J = globalThis.litElementVersions) !== null && J !== void 0 ? J : globalThis.litElementVersions = []).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L = (s) => (t) => typeof t == "function" ? ((e, i) => (customElements.define(e, i), i))(s, t) : ((e, i) => {
  const { kind: n, elements: r } = i;
  return { kind: n, elements: r, finisher(o) {
    customElements.define(e, o);
  } };
})(s, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Bt = (s, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? { ...t, finisher(e) {
  e.createProperty(t.key, s);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: t.key, initializer() {
  typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
}, finisher(e) {
  e.createProperty(t.key, s);
} }, Mt = (s, t, e) => {
  t.constructor.createProperty(e, s);
};
function p(s) {
  return (t, e) => e !== void 0 ? Mt(s, t, e) : Bt(s, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Rt = ({ finisher: s, descriptor: t }) => (e, i) => {
  var n;
  if (i === void 0) {
    const r = (n = e.originalKey) !== null && n !== void 0 ? n : e.key, o = t != null ? { kind: "method", placement: "prototype", key: r, descriptor: t(e.key) } : { ...e, key: r };
    return s != null && (o.finisher = function(a) {
      s(a, r);
    }), o;
  }
  {
    const r = e.constructor;
    t !== void 0 && Object.defineProperty(e, i, t(i)), s == null || s(r, i);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function jt(s) {
  return Rt({ descriptor: (t) => ({ get() {
    var e, i;
    return (i = (e = this.renderRoot) === null || e === void 0 ? void 0 : e.querySelectorAll(s)) !== null && i !== void 0 ? i : [];
  }, enumerable: !0, configurable: !0 }) });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Y;
((Y = window.HTMLSlotElement) === null || Y === void 0 ? void 0 : Y.prototype.assignedElements) != null;
const V = O`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: inherit;
    font-family: Arial, sans-serif;
  }
`;
var Vt = Object.defineProperty, zt = Object.getOwnPropertyDescriptor, N = (s, t, e, i) => {
  for (var n = i > 1 ? void 0 : i ? zt(t, e) : t, r = s.length - 1, o; r >= 0; r--)
    (o = s[r]) && (n = (i ? o(t, e, n) : o(n)) || n);
  return i && n && Vt(t, e, n), n;
};
const Wt = O`
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
let S = class extends y {
  constructor() {
    super(...arguments), this.onClick = () => {
    }, this.isProcessing = !1, this.isWaitingForInput = !1, this.getContent = () => (console.log("this.isProcessing", this.isProcessing), this.isProcessing ?? !1 ? _`<span>${this.processingIcon ?? "Processing..."}</span>` : _`<slot></slot>`);
  }
  render() {
    return _`
      <button part="button"
          @click=${this.onClick}
          ?disabled=${(this.isProcessing ?? !1) || (this.isWaitingForInput ?? !1)}
          class="auth-button"
      >
        ${this.getContent()}
      </button>
    `;
  }
};
S.styles = [V, Wt];
N([
  p({ type: Function })
], S.prototype, "onClick", 2);
N([
  p({ type: Boolean })
], S.prototype, "isProcessing", 2);
N([
  p({ type: String })
], S.prototype, "processingIcon", 2);
N([
  p({ type: Boolean })
], S.prototype, "isWaitingForInput", 2);
S = N([
  L("auth-button")
], S);
var Kt = Object.defineProperty, Zt = Object.getOwnPropertyDescriptor, qt = (s, t, e, i) => {
  for (var n = i > 1 ? void 0 : i ? Zt(t, e) : t, r = s.length - 1, o; r >= 0; r--)
    (o = s[r]) && (n = (i ? o(t, e, n) : o(n)) || n);
  return i && n && Kt(t, e, n), n;
};
const Jt = O`
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
let tt = class extends y {
  render() {
    return _`
        <h1><slot></slot></h1>
    `;
  }
};
tt.styles = [V, Jt];
tt = qt([
  L("header-1")
], tt);
var Yt = Object.defineProperty, Gt = Object.getOwnPropertyDescriptor, Qt = (s, t, e, i) => {
  for (var n = i > 1 ? void 0 : i ? Gt(t, e) : t, r = s.length - 1, o; r >= 0; r--)
    (o = s[r]) && (n = (i ? o(t, e, n) : o(n)) || n);
  return i && n && Yt(t, e, n), n;
};
const Xt = O`
  p {
    text-align: center;
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 400;
  }
  `;
let et = class extends y {
  render() {
    return _`
        <p><slot></slot></p>
    `;
  }
};
et.styles = [V, Xt];
et = Qt([
  L("text-block")
], et);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, ee = (s) => (...t) => ({ _$litDirective$: s, values: t });
let ie = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, i) {
    this._$Ct = t, this._$AM = e, this._$Ci = i;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const At = "important", se = " !" + At, ne = ee(class extends ie {
  constructor(s) {
    var t;
    if (super(s), s.type !== te.ATTRIBUTE || s.name !== "style" || ((t = s.strings) === null || t === void 0 ? void 0 : t.length) > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(s) {
    return Object.keys(s).reduce((t, e) => {
      const i = s[e];
      return i == null ? t : t + `${e = e.includes("-") ? e : e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${i};`;
    }, "");
  }
  update(s, [t]) {
    const { style: e } = s.element;
    if (this.ht === void 0) {
      this.ht = /* @__PURE__ */ new Set();
      for (const i in t)
        this.ht.add(i);
      return this.render(t);
    }
    this.ht.forEach((i) => {
      t[i] == null && (this.ht.delete(i), i.includes("-") ? e.removeProperty(i) : e[i] = "");
    });
    for (const i in t) {
      const n = t[i];
      if (n != null) {
        this.ht.add(i);
        const r = typeof n == "string" && n.endsWith(se);
        i.includes("-") || r ? e.setProperty(i, r ? n.slice(0, -11) : n, r ? At : "") : e[i] = n;
      }
    }
    return E;
  }
});
var oe = Object.defineProperty, re = Object.getOwnPropertyDescriptor, Ct = (s, t, e, i) => {
  for (var n = i > 1 ? void 0 : i ? re(t, e) : t, r = s.length - 1, o; r >= 0; r--)
    (o = s[r]) && (n = (i ? o(t, e, n) : o(n)) || n);
  return i && n && oe(t, e, n), n;
};
const le = O`
  .auth-flexdialog {
    display: flex;
    row-gap: 1.25rem;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color: #ffffff;
    width: 290px;
    vertical-align: middle;
    padding: 2rem;
    border-radius: 0.5rem;
    margin: auto;
  }
`;
let R = class extends y {
  render() {
    return _`
            <div class="auth-flexdialog" style=${ne(this.getMinWidthStyles())}>
                <slot></slot>
            </div>
        `;
  }
  getMinWidthStyles() {
    return { "min-width": this.minWidth ?? "auto" };
  }
};
R.styles = [V, le];
Ct([
  p({ type: String })
], R.prototype, "minWidth", 2);
R = Ct([
  L("flex-container")
], R);
var ae = Object.defineProperty, he = Object.getOwnPropertyDescriptor, g = (s, t, e, i) => {
  for (var n = i > 1 ? void 0 : i ? he(t, e) : t, r = s.length - 1, o; r >= 0; r--)
    (o = s[r]) && (n = (i ? o(t, e, n) : o(n)) || n);
  return i && n && ae(t, e, n), n;
};
let v = class extends y {
  constructor() {
    super(...arguments), this.codeLength = 6, this.inputType = "text", this.inputMode = "numeric", this.initialFocusField = 0, this.isCharsCode = !1, this.isCodeHidden = !1, this.isPrevFocusableAfterClearing = !1, this.isFocusingOnLastByClickIfFilled = !1, this.code = void 0, this.disabled = !1, this.autocap = void 0, this.isNonDigitsCode = !1, this.placeholders = [], this.inputs = [], this.inputsStates = [], this.state = {
      isFocusingAfterAppearingCompleted: !1,
      isInitialFocusFieldEnabled: !1
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.state.isInitialFocusFieldEnabled = this.initialFocusField !== void 0, this.onCodeLengthChanges();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  // @ts-ignore
  updated(s) {
    super.updated(s), s.has("code") && this.onInputCodeChanges(), s.has("codeLength") && this.onCodeLengthChanges();
  }
  render() {
    return _`
            <div class="code-input">
              ${this.placeholders.map((s, t) => _`
                <span class="${this.isCodeHidden ? "code-hidden" : ""}">
                  <input
                    @click="${(e) => this.onClick(e)}"
                    @paste="${(e) => this.onPaste(e, t)}"
                    @input="${(e) => this.onInput(e, t)}"
                    @keydown="${(e) => this.onKeydown(e, t)}" 
                    type="${this.inputType}"
                    ?disabled="${this.disabled}"
                    inputmode="${this.inputMode}"
                    ?autocapitalize="${this.autocap}"
                    autocomplete="one-time-code"
                  />
                </span>
              `)}
            </div>
    `;
  }
  firstUpdated(s) {
    super.firstUpdated(s), this.inputs = this.shadowRoot.querySelectorAll("input") || [], this.focusOnInputAfterAppearing();
  }
  reset(s = !1) {
    this.onInputCodeChanges(), this.state.isInitialFocusFieldEnabled && this.focusOnField(this.initialFocusField), s && this.emitChanges();
  }
  onCodeLengthChanges() {
    this.codeLength && (this.placeholders = Array.from({ length: this.codeLength }, (s, t) => t));
  }
  onInputCodeChanges() {
    if (!this.inputs.length)
      return;
    if (this.isEmpty(this.code)) {
      this.inputs.forEach((e) => {
        this.setInputValue(e, null);
      });
      return;
    }
    const s = this.code.toString().trim().split("");
    let t = !0;
    for (const e of s)
      if (!this.canInputValue(e)) {
        t = !1;
        break;
      }
    this.inputs.forEach((e, i) => {
      const n = t ? s[i] : null;
      this.setInputValue(e, n);
    });
  }
  onClick(s) {
    if (!this.isFocusingOnLastByClickIfFilled)
      return;
    const t = s.target, e = this.inputs[this.codeLength - 1];
    t === e || !(this.getCurrentFilledCode().length >= this.codeLength) || setTimeout(() => e.focus());
  }
  onInput(s, t) {
    const e = s.target, i = s.data || e.value;
    if (this.isEmpty(i))
      return;
    if (!this.canInputValue(i)) {
      s.preventDefault(), s.stopPropagation(), this.setInputValue(e, null), this.setStateForInput(
        e,
        1
        /* reset */
      );
      return;
    }
    const n = i.toString().trim().split("");
    for (let o = 0; o < n.length; o++) {
      const a = o + t;
      if (a > this.codeLength - 1)
        break;
      this.setInputValue(this.inputs[a], n[o]);
    }
    this.emitChanges();
    const r = t + n.length;
    if (r > this.codeLength - 1) {
      e.blur();
      return;
    }
    this.inputs[r].focus();
  }
  onPaste(s, t) {
    s.preventDefault(), s.stopPropagation();
    const e = s.clipboardData ? s.clipboardData.getData("text").trim() : void 0;
    if (this.isEmpty(e))
      return;
    const i = e.split("");
    let n = 0;
    for (let r = t; r < this.inputs.length && n !== i.length; r++) {
      const o = this.inputs[r], a = i[n];
      if (!this.canInputValue(a)) {
        this.setInputValue(o, null), this.setStateForInput(
          o,
          1
          /* reset */
        );
        return;
      }
      this.setInputValue(o, a.toString()), n++;
    }
    this.inputs[t].blur(), this.emitChanges();
  }
  async onKeydown(s, t) {
    const e = s.target, i = this.isEmpty(e.value), n = t - 1, r = await this.isBackspaceKey(s), o = this.isDeleteKey(s);
    !r && !o || (s.preventDefault(), this.setInputValue(e, null), i || this.emitChanges(), !(n < 0 || o) && (i || this.isPrevFocusableAfterClearing) && this.inputs[n].focus());
  }
  focusOnInputAfterAppearing() {
    this.state.isInitialFocusFieldEnabled && (this.state.isFocusingAfterAppearingCompleted || (this.focusOnField(this.initialFocusField), this.state.isFocusingAfterAppearingCompleted = document.activeElement === this.inputs[this.initialFocusField]));
  }
  emitChanges() {
    setTimeout(() => this.emitCode(), 50);
  }
  emitCode() {
    const s = this.getCurrentFilledCode();
    document.dispatchEvent(new CustomEvent("code-changed", { detail: s })), s.length >= this.codeLength && document.dispatchEvent(new CustomEvent("code-completed", { detail: s }));
  }
  getCurrentFilledCode() {
    let s = "";
    for (const t of this.inputs)
      this.isEmpty(t.value) || (s += t.value);
    return s;
  }
  isBackspaceKey(s) {
    return s.key && s.key.toLowerCase() === "backspace" || s.keyCode && s.keyCode === 8 ? Promise.resolve(!0) : !s.keyCode || s.keyCode !== 229 ? Promise.resolve(!1) : new Promise((e) => {
      setTimeout(() => {
        const i = s.target, n = this.getStateForInput(i) === 1;
        n && this.setStateForInput(
          i,
          0
          /* ready */
        ), e(i.selectionStart === 0 && !n);
      });
    });
  }
  isDeleteKey(s) {
    return s.key && s.key.toLowerCase() === "delete" || s.keyCode && s.keyCode === 46;
  }
  setInputValue(s, t) {
    const e = this.isEmpty(t), i = "has-value", n = "empty";
    e ? (s.value = "", s.classList.remove(i), s.parentElement.classList.add(n)) : (s.value = t, s.classList.add(i), s.parentElement.classList.remove(n));
  }
  canInputValue(s) {
    return this.isEmpty(s) ? !1 : /^[0-9]+$/.test(s.toString()) || this.isCharsCode || this.isNonDigitsCode;
  }
  focusOnField(s) {
    if (s >= this.codeLength)
      throw new Error("The index of the focusing input box should be less than the codeLength.");
    this.inputs[s].focus();
  }
  setStateForInput(s, t) {
    const e = this.inputs.indexOf(s);
    e < 0 || (this.inputsStates[e] = t);
  }
  getStateForInput(s) {
    const t = this.inputs.indexOf(s);
    return this.inputsStates[t];
  }
  isEmpty(s) {
    return s == null || !s.toString().length;
  }
};
v.styles = O`
    :host {
        --text-security-type: disc;
        --item-background: transparent;
        --item-font-weight: 300;
        --color: #171516;
        --item-spacing: .5rem;
        --item-height: 4.375em;
        --item-border: 1px solid #ddd;
        --item-border-bottom: 1px solid #ddd;
        --item-border-has-value: 1px solid #ddd;
        --item-border-bottom-has-value: 1px solid #ddd;
        --item-border-focused: 1px solid #ddd;
        --item-border-bottom-focused: 1px solid #ddd;
        --item-shadow-focused: 0px 1px 5px #ddd;
        --item-border-radius: 5px;

        display: flex;
        transform: translate3d(0, 0, 0);
        font-size: inherit;
        color: var(--color);
    } 
      
    .code-input {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }

    span {
      display: block;
      flex: 1;
    }

    span.code-hidden input {
      text-security: var(--text-security-type);
      -webkit-text-security: var(--text-security-type);
      -moz-text-security: var(--text-security-type);
    }

    input {
      width: 100%;
      height: var(--item-height);
      color: inherit;
      background: var(--item-background);
      text-align: center;
      font-size: inherit;
      border: var(--item-border);
      border-bottom: var(--item-border-bottom);
      border-radius: var(--item-border-radius);
      -webkit-appearance: none;
      transform: translateZ(0);
      -webkit-transform: translateZ(0);
      outline: none;
    }

    input.has-value {
      border: var(--item-border-has-value);
      border-bottom: var(--item-border-bottom-has-value);
    }

    input:focus {
      border: var(--item-border-focused);
      border-bottom: var(--item-border-bottom-focused);
      box-shadow: var(--item-shadow-focused);
    }
  `;
g([
  jt("input")
], v.prototype, "inputsList", 2);
g([
  p({ type: Number })
], v.prototype, "codeLength", 2);
g([
  p({ type: String })
], v.prototype, "inputType", 2);
g([
  p({ type: String })
], v.prototype, "inputMode", 2);
g([
  p({ type: Number })
], v.prototype, "initialFocusField", 2);
g([
  p({ type: Boolean })
], v.prototype, "isCharsCode", 2);
g([
  p({ type: Boolean })
], v.prototype, "isCodeHidden", 2);
g([
  p({ type: Boolean })
], v.prototype, "isPrevFocusableAfterClearing", 2);
g([
  p({ type: Boolean })
], v.prototype, "isFocusingOnLastByClickIfFilled", 2);
g([
  p({ type: String })
], v.prototype, "code", 2);
g([
  p({ type: Boolean })
], v.prototype, "disabled", 2);
g([
  p({ type: String })
], v.prototype, "autocap", 2);
g([
  p({ type: Boolean })
], v.prototype, "isNonDigitsCode", 2);
v = g([
  L("code-input")
], v);
