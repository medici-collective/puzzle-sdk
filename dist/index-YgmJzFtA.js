var du = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
};
var wt = (t, e, r) => (du(t, e, "read from private field"), r ? r.call(t) : e.get(t)), ir = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, Jt = (t, e, r, n) => (du(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
import * as Gt from "react";
import gn, { useEffect as At, useState as js, useRef as Pp } from "react";
const Np = Symbol(), pu = Object.getPrototypeOf, xa = /* @__PURE__ */ new WeakMap(), Lp = (t) => t && (xa.has(t) ? xa.get(t) : pu(t) === Object.prototype || pu(t) === Array.prototype), Fp = (t) => Lp(t) && t[Np] || null, gu = (t, e = !0) => {
  xa.set(t, e);
};
var ro = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Qo = (t) => typeof t == "object" && t !== null, sn = /* @__PURE__ */ new WeakMap(), Ui = /* @__PURE__ */ new WeakSet(), Up = (t = Object.is, e = (c, f) => new Proxy(c, f), r = (c) => Qo(c) && !Ui.has(c) && (Array.isArray(c) || !(Symbol.iterator in c)) && !(c instanceof WeakMap) && !(c instanceof WeakSet) && !(c instanceof Error) && !(c instanceof Number) && !(c instanceof Date) && !(c instanceof String) && !(c instanceof RegExp) && !(c instanceof ArrayBuffer), n = (c) => {
  switch (c.status) {
    case "fulfilled":
      return c.value;
    case "rejected":
      throw c.reason;
    default:
      throw c;
  }
}, s = /* @__PURE__ */ new WeakMap(), i = (c, f, d = n) => {
  const p = s.get(c);
  if ((p == null ? void 0 : p[0]) === f)
    return p[1];
  const m = Array.isArray(c) ? [] : Object.create(Object.getPrototypeOf(c));
  return gu(m, !0), s.set(c, [f, m]), Reflect.ownKeys(c).forEach((v) => {
    if (Object.getOwnPropertyDescriptor(m, v))
      return;
    const _ = Reflect.get(c, v), x = {
      value: _,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (Ui.has(_))
      gu(_, !1);
    else if (_ instanceof Promise)
      delete x.value, x.get = () => d(_);
    else if (sn.has(_)) {
      const [T, w] = sn.get(
        _
      );
      x.value = i(
        T,
        w(),
        d
      );
    }
    Object.defineProperty(m, v, x);
  }), Object.preventExtensions(m);
}, a = /* @__PURE__ */ new WeakMap(), o = [1, 1], u = (c) => {
  if (!Qo(c))
    throw new Error("object required");
  const f = a.get(c);
  if (f)
    return f;
  let d = o[0];
  const p = /* @__PURE__ */ new Set(), m = (C, A = ++o[0]) => {
    d !== A && (d = A, p.forEach((M) => M(C, A)));
  };
  let v = o[1];
  const _ = (C = ++o[1]) => (v !== C && !p.size && (v = C, T.forEach(([A]) => {
    const M = A[1](C);
    M > d && (d = M);
  })), d), x = (C) => (A, M) => {
    const z = [...A];
    z[1] = [C, ...z[1]], m(z, M);
  }, T = /* @__PURE__ */ new Map(), w = (C, A) => {
    if ((ro ? "production" : void 0) !== "production" && T.has(C))
      throw new Error("prop listener already exists");
    if (p.size) {
      const M = A[3](x(C));
      T.set(C, [A, M]);
    } else
      T.set(C, [A]);
  }, D = (C) => {
    var A;
    const M = T.get(C);
    M && (T.delete(C), (A = M[1]) == null || A.call(M));
  }, b = (C) => (p.add(C), p.size === 1 && T.forEach(([M, z], G) => {
    if ((ro ? "production" : void 0) !== "production" && z)
      throw new Error("remove already exists");
    const R = M[3](x(G));
    T.set(G, [M, R]);
  }), () => {
    p.delete(C), p.size === 0 && T.forEach(([M, z], G) => {
      z && (z(), T.set(G, [M]));
    });
  }), S = Array.isArray(c) ? [] : Object.create(Object.getPrototypeOf(c)), l = e(S, {
    deleteProperty(C, A) {
      const M = Reflect.get(C, A);
      D(A);
      const z = Reflect.deleteProperty(C, A);
      return z && m(["delete", [A], M]), z;
    },
    set(C, A, M, z) {
      const G = Reflect.has(C, A), R = Reflect.get(C, A, z);
      if (G && (t(R, M) || a.has(M) && t(R, a.get(M))))
        return !0;
      D(A), Qo(M) && (M = Fp(M) || M);
      let L = M;
      if (M instanceof Promise)
        M.then((Q) => {
          M.status = "fulfilled", M.value = Q, m(["resolve", [A], Q]);
        }).catch((Q) => {
          M.status = "rejected", M.reason = Q, m(["reject", [A], Q]);
        });
      else {
        !sn.has(M) && r(M) && (L = u(M));
        const Q = !Ui.has(L) && sn.get(L);
        Q && w(A, Q);
      }
      return Reflect.set(C, A, L, z), m(["set", [A], M, R]), !0;
    }
  });
  a.set(c, l);
  const y = [
    S,
    _,
    i,
    b
  ];
  return sn.set(l, y), Reflect.ownKeys(c).forEach((C) => {
    const A = Object.getOwnPropertyDescriptor(
      c,
      C
    );
    "value" in A && (l[C] = c[C], delete A.value, delete A.writable), Object.defineProperty(S, C, A);
  }), l;
}) => [
  // public functions
  u,
  // shared state
  sn,
  Ui,
  // internal things
  t,
  e,
  r,
  n,
  s,
  i,
  a,
  o
], [Mp] = Up();
function yn(t = {}) {
  return Mp(t);
}
function jn(t, e, r) {
  const n = sn.get(t);
  (ro ? "production" : void 0) !== "production" && !n && console.warn("Please use proxy object");
  let s;
  const i = [], a = n[3];
  let o = !1;
  const c = a((f) => {
    if (i.push(f), r) {
      e(i.splice(0));
      return;
    }
    s || (s = Promise.resolve().then(() => {
      s = void 0, o && e(i.splice(0));
    }));
  });
  return o = !0, () => {
    o = !1, c();
  };
}
function jp(t, e) {
  const r = sn.get(t);
  (ro ? "production" : void 0) !== "production" && !r && console.warn("Please use proxy object");
  const [n, s, i] = r;
  return i(n, s(), e);
}
const St = yn({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), $f = { state: St, subscribe(t) {
  return jn(St, () => t(St));
}, push(t, e) {
  t !== St.view && (St.view = t, e && (St.data = e), St.history.push(t));
}, reset(t) {
  St.view = t, St.history = [t];
}, replace(t) {
  St.history.length > 1 && (St.history[St.history.length - 1] = t, St.view = t);
}, goBack() {
  if (St.history.length > 1) {
    St.history.pop();
    const [t] = St.history.slice(-1);
    St.view = t;
  }
}, setData(t) {
  St.data = t;
} }, $t = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", WCM_VERSION: "WCM_VERSION", RECOMMENDED_WALLET_AMOUNT: 9, isMobile() {
  return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return $t.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isIos() {
  const t = navigator.userAgent.toLowerCase();
  return $t.isMobile() && (t.includes("iphone") || t.includes("ipad"));
}, isHttpUrl(t) {
  return t.startsWith("http://") || t.startsWith("https://");
}, isArray(t) {
  return Array.isArray(t) && t.length > 0;
}, formatNativeUrl(t, e, r) {
  if ($t.isHttpUrl(t))
    return this.formatUniversalUrl(t, e, r);
  let n = t;
  n.includes("://") || (n = t.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, r);
  const s = encodeURIComponent(e);
  return `${n}wc?uri=${s}`;
}, formatUniversalUrl(t, e, r) {
  if (!$t.isHttpUrl(t))
    return this.formatNativeUrl(t, e, r);
  let n = t;
  n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, r);
  const s = encodeURIComponent(e);
  return `${n}wc?uri=${s}`;
}, async wait(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}, openHref(t, e) {
  window.open(t, e, "noreferrer noopener");
}, setWalletConnectDeepLink(t, e) {
  try {
    localStorage.setItem($t.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: e }));
  } catch {
    console.info("Unable to set WalletConnect deep link");
  }
}, setWalletConnectAndroidDeepLink(t) {
  try {
    const [e] = t.split("?");
    localStorage.setItem($t.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: "Android" }));
  } catch {
    console.info("Unable to set WalletConnect android deep link");
  }
}, removeWalletConnectDeepLink() {
  try {
    localStorage.removeItem($t.WALLETCONNECT_DEEPLINK_CHOICE);
  } catch {
    console.info("Unable to remove WalletConnect deep link");
  }
}, setModalVersionInStorage() {
  try {
    typeof localStorage < "u" && localStorage.setItem($t.WCM_VERSION, "2.6.2");
  } catch {
    console.info("Unable to set Web3Modal version in storage");
  }
}, getWalletRouterData() {
  var t;
  const e = (t = $f.state.data) == null ? void 0 : t.Wallet;
  if (!e)
    throw new Error('Missing "Wallet" view data');
  return e;
} }, $p = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), Ft = yn({ enabled: $p, userSessionId: "", events: [], connectedWalletId: void 0 }), kp = { state: Ft, subscribe(t) {
  return jn(Ft.events, () => t(jp(Ft.events[Ft.events.length - 1])));
}, initialize() {
  Ft.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (Ft.userSessionId = crypto.randomUUID());
}, setConnectedWalletId(t) {
  Ft.connectedWalletId = t;
}, click(t) {
  if (Ft.enabled) {
    const e = { type: "CLICK", name: t.name, userSessionId: Ft.userSessionId, timestamp: Date.now(), data: t };
    Ft.events.push(e);
  }
}, track(t) {
  if (Ft.enabled) {
    const e = { type: "TRACK", name: t.name, userSessionId: Ft.userSessionId, timestamp: Date.now(), data: t };
    Ft.events.push(e);
  }
}, view(t) {
  if (Ft.enabled) {
    const e = { type: "VIEW", name: t.name, userSessionId: Ft.userSessionId, timestamp: Date.now(), data: t };
    Ft.events.push(e);
  }
} }, Ar = yn({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), Sr = { state: Ar, subscribe(t) {
  return jn(Ar, () => t(Ar));
}, setChains(t) {
  Ar.chains = t;
}, setWalletConnectUri(t) {
  Ar.walletConnectUri = t;
}, setIsCustomDesktop(t) {
  Ar.isCustomDesktop = t;
}, setIsCustomMobile(t) {
  Ar.isCustomMobile = t;
}, setIsDataLoaded(t) {
  Ar.isDataLoaded = t;
}, setIsUiLoaded(t) {
  Ar.isUiLoaded = t;
}, setIsAuth(t) {
  Ar.isAuth = t;
} }, Mi = yn({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), ls = { state: Mi, subscribe(t) {
  return jn(Mi, () => t(Mi));
}, setConfig(t) {
  var e, r;
  kp.initialize(), Sr.setChains(t.chains), Sr.setIsAuth(!!t.enableAuthMode), Sr.setIsCustomMobile(!!((e = t.mobileWallets) != null && e.length)), Sr.setIsCustomDesktop(!!((r = t.desktopWallets) != null && r.length)), $t.setModalVersionInStorage(), Object.assign(Mi, t);
} };
var qp = Object.defineProperty, yu = Object.getOwnPropertySymbols, zp = Object.prototype.hasOwnProperty, Bp = Object.prototype.propertyIsEnumerable, mu = (t, e, r) => e in t ? qp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Vp = (t, e) => {
  for (var r in e || (e = {}))
    zp.call(e, r) && mu(t, r, e[r]);
  if (yu)
    for (var r of yu(e))
      Bp.call(e, r) && mu(t, r, e[r]);
  return t;
};
const Da = "https://explorer-api.walletconnect.com", Oa = "wcm", Ia = "js-2.6.2";
async function ji(t, e) {
  const r = Vp({ sdkType: Oa, sdkVersion: Ia }, e), n = new URL(t, Da);
  return n.searchParams.append("projectId", ls.state.projectId), Object.entries(r).forEach(([s, i]) => {
    i && n.searchParams.append(s, String(i));
  }), (await fetch(n)).json();
}
const wn = { async getDesktopListings(t) {
  return ji("/w3m/v1/getDesktopListings", t);
}, async getMobileListings(t) {
  return ji("/w3m/v1/getMobileListings", t);
}, async getInjectedListings(t) {
  return ji("/w3m/v1/getInjectedListings", t);
}, async getAllListings(t) {
  return ji("/w3m/v1/getAllListings", t);
}, getWalletImageUrl(t) {
  return `${Da}/w3m/v1/getWalletImage/${t}?projectId=${ls.state.projectId}&sdkType=${Oa}&sdkVersion=${Ia}`;
}, getAssetImageUrl(t) {
  return `${Da}/w3m/v1/getAssetImage/${t}?projectId=${ls.state.projectId}&sdkType=${Oa}&sdkVersion=${Ia}`;
} };
var Kp = Object.defineProperty, vu = Object.getOwnPropertySymbols, Hp = Object.prototype.hasOwnProperty, Wp = Object.prototype.propertyIsEnumerable, bu = (t, e, r) => e in t ? Kp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Gp = (t, e) => {
  for (var r in e || (e = {}))
    Hp.call(e, r) && bu(t, r, e[r]);
  if (vu)
    for (var r of vu(e))
      Wp.call(e, r) && bu(t, r, e[r]);
  return t;
};
const wu = $t.isMobile(), Pr = yn({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), dO = { state: Pr, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: t, explorerExcludedWalletIds: e } = ls.state;
  if (t === "NONE" || e === "ALL" && !t)
    return Pr.recomendedWallets;
  if ($t.isArray(t)) {
    const r = { recommendedIds: t.join(",") }, { listings: n } = await wn.getAllListings(r), s = Object.values(n);
    s.sort((i, a) => {
      const o = t.indexOf(i.id), u = t.indexOf(a.id);
      return o - u;
    }), Pr.recomendedWallets = s;
  } else {
    const { chains: r, isAuth: n } = Sr.state, s = r == null ? void 0 : r.join(","), i = $t.isArray(e), a = { page: 1, sdks: n ? "auth_v1" : void 0, entries: $t.RECOMMENDED_WALLET_AMOUNT, chains: s, version: 2, excludedIds: i ? e.join(",") : void 0 }, { listings: o } = wu ? await wn.getMobileListings(a) : await wn.getDesktopListings(a);
    Pr.recomendedWallets = Object.values(o);
  }
  return Pr.recomendedWallets;
}, async getWallets(t) {
  const e = Gp({}, t), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: n } = ls.state, { recomendedWallets: s } = Pr;
  if (n === "ALL")
    return Pr.wallets;
  s.length ? e.excludedIds = s.map((d) => d.id).join(",") : $t.isArray(r) && (e.excludedIds = r.join(",")), $t.isArray(n) && (e.excludedIds = [e.excludedIds, n].filter(Boolean).join(",")), Sr.state.isAuth && (e.sdks = "auth_v1");
  const { page: i, search: a } = t, { listings: o, total: u } = wu ? await wn.getMobileListings(e) : await wn.getDesktopListings(e), c = Object.values(o), f = a ? "search" : "wallets";
  return Pr[f] = { listings: [...Pr[f].listings, ...c], total: u, page: i ?? 1 }, { listings: c, total: u };
}, getWalletImageUrl(t) {
  return wn.getWalletImageUrl(t);
}, getAssetImageUrl(t) {
  return wn.getAssetImageUrl(t);
}, resetSearch() {
  Pr.search = { listings: [], total: 0, page: 1 };
} }, Bn = yn({ open: !1 }), Zo = { state: Bn, subscribe(t) {
  return jn(Bn, () => t(Bn));
}, async open(t) {
  return new Promise((e) => {
    const { isUiLoaded: r, isDataLoaded: n } = Sr.state;
    if ($t.removeWalletConnectDeepLink(), Sr.setWalletConnectUri(t == null ? void 0 : t.uri), Sr.setChains(t == null ? void 0 : t.chains), $f.reset("ConnectWallet"), r && n)
      Bn.open = !0, e();
    else {
      const s = setInterval(() => {
        const i = Sr.state;
        i.isUiLoaded && i.isDataLoaded && (clearInterval(s), Bn.open = !0, e());
      }, 200);
    }
  });
}, close() {
  Bn.open = !1;
} };
var Qp = Object.defineProperty, _u = Object.getOwnPropertySymbols, Zp = Object.prototype.hasOwnProperty, Yp = Object.prototype.propertyIsEnumerable, Eu = (t, e, r) => e in t ? Qp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Jp = (t, e) => {
  for (var r in e || (e = {}))
    Zp.call(e, r) && Eu(t, r, e[r]);
  if (_u)
    for (var r of _u(e))
      Yp.call(e, r) && Eu(t, r, e[r]);
  return t;
};
function Xp() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const Ds = yn({ themeMode: Xp() ? "dark" : "light" }), Su = { state: Ds, subscribe(t) {
  return jn(Ds, () => t(Ds));
}, setThemeConfig(t) {
  const { themeMode: e, themeVariables: r } = t;
  e && (Ds.themeMode = e), r && (Ds.themeVariables = Jp({}, r));
} }, _n = yn({ open: !1, message: "", variant: "success" }), pO = { state: _n, subscribe(t) {
  return jn(_n, () => t(_n));
}, openToast(t, e) {
  _n.open = !0, _n.message = t, _n.variant = e;
}, closeToast() {
  _n.open = !1;
} };
let eg = class {
  constructor(e) {
    this.openModal = Zo.open, this.closeModal = Zo.close, this.subscribeModal = Zo.subscribe, this.setTheme = Su.setThemeConfig, Su.setThemeConfig(e), ls.setConfig(e), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-5oquN8-M.js");
      const e = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", e), Sr.setIsUiLoaded(!0);
    }
  }
};
var Ur = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function di(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Co(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var s = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, s.get ? s : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var xc = { exports: {} }, es = typeof Reflect == "object" ? Reflect : null, xu = es && typeof es.apply == "function" ? es.apply : function(e, r, n) {
  return Function.prototype.apply.call(e, r, n);
}, Qi;
es && typeof es.ownKeys == "function" ? Qi = es.ownKeys : Object.getOwnPropertySymbols ? Qi = function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Qi = function(e) {
  return Object.getOwnPropertyNames(e);
};
function tg(t) {
  console && console.warn && console.warn(t);
}
var kf = Number.isNaN || function(e) {
  return e !== e;
};
function Ke() {
  Ke.init.call(this);
}
xc.exports = Ke;
xc.exports.once = ig;
Ke.EventEmitter = Ke;
Ke.prototype._events = void 0;
Ke.prototype._eventsCount = 0;
Ke.prototype._maxListeners = void 0;
var Du = 10;
function Ro(t) {
  if (typeof t != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
Object.defineProperty(Ke, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Du;
  },
  set: function(t) {
    if (typeof t != "number" || t < 0 || kf(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    Du = t;
  }
});
Ke.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Ke.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || kf(e))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
};
function qf(t) {
  return t._maxListeners === void 0 ? Ke.defaultMaxListeners : t._maxListeners;
}
Ke.prototype.getMaxListeners = function() {
  return qf(this);
};
Ke.prototype.emit = function(e) {
  for (var r = [], n = 1; n < arguments.length; n++)
    r.push(arguments[n]);
  var s = e === "error", i = this._events;
  if (i !== void 0)
    s = s && i.error === void 0;
  else if (!s)
    return !1;
  if (s) {
    var a;
    if (r.length > 0 && (a = r[0]), a instanceof Error)
      throw a;
    var o = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
    throw o.context = a, o;
  }
  var u = i[e];
  if (u === void 0)
    return !1;
  if (typeof u == "function")
    xu(u, this, r);
  else
    for (var c = u.length, f = Hf(u, c), n = 0; n < c; ++n)
      xu(f[n], this, r);
  return !0;
};
function zf(t, e, r, n) {
  var s, i, a;
  if (Ro(r), i = t._events, i === void 0 ? (i = t._events = /* @__PURE__ */ Object.create(null), t._eventsCount = 0) : (i.newListener !== void 0 && (t.emit(
    "newListener",
    e,
    r.listener ? r.listener : r
  ), i = t._events), a = i[e]), a === void 0)
    a = i[e] = r, ++t._eventsCount;
  else if (typeof a == "function" ? a = i[e] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r), s = qf(t), s > 0 && a.length > s && !a.warned) {
    a.warned = !0;
    var o = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    o.name = "MaxListenersExceededWarning", o.emitter = t, o.type = e, o.count = a.length, tg(o);
  }
  return t;
}
Ke.prototype.addListener = function(e, r) {
  return zf(this, e, r, !1);
};
Ke.prototype.on = Ke.prototype.addListener;
Ke.prototype.prependListener = function(e, r) {
  return zf(this, e, r, !0);
};
function rg() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Bf(t, e, r) {
  var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r }, s = rg.bind(n);
  return s.listener = r, n.wrapFn = s, s;
}
Ke.prototype.once = function(e, r) {
  return Ro(r), this.on(e, Bf(this, e, r)), this;
};
Ke.prototype.prependOnceListener = function(e, r) {
  return Ro(r), this.prependListener(e, Bf(this, e, r)), this;
};
Ke.prototype.removeListener = function(e, r) {
  var n, s, i, a, o;
  if (Ro(r), s = this._events, s === void 0)
    return this;
  if (n = s[e], n === void 0)
    return this;
  if (n === r || n.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete s[e], s.removeListener && this.emit("removeListener", e, n.listener || r));
  else if (typeof n != "function") {
    for (i = -1, a = n.length - 1; a >= 0; a--)
      if (n[a] === r || n[a].listener === r) {
        o = n[a].listener, i = a;
        break;
      }
    if (i < 0)
      return this;
    i === 0 ? n.shift() : ng(n, i), n.length === 1 && (s[e] = n[0]), s.removeListener !== void 0 && this.emit("removeListener", e, o || r);
  }
  return this;
};
Ke.prototype.off = Ke.prototype.removeListener;
Ke.prototype.removeAllListeners = function(e) {
  var r, n, s;
  if (n = this._events, n === void 0)
    return this;
  if (n.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[e]), this;
  if (arguments.length === 0) {
    var i = Object.keys(n), a;
    for (s = 0; s < i.length; ++s)
      a = i[s], a !== "removeListener" && this.removeAllListeners(a);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = n[e], typeof r == "function")
    this.removeListener(e, r);
  else if (r !== void 0)
    for (s = r.length - 1; s >= 0; s--)
      this.removeListener(e, r[s]);
  return this;
};
function Vf(t, e, r) {
  var n = t._events;
  if (n === void 0)
    return [];
  var s = n[e];
  return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? sg(s) : Hf(s, s.length);
}
Ke.prototype.listeners = function(e) {
  return Vf(this, e, !0);
};
Ke.prototype.rawListeners = function(e) {
  return Vf(this, e, !1);
};
Ke.listenerCount = function(t, e) {
  return typeof t.listenerCount == "function" ? t.listenerCount(e) : Kf.call(t, e);
};
Ke.prototype.listenerCount = Kf;
function Kf(t) {
  var e = this._events;
  if (e !== void 0) {
    var r = e[t];
    if (typeof r == "function")
      return 1;
    if (r !== void 0)
      return r.length;
  }
  return 0;
}
Ke.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Qi(this._events) : [];
};
function Hf(t, e) {
  for (var r = new Array(e), n = 0; n < e; ++n)
    r[n] = t[n];
  return r;
}
function ng(t, e) {
  for (; e + 1 < t.length; e++)
    t[e] = t[e + 1];
  t.pop();
}
function sg(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function ig(t, e) {
  return new Promise(function(r, n) {
    function s(a) {
      t.removeListener(e, i), n(a);
    }
    function i() {
      typeof t.removeListener == "function" && t.removeListener("error", s), r([].slice.call(arguments));
    }
    Wf(t, e, i, { once: !0 }), e !== "error" && og(t, s, { once: !0 });
  });
}
function og(t, e, r) {
  typeof t.on == "function" && Wf(t, "error", e, r);
}
function Wf(t, e, r, n) {
  if (typeof t.on == "function")
    n.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function s(i) {
      n.once && t.removeEventListener(e, s), r(i);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
}
var mr = xc.exports;
const pi = /* @__PURE__ */ di(mr), ag = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, cg = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, ug = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function lg(t, e) {
  if (t === "__proto__" || t === "constructor" && e && typeof e == "object" && "prototype" in e) {
    fg(t);
    return;
  }
  return e;
}
function fg(t) {
  console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`);
}
function $i(t, e = {}) {
  if (typeof t != "string")
    return t;
  const r = t.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    t[0] === '"' && t.at(-1) === '"' && !t.includes("\\")
  )
    return r.slice(1, -1);
  if (r.length <= 9) {
    const n = r.toLowerCase();
    if (n === "true")
      return !0;
    if (n === "false")
      return !1;
    if (n === "undefined")
      return;
    if (n === "null")
      return null;
    if (n === "nan")
      return Number.NaN;
    if (n === "infinity")
      return Number.POSITIVE_INFINITY;
    if (n === "-infinity")
      return Number.NEGATIVE_INFINITY;
  }
  if (!ug.test(t)) {
    if (e.strict)
      throw new SyntaxError("[destr] Invalid JSON");
    return t;
  }
  try {
    if (ag.test(t) || cg.test(t)) {
      if (e.strict)
        throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(t, lg);
    }
    return JSON.parse(t);
  } catch (n) {
    if (e.strict)
      throw n;
    return t;
  }
}
function hg(t) {
  return !t || typeof t.then != "function" ? Promise.resolve(t) : t;
}
function xt(t, ...e) {
  try {
    return hg(t(...e));
  } catch (r) {
    return Promise.reject(r);
  }
}
function dg(t) {
  const e = typeof t;
  return t === null || e !== "object" && e !== "function";
}
function pg(t) {
  const e = Object.getPrototypeOf(t);
  return !e || e.isPrototypeOf(Object);
}
function Zi(t) {
  if (dg(t))
    return String(t);
  if (pg(t) || Array.isArray(t))
    return JSON.stringify(t);
  if (typeof t.toJSON == "function")
    return Zi(t.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function Gf() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const Ca = "base64:";
function gg(t) {
  if (typeof t == "string")
    return t;
  Gf();
  const e = Buffer.from(t).toString("base64");
  return Ca + e;
}
function yg(t) {
  return typeof t != "string" || !t.startsWith(Ca) ? t : (Gf(), Buffer.from(t.slice(Ca.length), "base64"));
}
function Xt(t) {
  return t ? t.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : "";
}
function mg(...t) {
  return Xt(t.join(":"));
}
function ki(t) {
  return t = Xt(t), t ? t + ":" : "";
}
const vg = "memory", bg = () => {
  const t = /* @__PURE__ */ new Map();
  return {
    name: vg,
    options: {},
    hasItem(e) {
      return t.has(e);
    },
    getItem(e) {
      return t.get(e) ?? null;
    },
    getItemRaw(e) {
      return t.get(e) ?? null;
    },
    setItem(e, r) {
      t.set(e, r);
    },
    setItemRaw(e, r) {
      t.set(e, r);
    },
    removeItem(e) {
      t.delete(e);
    },
    getKeys() {
      return Array.from(t.keys());
    },
    clear() {
      t.clear();
    },
    dispose() {
      t.clear();
    }
  };
};
function wg(t = {}) {
  const e = {
    mounts: { "": t.driver || bg() },
    mountpoints: [""],
    watching: !1,
    watchListeners: [],
    unwatch: {}
  }, r = (c) => {
    for (const f of e.mountpoints)
      if (c.startsWith(f))
        return {
          base: f,
          relativeKey: c.slice(f.length),
          driver: e.mounts[f]
        };
    return {
      base: "",
      relativeKey: c,
      driver: e.mounts[""]
    };
  }, n = (c, f) => e.mountpoints.filter(
    (d) => d.startsWith(c) || f && c.startsWith(d)
  ).map((d) => ({
    relativeBase: c.length > d.length ? c.slice(d.length) : void 0,
    mountpoint: d,
    driver: e.mounts[d]
  })), s = (c, f) => {
    if (e.watching) {
      f = Xt(f);
      for (const d of e.watchListeners)
        d(c, f);
    }
  }, i = async () => {
    if (!e.watching) {
      e.watching = !0;
      for (const c in e.mounts)
        e.unwatch[c] = await Ou(
          e.mounts[c],
          s,
          c
        );
    }
  }, a = async () => {
    if (e.watching) {
      for (const c in e.unwatch)
        await e.unwatch[c]();
      e.unwatch = {}, e.watching = !1;
    }
  }, o = (c, f, d) => {
    const p = /* @__PURE__ */ new Map(), m = (v) => {
      let _ = p.get(v.base);
      return _ || (_ = {
        driver: v.driver,
        base: v.base,
        items: []
      }, p.set(v.base, _)), _;
    };
    for (const v of c) {
      const _ = typeof v == "string", x = Xt(_ ? v : v.key), T = _ ? void 0 : v.value, w = _ || !v.options ? f : { ...f, ...v.options }, D = r(x);
      m(D).items.push({
        key: x,
        value: T,
        relativeKey: D.relativeKey,
        options: w
      });
    }
    return Promise.all([...p.values()].map((v) => d(v))).then(
      (v) => v.flat()
    );
  }, u = {
    // Item
    hasItem(c, f = {}) {
      c = Xt(c);
      const { relativeKey: d, driver: p } = r(c);
      return xt(p.hasItem, d, f);
    },
    getItem(c, f = {}) {
      c = Xt(c);
      const { relativeKey: d, driver: p } = r(c);
      return xt(p.getItem, d, f).then(
        (m) => $i(m)
      );
    },
    getItems(c, f) {
      return o(c, f, (d) => d.driver.getItems ? xt(
        d.driver.getItems,
        d.items.map((p) => ({
          key: p.relativeKey,
          options: p.options
        })),
        f
      ).then(
        (p) => p.map((m) => ({
          key: mg(d.base, m.key),
          value: $i(m.value)
        }))
      ) : Promise.all(
        d.items.map((p) => xt(
          d.driver.getItem,
          p.relativeKey,
          p.options
        ).then((m) => ({
          key: p.key,
          value: $i(m)
        })))
      ));
    },
    getItemRaw(c, f = {}) {
      c = Xt(c);
      const { relativeKey: d, driver: p } = r(c);
      return p.getItemRaw ? xt(p.getItemRaw, d, f) : xt(p.getItem, d, f).then(
        (m) => yg(m)
      );
    },
    async setItem(c, f, d = {}) {
      if (f === void 0)
        return u.removeItem(c);
      c = Xt(c);
      const { relativeKey: p, driver: m } = r(c);
      m.setItem && (await xt(m.setItem, p, Zi(f), d), m.watch || s("update", c));
    },
    async setItems(c, f) {
      await o(c, f, async (d) => {
        d.driver.setItems && await xt(
          d.driver.setItems,
          d.items.map((p) => ({
            key: p.relativeKey,
            value: Zi(p.value),
            options: p.options
          })),
          f
        ), d.driver.setItem && await Promise.all(
          d.items.map((p) => xt(
            d.driver.setItem,
            p.relativeKey,
            Zi(p.value),
            p.options
          ))
        );
      });
    },
    async setItemRaw(c, f, d = {}) {
      if (f === void 0)
        return u.removeItem(c, d);
      c = Xt(c);
      const { relativeKey: p, driver: m } = r(c);
      if (m.setItemRaw)
        await xt(m.setItemRaw, p, f, d);
      else if (m.setItem)
        await xt(m.setItem, p, gg(f), d);
      else
        return;
      m.watch || s("update", c);
    },
    async removeItem(c, f = {}) {
      typeof f == "boolean" && (f = { removeMeta: f }), c = Xt(c);
      const { relativeKey: d, driver: p } = r(c);
      p.removeItem && (await xt(p.removeItem, d, f), (f.removeMeta || f.removeMata) && await xt(p.removeItem, d + "$", f), p.watch || s("remove", c));
    },
    // Meta
    async getMeta(c, f = {}) {
      typeof f == "boolean" && (f = { nativeOnly: f }), c = Xt(c);
      const { relativeKey: d, driver: p } = r(c), m = /* @__PURE__ */ Object.create(null);
      if (p.getMeta && Object.assign(m, await xt(p.getMeta, d, f)), !f.nativeOnly) {
        const v = await xt(
          p.getItem,
          d + "$",
          f
        ).then((_) => $i(_));
        v && typeof v == "object" && (typeof v.atime == "string" && (v.atime = new Date(v.atime)), typeof v.mtime == "string" && (v.mtime = new Date(v.mtime)), Object.assign(m, v));
      }
      return m;
    },
    setMeta(c, f, d = {}) {
      return this.setItem(c + "$", f, d);
    },
    removeMeta(c, f = {}) {
      return this.removeItem(c + "$", f);
    },
    // Keys
    async getKeys(c, f = {}) {
      c = ki(c);
      const d = n(c, !0);
      let p = [];
      const m = [];
      for (const v of d) {
        const x = (await xt(
          v.driver.getKeys,
          v.relativeBase,
          f
        )).map((T) => v.mountpoint + Xt(T)).filter((T) => !p.some((w) => T.startsWith(w)));
        m.push(...x), p = [
          v.mountpoint,
          ...p.filter((T) => !T.startsWith(v.mountpoint))
        ];
      }
      return c ? m.filter((v) => v.startsWith(c) && !v.endsWith("$")) : m.filter((v) => !v.endsWith("$"));
    },
    // Utils
    async clear(c, f = {}) {
      c = ki(c), await Promise.all(
        n(c, !1).map(async (d) => {
          if (d.driver.clear)
            return xt(d.driver.clear, d.relativeBase, f);
          if (d.driver.removeItem) {
            const p = await d.driver.getKeys(d.relativeBase || "", f);
            return Promise.all(
              p.map((m) => d.driver.removeItem(m, f))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(e.mounts).map((c) => Iu(c))
      );
    },
    async watch(c) {
      return await i(), e.watchListeners.push(c), async () => {
        e.watchListeners = e.watchListeners.filter(
          (f) => f !== c
        ), e.watchListeners.length === 0 && await a();
      };
    },
    async unwatch() {
      e.watchListeners = [], await a();
    },
    // Mount
    mount(c, f) {
      if (c = ki(c), c && e.mounts[c])
        throw new Error(`already mounted at ${c}`);
      return c && (e.mountpoints.push(c), e.mountpoints.sort((d, p) => p.length - d.length)), e.mounts[c] = f, e.watching && Promise.resolve(Ou(f, s, c)).then((d) => {
        e.unwatch[c] = d;
      }).catch(console.error), u;
    },
    async unmount(c, f = !0) {
      c = ki(c), !(!c || !e.mounts[c]) && (e.watching && c in e.unwatch && (e.unwatch[c](), delete e.unwatch[c]), f && await Iu(e.mounts[c]), e.mountpoints = e.mountpoints.filter((d) => d !== c), delete e.mounts[c]);
    },
    getMount(c = "") {
      c = Xt(c) + ":";
      const f = r(c);
      return {
        driver: f.driver,
        base: f.base
      };
    },
    getMounts(c = "", f = {}) {
      return c = Xt(c), n(c, f.parents).map((p) => ({
        driver: p.driver,
        base: p.mountpoint
      }));
    }
  };
  return u;
}
function Ou(t, e, r) {
  return t.watch ? t.watch((n, s) => e(n, r + s)) : () => {
  };
}
async function Iu(t) {
  typeof t.dispose == "function" && await xt(t.dispose);
}
function $n(t) {
  return new Promise((e, r) => {
    t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => r(t.error);
  });
}
function Qf(t, e) {
  const r = indexedDB.open(t);
  r.onupgradeneeded = () => r.result.createObjectStore(e);
  const n = $n(r);
  return (s, i) => n.then((a) => i(a.transaction(e, s).objectStore(e)));
}
let Yo;
function gi() {
  return Yo || (Yo = Qf("keyval-store", "keyval")), Yo;
}
function Cu(t, e = gi()) {
  return e("readonly", (r) => $n(r.get(t)));
}
function _g(t, e, r = gi()) {
  return r("readwrite", (n) => (n.put(e, t), $n(n.transaction)));
}
function Eg(t, e = gi()) {
  return e("readwrite", (r) => (r.delete(t), $n(r.transaction)));
}
function Sg(t = gi()) {
  return t("readwrite", (e) => (e.clear(), $n(e.transaction)));
}
function xg(t, e) {
  return t.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, $n(t.transaction);
}
function Dg(t = gi()) {
  return t("readonly", (e) => {
    if (e.getAllKeys)
      return $n(e.getAllKeys());
    const r = [];
    return xg(e, (n) => r.push(n.key)).then(() => r);
  });
}
const Og = (t) => JSON.stringify(t, (e, r) => typeof r == "bigint" ? r.toString() + "n" : r), Ig = (t) => {
  const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = t.replace(e, '$1"$2n"$3');
  return JSON.parse(r, (n, s) => typeof s == "string" && s.match(/^\d+n$/) ? BigInt(s.substring(0, s.length - 1)) : s);
};
function To(t) {
  if (typeof t != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof t}`);
  try {
    return Ig(t);
  } catch {
    return t;
  }
}
function yi(t) {
  return typeof t == "string" ? t : Og(t) || "";
}
const Cg = "idb-keyval";
var Rg = (t = {}) => {
  const e = t.base && t.base.length > 0 ? `${t.base}:` : "", r = (s) => e + s;
  let n;
  return t.dbName && t.storeName && (n = Qf(t.dbName, t.storeName)), { name: Cg, options: t, async hasItem(s) {
    return !(typeof await Cu(r(s), n) > "u");
  }, async getItem(s) {
    return await Cu(r(s), n) ?? null;
  }, setItem(s, i) {
    return _g(r(s), i, n);
  }, removeItem(s) {
    return Eg(r(s), n);
  }, getKeys() {
    return Dg(n);
  }, clear() {
    return Sg(n);
  } };
};
const Tg = "WALLET_CONNECT_V2_INDEXED_DB", Ag = "keyvaluestorage";
let Pg = class {
  constructor() {
    this.indexedDb = wg({ driver: Rg({ dbName: Tg, storeName: Ag }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((e) => [e.key, e.value]);
  }
  async getItem(e) {
    const r = await this.indexedDb.getItem(e);
    if (r !== null)
      return r;
  }
  async setItem(e, r) {
    await this.indexedDb.setItem(e, yi(r));
  }
  async removeItem(e) {
    await this.indexedDb.removeItem(e);
  }
};
var Jo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Yi = { exports: {} };
(function() {
  let t;
  function e() {
  }
  t = e, t.prototype.getItem = function(r) {
    return this.hasOwnProperty(r) ? String(this[r]) : null;
  }, t.prototype.setItem = function(r, n) {
    this[r] = String(n);
  }, t.prototype.removeItem = function(r) {
    delete this[r];
  }, t.prototype.clear = function() {
    const r = this;
    Object.keys(r).forEach(function(n) {
      r[n] = void 0, delete r[n];
    });
  }, t.prototype.key = function(r) {
    return r = r || 0, Object.keys(this)[r];
  }, t.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof Jo < "u" && Jo.localStorage ? Yi.exports = Jo.localStorage : typeof window < "u" && window.localStorage ? Yi.exports = window.localStorage : Yi.exports = new e();
})();
function Ng(t) {
  var e;
  return [t[0], To((e = t[1]) != null ? e : "")];
}
class Lg {
  constructor() {
    this.localStorage = Yi.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(Ng);
  }
  async getItem(e) {
    const r = this.localStorage.getItem(e);
    if (r !== null)
      return To(r);
  }
  async setItem(e, r) {
    this.localStorage.setItem(e, yi(r));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
}
const Fg = "wc_storage_version", Ru = 1, Ug = async (t, e, r) => {
  const n = Fg, s = await e.getItem(n);
  if (s && s >= Ru) {
    r(e);
    return;
  }
  const i = await t.getKeys();
  if (!i.length) {
    r(e);
    return;
  }
  const a = [];
  for (; i.length; ) {
    const o = i.shift();
    if (!o)
      continue;
    const u = o.toLowerCase();
    if (u.includes("wc@") || u.includes("walletconnect") || u.includes("wc_") || u.includes("wallet_connect")) {
      const c = await t.getItem(o);
      await e.setItem(o, c), a.push(o);
    }
  }
  await e.setItem(n, Ru), r(e), Mg(t, a);
}, Mg = async (t, e) => {
  e.length && e.forEach(async (r) => {
    await t.removeItem(r);
  });
};
let jg = class {
  constructor() {
    this.initialized = !1, this.setInitialized = (r) => {
      this.storage = r, this.initialized = !0;
    };
    const e = new Lg();
    this.storage = e;
    try {
      const r = new Pg();
      Ug(e, r, this.setInitialized);
    } catch {
      this.initialized = !0;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(e) {
    return await this.initialize(), this.storage.getItem(e);
  }
  async setItem(e, r) {
    return await this.initialize(), this.storage.setItem(e, r);
  }
  async removeItem(e) {
    return await this.initialize(), this.storage.removeItem(e);
  }
  async initialize() {
    this.initialized || await new Promise((e) => {
      const r = setInterval(() => {
        this.initialized && (clearInterval(r), e());
      }, 20);
    });
  }
};
var ys = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Ra = function(t, e) {
  return Ra = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var s in n)
      n.hasOwnProperty(s) && (r[s] = n[s]);
  }, Ra(t, e);
};
function $g(t, e) {
  Ra(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Ta = function() {
  return Ta = Object.assign || function(e) {
    for (var r, n = 1, s = arguments.length; n < s; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Ta.apply(this, arguments);
};
function kg(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
  return r;
}
function qg(t, e, r, n) {
  var s = arguments.length, i = s < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, e, r, n);
  else
    for (var o = t.length - 1; o >= 0; o--)
      (a = t[o]) && (i = (s < 3 ? a(i) : s > 3 ? a(e, r, i) : a(e, r)) || i);
  return s > 3 && i && Object.defineProperty(e, r, i), i;
}
function zg(t, e) {
  return function(r, n) {
    e(r, n, t);
  };
}
function Bg(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function Vg(t, e, r, n) {
  function s(i) {
    return i instanceof r ? i : new r(function(a) {
      a(i);
    });
  }
  return new (r || (r = Promise))(function(i, a) {
    function o(f) {
      try {
        c(n.next(f));
      } catch (d) {
        a(d);
      }
    }
    function u(f) {
      try {
        c(n.throw(f));
      } catch (d) {
        a(d);
      }
    }
    function c(f) {
      f.done ? i(f.value) : s(f.value).then(o, u);
    }
    c((n = n.apply(t, e || [])).next());
  });
}
function Kg(t, e) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, s, i, a;
  return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function o(c) {
    return function(f) {
      return u([c, f]);
    };
  }
  function u(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (n = 1, s && (i = c[0] & 2 ? s.return : c[0] ? s.throw || ((i = s.return) && i.call(s), 0) : s.next) && !(i = i.call(s, c[1])).done)
          return i;
        switch (s = 0, i && (c = [c[0] & 2, i.value]), c[0]) {
          case 0:
          case 1:
            i = c;
            break;
          case 4:
            return r.label++, { value: c[1], done: !1 };
          case 5:
            r.label++, s = c[1], c = [0];
            continue;
          case 7:
            c = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!i || c[1] > i[0] && c[1] < i[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < i[1]) {
              r.label = i[1], i = c;
              break;
            }
            if (i && r.label < i[2]) {
              r.label = i[2], r.ops.push(c);
              break;
            }
            i[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = e.call(t, r);
      } catch (f) {
        c = [6, f], s = 0;
      } finally {
        n = i = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Hg(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
}
function Wg(t, e) {
  for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]);
}
function Aa(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], n = 0;
  if (r)
    return r.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Zf(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), s, i = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = n.next()).done; )
      i.push(s.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      s && !s.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return i;
}
function Gg() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Zf(arguments[e]));
  return t;
}
function Qg() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), s = 0, e = 0; e < r; e++)
    for (var i = arguments[e], a = 0, o = i.length; a < o; a++, s++)
      n[s] = i[a];
  return n;
}
function qs(t) {
  return this instanceof qs ? (this.v = t, this) : new qs(t);
}
function Zg(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []), s, i = [];
  return s = {}, a("next"), a("throw"), a("return"), s[Symbol.asyncIterator] = function() {
    return this;
  }, s;
  function a(p) {
    n[p] && (s[p] = function(m) {
      return new Promise(function(v, _) {
        i.push([p, m, v, _]) > 1 || o(p, m);
      });
    });
  }
  function o(p, m) {
    try {
      u(n[p](m));
    } catch (v) {
      d(i[0][3], v);
    }
  }
  function u(p) {
    p.value instanceof qs ? Promise.resolve(p.value.v).then(c, f) : d(i[0][2], p);
  }
  function c(p) {
    o("next", p);
  }
  function f(p) {
    o("throw", p);
  }
  function d(p, m) {
    p(m), i.shift(), i.length && o(i[0][0], i[0][1]);
  }
}
function Yg(t) {
  var e, r;
  return e = {}, n("next"), n("throw", function(s) {
    throw s;
  }), n("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function n(s, i) {
    e[s] = t[s] ? function(a) {
      return (r = !r) ? { value: qs(t[s](a)), done: s === "return" } : i ? i(a) : a;
    } : i;
  }
}
function Jg(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof Aa == "function" ? Aa(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(i) {
    r[i] = t[i] && function(a) {
      return new Promise(function(o, u) {
        a = t[i](a), s(o, u, a.done, a.value);
      });
    };
  }
  function s(i, a, o, u) {
    Promise.resolve(u).then(function(c) {
      i({ value: c, done: o });
    }, a);
  }
}
function Xg(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
function ey(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e.default = t, e;
}
function ty(t) {
  return t && t.__esModule ? t : { default: t };
}
function ry(t, e) {
  if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(t);
}
function ny(t, e, r) {
  if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(t, r), r;
}
const sy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return Ta;
  },
  __asyncDelegator: Yg,
  __asyncGenerator: Zg,
  __asyncValues: Jg,
  __await: qs,
  __awaiter: Vg,
  __classPrivateFieldGet: ry,
  __classPrivateFieldSet: ny,
  __createBinding: Hg,
  __decorate: qg,
  __exportStar: Wg,
  __extends: $g,
  __generator: Kg,
  __importDefault: ty,
  __importStar: ey,
  __makeTemplateObject: Xg,
  __metadata: Bg,
  __param: zg,
  __read: Zf,
  __rest: kg,
  __spread: Gg,
  __spreadArrays: Qg,
  __values: Aa
}, Symbol.toStringTag, { value: "Module" })), kr = /* @__PURE__ */ Co(sy);
var Os = {}, se = {}, Xo = {}, Is = {}, Tu;
function iy() {
  if (Tu)
    return Is;
  Tu = 1, Object.defineProperty(Is, "__esModule", { value: !0 }), Is.delay = void 0;
  function t(e) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, e);
    });
  }
  return Is.delay = t, Is;
}
var En = {}, ea = {}, Sn = {}, Au;
function oy() {
  return Au || (Au = 1, Object.defineProperty(Sn, "__esModule", { value: !0 }), Sn.ONE_THOUSAND = Sn.ONE_HUNDRED = void 0, Sn.ONE_HUNDRED = 100, Sn.ONE_THOUSAND = 1e3), Sn;
}
var ta = {}, Pu;
function ay() {
  return Pu || (Pu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = t.ONE_MINUTE * 5, t.TEN_MINUTES = t.ONE_MINUTE * 10, t.THIRTY_MINUTES = t.ONE_MINUTE * 30, t.SIXTY_MINUTES = t.ONE_MINUTE * 60, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = t.ONE_HOUR * 3, t.SIX_HOURS = t.ONE_HOUR * 6, t.TWELVE_HOURS = t.ONE_HOUR * 12, t.TWENTY_FOUR_HOURS = t.ONE_HOUR * 24, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = t.ONE_DAY * 3, t.FIVE_DAYS = t.ONE_DAY * 5, t.SEVEN_DAYS = t.ONE_DAY * 7, t.THIRTY_DAYS = t.ONE_DAY * 30, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = t.ONE_WEEK * 2, t.THREE_WEEKS = t.ONE_WEEK * 3, t.FOUR_WEEKS = t.ONE_WEEK * 4, t.ONE_YEAR = t.ONE_DAY * 365;
  }(ta)), ta;
}
var Nu;
function Yf() {
  return Nu || (Nu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = kr;
    e.__exportStar(oy(), t), e.__exportStar(ay(), t);
  }(ea)), ea;
}
var Lu;
function cy() {
  if (Lu)
    return En;
  Lu = 1, Object.defineProperty(En, "__esModule", { value: !0 }), En.fromMiliseconds = En.toMiliseconds = void 0;
  const t = Yf();
  function e(n) {
    return n * t.ONE_THOUSAND;
  }
  En.toMiliseconds = e;
  function r(n) {
    return Math.floor(n / t.ONE_THOUSAND);
  }
  return En.fromMiliseconds = r, En;
}
var Fu;
function uy() {
  return Fu || (Fu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const e = kr;
    e.__exportStar(iy(), t), e.__exportStar(cy(), t);
  }(Xo)), Xo;
}
var Vn = {}, Uu;
function ly() {
  if (Uu)
    return Vn;
  Uu = 1, Object.defineProperty(Vn, "__esModule", { value: !0 }), Vn.Watch = void 0;
  class t {
    constructor() {
      this.timestamps = /* @__PURE__ */ new Map();
    }
    start(r) {
      if (this.timestamps.has(r))
        throw new Error(`Watch already started for label: ${r}`);
      this.timestamps.set(r, { started: Date.now() });
    }
    stop(r) {
      const n = this.get(r);
      if (typeof n.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${r}`);
      const s = Date.now() - n.started;
      this.timestamps.set(r, { started: n.started, elapsed: s });
    }
    get(r) {
      const n = this.timestamps.get(r);
      if (typeof n > "u")
        throw new Error(`No timestamp found for label: ${r}`);
      return n;
    }
    elapsed(r) {
      const n = this.get(r);
      return n.elapsed || Date.now() - n.started;
    }
  }
  return Vn.Watch = t, Vn.default = t, Vn;
}
var ra = {}, Cs = {}, Mu;
function fy() {
  if (Mu)
    return Cs;
  Mu = 1, Object.defineProperty(Cs, "__esModule", { value: !0 }), Cs.IWatch = void 0;
  class t {
  }
  return Cs.IWatch = t, Cs;
}
var ju;
function hy() {
  return ju || (ju = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), kr.__exportStar(fy(), t);
  }(ra)), ra;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = kr;
  e.__exportStar(uy(), t), e.__exportStar(ly(), t), e.__exportStar(hy(), t), e.__exportStar(Yf(), t);
})(se);
var na = {}, Rs = {};
let cr = class {
};
const dy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: cr
}, Symbol.toStringTag, { value: "Module" })), py = /* @__PURE__ */ Co(dy);
var $u;
function gy() {
  if ($u)
    return Rs;
  $u = 1, Object.defineProperty(Rs, "__esModule", { value: !0 }), Rs.IHeartBeat = void 0;
  const t = py;
  class e extends t.IEvents {
    constructor(n) {
      super();
    }
  }
  return Rs.IHeartBeat = e, Rs;
}
var ku;
function Jf() {
  return ku || (ku = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), kr.__exportStar(gy(), t);
  }(na)), na;
}
var sa = {}, xn = {}, qu;
function yy() {
  if (qu)
    return xn;
  qu = 1, Object.defineProperty(xn, "__esModule", { value: !0 }), xn.HEARTBEAT_EVENTS = xn.HEARTBEAT_INTERVAL = void 0;
  const t = se;
  return xn.HEARTBEAT_INTERVAL = t.FIVE_SECONDS, xn.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, xn;
}
var zu;
function Xf() {
  return zu || (zu = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), kr.__exportStar(yy(), t);
  }(sa)), sa;
}
var Bu;
function my() {
  if (Bu)
    return Os;
  Bu = 1, Object.defineProperty(Os, "__esModule", { value: !0 }), Os.HeartBeat = void 0;
  const t = kr, e = mr, r = se, n = Jf(), s = Xf();
  class i extends n.IHeartBeat {
    constructor(o) {
      super(o), this.events = new e.EventEmitter(), this.interval = s.HEARTBEAT_INTERVAL, this.interval = (o == null ? void 0 : o.interval) || s.HEARTBEAT_INTERVAL;
    }
    static init(o) {
      return t.__awaiter(this, void 0, void 0, function* () {
        const u = new i(o);
        return yield u.init(), u;
      });
    }
    init() {
      return t.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(o, u) {
      this.events.on(o, u);
    }
    once(o, u) {
      this.events.once(o, u);
    }
    off(o, u) {
      this.events.off(o, u);
    }
    removeListener(o, u) {
      this.events.removeListener(o, u);
    }
    initialize() {
      return t.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(() => this.pulse(), r.toMiliseconds(this.interval));
      });
    }
    pulse() {
      this.events.emit(s.HEARTBEAT_EVENTS.pulse);
    }
  }
  return Os.HeartBeat = i, Os;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = kr;
  e.__exportStar(my(), t), e.__exportStar(Jf(), t), e.__exportStar(Xf(), t);
})(ys);
var Me = {}, ia, Vu;
function vy() {
  if (Vu)
    return ia;
  Vu = 1;
  function t(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  ia = e;
  function e(r, n, s) {
    var i = s && s.stringify || t, a = 1;
    if (typeof r == "object" && r !== null) {
      var o = n.length + a;
      if (o === 1)
        return r;
      var u = new Array(o);
      u[0] = i(r);
      for (var c = 1; c < o; c++)
        u[c] = i(n[c]);
      return u.join(" ");
    }
    if (typeof r != "string")
      return r;
    var f = n.length;
    if (f === 0)
      return r;
    for (var d = "", p = 1 - a, m = -1, v = r && r.length || 0, _ = 0; _ < v; ) {
      if (r.charCodeAt(_) === 37 && _ + 1 < v) {
        switch (m = m > -1 ? m : 0, r.charCodeAt(_ + 1)) {
          case 100:
          case 102:
            if (p >= f || n[p] == null)
              break;
            m < _ && (d += r.slice(m, _)), d += Number(n[p]), m = _ + 2, _++;
            break;
          case 105:
            if (p >= f || n[p] == null)
              break;
            m < _ && (d += r.slice(m, _)), d += Math.floor(Number(n[p])), m = _ + 2, _++;
            break;
          case 79:
          case 111:
          case 106:
            if (p >= f || n[p] === void 0)
              break;
            m < _ && (d += r.slice(m, _));
            var x = typeof n[p];
            if (x === "string") {
              d += "'" + n[p] + "'", m = _ + 2, _++;
              break;
            }
            if (x === "function") {
              d += n[p].name || "<anonymous>", m = _ + 2, _++;
              break;
            }
            d += i(n[p]), m = _ + 2, _++;
            break;
          case 115:
            if (p >= f)
              break;
            m < _ && (d += r.slice(m, _)), d += String(n[p]), m = _ + 2, _++;
            break;
          case 37:
            m < _ && (d += r.slice(m, _)), d += "%", m = _ + 2, _++, p--;
            break;
        }
        ++p;
      }
      ++_;
    }
    return m === -1 ? r : (m < v && (d += r.slice(m)), d);
  }
  return ia;
}
var oa, Ku;
function by() {
  if (Ku)
    return oa;
  Ku = 1;
  const t = vy();
  oa = s;
  const e = S().console || {}, r = {
    mapHttpRequest: v,
    mapHttpResponse: v,
    wrapRequestSerializer: _,
    wrapResponseSerializer: _,
    wrapErrorSerializer: _,
    req: v,
    res: v,
    err: p
  };
  function n(g, l) {
    return Array.isArray(g) ? g.filter(function(C) {
      return C !== "!stdSerializers.err";
    }) : g === !0 ? Object.keys(l) : !1;
  }
  function s(g) {
    g = g || {}, g.browser = g.browser || {};
    const l = g.browser.transmit;
    if (l && typeof l.send != "function")
      throw Error("pino: transmit option must have a send function");
    const y = g.browser.write || e;
    g.browser.write && (g.browser.asObject = !0);
    const C = g.serializers || {}, A = n(g.browser.serialize, C);
    let M = g.browser.serialize;
    Array.isArray(g.browser.serialize) && g.browser.serialize.indexOf("!stdSerializers.err") > -1 && (M = !1);
    const z = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof y == "function" && (y.error = y.fatal = y.warn = y.info = y.debug = y.trace = y), g.enabled === !1 && (g.level = "silent");
    const G = g.level || "info", R = Object.create(y);
    R.log || (R.log = x), Object.defineProperty(R, "levelVal", {
      get: Q
    }), Object.defineProperty(R, "level", {
      get: V,
      set: k
    });
    const L = {
      transmit: l,
      serialize: A,
      asObject: g.browser.asObject,
      levels: z,
      timestamp: m(g)
    };
    R.levels = s.levels, R.level = G, R.setMaxListeners = R.getMaxListeners = R.emit = R.addListener = R.on = R.prependListener = R.once = R.prependOnceListener = R.removeListener = R.removeAllListeners = R.listeners = R.listenerCount = R.eventNames = R.write = R.flush = x, R.serializers = C, R._serialize = A, R._stdErrSerialize = M, R.child = B, l && (R._logEvent = d());
    function Q() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function V() {
      return this._level;
    }
    function k($) {
      if ($ !== "silent" && !this.levels.values[$])
        throw Error("unknown level " + $);
      this._level = $, i(L, R, "error", "log"), i(L, R, "fatal", "error"), i(L, R, "warn", "error"), i(L, R, "info", "log"), i(L, R, "debug", "log"), i(L, R, "trace", "log");
    }
    function B($, K) {
      if (!$)
        throw new Error("missing bindings for child Pino");
      K = K || {}, A && $.serializers && (K.serializers = $.serializers);
      const fe = K.serializers;
      if (A && fe) {
        var H = Object.assign({}, C, fe), ae = g.browser.serialize === !0 ? Object.keys(H) : A;
        delete $.serializers, u([$], ae, H, this._stdErrSerialize);
      }
      function te(oe) {
        this._childLevel = (oe._childLevel | 0) + 1, this.error = c(oe, $, "error"), this.fatal = c(oe, $, "fatal"), this.warn = c(oe, $, "warn"), this.info = c(oe, $, "info"), this.debug = c(oe, $, "debug"), this.trace = c(oe, $, "trace"), H && (this.serializers = H, this._serialize = ae), l && (this._logEvent = d(
          [].concat(oe._logEvent.bindings, $)
        ));
      }
      return te.prototype = this, new te(this);
    }
    return R;
  }
  s.levels = {
    values: {
      fatal: 60,
      error: 50,
      warn: 40,
      info: 30,
      debug: 20,
      trace: 10
    },
    labels: {
      10: "trace",
      20: "debug",
      30: "info",
      40: "warn",
      50: "error",
      60: "fatal"
    }
  }, s.stdSerializers = r, s.stdTimeFunctions = Object.assign({}, { nullTime: T, epochTime: w, unixTime: D, isoTime: b });
  function i(g, l, y, C) {
    const A = Object.getPrototypeOf(l);
    l[y] = l.levelVal > l.levels.values[y] ? x : A[y] ? A[y] : e[y] || e[C] || x, a(g, l, y);
  }
  function a(g, l, y) {
    !g.transmit && l[y] === x || (l[y] = /* @__PURE__ */ function(C) {
      return function() {
        const M = g.timestamp(), z = new Array(arguments.length), G = Object.getPrototypeOf && Object.getPrototypeOf(this) === e ? e : this;
        for (var R = 0; R < z.length; R++)
          z[R] = arguments[R];
        if (g.serialize && !g.asObject && u(z, this._serialize, this.serializers, this._stdErrSerialize), g.asObject ? C.call(G, o(this, y, z, M)) : C.apply(G, z), g.transmit) {
          const L = g.transmit.level || l.level, Q = s.levels.values[L], V = s.levels.values[y];
          if (V < Q)
            return;
          f(this, {
            ts: M,
            methodLevel: y,
            methodValue: V,
            transmitLevel: L,
            transmitValue: s.levels.values[g.transmit.level || l.level],
            send: g.transmit.send,
            val: l.levelVal
          }, z);
        }
      };
    }(l[y]));
  }
  function o(g, l, y, C) {
    g._serialize && u(y, g._serialize, g.serializers, g._stdErrSerialize);
    const A = y.slice();
    let M = A[0];
    const z = {};
    C && (z.time = C), z.level = s.levels.values[l];
    let G = (g._childLevel | 0) + 1;
    if (G < 1 && (G = 1), M !== null && typeof M == "object") {
      for (; G-- && typeof A[0] == "object"; )
        Object.assign(z, A.shift());
      M = A.length ? t(A.shift(), A) : void 0;
    } else
      typeof M == "string" && (M = t(A.shift(), A));
    return M !== void 0 && (z.msg = M), z;
  }
  function u(g, l, y, C) {
    for (const A in g)
      if (C && g[A] instanceof Error)
        g[A] = s.stdSerializers.err(g[A]);
      else if (typeof g[A] == "object" && !Array.isArray(g[A]))
        for (const M in g[A])
          l && l.indexOf(M) > -1 && M in y && (g[A][M] = y[M](g[A][M]));
  }
  function c(g, l, y) {
    return function() {
      const C = new Array(1 + arguments.length);
      C[0] = l;
      for (var A = 1; A < C.length; A++)
        C[A] = arguments[A - 1];
      return g[y].apply(this, C);
    };
  }
  function f(g, l, y) {
    const C = l.send, A = l.ts, M = l.methodLevel, z = l.methodValue, G = l.val, R = g._logEvent.bindings;
    u(
      y,
      g._serialize || Object.keys(g.serializers),
      g.serializers,
      g._stdErrSerialize === void 0 ? !0 : g._stdErrSerialize
    ), g._logEvent.ts = A, g._logEvent.messages = y.filter(function(L) {
      return R.indexOf(L) === -1;
    }), g._logEvent.level.label = M, g._logEvent.level.value = z, C(M, g._logEvent, G), g._logEvent = d(R);
  }
  function d(g) {
    return {
      ts: 0,
      messages: [],
      bindings: g || [],
      level: { label: "", value: 0 }
    };
  }
  function p(g) {
    const l = {
      type: g.constructor.name,
      msg: g.message,
      stack: g.stack
    };
    for (const y in g)
      l[y] === void 0 && (l[y] = g[y]);
    return l;
  }
  function m(g) {
    return typeof g.timestamp == "function" ? g.timestamp : g.timestamp === !1 ? T : w;
  }
  function v() {
    return {};
  }
  function _(g) {
    return g;
  }
  function x() {
  }
  function T() {
    return !1;
  }
  function w() {
    return Date.now();
  }
  function D() {
    return Math.round(Date.now() / 1e3);
  }
  function b() {
    return new Date(Date.now()).toISOString();
  }
  function S() {
    function g(l) {
      return typeof l < "u" && l;
    }
    try {
      return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
        get: function() {
          return delete Object.prototype.globalThis, this.globalThis = this;
        },
        configurable: !0
      }), globalThis;
    } catch {
      return g(self) || g(window) || g(this) || {};
    }
  }
  return oa;
}
var Dn = {}, Hu;
function eh() {
  return Hu || (Hu = 1, Object.defineProperty(Dn, "__esModule", { value: !0 }), Dn.PINO_CUSTOM_CONTEXT_KEY = Dn.PINO_LOGGER_DEFAULTS = void 0, Dn.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, Dn.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), Dn;
}
var Bt = {}, Wu;
function wy() {
  if (Wu)
    return Bt;
  Wu = 1, Object.defineProperty(Bt, "__esModule", { value: !0 }), Bt.generateChildLogger = Bt.formatChildLoggerContext = Bt.getLoggerContext = Bt.setBrowserLoggerContext = Bt.getBrowserLoggerContext = Bt.getDefaultLoggerOptions = void 0;
  const t = eh();
  function e(o) {
    return Object.assign(Object.assign({}, o), { level: (o == null ? void 0 : o.level) || t.PINO_LOGGER_DEFAULTS.level });
  }
  Bt.getDefaultLoggerOptions = e;
  function r(o, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[u] || "";
  }
  Bt.getBrowserLoggerContext = r;
  function n(o, u, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    return o[c] = u, o;
  }
  Bt.setBrowserLoggerContext = n;
  function s(o, u = t.PINO_CUSTOM_CONTEXT_KEY) {
    let c = "";
    return typeof o.bindings > "u" ? c = r(o, u) : c = o.bindings().context || "", c;
  }
  Bt.getLoggerContext = s;
  function i(o, u, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    const f = s(o, c);
    return f.trim() ? `${f}/${u}` : u;
  }
  Bt.formatChildLoggerContext = i;
  function a(o, u, c = t.PINO_CUSTOM_CONTEXT_KEY) {
    const f = i(o, u, c), d = o.child({ context: f });
    return n(d, f, c);
  }
  return Bt.generateChildLogger = a, Bt;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.pino = void 0;
  const e = kr, r = e.__importDefault(by());
  Object.defineProperty(t, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), e.__exportStar(eh(), t), e.__exportStar(wy(), t);
})(Me);
let _y = class extends cr {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, Ey = class extends cr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, Sy = class {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}, xy = class extends cr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, Dy = class extends cr {
  constructor(e) {
    super();
  }
}, Oy = class {
  constructor(e, r, n, s) {
    this.core = e, this.logger = r, this.name = n;
  }
}, Iy = class extends cr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}, Cy = class extends cr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}, Ry = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, Ty = class {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}, Ay = class {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}, Py = class {
  constructor(e) {
    this.client = e;
  }
};
var Dc = {}, ms = {}, Ao = {}, Po = {};
Object.defineProperty(Po, "__esModule", { value: !0 });
Po.BrowserRandomSource = void 0;
const Gu = 65536;
class Ny {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(e);
    for (let n = 0; n < r.length; n += Gu)
      this._crypto.getRandomValues(r.subarray(n, n + Math.min(r.length - n, Gu)));
    return r;
  }
}
Po.BrowserRandomSource = Ny;
function Ly(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var No = {}, ur = {};
Object.defineProperty(ur, "__esModule", { value: !0 });
function Fy(t) {
  for (var e = 0; e < t.length; e++)
    t[e] = 0;
  return t;
}
ur.wipe = Fy;
const Uy = {}, My = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Uy
}, Symbol.toStringTag, { value: "Module" })), jy = /* @__PURE__ */ Co(My);
Object.defineProperty(No, "__esModule", { value: !0 });
No.NodeRandomSource = void 0;
const $y = ur;
class ky {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof Ly < "u") {
      const e = jy;
      e && e.randomBytes && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
    }
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Node.js random byte generator is not available.");
    let r = this._crypto.randomBytes(e);
    if (r.length !== e)
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    const n = new Uint8Array(e);
    for (let s = 0; s < n.length; s++)
      n[s] = r[s];
    return (0, $y.wipe)(r), n;
  }
}
No.NodeRandomSource = ky;
Object.defineProperty(Ao, "__esModule", { value: !0 });
Ao.SystemRandomSource = void 0;
const qy = Po, zy = No;
class By {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new qy.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new zy.NodeRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Node";
      return;
    }
  }
  randomBytes(e) {
    if (!this.isAvailable)
      throw new Error("System random byte generator is not available.");
    return this._source.randomBytes(e);
  }
}
Ao.SystemRandomSource = By;
var me = {}, th = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  function e(o, u) {
    var c = o >>> 16 & 65535, f = o & 65535, d = u >>> 16 & 65535, p = u & 65535;
    return f * p + (c * p + f * d << 16 >>> 0) | 0;
  }
  t.mul = Math.imul || e;
  function r(o, u) {
    return o + u | 0;
  }
  t.add = r;
  function n(o, u) {
    return o - u | 0;
  }
  t.sub = n;
  function s(o, u) {
    return o << u | o >>> 32 - u;
  }
  t.rotl = s;
  function i(o, u) {
    return o << 32 - u | o >>> u;
  }
  t.rotr = i;
  function a(o) {
    return typeof o == "number" && isFinite(o) && Math.floor(o) === o;
  }
  t.isInteger = Number.isInteger || a, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(o) {
    return t.isInteger(o) && o >= -t.MAX_SAFE_INTEGER && o <= t.MAX_SAFE_INTEGER;
  };
})(th);
Object.defineProperty(me, "__esModule", { value: !0 });
var rh = th;
function Vy(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
}
me.readInt16BE = Vy;
function Ky(t, e) {
  return e === void 0 && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
}
me.readUint16BE = Ky;
function Hy(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
}
me.readInt16LE = Hy;
function Wy(t, e) {
  return e === void 0 && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
}
me.readUint16LE = Wy;
function nh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
}
me.writeUint16BE = nh;
me.writeInt16BE = nh;
function sh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(2)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
}
me.writeUint16LE = sh;
me.writeInt16LE = sh;
function Pa(t, e) {
  return e === void 0 && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
}
me.readInt32BE = Pa;
function Na(t, e) {
  return e === void 0 && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
}
me.readUint32BE = Na;
function La(t, e) {
  return e === void 0 && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
}
me.readInt32LE = La;
function Fa(t, e) {
  return e === void 0 && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
}
me.readUint32LE = Fa;
function no(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, e[r + 3] = t >>> 0, e;
}
me.writeUint32BE = no;
me.writeInt32BE = no;
function so(t, e, r) {
  return e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, e[r + 3] = t >>> 24, e;
}
me.writeUint32LE = so;
me.writeInt32LE = so;
function Gy(t, e) {
  e === void 0 && (e = 0);
  var r = Pa(t, e), n = Pa(t, e + 4);
  return r * 4294967296 + n - (n >> 31) * 4294967296;
}
me.readInt64BE = Gy;
function Qy(t, e) {
  e === void 0 && (e = 0);
  var r = Na(t, e), n = Na(t, e + 4);
  return r * 4294967296 + n;
}
me.readUint64BE = Qy;
function Zy(t, e) {
  e === void 0 && (e = 0);
  var r = La(t, e), n = La(t, e + 4);
  return n * 4294967296 + r - (r >> 31) * 4294967296;
}
me.readInt64LE = Zy;
function Yy(t, e) {
  e === void 0 && (e = 0);
  var r = Fa(t, e), n = Fa(t, e + 4);
  return n * 4294967296 + r;
}
me.readUint64LE = Yy;
function ih(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), no(t / 4294967296 >>> 0, e, r), no(t >>> 0, e, r + 4), e;
}
me.writeUint64BE = ih;
me.writeInt64BE = ih;
function oh(t, e, r) {
  return e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0), so(t >>> 0, e, r), so(t / 4294967296 >>> 0, e, r + 4), e;
}
me.writeUint64LE = oh;
me.writeInt64LE = oh;
function Jy(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var n = 0, s = 1, i = t / 8 + r - 1; i >= r; i--)
    n += e[i] * s, s *= 256;
  return n;
}
me.readUintBE = Jy;
function Xy(t, e, r) {
  if (r === void 0 && (r = 0), t % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (t / 8 > e.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var n = 0, s = 1, i = r; i < r + t / 8; i++)
    n += e[i] * s, s *= 256;
  return n;
}
me.readUintLE = Xy;
function em(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!rh.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var s = 1, i = t / 8 + n - 1; i >= n; i--)
    r[i] = e / s & 255, s *= 256;
  return r;
}
me.writeUintBE = em;
function tm(t, e, r, n) {
  if (r === void 0 && (r = new Uint8Array(t / 8)), n === void 0 && (n = 0), t % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!rh.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var s = 1, i = n; i < n + t / 8; i++)
    r[i] = e / s & 255, s *= 256;
  return r;
}
me.writeUintLE = tm;
function rm(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e);
}
me.readFloat32BE = rm;
function nm(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat32(e, !0);
}
me.readFloat32LE = nm;
function sm(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e);
}
me.readFloat64BE = sm;
function im(t, e) {
  e === void 0 && (e = 0);
  var r = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return r.getFloat64(e, !0);
}
me.readFloat64LE = im;
function om(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t), e;
}
me.writeFloat32BE = om;
function am(t, e, r) {
  e === void 0 && (e = new Uint8Array(4)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat32(r, t, !0), e;
}
me.writeFloat32LE = am;
function cm(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t), e;
}
me.writeFloat64BE = cm;
function um(t, e, r) {
  e === void 0 && (e = new Uint8Array(8)), r === void 0 && (r = 0);
  var n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return n.setFloat64(r, t, !0), e;
}
me.writeFloat64LE = um;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
  const e = Ao, r = me, n = ur;
  t.defaultRandomSource = new e.SystemRandomSource();
  function s(c, f = t.defaultRandomSource) {
    return f.randomBytes(c);
  }
  t.randomBytes = s;
  function i(c = t.defaultRandomSource) {
    const f = s(4, c), d = (0, r.readUint32LE)(f);
    return (0, n.wipe)(f), d;
  }
  t.randomUint32 = i;
  const a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function o(c, f = a, d = t.defaultRandomSource) {
    if (f.length < 2)
      throw new Error("randomString charset is too short");
    if (f.length > 256)
      throw new Error("randomString charset is too long");
    let p = "";
    const m = f.length, v = 256 - 256 % m;
    for (; c > 0; ) {
      const _ = s(Math.ceil(c * 256 / v), d);
      for (let x = 0; x < _.length && c > 0; x++) {
        const T = _[x];
        T < v && (p += f.charAt(T % m), c--);
      }
      (0, n.wipe)(_);
    }
    return p;
  }
  t.randomString = o;
  function u(c, f = a, d = t.defaultRandomSource) {
    const p = Math.ceil(c / (Math.log(f.length) / Math.LN2));
    return o(p, f, d);
  }
  t.randomStringForEntropy = u;
})(ms);
var ah = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = me, r = ur;
  t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
  var n = (
    /** @class */
    function() {
      function o() {
        this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return o.prototype._initState = function() {
        this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209;
      }, o.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, o.prototype.clean = function() {
        r.wipe(this._buffer), r.wipe(this._tempHi), r.wipe(this._tempLo), this.reset();
      }, o.prototype.update = function(u, c) {
        if (c === void 0 && (c = u.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var f = 0;
        if (this._bytesHashed += c, this._bufferLength > 0) {
          for (; this._bufferLength < t.BLOCK_SIZE && c > 0; )
            this._buffer[this._bufferLength++] = u[f++], c--;
          this._bufferLength === this.blockSize && (i(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (c >= this.blockSize && (f = i(this._tempHi, this._tempLo, this._stateHi, this._stateLo, u, f, c), c %= this.blockSize); c > 0; )
          this._buffer[this._bufferLength++] = u[f++], c--;
        return this;
      }, o.prototype.finish = function(u) {
        if (!this._finished) {
          var c = this._bytesHashed, f = this._bufferLength, d = c / 536870912 | 0, p = c << 3, m = c % 128 < 112 ? 128 : 256;
          this._buffer[f] = 128;
          for (var v = f + 1; v < m - 8; v++)
            this._buffer[v] = 0;
          e.writeUint32BE(d, this._buffer, m - 8), e.writeUint32BE(p, this._buffer, m - 4), i(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, m), this._finished = !0;
        }
        for (var v = 0; v < this.digestLength / 8; v++)
          e.writeUint32BE(this._stateHi[v], u, v * 8), e.writeUint32BE(this._stateLo[v], u, v * 8 + 4);
        return this;
      }, o.prototype.digest = function() {
        var u = new Uint8Array(this.digestLength);
        return this.finish(u), u;
      }, o.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, o.prototype.restoreState = function(u) {
        return this._stateHi.set(u.stateHi), this._stateLo.set(u.stateLo), this._bufferLength = u.bufferLength, u.buffer && this._buffer.set(u.buffer), this._bytesHashed = u.bytesHashed, this._finished = !1, this;
      }, o.prototype.cleanSavedState = function(u) {
        r.wipe(u.stateHi), r.wipe(u.stateLo), u.buffer && r.wipe(u.buffer), u.bufferLength = 0, u.bytesHashed = 0;
      }, o;
    }()
  );
  t.SHA512 = n;
  var s = new Int32Array([
    1116352408,
    3609767458,
    1899447441,
    602891725,
    3049323471,
    3964484399,
    3921009573,
    2173295548,
    961987163,
    4081628472,
    1508970993,
    3053834265,
    2453635748,
    2937671579,
    2870763221,
    3664609560,
    3624381080,
    2734883394,
    310598401,
    1164996542,
    607225278,
    1323610764,
    1426881987,
    3590304994,
    1925078388,
    4068182383,
    2162078206,
    991336113,
    2614888103,
    633803317,
    3248222580,
    3479774868,
    3835390401,
    2666613458,
    4022224774,
    944711139,
    264347078,
    2341262773,
    604807628,
    2007800933,
    770255983,
    1495990901,
    1249150122,
    1856431235,
    1555081692,
    3175218132,
    1996064986,
    2198950837,
    2554220882,
    3999719339,
    2821834349,
    766784016,
    2952996808,
    2566594879,
    3210313671,
    3203337956,
    3336571891,
    1034457026,
    3584528711,
    2466948901,
    113926993,
    3758326383,
    338241895,
    168717936,
    666307205,
    1188179964,
    773529912,
    1546045734,
    1294757372,
    1522805485,
    1396182291,
    2643833823,
    1695183700,
    2343527390,
    1986661051,
    1014477480,
    2177026350,
    1206759142,
    2456956037,
    344077627,
    2730485921,
    1290863460,
    2820302411,
    3158454273,
    3259730800,
    3505952657,
    3345764771,
    106217008,
    3516065817,
    3606008344,
    3600352804,
    1432725776,
    4094571909,
    1467031594,
    275423344,
    851169720,
    430227734,
    3100823752,
    506948616,
    1363258195,
    659060556,
    3750685593,
    883997877,
    3785050280,
    958139571,
    3318307427,
    1322822218,
    3812723403,
    1537002063,
    2003034995,
    1747873779,
    3602036899,
    1955562222,
    1575990012,
    2024104815,
    1125592928,
    2227730452,
    2716904306,
    2361852424,
    442776044,
    2428436474,
    593698344,
    2756734187,
    3733110249,
    3204031479,
    2999351573,
    3329325298,
    3815920427,
    3391569614,
    3928383900,
    3515267271,
    566280711,
    3940187606,
    3454069534,
    4118630271,
    4000239992,
    116418474,
    1914138554,
    174292421,
    2731055270,
    289380356,
    3203993006,
    460393269,
    320620315,
    685471733,
    587496836,
    852142971,
    1086792851,
    1017036298,
    365543100,
    1126000580,
    2618297676,
    1288033470,
    3409855158,
    1501505948,
    4234509866,
    1607167915,
    987167468,
    1816402316,
    1246189591
  ]);
  function i(o, u, c, f, d, p, m) {
    for (var v = c[0], _ = c[1], x = c[2], T = c[3], w = c[4], D = c[5], b = c[6], S = c[7], g = f[0], l = f[1], y = f[2], C = f[3], A = f[4], M = f[5], z = f[6], G = f[7], R, L, Q, V, k, B, $, K; m >= 128; ) {
      for (var fe = 0; fe < 16; fe++) {
        var H = 8 * fe + p;
        o[fe] = e.readUint32BE(d, H), u[fe] = e.readUint32BE(d, H + 4);
      }
      for (var fe = 0; fe < 80; fe++) {
        var ae = v, te = _, oe = x, U = T, F = w, P = D, h = b, I = S, Z = g, X = l, Oe = y, Ie = C, we = A, Fe = M, Je = z, He = G;
        if (R = S, L = G, k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = (w >>> 14 | A << 18) ^ (w >>> 18 | A << 14) ^ (A >>> 9 | w << 23), L = (A >>> 14 | w << 18) ^ (A >>> 18 | w << 14) ^ (w >>> 9 | A << 23), k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, R = w & D ^ ~w & b, L = A & M ^ ~A & z, k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, R = s[fe * 2], L = s[fe * 2 + 1], k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, R = o[fe % 16], L = u[fe % 16], k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, Q = $ & 65535 | K << 16, V = k & 65535 | B << 16, R = Q, L = V, k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = (v >>> 28 | g << 4) ^ (g >>> 2 | v << 30) ^ (g >>> 7 | v << 25), L = (g >>> 28 | v << 4) ^ (v >>> 2 | g << 30) ^ (v >>> 7 | g << 25), k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, R = v & _ ^ v & x ^ _ & x, L = g & l ^ g & y ^ l & y, k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, I = $ & 65535 | K << 16, He = k & 65535 | B << 16, R = U, L = Ie, k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = Q, L = V, k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, U = $ & 65535 | K << 16, Ie = k & 65535 | B << 16, _ = ae, x = te, T = oe, w = U, D = F, b = P, S = h, v = I, l = Z, y = X, C = Oe, A = Ie, M = we, z = Fe, G = Je, g = He, fe % 16 === 15)
          for (var H = 0; H < 16; H++)
            R = o[H], L = u[H], k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = o[(H + 9) % 16], L = u[(H + 9) % 16], k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, Q = o[(H + 1) % 16], V = u[(H + 1) % 16], R = (Q >>> 1 | V << 31) ^ (Q >>> 8 | V << 24) ^ Q >>> 7, L = (V >>> 1 | Q << 31) ^ (V >>> 8 | Q << 24) ^ (V >>> 7 | Q << 25), k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, Q = o[(H + 14) % 16], V = u[(H + 14) % 16], R = (Q >>> 19 | V << 13) ^ (V >>> 29 | Q << 3) ^ Q >>> 6, L = (V >>> 19 | Q << 13) ^ (Q >>> 29 | V << 3) ^ (V >>> 6 | Q << 26), k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, o[H] = $ & 65535 | K << 16, u[H] = k & 65535 | B << 16;
      }
      R = v, L = g, k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[0], L = f[0], k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, c[0] = v = $ & 65535 | K << 16, f[0] = g = k & 65535 | B << 16, R = _, L = l, k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[1], L = f[1], k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, c[1] = _ = $ & 65535 | K << 16, f[1] = l = k & 65535 | B << 16, R = x, L = y, k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[2], L = f[2], k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, c[2] = x = $ & 65535 | K << 16, f[2] = y = k & 65535 | B << 16, R = T, L = C, k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[3], L = f[3], k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, c[3] = T = $ & 65535 | K << 16, f[3] = C = k & 65535 | B << 16, R = w, L = A, k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[4], L = f[4], k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, c[4] = w = $ & 65535 | K << 16, f[4] = A = k & 65535 | B << 16, R = D, L = M, k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[5], L = f[5], k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, c[5] = D = $ & 65535 | K << 16, f[5] = M = k & 65535 | B << 16, R = b, L = z, k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[6], L = f[6], k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, c[6] = b = $ & 65535 | K << 16, f[6] = z = k & 65535 | B << 16, R = S, L = G, k = L & 65535, B = L >>> 16, $ = R & 65535, K = R >>> 16, R = c[7], L = f[7], k += L & 65535, B += L >>> 16, $ += R & 65535, K += R >>> 16, B += k >>> 16, $ += B >>> 16, K += $ >>> 16, c[7] = S = $ & 65535 | K << 16, f[7] = G = k & 65535 | B << 16, p += 128, m -= 128;
    }
    return p;
  }
  function a(o) {
    var u = new n();
    u.update(o);
    var c = u.digest();
    return u.clean(), c;
  }
  t.hash = a;
})(ah);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.convertSecretKeyToX25519 = t.convertPublicKeyToX25519 = t.verify = t.sign = t.extractPublicKeyFromSecretKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.SEED_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = t.SIGNATURE_LENGTH = void 0;
  const e = ms, r = ah, n = ur;
  t.SIGNATURE_LENGTH = 64, t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 64, t.SEED_LENGTH = 32;
  function s(U) {
    const F = new Float64Array(16);
    if (U)
      for (let P = 0; P < U.length; P++)
        F[P] = U[P];
    return F;
  }
  const i = new Uint8Array(32);
  i[0] = 9;
  const a = s(), o = s([1]), u = s([
    30883,
    4953,
    19914,
    30187,
    55467,
    16705,
    2637,
    112,
    59544,
    30585,
    16505,
    36039,
    65139,
    11119,
    27886,
    20995
  ]), c = s([
    61785,
    9906,
    39828,
    60374,
    45398,
    33411,
    5274,
    224,
    53552,
    61171,
    33010,
    6542,
    64743,
    22239,
    55772,
    9222
  ]), f = s([
    54554,
    36645,
    11616,
    51542,
    42930,
    38181,
    51040,
    26924,
    56412,
    64982,
    57905,
    49316,
    21502,
    52590,
    14035,
    8553
  ]), d = s([
    26200,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214
  ]), p = s([
    41136,
    18958,
    6951,
    50414,
    58488,
    44335,
    6150,
    12099,
    55207,
    15867,
    153,
    11085,
    57099,
    20417,
    9344,
    11139
  ]);
  function m(U, F) {
    for (let P = 0; P < 16; P++)
      U[P] = F[P] | 0;
  }
  function v(U) {
    let F = 1;
    for (let P = 0; P < 16; P++) {
      let h = U[P] + F + 65535;
      F = Math.floor(h / 65536), U[P] = h - F * 65536;
    }
    U[0] += F - 1 + 37 * (F - 1);
  }
  function _(U, F, P) {
    const h = ~(P - 1);
    for (let I = 0; I < 16; I++) {
      const Z = h & (U[I] ^ F[I]);
      U[I] ^= Z, F[I] ^= Z;
    }
  }
  function x(U, F) {
    const P = s(), h = s();
    for (let I = 0; I < 16; I++)
      h[I] = F[I];
    v(h), v(h), v(h);
    for (let I = 0; I < 2; I++) {
      P[0] = h[0] - 65517;
      for (let X = 1; X < 15; X++)
        P[X] = h[X] - 65535 - (P[X - 1] >> 16 & 1), P[X - 1] &= 65535;
      P[15] = h[15] - 32767 - (P[14] >> 16 & 1);
      const Z = P[15] >> 16 & 1;
      P[14] &= 65535, _(h, P, 1 - Z);
    }
    for (let I = 0; I < 16; I++)
      U[2 * I] = h[I] & 255, U[2 * I + 1] = h[I] >> 8;
  }
  function T(U, F) {
    let P = 0;
    for (let h = 0; h < 32; h++)
      P |= U[h] ^ F[h];
    return (1 & P - 1 >>> 8) - 1;
  }
  function w(U, F) {
    const P = new Uint8Array(32), h = new Uint8Array(32);
    return x(P, U), x(h, F), T(P, h);
  }
  function D(U) {
    const F = new Uint8Array(32);
    return x(F, U), F[0] & 1;
  }
  function b(U, F) {
    for (let P = 0; P < 16; P++)
      U[P] = F[2 * P] + (F[2 * P + 1] << 8);
    U[15] &= 32767;
  }
  function S(U, F, P) {
    for (let h = 0; h < 16; h++)
      U[h] = F[h] + P[h];
  }
  function g(U, F, P) {
    for (let h = 0; h < 16; h++)
      U[h] = F[h] - P[h];
  }
  function l(U, F, P) {
    let h, I, Z = 0, X = 0, Oe = 0, Ie = 0, we = 0, Fe = 0, Je = 0, He = 0, Ne = 0, Te = 0, _e = 0, Se = 0, Ee = 0, ge = 0, pe = 0, ce = 0, xe = 0, Ce = 0, he = 0, Ae = 0, Ue = 0, ke = 0, qe = 0, je = 0, nr = 0, lr = 0, Rr = 0, Ct = 0, Tr = 0, fr = 0, Xr = 0, Xe = P[0], Qe = P[1], ot = P[2], rt = P[3], at = P[4], Ze = P[5], ft = P[6], yt = P[7], mt = P[8], ht = P[9], vt = P[10], dt = P[11], ct = P[12], We = P[13], O = P[14], j = P[15];
    h = F[0], Z += h * Xe, X += h * Qe, Oe += h * ot, Ie += h * rt, we += h * at, Fe += h * Ze, Je += h * ft, He += h * yt, Ne += h * mt, Te += h * ht, _e += h * vt, Se += h * dt, Ee += h * ct, ge += h * We, pe += h * O, ce += h * j, h = F[1], X += h * Xe, Oe += h * Qe, Ie += h * ot, we += h * rt, Fe += h * at, Je += h * Ze, He += h * ft, Ne += h * yt, Te += h * mt, _e += h * ht, Se += h * vt, Ee += h * dt, ge += h * ct, pe += h * We, ce += h * O, xe += h * j, h = F[2], Oe += h * Xe, Ie += h * Qe, we += h * ot, Fe += h * rt, Je += h * at, He += h * Ze, Ne += h * ft, Te += h * yt, _e += h * mt, Se += h * ht, Ee += h * vt, ge += h * dt, pe += h * ct, ce += h * We, xe += h * O, Ce += h * j, h = F[3], Ie += h * Xe, we += h * Qe, Fe += h * ot, Je += h * rt, He += h * at, Ne += h * Ze, Te += h * ft, _e += h * yt, Se += h * mt, Ee += h * ht, ge += h * vt, pe += h * dt, ce += h * ct, xe += h * We, Ce += h * O, he += h * j, h = F[4], we += h * Xe, Fe += h * Qe, Je += h * ot, He += h * rt, Ne += h * at, Te += h * Ze, _e += h * ft, Se += h * yt, Ee += h * mt, ge += h * ht, pe += h * vt, ce += h * dt, xe += h * ct, Ce += h * We, he += h * O, Ae += h * j, h = F[5], Fe += h * Xe, Je += h * Qe, He += h * ot, Ne += h * rt, Te += h * at, _e += h * Ze, Se += h * ft, Ee += h * yt, ge += h * mt, pe += h * ht, ce += h * vt, xe += h * dt, Ce += h * ct, he += h * We, Ae += h * O, Ue += h * j, h = F[6], Je += h * Xe, He += h * Qe, Ne += h * ot, Te += h * rt, _e += h * at, Se += h * Ze, Ee += h * ft, ge += h * yt, pe += h * mt, ce += h * ht, xe += h * vt, Ce += h * dt, he += h * ct, Ae += h * We, Ue += h * O, ke += h * j, h = F[7], He += h * Xe, Ne += h * Qe, Te += h * ot, _e += h * rt, Se += h * at, Ee += h * Ze, ge += h * ft, pe += h * yt, ce += h * mt, xe += h * ht, Ce += h * vt, he += h * dt, Ae += h * ct, Ue += h * We, ke += h * O, qe += h * j, h = F[8], Ne += h * Xe, Te += h * Qe, _e += h * ot, Se += h * rt, Ee += h * at, ge += h * Ze, pe += h * ft, ce += h * yt, xe += h * mt, Ce += h * ht, he += h * vt, Ae += h * dt, Ue += h * ct, ke += h * We, qe += h * O, je += h * j, h = F[9], Te += h * Xe, _e += h * Qe, Se += h * ot, Ee += h * rt, ge += h * at, pe += h * Ze, ce += h * ft, xe += h * yt, Ce += h * mt, he += h * ht, Ae += h * vt, Ue += h * dt, ke += h * ct, qe += h * We, je += h * O, nr += h * j, h = F[10], _e += h * Xe, Se += h * Qe, Ee += h * ot, ge += h * rt, pe += h * at, ce += h * Ze, xe += h * ft, Ce += h * yt, he += h * mt, Ae += h * ht, Ue += h * vt, ke += h * dt, qe += h * ct, je += h * We, nr += h * O, lr += h * j, h = F[11], Se += h * Xe, Ee += h * Qe, ge += h * ot, pe += h * rt, ce += h * at, xe += h * Ze, Ce += h * ft, he += h * yt, Ae += h * mt, Ue += h * ht, ke += h * vt, qe += h * dt, je += h * ct, nr += h * We, lr += h * O, Rr += h * j, h = F[12], Ee += h * Xe, ge += h * Qe, pe += h * ot, ce += h * rt, xe += h * at, Ce += h * Ze, he += h * ft, Ae += h * yt, Ue += h * mt, ke += h * ht, qe += h * vt, je += h * dt, nr += h * ct, lr += h * We, Rr += h * O, Ct += h * j, h = F[13], ge += h * Xe, pe += h * Qe, ce += h * ot, xe += h * rt, Ce += h * at, he += h * Ze, Ae += h * ft, Ue += h * yt, ke += h * mt, qe += h * ht, je += h * vt, nr += h * dt, lr += h * ct, Rr += h * We, Ct += h * O, Tr += h * j, h = F[14], pe += h * Xe, ce += h * Qe, xe += h * ot, Ce += h * rt, he += h * at, Ae += h * Ze, Ue += h * ft, ke += h * yt, qe += h * mt, je += h * ht, nr += h * vt, lr += h * dt, Rr += h * ct, Ct += h * We, Tr += h * O, fr += h * j, h = F[15], ce += h * Xe, xe += h * Qe, Ce += h * ot, he += h * rt, Ae += h * at, Ue += h * Ze, ke += h * ft, qe += h * yt, je += h * mt, nr += h * ht, lr += h * vt, Rr += h * dt, Ct += h * ct, Tr += h * We, fr += h * O, Xr += h * j, Z += 38 * xe, X += 38 * Ce, Oe += 38 * he, Ie += 38 * Ae, we += 38 * Ue, Fe += 38 * ke, Je += 38 * qe, He += 38 * je, Ne += 38 * nr, Te += 38 * lr, _e += 38 * Rr, Se += 38 * Ct, Ee += 38 * Tr, ge += 38 * fr, pe += 38 * Xr, I = 1, h = Z + I + 65535, I = Math.floor(h / 65536), Z = h - I * 65536, h = X + I + 65535, I = Math.floor(h / 65536), X = h - I * 65536, h = Oe + I + 65535, I = Math.floor(h / 65536), Oe = h - I * 65536, h = Ie + I + 65535, I = Math.floor(h / 65536), Ie = h - I * 65536, h = we + I + 65535, I = Math.floor(h / 65536), we = h - I * 65536, h = Fe + I + 65535, I = Math.floor(h / 65536), Fe = h - I * 65536, h = Je + I + 65535, I = Math.floor(h / 65536), Je = h - I * 65536, h = He + I + 65535, I = Math.floor(h / 65536), He = h - I * 65536, h = Ne + I + 65535, I = Math.floor(h / 65536), Ne = h - I * 65536, h = Te + I + 65535, I = Math.floor(h / 65536), Te = h - I * 65536, h = _e + I + 65535, I = Math.floor(h / 65536), _e = h - I * 65536, h = Se + I + 65535, I = Math.floor(h / 65536), Se = h - I * 65536, h = Ee + I + 65535, I = Math.floor(h / 65536), Ee = h - I * 65536, h = ge + I + 65535, I = Math.floor(h / 65536), ge = h - I * 65536, h = pe + I + 65535, I = Math.floor(h / 65536), pe = h - I * 65536, h = ce + I + 65535, I = Math.floor(h / 65536), ce = h - I * 65536, Z += I - 1 + 37 * (I - 1), I = 1, h = Z + I + 65535, I = Math.floor(h / 65536), Z = h - I * 65536, h = X + I + 65535, I = Math.floor(h / 65536), X = h - I * 65536, h = Oe + I + 65535, I = Math.floor(h / 65536), Oe = h - I * 65536, h = Ie + I + 65535, I = Math.floor(h / 65536), Ie = h - I * 65536, h = we + I + 65535, I = Math.floor(h / 65536), we = h - I * 65536, h = Fe + I + 65535, I = Math.floor(h / 65536), Fe = h - I * 65536, h = Je + I + 65535, I = Math.floor(h / 65536), Je = h - I * 65536, h = He + I + 65535, I = Math.floor(h / 65536), He = h - I * 65536, h = Ne + I + 65535, I = Math.floor(h / 65536), Ne = h - I * 65536, h = Te + I + 65535, I = Math.floor(h / 65536), Te = h - I * 65536, h = _e + I + 65535, I = Math.floor(h / 65536), _e = h - I * 65536, h = Se + I + 65535, I = Math.floor(h / 65536), Se = h - I * 65536, h = Ee + I + 65535, I = Math.floor(h / 65536), Ee = h - I * 65536, h = ge + I + 65535, I = Math.floor(h / 65536), ge = h - I * 65536, h = pe + I + 65535, I = Math.floor(h / 65536), pe = h - I * 65536, h = ce + I + 65535, I = Math.floor(h / 65536), ce = h - I * 65536, Z += I - 1 + 37 * (I - 1), U[0] = Z, U[1] = X, U[2] = Oe, U[3] = Ie, U[4] = we, U[5] = Fe, U[6] = Je, U[7] = He, U[8] = Ne, U[9] = Te, U[10] = _e, U[11] = Se, U[12] = Ee, U[13] = ge, U[14] = pe, U[15] = ce;
  }
  function y(U, F) {
    l(U, F, F);
  }
  function C(U, F) {
    const P = s();
    let h;
    for (h = 0; h < 16; h++)
      P[h] = F[h];
    for (h = 253; h >= 0; h--)
      y(P, P), h !== 2 && h !== 4 && l(P, P, F);
    for (h = 0; h < 16; h++)
      U[h] = P[h];
  }
  function A(U, F) {
    const P = s();
    let h;
    for (h = 0; h < 16; h++)
      P[h] = F[h];
    for (h = 250; h >= 0; h--)
      y(P, P), h !== 1 && l(P, P, F);
    for (h = 0; h < 16; h++)
      U[h] = P[h];
  }
  function M(U, F) {
    const P = s(), h = s(), I = s(), Z = s(), X = s(), Oe = s(), Ie = s(), we = s(), Fe = s();
    g(P, U[1], U[0]), g(Fe, F[1], F[0]), l(P, P, Fe), S(h, U[0], U[1]), S(Fe, F[0], F[1]), l(h, h, Fe), l(I, U[3], F[3]), l(I, I, c), l(Z, U[2], F[2]), S(Z, Z, Z), g(X, h, P), g(Oe, Z, I), S(Ie, Z, I), S(we, h, P), l(U[0], X, Oe), l(U[1], we, Ie), l(U[2], Ie, Oe), l(U[3], X, we);
  }
  function z(U, F, P) {
    for (let h = 0; h < 4; h++)
      _(U[h], F[h], P);
  }
  function G(U, F) {
    const P = s(), h = s(), I = s();
    C(I, F[2]), l(P, F[0], I), l(h, F[1], I), x(U, h), U[31] ^= D(P) << 7;
  }
  function R(U, F, P) {
    m(U[0], a), m(U[1], o), m(U[2], o), m(U[3], a);
    for (let h = 255; h >= 0; --h) {
      const I = P[h / 8 | 0] >> (h & 7) & 1;
      z(U, F, I), M(F, U), M(U, U), z(U, F, I);
    }
  }
  function L(U, F) {
    const P = [s(), s(), s(), s()];
    m(P[0], f), m(P[1], d), m(P[2], o), l(P[3], f, d), R(U, P, F);
  }
  function Q(U) {
    if (U.length !== t.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${t.SEED_LENGTH} bytes`);
    const F = (0, r.hash)(U);
    F[0] &= 248, F[31] &= 127, F[31] |= 64;
    const P = new Uint8Array(32), h = [s(), s(), s(), s()];
    L(h, F), G(P, h);
    const I = new Uint8Array(64);
    return I.set(U), I.set(P, 32), {
      publicKey: P,
      secretKey: I
    };
  }
  t.generateKeyPairFromSeed = Q;
  function V(U) {
    const F = (0, e.randomBytes)(32, U), P = Q(F);
    return (0, n.wipe)(F), P;
  }
  t.generateKeyPair = V;
  function k(U) {
    if (U.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${t.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(U.subarray(32));
  }
  t.extractPublicKeyFromSecretKey = k;
  const B = new Float64Array([
    237,
    211,
    245,
    92,
    26,
    99,
    18,
    88,
    214,
    156,
    247,
    162,
    222,
    249,
    222,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    16
  ]);
  function $(U, F) {
    let P, h, I, Z;
    for (h = 63; h >= 32; --h) {
      for (P = 0, I = h - 32, Z = h - 12; I < Z; ++I)
        F[I] += P - 16 * F[h] * B[I - (h - 32)], P = Math.floor((F[I] + 128) / 256), F[I] -= P * 256;
      F[I] += P, F[h] = 0;
    }
    for (P = 0, I = 0; I < 32; I++)
      F[I] += P - (F[31] >> 4) * B[I], P = F[I] >> 8, F[I] &= 255;
    for (I = 0; I < 32; I++)
      F[I] -= P * B[I];
    for (h = 0; h < 32; h++)
      F[h + 1] += F[h] >> 8, U[h] = F[h] & 255;
  }
  function K(U) {
    const F = new Float64Array(64);
    for (let P = 0; P < 64; P++)
      F[P] = U[P];
    for (let P = 0; P < 64; P++)
      U[P] = 0;
    $(U, F);
  }
  function fe(U, F) {
    const P = new Float64Array(64), h = [s(), s(), s(), s()], I = (0, r.hash)(U.subarray(0, 32));
    I[0] &= 248, I[31] &= 127, I[31] |= 64;
    const Z = new Uint8Array(64);
    Z.set(I.subarray(32), 32);
    const X = new r.SHA512();
    X.update(Z.subarray(32)), X.update(F);
    const Oe = X.digest();
    X.clean(), K(Oe), L(h, Oe), G(Z, h), X.reset(), X.update(Z.subarray(0, 32)), X.update(U.subarray(32)), X.update(F);
    const Ie = X.digest();
    K(Ie);
    for (let we = 0; we < 32; we++)
      P[we] = Oe[we];
    for (let we = 0; we < 32; we++)
      for (let Fe = 0; Fe < 32; Fe++)
        P[we + Fe] += Ie[we] * I[Fe];
    return $(Z.subarray(32), P), Z;
  }
  t.sign = fe;
  function H(U, F) {
    const P = s(), h = s(), I = s(), Z = s(), X = s(), Oe = s(), Ie = s();
    return m(U[2], o), b(U[1], F), y(I, U[1]), l(Z, I, u), g(I, I, U[2]), S(Z, U[2], Z), y(X, Z), y(Oe, X), l(Ie, Oe, X), l(P, Ie, I), l(P, P, Z), A(P, P), l(P, P, I), l(P, P, Z), l(P, P, Z), l(U[0], P, Z), y(h, U[0]), l(h, h, Z), w(h, I) && l(U[0], U[0], p), y(h, U[0]), l(h, h, Z), w(h, I) ? -1 : (D(U[0]) === F[31] >> 7 && g(U[0], a, U[0]), l(U[3], U[0], U[1]), 0);
  }
  function ae(U, F, P) {
    const h = new Uint8Array(32), I = [s(), s(), s(), s()], Z = [s(), s(), s(), s()];
    if (P.length !== t.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${t.SIGNATURE_LENGTH} bytes`);
    if (H(Z, U))
      return !1;
    const X = new r.SHA512();
    X.update(P.subarray(0, 32)), X.update(U), X.update(F);
    const Oe = X.digest();
    return K(Oe), R(I, Z, Oe), L(Z, P.subarray(32)), M(I, Z), G(h, I), !T(P, h);
  }
  t.verify = ae;
  function te(U) {
    let F = [s(), s(), s(), s()];
    if (H(F, U))
      throw new Error("Ed25519: invalid public key");
    let P = s(), h = s(), I = F[1];
    S(P, o, I), g(h, o, I), C(h, h), l(P, P, h);
    let Z = new Uint8Array(32);
    return x(Z, P), Z;
  }
  t.convertPublicKeyToX25519 = te;
  function oe(U) {
    const F = (0, r.hash)(U.subarray(0, 32));
    F[0] &= 248, F[31] &= 127, F[31] |= 64;
    const P = new Uint8Array(F.subarray(0, 32));
    return (0, n.wipe)(F), P;
  }
  t.convertSecretKeyToX25519 = oe;
})(Dc);
const lm = "EdDSA", fm = "JWT", ch = ".", uh = "base64url", hm = "utf8", dm = "utf8", pm = ":", gm = "did", ym = "key", Qu = "base58btc", mm = "z", vm = "K36", bm = 32;
function Oc(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function lh(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Oc(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Ua(t, e) {
  e || (e = t.reduce((s, i) => s + i.length, 0));
  const r = lh(e);
  let n = 0;
  for (const s of t)
    r.set(s, n), n += s.length;
  return Oc(r);
}
function wm(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var s = 0; s < t.length; s++) {
    var i = t.charAt(s), a = i.charCodeAt(0);
    if (r[a] !== 255)
      throw new TypeError(i + " is ambiguous");
    r[a] = s;
  }
  var o = t.length, u = t.charAt(0), c = Math.log(o) / Math.log(256), f = Math.log(256) / Math.log(o);
  function d(v) {
    if (v instanceof Uint8Array || (ArrayBuffer.isView(v) ? v = new Uint8Array(v.buffer, v.byteOffset, v.byteLength) : Array.isArray(v) && (v = Uint8Array.from(v))), !(v instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (v.length === 0)
      return "";
    for (var _ = 0, x = 0, T = 0, w = v.length; T !== w && v[T] === 0; )
      T++, _++;
    for (var D = (w - T) * f + 1 >>> 0, b = new Uint8Array(D); T !== w; ) {
      for (var S = v[T], g = 0, l = D - 1; (S !== 0 || g < x) && l !== -1; l--, g++)
        S += 256 * b[l] >>> 0, b[l] = S % o >>> 0, S = S / o >>> 0;
      if (S !== 0)
        throw new Error("Non-zero carry");
      x = g, T++;
    }
    for (var y = D - x; y !== D && b[y] === 0; )
      y++;
    for (var C = u.repeat(_); y < D; ++y)
      C += t.charAt(b[y]);
    return C;
  }
  function p(v) {
    if (typeof v != "string")
      throw new TypeError("Expected String");
    if (v.length === 0)
      return new Uint8Array();
    var _ = 0;
    if (v[_] !== " ") {
      for (var x = 0, T = 0; v[_] === u; )
        x++, _++;
      for (var w = (v.length - _) * c + 1 >>> 0, D = new Uint8Array(w); v[_]; ) {
        var b = r[v.charCodeAt(_)];
        if (b === 255)
          return;
        for (var S = 0, g = w - 1; (b !== 0 || S < T) && g !== -1; g--, S++)
          b += o * D[g] >>> 0, D[g] = b % 256 >>> 0, b = b / 256 >>> 0;
        if (b !== 0)
          throw new Error("Non-zero carry");
        T = S, _++;
      }
      if (v[_] !== " ") {
        for (var l = w - T; l !== w && D[l] === 0; )
          l++;
        for (var y = new Uint8Array(x + (w - l)), C = x; l !== w; )
          y[C++] = D[l++];
        return y;
      }
    }
  }
  function m(v) {
    var _ = p(v);
    if (_)
      return _;
    throw new Error(`Non-${e} character`);
  }
  return {
    encode: d,
    decodeUnsafe: p,
    decode: m
  };
}
var _m = wm, Em = _m;
const Sm = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, xm = (t) => new TextEncoder().encode(t), Dm = (t) => new TextDecoder().decode(t);
class Om {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Im {
  constructor(e, r, n) {
    if (this.name = e, this.prefix = r, r.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = n;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return fh(this, e);
  }
}
class Cm {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return fh(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const fh = (t, e) => new Cm({
  ...t.decoders || { [t.prefix]: t },
  ...e.decoders || { [e.prefix]: e }
});
class Rm {
  constructor(e, r, n, s) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = s, this.encoder = new Om(e, r, n), this.decoder = new Im(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const Lo = ({ name: t, prefix: e, encode: r, decode: n }) => new Rm(t, e, r, n), mi = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: s } = Em(r, e);
  return Lo({
    prefix: t,
    name: e,
    encode: n,
    decode: (i) => Sm(s(i))
  });
}, Tm = (t, e, r, n) => {
  const s = {};
  for (let f = 0; f < e.length; ++f)
    s[e[f]] = f;
  let i = t.length;
  for (; t[i - 1] === "="; )
    --i;
  const a = new Uint8Array(i * r / 8 | 0);
  let o = 0, u = 0, c = 0;
  for (let f = 0; f < i; ++f) {
    const d = s[t[f]];
    if (d === void 0)
      throw new SyntaxError(`Non-${n} character`);
    u = u << r | d, o += r, o >= 8 && (o -= 8, a[c++] = 255 & u >> o);
  }
  if (o >= r || 255 & u << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return a;
}, Am = (t, e, r) => {
  const n = e[e.length - 1] === "=", s = (1 << r) - 1;
  let i = "", a = 0, o = 0;
  for (let u = 0; u < t.length; ++u)
    for (o = o << 8 | t[u], a += 8; a > r; )
      a -= r, i += e[s & o >> a];
  if (a && (i += e[s & o << r - a]), n)
    for (; i.length * r & 7; )
      i += "=";
  return i;
}, Pt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => Lo({
  prefix: e,
  name: t,
  encode(s) {
    return Am(s, n, r);
  },
  decode(s) {
    return Tm(s, n, r, t);
  }
}), Pm = Lo({
  prefix: "\0",
  name: "identity",
  encode: (t) => Dm(t),
  decode: (t) => xm(t)
}), Nm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: Pm
}, Symbol.toStringTag, { value: "Module" })), Lm = Pt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), Fm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: Lm
}, Symbol.toStringTag, { value: "Module" })), Um = Pt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), Mm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: Um
}, Symbol.toStringTag, { value: "Module" })), jm = mi({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), $m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: jm
}, Symbol.toStringTag, { value: "Module" })), km = Pt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), qm = Pt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), zm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: km,
  base16upper: qm
}, Symbol.toStringTag, { value: "Module" })), Bm = Pt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), Vm = Pt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), Km = Pt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), Hm = Pt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), Wm = Pt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), Gm = Pt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), Qm = Pt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), Zm = Pt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), Ym = Pt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), Jm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: Bm,
  base32hex: Wm,
  base32hexpad: Qm,
  base32hexpadupper: Zm,
  base32hexupper: Gm,
  base32pad: Km,
  base32padupper: Hm,
  base32upper: Vm,
  base32z: Ym
}, Symbol.toStringTag, { value: "Module" })), Xm = mi({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), ev = mi({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), tv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: Xm,
  base36upper: ev
}, Symbol.toStringTag, { value: "Module" })), rv = mi({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), nv = mi({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), sv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: rv,
  base58flickr: nv
}, Symbol.toStringTag, { value: "Module" })), iv = Pt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), ov = Pt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), av = Pt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), cv = Pt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), uv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: iv,
  base64pad: ov,
  base64url: av,
  base64urlpad: cv
}, Symbol.toStringTag, { value: "Module" })), hh = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), lv = hh.reduce((t, e, r) => (t[r] = e, t), []), fv = hh.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function hv(t) {
  return t.reduce((e, r) => (e += lv[r], e), "");
}
function dv(t) {
  const e = [];
  for (const r of t) {
    const n = fv[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const pv = Lo({
  prefix: "🚀",
  name: "base256emoji",
  encode: hv,
  decode: dv
}), gv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: pv
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const Zu = {
  ...Nm,
  ...Fm,
  ...Mm,
  ...$m,
  ...zm,
  ...Jm,
  ...tv,
  ...sv,
  ...uv,
  ...gv
};
function dh(t, e, r, n) {
  return {
    name: t,
    prefix: e,
    encoder: {
      name: t,
      prefix: e,
      encode: r
    },
    decoder: { decode: n }
  };
}
const Yu = dh("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), aa = dh("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = lh(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), ph = {
  utf8: Yu,
  "utf-8": Yu,
  hex: Zu.base16,
  latin1: aa,
  ascii: aa,
  binary: aa,
  ...Zu
};
function Zt(t, e = "utf8") {
  const r = ph[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : r.encoder.encode(t).substring(1);
}
function tr(t, e = "utf8") {
  const r = ph[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Oc(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
function io(t) {
  return Zt(tr(yi(t), hm), uh);
}
function gh(t) {
  const e = tr(vm, Qu), r = mm + Zt(Ua([e, t]), Qu);
  return [gm, ym, r].join(pm);
}
function yv(t) {
  return Zt(t, uh);
}
function mv(t) {
  return tr([io(t.header), io(t.payload)].join(ch), dm);
}
function vv(t) {
  return [
    io(t.header),
    io(t.payload),
    yv(t.signature)
  ].join(ch);
}
function Ju(t = ms.randomBytes(bm)) {
  return Dc.generateKeyPairFromSeed(t);
}
async function bv(t, e, r, n, s = se.fromMiliseconds(Date.now())) {
  const i = { alg: lm, typ: fm }, a = gh(n.publicKey), o = s + r, u = { iss: a, sub: t, aud: e, iat: s, exp: o }, c = mv({ header: i, payload: u }), f = Dc.sign(n.secretKey, c);
  return vv({ header: i, payload: u, signature: f });
}
var Ic = {}, Fo = {};
Object.defineProperty(Fo, "__esModule", { value: !0 });
var Ut = me, Ma = ur, wv = 20;
function _v(t, e, r) {
  for (var n = 1634760805, s = 857760878, i = 2036477234, a = 1797285236, o = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], u = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], c = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], f = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], d = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], p = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], m = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], v = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], _ = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], x = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], T = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], w = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], D = n, b = s, S = i, g = a, l = o, y = u, C = c, A = f, M = d, z = p, G = m, R = v, L = _, Q = x, V = T, k = w, B = 0; B < wv; B += 2)
    D = D + l | 0, L ^= D, L = L >>> 16 | L << 16, M = M + L | 0, l ^= M, l = l >>> 20 | l << 12, b = b + y | 0, Q ^= b, Q = Q >>> 16 | Q << 16, z = z + Q | 0, y ^= z, y = y >>> 20 | y << 12, S = S + C | 0, V ^= S, V = V >>> 16 | V << 16, G = G + V | 0, C ^= G, C = C >>> 20 | C << 12, g = g + A | 0, k ^= g, k = k >>> 16 | k << 16, R = R + k | 0, A ^= R, A = A >>> 20 | A << 12, S = S + C | 0, V ^= S, V = V >>> 24 | V << 8, G = G + V | 0, C ^= G, C = C >>> 25 | C << 7, g = g + A | 0, k ^= g, k = k >>> 24 | k << 8, R = R + k | 0, A ^= R, A = A >>> 25 | A << 7, b = b + y | 0, Q ^= b, Q = Q >>> 24 | Q << 8, z = z + Q | 0, y ^= z, y = y >>> 25 | y << 7, D = D + l | 0, L ^= D, L = L >>> 24 | L << 8, M = M + L | 0, l ^= M, l = l >>> 25 | l << 7, D = D + y | 0, k ^= D, k = k >>> 16 | k << 16, G = G + k | 0, y ^= G, y = y >>> 20 | y << 12, b = b + C | 0, L ^= b, L = L >>> 16 | L << 16, R = R + L | 0, C ^= R, C = C >>> 20 | C << 12, S = S + A | 0, Q ^= S, Q = Q >>> 16 | Q << 16, M = M + Q | 0, A ^= M, A = A >>> 20 | A << 12, g = g + l | 0, V ^= g, V = V >>> 16 | V << 16, z = z + V | 0, l ^= z, l = l >>> 20 | l << 12, S = S + A | 0, Q ^= S, Q = Q >>> 24 | Q << 8, M = M + Q | 0, A ^= M, A = A >>> 25 | A << 7, g = g + l | 0, V ^= g, V = V >>> 24 | V << 8, z = z + V | 0, l ^= z, l = l >>> 25 | l << 7, b = b + C | 0, L ^= b, L = L >>> 24 | L << 8, R = R + L | 0, C ^= R, C = C >>> 25 | C << 7, D = D + y | 0, k ^= D, k = k >>> 24 | k << 8, G = G + k | 0, y ^= G, y = y >>> 25 | y << 7;
  Ut.writeUint32LE(D + n | 0, t, 0), Ut.writeUint32LE(b + s | 0, t, 4), Ut.writeUint32LE(S + i | 0, t, 8), Ut.writeUint32LE(g + a | 0, t, 12), Ut.writeUint32LE(l + o | 0, t, 16), Ut.writeUint32LE(y + u | 0, t, 20), Ut.writeUint32LE(C + c | 0, t, 24), Ut.writeUint32LE(A + f | 0, t, 28), Ut.writeUint32LE(M + d | 0, t, 32), Ut.writeUint32LE(z + p | 0, t, 36), Ut.writeUint32LE(G + m | 0, t, 40), Ut.writeUint32LE(R + v | 0, t, 44), Ut.writeUint32LE(L + _ | 0, t, 48), Ut.writeUint32LE(Q + x | 0, t, 52), Ut.writeUint32LE(V + T | 0, t, 56), Ut.writeUint32LE(k + w | 0, t, 60);
}
function yh(t, e, r, n, s) {
  if (s === void 0 && (s = 0), t.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (n.length < r.length)
    throw new Error("ChaCha: destination is shorter than source");
  var i, a;
  if (s === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    i = new Uint8Array(16), a = i.length - e.length, i.set(e, a);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    i = e, a = s;
  }
  for (var o = new Uint8Array(64), u = 0; u < r.length; u += 64) {
    _v(o, i, t);
    for (var c = u; c < u + 64 && c < r.length; c++)
      n[c] = r[c] ^ o[c - u];
    Sv(i, 0, a);
  }
  return Ma.wipe(o), s === 0 && Ma.wipe(i), n;
}
Fo.streamXOR = yh;
function Ev(t, e, r, n) {
  return n === void 0 && (n = 0), Ma.wipe(r), yh(t, e, r, r, n);
}
Fo.stream = Ev;
function Sv(t, e, r) {
  for (var n = 1; r--; )
    n = n + (t[e] & 255) | 0, t[e] = n & 255, n >>>= 8, e++;
  if (n > 0)
    throw new Error("ChaCha: counter overflow");
}
var mh = {}, mn = {};
Object.defineProperty(mn, "__esModule", { value: !0 });
function xv(t, e, r) {
  return ~(t - 1) & e | t - 1 & r;
}
mn.select = xv;
function Dv(t, e) {
  return (t | 0) - (e | 0) - 1 >>> 31 & 1;
}
mn.lessOrEqual = Dv;
function vh(t, e) {
  if (t.length !== e.length)
    return 0;
  for (var r = 0, n = 0; n < t.length; n++)
    r |= t[n] ^ e[n];
  return 1 & r - 1 >>> 8;
}
mn.compare = vh;
function Ov(t, e) {
  return t.length === 0 || e.length === 0 ? !1 : vh(t, e) !== 0;
}
mn.equal = Ov;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = mn, r = ur;
  t.DIGEST_LENGTH = 16;
  var n = (
    /** @class */
    function() {
      function a(o) {
        this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var u = o[0] | o[1] << 8;
        this._r[0] = u & 8191;
        var c = o[2] | o[3] << 8;
        this._r[1] = (u >>> 13 | c << 3) & 8191;
        var f = o[4] | o[5] << 8;
        this._r[2] = (c >>> 10 | f << 6) & 7939;
        var d = o[6] | o[7] << 8;
        this._r[3] = (f >>> 7 | d << 9) & 8191;
        var p = o[8] | o[9] << 8;
        this._r[4] = (d >>> 4 | p << 12) & 255, this._r[5] = p >>> 1 & 8190;
        var m = o[10] | o[11] << 8;
        this._r[6] = (p >>> 14 | m << 2) & 8191;
        var v = o[12] | o[13] << 8;
        this._r[7] = (m >>> 11 | v << 5) & 8065;
        var _ = o[14] | o[15] << 8;
        this._r[8] = (v >>> 8 | _ << 8) & 8191, this._r[9] = _ >>> 5 & 127, this._pad[0] = o[16] | o[17] << 8, this._pad[1] = o[18] | o[19] << 8, this._pad[2] = o[20] | o[21] << 8, this._pad[3] = o[22] | o[23] << 8, this._pad[4] = o[24] | o[25] << 8, this._pad[5] = o[26] | o[27] << 8, this._pad[6] = o[28] | o[29] << 8, this._pad[7] = o[30] | o[31] << 8;
      }
      return a.prototype._blocks = function(o, u, c) {
        for (var f = this._fin ? 0 : 2048, d = this._h[0], p = this._h[1], m = this._h[2], v = this._h[3], _ = this._h[4], x = this._h[5], T = this._h[6], w = this._h[7], D = this._h[8], b = this._h[9], S = this._r[0], g = this._r[1], l = this._r[2], y = this._r[3], C = this._r[4], A = this._r[5], M = this._r[6], z = this._r[7], G = this._r[8], R = this._r[9]; c >= 16; ) {
          var L = o[u + 0] | o[u + 1] << 8;
          d += L & 8191;
          var Q = o[u + 2] | o[u + 3] << 8;
          p += (L >>> 13 | Q << 3) & 8191;
          var V = o[u + 4] | o[u + 5] << 8;
          m += (Q >>> 10 | V << 6) & 8191;
          var k = o[u + 6] | o[u + 7] << 8;
          v += (V >>> 7 | k << 9) & 8191;
          var B = o[u + 8] | o[u + 9] << 8;
          _ += (k >>> 4 | B << 12) & 8191, x += B >>> 1 & 8191;
          var $ = o[u + 10] | o[u + 11] << 8;
          T += (B >>> 14 | $ << 2) & 8191;
          var K = o[u + 12] | o[u + 13] << 8;
          w += ($ >>> 11 | K << 5) & 8191;
          var fe = o[u + 14] | o[u + 15] << 8;
          D += (K >>> 8 | fe << 8) & 8191, b += fe >>> 5 | f;
          var H = 0, ae = H;
          ae += d * S, ae += p * (5 * R), ae += m * (5 * G), ae += v * (5 * z), ae += _ * (5 * M), H = ae >>> 13, ae &= 8191, ae += x * (5 * A), ae += T * (5 * C), ae += w * (5 * y), ae += D * (5 * l), ae += b * (5 * g), H += ae >>> 13, ae &= 8191;
          var te = H;
          te += d * g, te += p * S, te += m * (5 * R), te += v * (5 * G), te += _ * (5 * z), H = te >>> 13, te &= 8191, te += x * (5 * M), te += T * (5 * A), te += w * (5 * C), te += D * (5 * y), te += b * (5 * l), H += te >>> 13, te &= 8191;
          var oe = H;
          oe += d * l, oe += p * g, oe += m * S, oe += v * (5 * R), oe += _ * (5 * G), H = oe >>> 13, oe &= 8191, oe += x * (5 * z), oe += T * (5 * M), oe += w * (5 * A), oe += D * (5 * C), oe += b * (5 * y), H += oe >>> 13, oe &= 8191;
          var U = H;
          U += d * y, U += p * l, U += m * g, U += v * S, U += _ * (5 * R), H = U >>> 13, U &= 8191, U += x * (5 * G), U += T * (5 * z), U += w * (5 * M), U += D * (5 * A), U += b * (5 * C), H += U >>> 13, U &= 8191;
          var F = H;
          F += d * C, F += p * y, F += m * l, F += v * g, F += _ * S, H = F >>> 13, F &= 8191, F += x * (5 * R), F += T * (5 * G), F += w * (5 * z), F += D * (5 * M), F += b * (5 * A), H += F >>> 13, F &= 8191;
          var P = H;
          P += d * A, P += p * C, P += m * y, P += v * l, P += _ * g, H = P >>> 13, P &= 8191, P += x * S, P += T * (5 * R), P += w * (5 * G), P += D * (5 * z), P += b * (5 * M), H += P >>> 13, P &= 8191;
          var h = H;
          h += d * M, h += p * A, h += m * C, h += v * y, h += _ * l, H = h >>> 13, h &= 8191, h += x * g, h += T * S, h += w * (5 * R), h += D * (5 * G), h += b * (5 * z), H += h >>> 13, h &= 8191;
          var I = H;
          I += d * z, I += p * M, I += m * A, I += v * C, I += _ * y, H = I >>> 13, I &= 8191, I += x * l, I += T * g, I += w * S, I += D * (5 * R), I += b * (5 * G), H += I >>> 13, I &= 8191;
          var Z = H;
          Z += d * G, Z += p * z, Z += m * M, Z += v * A, Z += _ * C, H = Z >>> 13, Z &= 8191, Z += x * y, Z += T * l, Z += w * g, Z += D * S, Z += b * (5 * R), H += Z >>> 13, Z &= 8191;
          var X = H;
          X += d * R, X += p * G, X += m * z, X += v * M, X += _ * A, H = X >>> 13, X &= 8191, X += x * C, X += T * y, X += w * l, X += D * g, X += b * S, H += X >>> 13, X &= 8191, H = (H << 2) + H | 0, H = H + ae | 0, ae = H & 8191, H = H >>> 13, te += H, d = ae, p = te, m = oe, v = U, _ = F, x = P, T = h, w = I, D = Z, b = X, u += 16, c -= 16;
        }
        this._h[0] = d, this._h[1] = p, this._h[2] = m, this._h[3] = v, this._h[4] = _, this._h[5] = x, this._h[6] = T, this._h[7] = w, this._h[8] = D, this._h[9] = b;
      }, a.prototype.finish = function(o, u) {
        u === void 0 && (u = 0);
        var c = new Uint16Array(10), f, d, p, m;
        if (this._leftover) {
          for (m = this._leftover, this._buffer[m++] = 1; m < 16; m++)
            this._buffer[m] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (f = this._h[1] >>> 13, this._h[1] &= 8191, m = 2; m < 10; m++)
          this._h[m] += f, f = this._h[m] >>> 13, this._h[m] &= 8191;
        for (this._h[0] += f * 5, f = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += f, f = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += f, c[0] = this._h[0] + 5, f = c[0] >>> 13, c[0] &= 8191, m = 1; m < 10; m++)
          c[m] = this._h[m] + f, f = c[m] >>> 13, c[m] &= 8191;
        for (c[9] -= 8192, d = (f ^ 1) - 1, m = 0; m < 10; m++)
          c[m] &= d;
        for (d = ~d, m = 0; m < 10; m++)
          this._h[m] = this._h[m] & d | c[m];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, p = this._h[0] + this._pad[0], this._h[0] = p & 65535, m = 1; m < 8; m++)
          p = (this._h[m] + this._pad[m] | 0) + (p >>> 16) | 0, this._h[m] = p & 65535;
        return o[u + 0] = this._h[0] >>> 0, o[u + 1] = this._h[0] >>> 8, o[u + 2] = this._h[1] >>> 0, o[u + 3] = this._h[1] >>> 8, o[u + 4] = this._h[2] >>> 0, o[u + 5] = this._h[2] >>> 8, o[u + 6] = this._h[3] >>> 0, o[u + 7] = this._h[3] >>> 8, o[u + 8] = this._h[4] >>> 0, o[u + 9] = this._h[4] >>> 8, o[u + 10] = this._h[5] >>> 0, o[u + 11] = this._h[5] >>> 8, o[u + 12] = this._h[6] >>> 0, o[u + 13] = this._h[6] >>> 8, o[u + 14] = this._h[7] >>> 0, o[u + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, a.prototype.update = function(o) {
        var u = 0, c = o.length, f;
        if (this._leftover) {
          f = 16 - this._leftover, f > c && (f = c);
          for (var d = 0; d < f; d++)
            this._buffer[this._leftover + d] = o[u + d];
          if (c -= f, u += f, this._leftover += f, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (c >= 16 && (f = c - c % 16, this._blocks(o, u, f), u += f, c -= f), c) {
          for (var d = 0; d < c; d++)
            this._buffer[this._leftover + d] = o[u + d];
          this._leftover += c;
        }
        return this;
      }, a.prototype.digest = function() {
        if (this._finished)
          throw new Error("Poly1305 was finished");
        var o = new Uint8Array(16);
        return this.finish(o), o;
      }, a.prototype.clean = function() {
        return r.wipe(this._buffer), r.wipe(this._r), r.wipe(this._h), r.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this;
      }, a;
    }()
  );
  t.Poly1305 = n;
  function s(a, o) {
    var u = new n(a);
    u.update(o);
    var c = u.digest();
    return u.clean(), c;
  }
  t.oneTimeAuth = s;
  function i(a, o) {
    return a.length !== t.DIGEST_LENGTH || o.length !== t.DIGEST_LENGTH ? !1 : e.equal(a, o);
  }
  t.equal = i;
})(mh);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Fo, r = mh, n = ur, s = me, i = mn;
  t.KEY_LENGTH = 32, t.NONCE_LENGTH = 12, t.TAG_LENGTH = 16;
  var a = new Uint8Array(16), o = (
    /** @class */
    function() {
      function u(c) {
        if (this.nonceLength = t.NONCE_LENGTH, this.tagLength = t.TAG_LENGTH, c.length !== t.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(c);
      }
      return u.prototype.seal = function(c, f, d, p) {
        if (c.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var m = new Uint8Array(16);
        m.set(c, m.length - c.length);
        var v = new Uint8Array(32);
        e.stream(this._key, m, v, 4);
        var _ = f.length + this.tagLength, x;
        if (p) {
          if (p.length !== _)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          x = p;
        } else
          x = new Uint8Array(_);
        return e.streamXOR(this._key, m, f, x, 4), this._authenticate(x.subarray(x.length - this.tagLength, x.length), v, x.subarray(0, x.length - this.tagLength), d), n.wipe(m), x;
      }, u.prototype.open = function(c, f, d, p) {
        if (c.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (f.length < this.tagLength)
          return null;
        var m = new Uint8Array(16);
        m.set(c, m.length - c.length);
        var v = new Uint8Array(32);
        e.stream(this._key, m, v, 4);
        var _ = new Uint8Array(this.tagLength);
        if (this._authenticate(_, v, f.subarray(0, f.length - this.tagLength), d), !i.equal(_, f.subarray(f.length - this.tagLength, f.length)))
          return null;
        var x = f.length - this.tagLength, T;
        if (p) {
          if (p.length !== x)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          T = p;
        } else
          T = new Uint8Array(x);
        return e.streamXOR(this._key, m, f.subarray(0, f.length - this.tagLength), T, 4), n.wipe(m), T;
      }, u.prototype.clean = function() {
        return n.wipe(this._key), this;
      }, u.prototype._authenticate = function(c, f, d, p) {
        var m = new r.Poly1305(f);
        p && (m.update(p), p.length % 16 > 0 && m.update(a.subarray(p.length % 16))), m.update(d), d.length % 16 > 0 && m.update(a.subarray(d.length % 16));
        var v = new Uint8Array(8);
        p && s.writeUint64LE(p.length, v), m.update(v), s.writeUint64LE(d.length, v), m.update(v);
        for (var _ = m.digest(), x = 0; x < _.length; x++)
          c[x] = _[x];
        m.clean(), n.wipe(_), n.wipe(v);
      }, u;
    }()
  );
  t.ChaCha20Poly1305 = o;
})(Ic);
var bh = {}, vi = {}, Cc = {};
Object.defineProperty(Cc, "__esModule", { value: !0 });
function Iv(t) {
  return typeof t.saveState < "u" && typeof t.restoreState < "u" && typeof t.cleanSavedState < "u";
}
Cc.isSerializableHash = Iv;
Object.defineProperty(vi, "__esModule", { value: !0 });
var Nr = Cc, Cv = mn, Rv = ur, wh = (
  /** @class */
  function() {
    function t(e, r) {
      this._finished = !1, this._inner = new e(), this._outer = new e(), this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
      var n = new Uint8Array(this.blockSize);
      r.length > this.blockSize ? this._inner.update(r).finish(n).clean() : n.set(r);
      for (var s = 0; s < n.length; s++)
        n[s] ^= 54;
      this._inner.update(n);
      for (var s = 0; s < n.length; s++)
        n[s] ^= 106;
      this._outer.update(n), Nr.isSerializableHash(this._inner) && Nr.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), Rv.wipe(n);
    }
    return t.prototype.reset = function() {
      if (!Nr.isSerializableHash(this._inner) || !Nr.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.clean = function() {
      Nr.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), Nr.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, t.prototype.update = function(e) {
      return this._inner.update(e), this;
    }, t.prototype.finish = function(e) {
      return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this);
    }, t.prototype.digest = function() {
      var e = new Uint8Array(this.digestLength);
      return this.finish(e), e;
    }, t.prototype.saveState = function() {
      if (!Nr.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, t.prototype.restoreState = function(e) {
      if (!Nr.isSerializableHash(this._inner) || !Nr.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, t.prototype.cleanSavedState = function(e) {
      if (!Nr.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(e);
    }, t;
  }()
);
vi.HMAC = wh;
function Tv(t, e, r) {
  var n = new wh(t, e);
  n.update(r);
  var s = n.digest();
  return n.clean(), s;
}
vi.hmac = Tv;
vi.equal = Cv.equal;
Object.defineProperty(bh, "__esModule", { value: !0 });
var Xu = vi, el = ur, Av = (
  /** @class */
  function() {
    function t(e, r, n, s) {
      n === void 0 && (n = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = s;
      var i = Xu.hmac(this._hash, n, r);
      this._hmac = new Xu.HMAC(e, i), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
    }
    return t.prototype._fillBuffer = function() {
      this._counter[0]++;
      var e = this._counter[0];
      if (e === 0)
        throw new Error("hkdf: cannot expand more");
      this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0;
    }, t.prototype.expand = function(e) {
      for (var r = new Uint8Array(e), n = 0; n < r.length; n++)
        this._bufpos === this._buffer.length && this._fillBuffer(), r[n] = this._buffer[this._bufpos++];
      return r;
    }, t.prototype.clean = function() {
      this._hmac.clean(), el.wipe(this._buffer), el.wipe(this._counter), this._bufpos = 0;
    }, t;
  }()
), Pv = bh.HKDF = Av, Uo = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = me, r = ur;
  t.DIGEST_LENGTH = 32, t.BLOCK_SIZE = 64;
  var n = (
    /** @class */
    function() {
      function o() {
        this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return o.prototype._initState = function() {
        this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225;
      }, o.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, o.prototype.clean = function() {
        r.wipe(this._buffer), r.wipe(this._temp), this.reset();
      }, o.prototype.update = function(u, c) {
        if (c === void 0 && (c = u.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var f = 0;
        if (this._bytesHashed += c, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && c > 0; )
            this._buffer[this._bufferLength++] = u[f++], c--;
          this._bufferLength === this.blockSize && (i(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (c >= this.blockSize && (f = i(this._temp, this._state, u, f, c), c %= this.blockSize); c > 0; )
          this._buffer[this._bufferLength++] = u[f++], c--;
        return this;
      }, o.prototype.finish = function(u) {
        if (!this._finished) {
          var c = this._bytesHashed, f = this._bufferLength, d = c / 536870912 | 0, p = c << 3, m = c % 64 < 56 ? 64 : 128;
          this._buffer[f] = 128;
          for (var v = f + 1; v < m - 8; v++)
            this._buffer[v] = 0;
          e.writeUint32BE(d, this._buffer, m - 8), e.writeUint32BE(p, this._buffer, m - 4), i(this._temp, this._state, this._buffer, 0, m), this._finished = !0;
        }
        for (var v = 0; v < this.digestLength / 4; v++)
          e.writeUint32BE(this._state[v], u, v * 4);
        return this;
      }, o.prototype.digest = function() {
        var u = new Uint8Array(this.digestLength);
        return this.finish(u), u;
      }, o.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, o.prototype.restoreState = function(u) {
        return this._state.set(u.state), this._bufferLength = u.bufferLength, u.buffer && this._buffer.set(u.buffer), this._bytesHashed = u.bytesHashed, this._finished = !1, this;
      }, o.prototype.cleanSavedState = function(u) {
        r.wipe(u.state), u.buffer && r.wipe(u.buffer), u.bufferLength = 0, u.bytesHashed = 0;
      }, o;
    }()
  );
  t.SHA256 = n;
  var s = new Int32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  function i(o, u, c, f, d) {
    for (; d >= 64; ) {
      for (var p = u[0], m = u[1], v = u[2], _ = u[3], x = u[4], T = u[5], w = u[6], D = u[7], b = 0; b < 16; b++) {
        var S = f + b * 4;
        o[b] = e.readUint32BE(c, S);
      }
      for (var b = 16; b < 64; b++) {
        var g = o[b - 2], l = (g >>> 17 | g << 15) ^ (g >>> 19 | g << 13) ^ g >>> 10;
        g = o[b - 15];
        var y = (g >>> 7 | g << 25) ^ (g >>> 18 | g << 14) ^ g >>> 3;
        o[b] = (l + o[b - 7] | 0) + (y + o[b - 16] | 0);
      }
      for (var b = 0; b < 64; b++) {
        var l = (((x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7)) + (x & T ^ ~x & w) | 0) + (D + (s[b] + o[b] | 0) | 0) | 0, y = ((p >>> 2 | p << 30) ^ (p >>> 13 | p << 19) ^ (p >>> 22 | p << 10)) + (p & m ^ p & v ^ m & v) | 0;
        D = w, w = T, T = x, x = _ + l | 0, _ = v, v = m, m = p, p = l + y | 0;
      }
      u[0] += p, u[1] += m, u[2] += v, u[3] += _, u[4] += x, u[5] += T, u[6] += w, u[7] += D, f += 64, d -= 64;
    }
    return f;
  }
  function a(o) {
    var u = new n();
    u.update(o);
    var c = u.digest();
    return u.clean(), c;
  }
  t.hash = a;
})(Uo);
var Rc = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.sharedKey = t.generateKeyPair = t.generateKeyPairFromSeed = t.scalarMultBase = t.scalarMult = t.SHARED_KEY_LENGTH = t.SECRET_KEY_LENGTH = t.PUBLIC_KEY_LENGTH = void 0;
  const e = ms, r = ur;
  t.PUBLIC_KEY_LENGTH = 32, t.SECRET_KEY_LENGTH = 32, t.SHARED_KEY_LENGTH = 32;
  function n(b) {
    const S = new Float64Array(16);
    if (b)
      for (let g = 0; g < b.length; g++)
        S[g] = b[g];
    return S;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const i = n([56129, 1]);
  function a(b) {
    let S = 1;
    for (let g = 0; g < 16; g++) {
      let l = b[g] + S + 65535;
      S = Math.floor(l / 65536), b[g] = l - S * 65536;
    }
    b[0] += S - 1 + 37 * (S - 1);
  }
  function o(b, S, g) {
    const l = ~(g - 1);
    for (let y = 0; y < 16; y++) {
      const C = l & (b[y] ^ S[y]);
      b[y] ^= C, S[y] ^= C;
    }
  }
  function u(b, S) {
    const g = n(), l = n();
    for (let y = 0; y < 16; y++)
      l[y] = S[y];
    a(l), a(l), a(l);
    for (let y = 0; y < 2; y++) {
      g[0] = l[0] - 65517;
      for (let A = 1; A < 15; A++)
        g[A] = l[A] - 65535 - (g[A - 1] >> 16 & 1), g[A - 1] &= 65535;
      g[15] = l[15] - 32767 - (g[14] >> 16 & 1);
      const C = g[15] >> 16 & 1;
      g[14] &= 65535, o(l, g, 1 - C);
    }
    for (let y = 0; y < 16; y++)
      b[2 * y] = l[y] & 255, b[2 * y + 1] = l[y] >> 8;
  }
  function c(b, S) {
    for (let g = 0; g < 16; g++)
      b[g] = S[2 * g] + (S[2 * g + 1] << 8);
    b[15] &= 32767;
  }
  function f(b, S, g) {
    for (let l = 0; l < 16; l++)
      b[l] = S[l] + g[l];
  }
  function d(b, S, g) {
    for (let l = 0; l < 16; l++)
      b[l] = S[l] - g[l];
  }
  function p(b, S, g) {
    let l, y, C = 0, A = 0, M = 0, z = 0, G = 0, R = 0, L = 0, Q = 0, V = 0, k = 0, B = 0, $ = 0, K = 0, fe = 0, H = 0, ae = 0, te = 0, oe = 0, U = 0, F = 0, P = 0, h = 0, I = 0, Z = 0, X = 0, Oe = 0, Ie = 0, we = 0, Fe = 0, Je = 0, He = 0, Ne = g[0], Te = g[1], _e = g[2], Se = g[3], Ee = g[4], ge = g[5], pe = g[6], ce = g[7], xe = g[8], Ce = g[9], he = g[10], Ae = g[11], Ue = g[12], ke = g[13], qe = g[14], je = g[15];
    l = S[0], C += l * Ne, A += l * Te, M += l * _e, z += l * Se, G += l * Ee, R += l * ge, L += l * pe, Q += l * ce, V += l * xe, k += l * Ce, B += l * he, $ += l * Ae, K += l * Ue, fe += l * ke, H += l * qe, ae += l * je, l = S[1], A += l * Ne, M += l * Te, z += l * _e, G += l * Se, R += l * Ee, L += l * ge, Q += l * pe, V += l * ce, k += l * xe, B += l * Ce, $ += l * he, K += l * Ae, fe += l * Ue, H += l * ke, ae += l * qe, te += l * je, l = S[2], M += l * Ne, z += l * Te, G += l * _e, R += l * Se, L += l * Ee, Q += l * ge, V += l * pe, k += l * ce, B += l * xe, $ += l * Ce, K += l * he, fe += l * Ae, H += l * Ue, ae += l * ke, te += l * qe, oe += l * je, l = S[3], z += l * Ne, G += l * Te, R += l * _e, L += l * Se, Q += l * Ee, V += l * ge, k += l * pe, B += l * ce, $ += l * xe, K += l * Ce, fe += l * he, H += l * Ae, ae += l * Ue, te += l * ke, oe += l * qe, U += l * je, l = S[4], G += l * Ne, R += l * Te, L += l * _e, Q += l * Se, V += l * Ee, k += l * ge, B += l * pe, $ += l * ce, K += l * xe, fe += l * Ce, H += l * he, ae += l * Ae, te += l * Ue, oe += l * ke, U += l * qe, F += l * je, l = S[5], R += l * Ne, L += l * Te, Q += l * _e, V += l * Se, k += l * Ee, B += l * ge, $ += l * pe, K += l * ce, fe += l * xe, H += l * Ce, ae += l * he, te += l * Ae, oe += l * Ue, U += l * ke, F += l * qe, P += l * je, l = S[6], L += l * Ne, Q += l * Te, V += l * _e, k += l * Se, B += l * Ee, $ += l * ge, K += l * pe, fe += l * ce, H += l * xe, ae += l * Ce, te += l * he, oe += l * Ae, U += l * Ue, F += l * ke, P += l * qe, h += l * je, l = S[7], Q += l * Ne, V += l * Te, k += l * _e, B += l * Se, $ += l * Ee, K += l * ge, fe += l * pe, H += l * ce, ae += l * xe, te += l * Ce, oe += l * he, U += l * Ae, F += l * Ue, P += l * ke, h += l * qe, I += l * je, l = S[8], V += l * Ne, k += l * Te, B += l * _e, $ += l * Se, K += l * Ee, fe += l * ge, H += l * pe, ae += l * ce, te += l * xe, oe += l * Ce, U += l * he, F += l * Ae, P += l * Ue, h += l * ke, I += l * qe, Z += l * je, l = S[9], k += l * Ne, B += l * Te, $ += l * _e, K += l * Se, fe += l * Ee, H += l * ge, ae += l * pe, te += l * ce, oe += l * xe, U += l * Ce, F += l * he, P += l * Ae, h += l * Ue, I += l * ke, Z += l * qe, X += l * je, l = S[10], B += l * Ne, $ += l * Te, K += l * _e, fe += l * Se, H += l * Ee, ae += l * ge, te += l * pe, oe += l * ce, U += l * xe, F += l * Ce, P += l * he, h += l * Ae, I += l * Ue, Z += l * ke, X += l * qe, Oe += l * je, l = S[11], $ += l * Ne, K += l * Te, fe += l * _e, H += l * Se, ae += l * Ee, te += l * ge, oe += l * pe, U += l * ce, F += l * xe, P += l * Ce, h += l * he, I += l * Ae, Z += l * Ue, X += l * ke, Oe += l * qe, Ie += l * je, l = S[12], K += l * Ne, fe += l * Te, H += l * _e, ae += l * Se, te += l * Ee, oe += l * ge, U += l * pe, F += l * ce, P += l * xe, h += l * Ce, I += l * he, Z += l * Ae, X += l * Ue, Oe += l * ke, Ie += l * qe, we += l * je, l = S[13], fe += l * Ne, H += l * Te, ae += l * _e, te += l * Se, oe += l * Ee, U += l * ge, F += l * pe, P += l * ce, h += l * xe, I += l * Ce, Z += l * he, X += l * Ae, Oe += l * Ue, Ie += l * ke, we += l * qe, Fe += l * je, l = S[14], H += l * Ne, ae += l * Te, te += l * _e, oe += l * Se, U += l * Ee, F += l * ge, P += l * pe, h += l * ce, I += l * xe, Z += l * Ce, X += l * he, Oe += l * Ae, Ie += l * Ue, we += l * ke, Fe += l * qe, Je += l * je, l = S[15], ae += l * Ne, te += l * Te, oe += l * _e, U += l * Se, F += l * Ee, P += l * ge, h += l * pe, I += l * ce, Z += l * xe, X += l * Ce, Oe += l * he, Ie += l * Ae, we += l * Ue, Fe += l * ke, Je += l * qe, He += l * je, C += 38 * te, A += 38 * oe, M += 38 * U, z += 38 * F, G += 38 * P, R += 38 * h, L += 38 * I, Q += 38 * Z, V += 38 * X, k += 38 * Oe, B += 38 * Ie, $ += 38 * we, K += 38 * Fe, fe += 38 * Je, H += 38 * He, y = 1, l = C + y + 65535, y = Math.floor(l / 65536), C = l - y * 65536, l = A + y + 65535, y = Math.floor(l / 65536), A = l - y * 65536, l = M + y + 65535, y = Math.floor(l / 65536), M = l - y * 65536, l = z + y + 65535, y = Math.floor(l / 65536), z = l - y * 65536, l = G + y + 65535, y = Math.floor(l / 65536), G = l - y * 65536, l = R + y + 65535, y = Math.floor(l / 65536), R = l - y * 65536, l = L + y + 65535, y = Math.floor(l / 65536), L = l - y * 65536, l = Q + y + 65535, y = Math.floor(l / 65536), Q = l - y * 65536, l = V + y + 65535, y = Math.floor(l / 65536), V = l - y * 65536, l = k + y + 65535, y = Math.floor(l / 65536), k = l - y * 65536, l = B + y + 65535, y = Math.floor(l / 65536), B = l - y * 65536, l = $ + y + 65535, y = Math.floor(l / 65536), $ = l - y * 65536, l = K + y + 65535, y = Math.floor(l / 65536), K = l - y * 65536, l = fe + y + 65535, y = Math.floor(l / 65536), fe = l - y * 65536, l = H + y + 65535, y = Math.floor(l / 65536), H = l - y * 65536, l = ae + y + 65535, y = Math.floor(l / 65536), ae = l - y * 65536, C += y - 1 + 37 * (y - 1), y = 1, l = C + y + 65535, y = Math.floor(l / 65536), C = l - y * 65536, l = A + y + 65535, y = Math.floor(l / 65536), A = l - y * 65536, l = M + y + 65535, y = Math.floor(l / 65536), M = l - y * 65536, l = z + y + 65535, y = Math.floor(l / 65536), z = l - y * 65536, l = G + y + 65535, y = Math.floor(l / 65536), G = l - y * 65536, l = R + y + 65535, y = Math.floor(l / 65536), R = l - y * 65536, l = L + y + 65535, y = Math.floor(l / 65536), L = l - y * 65536, l = Q + y + 65535, y = Math.floor(l / 65536), Q = l - y * 65536, l = V + y + 65535, y = Math.floor(l / 65536), V = l - y * 65536, l = k + y + 65535, y = Math.floor(l / 65536), k = l - y * 65536, l = B + y + 65535, y = Math.floor(l / 65536), B = l - y * 65536, l = $ + y + 65535, y = Math.floor(l / 65536), $ = l - y * 65536, l = K + y + 65535, y = Math.floor(l / 65536), K = l - y * 65536, l = fe + y + 65535, y = Math.floor(l / 65536), fe = l - y * 65536, l = H + y + 65535, y = Math.floor(l / 65536), H = l - y * 65536, l = ae + y + 65535, y = Math.floor(l / 65536), ae = l - y * 65536, C += y - 1 + 37 * (y - 1), b[0] = C, b[1] = A, b[2] = M, b[3] = z, b[4] = G, b[5] = R, b[6] = L, b[7] = Q, b[8] = V, b[9] = k, b[10] = B, b[11] = $, b[12] = K, b[13] = fe, b[14] = H, b[15] = ae;
  }
  function m(b, S) {
    p(b, S, S);
  }
  function v(b, S) {
    const g = n();
    for (let l = 0; l < 16; l++)
      g[l] = S[l];
    for (let l = 253; l >= 0; l--)
      m(g, g), l !== 2 && l !== 4 && p(g, g, S);
    for (let l = 0; l < 16; l++)
      b[l] = g[l];
  }
  function _(b, S) {
    const g = new Uint8Array(32), l = new Float64Array(80), y = n(), C = n(), A = n(), M = n(), z = n(), G = n();
    for (let V = 0; V < 31; V++)
      g[V] = b[V];
    g[31] = b[31] & 127 | 64, g[0] &= 248, c(l, S);
    for (let V = 0; V < 16; V++)
      C[V] = l[V];
    y[0] = M[0] = 1;
    for (let V = 254; V >= 0; --V) {
      const k = g[V >>> 3] >>> (V & 7) & 1;
      o(y, C, k), o(A, M, k), f(z, y, A), d(y, y, A), f(A, C, M), d(C, C, M), m(M, z), m(G, y), p(y, A, y), p(A, C, z), f(z, y, A), d(y, y, A), m(C, y), d(A, M, G), p(y, A, i), f(y, y, M), p(A, A, y), p(y, M, G), p(M, C, l), m(C, z), o(y, C, k), o(A, M, k);
    }
    for (let V = 0; V < 16; V++)
      l[V + 16] = y[V], l[V + 32] = A[V], l[V + 48] = C[V], l[V + 64] = M[V];
    const R = l.subarray(32), L = l.subarray(16);
    v(R, R), p(L, L, R);
    const Q = new Uint8Array(32);
    return u(Q, L), Q;
  }
  t.scalarMult = _;
  function x(b) {
    return _(b, s);
  }
  t.scalarMultBase = x;
  function T(b) {
    if (b.length !== t.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);
    const S = new Uint8Array(b);
    return {
      publicKey: x(S),
      secretKey: S
    };
  }
  t.generateKeyPairFromSeed = T;
  function w(b) {
    const S = (0, e.randomBytes)(32, b), g = T(S);
    return (0, r.wipe)(S), g;
  }
  t.generateKeyPair = w;
  function D(b, S, g = !1) {
    if (b.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (S.length !== t.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const l = _(b, S);
    if (g) {
      let y = 0;
      for (let C = 0; C < l.length; C++)
        y |= l[C];
      if (y === 0)
        throw new Error("X25519: invalid shared key");
    }
    return l;
  }
  t.sharedKey = D;
})(Rc);
var tl = function(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, s = e.length, i; n < s; n++)
      (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}, Nv = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, n) {
      this.name = e, this.version = r, this.os = n, this.type = "browser";
    }
    return t;
  }()
), Lv = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return t;
  }()
), Fv = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e, r, n, s) {
      this.name = e, this.version = r, this.os = n, this.bot = s, this.type = "bot-device";
    }
    return t;
  }()
), Uv = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return t;
  }()
), Mv = (
  /** @class */
  /* @__PURE__ */ function() {
    function t() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return t;
  }()
), jv = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, $v = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, rl = 3, kv = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", jv]
], nl = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function qv(t) {
  return t ? sl(t) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new Mv() : typeof navigator < "u" ? sl(navigator.userAgent) : Vv();
}
function zv(t) {
  return t !== "" && kv.reduce(function(e, r) {
    var n = r[0], s = r[1];
    if (e)
      return e;
    var i = s.exec(t);
    return !!i && [n, i];
  }, !1);
}
function sl(t) {
  var e = zv(t);
  if (!e)
    return null;
  var r = e[0], n = e[1];
  if (r === "searchbot")
    return new Uv();
  var s = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  s ? s.length < rl && (s = tl(tl([], s, !0), Kv(rl - s.length), !0)) : s = [];
  var i = s.join("."), a = Bv(t), o = $v.exec(t);
  return o && o[1] ? new Fv(r, i, a, o[1]) : new Nv(r, i, a);
}
function Bv(t) {
  for (var e = 0, r = nl.length; e < r; e++) {
    var n = nl[e], s = n[0], i = n[1], a = i.exec(t);
    if (a)
      return s;
  }
  return null;
}
function Vv() {
  var t = typeof process < "u" && process.version;
  return t ? new Lv(process.version.slice(1)) : null;
}
function Kv(t) {
  for (var e = [], r = 0; r < t; r++)
    e.push("0");
  return e;
}
var Ge = {};
Object.defineProperty(Ge, "__esModule", { value: !0 });
Ge.getLocalStorage = Ge.getLocalStorageOrThrow = Ge.getCrypto = Ge.getCryptoOrThrow = _h = Ge.getLocation = Ge.getLocationOrThrow = Ac = Ge.getNavigator = Ge.getNavigatorOrThrow = Tc = Ge.getDocument = Ge.getDocumentOrThrow = Ge.getFromWindowOrThrow = Ge.getFromWindow = void 0;
function kn(t) {
  let e;
  return typeof window < "u" && typeof window[t] < "u" && (e = window[t]), e;
}
Ge.getFromWindow = kn;
function vs(t) {
  const e = kn(t);
  if (!e)
    throw new Error(`${t} is not defined in Window`);
  return e;
}
Ge.getFromWindowOrThrow = vs;
function Hv() {
  return vs("document");
}
Ge.getDocumentOrThrow = Hv;
function Wv() {
  return kn("document");
}
var Tc = Ge.getDocument = Wv;
function Gv() {
  return vs("navigator");
}
Ge.getNavigatorOrThrow = Gv;
function Qv() {
  return kn("navigator");
}
var Ac = Ge.getNavigator = Qv;
function Zv() {
  return vs("location");
}
Ge.getLocationOrThrow = Zv;
function Yv() {
  return kn("location");
}
var _h = Ge.getLocation = Yv;
function Jv() {
  return vs("crypto");
}
Ge.getCryptoOrThrow = Jv;
function Xv() {
  return kn("crypto");
}
Ge.getCrypto = Xv;
function e0() {
  return vs("localStorage");
}
Ge.getLocalStorageOrThrow = e0;
function t0() {
  return kn("localStorage");
}
Ge.getLocalStorage = t0;
var Pc = {};
Object.defineProperty(Pc, "__esModule", { value: !0 });
var Eh = Pc.getWindowMetadata = void 0;
const il = Ge;
function r0() {
  let t, e;
  try {
    t = il.getDocumentOrThrow(), e = il.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const d = t.getElementsByTagName("link"), p = [];
    for (let m = 0; m < d.length; m++) {
      const v = d[m], _ = v.getAttribute("rel");
      if (_ && _.toLowerCase().indexOf("icon") > -1) {
        const x = v.getAttribute("href");
        if (x)
          if (x.toLowerCase().indexOf("https:") === -1 && x.toLowerCase().indexOf("http:") === -1 && x.indexOf("//") !== 0) {
            let T = e.protocol + "//" + e.host;
            if (x.indexOf("/") === 0)
              T += x;
            else {
              const w = e.pathname.split("/");
              w.pop();
              const D = w.join("/");
              T += D + "/" + x;
            }
            p.push(T);
          } else if (x.indexOf("//") === 0) {
            const T = e.protocol + x;
            p.push(T);
          } else
            p.push(x);
      }
    }
    return p;
  }
  function n(...d) {
    const p = t.getElementsByTagName("meta");
    for (let m = 0; m < p.length; m++) {
      const v = p[m], _ = ["itemprop", "property", "name"].map((x) => v.getAttribute(x)).filter((x) => x ? d.includes(x) : !1);
      if (_.length && _) {
        const x = v.getAttribute("content");
        if (x)
          return x;
      }
    }
    return "";
  }
  function s() {
    let d = n("name", "og:site_name", "og:title", "twitter:title");
    return d || (d = t.title), d;
  }
  function i() {
    return n("description", "og:description", "twitter:description", "keywords");
  }
  const a = s(), o = i(), u = e.origin, c = r();
  return {
    description: o,
    url: u,
    icons: c,
    name: a
  };
}
Eh = Pc.getWindowMetadata = r0;
var zs = {}, n0 = (t) => encodeURIComponent(t).replace(/[!'()*]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`), Sh = "%[a-f0-9]{2}", ol = new RegExp("(" + Sh + ")|([^%]+?)", "gi"), al = new RegExp("(" + Sh + ")+", "gi");
function ja(t, e) {
  try {
    return [decodeURIComponent(t.join(""))];
  } catch {
  }
  if (t.length === 1)
    return t;
  e = e || 1;
  var r = t.slice(0, e), n = t.slice(e);
  return Array.prototype.concat.call([], ja(r), ja(n));
}
function s0(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    for (var e = t.match(ol) || [], r = 1; r < e.length; r++)
      t = ja(e, r).join(""), e = t.match(ol) || [];
    return t;
  }
}
function i0(t) {
  for (var e = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = al.exec(t); r; ) {
    try {
      e[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = s0(r[0]);
      n !== r[0] && (e[r[0]] = n);
    }
    r = al.exec(t);
  }
  e["%C2"] = "�";
  for (var s = Object.keys(e), i = 0; i < s.length; i++) {
    var a = s[i];
    t = t.replace(new RegExp(a, "g"), e[a]);
  }
  return t;
}
var o0 = function(t) {
  if (typeof t != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof t + "`");
  try {
    return t = t.replace(/\+/g, " "), decodeURIComponent(t);
  } catch {
    return i0(t);
  }
}, a0 = (t, e) => {
  if (!(typeof t == "string" && typeof e == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (e === "")
    return [t];
  const r = t.indexOf(e);
  return r === -1 ? [t] : [
    t.slice(0, r),
    t.slice(r + e.length)
  ];
}, c0 = function(t, e) {
  for (var r = {}, n = Object.keys(t), s = Array.isArray(e), i = 0; i < n.length; i++) {
    var a = n[i], o = t[a];
    (s ? e.indexOf(a) !== -1 : e(a, o, t)) && (r[a] = o);
  }
  return r;
};
(function(t) {
  const e = n0, r = o0, n = a0, s = c0, i = (w) => w == null, a = Symbol("encodeFragmentIdentifier");
  function o(w) {
    switch (w.arrayFormat) {
      case "index":
        return (D) => (b, S) => {
          const g = b.length;
          return S === void 0 || w.skipNull && S === null || w.skipEmptyString && S === "" ? b : S === null ? [...b, [f(D, w), "[", g, "]"].join("")] : [
            ...b,
            [f(D, w), "[", f(g, w), "]=", f(S, w)].join("")
          ];
        };
      case "bracket":
        return (D) => (b, S) => S === void 0 || w.skipNull && S === null || w.skipEmptyString && S === "" ? b : S === null ? [...b, [f(D, w), "[]"].join("")] : [...b, [f(D, w), "[]=", f(S, w)].join("")];
      case "colon-list-separator":
        return (D) => (b, S) => S === void 0 || w.skipNull && S === null || w.skipEmptyString && S === "" ? b : S === null ? [...b, [f(D, w), ":list="].join("")] : [...b, [f(D, w), ":list=", f(S, w)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const D = w.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (b) => (S, g) => g === void 0 || w.skipNull && g === null || w.skipEmptyString && g === "" ? S : (g = g === null ? "" : g, S.length === 0 ? [[f(b, w), D, f(g, w)].join("")] : [[S, f(g, w)].join(w.arrayFormatSeparator)]);
      }
      default:
        return (D) => (b, S) => S === void 0 || w.skipNull && S === null || w.skipEmptyString && S === "" ? b : S === null ? [...b, f(D, w)] : [...b, [f(D, w), "=", f(S, w)].join("")];
    }
  }
  function u(w) {
    let D;
    switch (w.arrayFormat) {
      case "index":
        return (b, S, g) => {
          if (D = /\[(\d*)\]$/.exec(b), b = b.replace(/\[\d*\]$/, ""), !D) {
            g[b] = S;
            return;
          }
          g[b] === void 0 && (g[b] = {}), g[b][D[1]] = S;
        };
      case "bracket":
        return (b, S, g) => {
          if (D = /(\[\])$/.exec(b), b = b.replace(/\[\]$/, ""), !D) {
            g[b] = S;
            return;
          }
          if (g[b] === void 0) {
            g[b] = [S];
            return;
          }
          g[b] = [].concat(g[b], S);
        };
      case "colon-list-separator":
        return (b, S, g) => {
          if (D = /(:list)$/.exec(b), b = b.replace(/:list$/, ""), !D) {
            g[b] = S;
            return;
          }
          if (g[b] === void 0) {
            g[b] = [S];
            return;
          }
          g[b] = [].concat(g[b], S);
        };
      case "comma":
      case "separator":
        return (b, S, g) => {
          const l = typeof S == "string" && S.includes(w.arrayFormatSeparator), y = typeof S == "string" && !l && d(S, w).includes(w.arrayFormatSeparator);
          S = y ? d(S, w) : S;
          const C = l || y ? S.split(w.arrayFormatSeparator).map((A) => d(A, w)) : S === null ? S : d(S, w);
          g[b] = C;
        };
      case "bracket-separator":
        return (b, S, g) => {
          const l = /(\[\])$/.test(b);
          if (b = b.replace(/\[\]$/, ""), !l) {
            g[b] = S && d(S, w);
            return;
          }
          const y = S === null ? [] : S.split(w.arrayFormatSeparator).map((C) => d(C, w));
          if (g[b] === void 0) {
            g[b] = y;
            return;
          }
          g[b] = [].concat(g[b], y);
        };
      default:
        return (b, S, g) => {
          if (g[b] === void 0) {
            g[b] = S;
            return;
          }
          g[b] = [].concat(g[b], S);
        };
    }
  }
  function c(w) {
    if (typeof w != "string" || w.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function f(w, D) {
    return D.encode ? D.strict ? e(w) : encodeURIComponent(w) : w;
  }
  function d(w, D) {
    return D.decode ? r(w) : w;
  }
  function p(w) {
    return Array.isArray(w) ? w.sort() : typeof w == "object" ? p(Object.keys(w)).sort((D, b) => Number(D) - Number(b)).map((D) => w[D]) : w;
  }
  function m(w) {
    const D = w.indexOf("#");
    return D !== -1 && (w = w.slice(0, D)), w;
  }
  function v(w) {
    let D = "";
    const b = w.indexOf("#");
    return b !== -1 && (D = w.slice(b)), D;
  }
  function _(w) {
    w = m(w);
    const D = w.indexOf("?");
    return D === -1 ? "" : w.slice(D + 1);
  }
  function x(w, D) {
    return D.parseNumbers && !Number.isNaN(Number(w)) && typeof w == "string" && w.trim() !== "" ? w = Number(w) : D.parseBooleans && w !== null && (w.toLowerCase() === "true" || w.toLowerCase() === "false") && (w = w.toLowerCase() === "true"), w;
  }
  function T(w, D) {
    D = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, D), c(D.arrayFormatSeparator);
    const b = u(D), S = /* @__PURE__ */ Object.create(null);
    if (typeof w != "string" || (w = w.trim().replace(/^[?#&]/, ""), !w))
      return S;
    for (const g of w.split("&")) {
      if (g === "")
        continue;
      let [l, y] = n(D.decode ? g.replace(/\+/g, " ") : g, "=");
      y = y === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(D.arrayFormat) ? y : d(y, D), b(d(l, D), y, S);
    }
    for (const g of Object.keys(S)) {
      const l = S[g];
      if (typeof l == "object" && l !== null)
        for (const y of Object.keys(l))
          l[y] = x(l[y], D);
      else
        S[g] = x(l, D);
    }
    return D.sort === !1 ? S : (D.sort === !0 ? Object.keys(S).sort() : Object.keys(S).sort(D.sort)).reduce((g, l) => {
      const y = S[l];
      return y && typeof y == "object" && !Array.isArray(y) ? g[l] = p(y) : g[l] = y, g;
    }, /* @__PURE__ */ Object.create(null));
  }
  t.extract = _, t.parse = T, t.stringify = (w, D) => {
    if (!w)
      return "";
    D = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, D), c(D.arrayFormatSeparator);
    const b = (y) => D.skipNull && i(w[y]) || D.skipEmptyString && w[y] === "", S = o(D), g = {};
    for (const y of Object.keys(w))
      b(y) || (g[y] = w[y]);
    const l = Object.keys(g);
    return D.sort !== !1 && l.sort(D.sort), l.map((y) => {
      const C = w[y];
      return C === void 0 ? "" : C === null ? f(y, D) : Array.isArray(C) ? C.length === 0 && D.arrayFormat === "bracket-separator" ? f(y, D) + "[]" : C.reduce(S(y), []).join("&") : f(y, D) + "=" + f(C, D);
    }).filter((y) => y.length > 0).join("&");
  }, t.parseUrl = (w, D) => {
    D = Object.assign({
      decode: !0
    }, D);
    const [b, S] = n(w, "#");
    return Object.assign(
      {
        url: b.split("?")[0] || "",
        query: T(_(w), D)
      },
      D && D.parseFragmentIdentifier && S ? { fragmentIdentifier: d(S, D) } : {}
    );
  }, t.stringifyUrl = (w, D) => {
    D = Object.assign({
      encode: !0,
      strict: !0,
      [a]: !0
    }, D);
    const b = m(w.url).split("?")[0] || "", S = t.extract(w.url), g = t.parse(S, { sort: !1 }), l = Object.assign(g, w.query);
    let y = t.stringify(l, D);
    y && (y = `?${y}`);
    let C = v(w.url);
    return w.fragmentIdentifier && (C = `#${D[a] ? f(w.fragmentIdentifier, D) : w.fragmentIdentifier}`), `${b}${y}${C}`;
  }, t.pick = (w, D, b) => {
    b = Object.assign({
      parseFragmentIdentifier: !0,
      [a]: !1
    }, b);
    const { url: S, query: g, fragmentIdentifier: l } = t.parseUrl(w, b);
    return t.stringifyUrl({
      url: S,
      query: s(g, D),
      fragmentIdentifier: l
    }, b);
  }, t.exclude = (w, D, b) => {
    const S = Array.isArray(D) ? (g) => !D.includes(g) : (g, l) => !D(g, l);
    return t.pick(w, S, b);
  };
})(zs);
const u0 = {
  waku: {
    publish: "waku_publish",
    batchPublish: "waku_batchPublish",
    subscribe: "waku_subscribe",
    batchSubscribe: "waku_batchSubscribe",
    subscription: "waku_subscription",
    unsubscribe: "waku_unsubscribe",
    batchUnsubscribe: "waku_batchUnsubscribe"
  },
  irn: {
    publish: "irn_publish",
    batchPublish: "irn_batchPublish",
    subscribe: "irn_subscribe",
    batchSubscribe: "irn_batchSubscribe",
    subscription: "irn_subscription",
    unsubscribe: "irn_unsubscribe",
    batchUnsubscribe: "irn_batchUnsubscribe"
  },
  iridium: {
    publish: "iridium_publish",
    batchPublish: "iridium_batchPublish",
    subscribe: "iridium_subscribe",
    batchSubscribe: "iridium_batchSubscribe",
    subscription: "iridium_subscription",
    unsubscribe: "iridium_unsubscribe",
    batchUnsubscribe: "iridium_batchUnsubscribe"
  }
};
function xh(t, e) {
  return t.includes(":") ? [t] : e.chains || [];
}
const Dh = "base10", Qt = "base16", $a = "base64pad", Nc = "utf8", Oh = 0, qn = 1, l0 = 0, cl = 1, ka = 12, Lc = 32;
function f0() {
  const t = Rc.generateKeyPair();
  return { privateKey: Zt(t.secretKey, Qt), publicKey: Zt(t.publicKey, Qt) };
}
function qa() {
  const t = ms.randomBytes(Lc);
  return Zt(t, Qt);
}
function h0(t, e) {
  const r = Rc.sharedKey(tr(t, Qt), tr(e, Qt), !0), n = new Pv(Uo.SHA256, r).expand(Lc);
  return Zt(n, Qt);
}
function d0(t) {
  const e = Uo.hash(tr(t, Qt));
  return Zt(e, Qt);
}
function ts(t) {
  const e = Uo.hash(tr(t, Nc));
  return Zt(e, Qt);
}
function p0(t) {
  return tr(`${t}`, Dh);
}
function bi(t) {
  return Number(Zt(t, Dh));
}
function g0(t) {
  const e = p0(typeof t.type < "u" ? t.type : Oh);
  if (bi(e) === qn && typeof t.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof t.senderPublicKey < "u" ? tr(t.senderPublicKey, Qt) : void 0, n = typeof t.iv < "u" ? tr(t.iv, Qt) : ms.randomBytes(ka), s = new Ic.ChaCha20Poly1305(tr(t.symKey, Qt)).seal(n, tr(t.message, Nc));
  return m0({ type: e, sealed: s, iv: n, senderPublicKey: r });
}
function y0(t) {
  const e = new Ic.ChaCha20Poly1305(tr(t.symKey, Qt)), { sealed: r, iv: n } = oo(t.encoded), s = e.open(n, r);
  if (s === null)
    throw new Error("Failed to decrypt");
  return Zt(s, Nc);
}
function m0(t) {
  if (bi(t.type) === qn) {
    if (typeof t.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return Zt(Ua([t.type, t.senderPublicKey, t.iv, t.sealed]), $a);
  }
  return Zt(Ua([t.type, t.iv, t.sealed]), $a);
}
function oo(t) {
  const e = tr(t, $a), r = e.slice(l0, cl), n = cl;
  if (bi(r) === qn) {
    const o = n + Lc, u = o + ka, c = e.slice(n, o), f = e.slice(o, u), d = e.slice(u);
    return { type: r, sealed: d, iv: f, senderPublicKey: c };
  }
  const s = n + ka, i = e.slice(n, s), a = e.slice(s);
  return { type: r, sealed: a, iv: i };
}
function v0(t, e) {
  const r = oo(t);
  return Ih({ type: bi(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? Zt(r.senderPublicKey, Qt) : void 0, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey });
}
function Ih(t) {
  const e = (t == null ? void 0 : t.type) || Oh;
  if (e === qn) {
    if (typeof (t == null ? void 0 : t.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (t == null ? void 0 : t.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: e, senderPublicKey: t == null ? void 0 : t.senderPublicKey, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey };
}
function ul(t) {
  return t.type === qn && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
var b0 = Object.defineProperty, ll = Object.getOwnPropertySymbols, w0 = Object.prototype.hasOwnProperty, _0 = Object.prototype.propertyIsEnumerable, fl = (t, e, r) => e in t ? b0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, hl = (t, e) => {
  for (var r in e || (e = {}))
    w0.call(e, r) && fl(t, r, e[r]);
  if (ll)
    for (var r of ll(e))
      _0.call(e, r) && fl(t, r, e[r]);
  return t;
};
const E0 = "ReactNative", ar = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, S0 = "js";
function Fc() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function bs() {
  return !Tc() && !!Ac() && navigator.product === E0;
}
function ws() {
  return !Fc() && !!Ac() && !!Tc();
}
function wi() {
  return bs() ? ar.reactNative : Fc() ? ar.node : ws() ? ar.browser : ar.unknown;
}
function x0() {
  var t;
  try {
    return bs() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0;
  } catch {
    return;
  }
}
function D0(t, e) {
  let r = zs.parse(t);
  return r = hl(hl({}, r), e), t = zs.stringify(r), t;
}
function O0() {
  return Eh() || { name: "", description: "", url: "", icons: [""] };
}
function I0() {
  if (wi() === ar.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: n } = global.Platform;
    return [r, n].join("-");
  }
  const t = qv();
  if (t === null)
    return "unknown";
  const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e, t.name, t.version].join("-") : [e, t.version].join("-");
}
function C0() {
  var t;
  const e = wi();
  return e === ar.browser ? [e, ((t = _h()) == null ? void 0 : t.host) || "unknown"].join(":") : e;
}
function R0(t, e, r) {
  const n = I0(), s = C0();
  return [[t, e].join("-"), [S0, r].join("-"), n, s].join("/");
}
function T0({ protocol: t, version: e, relayUrl: r, sdkVersion: n, auth: s, projectId: i, useOnCloseEvent: a, bundleId: o }) {
  const u = r.split("?"), c = R0(t, e, n), f = { auth: s, ua: c, projectId: i, useOnCloseEvent: a || void 0, origin: o || void 0 }, d = D0(u[1] || "", f);
  return u[0] + "?" + d;
}
function Rn(t, e) {
  return t.filter((r) => e.includes(r)).length === t.length;
}
function Ch(t) {
  return Object.fromEntries(t.entries());
}
function Rh(t) {
  return new Map(Object.entries(t));
}
function Wn(t = se.FIVE_MINUTES, e) {
  const r = se.toMiliseconds(t || se.FIVE_MINUTES);
  let n, s, i;
  return { resolve: (a) => {
    i && n && (clearTimeout(i), n(a));
  }, reject: (a) => {
    i && s && (clearTimeout(i), s(a));
  }, done: () => new Promise((a, o) => {
    i = setTimeout(() => {
      o(new Error(e));
    }, r), n = a, s = o;
  }) };
}
function Bs(t, e, r) {
  return new Promise(async (n, s) => {
    const i = setTimeout(() => s(new Error(r)), e);
    try {
      const a = await t;
      n(a);
    } catch (a) {
      s(a);
    }
    clearTimeout(i);
  });
}
function Th(t, e) {
  if (typeof e == "string" && e.startsWith(`${t}:`))
    return e;
  if (t.toLowerCase() === "topic") {
    if (typeof e != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (t.toLowerCase() === "id") {
    if (typeof e != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${t}`);
}
function A0(t) {
  return Th("topic", t);
}
function P0(t) {
  return Th("id", t);
}
function Ah(t) {
  const [e, r] = t.split(":"), n = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof r == "string")
    n.topic = r;
  else if (e === "id" && Number.isInteger(Number(r)))
    n.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
  return n;
}
function or(t, e) {
  return se.fromMiliseconds((e || Date.now()) + se.toMiliseconds(t));
}
function on(t) {
  return Date.now() >= se.toMiliseconds(t);
}
function pt(t, e) {
  return `${t}${e ? `:${e}` : ""}`;
}
async function N0({ id: t, topic: e, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const n = typeof r == "string" ? JSON.parse(r) : r;
    let s = n == null ? void 0 : n.href;
    if (typeof s != "string")
      return;
    s.endsWith("/") && (s = s.slice(0, -1));
    const i = `${s}/wc?requestId=${t}&sessionTopic=${e}`, a = wi();
    a === ar.browser ? i.startsWith("https://") ? window.open(i, "_blank", "noreferrer noopener") : window.open(i, "_self", "noreferrer noopener") : a === ar.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(i);
  } catch (n) {
    console.error(n);
  }
}
async function L0(t, e) {
  try {
    return await t.getItem(e) || (ws() ? localStorage.getItem(e) : void 0);
  } catch (r) {
    console.error(r);
  }
}
const F0 = "irn";
function za(t) {
  return (t == null ? void 0 : t.relay) || { protocol: F0 };
}
function Ji(t) {
  const e = u0[t];
  if (typeof e > "u")
    throw new Error(`Relay Protocol not supported: ${t}`);
  return e;
}
var U0 = Object.defineProperty, M0 = Object.defineProperties, j0 = Object.getOwnPropertyDescriptors, dl = Object.getOwnPropertySymbols, $0 = Object.prototype.hasOwnProperty, k0 = Object.prototype.propertyIsEnumerable, pl = (t, e, r) => e in t ? U0(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, q0 = (t, e) => {
  for (var r in e || (e = {}))
    $0.call(e, r) && pl(t, r, e[r]);
  if (dl)
    for (var r of dl(e))
      k0.call(e, r) && pl(t, r, e[r]);
  return t;
}, z0 = (t, e) => M0(t, j0(e));
function B0(t, e = "-") {
  const r = {}, n = "relay" + e;
  return Object.keys(t).forEach((s) => {
    if (s.startsWith(n)) {
      const i = s.replace(n, ""), a = t[s];
      r[i] = a;
    }
  }), r;
}
function gl(t) {
  t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
  const e = t.indexOf(":"), r = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, n = t.substring(0, e), s = t.substring(e + 1, r).split("@"), i = typeof r < "u" ? t.substring(r) : "", a = zs.parse(i);
  return { protocol: n, topic: V0(s[0]), version: parseInt(s[1], 10), symKey: a.symKey, relay: B0(a), expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0 };
}
function V0(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function K0(t, e = "-") {
  const r = "relay", n = {};
  return Object.keys(t).forEach((s) => {
    const i = r + e + s;
    t[s] && (n[i] = t[s]);
  }), n;
}
function H0(t) {
  return `${t.protocol}:${t.topic}@${t.version}?` + zs.stringify(z0(q0({ symKey: t.symKey }, K0(t.relay)), { expiryTimestamp: t.expiryTimestamp }));
}
function _s(t) {
  const e = [];
  return t.forEach((r) => {
    const [n, s] = r.split(":");
    e.push(`${n}:${s}`);
  }), e;
}
function W0(t) {
  const e = [];
  return Object.values(t).forEach((r) => {
    e.push(..._s(r.accounts));
  }), e;
}
function G0(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    _s(n.accounts).includes(e) && r.push(...n.methods);
  }), r;
}
function Q0(t, e) {
  const r = [];
  return Object.values(t).forEach((n) => {
    _s(n.accounts).includes(e) && r.push(...n.events);
  }), r;
}
const Z0 = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, Y0 = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function Y(t, e) {
  const { message: r, code: n } = Y0[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function gt(t, e) {
  const { message: r, code: n } = Z0[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
function _i(t, e) {
  return Array.isArray(t) ? typeof e < "u" && t.length ? t.every(e) : !0 : !1;
}
function ao(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function Ht(t) {
  return typeof t > "u";
}
function Ot(t, e) {
  return e && Ht(t) ? !0 : typeof t == "string" && !!t.trim().length;
}
function Uc(t, e) {
  return e && Ht(t) ? !0 : typeof t == "number" && !isNaN(t);
}
function J0(t, e) {
  const { requiredNamespaces: r } = e, n = Object.keys(t.namespaces), s = Object.keys(r);
  let i = !0;
  return Rn(s, n) ? (n.forEach((a) => {
    const { accounts: o, methods: u, events: c } = t.namespaces[a], f = _s(o), d = r[a];
    (!Rn(xh(a, d), f) || !Rn(d.methods, u) || !Rn(d.events, c)) && (i = !1);
  }), i) : !1;
}
function co(t) {
  return Ot(t, !1) && t.includes(":") ? t.split(":").length === 2 : !1;
}
function X0(t) {
  if (Ot(t, !1) && t.includes(":")) {
    const e = t.split(":");
    if (e.length === 3) {
      const r = e[0] + ":" + e[1];
      return !!e[2] && co(r);
    }
  }
  return !1;
}
function eb(t) {
  if (Ot(t, !1))
    try {
      return typeof new URL(t) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function tb(t) {
  var e;
  return (e = t == null ? void 0 : t.proposer) == null ? void 0 : e.publicKey;
}
function rb(t) {
  return t == null ? void 0 : t.topic;
}
function nb(t, e) {
  let r = null;
  return Ot(t == null ? void 0 : t.publicKey, !1) || (r = Y("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
}
function yl(t) {
  let e = !0;
  return _i(t) ? t.length && (e = t.every((r) => Ot(r, !1))) : e = !1, e;
}
function sb(t, e, r) {
  let n = null;
  return _i(e) && e.length ? e.forEach((s) => {
    n || co(s) || (n = gt("UNSUPPORTED_CHAINS", `${r}, chain ${s} should be a string and conform to "namespace:chainId" format`));
  }) : co(t) || (n = gt("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), n;
}
function ib(t, e, r) {
  let n = null;
  return Object.entries(t).forEach(([s, i]) => {
    if (n)
      return;
    const a = sb(s, xh(s, i), `${e} ${r}`);
    a && (n = a);
  }), n;
}
function ob(t, e) {
  let r = null;
  return _i(t) ? t.forEach((n) => {
    r || X0(n) || (r = gt("UNSUPPORTED_ACCOUNTS", `${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = gt("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function ab(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const s = ob(n == null ? void 0 : n.accounts, `${e} namespace`);
    s && (r = s);
  }), r;
}
function cb(t, e) {
  let r = null;
  return yl(t == null ? void 0 : t.methods) ? yl(t == null ? void 0 : t.events) || (r = gt("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = gt("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), r;
}
function Ph(t, e) {
  let r = null;
  return Object.values(t).forEach((n) => {
    if (r)
      return;
    const s = cb(n, `${e}, namespace`);
    s && (r = s);
  }), r;
}
function ub(t, e, r) {
  let n = null;
  if (t && ao(t)) {
    const s = Ph(t, e);
    s && (n = s);
    const i = ib(t, e, r);
    i && (n = i);
  } else
    n = Y("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
  return n;
}
function ca(t, e) {
  let r = null;
  if (t && ao(t)) {
    const n = Ph(t, e);
    n && (r = n);
    const s = ab(t, e);
    s && (r = s);
  } else
    r = Y("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
  return r;
}
function Nh(t) {
  return Ot(t.protocol, !0);
}
function lb(t, e) {
  let r = !1;
  return e && !t ? r = !0 : t && _i(t) && t.length && t.forEach((n) => {
    r = Nh(n);
  }), r;
}
function fb(t) {
  return typeof t == "number";
}
function er(t) {
  return typeof t < "u" && typeof t !== null;
}
function hb(t) {
  return !(!t || typeof t != "object" || !t.code || !Uc(t.code, !1) || !t.message || !Ot(t.message, !1));
}
function db(t) {
  return !(Ht(t) || !Ot(t.method, !1));
}
function pb(t) {
  return !(Ht(t) || Ht(t.result) && Ht(t.error) || !Uc(t.id, !1) || !Ot(t.jsonrpc, !1));
}
function gb(t) {
  return !(Ht(t) || !Ot(t.name, !1));
}
function ml(t, e) {
  return !(!co(e) || !W0(t).includes(e));
}
function yb(t, e, r) {
  return Ot(r, !1) ? G0(t, e).includes(r) : !1;
}
function mb(t, e, r) {
  return Ot(r, !1) ? Q0(t, e).includes(r) : !1;
}
function vl(t, e, r) {
  let n = null;
  const s = vb(t), i = bb(e), a = Object.keys(s), o = Object.keys(i), u = bl(Object.keys(t)), c = bl(Object.keys(e)), f = u.filter((d) => !c.includes(d));
  return f.length && (n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${f.toString()}
      Received: ${Object.keys(e).toString()}`)), Rn(a, o) || (n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${a.toString()}
      Approved: ${o.toString()}`)), Object.keys(e).forEach((d) => {
    if (!d.includes(":") || n)
      return;
    const p = _s(e[d].accounts);
    p.includes(d) || (n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${d}
        Required: ${d}
        Approved: ${p.toString()}`));
  }), a.forEach((d) => {
    n || (Rn(s[d].methods, i[d].methods) ? Rn(s[d].events, i[d].events) || (n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${d}`)) : n = Y("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${d}`));
  }), n;
}
function vb(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    var n;
    r.includes(":") ? e[r] = t[r] : (n = t[r].chains) == null || n.forEach((s) => {
      e[s] = { methods: t[r].methods, events: t[r].events };
    });
  }), e;
}
function bl(t) {
  return [...new Set(t.map((e) => e.includes(":") ? e.split(":")[0] : e))];
}
function bb(t) {
  const e = {};
  return Object.keys(t).forEach((r) => {
    if (r.includes(":"))
      e[r] = t[r];
    else {
      const n = _s(t[r].accounts);
      n == null || n.forEach((s) => {
        e[s] = { accounts: t[r].accounts.filter((i) => i.includes(`${s}:`)), methods: t[r].methods, events: t[r].events };
      });
    }
  }), e;
}
function wb(t, e) {
  return Uc(t, !1) && t <= e.max && t >= e.min;
}
function wl() {
  const t = wi();
  return new Promise((e) => {
    switch (t) {
      case ar.browser:
        e(_b());
        break;
      case ar.reactNative:
        e(Eb());
        break;
      case ar.node:
        e(Sb());
        break;
      default:
        e(!0);
    }
  });
}
function _b() {
  return ws() && (navigator == null ? void 0 : navigator.onLine);
}
async function Eb() {
  if (bs() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t == null ? void 0 : t.isConnected;
  }
  return !0;
}
function Sb() {
  return !0;
}
function xb(t) {
  switch (wi()) {
    case ar.browser:
      Db(t);
      break;
    case ar.reactNative:
      Ob(t);
      break;
  }
}
function Db(t) {
  !bs() && ws() && (window.addEventListener("online", () => t(!0)), window.addEventListener("offline", () => t(!1)));
}
function Ob(t) {
  bs() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener((e) => t(e == null ? void 0 : e.isConnected)));
}
const ua = {};
let qi = class {
  static get(e) {
    return ua[e];
  }
  static set(e, r) {
    ua[e] = r;
  }
  static delete(e) {
    delete ua[e];
  }
};
const Ib = "PARSE_ERROR", Cb = "INVALID_REQUEST", Rb = "METHOD_NOT_FOUND", Tb = "INVALID_PARAMS", Lh = "INTERNAL_ERROR", Mc = "SERVER_ERROR", Ab = [-32700, -32600, -32601, -32602, -32603], $s = {
  [Ib]: { code: -32700, message: "Parse error" },
  [Cb]: { code: -32600, message: "Invalid Request" },
  [Rb]: { code: -32601, message: "Method not found" },
  [Tb]: { code: -32602, message: "Invalid params" },
  [Lh]: { code: -32603, message: "Internal error" },
  [Mc]: { code: -32e3, message: "Server error" }
}, Fh = Mc;
function Pb(t) {
  return Ab.includes(t);
}
function _l(t) {
  return Object.keys($s).includes(t) ? $s[t] : $s[Fh];
}
function Nb(t) {
  const e = Object.values($s).find((r) => r.code === t);
  return e || $s[Fh];
}
function Lb(t, e, r) {
  return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
}
var Uh = {}, zr = {}, El;
function Fb() {
  if (El)
    return zr;
  El = 1, Object.defineProperty(zr, "__esModule", { value: !0 }), zr.isBrowserCryptoAvailable = zr.getSubtleCrypto = zr.getBrowerCrypto = void 0;
  function t() {
    return (Ur == null ? void 0 : Ur.crypto) || (Ur == null ? void 0 : Ur.msCrypto) || {};
  }
  zr.getBrowerCrypto = t;
  function e() {
    const n = t();
    return n.subtle || n.webkitSubtle;
  }
  zr.getSubtleCrypto = e;
  function r() {
    return !!t() && !!e();
  }
  return zr.isBrowserCryptoAvailable = r, zr;
}
var Br = {}, Sl;
function Ub() {
  if (Sl)
    return Br;
  Sl = 1, Object.defineProperty(Br, "__esModule", { value: !0 }), Br.isBrowser = Br.isNode = Br.isReactNative = void 0;
  function t() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  Br.isReactNative = t;
  function e() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  Br.isNode = e;
  function r() {
    return !t() && !e();
  }
  return Br.isBrowser = r, Br;
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = kr;
  e.__exportStar(Fb(), t), e.__exportStar(Ub(), t);
})(Uh);
function jc(t = 3) {
  const e = Date.now() * Math.pow(10, t), r = Math.floor(Math.random() * Math.pow(10, t));
  return e + r;
}
function Mh(t = 6) {
  return BigInt(jc(t));
}
function rs(t, e, r) {
  return {
    id: r || jc(),
    jsonrpc: "2.0",
    method: t,
    params: e
  };
}
function $c(t, e) {
  return {
    id: t,
    jsonrpc: "2.0",
    result: e
  };
}
function kc(t, e, r) {
  return {
    id: t,
    jsonrpc: "2.0",
    error: Mb(e, r)
  };
}
function Mb(t, e) {
  return typeof t > "u" ? _l(Lh) : (typeof t == "string" && (t = Object.assign(Object.assign({}, _l(Mc)), { message: t })), typeof e < "u" && (t.data = e), Pb(t.code) && (t = Nb(t.code)), t);
}
class jb {
}
class $b extends jb {
  constructor() {
    super();
  }
}
class kb extends $b {
  constructor(e) {
    super();
  }
}
const qb = "^wss?:";
function zb(t) {
  const e = t.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length))
    return e[0];
}
function Bb(t, e) {
  const r = zb(t);
  return typeof r > "u" ? !1 : new RegExp(e).test(r);
}
function xl(t) {
  return Bb(t, qb);
}
function Vb(t) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(t);
}
function jh(t) {
  return typeof t == "object" && "id" in t && "jsonrpc" in t && t.jsonrpc === "2.0";
}
function qc(t) {
  return jh(t) && "method" in t;
}
function Mo(t) {
  return jh(t) && (Wr(t) || Er(t));
}
function Wr(t) {
  return "result" in t;
}
function Er(t) {
  return "error" in t;
}
class Kb extends kb {
  constructor(e) {
    super(e), this.events = new mr.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners();
  }
  async connect(e = this.connection) {
    await this.open(e);
  }
  async disconnect() {
    await this.close();
  }
  on(e, r) {
    this.events.on(e, r);
  }
  once(e, r) {
    this.events.once(e, r);
  }
  off(e, r) {
    this.events.off(e, r);
  }
  removeListener(e, r) {
    this.events.removeListener(e, r);
  }
  async request(e, r) {
    return this.requestStrict(rs(e.method, e.params || [], e.id || Mh().toString()), r);
  }
  async requestStrict(e, r) {
    return new Promise(async (n, s) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (i) {
          s(i);
        }
      this.events.on(`${e.id}`, (i) => {
        Er(i) ? s(i.error) : n(i.result);
      });
      try {
        await this.connection.send(e, r);
      } catch (i) {
        s(i);
      }
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e), Mo(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
      type: e.method,
      data: e.params
    });
  }
  onClose(e) {
    e && e.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason ? `(${e.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(e = this.connection) {
    this.connection === e && this.connection.connected || (this.connection.connected && this.close(), typeof e == "string" && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (e) => this.onPayload(e)), this.connection.on("close", (e) => this.onClose(e)), this.connection.on("error", (e) => this.events.emit("error", e)), this.connection.on("register_error", (e) => this.onClose()), this.hasRegisteredEventListeners = !0);
  }
}
const Hb = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), Wb = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", Dl = (t) => t.split("?")[0], Ol = 10, Gb = Hb();
class Qb {
  constructor(e) {
    if (this.url = e, this.events = new mr.EventEmitter(), this.registering = !1, !xl(e))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    this.url = e;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e, r) {
    this.events.on(e, r);
  }
  once(e, r) {
    this.events.once(e, r);
  }
  off(e, r) {
    this.events.off(e, r);
  }
  removeListener(e, r) {
    this.events.removeListener(e, r);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    return new Promise((e, r) => {
      if (typeof this.socket > "u") {
        r(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (n) => {
        this.onClose(n), e();
      }, this.socket.close();
    });
  }
  async send(e) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(yi(e));
    } catch (r) {
      this.onError(e.id, r);
    }
  }
  register(e = this.url) {
    if (!xl(e))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((n, s) => {
        this.events.once("register_error", (i) => {
          this.resetMaxListeners(), s(i);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u")
            return s(new Error("WebSocket connection is missing or invalid"));
          n(this.socket);
        });
      });
    }
    return this.url = e, this.registering = !0, new Promise((r, n) => {
      const s = new URLSearchParams(e).get("origin"), i = Uh.isReactNative() ? { headers: { origin: s } } : { rejectUnauthorized: !Vb(e) }, a = new Gb(e, [], i);
      Wb() ? a.onerror = (o) => {
        const u = o;
        n(this.emitError(u.error));
      } : a.on("error", (o) => {
        n(this.emitError(o));
      }), a.onopen = () => {
        this.onOpen(a), r(a);
      };
    });
  }
  onOpen(e) {
    e.onmessage = (r) => this.onPayload(r), e.onclose = (r) => this.onClose(r), this.socket = e, this.registering = !1, this.events.emit("open");
  }
  onClose(e) {
    this.socket = void 0, this.registering = !1, this.events.emit("close", e);
  }
  onPayload(e) {
    if (typeof e.data > "u")
      return;
    const r = typeof e.data == "string" ? To(e.data) : e.data;
    this.events.emit("payload", r);
  }
  onError(e, r) {
    const n = this.parseError(r), s = n.message || n.toString(), i = kc(e, s);
    this.events.emit("payload", i);
  }
  parseError(e, r = this.url) {
    return Lb(e, Dl(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Ol && this.events.setMaxListeners(Ol);
  }
  emitError(e) {
    const r = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${Dl(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var uo = { exports: {} };
uo.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", s = 1, i = 2, a = 9007199254740991, o = "[object Arguments]", u = "[object Array]", c = "[object AsyncFunction]", f = "[object Boolean]", d = "[object Date]", p = "[object Error]", m = "[object Function]", v = "[object GeneratorFunction]", _ = "[object Map]", x = "[object Number]", T = "[object Null]", w = "[object Object]", D = "[object Promise]", b = "[object Proxy]", S = "[object RegExp]", g = "[object Set]", l = "[object String]", y = "[object Symbol]", C = "[object Undefined]", A = "[object WeakMap]", M = "[object ArrayBuffer]", z = "[object DataView]", G = "[object Float32Array]", R = "[object Float64Array]", L = "[object Int8Array]", Q = "[object Int16Array]", V = "[object Int32Array]", k = "[object Uint8Array]", B = "[object Uint8ClampedArray]", $ = "[object Uint16Array]", K = "[object Uint32Array]", fe = /[\\^$.*+?()[\]{}|]/g, H = /^\[object .+?Constructor\]$/, ae = /^(?:0|[1-9]\d*)$/, te = {};
  te[G] = te[R] = te[L] = te[Q] = te[V] = te[k] = te[B] = te[$] = te[K] = !0, te[o] = te[u] = te[M] = te[f] = te[z] = te[d] = te[p] = te[m] = te[_] = te[x] = te[w] = te[S] = te[g] = te[l] = te[A] = !1;
  var oe = typeof Ur == "object" && Ur && Ur.Object === Object && Ur, U = typeof self == "object" && self && self.Object === Object && self, F = oe || U || Function("return this")(), P = e && !e.nodeType && e, h = P && !0 && t && !t.nodeType && t, I = h && h.exports === P, Z = I && oe.process, X = function() {
    try {
      return Z && Z.binding && Z.binding("util");
    } catch {
    }
  }(), Oe = X && X.isTypedArray;
  function Ie(E, N) {
    for (var q = -1, ne = E == null ? 0 : E.length, Ye = 0, ve = []; ++q < ne; ) {
      var lt = E[q];
      N(lt, q, E) && (ve[Ye++] = lt);
    }
    return ve;
  }
  function we(E, N) {
    for (var q = -1, ne = N.length, Ye = E.length; ++q < ne; )
      E[Ye + q] = N[q];
    return E;
  }
  function Fe(E, N) {
    for (var q = -1, ne = E == null ? 0 : E.length; ++q < ne; )
      if (N(E[q], q, E))
        return !0;
    return !1;
  }
  function Je(E, N) {
    for (var q = -1, ne = Array(E); ++q < E; )
      ne[q] = N(q);
    return ne;
  }
  function He(E) {
    return function(N) {
      return E(N);
    };
  }
  function Ne(E, N) {
    return E.has(N);
  }
  function Te(E, N) {
    return E == null ? void 0 : E[N];
  }
  function _e(E) {
    var N = -1, q = Array(E.size);
    return E.forEach(function(ne, Ye) {
      q[++N] = [Ye, ne];
    }), q;
  }
  function Se(E, N) {
    return function(q) {
      return E(N(q));
    };
  }
  function Ee(E) {
    var N = -1, q = Array(E.size);
    return E.forEach(function(ne) {
      q[++N] = ne;
    }), q;
  }
  var ge = Array.prototype, pe = Function.prototype, ce = Object.prototype, xe = F["__core-js_shared__"], Ce = pe.toString, he = ce.hasOwnProperty, Ae = function() {
    var E = /[^.]+$/.exec(xe && xe.keys && xe.keys.IE_PROTO || "");
    return E ? "Symbol(src)_1." + E : "";
  }(), Ue = ce.toString, ke = RegExp(
    "^" + Ce.call(he).replace(fe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), qe = I ? F.Buffer : void 0, je = F.Symbol, nr = F.Uint8Array, lr = ce.propertyIsEnumerable, Rr = ge.splice, Ct = je ? je.toStringTag : void 0, Tr = Object.getOwnPropertySymbols, fr = qe ? qe.isBuffer : void 0, Xr = Se(Object.keys, Object), Xe = zn(F, "DataView"), Qe = zn(F, "Map"), ot = zn(F, "Promise"), rt = zn(F, "Set"), at = zn(F, "WeakMap"), Ze = zn(Object, "create"), ft = vn(Xe), yt = vn(Qe), mt = vn(ot), ht = vn(rt), vt = vn(at), dt = je ? je.prototype : void 0, ct = dt ? dt.valueOf : void 0;
  function We(E) {
    var N = -1, q = E == null ? 0 : E.length;
    for (this.clear(); ++N < q; ) {
      var ne = E[N];
      this.set(ne[0], ne[1]);
    }
  }
  function O() {
    this.__data__ = Ze ? Ze(null) : {}, this.size = 0;
  }
  function j(E) {
    var N = this.has(E) && delete this.__data__[E];
    return this.size -= N ? 1 : 0, N;
  }
  function J(E) {
    var N = this.__data__;
    if (Ze) {
      var q = N[E];
      return q === n ? void 0 : q;
    }
    return he.call(N, E) ? N[E] : void 0;
  }
  function ue(E) {
    var N = this.__data__;
    return Ze ? N[E] !== void 0 : he.call(N, E);
  }
  function $e(E, N) {
    var q = this.__data__;
    return this.size += this.has(E) ? 0 : 1, q[E] = Ze && N === void 0 ? n : N, this;
  }
  We.prototype.clear = O, We.prototype.delete = j, We.prototype.get = J, We.prototype.has = ue, We.prototype.set = $e;
  function Pe(E) {
    var N = -1, q = E == null ? 0 : E.length;
    for (this.clear(); ++N < q; ) {
      var ne = E[N];
      this.set(ne[0], ne[1]);
    }
  }
  function Le() {
    this.__data__ = [], this.size = 0;
  }
  function Re(E) {
    var N = this.__data__, q = Ai(N, E);
    if (q < 0)
      return !1;
    var ne = N.length - 1;
    return q == ne ? N.pop() : Rr.call(N, q, 1), --this.size, !0;
  }
  function Rt(E) {
    var N = this.__data__, q = Ai(N, E);
    return q < 0 ? void 0 : N[q][1];
  }
  function nt(E) {
    return Ai(this.__data__, E) > -1;
  }
  function ut(E, N) {
    var q = this.__data__, ne = Ai(q, E);
    return ne < 0 ? (++this.size, q.push([E, N])) : q[ne][1] = N, this;
  }
  Pe.prototype.clear = Le, Pe.prototype.delete = Re, Pe.prototype.get = Rt, Pe.prototype.has = nt, Pe.prototype.set = ut;
  function bt(E) {
    var N = -1, q = E == null ? 0 : E.length;
    for (this.clear(); ++N < q; ) {
      var ne = E[N];
      this.set(ne[0], ne[1]);
    }
  }
  function en() {
    this.size = 0, this.__data__ = {
      hash: new We(),
      map: new (Qe || Pe)(),
      string: new We()
    };
  }
  function Ri(E) {
    var N = Pi(this, E).delete(E);
    return this.size -= N ? 1 : 0, N;
  }
  function br(E) {
    return Pi(this, E).get(E);
  }
  function rp(E) {
    return Pi(this, E).has(E);
  }
  function np(E, N) {
    var q = Pi(this, E), ne = q.size;
    return q.set(E, N), this.size += q.size == ne ? 0 : 1, this;
  }
  bt.prototype.clear = en, bt.prototype.delete = Ri, bt.prototype.get = br, bt.prototype.has = rp, bt.prototype.set = np;
  function Ti(E) {
    var N = -1, q = E == null ? 0 : E.length;
    for (this.__data__ = new bt(); ++N < q; )
      this.add(E[N]);
  }
  function sp(E) {
    return this.__data__.set(E, n), this;
  }
  function ip(E) {
    return this.__data__.has(E);
  }
  Ti.prototype.add = Ti.prototype.push = sp, Ti.prototype.has = ip;
  function tn(E) {
    var N = this.__data__ = new Pe(E);
    this.size = N.size;
  }
  function op() {
    this.__data__ = new Pe(), this.size = 0;
  }
  function ap(E) {
    var N = this.__data__, q = N.delete(E);
    return this.size = N.size, q;
  }
  function cp(E) {
    return this.__data__.get(E);
  }
  function up(E) {
    return this.__data__.has(E);
  }
  function lp(E, N) {
    var q = this.__data__;
    if (q instanceof Pe) {
      var ne = q.__data__;
      if (!Qe || ne.length < r - 1)
        return ne.push([E, N]), this.size = ++q.size, this;
      q = this.__data__ = new bt(ne);
    }
    return q.set(E, N), this.size = q.size, this;
  }
  tn.prototype.clear = op, tn.prototype.delete = ap, tn.prototype.get = cp, tn.prototype.has = up, tn.prototype.set = lp;
  function fp(E, N) {
    var q = Ni(E), ne = !q && Op(E), Ye = !q && !ne && Go(E), ve = !q && !ne && !Ye && fu(E), lt = q || ne || Ye || ve, Et = lt ? Je(E.length, String) : [], Tt = Et.length;
    for (var st in E)
      (N || he.call(E, st)) && !(lt && // Safari 9 has enumerable `arguments.length` in strict mode.
      (st == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Ye && (st == "offset" || st == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      ve && (st == "buffer" || st == "byteLength" || st == "byteOffset") || // Skip index properties.
      _p(st, Tt))) && Et.push(st);
    return Et;
  }
  function Ai(E, N) {
    for (var q = E.length; q--; )
      if (au(E[q][0], N))
        return q;
    return -1;
  }
  function hp(E, N, q) {
    var ne = N(E);
    return Ni(E) ? ne : we(ne, q(E));
  }
  function Ss(E) {
    return E == null ? E === void 0 ? C : T : Ct && Ct in Object(E) ? bp(E) : Dp(E);
  }
  function nu(E) {
    return xs(E) && Ss(E) == o;
  }
  function su(E, N, q, ne, Ye) {
    return E === N ? !0 : E == null || N == null || !xs(E) && !xs(N) ? E !== E && N !== N : dp(E, N, q, ne, su, Ye);
  }
  function dp(E, N, q, ne, Ye, ve) {
    var lt = Ni(E), Et = Ni(N), Tt = lt ? u : rn(E), st = Et ? u : rn(N);
    Tt = Tt == o ? w : Tt, st = st == o ? w : st;
    var sr = Tt == w, wr = st == w, Lt = Tt == st;
    if (Lt && Go(E)) {
      if (!Go(N))
        return !1;
      lt = !0, sr = !1;
    }
    if (Lt && !sr)
      return ve || (ve = new tn()), lt || fu(E) ? iu(E, N, q, ne, Ye, ve) : mp(E, N, Tt, q, ne, Ye, ve);
    if (!(q & s)) {
      var hr = sr && he.call(E, "__wrapped__"), dr = wr && he.call(N, "__wrapped__");
      if (hr || dr) {
        var nn = hr ? E.value() : E, qr = dr ? N.value() : N;
        return ve || (ve = new tn()), Ye(nn, qr, q, ne, ve);
      }
    }
    return Lt ? (ve || (ve = new tn()), vp(E, N, q, ne, Ye, ve)) : !1;
  }
  function pp(E) {
    if (!lu(E) || Sp(E))
      return !1;
    var N = cu(E) ? ke : H;
    return N.test(vn(E));
  }
  function gp(E) {
    return xs(E) && uu(E.length) && !!te[Ss(E)];
  }
  function yp(E) {
    if (!xp(E))
      return Xr(E);
    var N = [];
    for (var q in Object(E))
      he.call(E, q) && q != "constructor" && N.push(q);
    return N;
  }
  function iu(E, N, q, ne, Ye, ve) {
    var lt = q & s, Et = E.length, Tt = N.length;
    if (Et != Tt && !(lt && Tt > Et))
      return !1;
    var st = ve.get(E);
    if (st && ve.get(N))
      return st == N;
    var sr = -1, wr = !0, Lt = q & i ? new Ti() : void 0;
    for (ve.set(E, N), ve.set(N, E); ++sr < Et; ) {
      var hr = E[sr], dr = N[sr];
      if (ne)
        var nn = lt ? ne(dr, hr, sr, N, E, ve) : ne(hr, dr, sr, E, N, ve);
      if (nn !== void 0) {
        if (nn)
          continue;
        wr = !1;
        break;
      }
      if (Lt) {
        if (!Fe(N, function(qr, bn) {
          if (!Ne(Lt, bn) && (hr === qr || Ye(hr, qr, q, ne, ve)))
            return Lt.push(bn);
        })) {
          wr = !1;
          break;
        }
      } else if (!(hr === dr || Ye(hr, dr, q, ne, ve))) {
        wr = !1;
        break;
      }
    }
    return ve.delete(E), ve.delete(N), wr;
  }
  function mp(E, N, q, ne, Ye, ve, lt) {
    switch (q) {
      case z:
        if (E.byteLength != N.byteLength || E.byteOffset != N.byteOffset)
          return !1;
        E = E.buffer, N = N.buffer;
      case M:
        return !(E.byteLength != N.byteLength || !ve(new nr(E), new nr(N)));
      case f:
      case d:
      case x:
        return au(+E, +N);
      case p:
        return E.name == N.name && E.message == N.message;
      case S:
      case l:
        return E == N + "";
      case _:
        var Et = _e;
      case g:
        var Tt = ne & s;
        if (Et || (Et = Ee), E.size != N.size && !Tt)
          return !1;
        var st = lt.get(E);
        if (st)
          return st == N;
        ne |= i, lt.set(E, N);
        var sr = iu(Et(E), Et(N), ne, Ye, ve, lt);
        return lt.delete(E), sr;
      case y:
        if (ct)
          return ct.call(E) == ct.call(N);
    }
    return !1;
  }
  function vp(E, N, q, ne, Ye, ve) {
    var lt = q & s, Et = ou(E), Tt = Et.length, st = ou(N), sr = st.length;
    if (Tt != sr && !lt)
      return !1;
    for (var wr = Tt; wr--; ) {
      var Lt = Et[wr];
      if (!(lt ? Lt in N : he.call(N, Lt)))
        return !1;
    }
    var hr = ve.get(E);
    if (hr && ve.get(N))
      return hr == N;
    var dr = !0;
    ve.set(E, N), ve.set(N, E);
    for (var nn = lt; ++wr < Tt; ) {
      Lt = Et[wr];
      var qr = E[Lt], bn = N[Lt];
      if (ne)
        var hu = lt ? ne(bn, qr, Lt, N, E, ve) : ne(qr, bn, Lt, E, N, ve);
      if (!(hu === void 0 ? qr === bn || Ye(qr, bn, q, ne, ve) : hu)) {
        dr = !1;
        break;
      }
      nn || (nn = Lt == "constructor");
    }
    if (dr && !nn) {
      var Li = E.constructor, Fi = N.constructor;
      Li != Fi && "constructor" in E && "constructor" in N && !(typeof Li == "function" && Li instanceof Li && typeof Fi == "function" && Fi instanceof Fi) && (dr = !1);
    }
    return ve.delete(E), ve.delete(N), dr;
  }
  function ou(E) {
    return hp(E, Rp, wp);
  }
  function Pi(E, N) {
    var q = E.__data__;
    return Ep(N) ? q[typeof N == "string" ? "string" : "hash"] : q.map;
  }
  function zn(E, N) {
    var q = Te(E, N);
    return pp(q) ? q : void 0;
  }
  function bp(E) {
    var N = he.call(E, Ct), q = E[Ct];
    try {
      E[Ct] = void 0;
      var ne = !0;
    } catch {
    }
    var Ye = Ue.call(E);
    return ne && (N ? E[Ct] = q : delete E[Ct]), Ye;
  }
  var wp = Tr ? function(E) {
    return E == null ? [] : (E = Object(E), Ie(Tr(E), function(N) {
      return lr.call(E, N);
    }));
  } : Tp, rn = Ss;
  (Xe && rn(new Xe(new ArrayBuffer(1))) != z || Qe && rn(new Qe()) != _ || ot && rn(ot.resolve()) != D || rt && rn(new rt()) != g || at && rn(new at()) != A) && (rn = function(E) {
    var N = Ss(E), q = N == w ? E.constructor : void 0, ne = q ? vn(q) : "";
    if (ne)
      switch (ne) {
        case ft:
          return z;
        case yt:
          return _;
        case mt:
          return D;
        case ht:
          return g;
        case vt:
          return A;
      }
    return N;
  });
  function _p(E, N) {
    return N = N ?? a, !!N && (typeof E == "number" || ae.test(E)) && E > -1 && E % 1 == 0 && E < N;
  }
  function Ep(E) {
    var N = typeof E;
    return N == "string" || N == "number" || N == "symbol" || N == "boolean" ? E !== "__proto__" : E === null;
  }
  function Sp(E) {
    return !!Ae && Ae in E;
  }
  function xp(E) {
    var N = E && E.constructor, q = typeof N == "function" && N.prototype || ce;
    return E === q;
  }
  function Dp(E) {
    return Ue.call(E);
  }
  function vn(E) {
    if (E != null) {
      try {
        return Ce.call(E);
      } catch {
      }
      try {
        return E + "";
      } catch {
      }
    }
    return "";
  }
  function au(E, N) {
    return E === N || E !== E && N !== N;
  }
  var Op = nu(/* @__PURE__ */ function() {
    return arguments;
  }()) ? nu : function(E) {
    return xs(E) && he.call(E, "callee") && !lr.call(E, "callee");
  }, Ni = Array.isArray;
  function Ip(E) {
    return E != null && uu(E.length) && !cu(E);
  }
  var Go = fr || Ap;
  function Cp(E, N) {
    return su(E, N);
  }
  function cu(E) {
    if (!lu(E))
      return !1;
    var N = Ss(E);
    return N == m || N == v || N == c || N == b;
  }
  function uu(E) {
    return typeof E == "number" && E > -1 && E % 1 == 0 && E <= a;
  }
  function lu(E) {
    var N = typeof E;
    return E != null && (N == "object" || N == "function");
  }
  function xs(E) {
    return E != null && typeof E == "object";
  }
  var fu = Oe ? He(Oe) : gp;
  function Rp(E) {
    return Ip(E) ? fp(E) : yp(E);
  }
  function Tp() {
    return [];
  }
  function Ap() {
    return !1;
  }
  t.exports = Cp;
})(uo, uo.exports);
var Zb = uo.exports;
const Yb = /* @__PURE__ */ di(Zb);
function Jb(t, e) {
  return e = e || {}, new Promise(function(r, n) {
    var s = new XMLHttpRequest(), i = [], a = [], o = {}, u = function() {
      return { ok: (s.status / 100 | 0) == 2, statusText: s.statusText, status: s.status, url: s.responseURL, text: function() {
        return Promise.resolve(s.responseText);
      }, json: function() {
        return Promise.resolve(s.responseText).then(JSON.parse);
      }, blob: function() {
        return Promise.resolve(new Blob([s.response]));
      }, clone: u, headers: { keys: function() {
        return i;
      }, entries: function() {
        return a;
      }, get: function(f) {
        return o[f.toLowerCase()];
      }, has: function(f) {
        return f.toLowerCase() in o;
      } } };
    };
    for (var c in s.open(e.method || "get", t, !0), s.onload = function() {
      s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(f, d, p) {
        i.push(d = d.toLowerCase()), a.push([d, p]), o[d] = o[d] ? o[d] + "," + p : p;
      }), r(u());
    }, s.onerror = n, s.withCredentials = e.credentials == "include", e.headers)
      s.setRequestHeader(c, e.headers[c]);
    s.send(e.body || null);
  });
}
const Xb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jb
}, Symbol.toStringTag, { value: "Module" })), Il = /* @__PURE__ */ Co(Xb);
var ew = fetch || (self.fetch = Il.default || Il);
const tw = /* @__PURE__ */ di(ew);
function rw(t, e) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var s = 0; s < t.length; s++) {
    var i = t.charAt(s), a = i.charCodeAt(0);
    if (r[a] !== 255)
      throw new TypeError(i + " is ambiguous");
    r[a] = s;
  }
  var o = t.length, u = t.charAt(0), c = Math.log(o) / Math.log(256), f = Math.log(256) / Math.log(o);
  function d(v) {
    if (v instanceof Uint8Array || (ArrayBuffer.isView(v) ? v = new Uint8Array(v.buffer, v.byteOffset, v.byteLength) : Array.isArray(v) && (v = Uint8Array.from(v))), !(v instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (v.length === 0)
      return "";
    for (var _ = 0, x = 0, T = 0, w = v.length; T !== w && v[T] === 0; )
      T++, _++;
    for (var D = (w - T) * f + 1 >>> 0, b = new Uint8Array(D); T !== w; ) {
      for (var S = v[T], g = 0, l = D - 1; (S !== 0 || g < x) && l !== -1; l--, g++)
        S += 256 * b[l] >>> 0, b[l] = S % o >>> 0, S = S / o >>> 0;
      if (S !== 0)
        throw new Error("Non-zero carry");
      x = g, T++;
    }
    for (var y = D - x; y !== D && b[y] === 0; )
      y++;
    for (var C = u.repeat(_); y < D; ++y)
      C += t.charAt(b[y]);
    return C;
  }
  function p(v) {
    if (typeof v != "string")
      throw new TypeError("Expected String");
    if (v.length === 0)
      return new Uint8Array();
    var _ = 0;
    if (v[_] !== " ") {
      for (var x = 0, T = 0; v[_] === u; )
        x++, _++;
      for (var w = (v.length - _) * c + 1 >>> 0, D = new Uint8Array(w); v[_]; ) {
        var b = r[v.charCodeAt(_)];
        if (b === 255)
          return;
        for (var S = 0, g = w - 1; (b !== 0 || S < T) && g !== -1; g--, S++)
          b += o * D[g] >>> 0, D[g] = b % 256 >>> 0, b = b / 256 >>> 0;
        if (b !== 0)
          throw new Error("Non-zero carry");
        T = S, _++;
      }
      if (v[_] !== " ") {
        for (var l = w - T; l !== w && D[l] === 0; )
          l++;
        for (var y = new Uint8Array(x + (w - l)), C = x; l !== w; )
          y[C++] = D[l++];
        return y;
      }
    }
  }
  function m(v) {
    var _ = p(v);
    if (_)
      return _;
    throw new Error(`Non-${e} character`);
  }
  return { encode: d, decodeUnsafe: p, decode: m };
}
var nw = rw, sw = nw;
const $h = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array")
    return t;
  if (t instanceof ArrayBuffer)
    return new Uint8Array(t);
  if (ArrayBuffer.isView(t))
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
}, iw = (t) => new TextEncoder().encode(t), ow = (t) => new TextDecoder().decode(t);
class aw {
  constructor(e, r, n) {
    this.name = e, this.prefix = r, this.baseEncode = n;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class cw {
  constructor(e, r, n) {
    if (this.name = e, this.prefix = r, r.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = n;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return kh(this, e);
  }
}
class uw {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return kh(this, e);
  }
  decode(e) {
    const r = e[0], n = this.decoders[r];
    if (n)
      return n.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const kh = (t, e) => new uw({ ...t.decoders || { [t.prefix]: t }, ...e.decoders || { [e.prefix]: e } });
class lw {
  constructor(e, r, n, s) {
    this.name = e, this.prefix = r, this.baseEncode = n, this.baseDecode = s, this.encoder = new aw(e, r, n), this.decoder = new cw(e, r, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const jo = ({ name: t, prefix: e, encode: r, decode: n }) => new lw(t, e, r, n), Ei = ({ prefix: t, name: e, alphabet: r }) => {
  const { encode: n, decode: s } = sw(r, e);
  return jo({ prefix: t, name: e, encode: n, decode: (i) => $h(s(i)) });
}, fw = (t, e, r, n) => {
  const s = {};
  for (let f = 0; f < e.length; ++f)
    s[e[f]] = f;
  let i = t.length;
  for (; t[i - 1] === "="; )
    --i;
  const a = new Uint8Array(i * r / 8 | 0);
  let o = 0, u = 0, c = 0;
  for (let f = 0; f < i; ++f) {
    const d = s[t[f]];
    if (d === void 0)
      throw new SyntaxError(`Non-${n} character`);
    u = u << r | d, o += r, o >= 8 && (o -= 8, a[c++] = 255 & u >> o);
  }
  if (o >= r || 255 & u << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return a;
}, hw = (t, e, r) => {
  const n = e[e.length - 1] === "=", s = (1 << r) - 1;
  let i = "", a = 0, o = 0;
  for (let u = 0; u < t.length; ++u)
    for (o = o << 8 | t[u], a += 8; a > r; )
      a -= r, i += e[s & o >> a];
  if (a && (i += e[s & o << r - a]), n)
    for (; i.length * r & 7; )
      i += "=";
  return i;
}, Nt = ({ name: t, prefix: e, bitsPerChar: r, alphabet: n }) => jo({ prefix: e, name: t, encode(s) {
  return hw(s, n, r);
}, decode(s) {
  return fw(s, n, r, t);
} }), dw = jo({ prefix: "\0", name: "identity", encode: (t) => ow(t), decode: (t) => iw(t) });
var pw = Object.freeze({ __proto__: null, identity: dw });
const gw = Nt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var yw = Object.freeze({ __proto__: null, base2: gw });
const mw = Nt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var vw = Object.freeze({ __proto__: null, base8: mw });
const bw = Ei({ prefix: "9", name: "base10", alphabet: "0123456789" });
var ww = Object.freeze({ __proto__: null, base10: bw });
const _w = Nt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), Ew = Nt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Sw = Object.freeze({ __proto__: null, base16: _w, base16upper: Ew });
const xw = Nt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Dw = Nt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), Ow = Nt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Iw = Nt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Cw = Nt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Rw = Nt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), Tw = Nt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Aw = Nt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Pw = Nt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Nw = Object.freeze({ __proto__: null, base32: xw, base32upper: Dw, base32pad: Ow, base32padupper: Iw, base32hex: Cw, base32hexupper: Rw, base32hexpad: Tw, base32hexpadupper: Aw, base32z: Pw });
const Lw = Ei({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Fw = Ei({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Uw = Object.freeze({ __proto__: null, base36: Lw, base36upper: Fw });
const Mw = Ei({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), jw = Ei({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var $w = Object.freeze({ __proto__: null, base58btc: Mw, base58flickr: jw });
const kw = Nt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), qw = Nt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), zw = Nt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Bw = Nt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Vw = Object.freeze({ __proto__: null, base64: kw, base64pad: qw, base64url: zw, base64urlpad: Bw });
const qh = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Kw = qh.reduce((t, e, r) => (t[r] = e, t), []), Hw = qh.reduce((t, e, r) => (t[e.codePointAt(0)] = r, t), []);
function Ww(t) {
  return t.reduce((e, r) => (e += Kw[r], e), "");
}
function Gw(t) {
  const e = [];
  for (const r of t) {
    const n = Hw[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    e.push(n);
  }
  return new Uint8Array(e);
}
const Qw = jo({ prefix: "🚀", name: "base256emoji", encode: Ww, decode: Gw });
var Zw = Object.freeze({ __proto__: null, base256emoji: Qw }), Yw = zh, Cl = 128, Jw = 127, Xw = ~Jw, e_ = Math.pow(2, 31);
function zh(t, e, r) {
  e = e || [], r = r || 0;
  for (var n = r; t >= e_; )
    e[r++] = t & 255 | Cl, t /= 128;
  for (; t & Xw; )
    e[r++] = t & 255 | Cl, t >>>= 7;
  return e[r] = t | 0, zh.bytes = r - n + 1, e;
}
var t_ = Ba, r_ = 128, Rl = 127;
function Ba(t, n) {
  var r = 0, n = n || 0, s = 0, i = n, a, o = t.length;
  do {
    if (i >= o)
      throw Ba.bytes = 0, new RangeError("Could not decode varint");
    a = t[i++], r += s < 28 ? (a & Rl) << s : (a & Rl) * Math.pow(2, s), s += 7;
  } while (a >= r_);
  return Ba.bytes = i - n, r;
}
var n_ = Math.pow(2, 7), s_ = Math.pow(2, 14), i_ = Math.pow(2, 21), o_ = Math.pow(2, 28), a_ = Math.pow(2, 35), c_ = Math.pow(2, 42), u_ = Math.pow(2, 49), l_ = Math.pow(2, 56), f_ = Math.pow(2, 63), h_ = function(t) {
  return t < n_ ? 1 : t < s_ ? 2 : t < i_ ? 3 : t < o_ ? 4 : t < a_ ? 5 : t < c_ ? 6 : t < u_ ? 7 : t < l_ ? 8 : t < f_ ? 9 : 10;
}, d_ = { encode: Yw, decode: t_, encodingLength: h_ }, Bh = d_;
const Tl = (t, e, r = 0) => (Bh.encode(t, e, r), e), Al = (t) => Bh.encodingLength(t), Va = (t, e) => {
  const r = e.byteLength, n = Al(t), s = n + Al(r), i = new Uint8Array(s + r);
  return Tl(t, i, 0), Tl(r, i, n), i.set(e, s), new p_(t, r, e, i);
};
class p_ {
  constructor(e, r, n, s) {
    this.code = e, this.size = r, this.digest = n, this.bytes = s;
  }
}
const Vh = ({ name: t, code: e, encode: r }) => new g_(t, e, r);
class g_ {
  constructor(e, r, n) {
    this.name = e, this.code = r, this.encode = n;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const r = this.encode(e);
      return r instanceof Uint8Array ? Va(this.code, r) : r.then((n) => Va(this.code, n));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Kh = (t) => async (e) => new Uint8Array(await crypto.subtle.digest(t, e)), y_ = Vh({ name: "sha2-256", code: 18, encode: Kh("SHA-256") }), m_ = Vh({ name: "sha2-512", code: 19, encode: Kh("SHA-512") });
var v_ = Object.freeze({ __proto__: null, sha256: y_, sha512: m_ });
const Hh = 0, b_ = "identity", Wh = $h, w_ = (t) => Va(Hh, Wh(t)), __ = { code: Hh, name: b_, encode: Wh, digest: w_ };
var E_ = Object.freeze({ __proto__: null, identity: __ });
new TextEncoder(), new TextDecoder();
const Pl = { ...pw, ...yw, ...vw, ...ww, ...Sw, ...Nw, ...Uw, ...$w, ...Vw, ...Zw };
({ ...v_, ...E_ });
function Gh(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function S_(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Gh(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Qh(t, e, r, n) {
  return { name: t, prefix: e, encoder: { name: t, prefix: e, encode: r }, decoder: { decode: n } };
}
const Nl = Qh("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1))), la = Qh("ascii", "a", (t) => {
  let e = "a";
  for (let r = 0; r < t.length; r++)
    e += String.fromCharCode(t[r]);
  return e;
}, (t) => {
  t = t.substring(1);
  const e = S_(t.length);
  for (let r = 0; r < t.length; r++)
    e[r] = t.charCodeAt(r);
  return e;
}), x_ = { utf8: Nl, "utf-8": Nl, hex: Pl.base16, latin1: la, ascii: la, binary: la, ...Pl };
function D_(t, e = "utf8") {
  const r = x_[e];
  if (!r)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Gh(globalThis.Buffer.from(t, "utf-8")) : r.decoder.decode(`${r.prefix}${t}`);
}
const Zh = "wc", O_ = 2, zc = "core", ln = `${Zh}@2:${zc}:`, I_ = { name: zc, logger: "error" }, C_ = { database: ":memory:" }, R_ = "crypto", Ll = "client_ed25519_seed", T_ = se.ONE_DAY, A_ = "keychain", P_ = "0.3", N_ = "messages", L_ = "0.3", F_ = se.SIX_HOURS, U_ = "publisher", Yh = "irn", M_ = "error", Jh = "wss://relay.walletconnect.com", Fl = "wss://relay.walletconnect.org", j_ = "relayer", kt = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, $_ = "_subscription", Vr = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, k_ = se.ONE_SECOND, q_ = "2.11.1", z_ = 1e4, B_ = "0.3", V_ = "WALLETCONNECT_CLIENT_ID", _r = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, K_ = "subscription", H_ = "0.3", W_ = se.FIVE_SECONDS * 1e3, G_ = "pairing", Q_ = "0.3", Ts = { wc_pairingDelete: { req: { ttl: se.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: se.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: se.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: se.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: se.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: se.ONE_DAY, prompt: !1, tag: 0 } } }, Ls = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, Lr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, Z_ = "history", Y_ = "0.3", J_ = "expirer", pr = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, X_ = "0.3", fa = "verify-api", Zn = "https://verify.walletconnect.com", Ka = "https://verify.walletconnect.org", e1 = [Zn, Ka], t1 = "echo", r1 = "https://echo.walletconnect.com";
class n1 {
  constructor(e, r) {
    this.core = e, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = A_, this.version = P_, this.initialized = !1, this.storagePrefix = ln, this.init = async () => {
      if (!this.initialized) {
        const n = await this.getKeyChain();
        typeof n < "u" && (this.keychain = n), this.initialized = !0;
      }
    }, this.has = (n) => (this.isInitialized(), this.keychain.has(n)), this.set = async (n, s) => {
      this.isInitialized(), this.keychain.set(n, s), await this.persist();
    }, this.get = (n) => {
      this.isInitialized();
      const s = this.keychain.get(n);
      if (typeof s > "u") {
        const { message: i } = Y("NO_MATCHING_KEY", `${this.name}: ${n}`);
        throw new Error(i);
      }
      return s;
    }, this.del = async (n) => {
      this.isInitialized(), this.keychain.delete(n), await this.persist();
    }, this.core = e, this.logger = Me.generateChildLogger(r, this.name);
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Ch(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Rh(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class s1 {
  constructor(e, r, n) {
    this.core = e, this.logger = r, this.name = R_, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (s) => (this.isInitialized(), this.keychain.has(s)), this.getClientId = async () => {
      this.isInitialized();
      const s = await this.getClientSeed(), i = Ju(s);
      return gh(i.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s = f0();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }, this.signJWT = async (s) => {
      this.isInitialized();
      const i = await this.getClientSeed(), a = Ju(i), o = qa();
      return await bv(o, s, T_, a);
    }, this.generateSharedKey = (s, i, a) => {
      this.isInitialized();
      const o = this.getPrivateKey(s), u = h0(o, i);
      return this.setSymKey(u, a);
    }, this.setSymKey = async (s, i) => {
      this.isInitialized();
      const a = i || d0(s);
      return await this.keychain.set(a, s), a;
    }, this.deleteKeyPair = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.deleteSymKey = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.encode = async (s, i, a) => {
      this.isInitialized();
      const o = Ih(a), u = yi(i);
      if (ul(o)) {
        const p = o.senderPublicKey, m = o.receiverPublicKey;
        s = await this.generateSharedKey(p, m);
      }
      const c = this.getSymKey(s), { type: f, senderPublicKey: d } = o;
      return g0({ type: f, symKey: c, message: u, senderPublicKey: d });
    }, this.decode = async (s, i, a) => {
      this.isInitialized();
      const o = v0(i, a);
      if (ul(o)) {
        const u = o.receiverPublicKey, c = o.senderPublicKey;
        s = await this.generateSharedKey(u, c);
      }
      try {
        const u = this.getSymKey(s), c = y0({ symKey: u, encoded: i });
        return To(c);
      } catch (u) {
        this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(u);
      }
    }, this.getPayloadType = (s) => {
      const i = oo(s);
      return bi(i.type);
    }, this.getPayloadSenderPublicKey = (s) => {
      const i = oo(s);
      return i.senderPublicKey ? Zt(i.senderPublicKey, Qt) : void 0;
    }, this.core = e, this.logger = Me.generateChildLogger(r, this.name), this.keychain = n || new n1(this.core, this.logger);
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  async setPrivateKey(e, r) {
    return await this.keychain.set(e, r), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(Ll);
    } catch {
      e = qa(), await this.keychain.set(Ll, e);
    }
    return D_(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class i1 extends Sy {
  constructor(e, r) {
    super(e, r), this.logger = e, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = N_, this.version = L_, this.initialized = !1, this.storagePrefix = ln, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const n = await this.getRelayerMessages();
          typeof n < "u" && (this.messages = n), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (n) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(n);
        } finally {
          this.initialized = !0;
        }
      }
    }, this.set = async (n, s) => {
      this.isInitialized();
      const i = ts(s);
      let a = this.messages.get(n);
      return typeof a > "u" && (a = {}), typeof a[i] < "u" || (a[i] = s, this.messages.set(n, a), await this.persist()), i;
    }, this.get = (n) => {
      this.isInitialized();
      let s = this.messages.get(n);
      return typeof s > "u" && (s = {}), s;
    }, this.has = (n, s) => {
      this.isInitialized();
      const i = this.get(n), a = ts(s);
      return typeof i[a] < "u";
    }, this.del = async (n) => {
      this.isInitialized(), this.messages.delete(n), await this.persist();
    }, this.logger = Me.generateChildLogger(e, this.name), this.core = r;
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Ch(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Rh(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class o1 extends xy {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.events = new mr.EventEmitter(), this.name = U_, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = se.toMiliseconds(se.TEN_SECONDS * 2), this.needsTransportRestart = !1, this.publish = async (n, s, i) => {
      var a;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: s, opts: i } });
      try {
        const o = (i == null ? void 0 : i.ttl) || F_, u = za(i), c = (i == null ? void 0 : i.prompt) || !1, f = (i == null ? void 0 : i.tag) || 0, d = (i == null ? void 0 : i.id) || Mh().toString(), p = { topic: n, message: s, opts: { ttl: o, relay: u, prompt: c, tag: f, id: d } }, m = setTimeout(() => this.queue.set(d, p), this.publishTimeout);
        try {
          await await Bs(this.rpcPublish(n, s, o, u, c, f, d), this.publishTimeout, `Failed to publish payload, please try again. id:${d} tag:${f}`), this.removeRequestFromQueue(d), this.relayer.events.emit(kt.publish, p);
        } catch (v) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (a = i == null ? void 0 : i.internal) != null && a.throwOnFailedPublish)
            throw this.removeRequestFromQueue(d), v;
          return;
        } finally {
          clearTimeout(m);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: s, opts: i } });
      } catch (o) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(o), o;
      }
    }, this.on = (n, s) => {
      this.events.on(n, s);
    }, this.once = (n, s) => {
      this.events.once(n, s);
    }, this.off = (n, s) => {
      this.events.off(n, s);
    }, this.removeListener = (n, s) => {
      this.events.removeListener(n, s);
    }, this.relayer = e, this.logger = Me.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  rpcPublish(e, r, n, s, i, a, o) {
    var u, c, f, d;
    const p = { method: Ji(s.protocol).publish, params: { topic: e, message: r, ttl: n, prompt: i, tag: a }, id: o };
    return Ht((u = p.params) == null ? void 0 : u.prompt) && ((c = p.params) == null || delete c.prompt), Ht((f = p.params) == null ? void 0 : f.tag) && ((d = p.params) == null || delete d.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: p }), this.relayer.request(p);
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: r, message: n, opts: s } = e;
      await this.publish(r, n, s);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(ys.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(kt.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(kt.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
}
class a1 {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e, r) => {
      const n = this.get(e);
      this.exists(e, r) || this.map.set(e, [...n, r]);
    }, this.get = (e) => this.map.get(e) || [], this.exists = (e, r) => this.get(e).includes(r), this.delete = (e, r) => {
      if (typeof r > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e))
        return;
      const n = this.get(e);
      if (!this.exists(e, r))
        return;
      const s = n.filter((i) => i !== r);
      if (!s.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, s);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var c1 = Object.defineProperty, u1 = Object.defineProperties, l1 = Object.getOwnPropertyDescriptors, Ul = Object.getOwnPropertySymbols, f1 = Object.prototype.hasOwnProperty, h1 = Object.prototype.propertyIsEnumerable, Ml = (t, e, r) => e in t ? c1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, As = (t, e) => {
  for (var r in e || (e = {}))
    f1.call(e, r) && Ml(t, r, e[r]);
  if (Ul)
    for (var r of Ul(e))
      h1.call(e, r) && Ml(t, r, e[r]);
  return t;
}, ha = (t, e) => u1(t, l1(e));
class d1 extends Iy {
  constructor(e, r) {
    super(e, r), this.relayer = e, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new a1(), this.events = new mr.EventEmitter(), this.name = K_, this.version = H_, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = ln, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (n, s) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: s } });
      try {
        const i = za(s), a = { topic: n, relay: i };
        this.pending.set(n, a);
        const o = await this.rpcSubscribe(n, i);
        return this.onSubscribe(o, a), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: s } }), o;
      } catch (i) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(i), i;
      }
    }, this.unsubscribe = async (n, s) => {
      await this.restartToComplete(), this.isInitialized(), typeof (s == null ? void 0 : s.id) < "u" ? await this.unsubscribeById(n, s.id, s) : await this.unsubscribeByTopic(n, s);
    }, this.isSubscribed = async (n) => {
      if (this.topics.includes(n))
        return !0;
      const s = `${this.pendingSubscriptionWatchLabel}_${n}`;
      return await new Promise((i, a) => {
        const o = new se.Watch();
        o.start(s);
        const u = setInterval(() => {
          !this.pending.has(n) && this.topics.includes(n) && (clearInterval(u), o.stop(s), i(!0)), o.elapsed(s) >= W_ && (clearInterval(u), o.stop(s), a(new Error("Subscription resolution timeout")));
        }, this.pollingInterval);
      }).catch(() => !1);
    }, this.on = (n, s) => {
      this.events.on(n, s);
    }, this.once = (n, s) => {
      this.events.once(n, s);
    }, this.off = (n, s) => {
      this.events.off(n, s);
    }, this.removeListener = (n, s) => {
      this.events.removeListener(n, s);
    }, this.restart = async () => {
      this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
    }, this.relayer = e, this.logger = Me.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e, r) {
    let n = !1;
    try {
      n = this.getSubscription(e).topic === r;
    } catch {
    }
    return n;
  }
  onEnable() {
    this.cached = [], this.initialized = !0;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, r) {
    const n = this.topicMap.get(e);
    await Promise.all(n.map(async (s) => await this.unsubscribeById(e, s, r)));
  }
  async unsubscribeById(e, r, n) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: n } });
    try {
      const s = za(n);
      await this.rpcUnsubscribe(e, r, s);
      const i = gt("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, r, i), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: r, opts: n } });
    } catch (s) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
    }
  }
  async rpcSubscribe(e, r) {
    const n = { method: Ji(r.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      await await Bs(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(kt.connection_stalled);
    }
    return ts(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const r = e[0].relay, n = { method: Ji(r.protocol).batchSubscribe, params: { topics: e.map((s) => s.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      return await await Bs(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(kt.connection_stalled);
    }
  }
  rpcUnsubscribe(e, r, n) {
    const s = { method: Ji(n.protocol).unsubscribe, params: { topic: e, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s }), this.relayer.request(s);
  }
  onSubscribe(e, r) {
    this.setSubscription(e, ha(As({}, r), { id: e })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((r) => {
      this.setSubscription(r.id, As({}, r)), this.pending.delete(r.topic);
    });
  }
  async onUnsubscribe(e, r, n) {
    this.events.removeAllListeners(r), this.hasSubscription(r, e) && this.deleteSubscription(r, n), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, r) {
    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: r }), this.addSubscription(e, r));
  }
  addSubscription(e, r) {
    this.subscriptions.set(e, As({}, r)), this.topicMap.set(r.topic, e), this.events.emit(_r.created, r);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const r = this.subscriptions.get(e);
    if (!r) {
      const { message: n } = Y("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(n);
    }
    return r;
  }
  deleteSubscription(e, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: r });
    const n = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(_r.deleted, ha(As({}, n), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(_r.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < e; r++) {
        const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(n);
      }
    }
    this.events.emit(_r.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: r } = Y("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (!e.length)
      return;
    const r = await this.rpcBatchSubscribe(e);
    _i(r) && this.onBatchSubscribe(r.map((n, s) => ha(As({}, e[s]), { id: n })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || this.relayer.transportExplicitlyClosed)
      return;
    const e = [];
    this.pending.forEach((r) => {
      e.push(r);
    }), await this.batchSubscribe(e);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(ys.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(kt.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(kt.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(_r.created, async (e) => {
      const r = _r.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    }), this.events.on(_r.deleted, async (e) => {
      const r = _r.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((e) => {
      const r = setInterval(() => {
        this.restartInProgress || (clearInterval(r), e());
      }, this.pollingInterval);
    });
  }
}
var p1 = Object.defineProperty, jl = Object.getOwnPropertySymbols, g1 = Object.prototype.hasOwnProperty, y1 = Object.prototype.propertyIsEnumerable, $l = (t, e, r) => e in t ? p1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, m1 = (t, e) => {
  for (var r in e || (e = {}))
    g1.call(e, r) && $l(t, r, e[r]);
  if (jl)
    for (var r of jl(e))
      y1.call(e, r) && $l(t, r, e[r]);
  return t;
};
class v1 extends Dy {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new mr.EventEmitter(), this.name = j_, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = /* @__PURE__ */ new Map(), this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      const n = r.id, s = this.provider.request(r);
      this.requestsInFlight.set(n, { promise: s, request: r });
      try {
        return await this.toEstablishConnection(), await s;
      } catch (i) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(i), i;
      } finally {
        this.requestsInFlight.delete(n);
      }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r);
    }, this.onConnectHandler = () => {
      this.events.emit(kt.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(kt.error, r), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(Vr.payload, this.onPayloadHandler), this.provider.on(Vr.connect, this.onConnectHandler), this.provider.on(Vr.disconnect, this.onDisconnectHandler), this.provider.on(Vr.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? Me.generateChildLogger(e.logger, this.name) : Me.pino(Me.getDefaultLoggerOptions({ level: e.logger || M_ })), this.messages = new i1(this.logger, e.core), this.subscriber = new d1(this, this.logger), this.publisher = new o1(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || Jh, this.projectId = e.projectId, this.bundleId = x0(), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Fl}...`), await this.restartTransport(Fl);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, z_);
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(e, r, n) {
    this.isInitialized(), await this.publisher.publish(e, r, n), await this.recordMessageEvent({ topic: e, message: r, publishedAt: Date.now() });
  }
  async subscribe(e, r) {
    var n;
    this.isInitialized();
    let s = ((n = this.subscriber.topicMap.get(e)) == null ? void 0 : n[0]) || "";
    if (s)
      return s;
    let i;
    const a = (o) => {
      o.topic === e && (this.subscriber.off(_r.created, a), i());
    };
    return await Promise.all([new Promise((o) => {
      i = o, this.subscriber.on(_r.created, a);
    }), new Promise(async (o) => {
      s = await this.subscriber.subscribe(e, r), o();
    })]), s;
  }
  async unsubscribe(e, r) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, r);
  }
  on(e, r) {
    this.events.on(e, r);
  }
  once(e, r) {
    this.events.once(e, r);
  }
  off(e, r) {
    this.events.off(e, r);
  }
  removeListener(e, r) {
    this.events.removeListener(e, r);
  }
  async transportClose() {
    this.requestsInFlight.size > 0 && (this.logger.debug("Waiting for all in-flight requests to finish before closing transport..."), this.requestsInFlight.forEach(async (e) => {
      await e.promise;
    })), this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await Bs(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((r) => {
          if (!this.initialized)
            return r();
          this.subscriber.once(_r.resubscribed, () => {
            r();
          });
        }), new Promise(async (r, n) => {
          try {
            await Bs(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
          } catch (s) {
            n(s);
            return;
          }
          r();
        })]);
      } catch (r) {
        this.logger.error(r);
        const n = r;
        if (!this.isConnectionStalled(n.message))
          throw r;
        this.provider.events.emit(Vr.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await wl())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((r) => e.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new Kb(new Qb(T0({ sdkVersion: q_, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: !0, bundleId: this.bundleId }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: r, message: n } = e;
    await this.messages.set(r, n);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: r, message: n } = e;
    if (!n || n.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${n}`), !0;
    if (!await this.subscriber.isSubscribed(r))
      return this.logger.debug(`Ignoring message for non-subscribed topic ${r}`), !0;
    const s = this.messages.has(r, n);
    return s && this.logger.debug(`Ignoring duplicate message: ${n}`), s;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), qc(e)) {
      if (!e.method.endsWith($_))
        return;
      const r = e.params, { topic: n, message: s, publishedAt: i } = r.data, a = { topic: n, message: s, publishedAt: i };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(m1({ type: "event", event: r.id }, a)), this.events.emit(r.id, a), await this.acknowledgePayload(e), await this.onMessageEvent(a);
    } else
      Mo(e) && this.events.emit(kt.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(kt.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const r = $c(e.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(Vr.payload, this.onPayloadHandler), this.provider.off(Vr.connect, this.onConnectHandler), this.provider.off(Vr.disconnect, this.onDisconnectHandler), this.provider.off(Vr.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(kt.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let e = await wl();
    xb(async (r) => {
      this.initialized && e !== r && (e = r, r ? await this.restartTransport().catch((n) => this.logger.error(n)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((n) => this.logger.error(n))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(kt.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, se.toMiliseconds(k_)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
      if (this.connectionAttemptInProgress)
        return await new Promise((e) => {
          const r = setInterval(() => {
            this.connected && (clearInterval(r), e());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var b1 = Object.defineProperty, kl = Object.getOwnPropertySymbols, w1 = Object.prototype.hasOwnProperty, _1 = Object.prototype.propertyIsEnumerable, ql = (t, e, r) => e in t ? b1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, zl = (t, e) => {
  for (var r in e || (e = {}))
    w1.call(e, r) && ql(t, r, e[r]);
  if (kl)
    for (var r of kl(e))
      _1.call(e, r) && ql(t, r, e[r]);
  return t;
};
class $o extends Oy {
  constructor(e, r, n, s = ln, i = void 0) {
    super(e, r, n, s), this.core = e, this.logger = r, this.name = n, this.map = /* @__PURE__ */ new Map(), this.version = B_, this.cached = [], this.initialized = !1, this.storagePrefix = ln, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((a) => {
        this.getKey && a !== null && !Ht(a) ? this.map.set(this.getKey(a), a) : tb(a) ? this.map.set(a.id, a) : rb(a) && this.map.set(a.topic, a);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (a, o) => {
      this.isInitialized(), this.map.has(a) ? await this.update(a, o) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: a, value: o }), this.map.set(a, o), await this.persist());
    }, this.get = (a) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: a }), this.getData(a)), this.getAll = (a) => (this.isInitialized(), a ? this.values.filter((o) => Object.keys(a).every((u) => Yb(o[u], a[u]))) : this.values), this.update = async (a, o) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: a, update: o });
      const u = zl(zl({}, this.getData(a)), o);
      this.map.set(a, u), await this.persist();
    }, this.delete = async (a, o) => {
      this.isInitialized(), this.map.has(a) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: a, reason: o }), this.map.delete(a), await this.persist());
    }, this.logger = Me.generateChildLogger(r, this.name), this.storagePrefix = s, this.getKey = i;
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const r = this.map.get(e);
    if (!r) {
      const { message: n } = Y("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(n), new Error(n);
    }
    return r;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length)
        return;
      if (this.map.size) {
        const { message: r } = Y("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class E1 {
  constructor(e, r) {
    this.core = e, this.logger = r, this.name = G_, this.version = Q_, this.events = new pi(), this.initialized = !1, this.storagePrefix = ln, this.ignoredPayloadTypes = [qn], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: n }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...n])];
    }, this.create = async () => {
      this.isInitialized();
      const n = qa(), s = await this.core.crypto.setSymKey(n), i = or(se.FIVE_MINUTES), a = { protocol: Yh }, o = { topic: s, expiry: i, relay: a, active: !1 }, u = H0({ protocol: this.core.protocol, version: this.core.version, topic: s, symKey: n, relay: a, expiryTimestamp: i });
      return await this.pairings.set(s, o), await this.core.relayer.subscribe(s), this.core.expirer.set(s, i), { topic: s, uri: u };
    }, this.pair = async (n) => {
      this.isInitialized(), this.isValidPair(n);
      const { topic: s, symKey: i, relay: a, expiryTimestamp: o } = gl(n.uri);
      let u;
      if (this.pairings.keys.includes(s) && (u = this.pairings.get(s), u.active))
        throw new Error(`Pairing already exists: ${s}. Please try again with a new connection URI.`);
      const c = o || or(se.FIVE_MINUTES), f = { topic: s, relay: a, expiry: c, active: !1 };
      return await this.pairings.set(s, f), this.core.expirer.set(s, c), n.activatePairing && await this.activate({ topic: s }), this.events.emit(Ls.create, f), this.core.crypto.keychain.has(s) || (await this.core.crypto.setSymKey(i, s), await this.core.relayer.subscribe(s, { relay: a })), f;
    }, this.activate = async ({ topic: n }) => {
      this.isInitialized();
      const s = or(se.THIRTY_DAYS);
      await this.pairings.update(n, { active: !0, expiry: s }), this.core.expirer.set(n, s);
    }, this.ping = async (n) => {
      this.isInitialized(), await this.isValidPing(n);
      const { topic: s } = n;
      if (this.pairings.keys.includes(s)) {
        const i = await this.sendRequest(s, "wc_pairingPing", {}), { done: a, resolve: o, reject: u } = Wn();
        this.events.once(pt("pairing_ping", i), ({ error: c }) => {
          c ? u(c) : o();
        }), await a();
      }
    }, this.updateExpiry = async ({ topic: n, expiry: s }) => {
      this.isInitialized(), await this.pairings.update(n, { expiry: s });
    }, this.updateMetadata = async ({ topic: n, metadata: s }) => {
      this.isInitialized(), await this.pairings.update(n, { peerMetadata: s });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (n) => {
      this.isInitialized(), await this.isValidDisconnect(n);
      const { topic: s } = n;
      this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", gt("USER_DISCONNECTED")), await this.deletePairing(s));
    }, this.sendRequest = async (n, s, i) => {
      const a = rs(s, i), o = await this.core.crypto.encode(n, a), u = Ts[s].req;
      return this.core.history.set(n, a), this.core.relayer.publish(n, o, u), a.id;
    }, this.sendResult = async (n, s, i) => {
      const a = $c(n, i), o = await this.core.crypto.encode(s, a), u = await this.core.history.get(s, n), c = Ts[u.request.method].res;
      await this.core.relayer.publish(s, o, c), await this.core.history.resolve(a);
    }, this.sendError = async (n, s, i) => {
      const a = kc(n, i), o = await this.core.crypto.encode(s, a), u = await this.core.history.get(s, n), c = Ts[u.request.method] ? Ts[u.request.method].res : Ts.unregistered_method.res;
      await this.core.relayer.publish(s, o, c), await this.core.history.resolve(a);
    }, this.deletePairing = async (n, s) => {
      await this.core.relayer.unsubscribe(n), await Promise.all([this.pairings.delete(n, gt("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), s ? Promise.resolve() : this.core.expirer.del(n)]);
    }, this.cleanup = async () => {
      const n = this.pairings.getAll().filter((s) => on(s.expiry));
      await Promise.all(n.map((s) => this.deletePairing(s.topic)));
    }, this.onRelayEventRequest = (n) => {
      const { topic: s, payload: i } = n;
      switch (i.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(s, i);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(s, i);
        default:
          return this.onUnknownRpcMethodRequest(s, i);
      }
    }, this.onRelayEventResponse = async (n) => {
      const { topic: s, payload: i } = n, a = (await this.core.history.get(s, i.id)).request.method;
      switch (a) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(s, i);
        default:
          return this.onUnknownRpcMethodResponse(a);
      }
    }, this.onPairingPingRequest = async (n, s) => {
      const { id: i } = s;
      try {
        this.isValidPing({ topic: n }), await this.sendResult(i, n, !0), this.events.emit(Ls.ping, { id: i, topic: n });
      } catch (a) {
        await this.sendError(i, n, a), this.logger.error(a);
      }
    }, this.onPairingPingResponse = (n, s) => {
      const { id: i } = s;
      setTimeout(() => {
        Wr(s) ? this.events.emit(pt("pairing_ping", i), {}) : Er(s) && this.events.emit(pt("pairing_ping", i), { error: s.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (n, s) => {
      const { id: i } = s;
      try {
        this.isValidDisconnect({ topic: n }), await this.deletePairing(n), this.events.emit(Ls.delete, { id: i, topic: n });
      } catch (a) {
        await this.sendError(i, n, a), this.logger.error(a);
      }
    }, this.onUnknownRpcMethodRequest = async (n, s) => {
      const { id: i, method: a } = s;
      try {
        if (this.registeredMethods.includes(a))
          return;
        const o = gt("WC_METHOD_UNSUPPORTED", a);
        await this.sendError(i, n, o), this.logger.error(o);
      } catch (o) {
        await this.sendError(i, n, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodResponse = (n) => {
      this.registeredMethods.includes(n) || this.logger.error(gt("WC_METHOD_UNSUPPORTED", n));
    }, this.isValidPair = (n) => {
      var s;
      if (!er(n)) {
        const { message: a } = Y("MISSING_OR_INVALID", `pair() params: ${n}`);
        throw new Error(a);
      }
      if (!eb(n.uri)) {
        const { message: a } = Y("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
        throw new Error(a);
      }
      const i = gl(n.uri);
      if (!((s = i == null ? void 0 : i.relay) != null && s.protocol)) {
        const { message: a } = Y("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw new Error(a);
      }
      if (!(i != null && i.symKey)) {
        const { message: a } = Y("MISSING_OR_INVALID", "pair() uri#symKey");
        throw new Error(a);
      }
      if (i != null && i.expiryTimestamp && se.toMiliseconds(i == null ? void 0 : i.expiryTimestamp) < Date.now()) {
        const { message: a } = Y("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(a);
      }
    }, this.isValidPing = async (n) => {
      if (!er(n)) {
        const { message: i } = Y("MISSING_OR_INVALID", `ping() params: ${n}`);
        throw new Error(i);
      }
      const { topic: s } = n;
      await this.isValidPairingTopic(s);
    }, this.isValidDisconnect = async (n) => {
      if (!er(n)) {
        const { message: i } = Y("MISSING_OR_INVALID", `disconnect() params: ${n}`);
        throw new Error(i);
      }
      const { topic: s } = n;
      await this.isValidPairingTopic(s);
    }, this.isValidPairingTopic = async (n) => {
      if (!Ot(n, !1)) {
        const { message: s } = Y("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
        throw new Error(s);
      }
      if (!this.pairings.keys.includes(n)) {
        const { message: s } = Y("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
        throw new Error(s);
      }
      if (on(this.pairings.get(n).expiry)) {
        await this.deletePairing(n);
        const { message: s } = Y("EXPIRED", `pairing topic: ${n}`);
        throw new Error(s);
      }
    }, this.core = e, this.logger = Me.generateChildLogger(r, this.name), this.pairings = new $o(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(kt.message, async (e) => {
      const { topic: r, message: n } = e;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n)))
        return;
      const s = await this.core.crypto.decode(r, n);
      try {
        qc(s) ? (this.core.history.set(r, s), this.onRelayEventRequest({ topic: r, payload: s })) : Mo(s) && (await this.core.history.resolve(s), await this.onRelayEventResponse({ topic: r, payload: s }), this.core.history.delete(r, s.id));
      } catch (i) {
        this.logger.error(i);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(pr.expired, async (e) => {
      const { topic: r } = Ah(e.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit(Ls.expire, { topic: r }));
    });
  }
}
class S1 extends Ey {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new mr.EventEmitter(), this.name = Z_, this.version = Y_, this.cached = [], this.initialized = !1, this.storagePrefix = ln, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (n, s, i) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: n, request: s, chainId: i }), this.records.has(s.id))
        return;
      const a = { id: s.id, topic: n, request: { method: s.method, params: s.params || null }, chainId: i, expiry: or(se.THIRTY_DAYS) };
      this.records.set(a.id, a), this.events.emit(Lr.created, a);
    }, this.resolve = async (n) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: n }), !this.records.has(n.id))
        return;
      const s = await this.getRecord(n.id);
      typeof s.response > "u" && (s.response = Er(n) ? { error: n.error } : { result: n.result }, this.records.set(s.id, s), this.events.emit(Lr.updated, s));
    }, this.get = async (n, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: n, id: s }), await this.getRecord(s)), this.delete = (n, s) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s }), this.values.forEach((i) => {
        if (i.topic === n) {
          if (typeof s < "u" && i.id !== s)
            return;
          this.records.delete(i.id), this.events.emit(Lr.deleted, i);
        }
      });
    }, this.exists = async (n, s) => (this.isInitialized(), this.records.has(s) ? (await this.getRecord(s)).topic === n : !1), this.on = (n, s) => {
      this.events.on(n, s);
    }, this.once = (n, s) => {
      this.events.once(n, s);
    }, this.off = (n, s) => {
      this.events.off(n, s);
    }, this.removeListener = (n, s) => {
      this.events.removeListener(n, s);
    }, this.logger = Me.generateChildLogger(r, this.name);
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return this.values.forEach((r) => {
      if (typeof r.response < "u")
        return;
      const n = { topic: r.topic, request: rs(r.request.method, r.request.params, r.id), chainId: r.chainId };
      return e.push(n);
    }), e;
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const r = this.records.get(e);
    if (!r) {
      const { message: n } = Y("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(n);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(Lr.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: r } = Y("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(Lr.created, (e) => {
      const r = Lr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(Lr.updated, (e) => {
      const r = Lr.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.events.on(Lr.deleted, (e) => {
      const r = Lr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: e }), this.persist();
    }), this.core.heartbeat.on(ys.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((e) => {
        se.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id));
      });
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class x1 extends Cy {
  constructor(e, r) {
    super(e, r), this.core = e, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new mr.EventEmitter(), this.name = J_, this.version = X_, this.cached = [], this.initialized = !1, this.storagePrefix = ln, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.expirations.set(n.target, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.has = (n) => {
      try {
        const s = this.formatTarget(n);
        return typeof this.getExpiration(s) < "u";
      } catch {
        return !1;
      }
    }, this.set = (n, s) => {
      this.isInitialized();
      const i = this.formatTarget(n), a = { target: i, expiry: s };
      this.expirations.set(i, a), this.checkExpiry(i, a), this.events.emit(pr.created, { target: i, expiration: a });
    }, this.get = (n) => {
      this.isInitialized();
      const s = this.formatTarget(n);
      return this.getExpiration(s);
    }, this.del = (n) => {
      if (this.isInitialized(), this.has(n)) {
        const s = this.formatTarget(n), i = this.getExpiration(s);
        this.expirations.delete(s), this.events.emit(pr.deleted, { target: s, expiration: i });
      }
    }, this.on = (n, s) => {
      this.events.on(n, s);
    }, this.once = (n, s) => {
      this.events.once(n, s);
    }, this.off = (n, s) => {
      this.events.off(n, s);
    }, this.removeListener = (n, s) => {
      this.events.removeListener(n, s);
    }, this.logger = Me.generateChildLogger(r, this.name);
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string")
      return A0(e);
    if (typeof e == "number")
      return P0(e);
    const { message: r } = Y("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(r);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(pr.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: r } = Y("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const r = this.expirations.get(e);
    if (!r) {
      const { message: n } = Y("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(n), new Error(n);
    }
    return r;
  }
  checkExpiry(e, r) {
    const { expiry: n } = r;
    se.toMiliseconds(n) - Date.now() <= 0 && this.expire(e, r);
  }
  expire(e, r) {
    this.expirations.delete(e), this.events.emit(pr.expired, { target: e, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, r) => this.checkExpiry(r, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(ys.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(pr.created, (e) => {
      const r = pr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(pr.expired, (e) => {
      const r = pr.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    }), this.events.on(pr.deleted, (e) => {
      const r = pr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class D1 extends Ry {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.name = fa, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async (n) => {
      if (this.verifyDisabled || bs() || !ws())
        return;
      const s = this.getVerifyUrl(n == null ? void 0 : n.verifyUrl);
      this.verifyUrl !== s && this.removeIframe(), this.verifyUrl = s;
      try {
        await this.createIframe();
      } catch (i) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(i);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = Ka;
        try {
          await this.createIframe();
        } catch (i) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(i), this.verifyDisabled = !0;
        }
      }
    }, this.register = async (n) => {
      this.initialized ? this.sendPost(n.attestationId) : (this.addToQueue(n.attestationId), await this.init());
    }, this.resolve = async (n) => {
      if (this.isDevEnv)
        return "";
      const s = this.getVerifyUrl(n == null ? void 0 : n.verifyUrl);
      let i;
      try {
        i = await this.fetchAttestation(n.attestationId, s);
      } catch (a) {
        this.logger.info(`failed to resolve attestation: ${n.attestationId} from url: ${s}`), this.logger.info(a), i = await this.fetchAttestation(n.attestationId, Ka);
      }
      return i;
    }, this.fetchAttestation = async (n, s) => {
      this.logger.info(`resolving attestation: ${n} from url: ${s}`);
      const i = this.startAbortTimer(se.ONE_SECOND * 2), a = await fetch(`${s}/attestation/${n}`, { signal: this.abortController.signal });
      return clearTimeout(i), a.status === 200 ? await a.json() : void 0;
    }, this.addToQueue = (n) => {
      this.queue.push(n);
    }, this.processQueue = () => {
      this.queue.length !== 0 && (this.queue.forEach((n) => this.sendPost(n)), this.queue = []);
    }, this.sendPost = (n) => {
      var s;
      try {
        if (!this.iframe)
          return;
        (s = this.iframe.contentWindow) == null || s.postMessage(n, "*"), this.logger.info(`postMessage sent: ${n} ${this.verifyUrl}`);
      } catch {
      }
    }, this.createIframe = async () => {
      let n;
      const s = (i) => {
        i.data === "verify_ready" && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", s), n());
      };
      await Promise.race([new Promise((i) => {
        if (document.getElementById(fa))
          return i();
        window.addEventListener("message", s);
        const a = document.createElement("iframe");
        a.id = fa, a.src = `${this.verifyUrl}/${this.projectId}`, a.style.display = "none", document.body.append(a), this.iframe = a, n = i;
      }), new Promise((i, a) => setTimeout(() => {
        window.removeEventListener("message", s), a("verify iframe load timeout");
      }, se.toMiliseconds(se.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.getVerifyUrl = (n) => {
      let s = n || Zn;
      return e1.includes(s) || (this.logger.info(`verify url: ${s}, not included in trusted list, assigning default: ${Zn}`), s = Zn), s;
    }, this.logger = Me.generateChildLogger(r, this.name), this.verifyUrl = Zn, this.abortController = new AbortController(), this.isDevEnv = Fc() && process.env.IS_VITEST;
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), se.toMiliseconds(e));
  }
}
class O1 extends Ty {
  constructor(e, r) {
    super(e, r), this.projectId = e, this.logger = r, this.context = t1, this.registerDeviceToken = async (n) => {
      const { clientId: s, token: i, notificationType: a, enableEncrypted: o = !1 } = n, u = `${r1}/${this.projectId}/clients`;
      await tw(u, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s, type: a, token: i, always_raw: o }) });
    }, this.logger = Me.generateChildLogger(r, this.context);
  }
}
var I1 = Object.defineProperty, Bl = Object.getOwnPropertySymbols, C1 = Object.prototype.hasOwnProperty, R1 = Object.prototype.propertyIsEnumerable, Vl = (t, e, r) => e in t ? I1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Kl = (t, e) => {
  for (var r in e || (e = {}))
    C1.call(e, r) && Vl(t, r, e[r]);
  if (Bl)
    for (var r of Bl(e))
      R1.call(e, r) && Vl(t, r, e[r]);
  return t;
};
class Bc extends _y {
  constructor(e) {
    super(e), this.protocol = Zh, this.version = O_, this.name = zc, this.events = new mr.EventEmitter(), this.initialized = !1, this.on = (n, s) => this.events.on(n, s), this.once = (n, s) => this.events.once(n, s), this.off = (n, s) => this.events.off(n, s), this.removeListener = (n, s) => this.events.removeListener(n, s), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Jh, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Me.pino(Me.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || I_.logger }));
    this.logger = Me.generateChildLogger(r, this.name), this.heartbeat = new ys.HeartBeat(), this.crypto = new s1(this, this.logger, e == null ? void 0 : e.keychain), this.history = new S1(this, this.logger), this.expirer = new x1(this, this.logger), this.storage = e != null && e.storage ? e.storage : new jg(Kl(Kl({}, C_), e == null ? void 0 : e.storageOptions)), this.relayer = new v1({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new E1(this, this.logger), this.verify = new D1(this.projectId || "", this.logger), this.echoClient = new O1(this.projectId || "", this.logger);
  }
  static async init(e) {
    const r = new Bc(e);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem(V_, n), r;
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
}
const T1 = Bc, Xh = "wc", ed = 2, td = "client", Vc = `${Xh}@${ed}:${td}:`, da = { name: td, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, Hl = "WALLETCONNECT_DEEPLINK_CHOICE", A1 = "proposal", P1 = "Proposal expired", N1 = "session", zi = se.SEVEN_DAYS, L1 = "engine", Kr = { wc_sessionPropose: { req: { ttl: se.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: se.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: se.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: se.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: se.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: se.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: se.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: se.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: se.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: se.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: se.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: se.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: se.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: se.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: se.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: se.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, pa = { min: se.FIVE_MINUTES, max: se.SEVEN_DAYS }, Hr = { idle: "IDLE", active: "ACTIVE" }, F1 = "request", U1 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var M1 = Object.defineProperty, j1 = Object.defineProperties, $1 = Object.getOwnPropertyDescriptors, Wl = Object.getOwnPropertySymbols, k1 = Object.prototype.hasOwnProperty, q1 = Object.prototype.propertyIsEnumerable, Gl = (t, e, r) => e in t ? M1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Vt = (t, e) => {
  for (var r in e || (e = {}))
    k1.call(e, r) && Gl(t, r, e[r]);
  if (Wl)
    for (var r of Wl(e))
      q1.call(e, r) && Gl(t, r, e[r]);
  return t;
}, Kn = (t, e) => j1(t, $1(e));
class z1 extends Py {
  constructor(e) {
    super(e), this.name = L1, this.events = new pi(), this.initialized = !1, this.ignoredPayloadTypes = [qn], this.requestQueue = { state: Hr.idle, queue: [] }, this.sessionRequestQueue = { state: Hr.idle, queue: [] }, this.requestQueueDelay = se.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(Kr) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, se.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const n = Kn(Vt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(n);
      const { pairingTopic: s, requiredNamespaces: i, optionalNamespaces: a, sessionProperties: o, relays: u } = n;
      let c = s, f, d = !1;
      if (c && (d = this.client.core.pairing.pairings.get(c).active), !c || !d) {
        const { topic: b, uri: S } = await this.client.core.pairing.create();
        c = b, f = S;
      }
      const p = await this.client.core.crypto.generateKeyPair(), m = Kr.wc_sessionPropose.req.ttl || se.FIVE_MINUTES, v = or(m), _ = Vt({ requiredNamespaces: i, optionalNamespaces: a, relays: u ?? [{ protocol: Yh }], proposer: { publicKey: p, metadata: this.client.metadata }, expiryTimestamp: v }, o && { sessionProperties: o }), { reject: x, resolve: T, done: w } = Wn(m, P1);
      if (this.events.once(pt("session_connect"), async ({ error: b, session: S }) => {
        if (b)
          x(b);
        else if (S) {
          S.self.publicKey = p;
          const g = Kn(Vt({}, S), { requiredNamespaces: _.requiredNamespaces, optionalNamespaces: _.optionalNamespaces });
          await this.client.session.set(S.topic, g), await this.setExpiry(S.topic, S.expiry), c && await this.client.core.pairing.updateMetadata({ topic: c, metadata: S.peer.metadata }), T(g);
        }
      }), !c) {
        const { message: b } = Y("NO_MATCHING_KEY", `connect() pairing topic: ${c}`);
        throw new Error(b);
      }
      const D = await this.sendRequest({ topic: c, method: "wc_sessionPropose", params: _, throwOnFailedPublish: !0 });
      return await this.setProposal(D, Vt({ id: D }, _)), { uri: f, approval: w };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: n, relayProtocol: s, namespaces: i, sessionProperties: a } = r, o = this.client.proposal.get(n);
      let { pairingTopic: u, proposer: c, requiredNamespaces: f, optionalNamespaces: d } = o;
      u = u || "";
      const p = await this.client.core.crypto.generateKeyPair(), m = c.publicKey, v = await this.client.core.crypto.generateSharedKey(p, m);
      u && n && (await this.client.core.pairing.updateMetadata({ topic: u, metadata: c.metadata }), await this.sendResult({ id: n, topic: u, result: { relay: { protocol: s ?? "irn" }, responderPublicKey: p } }), await this.client.proposal.delete(n, gt("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: u }));
      const _ = Vt({ relay: { protocol: s ?? "irn" }, namespaces: i, pairingTopic: u, controller: { publicKey: p, metadata: this.client.metadata }, expiry: or(zi) }, a && { sessionProperties: a });
      await this.client.core.relayer.subscribe(v);
      const x = Kn(Vt({}, _), { topic: v, requiredNamespaces: f, optionalNamespaces: d, pairingTopic: u, acknowledged: !1, self: _.controller, peer: { publicKey: c.publicKey, metadata: c.metadata }, controller: p });
      await this.client.session.set(v, x);
      try {
        await this.sendRequest({ topic: v, method: "wc_sessionSettle", params: _, throwOnFailedPublish: !0 });
      } catch (T) {
        throw this.client.logger.error(T), this.client.session.delete(v, gt("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(v), T;
      }
      return await this.setExpiry(v, or(zi)), { topic: v, acknowledged: () => new Promise((T) => setTimeout(() => T(this.client.session.get(v)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: n, reason: s } = r, { pairingTopic: i } = this.client.proposal.get(n);
      i && (await this.sendError(n, i, s), await this.client.proposal.delete(n, gt("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: n, namespaces: s } = r, i = await this.sendRequest({ topic: n, method: "wc_sessionUpdate", params: { namespaces: s } }), { done: a, resolve: o, reject: u } = Wn();
      return this.events.once(pt("session_update", i), ({ error: c }) => {
        c ? u(c) : o();
      }), await this.client.session.update(n, { namespaces: s }), { acknowledged: a };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: n } = r, s = await this.sendRequest({ topic: n, method: "wc_sessionExtend", params: {} }), { done: i, resolve: a, reject: o } = Wn();
      return this.events.once(pt("session_extend", s), ({ error: u }) => {
        u ? o(u) : a();
      }), await this.setExpiry(n, or(zi)), { acknowledged: i };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: n, request: s, topic: i, expiry: a = Kr.wc_sessionRequest.req.ttl } = r, o = jc(), { done: u, resolve: c, reject: f } = Wn(a, "Request expired. Please try again.");
      return this.events.once(pt("session_request", o), ({ error: d, result: p }) => {
        d ? f(d) : c(p);
      }), await Promise.all([new Promise(async (d) => {
        await this.sendRequest({ clientRpcId: o, topic: i, method: "wc_sessionRequest", params: { request: Kn(Vt({}, s), { expiryTimestamp: or(a) }), chainId: n }, expiry: a, throwOnFailedPublish: !0 }).catch((p) => f(p)), this.client.events.emit("session_request_sent", { topic: i, request: s, chainId: n, id: o }), d();
      }), new Promise(async (d) => {
        const p = await L0(this.client.core.storage, Hl);
        N0({ id: o, topic: i, wcDeepLink: p }), d();
      }), u()]).then((d) => d[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: n, response: s } = r, { id: i } = s;
      Wr(s) ? await this.sendResult({ id: i, topic: n, result: s.result, throwOnFailedPublish: !0 }) : Er(s) && await this.sendError(i, n, s.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n)) {
        const s = await this.sendRequest({ topic: n, method: "wc_sessionPing", params: {} }), { done: i, resolve: a, reject: o } = Wn();
        this.events.once(pt("session_ping", s), ({ error: u }) => {
          u ? o(u) : a();
        }), await i();
      } else
        this.client.core.pairing.pairings.keys.includes(n) && await this.client.core.pairing.ping({ topic: n });
    }, this.emit = async (r) => {
      await this.isInitialized(), await this.isValidEmit(r);
      const { topic: n, event: s, chainId: i } = r;
      await this.sendRequest({ topic: n, method: "wc_sessionEvent", params: { event: s, chainId: i } });
    }, this.disconnect = async (r) => {
      await this.isInitialized(), await this.isValidDisconnect(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n))
        await this.sendRequest({ topic: n, method: "wc_sessionDelete", params: gt("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession({ topic: n, emitEvent: !1 });
      else if (this.client.core.pairing.pairings.keys.includes(n))
        await this.client.core.pairing.disconnect({ topic: n });
      else {
        const { message: s } = Y("MISMATCHED_TOPIC", `Session or pairing topic not found: ${n}`);
        throw new Error(s);
      }
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((n) => J0(n, r))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic)
        try {
          const n = this.client.core.pairing.pairings.get(r.pairingTopic), s = this.client.core.pairing.pairings.getAll().filter((i) => {
            var a, o;
            return ((a = i.peerMetadata) == null ? void 0 : a.url) && ((o = i.peerMetadata) == null ? void 0 : o.url) === r.peer.metadata.url && i.topic && i.topic !== n.topic;
          });
          if (s.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`), await Promise.all(s.map((i) => this.client.core.pairing.disconnect({ topic: i.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (n) {
          this.client.logger.error(n);
        }
    }, this.deleteSession = async (r) => {
      const { topic: n, expirerHasDeleted: s = !1, emitEvent: i = !0, id: a = 0 } = r, { self: o } = this.client.session.get(n);
      await this.client.core.relayer.unsubscribe(n), await this.client.session.delete(n, gt("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(o.publicKey) && await this.client.core.crypto.deleteKeyPair(o.publicKey), this.client.core.crypto.keychain.has(n) && await this.client.core.crypto.deleteSymKey(n), s || this.client.core.expirer.del(n), this.client.core.storage.removeItem(Hl).catch((u) => this.client.logger.warn(u)), this.getPendingSessionRequests().forEach((u) => {
        u.topic === n && this.deletePendingSessionRequest(u.id, gt("USER_DISCONNECTED"));
      }), i && this.client.events.emit("session_delete", { id: a, topic: n });
    }, this.deleteProposal = async (r, n) => {
      await Promise.all([this.client.proposal.delete(r, gt("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, n, s = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, n), s ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i) => i.id !== r), s && (this.sessionRequestQueue.state = Hr.idle, this.client.events.emit("session_request_expire", { id: r }));
    }, this.setExpiry = async (r, n) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: n }), this.client.core.expirer.set(r, n);
    }, this.setProposal = async (r, n) => {
      await this.client.proposal.set(r, n), this.client.core.expirer.set(r, or(Kr.wc_sessionPropose.req.ttl));
    }, this.setPendingSessionRequest = async (r) => {
      const { id: n, topic: s, params: i, verifyContext: a } = r, o = i.request.expiryTimestamp || or(Kr.wc_sessionRequest.req.ttl);
      await this.client.pendingRequest.set(n, { id: n, topic: s, params: i, verifyContext: a }), o && this.client.core.expirer.set(n, o);
    }, this.sendRequest = async (r) => {
      const { topic: n, method: s, params: i, expiry: a, relayRpcId: o, clientRpcId: u, throwOnFailedPublish: c } = r, f = rs(s, i, u);
      if (ws() && U1.includes(s)) {
        const m = ts(JSON.stringify(f));
        this.client.core.verify.register({ attestationId: m });
      }
      const d = await this.client.core.crypto.encode(n, f), p = Kr[s].req;
      return a && (p.ttl = a), o && (p.id = o), this.client.core.history.set(n, f), c ? (p.internal = Kn(Vt({}, p.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, d, p)) : this.client.core.relayer.publish(n, d, p).catch((m) => this.client.logger.error(m)), f.id;
    }, this.sendResult = async (r) => {
      const { id: n, topic: s, result: i, throwOnFailedPublish: a } = r, o = $c(n, i), u = await this.client.core.crypto.encode(s, o), c = await this.client.core.history.get(s, n), f = Kr[c.request.method].res;
      a ? (f.internal = Kn(Vt({}, f.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(s, u, f)) : this.client.core.relayer.publish(s, u, f).catch((d) => this.client.logger.error(d)), await this.client.core.history.resolve(o);
    }, this.sendError = async (r, n, s) => {
      const i = kc(r, s), a = await this.client.core.crypto.encode(n, i), o = await this.client.core.history.get(n, r), u = Kr[o.request.method].res;
      this.client.core.relayer.publish(n, a, u), await this.client.core.history.resolve(i);
    }, this.cleanup = async () => {
      const r = [], n = [];
      this.client.session.getAll().forEach((s) => {
        let i = !1;
        on(s.expiry) && (i = !0), this.client.core.crypto.keychain.has(s.topic) || (i = !0), i && r.push(s.topic);
      }), this.client.proposal.getAll().forEach((s) => {
        on(s.expiryTimestamp) && n.push(s.id);
      }), await Promise.all([...r.map((s) => this.deleteSession({ topic: s })), ...n.map((s) => this.deleteProposal(s))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === Hr.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = Hr.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((n) => setTimeout(n, 300));
          } catch (n) {
            this.client.logger.warn(n);
          }
      }
      this.requestQueue.state = Hr.idle;
    }, this.processRequest = (r) => {
      const { topic: n, payload: s } = r, i = s.method;
      switch (i) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(n, s);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(n, s);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(n, s);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(n, s);
        case "wc_sessionPing":
          return this.onSessionPingRequest(n, s);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(n, s);
        case "wc_sessionRequest":
          return this.onSessionRequest(n, s);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(n, s);
        default:
          return this.client.logger.info(`Unsupported request method ${i}`);
      }
    }, this.onRelayEventResponse = async (r) => {
      const { topic: n, payload: s } = r, i = (await this.client.core.history.get(n, s.id)).request.method;
      switch (i) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(n, s);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(n, s);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(n, s);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(n, s);
        case "wc_sessionPing":
          return this.onSessionPingResponse(n, s);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(n, s);
        default:
          return this.client.logger.info(`Unsupported response method ${i}`);
      }
    }, this.onRelayEventUnknownPayload = (r) => {
      const { topic: n } = r, { message: s } = Y("MISSING_OR_INVALID", `Decoded payload on topic ${n} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(s);
    }, this.onSessionProposeRequest = async (r, n) => {
      const { params: s, id: i } = n;
      try {
        this.isValidConnect(Vt({}, n.params));
        const a = s.expiryTimestamp || or(Kr.wc_sessionPropose.req.ttl), o = Vt({ id: i, pairingTopic: r, expiryTimestamp: a }, s);
        await this.setProposal(i, o);
        const u = ts(JSON.stringify(n)), c = await this.getVerifyContext(u, o.proposer.metadata);
        this.client.events.emit("session_proposal", { id: i, params: o, verifyContext: c });
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.onSessionProposeResponse = async (r, n) => {
      const { id: s } = n;
      if (Wr(n)) {
        const { result: i } = n;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: i });
        const a = this.client.proposal.get(s);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: a });
        const o = a.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: o });
        const u = i.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: u });
        const c = await this.client.core.crypto.generateSharedKey(o, u);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: c });
        const f = await this.client.core.relayer.subscribe(c);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: f }), await this.client.core.pairing.activate({ topic: r });
      } else
        Er(n) && (await this.client.proposal.delete(s, gt("USER_DISCONNECTED")), this.events.emit(pt("session_connect"), { error: n.error }));
    }, this.onSessionSettleRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        this.isValidSessionSettleRequest(i);
        const { relay: a, controller: o, expiry: u, namespaces: c, sessionProperties: f, pairingTopic: d } = n.params, p = Vt({ topic: r, relay: a, expiry: u, namespaces: c, acknowledged: !0, pairingTopic: d, requiredNamespaces: {}, optionalNamespaces: {}, controller: o.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o.publicKey, metadata: o.metadata } }, f && { sessionProperties: f });
        await this.sendResult({ id: n.id, topic: r, result: !0 }), this.events.emit(pt("session_connect"), { session: p }), this.cleanupDuplicatePairings(p);
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.onSessionSettleResponse = async (r, n) => {
      const { id: s } = n;
      Wr(n) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(pt("session_approve", s), {})) : Er(n) && (await this.client.session.delete(r, gt("USER_DISCONNECTED")), this.events.emit(pt("session_approve", s), { error: n.error }));
    }, this.onSessionUpdateRequest = async (r, n) => {
      const { params: s, id: i } = n;
      try {
        const a = `${r}_session_update`, o = qi.get(a);
        if (o && this.isRequestOutOfSync(o, i)) {
          this.client.logger.info(`Discarding out of sync request - ${i}`);
          return;
        }
        this.isValidUpdate(Vt({ topic: r }, s)), await this.client.session.update(r, { namespaces: s.namespaces }), await this.sendResult({ id: i, topic: r, result: !0 }), this.client.events.emit("session_update", { id: i, topic: r, params: s }), qi.set(a, i);
      } catch (a) {
        await this.sendError(i, r, a), this.client.logger.error(a);
      }
    }, this.isRequestOutOfSync = (r, n) => parseInt(n.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, n) => {
      const { id: s } = n;
      Wr(n) ? this.events.emit(pt("session_update", s), {}) : Er(n) && this.events.emit(pt("session_update", s), { error: n.error });
    }, this.onSessionExtendRequest = async (r, n) => {
      const { id: s } = n;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, or(zi)), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: s, topic: r });
      } catch (i) {
        await this.sendError(s, r, i), this.client.logger.error(i);
      }
    }, this.onSessionExtendResponse = (r, n) => {
      const { id: s } = n;
      Wr(n) ? this.events.emit(pt("session_extend", s), {}) : Er(n) && this.events.emit(pt("session_extend", s), { error: n.error });
    }, this.onSessionPingRequest = async (r, n) => {
      const { id: s } = n;
      try {
        this.isValidPing({ topic: r }), await this.sendResult({ id: s, topic: r, result: !0 }), this.client.events.emit("session_ping", { id: s, topic: r });
      } catch (i) {
        await this.sendError(s, r, i), this.client.logger.error(i);
      }
    }, this.onSessionPingResponse = (r, n) => {
      const { id: s } = n;
      setTimeout(() => {
        Wr(n) ? this.events.emit(pt("session_ping", s), {}) : Er(n) && this.events.emit(pt("session_ping", s), { error: n.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, n) => {
      const { id: s } = n;
      try {
        this.isValidDisconnect({ topic: r, reason: n.params }), await Promise.all([new Promise((i) => {
          this.client.core.relayer.once(kt.publish, async () => {
            i(await this.deleteSession({ topic: r, id: s }));
          });
        }), this.sendResult({ id: s, topic: r, result: !0 }), this.cleanupPendingSentRequestsForTopic({ topic: r, error: gt("USER_DISCONNECTED") })]);
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.onSessionRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        this.isValidRequest(Vt({ topic: r }, i));
        const a = ts(JSON.stringify(rs("wc_sessionRequest", i, s))), o = this.client.session.get(r), u = await this.getVerifyContext(a, o.peer.metadata), c = { id: s, topic: r, params: i, verifyContext: u };
        await this.setPendingSessionRequest(c), this.addSessionRequestToSessionRequestQueue(c), this.processSessionRequestQueue();
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.onSessionRequestResponse = (r, n) => {
      const { id: s } = n;
      Wr(n) ? this.events.emit(pt("session_request", s), { result: n.result }) : Er(n) && this.events.emit(pt("session_request", s), { error: n.error });
    }, this.onSessionEventRequest = async (r, n) => {
      const { id: s, params: i } = n;
      try {
        const a = `${r}_session_event_${i.event.name}`, o = qi.get(a);
        if (o && this.isRequestOutOfSync(o, s)) {
          this.client.logger.info(`Discarding out of sync request - ${s}`);
          return;
        }
        this.isValidEmit(Vt({ topic: r }, i)), this.client.events.emit("session_event", { id: s, topic: r, params: i }), qi.set(a, s);
      } catch (a) {
        await this.sendError(s, r, a), this.client.logger.error(a);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = Hr.idle, this.processSessionRequestQueue();
      }, se.toMiliseconds(this.requestQueueDelay));
    }, this.cleanupPendingSentRequestsForTopic = ({ topic: r, error: n }) => {
      const s = this.client.core.history.pending;
      s.length > 0 && s.filter((i) => i.topic === r && i.request.method === "wc_sessionRequest").forEach((i) => {
        this.events.emit(pt("session_request", i.request.id), { error: n });
      });
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === Hr.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = Hr.active, this.client.events.emit("session_request", r);
      } catch (n) {
        this.client.logger.error(n);
      }
    }, this.onPairingCreated = (r) => {
      if (r.active)
        return;
      const n = this.client.proposal.getAll().find((s) => s.pairingTopic === r.topic);
      n && this.onSessionProposeRequest(r.topic, rs("wc_sessionPropose", { requiredNamespaces: n.requiredNamespaces, optionalNamespaces: n.optionalNamespaces, relays: n.relays, proposer: n.proposer, sessionProperties: n.sessionProperties }, n.id));
    }, this.isValidConnect = async (r) => {
      if (!er(r)) {
        const { message: u } = Y("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(u);
      }
      const { pairingTopic: n, requiredNamespaces: s, optionalNamespaces: i, sessionProperties: a, relays: o } = r;
      if (Ht(n) || await this.isValidPairingTopic(n), !lb(o, !0)) {
        const { message: u } = Y("MISSING_OR_INVALID", `connect() relays: ${o}`);
        throw new Error(u);
      }
      !Ht(s) && ao(s) !== 0 && this.validateNamespaces(s, "requiredNamespaces"), !Ht(i) && ao(i) !== 0 && this.validateNamespaces(i, "optionalNamespaces"), Ht(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.validateNamespaces = (r, n) => {
      const s = ub(r, "connect()", n);
      if (s)
        throw new Error(s.message);
    }, this.isValidApprove = async (r) => {
      if (!er(r))
        throw new Error(Y("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: n, namespaces: s, relayProtocol: i, sessionProperties: a } = r;
      await this.isValidProposalId(n);
      const o = this.client.proposal.get(n), u = ca(s, "approve()");
      if (u)
        throw new Error(u.message);
      const c = vl(o.requiredNamespaces, s, "approve()");
      if (c)
        throw new Error(c.message);
      if (!Ot(i, !0)) {
        const { message: f } = Y("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
        throw new Error(f);
      }
      Ht(a) || this.validateSessionProps(a, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!er(r)) {
        const { message: i } = Y("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(i);
      }
      const { id: n, reason: s } = r;
      if (await this.isValidProposalId(n), !hb(s)) {
        const { message: i } = Y("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
        throw new Error(i);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!er(r)) {
        const { message: c } = Y("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(c);
      }
      const { relay: n, controller: s, namespaces: i, expiry: a } = r;
      if (!Nh(n)) {
        const { message: c } = Y("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(c);
      }
      const o = nb(s, "onSessionSettleRequest()");
      if (o)
        throw new Error(o.message);
      const u = ca(i, "onSessionSettleRequest()");
      if (u)
        throw new Error(u.message);
      if (on(a)) {
        const { message: c } = Y("EXPIRED", "onSessionSettleRequest()");
        throw new Error(c);
      }
    }, this.isValidUpdate = async (r) => {
      if (!er(r)) {
        const { message: u } = Y("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(u);
      }
      const { topic: n, namespaces: s } = r;
      await this.isValidSessionTopic(n);
      const i = this.client.session.get(n), a = ca(s, "update()");
      if (a)
        throw new Error(a.message);
      const o = vl(i.requiredNamespaces, s, "update()");
      if (o)
        throw new Error(o.message);
    }, this.isValidExtend = async (r) => {
      if (!er(r)) {
        const { message: s } = Y("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n } = r;
      await this.isValidSessionTopic(n);
    }, this.isValidRequest = async (r) => {
      if (!er(r)) {
        const { message: u } = Y("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(u);
      }
      const { topic: n, request: s, chainId: i, expiry: a } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: o } = this.client.session.get(n);
      if (!ml(o, i)) {
        const { message: u } = Y("MISSING_OR_INVALID", `request() chainId: ${i}`);
        throw new Error(u);
      }
      if (!db(s)) {
        const { message: u } = Y("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
        throw new Error(u);
      }
      if (!yb(o, i, s.method)) {
        const { message: u } = Y("MISSING_OR_INVALID", `request() method: ${s.method}`);
        throw new Error(u);
      }
      if (a && !wb(a, pa)) {
        const { message: u } = Y("MISSING_OR_INVALID", `request() expiry: ${a}. Expiry must be a number (in seconds) between ${pa.min} and ${pa.max}`);
        throw new Error(u);
      }
    }, this.isValidRespond = async (r) => {
      var n;
      if (!er(r)) {
        const { message: a } = Y("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(a);
      }
      const { topic: s, response: i } = r;
      try {
        await this.isValidSessionTopic(s);
      } catch (a) {
        throw (n = r == null ? void 0 : r.response) != null && n.id && this.cleanupAfterResponse(r), a;
      }
      if (!pb(i)) {
        const { message: a } = Y("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
        throw new Error(a);
      }
    }, this.isValidPing = async (r) => {
      if (!er(r)) {
        const { message: s } = Y("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.isValidEmit = async (r) => {
      if (!er(r)) {
        const { message: o } = Y("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(o);
      }
      const { topic: n, event: s, chainId: i } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: a } = this.client.session.get(n);
      if (!ml(a, i)) {
        const { message: o } = Y("MISSING_OR_INVALID", `emit() chainId: ${i}`);
        throw new Error(o);
      }
      if (!gb(s)) {
        const { message: o } = Y("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(o);
      }
      if (!mb(a, i, s.name)) {
        const { message: o } = Y("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
        throw new Error(o);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!er(r)) {
        const { message: s } = Y("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(s);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.getVerifyContext = async (r, n) => {
      const s = { verified: { verifyUrl: n.verifyUrl || Zn, validation: "UNKNOWN", origin: n.url || "" } };
      try {
        const i = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: n.verifyUrl });
        i && (s.verified.origin = i.origin, s.verified.isScam = i.isScam, s.verified.validation = i.origin === new URL(n.url).origin ? "VALID" : "INVALID");
      } catch (i) {
        this.client.logger.info(i);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(s)}`), s;
    }, this.validateSessionProps = (r, n) => {
      Object.values(r).forEach((s) => {
        if (!Ot(s, !1)) {
          const { message: i } = Y("MISSING_OR_INVALID", `${n} must be in Record<string, string> format. Received: ${JSON.stringify(s)}`);
          throw new Error(i);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = Y("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(kt.message, async (e) => {
      const { topic: r, message: n } = e;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(n)))
        return;
      const s = await this.client.core.crypto.decode(r, n);
      try {
        qc(s) ? (this.client.core.history.set(r, s), this.onRelayEventRequest({ topic: r, payload: s })) : Mo(s) ? (await this.client.core.history.resolve(s), await this.onRelayEventResponse({ topic: r, payload: s }), this.client.core.history.delete(r, s.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: s });
      } catch (i) {
        this.client.logger.error(i);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(pr.expired, async (e) => {
      const { topic: r, id: n } = Ah(e.target);
      if (n && this.client.pendingRequest.keys.includes(n))
        return await this.deletePendingSessionRequest(n, Y("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession({ topic: r, expirerHasDeleted: !0 }), this.client.events.emit("session_expire", { topic: r })) : n && (await this.deleteProposal(n, !0), this.client.events.emit("proposal_expire", { id: n }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(Ls.create, (e) => this.onPairingCreated(e));
  }
  isValidPairingTopic(e) {
    if (!Ot(e, !1)) {
      const { message: r } = Y("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: r } = Y("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (on(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: r } = Y("EXPIRED", `pairing topic: ${e}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(e) {
    if (!Ot(e, !1)) {
      const { message: r } = Y("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(e)) {
      const { message: r } = Y("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (on(this.client.session.get(e).expiry)) {
      await this.deleteSession({ topic: e });
      const { message: r } = Y("EXPIRED", `session topic: ${e}`);
      throw new Error(r);
    }
    if (!this.client.core.crypto.keychain.has(e)) {
      const { message: r } = Y("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
      throw await this.deleteSession({ topic: e }), new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if (this.client.session.keys.includes(e))
      await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (Ot(e, !1)) {
      const { message: r } = Y("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
      throw new Error(r);
    } else {
      const { message: r } = Y("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(e) {
    if (!fb(e)) {
      const { message: r } = Y("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: r } = Y("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
      throw new Error(r);
    }
    if (on(this.client.proposal.get(e).expiryTimestamp)) {
      await this.deleteProposal(e);
      const { message: r } = Y("EXPIRED", `proposal id: ${e}`);
      throw new Error(r);
    }
  }
}
class B1 extends $o {
  constructor(e, r) {
    super(e, r, A1, Vc), this.core = e, this.logger = r;
  }
}
class V1 extends $o {
  constructor(e, r) {
    super(e, r, N1, Vc), this.core = e, this.logger = r;
  }
}
class K1 extends $o {
  constructor(e, r) {
    super(e, r, F1, Vc, (n) => n.id), this.core = e, this.logger = r;
  }
}
class Kc extends Ay {
  constructor(e) {
    super(e), this.protocol = Xh, this.version = ed, this.name = da.name, this.events = new mr.EventEmitter(), this.on = (n, s) => this.events.on(n, s), this.once = (n, s) => this.events.once(n, s), this.off = (n, s) => this.events.off(n, s), this.removeListener = (n, s) => this.events.removeListener(n, s), this.removeAllListeners = (n) => this.events.removeAllListeners(n), this.connect = async (n) => {
      try {
        return await this.engine.connect(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.pair = async (n) => {
      try {
        return await this.engine.pair(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.approve = async (n) => {
      try {
        return await this.engine.approve(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.reject = async (n) => {
      try {
        return await this.engine.reject(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.update = async (n) => {
      try {
        return await this.engine.update(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.extend = async (n) => {
      try {
        return await this.engine.extend(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.request = async (n) => {
      try {
        return await this.engine.request(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.respond = async (n) => {
      try {
        return await this.engine.respond(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.ping = async (n) => {
      try {
        return await this.engine.ping(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.emit = async (n) => {
      try {
        return await this.engine.emit(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.disconnect = async (n) => {
      try {
        return await this.engine.disconnect(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.find = (n) => {
      try {
        return this.engine.find(n);
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.name = (e == null ? void 0 : e.name) || da.name, this.metadata = (e == null ? void 0 : e.metadata) || O0();
    const r = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : Me.pino(Me.getDefaultLoggerOptions({ level: (e == null ? void 0 : e.logger) || da.logger }));
    this.core = (e == null ? void 0 : e.core) || new T1(e), this.logger = Me.generateChildLogger(r, this.name), this.session = new V1(this.core, this.logger), this.proposal = new B1(this.core, this.logger), this.pendingRequest = new K1(this.core, this.logger), this.engine = new z1(this);
  }
  static async init(e) {
    const r = new Kc(e);
    return await r.initialize(), r;
  }
  get context() {
    return Me.getLoggerContext(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }), this.logger.info("SignClient Initialization Success");
    } catch (e) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e;
    }
  }
}
var H1 = Object.defineProperty, W1 = Object.defineProperties, G1 = Object.getOwnPropertyDescriptors, Ql = Object.getOwnPropertySymbols, Q1 = Object.prototype.hasOwnProperty, Z1 = Object.prototype.propertyIsEnumerable, Zl = (t, e, r) => e in t ? H1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Y1 = (t, e) => {
  for (var r in e || (e = {}))
    Q1.call(e, r) && Zl(t, r, e[r]);
  if (Ql)
    for (var r of Ql(e))
      Z1.call(e, r) && Zl(t, r, e[r]);
  return t;
}, J1 = (t, e) => W1(t, G1(e)), Hc = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, et = (t, e, r) => (Hc(t, e, "read from private field"), r ? r.call(t) : e.get(t)), On = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, lo = (t, e, r, n) => (Hc(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), Mt = (t, e, r) => (Hc(t, e, "access private method"), r), In, Gn, Fs, Dt, Ha, rd, jt, Kt, Wa, Yl;
let X1 = class {
  constructor(e) {
    On(this, Ha), On(this, jt), On(this, Wa), On(this, In, void 0), On(this, Gn, void 0), On(this, Fs, void 0), On(this, Dt, void 0), lo(this, In, e), lo(this, Gn, Mt(this, Ha, rd).call(this)), Mt(this, jt, Kt).call(this);
  }
  async connect(e) {
    const { requiredNamespaces: r, optionalNamespaces: n } = e;
    return new Promise(async (s, i) => {
      await Mt(this, jt, Kt).call(this);
      const a = et(this, Gn).subscribeModal((c) => {
        c.open || (a(), i(new Error("Modal closed")));
      }), { uri: o, approval: u } = await et(this, Dt).connect(e);
      if (o) {
        const c = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: f }) => {
          f && f.forEach((d) => c.add(d));
        }), n && Object.values(n).forEach(({ chains: f }) => {
          f && f.forEach((d) => c.add(d));
        }), await et(this, Gn).openModal({ uri: o, chains: Array.from(c) });
      }
      try {
        const c = await u();
        s(c);
      } catch (c) {
        i(c);
      } finally {
        a(), et(this, Gn).closeModal();
      }
    });
  }
  async disconnect(e) {
    await Mt(this, jt, Kt).call(this), await et(this, Dt).disconnect(e);
  }
  async request(e) {
    return await Mt(this, jt, Kt).call(this), await et(this, Dt).request(e);
  }
  async getSessions() {
    return await Mt(this, jt, Kt).call(this), et(this, Dt).session.getAll();
  }
  async getSession() {
    return await Mt(this, jt, Kt).call(this), et(this, Dt).session.getAll().at(-1);
  }
  async onSessionEvent(e) {
    await Mt(this, jt, Kt).call(this), et(this, Dt).on("session_event", e);
  }
  async offSessionEvent(e) {
    await Mt(this, jt, Kt).call(this), et(this, Dt).off("session_event", e);
  }
  async onSessionUpdate(e) {
    await Mt(this, jt, Kt).call(this), et(this, Dt).on("session_update", e);
  }
  async offSessionUpdate(e) {
    await Mt(this, jt, Kt).call(this), et(this, Dt).off("session_update", e);
  }
  async onSessionDelete(e) {
    await Mt(this, jt, Kt).call(this), et(this, Dt).on("session_delete", e);
  }
  async offSessionDelete(e) {
    await Mt(this, jt, Kt).call(this), et(this, Dt).off("session_delete", e);
  }
  async onSessionExpire(e) {
    await Mt(this, jt, Kt).call(this), et(this, Dt).on("session_expire", e);
  }
  async offSessionExpire(e) {
    await Mt(this, jt, Kt).call(this), et(this, Dt).off("session_expire", e);
  }
};
In = /* @__PURE__ */ new WeakMap(), Gn = /* @__PURE__ */ new WeakMap(), Fs = /* @__PURE__ */ new WeakMap(), Dt = /* @__PURE__ */ new WeakMap(), Ha = /* @__PURE__ */ new WeakSet(), rd = function() {
  const { modalOptions: t, projectId: e } = et(this, In);
  return new eg(J1(Y1({}, t), { projectId: e }));
}, jt = /* @__PURE__ */ new WeakSet(), Kt = async function() {
  return et(this, Dt) ? !0 : (!et(this, Fs) && typeof window < "u" && lo(this, Fs, Mt(this, Wa, Yl).call(this)), et(this, Fs));
}, Wa = /* @__PURE__ */ new WeakSet(), Yl = async function() {
  lo(this, Dt, await Kc.init({ metadata: et(this, In).metadata, projectId: et(this, In).projectId, relayUrl: et(this, In).relayUrl }));
  const t = await et(this, Dt).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", t);
  } catch {
    console.info("Unable to set client id");
  }
};
const Wc = [
  "decrypt",
  "disconnect",
  "getSelectedAccount",
  "getBalance",
  "getRecords",
  "requestCreateEvent",
  "getEvent",
  "getEvents",
  "createSharedState",
  "importSharedState",
  "requestSignature"
], ko = ["aleo:1"], Gc = ["chainChanged", "accountSelected", "selectedAccountSynced", "sharedAccountSynced"], eE = "f0aaeffe71b636da453fce042d79d723", tE = {
  standaloneChains: ko,
  enableExplorer: !1,
  enableAccountView: !0,
  enableNetworkView: !0,
  enableStandaloneMode: !0,
  mobileWallets: [
    {
      id: "puzzle",
      name: "Puzzle Wallet",
      links: {
        native: "puzzleapp://",
        universal: ""
      }
    }
  ],
  desktopWallets: [
    {
      id: "puzzle",
      name: "Puzzle Wallet",
      links: {
        native: "",
        universal: "https://walletconnect.puzzle.online/"
      }
    },
    {
      id: "avail",
      name: "Avail Wallet",
      links: {
        native: "avail://",
        universal: "https://avail.global"
      }
    }
  ],
  walletImages: {
    puzzle: "https://i.imgur.com/p9tHaFC.png",
    avail: "https://i.imgur.com/GxNn8BO.png"
  }
}, NO = {
  requiredNamespaces: {
    aleo: {
      methods: Wc,
      chains: ko,
      events: Gc
    }
  }
}, rE = "@puzzlehq/sdk", nE = "Puzzle SDK", sE = "0.2.7", iE = "Your portal to privacy", oE = "./dist/puzzle.cjs.js", aE = "./dist/puzzle.es.js", cE = "./dist/puzzle.umd.js", uE = "./dist/types/src/index.d.ts", lE = {
  ".": {
    import: "./dist/puzzle.es.js",
    require: "./dist/puzzle.cjs.js",
    browser: "./dist/puzzle.umd.js",
    types: "./dist/types/src/index.d.ts"
  }
}, fE = "module", hE = {
  "fetch-fix": "find dist -type f \\( -name '*.js' -o -name '*.cjs' \\) -exec sed -i '' 's/self.fetch[[:space:]]*||/fetch ||/g' {} \\;",
  build: "vite build && tsc --declaration --emitDeclarationOnly --outDir dist/types && pnpm fetch-fix",
  "type-check": "tsc --noEmit"
}, dE = {
  "@puzzlehq/types": "1.0.11",
  "@tanstack/react-query": "^4.29.5",
  "@tanstack/react-query-devtools": "^5.13.5",
  "@trpc/client": "^10.9.0",
  "@trpc/react-query": "^10.9.0",
  "@trpc/server": "^10.8.1",
  "@types/debug": "^4.1.7",
  "@walletconnect/core": "^2.11.0",
  "@walletconnect/modal-sign-html": "^2.6.2",
  "@walletconnect/sign-client": "^2.11.0",
  "@walletconnect/types": "^2.11.0",
  "@walletconnect/utils": "^2.11.0",
  debug: "^4.3.4",
  eventemitter3: "^5.0.1",
  events: "^3.3.0",
  immer: "^9.0.19",
  process: "^0.11.10",
  react: "^18.2.0",
  ws: "^8.13.0",
  zustand: "^4.3.9"
}, pE = {
  "@types/chrome": "^0.0.228",
  "@types/node": "^18.11.18",
  "@types/react": "^18.0.27",
  "@types/react-dom": "^18.0.10",
  typescript: "^4.9.4",
  vite: "^5.0.10"
}, gE = {
  type: "git",
  url: "git+https://github.com/puzzlehq/puzzle-sdk.git"
}, yE = [
  "puzzle",
  "aleo",
  "aztec",
  "web3",
  "crypto\\"
], mE = "Puzzle", vE = "ISC", bE = {
  url: "https://github.com/puzzlehq/puzzle-sdk/issues"
}, wE = "https://github.com/puzzlehq/puzzle-sdk#readme", _E = {
  overrides: {
    "@walletconnect/core": "^2.11.1",
    "@walletconnect/sign-client": "^2.11.1"
  }
}, Jl = {
  name: rE,
  displayName: nE,
  version: sE,
  description: iE,
  main: oE,
  module: aE,
  browser: cE,
  types: uE,
  exports: lE,
  type: fE,
  scripts: hE,
  dependencies: dE,
  devDependencies: pE,
  repository: gE,
  keywords: yE,
  author: mE,
  license: vE,
  bugs: bE,
  homepage: wE,
  pnpm: _E
}, EE = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
function Qc(t, e) {
  const { message: r, code: n } = EE[t];
  return { message: e ? `${r} ${e}` : r, code: n };
}
var SE = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Xl = (t) => {
  let e;
  const r = /* @__PURE__ */ new Set(), n = (u, c) => {
    const f = typeof u == "function" ? u(e) : u;
    if (!Object.is(f, e)) {
      const d = e;
      e = c ?? (typeof f != "object" || f === null) ? f : Object.assign({}, e, f), r.forEach((p) => p(e, d));
    }
  }, s = () => e, o = { setState: n, getState: s, subscribe: (u) => (r.add(u), () => r.delete(u)), destroy: () => {
    (SE ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } };
  return e = t(n, s, o), o;
}, xE = (t) => t ? Xl(t) : Xl;
var Ga = { exports: {} }, ga = {}, Bi = { exports: {} }, ya = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ef;
function DE() {
  return ef || (ef = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = gn, e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(D) {
      {
        for (var b = arguments.length, S = new Array(b > 1 ? b - 1 : 0), g = 1; g < b; g++)
          S[g - 1] = arguments[g];
        n("error", D, S);
      }
    }
    function n(D, b, S) {
      {
        var g = e.ReactDebugCurrentFrame, l = g.getStackAddendum();
        l !== "" && (b += "%s", S = S.concat([l]));
        var y = S.map(function(C) {
          return String(C);
        });
        y.unshift("Warning: " + b), Function.prototype.apply.call(console[D], console, y);
      }
    }
    function s(D, b) {
      return D === b && (D !== 0 || 1 / D === 1 / b) || D !== D && b !== b;
    }
    var i = typeof Object.is == "function" ? Object.is : s, a = t.useState, o = t.useEffect, u = t.useLayoutEffect, c = t.useDebugValue, f = !1, d = !1;
    function p(D, b, S) {
      f || t.startTransition !== void 0 && (f = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var g = b();
      if (!d) {
        var l = b();
        i(g, l) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var y = a({
        inst: {
          value: g,
          getSnapshot: b
        }
      }), C = y[0].inst, A = y[1];
      return u(function() {
        C.value = g, C.getSnapshot = b, m(C) && A({
          inst: C
        });
      }, [D, g, b]), o(function() {
        m(C) && A({
          inst: C
        });
        var M = function() {
          m(C) && A({
            inst: C
          });
        };
        return D(M);
      }, [D]), c(g), g;
    }
    function m(D) {
      var b = D.getSnapshot, S = D.value;
      try {
        var g = b();
        return !i(S, g);
      } catch {
        return !0;
      }
    }
    function v(D, b, S) {
      return b();
    }
    var _ = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", x = !_, T = x ? v : p, w = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : T;
    ya.useSyncExternalStore = w, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ya;
}
var ma = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tf;
function OE() {
  if (tf)
    return ma;
  tf = 1;
  var t = gn;
  function e(d, p) {
    return d === p && (d !== 0 || 1 / d === 1 / p) || d !== d && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : e, n = t.useState, s = t.useEffect, i = t.useLayoutEffect, a = t.useDebugValue;
  function o(d, p) {
    var m = p(), v = n({ inst: { value: m, getSnapshot: p } }), _ = v[0].inst, x = v[1];
    return i(function() {
      _.value = m, _.getSnapshot = p, u(_) && x({ inst: _ });
    }, [d, m, p]), s(function() {
      return u(_) && x({ inst: _ }), d(function() {
        u(_) && x({ inst: _ });
      });
    }, [d]), a(m), m;
  }
  function u(d) {
    var p = d.getSnapshot;
    d = d.value;
    try {
      var m = p();
      return !r(d, m);
    } catch {
      return !0;
    }
  }
  function c(d, p) {
    return p();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : o;
  return ma.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : f, ma;
}
var rf;
function Zc() {
  return rf || (rf = 1, process.env.NODE_ENV === "production" ? Bi.exports = OE() : Bi.exports = DE()), Bi.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nf;
function IE() {
  return nf || (nf = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = gn, e = Zc();
    function r(f, d) {
      return f === d && (f !== 0 || 1 / f === 1 / d) || f !== f && d !== d;
    }
    var n = typeof Object.is == "function" ? Object.is : r, s = e.useSyncExternalStore, i = t.useRef, a = t.useEffect, o = t.useMemo, u = t.useDebugValue;
    function c(f, d, p, m, v) {
      var _ = i(null), x;
      _.current === null ? (x = {
        hasValue: !1,
        value: null
      }, _.current = x) : x = _.current;
      var T = o(function() {
        var S = !1, g, l, y = function(z) {
          if (!S) {
            S = !0, g = z;
            var G = m(z);
            if (v !== void 0 && x.hasValue) {
              var R = x.value;
              if (v(R, G))
                return l = R, R;
            }
            return l = G, G;
          }
          var L = g, Q = l;
          if (n(L, z))
            return Q;
          var V = m(z);
          return v !== void 0 && v(Q, V) ? Q : (g = z, l = V, V);
        }, C = p === void 0 ? null : p, A = function() {
          return y(d());
        }, M = C === null ? void 0 : function() {
          return y(C());
        };
        return [A, M];
      }, [d, p, m, v]), w = T[0], D = T[1], b = s(f, w, D);
      return a(function() {
        x.hasValue = !0, x.value = b;
      }, [b]), u(b), b;
    }
    ga.useSyncExternalStoreWithSelector = c, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ga;
}
var va = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sf;
function CE() {
  if (sf)
    return va;
  sf = 1;
  var t = gn, e = Zc();
  function r(c, f) {
    return c === f && (c !== 0 || 1 / c === 1 / f) || c !== c && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : r, s = e.useSyncExternalStore, i = t.useRef, a = t.useEffect, o = t.useMemo, u = t.useDebugValue;
  return va.useSyncExternalStoreWithSelector = function(c, f, d, p, m) {
    var v = i(null);
    if (v.current === null) {
      var _ = { hasValue: !1, value: null };
      v.current = _;
    } else
      _ = v.current;
    v = o(function() {
      function T(g) {
        if (!w) {
          if (w = !0, D = g, g = p(g), m !== void 0 && _.hasValue) {
            var l = _.value;
            if (m(l, g))
              return b = l;
          }
          return b = g;
        }
        if (l = b, n(D, g))
          return l;
        var y = p(g);
        return m !== void 0 && m(l, y) ? l : (D = g, b = y);
      }
      var w = !1, D, b, S = d === void 0 ? null : d;
      return [function() {
        return T(f());
      }, S === null ? void 0 : function() {
        return T(S());
      }];
    }, [f, d, p, m]);
    var x = s(c, v[0], v[1]);
    return a(function() {
      _.hasValue = !0, _.value = x;
    }, [x]), u(x), x;
  }, va;
}
process.env.NODE_ENV === "production" ? Ga.exports = CE() : Ga.exports = IE();
var RE = Ga.exports;
const TE = /* @__PURE__ */ di(RE);
var nd = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: AE } = gn, { useSyncExternalStoreWithSelector: PE } = TE;
let of = !1;
function NE(t, e = t.getState, r) {
  (nd ? "production" : void 0) !== "production" && r && !of && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), of = !0);
  const n = PE(
    t.subscribe,
    t.getState,
    t.getServerState || t.getState,
    e,
    r
  );
  return AE(n), n;
}
const af = (t) => {
  (nd ? "production" : void 0) !== "production" && typeof t != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const e = typeof t == "function" ? xE(t) : t, r = (n, s) => NE(e, n, s);
  return Object.assign(r, e), r;
}, LE = (t) => t ? af(t) : af;
var FE = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
function UE(t, e) {
  let r;
  try {
    r = t();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      var i;
      const a = (u) => u === null ? null : JSON.parse(u, e == null ? void 0 : e.reviver), o = (i = r.getItem(s)) != null ? i : null;
      return o instanceof Promise ? o.then(a) : a(o);
    },
    setItem: (s, i) => r.setItem(
      s,
      JSON.stringify(i, e == null ? void 0 : e.replacer)
    ),
    removeItem: (s) => r.removeItem(s)
  };
}
const Vs = (t) => (e) => {
  try {
    const r = t(e);
    return r instanceof Promise ? r : {
      then(n) {
        return Vs(n)(r);
      },
      catch(n) {
        return this;
      }
    };
  } catch (r) {
    return {
      then(n) {
        return this;
      },
      catch(n) {
        return Vs(n)(r);
      }
    };
  }
}, ME = (t, e) => (r, n, s) => {
  let i = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (x) => x,
    version: 0,
    merge: (x, T) => ({
      ...T,
      ...x
    }),
    ...e
  }, a = !1;
  const o = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  let c;
  try {
    c = i.getStorage();
  } catch {
  }
  if (!c)
    return t(
      (...x) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), r(...x);
      },
      n,
      s
    );
  const f = Vs(i.serialize), d = () => {
    const x = i.partialize({ ...n() });
    let T;
    const w = f({ state: x, version: i.version }).then(
      (D) => c.setItem(i.name, D)
    ).catch((D) => {
      T = D;
    });
    if (T)
      throw T;
    return w;
  }, p = s.setState;
  s.setState = (x, T) => {
    p(x, T), d();
  };
  const m = t(
    (...x) => {
      r(...x), d();
    },
    n,
    s
  );
  let v;
  const _ = () => {
    var x;
    if (!c)
      return;
    a = !1, o.forEach((w) => w(n()));
    const T = ((x = i.onRehydrateStorage) == null ? void 0 : x.call(i, n())) || void 0;
    return Vs(c.getItem.bind(c))(i.name).then((w) => {
      if (w)
        return i.deserialize(w);
    }).then((w) => {
      if (w)
        if (typeof w.version == "number" && w.version !== i.version) {
          if (i.migrate)
            return i.migrate(
              w.state,
              w.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return w.state;
    }).then((w) => {
      var D;
      return v = i.merge(
        w,
        (D = n()) != null ? D : m
      ), r(v, !0), d();
    }).then(() => {
      T == null || T(v, void 0), a = !0, u.forEach((w) => w(v));
    }).catch((w) => {
      T == null || T(void 0, w);
    });
  };
  return s.persist = {
    setOptions: (x) => {
      i = {
        ...i,
        ...x
      }, x.getStorage && (c = x.getStorage());
    },
    clearStorage: () => {
      c == null || c.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => _(),
    hasHydrated: () => a,
    onHydrate: (x) => (o.add(x), () => {
      o.delete(x);
    }),
    onFinishHydration: (x) => (u.add(x), () => {
      u.delete(x);
    })
  }, _(), v || m;
}, jE = (t, e) => (r, n, s) => {
  let i = {
    storage: UE(() => localStorage),
    partialize: (_) => _,
    version: 0,
    merge: (_, x) => ({
      ...x,
      ..._
    }),
    ...e
  }, a = !1;
  const o = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
  let c = i.storage;
  if (!c)
    return t(
      (..._) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        ), r(..._);
      },
      n,
      s
    );
  const f = () => {
    const _ = i.partialize({ ...n() });
    return c.setItem(i.name, {
      state: _,
      version: i.version
    });
  }, d = s.setState;
  s.setState = (_, x) => {
    d(_, x), f();
  };
  const p = t(
    (..._) => {
      r(..._), f();
    },
    n,
    s
  );
  let m;
  const v = () => {
    var _, x;
    if (!c)
      return;
    a = !1, o.forEach((w) => {
      var D;
      return w((D = n()) != null ? D : p);
    });
    const T = ((x = i.onRehydrateStorage) == null ? void 0 : x.call(i, (_ = n()) != null ? _ : p)) || void 0;
    return Vs(c.getItem.bind(c))(i.name).then((w) => {
      if (w)
        if (typeof w.version == "number" && w.version !== i.version) {
          if (i.migrate)
            return i.migrate(
              w.state,
              w.version
            );
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return w.state;
    }).then((w) => {
      var D;
      return m = i.merge(
        w,
        (D = n()) != null ? D : p
      ), r(m, !0), f();
    }).then(() => {
      T == null || T(m, void 0), m = n(), a = !0, u.forEach((w) => w(m));
    }).catch((w) => {
      T == null || T(void 0, w);
    });
  };
  return s.persist = {
    setOptions: (_) => {
      i = {
        ...i,
        ..._
      }, _.storage && (c = _.storage);
    },
    clearStorage: () => {
      c == null || c.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => v(),
    hasHydrated: () => a,
    onHydrate: (_) => (o.add(_), () => {
      o.delete(_);
    }),
    onFinishHydration: (_) => (u.add(_), () => {
      u.delete(_);
    })
  }, i.skipHydration || v(), m || p;
}, $E = (t, e) => "getStorage" in e || "serialize" in e || "deserialize" in e ? ((FE ? "production" : void 0) !== "production" && console.warn(
  "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
), ME(t, e)) : jE(t, e), kE = $E, yr = LE()(
  kE((t, e) => ({
    account: void 0,
    chainId: "aleo:1",
    // todo - figure out how to populate this from useConnect
    setAccount: (r) => {
      t({ account: r });
    },
    setChainId: (r) => {
      t({ chainId: r });
    },
    onDisconnect: () => {
      t({
        account: void 0,
        chainId: void 0
      }), tp.clear(), console.log("onDisconnect called!");
    }
  }), {
    name: "puzzle-wallet-store"
  })
), fs = new pi();
let Yn;
function qE(t) {
  let e = !1;
  const r = Jl.version, n = localStorage.getItem("puzzle_sdk_version");
  if (r !== n && (console.log(`${Jl.name}: Updated from ` + n + " to " + r + "!"), localStorage.setItem("puzzle_sdk_version", r), e = !0), Yn = new X1({
    projectId: eE,
    metadata: {
      name: t.dAppName,
      description: t.dAppDescription,
      url: t.dAppUrl,
      icons: [t.dAppIconURL]
    },
    modalOptions: { ...tE }
  }), e)
    try {
      zE(Yn);
    } catch (s) {
      console.error(s);
    }
  window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
}
async function zE(t) {
  const e = await (t == null ? void 0 : t.getSession());
  e && (console.log("Disconnecting session", e), yr.getState().onDisconnect(), t.disconnect({
    topic: e.topic,
    reason: Qc("USER_DISCONNECTED")
  }));
}
async function tt() {
  return new Promise((t) => {
    if (Yn)
      t(Yn);
    else {
      const e = setInterval(() => {
        Yn && (clearInterval(e), t(Yn));
      }, 200);
    }
    window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
  });
}
var Be;
(function(t) {
  t.assertEqual = (s) => s;
  function e(s) {
  }
  t.assertIs = e;
  function r(s) {
    throw new Error();
  }
  t.assertNever = r, t.arrayToEnum = (s) => {
    const i = {};
    for (const a of s)
      i[a] = a;
    return i;
  }, t.getValidEnumValues = (s) => {
    const i = t.objectKeys(s).filter((o) => typeof s[s[o]] != "number"), a = {};
    for (const o of i)
      a[o] = s[o];
    return t.objectValues(a);
  }, t.objectValues = (s) => t.objectKeys(s).map(function(i) {
    return s[i];
  }), t.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const i = [];
    for (const a in s)
      Object.prototype.hasOwnProperty.call(s, a) && i.push(a);
    return i;
  }, t.find = (s, i) => {
    for (const a of s)
      if (i(a))
        return a;
  }, t.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s;
  function n(s, i = " | ") {
    return s.map((a) => typeof a == "string" ? `'${a}'` : a).join(i);
  }
  t.joinValues = n, t.jsonStringifyReplacer = (s, i) => typeof i == "bigint" ? i.toString() : i;
})(Be || (Be = {}));
var Qa;
(function(t) {
  t.mergeShapes = (e, r) => ({
    ...e,
    ...r
    // second overwrites first
  });
})(Qa || (Qa = {}));
const ee = Be.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), cn = (t) => {
  switch (typeof t) {
    case "undefined":
      return ee.undefined;
    case "string":
      return ee.string;
    case "number":
      return isNaN(t) ? ee.nan : ee.number;
    case "boolean":
      return ee.boolean;
    case "function":
      return ee.function;
    case "bigint":
      return ee.bigint;
    case "symbol":
      return ee.symbol;
    case "object":
      return Array.isArray(t) ? ee.array : t === null ? ee.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? ee.promise : typeof Map < "u" && t instanceof Map ? ee.map : typeof Set < "u" && t instanceof Set ? ee.set : typeof Date < "u" && t instanceof Date ? ee.date : ee.object;
    default:
      return ee.unknown;
  }
}, W = Be.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), BE = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class Dr extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = e;
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const r = e || function(i) {
      return i.message;
    }, n = { _errors: [] }, s = (i) => {
      for (const a of i.issues)
        if (a.code === "invalid_union")
          a.unionErrors.map(s);
        else if (a.code === "invalid_return_type")
          s(a.returnTypeError);
        else if (a.code === "invalid_arguments")
          s(a.argumentsError);
        else if (a.path.length === 0)
          n._errors.push(r(a));
        else {
          let o = n, u = 0;
          for (; u < a.path.length; ) {
            const c = a.path[u];
            u === a.path.length - 1 ? (o[c] = o[c] || { _errors: [] }, o[c]._errors.push(r(a))) : o[c] = o[c] || { _errors: [] }, o = o[c], u++;
          }
        }
    };
    return s(this), n;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Be.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (r) => r.message) {
    const r = {}, n = [];
    for (const s of this.issues)
      s.path.length > 0 ? (r[s.path[0]] = r[s.path[0]] || [], r[s.path[0]].push(e(s))) : n.push(e(s));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
Dr.create = (t) => new Dr(t);
const Ks = (t, e) => {
  let r;
  switch (t.code) {
    case W.invalid_type:
      t.received === ee.undefined ? r = "Required" : r = `Expected ${t.expected}, received ${t.received}`;
      break;
    case W.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(t.expected, Be.jsonStringifyReplacer)}`;
      break;
    case W.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Be.joinValues(t.keys, ", ")}`;
      break;
    case W.invalid_union:
      r = "Invalid input";
      break;
    case W.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Be.joinValues(t.options)}`;
      break;
    case W.invalid_enum_value:
      r = `Invalid enum value. Expected ${Be.joinValues(t.options)}, received '${t.received}'`;
      break;
    case W.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case W.invalid_return_type:
      r = "Invalid function return type";
      break;
    case W.invalid_date:
      r = "Invalid date";
      break;
    case W.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (r = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? r = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? r = `Invalid input: must end with "${t.validation.endsWith}"` : Be.assertNever(t.validation) : t.validation !== "regex" ? r = `Invalid ${t.validation}` : r = "Invalid";
      break;
    case W.too_small:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : r = "Invalid input";
      break;
    case W.too_big:
      t.type === "array" ? r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : r = "Invalid input";
      break;
    case W.custom:
      r = "Invalid input";
      break;
    case W.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case W.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case W.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = e.defaultError, Be.assertNever(t);
  }
  return { message: r };
};
let sd = Ks;
function VE(t) {
  sd = t;
}
function fo() {
  return sd;
}
const ho = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: s } = t, i = [...r, ...s.path || []], a = {
    ...s,
    path: i
  };
  let o = "";
  const u = n.filter((c) => !!c).slice().reverse();
  for (const c of u)
    o = c(a, { data: e, defaultError: o }).message;
  return {
    ...s,
    path: i,
    message: s.message || o
  };
}, KE = [];
function re(t, e) {
  const r = ho({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      fo(),
      Ks
      // then global default map
    ].filter((n) => !!n)
  });
  t.common.issues.push(r);
}
class zt {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, r) {
    const n = [];
    for (const s of r) {
      if (s.status === "aborted")
        return de;
      s.status === "dirty" && e.dirty(), n.push(s.value);
    }
    return { status: e.value, value: n };
  }
  static async mergeObjectAsync(e, r) {
    const n = [];
    for (const s of r)
      n.push({
        key: await s.key,
        value: await s.value
      });
    return zt.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, r) {
    const n = {};
    for (const s of r) {
      const { key: i, value: a } = s;
      if (i.status === "aborted" || a.status === "aborted")
        return de;
      i.status === "dirty" && e.dirty(), a.status === "dirty" && e.dirty(), (typeof a.value < "u" || s.alwaysSet) && (n[i.value] = a.value);
    }
    return { status: e.value, value: n };
  }
}
const de = Object.freeze({
  status: "aborted"
}), id = (t) => ({ status: "dirty", value: t }), Yt = (t) => ({ status: "valid", value: t }), Za = (t) => t.status === "aborted", Ya = (t) => t.status === "dirty", po = (t) => t.status === "valid", go = (t) => typeof Promise < "u" && t instanceof Promise;
var ie;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(ie || (ie = {}));
class Mr {
  constructor(e, r, n, s) {
    this._cachedPath = [], this.parent = e, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const cf = (t, e) => {
  if (po(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new Dr(t.common.issues);
      return this._error = r, this._error;
    }
  };
};
function be(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: r, required_error: n, description: s } = t;
  if (e && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: s } : { errorMap: (a, o) => a.code !== "invalid_type" ? { message: o.defaultError } : typeof o.data > "u" ? { message: n ?? o.defaultError } : { message: r ?? o.defaultError }, description: s };
}
class De {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return cn(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: cn(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new zt(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: cn(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (go(r))
      throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(e) {
    const r = this._parse(e);
    return Promise.resolve(r);
  }
  parse(e, r) {
    const n = this.safeParse(e, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  safeParse(e, r) {
    var n;
    const s = {
      common: {
        issues: [],
        async: (n = r == null ? void 0 : r.async) !== null && n !== void 0 ? n : !1,
        contextualErrorMap: r == null ? void 0 : r.errorMap
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: cn(e)
    }, i = this._parseSync({ data: e, path: s.path, parent: s });
    return cf(s, i);
  }
  async parseAsync(e, r) {
    const n = await this.safeParseAsync(e, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  async safeParseAsync(e, r) {
    const n = {
      common: {
        issues: [],
        contextualErrorMap: r == null ? void 0 : r.errorMap,
        async: !0
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: cn(e)
    }, s = this._parse({ data: e, path: n.path, parent: n }), i = await (go(s) ? s : Promise.resolve(s));
    return cf(n, i);
  }
  refine(e, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, i) => {
      const a = e(s), o = () => i.addIssue({
        code: W.custom,
        ...n(s)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((u) => u ? !0 : (o(), !1)) : a ? !0 : (o(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((n, s) => e(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
  }
  _refinement(e) {
    return new Ir({
      schema: this,
      typeName: le.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return Qr.create(this, this._def);
  }
  nullable() {
    return Mn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Or.create(this, this._def);
  }
  promise() {
    return ds.create(this, this._def);
  }
  or(e) {
    return Qs.create([this, e], this._def);
  }
  and(e) {
    return Zs.create(this, e, this._def);
  }
  transform(e) {
    return new Ir({
      ...be(this._def),
      schema: this,
      typeName: le.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new ti({
      ...be(this._def),
      innerType: this,
      defaultValue: r,
      typeName: le.ZodDefault
    });
  }
  brand() {
    return new ad({
      typeName: le.ZodBranded,
      type: this,
      ...be(this._def)
    });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new bo({
      ...be(this._def),
      innerType: this,
      catchValue: r,
      typeName: le.ZodCatch
    });
  }
  describe(e) {
    const r = this.constructor;
    return new r({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return Si.create(this, e);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const HE = /^c[^\s-]{8,}$/i, WE = /^[a-z][a-z0-9]*$/, GE = /[0-9A-HJKMNP-TV-Z]{26}/, QE = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, ZE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, YE = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u"), JE = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, XE = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, eS = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function tS(t, e) {
  return !!((e === "v4" || !e) && JE.test(t) || (e === "v6" || !e) && XE.test(t));
}
class xr extends De {
  constructor() {
    super(...arguments), this._regex = (e, r, n) => this.refinement((s) => e.test(s), {
      validation: r,
      code: W.invalid_string,
      ...ie.errToObj(n)
    }), this.nonempty = (e) => this.min(1, ie.errToObj(e)), this.trim = () => new xr({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new xr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new xr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== ee.string) {
      const i = this._getOrReturnCtx(e);
      return re(
        i,
        {
          code: W.invalid_type,
          expected: ee.string,
          received: i.parsedType
        }
        //
      ), de;
    }
    const n = new zt();
    let s;
    for (const i of this._def.checks)
      if (i.kind === "min")
        e.data.length < i.value && (s = this._getOrReturnCtx(e, s), re(s, {
          code: W.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), n.dirty());
      else if (i.kind === "max")
        e.data.length > i.value && (s = this._getOrReturnCtx(e, s), re(s, {
          code: W.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), n.dirty());
      else if (i.kind === "length") {
        const a = e.data.length > i.value, o = e.data.length < i.value;
        (a || o) && (s = this._getOrReturnCtx(e, s), a ? re(s, {
          code: W.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }) : o && re(s, {
          code: W.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }), n.dirty());
      } else if (i.kind === "email")
        ZE.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "email",
          code: W.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "emoji")
        YE.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "emoji",
          code: W.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "uuid")
        QE.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "uuid",
          code: W.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid")
        HE.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "cuid",
          code: W.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid2")
        WE.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "cuid2",
          code: W.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "ulid")
        GE.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "ulid",
          code: W.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "url")
        try {
          new URL(e.data);
        } catch {
          s = this._getOrReturnCtx(e, s), re(s, {
            validation: "url",
            code: W.invalid_string,
            message: i.message
          }), n.dirty();
        }
      else
        i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "regex",
          code: W.invalid_string,
          message: i.message
        }), n.dirty())) : i.kind === "trim" ? e.data = e.data.trim() : i.kind === "includes" ? e.data.includes(i.value, i.position) || (s = this._getOrReturnCtx(e, s), re(s, {
          code: W.invalid_string,
          validation: { includes: i.value, position: i.position },
          message: i.message
        }), n.dirty()) : i.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : i.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : i.kind === "startsWith" ? e.data.startsWith(i.value) || (s = this._getOrReturnCtx(e, s), re(s, {
          code: W.invalid_string,
          validation: { startsWith: i.value },
          message: i.message
        }), n.dirty()) : i.kind === "endsWith" ? e.data.endsWith(i.value) || (s = this._getOrReturnCtx(e, s), re(s, {
          code: W.invalid_string,
          validation: { endsWith: i.value },
          message: i.message
        }), n.dirty()) : i.kind === "datetime" ? eS(i).test(e.data) || (s = this._getOrReturnCtx(e, s), re(s, {
          code: W.invalid_string,
          validation: "datetime",
          message: i.message
        }), n.dirty()) : i.kind === "ip" ? tS(e.data, i.version) || (s = this._getOrReturnCtx(e, s), re(s, {
          validation: "ip",
          code: W.invalid_string,
          message: i.message
        }), n.dirty()) : Be.assertNever(i);
    return { status: n.value, value: e.data };
  }
  _addCheck(e) {
    return new xr({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...ie.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...ie.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...ie.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...ie.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...ie.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...ie.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...ie.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...ie.errToObj(e) });
  }
  datetime(e) {
    var r;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (r = e == null ? void 0 : e.offset) !== null && r !== void 0 ? r : !1,
      ...ie.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...ie.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...ie.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...ie.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...ie.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...ie.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...ie.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...ie.errToObj(r)
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get minLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
xr.create = (t) => {
  var e;
  return new xr({
    checks: [],
    typeName: le.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...be(t)
  });
};
function rS(t, e) {
  const r = (t.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, s = r > n ? r : n, i = parseInt(t.toFixed(s).replace(".", "")), a = parseInt(e.toFixed(s).replace(".", ""));
  return i % a / Math.pow(10, s);
}
class fn extends De {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== ee.number) {
      const i = this._getOrReturnCtx(e);
      return re(i, {
        code: W.invalid_type,
        expected: ee.number,
        received: i.parsedType
      }), de;
    }
    let n;
    const s = new zt();
    for (const i of this._def.checks)
      i.kind === "int" ? Be.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.invalid_type,
        expected: "integer",
        received: "float",
        message: i.message
      }), s.dirty()) : i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.too_small,
        minimum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.too_big,
        maximum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? rS(e.data, i.value) !== 0 && (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : i.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.not_finite,
        message: i.message
      }), s.dirty()) : Be.assertNever(i);
    return { status: s.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, ie.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, ie.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, ie.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, ie.toString(r));
  }
  setLimit(e, r, n, s) {
    return new fn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: ie.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new fn({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: ie.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: ie.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: ie.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: ie.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: ie.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: ie.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: ie.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: ie.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: ie.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && Be.isInteger(e.value));
  }
  get isFinite() {
    let e = null, r = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min" ? (r === null || n.value > r) && (r = n.value) : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    }
    return Number.isFinite(r) && Number.isFinite(e);
  }
}
fn.create = (t) => new fn({
  checks: [],
  typeName: le.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...be(t)
});
class hn extends De {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== ee.bigint) {
      const i = this._getOrReturnCtx(e);
      return re(i, {
        code: W.invalid_type,
        expected: ee.bigint,
        received: i.parsedType
      }), de;
    }
    let n;
    const s = new zt();
    for (const i of this._def.checks)
      i.kind === "min" ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.too_small,
        type: "bigint",
        minimum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.too_big,
        type: "bigint",
        maximum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? e.data % i.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), re(n, {
        code: W.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : Be.assertNever(i);
    return { status: s.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, ie.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, ie.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, ie.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, ie.toString(r));
  }
  setLimit(e, r, n, s) {
    return new hn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: r,
          inclusive: n,
          message: ie.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new hn({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: ie.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: ie.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: ie.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: ie.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: ie.toString(r)
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
hn.create = (t) => {
  var e;
  return new hn({
    checks: [],
    typeName: le.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...be(t)
  });
};
class Hs extends De {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== ee.boolean) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: W.invalid_type,
        expected: ee.boolean,
        received: n.parsedType
      }), de;
    }
    return Yt(e.data);
  }
}
Hs.create = (t) => new Hs({
  typeName: le.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...be(t)
});
class Fn extends De {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== ee.date) {
      const i = this._getOrReturnCtx(e);
      return re(i, {
        code: W.invalid_type,
        expected: ee.date,
        received: i.parsedType
      }), de;
    }
    if (isNaN(e.data.getTime())) {
      const i = this._getOrReturnCtx(e);
      return re(i, {
        code: W.invalid_date
      }), de;
    }
    const n = new zt();
    let s;
    for (const i of this._def.checks)
      i.kind === "min" ? e.data.getTime() < i.value && (s = this._getOrReturnCtx(e, s), re(s, {
        code: W.too_small,
        message: i.message,
        inclusive: !0,
        exact: !1,
        minimum: i.value,
        type: "date"
      }), n.dirty()) : i.kind === "max" ? e.data.getTime() > i.value && (s = this._getOrReturnCtx(e, s), re(s, {
        code: W.too_big,
        message: i.message,
        inclusive: !0,
        exact: !1,
        maximum: i.value,
        type: "date"
      }), n.dirty()) : Be.assertNever(i);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new Fn({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: ie.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: ie.toString(r)
    });
  }
  get minDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
}
Fn.create = (t) => new Fn({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: le.ZodDate,
  ...be(t)
});
class yo extends De {
  _parse(e) {
    if (this._getType(e) !== ee.symbol) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: W.invalid_type,
        expected: ee.symbol,
        received: n.parsedType
      }), de;
    }
    return Yt(e.data);
  }
}
yo.create = (t) => new yo({
  typeName: le.ZodSymbol,
  ...be(t)
});
class Ws extends De {
  _parse(e) {
    if (this._getType(e) !== ee.undefined) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: W.invalid_type,
        expected: ee.undefined,
        received: n.parsedType
      }), de;
    }
    return Yt(e.data);
  }
}
Ws.create = (t) => new Ws({
  typeName: le.ZodUndefined,
  ...be(t)
});
class Gs extends De {
  _parse(e) {
    if (this._getType(e) !== ee.null) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: W.invalid_type,
        expected: ee.null,
        received: n.parsedType
      }), de;
    }
    return Yt(e.data);
  }
}
Gs.create = (t) => new Gs({
  typeName: le.ZodNull,
  ...be(t)
});
class hs extends De {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return Yt(e.data);
  }
}
hs.create = (t) => new hs({
  typeName: le.ZodAny,
  ...be(t)
});
class Pn extends De {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return Yt(e.data);
  }
}
Pn.create = (t) => new Pn({
  typeName: le.ZodUnknown,
  ...be(t)
});
class Yr extends De {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return re(r, {
      code: W.invalid_type,
      expected: ee.never,
      received: r.parsedType
    }), de;
  }
}
Yr.create = (t) => new Yr({
  typeName: le.ZodNever,
  ...be(t)
});
class mo extends De {
  _parse(e) {
    if (this._getType(e) !== ee.undefined) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: W.invalid_type,
        expected: ee.void,
        received: n.parsedType
      }), de;
    }
    return Yt(e.data);
  }
}
mo.create = (t) => new mo({
  typeName: le.ZodVoid,
  ...be(t)
});
class Or extends De {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e), s = this._def;
    if (r.parsedType !== ee.array)
      return re(r, {
        code: W.invalid_type,
        expected: ee.array,
        received: r.parsedType
      }), de;
    if (s.exactLength !== null) {
      const a = r.data.length > s.exactLength.value, o = r.data.length < s.exactLength.value;
      (a || o) && (re(r, {
        code: a ? W.too_big : W.too_small,
        minimum: o ? s.exactLength.value : void 0,
        maximum: a ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (re(r, {
      code: W.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (re(r, {
      code: W.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((a, o) => s.type._parseAsync(new Mr(r, a, r.path, o)))).then((a) => zt.mergeArray(n, a));
    const i = [...r.data].map((a, o) => s.type._parseSync(new Mr(r, a, r.path, o)));
    return zt.mergeArray(n, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new Or({
      ...this._def,
      minLength: { value: e, message: ie.toString(r) }
    });
  }
  max(e, r) {
    return new Or({
      ...this._def,
      maxLength: { value: e, message: ie.toString(r) }
    });
  }
  length(e, r) {
    return new Or({
      ...this._def,
      exactLength: { value: e, message: ie.toString(r) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Or.create = (t, e) => new Or({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: le.ZodArray,
  ...be(e)
});
function Qn(t) {
  if (t instanceof it) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = Qr.create(Qn(n));
    }
    return new it({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof Or ? new Or({
      ...t._def,
      type: Qn(t.element)
    }) : t instanceof Qr ? Qr.create(Qn(t.unwrap())) : t instanceof Mn ? Mn.create(Qn(t.unwrap())) : t instanceof jr ? jr.create(t.items.map((e) => Qn(e))) : t;
}
class it extends De {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), r = Be.objectKeys(e);
    return this._cached = { shape: e, keys: r };
  }
  _parse(e) {
    if (this._getType(e) !== ee.object) {
      const c = this._getOrReturnCtx(e);
      return re(c, {
        code: W.invalid_type,
        expected: ee.object,
        received: c.parsedType
      }), de;
    }
    const { status: n, ctx: s } = this._processInputParams(e), { shape: i, keys: a } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof Yr && this._def.unknownKeys === "strip"))
      for (const c in s.data)
        a.includes(c) || o.push(c);
    const u = [];
    for (const c of a) {
      const f = i[c], d = s.data[c];
      u.push({
        key: { status: "valid", value: c },
        value: f._parse(new Mr(s, d, s.path, c)),
        alwaysSet: c in s.data
      });
    }
    if (this._def.catchall instanceof Yr) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const f of o)
          u.push({
            key: { status: "valid", value: f },
            value: { status: "valid", value: s.data[f] }
          });
      else if (c === "strict")
        o.length > 0 && (re(s, {
          code: W.unrecognized_keys,
          keys: o
        }), n.dirty());
      else if (c !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const f of o) {
        const d = s.data[f];
        u.push({
          key: { status: "valid", value: f },
          value: c._parse(
            new Mr(s, d, s.path, f)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: f in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const f of u) {
        const d = await f.key;
        c.push({
          key: d,
          value: await f.value,
          alwaysSet: f.alwaysSet
        });
      }
      return c;
    }).then((c) => zt.mergeObjectSync(n, c)) : zt.mergeObjectSync(n, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return ie.errToObj, new it({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (r, n) => {
          var s, i, a, o;
          const u = (a = (i = (s = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(s, r, n).message) !== null && a !== void 0 ? a : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (o = ie.errToObj(e).message) !== null && o !== void 0 ? o : u
          } : {
            message: u
          };
        }
      } : {}
    });
  }
  strip() {
    return new it({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new it({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(e) {
    return new it({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new it({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: le.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(e, r) {
    return this.augment({ [e]: r });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(e) {
    return new it({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const r = {};
    return Be.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new it({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    const r = {};
    return Be.objectKeys(this.shape).forEach((n) => {
      e[n] || (r[n] = this.shape[n]);
    }), new it({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Qn(this);
  }
  partial(e) {
    const r = {};
    return Be.objectKeys(this.shape).forEach((n) => {
      const s = this.shape[n];
      e && !e[n] ? r[n] = s : r[n] = s.optional();
    }), new it({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    const r = {};
    return Be.objectKeys(this.shape).forEach((n) => {
      if (e && !e[n])
        r[n] = this.shape[n];
      else {
        let i = this.shape[n];
        for (; i instanceof Qr; )
          i = i._def.innerType;
        r[n] = i;
      }
    }), new it({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return od(Be.objectKeys(this.shape));
  }
}
it.create = (t, e) => new it({
  shape: () => t,
  unknownKeys: "strip",
  catchall: Yr.create(),
  typeName: le.ZodObject,
  ...be(e)
});
it.strictCreate = (t, e) => new it({
  shape: () => t,
  unknownKeys: "strict",
  catchall: Yr.create(),
  typeName: le.ZodObject,
  ...be(e)
});
it.lazycreate = (t, e) => new it({
  shape: t,
  unknownKeys: "strip",
  catchall: Yr.create(),
  typeName: le.ZodObject,
  ...be(e)
});
class Qs extends De {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = this._def.options;
    function s(i) {
      for (const o of i)
        if (o.result.status === "valid")
          return o.result;
      for (const o of i)
        if (o.result.status === "dirty")
          return r.common.issues.push(...o.ctx.common.issues), o.result;
      const a = i.map((o) => new Dr(o.ctx.common.issues));
      return re(r, {
        code: W.invalid_union,
        unionErrors: a
      }), de;
    }
    if (r.common.async)
      return Promise.all(n.map(async (i) => {
        const a = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await i._parseAsync({
            data: r.data,
            path: r.path,
            parent: a
          }),
          ctx: a
        };
      })).then(s);
    {
      let i;
      const a = [];
      for (const u of n) {
        const c = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, f = u._parseSync({
          data: r.data,
          path: r.path,
          parent: c
        });
        if (f.status === "valid")
          return f;
        f.status === "dirty" && !i && (i = { result: f, ctx: c }), c.common.issues.length && a.push(c.common.issues);
      }
      if (i)
        return r.common.issues.push(...i.ctx.common.issues), i.result;
      const o = a.map((u) => new Dr(u));
      return re(r, {
        code: W.invalid_union,
        unionErrors: o
      }), de;
    }
  }
  get options() {
    return this._def.options;
  }
}
Qs.create = (t, e) => new Qs({
  options: t,
  typeName: le.ZodUnion,
  ...be(e)
});
const Xi = (t) => t instanceof Js ? Xi(t.schema) : t instanceof Ir ? Xi(t.innerType()) : t instanceof Xs ? [t.value] : t instanceof dn ? t.options : t instanceof ei ? Object.keys(t.enum) : t instanceof ti ? Xi(t._def.innerType) : t instanceof Ws ? [void 0] : t instanceof Gs ? [null] : null;
class qo extends De {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ee.object)
      return re(r, {
        code: W.invalid_type,
        expected: ee.object,
        received: r.parsedType
      }), de;
    const n = this.discriminator, s = r.data[n], i = this.optionsMap.get(s);
    return i ? r.common.async ? i._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : i._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (re(r, {
      code: W.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), de);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(e, r, n) {
    const s = /* @__PURE__ */ new Map();
    for (const i of r) {
      const a = Xi(i.shape[e]);
      if (!a)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of a) {
        if (s.has(o))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        s.set(o, i);
      }
    }
    return new qo({
      typeName: le.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: s,
      ...be(n)
    });
  }
}
function Ja(t, e) {
  const r = cn(t), n = cn(e);
  if (t === e)
    return { valid: !0, data: t };
  if (r === ee.object && n === ee.object) {
    const s = Be.objectKeys(e), i = Be.objectKeys(t).filter((o) => s.indexOf(o) !== -1), a = { ...t, ...e };
    for (const o of i) {
      const u = Ja(t[o], e[o]);
      if (!u.valid)
        return { valid: !1 };
      a[o] = u.data;
    }
    return { valid: !0, data: a };
  } else if (r === ee.array && n === ee.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const s = [];
    for (let i = 0; i < t.length; i++) {
      const a = t[i], o = e[i], u = Ja(a, o);
      if (!u.valid)
        return { valid: !1 };
      s.push(u.data);
    }
    return { valid: !0, data: s };
  } else
    return r === ee.date && n === ee.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class Zs extends De {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = (i, a) => {
      if (Za(i) || Za(a))
        return de;
      const o = Ja(i.value, a.value);
      return o.valid ? ((Ya(i) || Ya(a)) && r.dirty(), { status: r.value, value: o.data }) : (re(n, {
        code: W.invalid_intersection_types
      }), de);
    };
    return n.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }),
      this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })
    ]).then(([i, a]) => s(i, a)) : s(this._def.left._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }), this._def.right._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }));
  }
}
Zs.create = (t, e, r) => new Zs({
  left: t,
  right: e,
  typeName: le.ZodIntersection,
  ...be(r)
});
class jr extends De {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ee.array)
      return re(n, {
        code: W.invalid_type,
        expected: ee.array,
        received: n.parsedType
      }), de;
    if (n.data.length < this._def.items.length)
      return re(n, {
        code: W.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), de;
    !this._def.rest && n.data.length > this._def.items.length && (re(n, {
      code: W.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const i = [...n.data].map((a, o) => {
      const u = this._def.items[o] || this._def.rest;
      return u ? u._parse(new Mr(n, a, n.path, o)) : null;
    }).filter((a) => !!a);
    return n.common.async ? Promise.all(i).then((a) => zt.mergeArray(r, a)) : zt.mergeArray(r, i);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new jr({
      ...this._def,
      rest: e
    });
  }
}
jr.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new jr({
    items: t,
    typeName: le.ZodTuple,
    rest: null,
    ...be(e)
  });
};
class Ys extends De {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ee.object)
      return re(n, {
        code: W.invalid_type,
        expected: ee.object,
        received: n.parsedType
      }), de;
    const s = [], i = this._def.keyType, a = this._def.valueType;
    for (const o in n.data)
      s.push({
        key: i._parse(new Mr(n, o, n.path, o)),
        value: a._parse(new Mr(n, n.data[o], n.path, o))
      });
    return n.common.async ? zt.mergeObjectAsync(r, s) : zt.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return r instanceof De ? new Ys({
      keyType: e,
      valueType: r,
      typeName: le.ZodRecord,
      ...be(n)
    }) : new Ys({
      keyType: xr.create(),
      valueType: e,
      typeName: le.ZodRecord,
      ...be(r)
    });
  }
}
class vo extends De {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ee.map)
      return re(n, {
        code: W.invalid_type,
        expected: ee.map,
        received: n.parsedType
      }), de;
    const s = this._def.keyType, i = this._def.valueType, a = [...n.data.entries()].map(([o, u], c) => ({
      key: s._parse(new Mr(n, o, n.path, [c, "key"])),
      value: i._parse(new Mr(n, u, n.path, [c, "value"]))
    }));
    if (n.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of a) {
          const c = await u.key, f = await u.value;
          if (c.status === "aborted" || f.status === "aborted")
            return de;
          (c.status === "dirty" || f.status === "dirty") && r.dirty(), o.set(c.value, f.value);
        }
        return { status: r.value, value: o };
      });
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const u of a) {
        const c = u.key, f = u.value;
        if (c.status === "aborted" || f.status === "aborted")
          return de;
        (c.status === "dirty" || f.status === "dirty") && r.dirty(), o.set(c.value, f.value);
      }
      return { status: r.value, value: o };
    }
  }
}
vo.create = (t, e, r) => new vo({
  valueType: e,
  keyType: t,
  typeName: le.ZodMap,
  ...be(r)
});
class Un extends De {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== ee.set)
      return re(n, {
        code: W.invalid_type,
        expected: ee.set,
        received: n.parsedType
      }), de;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (re(n, {
      code: W.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (re(n, {
      code: W.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), r.dirty());
    const i = this._def.valueType;
    function a(u) {
      const c = /* @__PURE__ */ new Set();
      for (const f of u) {
        if (f.status === "aborted")
          return de;
        f.status === "dirty" && r.dirty(), c.add(f.value);
      }
      return { status: r.value, value: c };
    }
    const o = [...n.data.values()].map((u, c) => i._parse(new Mr(n, u, n.path, c)));
    return n.common.async ? Promise.all(o).then((u) => a(u)) : a(o);
  }
  min(e, r) {
    return new Un({
      ...this._def,
      minSize: { value: e, message: ie.toString(r) }
    });
  }
  max(e, r) {
    return new Un({
      ...this._def,
      maxSize: { value: e, message: ie.toString(r) }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Un.create = (t, e) => new Un({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: le.ZodSet,
  ...be(e)
});
class ns extends De {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ee.function)
      return re(r, {
        code: W.invalid_type,
        expected: ee.function,
        received: r.parsedType
      }), de;
    function n(o, u) {
      return ho({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          fo(),
          Ks
        ].filter((c) => !!c),
        issueData: {
          code: W.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function s(o, u) {
      return ho({
        data: o,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          fo(),
          Ks
        ].filter((c) => !!c),
        issueData: {
          code: W.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const i = { errorMap: r.common.contextualErrorMap }, a = r.data;
    return this._def.returns instanceof ds ? Yt(async (...o) => {
      const u = new Dr([]), c = await this._def.args.parseAsync(o, i).catch((p) => {
        throw u.addIssue(n(o, p)), u;
      }), f = await a(...c);
      return await this._def.returns._def.type.parseAsync(f, i).catch((p) => {
        throw u.addIssue(s(f, p)), u;
      });
    }) : Yt((...o) => {
      const u = this._def.args.safeParse(o, i);
      if (!u.success)
        throw new Dr([n(o, u.error)]);
      const c = a(...u.data), f = this._def.returns.safeParse(c, i);
      if (!f.success)
        throw new Dr([s(c, f.error)]);
      return f.data;
    });
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new ns({
      ...this._def,
      args: jr.create(e).rest(Pn.create())
    });
  }
  returns(e) {
    return new ns({
      ...this._def,
      returns: e
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, r, n) {
    return new ns({
      args: e || jr.create([]).rest(Pn.create()),
      returns: r || Pn.create(),
      typeName: le.ZodFunction,
      ...be(n)
    });
  }
}
class Js extends De {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Js.create = (t, e) => new Js({
  getter: t,
  typeName: le.ZodLazy,
  ...be(e)
});
class Xs extends De {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return re(r, {
        received: r.data,
        code: W.invalid_literal,
        expected: this._def.value
      }), de;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Xs.create = (t, e) => new Xs({
  value: t,
  typeName: le.ZodLiteral,
  ...be(e)
});
function od(t, e) {
  return new dn({
    values: t,
    typeName: le.ZodEnum,
    ...be(e)
  });
}
class dn extends De {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return re(r, {
        expected: Be.joinValues(n),
        received: r.parsedType,
        code: W.invalid_type
      }), de;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const r = this._getOrReturnCtx(e), n = this._def.values;
      return re(r, {
        received: r.data,
        code: W.invalid_enum_value,
        options: n
      }), de;
    }
    return Yt(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  get Values() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  get Enum() {
    const e = {};
    for (const r of this._def.values)
      e[r] = r;
    return e;
  }
  extract(e) {
    return dn.create(e);
  }
  exclude(e) {
    return dn.create(this.options.filter((r) => !e.includes(r)));
  }
}
dn.create = od;
class ei extends De {
  _parse(e) {
    const r = Be.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== ee.string && n.parsedType !== ee.number) {
      const s = Be.objectValues(r);
      return re(n, {
        expected: Be.joinValues(s),
        received: n.parsedType,
        code: W.invalid_type
      }), de;
    }
    if (r.indexOf(e.data) === -1) {
      const s = Be.objectValues(r);
      return re(n, {
        received: n.data,
        code: W.invalid_enum_value,
        options: s
      }), de;
    }
    return Yt(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
ei.create = (t, e) => new ei({
  values: t,
  typeName: le.ZodNativeEnum,
  ...be(e)
});
class ds extends De {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== ee.promise && r.common.async === !1)
      return re(r, {
        code: W.invalid_type,
        expected: ee.promise,
        received: r.parsedType
      }), de;
    const n = r.parsedType === ee.promise ? r.data : Promise.resolve(r.data);
    return Yt(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
ds.create = (t, e) => new ds({
  type: t,
  typeName: le.ZodPromise,
  ...be(e)
});
class Ir extends De {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === le.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e), s = this._def.effect || null;
    if (s.type === "preprocess") {
      const a = s.transform(n.data);
      return n.common.async ? Promise.resolve(a).then((o) => this._def.schema._parseAsync({
        data: o,
        path: n.path,
        parent: n
      })) : this._def.schema._parseSync({
        data: a,
        path: n.path,
        parent: n
      });
    }
    const i = {
      addIssue: (a) => {
        re(n, a), a.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (i.addIssue = i.addIssue.bind(i), s.type === "refinement") {
      const a = (o) => {
        const u = s.refinement(o, i);
        if (n.common.async)
          return Promise.resolve(u);
        if (u instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? de : (o.status === "dirty" && r.dirty(), a(o.value), { status: r.value, value: o.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => o.status === "aborted" ? de : (o.status === "dirty" && r.dirty(), a(o.value).then(() => ({ status: r.value, value: o.value }))));
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!po(a))
          return a;
        const o = s.transform(a.value, i);
        if (o instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: o };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => po(a) ? Promise.resolve(s.transform(a.value, i)).then((o) => ({ status: r.value, value: o })) : a);
    Be.assertNever(s);
  }
}
Ir.create = (t, e, r) => new Ir({
  schema: t,
  typeName: le.ZodEffects,
  effect: e,
  ...be(r)
});
Ir.createWithPreprocess = (t, e, r) => new Ir({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: le.ZodEffects,
  ...be(r)
});
class Qr extends De {
  _parse(e) {
    return this._getType(e) === ee.undefined ? Yt(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Qr.create = (t, e) => new Qr({
  innerType: t,
  typeName: le.ZodOptional,
  ...be(e)
});
class Mn extends De {
  _parse(e) {
    return this._getType(e) === ee.null ? Yt(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Mn.create = (t, e) => new Mn({
  innerType: t,
  typeName: le.ZodNullable,
  ...be(e)
});
class ti extends De {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let n = r.data;
    return r.parsedType === ee.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ti.create = (t, e) => new ti({
  innerType: t,
  typeName: le.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...be(e)
});
class bo extends De {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = {
      ...r,
      common: {
        ...r.common,
        issues: []
      }
    }, s = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    return go(s) ? s.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Dr(n.common.issues);
        }
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Dr(n.common.issues);
        }
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
bo.create = (t, e) => new bo({
  innerType: t,
  typeName: le.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...be(e)
});
class wo extends De {
  _parse(e) {
    if (this._getType(e) !== ee.nan) {
      const n = this._getOrReturnCtx(e);
      return re(n, {
        code: W.invalid_type,
        expected: ee.nan,
        received: n.parsedType
      }), de;
    }
    return { status: "valid", value: e.data };
  }
}
wo.create = (t) => new wo({
  typeName: le.ZodNaN,
  ...be(t)
});
const nS = Symbol("zod_brand");
class ad extends De {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e), n = r.data;
    return this._def.type._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class Si extends De {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? de : i.status === "dirty" ? (r.dirty(), id(i.value)) : this._def.out._parseAsync({
          data: i.value,
          path: n.path,
          parent: n
        });
      })();
    {
      const s = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      return s.status === "aborted" ? de : s.status === "dirty" ? (r.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: n.path,
        parent: n
      });
    }
  }
  static create(e, r) {
    return new Si({
      in: e,
      out: r,
      typeName: le.ZodPipeline
    });
  }
}
const cd = (t, e = {}, r) => t ? hs.create().superRefine((n, s) => {
  var i, a;
  if (!t(n)) {
    const o = typeof e == "function" ? e(n) : e, u = (a = (i = o.fatal) !== null && i !== void 0 ? i : r) !== null && a !== void 0 ? a : !0, c = typeof o == "string" ? { message: o } : o;
    s.addIssue({ code: "custom", ...c, fatal: u });
  }
}) : hs.create(), sS = {
  object: it.lazycreate
};
var le;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline";
})(le || (le = {}));
const iS = (t, e = {
  message: `Input not instance of ${t.name}`
}) => cd((r) => r instanceof t, e), ud = xr.create, ld = fn.create, oS = wo.create, aS = hn.create, fd = Hs.create, cS = Fn.create, uS = yo.create, lS = Ws.create, fS = Gs.create, hS = hs.create, dS = Pn.create, pS = Yr.create, gS = mo.create, yS = Or.create, mS = it.create, vS = it.strictCreate, bS = Qs.create, wS = qo.create, _S = Zs.create, ES = jr.create, SS = Ys.create, xS = vo.create, DS = Un.create, OS = ns.create, IS = Js.create, CS = Xs.create, RS = dn.create, TS = ei.create, AS = ds.create, uf = Ir.create, PS = Qr.create, NS = Mn.create, LS = Ir.createWithPreprocess, FS = Si.create, US = () => ud().optional(), MS = () => ld().optional(), jS = () => fd().optional(), $S = {
  string: (t) => xr.create({ ...t, coerce: !0 }),
  number: (t) => fn.create({ ...t, coerce: !0 }),
  boolean: (t) => Hs.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => hn.create({ ...t, coerce: !0 }),
  date: (t) => Fn.create({ ...t, coerce: !0 })
}, kS = de;
var Cr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Ks,
  setErrorMap: VE,
  getErrorMap: fo,
  makeIssue: ho,
  EMPTY_PATH: KE,
  addIssueToContext: re,
  ParseStatus: zt,
  INVALID: de,
  DIRTY: id,
  OK: Yt,
  isAborted: Za,
  isDirty: Ya,
  isValid: po,
  isAsync: go,
  get util() {
    return Be;
  },
  get objectUtil() {
    return Qa;
  },
  ZodParsedType: ee,
  getParsedType: cn,
  ZodType: De,
  ZodString: xr,
  ZodNumber: fn,
  ZodBigInt: hn,
  ZodBoolean: Hs,
  ZodDate: Fn,
  ZodSymbol: yo,
  ZodUndefined: Ws,
  ZodNull: Gs,
  ZodAny: hs,
  ZodUnknown: Pn,
  ZodNever: Yr,
  ZodVoid: mo,
  ZodArray: Or,
  ZodObject: it,
  ZodUnion: Qs,
  ZodDiscriminatedUnion: qo,
  ZodIntersection: Zs,
  ZodTuple: jr,
  ZodRecord: Ys,
  ZodMap: vo,
  ZodSet: Un,
  ZodFunction: ns,
  ZodLazy: Js,
  ZodLiteral: Xs,
  ZodEnum: dn,
  ZodNativeEnum: ei,
  ZodPromise: ds,
  ZodEffects: Ir,
  ZodTransformer: Ir,
  ZodOptional: Qr,
  ZodNullable: Mn,
  ZodDefault: ti,
  ZodCatch: bo,
  ZodNaN: wo,
  BRAND: nS,
  ZodBranded: ad,
  ZodPipeline: Si,
  custom: cd,
  Schema: De,
  ZodSchema: De,
  late: sS,
  get ZodFirstPartyTypeKind() {
    return le;
  },
  coerce: $S,
  any: hS,
  array: yS,
  bigint: aS,
  boolean: fd,
  date: cS,
  discriminatedUnion: wS,
  effect: uf,
  enum: RS,
  function: OS,
  instanceof: iS,
  intersection: _S,
  lazy: IS,
  literal: CS,
  map: xS,
  nan: oS,
  nativeEnum: TS,
  never: pS,
  null: fS,
  nullable: NS,
  number: ld,
  object: mS,
  oboolean: jS,
  onumber: MS,
  optional: PS,
  ostring: US,
  pipeline: FS,
  preprocess: LS,
  promise: AS,
  record: SS,
  set: DS,
  strictObject: vS,
  string: ud,
  symbol: uS,
  transformer: uf,
  tuple: ES,
  undefined: lS,
  union: bS,
  unknown: dS,
  void: gS,
  NEVER: kS,
  ZodIssueCode: W,
  quotelessJson: BE,
  ZodError: Dr
});
const Yc = /^aleo1[a-z0-9]{58}$/i, qS = /^AViewKey1[a-z0-9]{44}$/i, zS = /^APrivateKey1[a-z0-9]{47}$/i, BS = /^at1[a-z0-9]{58}$/i, VS = /^\d+field$/, KS = /^\d+u32$/, HS = /^\d+u64$/, LO = Cr.string().regex(Yc), FO = Cr.string().regex(qS), UO = Cr.string().regex(zS), MO = Cr.string().regex(BS), jO = Cr.string().regex(VS), $O = Cr.string().regex(KS), kO = Cr.string().regex(HS);
var lf;
(function(t) {
  t.Record = "record", t.OutputRecord = "outputRecord", t.Public = "public", t.Private = "private", t.Constant = "constant", t.Future = "future", t.ExternalRecord = "external_record";
})(lf || (lf = {}));
var Xa;
(function(t) {
  t.Deploy = "Deploy", t.Execute = "Execute", t.Send = "Send", t.Receive = "Receive", t.Join = "Join", t.Split = "Split", t.Shield = "Shield", t.Unshield = "Unshield";
})(Xa || (Xa = {}));
var ec;
(function(t) {
  t.Creating = "Creating", t.Pending = "Pending", t.Settled = "Settled", t.Failed = "Failed";
})(ec || (ec = {}));
var tc;
(function(t) {
  t.Private = "Private", t.Public = "Public";
})(tc || (tc = {}));
var rc;
(function(t) {
  t.AleoTestnet = "AleoTestnet", t.AleoMainnet = "AleoMainnet";
})(rc || (rc = {}));
var ff;
(function(t) {
  t[t.ALEO = 0] = "ALEO";
})(ff || (ff = {}));
const qO = Cr.nativeEnum(Xa), zO = Cr.nativeEnum(ec), BO = Cr.nativeEnum(rc), VO = Cr.nativeEnum(tc);
class KO extends cr {
  constructor(e) {
    super(), this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
class HO {
  constructor(e, r, n) {
    this.core = e, this.logger = r;
  }
}
class WO extends cr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}
class GO {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}
class QO extends cr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class ZO extends cr {
  constructor(e) {
    super();
  }
}
class YO {
  constructor(e, r, n, s) {
    this.core = e, this.logger = r, this.name = n;
  }
}
class JO {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
}
class XO extends cr {
  constructor(e, r) {
    super(), this.relayer = e, this.logger = r;
  }
}
class e3 {
  constructor(e, r) {
    this.core = e, this.logger = r;
  }
}
class t3 extends cr {
  constructor(e, r) {
    super(), this.core = e, this.logger = r;
  }
}
class r3 {
  constructor(e, r) {
    this.logger = e, this.core = r;
  }
}
class n3 {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}
class s3 {
  constructor(e, r) {
    this.projectId = e, this.logger = r;
  }
}
class i3 extends pi {
  constructor() {
    super();
  }
}
class o3 {
  constructor(e) {
    this.opts = e, this.protocol = "wc", this.version = 2;
  }
}
class a3 extends mr.EventEmitter {
  constructor() {
    super();
  }
}
class c3 {
  constructor(e) {
    this.client = e;
  }
}
function hd(t) {
  At(() => (tt().then((e) => {
    e.onSessionDelete(t);
  }), () => {
    tt().then((e) => {
      e.offSessionDelete(t);
    });
  }), [t]);
}
function WS(t) {
  At(() => (tt().then((e) => {
    e.onSessionExpire(t);
  }), () => {
    tt().then((e) => {
      e.offSessionExpire(t);
    });
  }), [t]);
}
function dd(t) {
  At(() => (tt().then((e) => {
    e.onSessionUpdate(t);
  }), () => {
    tt().then((e) => {
      e.offSessionUpdate(t);
    });
  }), [t]);
}
function vr() {
  const [t, e] = js(void 0);
  return hd((r) => {
    r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), dd((r) => {
    if (t && r.topic === (t == null ? void 0 : t.topic)) {
      const { namespaces: n } = r.params, s = { ...t, namespaces: n };
      e(s);
    }
  }), WS((r) => {
    t && r.topic === (t == null ? void 0 : t.topic) && e(void 0);
  }), At(() => {
    async function r() {
      const s = await (await tt()).getSession();
      e(s);
    }
    return r(), fs.on("session_change", r), () => {
      fs.off("session_change", r);
    };
  }, []), t;
}
function xi(t) {
  At(() => (tt().then((e) => {
    e.onSessionEvent(t);
  }), () => {
    tt().then((e) => {
      e.offSessionEvent(t);
    });
  }), [t]);
}
class Di {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    const r = {
      listener: e
    };
    return this.listeners.add(r), this.onSubscribe(), () => {
      this.listeners.delete(r), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}
const ri = typeof window > "u" || "Deno" in window;
function gr() {
}
function GS(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function nc(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function pd(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function Us(t, e, r) {
  return zo(t) ? typeof e == "function" ? {
    ...r,
    queryKey: t,
    queryFn: e
  } : {
    ...e,
    queryKey: t
  } : t;
}
function an(t, e, r) {
  return zo(t) ? [{
    ...e,
    queryKey: t
  }, r] : [t || {}, e];
}
function hf(t, e) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: s,
    predicate: i,
    queryKey: a,
    stale: o
  } = t;
  if (zo(a)) {
    if (n) {
      if (e.queryHash !== Jc(a, e.options))
        return !1;
    } else if (!Jn(e.queryKey, a))
      return !1;
  }
  if (r !== "all") {
    const u = e.isActive();
    if (r === "active" && !u || r === "inactive" && u)
      return !1;
  }
  return !(typeof o == "boolean" && e.isStale() !== o || typeof s < "u" && s !== e.state.fetchStatus || i && !i(e));
}
function df(t, e) {
  const {
    exact: r,
    fetching: n,
    predicate: s,
    mutationKey: i
  } = t;
  if (zo(i)) {
    if (!e.options.mutationKey)
      return !1;
    if (r) {
      if (Tn(e.options.mutationKey) !== Tn(i))
        return !1;
    } else if (!Jn(e.options.mutationKey, i))
      return !1;
  }
  return !(typeof n == "boolean" && e.state.status === "loading" !== n || s && !s(e));
}
function Jc(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || Tn)(t);
}
function Tn(t) {
  return JSON.stringify(t, (e, r) => ic(r) ? Object.keys(r).sort().reduce((n, s) => (n[s] = r[s], n), {}) : r);
}
function Jn(t, e) {
  return gd(t, e);
}
function gd(t, e) {
  return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some((r) => !gd(t[r], e[r])) : !1;
}
function yd(t, e) {
  if (t === e)
    return t;
  const r = pf(t) && pf(e);
  if (r || ic(t) && ic(e)) {
    const n = r ? t.length : Object.keys(t).length, s = r ? e : Object.keys(e), i = s.length, a = r ? [] : {};
    let o = 0;
    for (let u = 0; u < i; u++) {
      const c = r ? u : s[u];
      a[c] = yd(t[c], e[c]), a[c] === t[c] && o++;
    }
    return n === i && o === n ? t : a;
  }
  return e;
}
function sc(t, e) {
  if (t && !e || e && !t)
    return !1;
  for (const r in t)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function pf(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function ic(t) {
  if (!gf(t))
    return !1;
  const e = t.constructor;
  if (typeof e > "u")
    return !0;
  const r = e.prototype;
  return !(!gf(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function gf(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function zo(t) {
  return Array.isArray(t);
}
function md(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function yf(t) {
  md(0).then(t);
}
function QS() {
  if (typeof AbortController == "function")
    return new AbortController();
}
function oc(t, e, r) {
  return r.isDataEqual != null && r.isDataEqual(t, e) ? t : typeof r.structuralSharing == "function" ? r.structuralSharing(t, e) : r.structuralSharing !== !1 ? yd(t, e) : e;
}
class ZS extends Di {
  constructor() {
    super(), this.setup = (e) => {
      if (!ri && window.addEventListener) {
        const r = () => e();
        return window.addEventListener("visibilitychange", r, !1), window.addEventListener("focus", r, !1), () => {
          window.removeEventListener("visibilitychange", r), window.removeEventListener("focus", r);
        };
      }
    };
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var e;
      (e = this.cleanup) == null || e.call(this), this.cleanup = void 0;
    }
  }
  setEventListener(e) {
    var r;
    this.setup = e, (r = this.cleanup) == null || r.call(this), this.cleanup = e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    });
  }
  setFocused(e) {
    this.focused !== e && (this.focused = e, this.onFocus());
  }
  onFocus() {
    this.listeners.forEach(({
      listener: e
    }) => {
      e();
    });
  }
  isFocused() {
    return typeof this.focused == "boolean" ? this.focused : typeof document > "u" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const _o = new ZS(), mf = ["online", "offline"];
class YS extends Di {
  constructor() {
    super(), this.setup = (e) => {
      if (!ri && window.addEventListener) {
        const r = () => e();
        return mf.forEach((n) => {
          window.addEventListener(n, r, !1);
        }), () => {
          mf.forEach((n) => {
            window.removeEventListener(n, r);
          });
        };
      }
    };
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var e;
      (e = this.cleanup) == null || e.call(this), this.cleanup = void 0;
    }
  }
  setEventListener(e) {
    var r;
    this.setup = e, (r = this.cleanup) == null || r.call(this), this.cleanup = e((n) => {
      typeof n == "boolean" ? this.setOnline(n) : this.onOnline();
    });
  }
  setOnline(e) {
    this.online !== e && (this.online = e, this.onOnline());
  }
  onOnline() {
    this.listeners.forEach(({
      listener: e
    }) => {
      e();
    });
  }
  isOnline() {
    return typeof this.online == "boolean" ? this.online : typeof navigator > "u" || typeof navigator.onLine > "u" ? !0 : navigator.onLine;
  }
}
const ni = new YS();
function JS(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function Bo(t) {
  return (t ?? "online") === "online" ? ni.isOnline() : !0;
}
class vd {
  constructor(e) {
    this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
}
function eo(t) {
  return t instanceof vd;
}
function bd(t) {
  let e = !1, r = 0, n = !1, s, i, a;
  const o = new Promise((x, T) => {
    i = x, a = T;
  }), u = (x) => {
    n || (m(new vd(x)), t.abort == null || t.abort());
  }, c = () => {
    e = !0;
  }, f = () => {
    e = !1;
  }, d = () => !_o.isFocused() || t.networkMode !== "always" && !ni.isOnline(), p = (x) => {
    n || (n = !0, t.onSuccess == null || t.onSuccess(x), s == null || s(), i(x));
  }, m = (x) => {
    n || (n = !0, t.onError == null || t.onError(x), s == null || s(), a(x));
  }, v = () => new Promise((x) => {
    s = (T) => {
      const w = n || !d();
      return w && x(T), w;
    }, t.onPause == null || t.onPause();
  }).then(() => {
    s = void 0, n || t.onContinue == null || t.onContinue();
  }), _ = () => {
    if (n)
      return;
    let x;
    try {
      x = t.fn();
    } catch (T) {
      x = Promise.reject(T);
    }
    Promise.resolve(x).then(p).catch((T) => {
      var w, D;
      if (n)
        return;
      const b = (w = t.retry) != null ? w : 3, S = (D = t.retryDelay) != null ? D : JS, g = typeof S == "function" ? S(r, T) : S, l = b === !0 || typeof b == "number" && r < b || typeof b == "function" && b(r, T);
      if (e || !l) {
        m(T);
        return;
      }
      r++, t.onFail == null || t.onFail(r, T), md(g).then(() => {
        if (d())
          return v();
      }).then(() => {
        e ? m(T) : _();
      });
    });
  };
  return Bo(t.networkMode) ? _() : v().then(_), {
    promise: o,
    cancel: u,
    continue: () => (s == null ? void 0 : s()) ? o : Promise.resolve(),
    cancelRetry: c,
    continueRetry: f
  };
}
const Xc = console;
function XS() {
  let t = [], e = 0, r = (f) => {
    f();
  }, n = (f) => {
    f();
  };
  const s = (f) => {
    let d;
    e++;
    try {
      d = f();
    } finally {
      e--, e || o();
    }
    return d;
  }, i = (f) => {
    e ? t.push(f) : yf(() => {
      r(f);
    });
  }, a = (f) => (...d) => {
    i(() => {
      f(...d);
    });
  }, o = () => {
    const f = t;
    t = [], f.length && yf(() => {
      n(() => {
        f.forEach((d) => {
          r(d);
        });
      });
    });
  };
  return {
    batch: s,
    batchCalls: a,
    schedule: i,
    setNotifyFunction: (f) => {
      r = f;
    },
    setBatchNotifyFunction: (f) => {
      n = f;
    }
  };
}
const _t = XS();
class wd {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), nc(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
      this.optionalRemove();
    }, this.cacheTime));
  }
  updateCacheTime(e) {
    this.cacheTime = Math.max(this.cacheTime || 0, e ?? (ri ? 1 / 0 : 5 * 60 * 1e3));
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0);
  }
}
class ex extends wd {
  constructor(e) {
    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || Xc, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || tx(this.options), this.state = this.initialState, this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(e) {
    this.options = {
      ...this.defaultOptions,
      ...e
    }, this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && this.cache.remove(this);
  }
  setData(e, r) {
    const n = oc(this.state.data, e, this.options);
    return this.dispatch({
      data: n,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), n;
  }
  setState(e, r) {
    this.dispatch({
      type: "setState",
      state: e,
      setStateOptions: r
    });
  }
  cancel(e) {
    var r;
    const n = this.promise;
    return (r = this.retryer) == null || r.cancel(e), n ? n.then(gr).catch(gr) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({
      silent: !0
    });
  }
  reset() {
    this.destroy(), this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((e) => e.options.enabled !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((e) => e.getCurrentResult().isStale);
  }
  isStaleByTime(e = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !pd(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    var e;
    const r = this.observers.find((n) => n.shouldFetchOnWindowFocus());
    r && r.refetch({
      cancelRefetch: !1
    }), (e = this.retryer) == null || e.continue();
  }
  onOnline() {
    var e;
    const r = this.observers.find((n) => n.shouldFetchOnReconnect());
    r && r.refetch({
      cancelRefetch: !1
    }), (e = this.retryer) == null || e.continue();
  }
  addObserver(e) {
    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.cache.notify({
      type: "observerAdded",
      query: this,
      observer: e
    }));
  }
  removeObserver(e) {
    this.observers.includes(e) && (this.observers = this.observers.filter((r) => r !== e), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
      revert: !0
    }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
      type: "observerRemoved",
      query: this,
      observer: e
    }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({
      type: "invalidate"
    });
  }
  fetch(e, r) {
    var n, s;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && r != null && r.cancelRefetch)
        this.cancel({
          silent: !0
        });
      else if (this.promise) {
        var i;
        return (i = this.retryer) == null || i.continueRetry(), this.promise;
      }
    }
    if (e && this.setOptions(e), !this.options.queryFn) {
      const m = this.observers.find((v) => v.options.queryFn);
      m && this.setOptions(m.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || this.logger.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"));
    const a = QS(), o = {
      queryKey: this.queryKey,
      pageParam: void 0,
      meta: this.meta
    }, u = (m) => {
      Object.defineProperty(m, "signal", {
        enumerable: !0,
        get: () => {
          if (a)
            return this.abortSignalConsumed = !0, a.signal;
        }
      });
    };
    u(o);
    const c = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(o)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'"), f = {
      fetchOptions: r,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: c
    };
    if (u(f), (n = this.options.behavior) == null || n.onFetch(f), this.revertState = this.state, this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((s = f.fetchOptions) == null ? void 0 : s.meta)) {
      var d;
      this.dispatch({
        type: "fetch",
        meta: (d = f.fetchOptions) == null ? void 0 : d.meta
      });
    }
    const p = (m) => {
      if (eo(m) && m.silent || this.dispatch({
        type: "error",
        error: m
      }), !eo(m)) {
        var v, _, x, T;
        (v = (_ = this.cache.config).onError) == null || v.call(_, m, this), (x = (T = this.cache.config).onSettled) == null || x.call(T, this.state.data, m, this), process.env.NODE_ENV !== "production" && this.logger.error(m);
      }
      this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return this.retryer = bd({
      fn: f.fetchFn,
      abort: a == null ? void 0 : a.abort.bind(a),
      onSuccess: (m) => {
        var v, _, x, T;
        if (typeof m > "u") {
          process.env.NODE_ENV !== "production" && this.logger.error("Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: " + this.queryHash), p(new Error(this.queryHash + " data is undefined"));
          return;
        }
        this.setData(m), (v = (_ = this.cache.config).onSuccess) == null || v.call(_, m, this), (x = (T = this.cache.config).onSettled) == null || x.call(T, m, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: p,
      onFail: (m, v) => {
        this.dispatch({
          type: "failed",
          failureCount: m,
          error: v
        });
      },
      onPause: () => {
        this.dispatch({
          type: "pause"
        });
      },
      onContinue: () => {
        this.dispatch({
          type: "continue"
        });
      },
      retry: f.options.retry,
      retryDelay: f.options.retryDelay,
      networkMode: f.options.networkMode
    }), this.promise = this.retryer.promise, this.promise;
  }
  dispatch(e) {
    const r = (n) => {
      var s, i;
      switch (e.type) {
        case "failed":
          return {
            ...n,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error
          };
        case "pause":
          return {
            ...n,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...n,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...n,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (s = e.meta) != null ? s : null,
            fetchStatus: Bo(this.options.networkMode) ? "fetching" : "paused",
            ...!n.dataUpdatedAt && {
              error: null,
              status: "loading"
            }
          };
        case "success":
          return {
            ...n,
            data: e.data,
            dataUpdateCount: n.dataUpdateCount + 1,
            dataUpdatedAt: (i = e.dataUpdatedAt) != null ? i : Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success",
            ...!e.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
        case "error":
          const a = e.error;
          return eo(a) && a.revert && this.revertState ? {
            ...this.revertState,
            fetchStatus: "idle"
          } : {
            ...n,
            error: a,
            errorUpdateCount: n.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: n.fetchFailureCount + 1,
            fetchFailureReason: a,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...n,
            isInvalidated: !0
          };
        case "setState":
          return {
            ...n,
            ...e.state
          };
      }
    };
    this.state = r(this.state), _t.batch(() => {
      this.observers.forEach((n) => {
        n.onQueryUpdate(e);
      }), this.cache.notify({
        query: this,
        type: "updated",
        action: e
      });
    });
  }
}
function tx(t) {
  const e = typeof t.initialData == "function" ? t.initialData() : t.initialData, r = typeof e < "u", n = r ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
  return {
    data: e,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "loading",
    fetchStatus: "idle"
  };
}
class rx extends Di {
  constructor(e) {
    super(), this.config = e || {}, this.queries = [], this.queriesMap = {};
  }
  build(e, r, n) {
    var s;
    const i = r.queryKey, a = (s = r.queryHash) != null ? s : Jc(i, r);
    let o = this.get(a);
    return o || (o = new ex({
      cache: this,
      logger: e.getLogger(),
      queryKey: i,
      queryHash: a,
      options: e.defaultQueryOptions(r),
      state: n,
      defaultOptions: e.getQueryDefaults(i)
    }), this.add(o)), o;
  }
  add(e) {
    this.queriesMap[e.queryHash] || (this.queriesMap[e.queryHash] = e, this.queries.push(e), this.notify({
      type: "added",
      query: e
    }));
  }
  remove(e) {
    const r = this.queriesMap[e.queryHash];
    r && (e.destroy(), this.queries = this.queries.filter((n) => n !== e), r === e && delete this.queriesMap[e.queryHash], this.notify({
      type: "removed",
      query: e
    }));
  }
  clear() {
    _t.batch(() => {
      this.queries.forEach((e) => {
        this.remove(e);
      });
    });
  }
  get(e) {
    return this.queriesMap[e];
  }
  getAll() {
    return this.queries;
  }
  find(e, r) {
    const [n] = an(e, r);
    return typeof n.exact > "u" && (n.exact = !0), this.queries.find((s) => hf(n, s));
  }
  findAll(e, r) {
    const [n] = an(e, r);
    return Object.keys(n).length > 0 ? this.queries.filter((s) => hf(n, s)) : this.queries;
  }
  notify(e) {
    _t.batch(() => {
      this.listeners.forEach(({
        listener: r
      }) => {
        r(e);
      });
    });
  }
  onFocus() {
    _t.batch(() => {
      this.queries.forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    _t.batch(() => {
      this.queries.forEach((e) => {
        e.onOnline();
      });
    });
  }
}
class nx extends wd {
  constructor(e) {
    super(), this.defaultOptions = e.defaultOptions, this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.logger = e.logger || Xc, this.observers = [], this.state = e.state || sx(), this.setOptions(e.options), this.scheduleGc();
  }
  setOptions(e) {
    this.options = {
      ...this.defaultOptions,
      ...e
    }, this.updateCacheTime(this.options.cacheTime);
  }
  get meta() {
    return this.options.meta;
  }
  setState(e) {
    this.dispatch({
      type: "setState",
      state: e
    });
  }
  addObserver(e) {
    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.mutationCache.notify({
      type: "observerAdded",
      mutation: this,
      observer: e
    }));
  }
  removeObserver(e) {
    this.observers = this.observers.filter((r) => r !== e), this.scheduleGc(), this.mutationCache.notify({
      type: "observerRemoved",
      mutation: this,
      observer: e
    });
  }
  optionalRemove() {
    this.observers.length || (this.state.status === "loading" ? this.scheduleGc() : this.mutationCache.remove(this));
  }
  continue() {
    var e, r;
    return (e = (r = this.retryer) == null ? void 0 : r.continue()) != null ? e : this.execute();
  }
  async execute() {
    const e = () => {
      var l;
      return this.retryer = bd({
        fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
        onFail: (y, C) => {
          this.dispatch({
            type: "failed",
            failureCount: y,
            error: C
          });
        },
        onPause: () => {
          this.dispatch({
            type: "pause"
          });
        },
        onContinue: () => {
          this.dispatch({
            type: "continue"
          });
        },
        retry: (l = this.options.retry) != null ? l : 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode
      }), this.retryer.promise;
    }, r = this.state.status === "loading";
    try {
      var n, s, i, a, o, u, c, f;
      if (!r) {
        var d, p, m, v;
        this.dispatch({
          type: "loading",
          variables: this.options.variables
        }), await ((d = (p = this.mutationCache.config).onMutate) == null ? void 0 : d.call(p, this.state.variables, this));
        const y = await ((m = (v = this.options).onMutate) == null ? void 0 : m.call(v, this.state.variables));
        y !== this.state.context && this.dispatch({
          type: "loading",
          context: y,
          variables: this.state.variables
        });
      }
      const l = await e();
      return await ((n = (s = this.mutationCache.config).onSuccess) == null ? void 0 : n.call(s, l, this.state.variables, this.state.context, this)), await ((i = (a = this.options).onSuccess) == null ? void 0 : i.call(a, l, this.state.variables, this.state.context)), await ((o = (u = this.mutationCache.config).onSettled) == null ? void 0 : o.call(u, l, null, this.state.variables, this.state.context, this)), await ((c = (f = this.options).onSettled) == null ? void 0 : c.call(f, l, null, this.state.variables, this.state.context)), this.dispatch({
        type: "success",
        data: l
      }), l;
    } catch (l) {
      try {
        var _, x, T, w, D, b, S, g;
        throw await ((_ = (x = this.mutationCache.config).onError) == null ? void 0 : _.call(x, l, this.state.variables, this.state.context, this)), process.env.NODE_ENV !== "production" && this.logger.error(l), await ((T = (w = this.options).onError) == null ? void 0 : T.call(w, l, this.state.variables, this.state.context)), await ((D = (b = this.mutationCache.config).onSettled) == null ? void 0 : D.call(b, void 0, l, this.state.variables, this.state.context, this)), await ((S = (g = this.options).onSettled) == null ? void 0 : S.call(g, void 0, l, this.state.variables, this.state.context)), l;
      } finally {
        this.dispatch({
          type: "error",
          error: l
        });
      }
    }
  }
  dispatch(e) {
    const r = (n) => {
      switch (e.type) {
        case "failed":
          return {
            ...n,
            failureCount: e.failureCount,
            failureReason: e.error
          };
        case "pause":
          return {
            ...n,
            isPaused: !0
          };
        case "continue":
          return {
            ...n,
            isPaused: !1
          };
        case "loading":
          return {
            ...n,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !Bo(this.options.networkMode),
            status: "loading",
            variables: e.variables
          };
        case "success":
          return {
            ...n,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1
          };
        case "error":
          return {
            ...n,
            data: void 0,
            error: e.error,
            failureCount: n.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: "error"
          };
        case "setState":
          return {
            ...n,
            ...e.state
          };
      }
    };
    this.state = r(this.state), _t.batch(() => {
      this.observers.forEach((n) => {
        n.onMutationUpdate(e);
      }), this.mutationCache.notify({
        mutation: this,
        type: "updated",
        action: e
      });
    });
  }
}
function sx() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0
  };
}
class ix extends Di {
  constructor(e) {
    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0;
  }
  build(e, r, n) {
    const s = new nx({
      mutationCache: this,
      logger: e.getLogger(),
      mutationId: ++this.mutationId,
      options: e.defaultMutationOptions(r),
      state: n,
      defaultOptions: r.mutationKey ? e.getMutationDefaults(r.mutationKey) : void 0
    });
    return this.add(s), s;
  }
  add(e) {
    this.mutations.push(e), this.notify({
      type: "added",
      mutation: e
    });
  }
  remove(e) {
    this.mutations = this.mutations.filter((r) => r !== e), this.notify({
      type: "removed",
      mutation: e
    });
  }
  clear() {
    _t.batch(() => {
      this.mutations.forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(e) {
    return typeof e.exact > "u" && (e.exact = !0), this.mutations.find((r) => df(e, r));
  }
  findAll(e) {
    return this.mutations.filter((r) => df(e, r));
  }
  notify(e) {
    _t.batch(() => {
      this.listeners.forEach(({
        listener: r
      }) => {
        r(e);
      });
    });
  }
  resumePausedMutations() {
    var e;
    return this.resuming = ((e = this.resuming) != null ? e : Promise.resolve()).then(() => {
      const r = this.mutations.filter((n) => n.state.isPaused);
      return _t.batch(() => r.reduce((n, s) => n.then(() => s.continue().catch(gr)), Promise.resolve()));
    }).then(() => {
      this.resuming = void 0;
    }), this.resuming;
  }
}
function ox() {
  return {
    onFetch: (t) => {
      t.fetchFn = () => {
        var e, r, n, s, i, a;
        const o = (e = t.fetchOptions) == null || (r = e.meta) == null ? void 0 : r.refetchPage, u = (n = t.fetchOptions) == null || (s = n.meta) == null ? void 0 : s.fetchMore, c = u == null ? void 0 : u.pageParam, f = (u == null ? void 0 : u.direction) === "forward", d = (u == null ? void 0 : u.direction) === "backward", p = ((i = t.state.data) == null ? void 0 : i.pages) || [], m = ((a = t.state.data) == null ? void 0 : a.pageParams) || [];
        let v = m, _ = !1;
        const x = (g) => {
          Object.defineProperty(g, "signal", {
            enumerable: !0,
            get: () => {
              var l;
              if ((l = t.signal) != null && l.aborted)
                _ = !0;
              else {
                var y;
                (y = t.signal) == null || y.addEventListener("abort", () => {
                  _ = !0;
                });
              }
              return t.signal;
            }
          });
        }, T = t.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + t.options.queryHash + "'")), w = (g, l, y, C) => (v = C ? [l, ...v] : [...v, l], C ? [y, ...g] : [...g, y]), D = (g, l, y, C) => {
          if (_)
            return Promise.reject("Cancelled");
          if (typeof y > "u" && !l && g.length)
            return Promise.resolve(g);
          const A = {
            queryKey: t.queryKey,
            pageParam: y,
            meta: t.options.meta
          };
          x(A);
          const M = T(A);
          return Promise.resolve(M).then((G) => w(g, y, G, C));
        };
        let b;
        if (!p.length)
          b = D([]);
        else if (f) {
          const g = typeof c < "u", l = g ? c : vf(t.options, p);
          b = D(p, g, l);
        } else if (d) {
          const g = typeof c < "u", l = g ? c : ax(t.options, p);
          b = D(p, g, l, !0);
        } else {
          v = [];
          const g = typeof t.options.getNextPageParam > "u";
          b = (o && p[0] ? o(p[0], 0, p) : !0) ? D([], g, m[0]) : Promise.resolve(w([], m[0], p[0]));
          for (let y = 1; y < p.length; y++)
            b = b.then((C) => {
              if (o && p[y] ? o(p[y], y, p) : !0) {
                const M = g ? m[y] : vf(t.options, C);
                return D(C, g, M);
              }
              return Promise.resolve(w(C, m[y], p[y]));
            });
        }
        return b.then((g) => ({
          pages: g,
          pageParams: v
        }));
      };
    }
  };
}
function vf(t, e) {
  return t.getNextPageParam == null ? void 0 : t.getNextPageParam(e[e.length - 1], e);
}
function ax(t, e) {
  return t.getPreviousPageParam == null ? void 0 : t.getPreviousPageParam(e[0], e);
}
class cx {
  constructor(e = {}) {
    this.queryCache = e.queryCache || new rx(), this.mutationCache = e.mutationCache || new ix(), this.logger = e.logger || Xc, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0, process.env.NODE_ENV !== "production" && e.logger && this.logger.error("Passing a custom logger has been deprecated and will be removed in the next major version.");
  }
  mount() {
    this.mountCount++, this.mountCount === 1 && (this.unsubscribeFocus = _o.subscribe(() => {
      _o.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
    }), this.unsubscribeOnline = ni.subscribe(() => {
      ni.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
    }));
  }
  unmount() {
    var e, r;
    this.mountCount--, this.mountCount === 0 && ((e = this.unsubscribeFocus) == null || e.call(this), this.unsubscribeFocus = void 0, (r = this.unsubscribeOnline) == null || r.call(this), this.unsubscribeOnline = void 0);
  }
  isFetching(e, r) {
    const [n] = an(e, r);
    return n.fetchStatus = "fetching", this.queryCache.findAll(n).length;
  }
  isMutating(e) {
    return this.mutationCache.findAll({
      ...e,
      fetching: !0
    }).length;
  }
  getQueryData(e, r) {
    var n;
    return (n = this.queryCache.find(e, r)) == null ? void 0 : n.state.data;
  }
  ensureQueryData(e, r, n) {
    const s = Us(e, r, n), i = this.getQueryData(s.queryKey);
    return i ? Promise.resolve(i) : this.fetchQuery(s);
  }
  getQueriesData(e) {
    return this.getQueryCache().findAll(e).map(({
      queryKey: r,
      state: n
    }) => {
      const s = n.data;
      return [r, s];
    });
  }
  setQueryData(e, r, n) {
    const s = this.queryCache.find(e), i = s == null ? void 0 : s.state.data, a = GS(r, i);
    if (typeof a > "u")
      return;
    const o = Us(e), u = this.defaultQueryOptions(o);
    return this.queryCache.build(this, u).setData(a, {
      ...n,
      manual: !0
    });
  }
  setQueriesData(e, r, n) {
    return _t.batch(() => this.getQueryCache().findAll(e).map(({
      queryKey: s
    }) => [s, this.setQueryData(s, r, n)]));
  }
  getQueryState(e, r) {
    var n;
    return (n = this.queryCache.find(e, r)) == null ? void 0 : n.state;
  }
  removeQueries(e, r) {
    const [n] = an(e, r), s = this.queryCache;
    _t.batch(() => {
      s.findAll(n).forEach((i) => {
        s.remove(i);
      });
    });
  }
  resetQueries(e, r, n) {
    const [s, i] = an(e, r, n), a = this.queryCache, o = {
      type: "active",
      ...s
    };
    return _t.batch(() => (a.findAll(s).forEach((u) => {
      u.reset();
    }), this.refetchQueries(o, i)));
  }
  cancelQueries(e, r, n) {
    const [s, i = {}] = an(e, r, n);
    typeof i.revert > "u" && (i.revert = !0);
    const a = _t.batch(() => this.queryCache.findAll(s).map((o) => o.cancel(i)));
    return Promise.all(a).then(gr).catch(gr);
  }
  invalidateQueries(e, r, n) {
    const [s, i] = an(e, r, n);
    return _t.batch(() => {
      var a, o;
      if (this.queryCache.findAll(s).forEach((c) => {
        c.invalidate();
      }), s.refetchType === "none")
        return Promise.resolve();
      const u = {
        ...s,
        type: (a = (o = s.refetchType) != null ? o : s.type) != null ? a : "active"
      };
      return this.refetchQueries(u, i);
    });
  }
  refetchQueries(e, r, n) {
    const [s, i] = an(e, r, n), a = _t.batch(() => this.queryCache.findAll(s).filter((u) => !u.isDisabled()).map((u) => {
      var c;
      return u.fetch(void 0, {
        ...i,
        cancelRefetch: (c = i == null ? void 0 : i.cancelRefetch) != null ? c : !0,
        meta: {
          refetchPage: s.refetchPage
        }
      });
    }));
    let o = Promise.all(a).then(gr);
    return i != null && i.throwOnError || (o = o.catch(gr)), o;
  }
  fetchQuery(e, r, n) {
    const s = Us(e, r, n), i = this.defaultQueryOptions(s);
    typeof i.retry > "u" && (i.retry = !1);
    const a = this.queryCache.build(this, i);
    return a.isStaleByTime(i.staleTime) ? a.fetch(i) : Promise.resolve(a.state.data);
  }
  prefetchQuery(e, r, n) {
    return this.fetchQuery(e, r, n).then(gr).catch(gr);
  }
  fetchInfiniteQuery(e, r, n) {
    const s = Us(e, r, n);
    return s.behavior = ox(), this.fetchQuery(s);
  }
  prefetchInfiniteQuery(e, r, n) {
    return this.fetchInfiniteQuery(e, r, n).then(gr).catch(gr);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(e) {
    this.defaultOptions = e;
  }
  setQueryDefaults(e, r) {
    const n = this.queryDefaults.find((s) => Tn(e) === Tn(s.queryKey));
    n ? n.defaultOptions = r : this.queryDefaults.push({
      queryKey: e,
      defaultOptions: r
    });
  }
  getQueryDefaults(e) {
    if (!e)
      return;
    const r = this.queryDefaults.find((n) => Jn(e, n.queryKey));
    return process.env.NODE_ENV !== "production" && this.queryDefaults.filter((s) => Jn(e, s.queryKey)).length > 1 && this.logger.error("[QueryClient] Several query defaults match with key '" + JSON.stringify(e) + "'. The first matching query defaults are used. Please check how query defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydefaults."), r == null ? void 0 : r.defaultOptions;
  }
  setMutationDefaults(e, r) {
    const n = this.mutationDefaults.find((s) => Tn(e) === Tn(s.mutationKey));
    n ? n.defaultOptions = r : this.mutationDefaults.push({
      mutationKey: e,
      defaultOptions: r
    });
  }
  getMutationDefaults(e) {
    if (!e)
      return;
    const r = this.mutationDefaults.find((n) => Jn(e, n.mutationKey));
    return process.env.NODE_ENV !== "production" && this.mutationDefaults.filter((s) => Jn(e, s.mutationKey)).length > 1 && this.logger.error("[QueryClient] Several mutation defaults match with key '" + JSON.stringify(e) + "'. The first matching mutation defaults are used. Please check how mutation defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetmutationdefaults."), r == null ? void 0 : r.defaultOptions;
  }
  defaultQueryOptions(e) {
    if (e != null && e._defaulted)
      return e;
    const r = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(e == null ? void 0 : e.queryKey),
      ...e,
      _defaulted: !0
    };
    return !r.queryHash && r.queryKey && (r.queryHash = Jc(r.queryKey, r)), typeof r.refetchOnReconnect > "u" && (r.refetchOnReconnect = r.networkMode !== "always"), typeof r.useErrorBoundary > "u" && (r.useErrorBoundary = !!r.suspense), r;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...this.defaultOptions.mutations,
      ...this.getMutationDefaults(e == null ? void 0 : e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear();
  }
}
class ux extends Di {
  constructor(e, r) {
    super(), this.client = e, this.options = r, this.trackedProps = /* @__PURE__ */ new Set(), this.selectError = null, this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (this.currentQuery.addObserver(this), bf(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return ac(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return ac(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
  }
  setOptions(e, r) {
    const n = this.options, s = this.currentQuery;
    if (this.options = this.client.defaultQueryOptions(e), process.env.NODE_ENV !== "production" && typeof (e == null ? void 0 : e.isDataEqual) < "u" && this.client.getLogger().error("The isDataEqual option has been deprecated and will be removed in the next major version. You can achieve the same functionality by passing a function as the structuralSharing option"), sc(n, this.options) || this.client.getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: this.currentQuery,
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = n.queryKey), this.updateQuery();
    const i = this.hasListeners();
    i && wf(this.currentQuery, s, this.options, n) && this.executeFetch(), this.updateResult(r), i && (this.currentQuery !== s || this.options.enabled !== n.enabled || this.options.staleTime !== n.staleTime) && this.updateStaleTimeout();
    const a = this.computeRefetchInterval();
    i && (this.currentQuery !== s || this.options.enabled !== n.enabled || a !== this.currentRefetchInterval) && this.updateRefetchInterval(a);
  }
  getOptimisticResult(e) {
    const r = this.client.getQueryCache().build(this.client, e), n = this.createResult(r, e);
    return fx(this, n, e) && (this.currentResult = n, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), n;
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(e) {
    const r = {};
    return Object.keys(e).forEach((n) => {
      Object.defineProperty(r, n, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackedProps.add(n), e[n])
      });
    }), r;
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch({
    refetchPage: e,
    ...r
  } = {}) {
    return this.fetch({
      ...r,
      meta: {
        refetchPage: e
      }
    });
  }
  fetchOptimistic(e) {
    const r = this.client.defaultQueryOptions(e), n = this.client.getQueryCache().build(this.client, r);
    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, r));
  }
  fetch(e) {
    var r;
    return this.executeFetch({
      ...e,
      cancelRefetch: (r = e.cancelRefetch) != null ? r : !0
    }).then(() => (this.updateResult(), this.currentResult));
  }
  executeFetch(e) {
    this.updateQuery();
    let r = this.currentQuery.fetch(this.options, e);
    return e != null && e.throwOnError || (r = r.catch(gr)), r;
  }
  updateStaleTimeout() {
    if (this.clearStaleTimeout(), ri || this.currentResult.isStale || !nc(this.options.staleTime))
      return;
    const r = pd(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, r);
  }
  computeRefetchInterval() {
    var e;
    return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (e = this.options.refetchInterval) != null ? e : !1;
  }
  updateRefetchInterval(e) {
    this.clearRefetchInterval(), this.currentRefetchInterval = e, !(ri || this.options.enabled === !1 || !nc(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(() => {
      (this.options.refetchIntervalInBackground || _o.isFocused()) && this.executeFetch();
    }, this.currentRefetchInterval));
  }
  updateTimers() {
    this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval());
  }
  clearStaleTimeout() {
    this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0);
  }
  clearRefetchInterval() {
    this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0);
  }
  createResult(e, r) {
    const n = this.currentQuery, s = this.options, i = this.currentResult, a = this.currentResultState, o = this.currentResultOptions, u = e !== n, c = u ? e.state : this.currentQueryInitialState, f = u ? this.currentResult : this.previousQueryResult, {
      state: d
    } = e;
    let {
      dataUpdatedAt: p,
      error: m,
      errorUpdatedAt: v,
      fetchStatus: _,
      status: x
    } = d, T = !1, w = !1, D;
    if (r._optimisticResults) {
      const y = this.hasListeners(), C = !y && bf(e, r), A = y && wf(e, n, r, s);
      (C || A) && (_ = Bo(e.options.networkMode) ? "fetching" : "paused", p || (x = "loading")), r._optimisticResults === "isRestoring" && (_ = "idle");
    }
    if (r.keepPreviousData && !d.dataUpdatedAt && f != null && f.isSuccess && x !== "error")
      D = f.data, p = f.dataUpdatedAt, x = f.status, T = !0;
    else if (r.select && typeof d.data < "u")
      if (i && d.data === (a == null ? void 0 : a.data) && r.select === this.selectFn)
        D = this.selectResult;
      else
        try {
          this.selectFn = r.select, D = r.select(d.data), D = oc(i == null ? void 0 : i.data, D, r), this.selectResult = D, this.selectError = null;
        } catch (y) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(y), this.selectError = y;
        }
    else
      D = d.data;
    if (typeof r.placeholderData < "u" && typeof D > "u" && x === "loading") {
      let y;
      if (i != null && i.isPlaceholderData && r.placeholderData === (o == null ? void 0 : o.placeholderData))
        y = i.data;
      else if (y = typeof r.placeholderData == "function" ? r.placeholderData() : r.placeholderData, r.select && typeof y < "u")
        try {
          y = r.select(y), this.selectError = null;
        } catch (C) {
          process.env.NODE_ENV !== "production" && this.client.getLogger().error(C), this.selectError = C;
        }
      typeof y < "u" && (x = "success", D = oc(i == null ? void 0 : i.data, y, r), w = !0);
    }
    this.selectError && (m = this.selectError, D = this.selectResult, v = Date.now(), x = "error");
    const b = _ === "fetching", S = x === "loading", g = x === "error";
    return {
      status: x,
      fetchStatus: _,
      isLoading: S,
      isSuccess: x === "success",
      isError: g,
      isInitialLoading: S && b,
      data: D,
      dataUpdatedAt: p,
      error: m,
      errorUpdatedAt: v,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
      isFetchedAfterMount: d.dataUpdateCount > c.dataUpdateCount || d.errorUpdateCount > c.errorUpdateCount,
      isFetching: b,
      isRefetching: b && !S,
      isLoadingError: g && d.dataUpdatedAt === 0,
      isPaused: _ === "paused",
      isPlaceholderData: w,
      isPreviousData: T,
      isRefetchError: g && d.dataUpdatedAt !== 0,
      isStale: eu(e, r),
      refetch: this.refetch,
      remove: this.remove
    };
  }
  updateResult(e) {
    const r = this.currentResult, n = this.createResult(this.currentQuery, this.options);
    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, sc(n, r))
      return;
    this.currentResult = n;
    const s = {
      cache: !0
    }, i = () => {
      if (!r)
        return !0;
      const {
        notifyOnChangeProps: a
      } = this.options, o = typeof a == "function" ? a() : a;
      if (o === "all" || !o && !this.trackedProps.size)
        return !0;
      const u = new Set(o ?? this.trackedProps);
      return this.options.useErrorBoundary && u.add("error"), Object.keys(this.currentResult).some((c) => {
        const f = c;
        return this.currentResult[f] !== r[f] && u.has(f);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && i() && (s.listeners = !0), this.notify({
      ...s,
      ...e
    });
  }
  updateQuery() {
    const e = this.client.getQueryCache().build(this.client, this.options);
    if (e === this.currentQuery)
      return;
    const r = this.currentQuery;
    this.currentQuery = e, this.currentQueryInitialState = e.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (r == null || r.removeObserver(this), e.addObserver(this));
  }
  onQueryUpdate(e) {
    const r = {};
    e.type === "success" ? r.onSuccess = !e.manual : e.type === "error" && !eo(e.error) && (r.onError = !0), this.updateResult(r), this.hasListeners() && this.updateTimers();
  }
  notify(e) {
    _t.batch(() => {
      if (e.onSuccess) {
        var r, n, s, i;
        (r = (n = this.options).onSuccess) == null || r.call(n, this.currentResult.data), (s = (i = this.options).onSettled) == null || s.call(i, this.currentResult.data, null);
      } else if (e.onError) {
        var a, o, u, c;
        (a = (o = this.options).onError) == null || a.call(o, this.currentResult.error), (u = (c = this.options).onSettled) == null || u.call(c, void 0, this.currentResult.error);
      }
      e.listeners && this.listeners.forEach(({
        listener: f
      }) => {
        f(this.currentResult);
      }), e.cache && this.client.getQueryCache().notify({
        query: this.currentQuery,
        type: "observerResultsUpdated"
      });
    });
  }
}
function lx(t, e) {
  return e.enabled !== !1 && !t.state.dataUpdatedAt && !(t.state.status === "error" && e.retryOnMount === !1);
}
function bf(t, e) {
  return lx(t, e) || t.state.dataUpdatedAt > 0 && ac(t, e, e.refetchOnMount);
}
function ac(t, e, r) {
  if (e.enabled !== !1) {
    const n = typeof r == "function" ? r(t) : r;
    return n === "always" || n !== !1 && eu(t, e);
  }
  return !1;
}
function wf(t, e, r, n) {
  return r.enabled !== !1 && (t !== e || n.enabled === !1) && (!r.suspense || t.state.status !== "error") && eu(t, r);
}
function eu(t, e) {
  return t.isStaleByTime(e.staleTime);
}
function fx(t, e, r) {
  return r.keepPreviousData ? !1 : r.placeholderData !== void 0 ? e.isPlaceholderData : !sc(t.getCurrentResult(), e);
}
var hx = Zc();
const dx = hx.useSyncExternalStore, _f = /* @__PURE__ */ Gt.createContext(void 0), _d = /* @__PURE__ */ Gt.createContext(!1);
function Ed(t, e) {
  return t || (e && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = _f), window.ReactQueryClientContext) : _f);
}
const Sd = ({
  context: t
} = {}) => {
  const e = Gt.useContext(Ed(t, Gt.useContext(_d)));
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, px = ({
  client: t,
  children: e,
  context: r,
  contextSharing: n = !1
}) => {
  Gt.useEffect(() => (t.mount(), () => {
    t.unmount();
  }), [t]), process.env.NODE_ENV !== "production" && n && t.getLogger().error("The contextSharing option has been deprecated and will be removed in the next major version");
  const s = Ed(r, n);
  return /* @__PURE__ */ Gt.createElement(_d.Provider, {
    value: !r && n
  }, /* @__PURE__ */ Gt.createElement(s.Provider, {
    value: t
  }, e));
}, xd = /* @__PURE__ */ Gt.createContext(!1), gx = () => Gt.useContext(xd);
xd.Provider;
function yx() {
  let t = !1;
  return {
    clearReset: () => {
      t = !1;
    },
    reset: () => {
      t = !0;
    },
    isReset: () => t
  };
}
const mx = /* @__PURE__ */ Gt.createContext(yx()), vx = () => Gt.useContext(mx);
function bx(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
const wx = (t, e) => {
  (t.suspense || t.useErrorBoundary) && (e.isReset() || (t.retryOnMount = !1));
}, _x = (t) => {
  Gt.useEffect(() => {
    t.clearReset();
  }, [t]);
}, Ex = ({
  result: t,
  errorResetBoundary: e,
  useErrorBoundary: r,
  query: n
}) => t.isError && !e.isReset() && !t.isFetching && bx(r, [t.error, n]), Sx = (t) => {
  t.suspense && typeof t.staleTime != "number" && (t.staleTime = 1e3);
}, xx = (t, e) => t.isLoading && t.isFetching && !e, Dx = (t, e, r) => (t == null ? void 0 : t.suspense) && xx(e, r), Ox = (t, e, r) => e.fetchOptimistic(t).then(({
  data: n
}) => {
  t.onSuccess == null || t.onSuccess(n), t.onSettled == null || t.onSettled(n, null);
}).catch((n) => {
  r.clearReset(), t.onError == null || t.onError(n), t.onSettled == null || t.onSettled(void 0, n);
});
function Ix(t, e) {
  const r = Sd({
    context: t.context
  }), n = gx(), s = vx(), i = r.defaultQueryOptions(t);
  i._optimisticResults = n ? "isRestoring" : "optimistic", i.onError && (i.onError = _t.batchCalls(i.onError)), i.onSuccess && (i.onSuccess = _t.batchCalls(i.onSuccess)), i.onSettled && (i.onSettled = _t.batchCalls(i.onSettled)), Sx(i), wx(i, s), _x(s);
  const [a] = Gt.useState(() => new e(r, i)), o = a.getOptimisticResult(i);
  if (dx(Gt.useCallback((u) => {
    const c = n ? () => {
    } : a.subscribe(_t.batchCalls(u));
    return a.updateResult(), c;
  }, [a, n]), () => a.getCurrentResult(), () => a.getCurrentResult()), Gt.useEffect(() => {
    a.setOptions(i, {
      listeners: !1
    });
  }, [i, a]), Dx(i, o, n))
    throw Ox(i, a, s);
  if (Ex({
    result: o,
    errorResetBoundary: s,
    useErrorBoundary: i.useErrorBoundary,
    query: a.getCurrentQuery()
  }))
    throw o.error;
  return i.notifyOnChangeProps ? o : a.trackResult(o);
}
function Cx(t, e, r) {
  const n = Us(t, e, r);
  return Ix(n, ux);
}
function tu() {
  const [t, e] = js(void 0), [r, n] = js(void 0), [s, i] = js(!1);
  return { data: t, error: r, loading: s, setData: e, setError: n, setLoading: i };
}
async function Dd(t, e) {
  const n = await (await tt()).request(t);
  if (n === void 0 && e)
    throw console.error("Result is undefined, retrying..."), new Error("Result is undefined, retrying...");
  return n;
}
function Oi({ queryKey: t, wcParams: e, enabled: r, queryOptions: n }) {
  return Cx(
    t,
    async () => Dd(e, t),
    n ?? {
      staleTime: t[0] === "getEvent" ? 7500 : 45e3,
      refetchInterval: t[0] === "getEvent" ? 5e3 : 3e4,
      refetchIntervalInBackground: !0,
      enabled: r,
      retry: !0
    }
  );
}
function Ii(t) {
  const { data: e, error: r, loading: n, setData: s, setError: i, setLoading: a } = tu();
  async function o(u) {
    try {
      a(!0), i(void 0);
      const c = await Dd(t ?? u);
      return s(c), c;
    } catch (c) {
      throw i(c), c;
    } finally {
      a(!1);
    }
  }
  return { data: e, error: r, loading: n, request: o };
}
const cc = (t, e = !0, r = 4, n = !0) => t ? t.length < r ? t : n ? `(...${t.slice(-r)})` : t.length < r * 2 ? t : `${t.slice(
  0,
  r + (e ? 5 : 0)
)}...${t.slice(t.length - r, t.length)}` : "", u3 = () => {
  const t = vr(), [e, r, n] = yr((c) => [c.account, c.setAccount, c.onDisconnect]), { refetch: s, data: i, error: a, isLoading: o } = Oi({
    queryKey: ["useAccount", t == null ? void 0 : t.topic],
    enabled: !!t,
    wcParams: {
      topic: t == null ? void 0 : t.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getSelectedAccount"
      }
    }
  });
  xi(({ params: c, topic: f }) => {
    if (c.event.name === "accountSelected" && t && t.topic === f) {
      const p = c.event.address ?? c.event.data.address, m = c.chainId.split(":")[0], v = c.chainId.split(":")[1];
      r({
        network: m,
        chainId: v,
        address: p,
        shortenedAddress: cc(p)
      });
    }
  }), dd(({ params: c, topic: f }) => {
    const d = c.event.address ?? c.event.data.address, p = c.chainId.split(":")[0], m = c.chainId.split(":")[1];
    r({
      network: p,
      chainId: m,
      address: d,
      shortenedAddress: cc(d)
    });
  }), hd(({ params: c, topic: f }) => {
    n();
  }), At(() => {
    t && !o && s();
  }, [t == null ? void 0 : t.topic]), At(() => {
    if (i) {
      const c = i, f = c == null ? void 0 : c.account;
      f && r(f);
    }
  }, [i]);
  const u = a ? a.message : i && i.error;
  return {
    account: e,
    error: u,
    loading: o
  };
}, l3 = ({ address: t, multisig: e }) => {
  const r = vr(), [n] = yr((d) => [d.account]), { refetch: s, data: i, error: a, isLoading: o } = Oi({
    queryKey: ["useBalance", t, (n == null ? void 0 : n.address) ?? "", e, r == null ? void 0 : r.topic],
    enabled: !!r && !!n && (e ? !!t : !0),
    wcParams: {
      topic: r == null ? void 0 : r.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getBalance",
        params: {
          assetId: void 0,
          address: t
        }
      }
    }
  });
  xi(({ params: d, topic: p }) => {
    const m = d.event.name, v = d.event.address ?? d.event.data.address;
    (m === "selectedAccountSynced" && !e || m === "sharedAccountSynced" && e && v === t) && s();
  }), At(() => {
    r && !o && s();
  }, [r == null ? void 0 : r.topic]);
  const u = a ? a.message : i && i.error, c = i;
  return { balances: c == null ? void 0 : c.balances, error: u, loading: o };
};
function f3() {
  const e = !!vr(), { data: r, error: n, loading: s, setData: i, setError: a, setLoading: o } = tu(), [u] = yr((f) => [f.setAccount]);
  async function c() {
    try {
      o(!0), a(void 0);
      const d = await (await tt()).connect({
        requiredNamespaces: {
          aleo: {
            methods: Wc,
            chains: ko,
            events: Gc
          }
        }
      });
      i(d);
      const p = d.namespaces.aleo.accounts[0].split(":");
      return u({
        network: p[0],
        chainId: p[1],
        address: p[2],
        shortenedAddress: cc(p[2])
      }), fs.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), d;
    } catch (f) {
      throw a(f), f;
    } finally {
      o(!1);
    }
  }
  return { data: r, error: n, loading: s, isConnected: e, connect: c };
}
const h3 = () => {
  const t = vr(), { request: e, data: r, error: n, loading: s } = Ii({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "createSharedState",
      params: {}
    }
  }), i = n ? n.message : r && r.error, a = r;
  return { createSharedState: () => {
    t && !s && e();
  }, data: a == null ? void 0 : a.data, loading: s, error: i };
};
var uc = { exports: {} }, ba, Ef;
function Rx() {
  if (Ef)
    return ba;
  Ef = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, s = n * 7, i = n * 365.25;
  ba = function(f, d) {
    d = d || {};
    var p = typeof f;
    if (p === "string" && f.length > 0)
      return a(f);
    if (p === "number" && isFinite(f))
      return d.long ? u(f) : o(f);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(f)
    );
  };
  function a(f) {
    if (f = String(f), !(f.length > 100)) {
      var d = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        f
      );
      if (d) {
        var p = parseFloat(d[1]), m = (d[2] || "ms").toLowerCase();
        switch (m) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return p * i;
          case "weeks":
          case "week":
          case "w":
            return p * s;
          case "days":
          case "day":
          case "d":
            return p * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return p * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return p * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return p * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return p;
          default:
            return;
        }
      }
    }
  }
  function o(f) {
    var d = Math.abs(f);
    return d >= n ? Math.round(f / n) + "d" : d >= r ? Math.round(f / r) + "h" : d >= e ? Math.round(f / e) + "m" : d >= t ? Math.round(f / t) + "s" : f + "ms";
  }
  function u(f) {
    var d = Math.abs(f);
    return d >= n ? c(f, d, n, "day") : d >= r ? c(f, d, r, "hour") : d >= e ? c(f, d, e, "minute") : d >= t ? c(f, d, t, "second") : f + " ms";
  }
  function c(f, d, p, m) {
    var v = d >= p * 1.5;
    return Math.round(f / p) + " " + m + (v ? "s" : "");
  }
  return ba;
}
function Tx(t) {
  r.debug = r, r.default = r, r.coerce = u, r.disable = i, r.enable = s, r.enabled = a, r.humanize = Rx(), r.destroy = c, Object.keys(t).forEach((f) => {
    r[f] = t[f];
  }), r.names = [], r.skips = [], r.formatters = {};
  function e(f) {
    let d = 0;
    for (let p = 0; p < f.length; p++)
      d = (d << 5) - d + f.charCodeAt(p), d |= 0;
    return r.colors[Math.abs(d) % r.colors.length];
  }
  r.selectColor = e;
  function r(f) {
    let d, p = null, m, v;
    function _(...x) {
      if (!_.enabled)
        return;
      const T = _, w = Number(/* @__PURE__ */ new Date()), D = w - (d || w);
      T.diff = D, T.prev = d, T.curr = w, d = w, x[0] = r.coerce(x[0]), typeof x[0] != "string" && x.unshift("%O");
      let b = 0;
      x[0] = x[0].replace(/%([a-zA-Z%])/g, (g, l) => {
        if (g === "%%")
          return "%";
        b++;
        const y = r.formatters[l];
        if (typeof y == "function") {
          const C = x[b];
          g = y.call(T, C), x.splice(b, 1), b--;
        }
        return g;
      }), r.formatArgs.call(T, x), (T.log || r.log).apply(T, x);
    }
    return _.namespace = f, _.useColors = r.useColors(), _.color = r.selectColor(f), _.extend = n, _.destroy = r.destroy, Object.defineProperty(_, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => p !== null ? p : (m !== r.namespaces && (m = r.namespaces, v = r.enabled(f)), v),
      set: (x) => {
        p = x;
      }
    }), typeof r.init == "function" && r.init(_), _;
  }
  function n(f, d) {
    const p = r(this.namespace + (typeof d > "u" ? ":" : d) + f);
    return p.log = this.log, p;
  }
  function s(f) {
    r.save(f), r.namespaces = f, r.names = [], r.skips = [];
    let d;
    const p = (typeof f == "string" ? f : "").split(/[\s,]+/), m = p.length;
    for (d = 0; d < m; d++)
      p[d] && (f = p[d].replace(/\*/g, ".*?"), f[0] === "-" ? r.skips.push(new RegExp("^" + f.slice(1) + "$")) : r.names.push(new RegExp("^" + f + "$")));
  }
  function i() {
    const f = [
      ...r.names.map(o),
      ...r.skips.map(o).map((d) => "-" + d)
    ].join(",");
    return r.enable(""), f;
  }
  function a(f) {
    if (f[f.length - 1] === "*")
      return !0;
    let d, p;
    for (d = 0, p = r.skips.length; d < p; d++)
      if (r.skips[d].test(f))
        return !1;
    for (d = 0, p = r.names.length; d < p; d++)
      if (r.names[d].test(f))
        return !0;
    return !1;
  }
  function o(f) {
    return f.toString().substring(2, f.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function u(f) {
    return f instanceof Error ? f.stack || f.message : f;
  }
  function c() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var Ax = Tx;
(function(t, e) {
  e.formatArgs = n, e.save = s, e.load = i, e.useColors = r, e.storage = a(), e.destroy = /* @__PURE__ */ (() => {
    let u = !1;
    return () => {
      u || (u = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), e.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function r() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function n(u) {
    if (u[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + u[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors)
      return;
    const c = "color: " + this.color;
    u.splice(1, 0, c, "color: inherit");
    let f = 0, d = 0;
    u[0].replace(/%[a-zA-Z%]/g, (p) => {
      p !== "%%" && (f++, p === "%c" && (d = f));
    }), u.splice(d, 0, c);
  }
  e.log = console.debug || console.log || (() => {
  });
  function s(u) {
    try {
      u ? e.storage.setItem("debug", u) : e.storage.removeItem("debug");
    } catch {
    }
  }
  function i() {
    let u;
    try {
      u = e.storage.getItem("debug");
    } catch {
    }
    return !u && typeof process < "u" && "env" in process && (u = process.env.DEBUG), u;
  }
  function a() {
    try {
      return localStorage;
    } catch {
    }
  }
  t.exports = Ax(e);
  const { formatters: o } = t.exports;
  o.j = function(u) {
    try {
      return JSON.stringify(u);
    } catch (c) {
      return "[UnexpectedJSONParseError]: " + c.message;
    }
  };
})(uc, uc.exports);
var Px = uc.exports;
const Nx = /* @__PURE__ */ di(Px), Ci = Nx("wallet:sdk");
Ci.enabled = !0;
const d3 = (t) => {
  Ci("useDecrypt", t);
  const e = vr(), { request: r, data: n, error: s, loading: i } = Ii({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "decrypt",
      params: {
        ciphertexts: t
      }
    }
  }), a = s ? s.message : n && n.error, o = n;
  return { decrypt: () => {
    t && e && !i && r();
  }, plaintexts: o == null ? void 0 : o.plaintexts, loading: i, error: a };
};
function p3() {
  const t = vr(), [e] = yr((o) => [o.onDisconnect]), { error: r, loading: n, setError: s, setLoading: i } = tu();
  async function a() {
    if (!t || n) {
      t || e();
      return;
    }
    try {
      i(!0), s(void 0);
      try {
        await (await tt()).disconnect({
          topic: t.topic,
          reason: Qc("USER_DISCONNECTED")
        }), fs.emit("session_change");
      } catch (o) {
        console.warn(o);
      }
      yr.getState().onDisconnect();
    } catch (o) {
      throw s(o), o;
    } finally {
      i(!1);
    }
  }
  return { error: r, loading: n, disconnect: a };
}
const g3 = ({ id: t, address: e, multisig: r = !1 }) => {
  const n = vr(), [s] = yr((_) => [_.account]), i = t !== void 0 && t !== "" && !!n && !!s && (r ? !!e : !0), { refetch: a, data: o, error: u, isLoading: c } = Oi({
    queryKey: ["useEvent", s == null ? void 0 : s.address, e, r, t, n == null ? void 0 : n.topic],
    enabled: i,
    wcParams: {
      topic: n == null ? void 0 : n.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getEvent",
        params: {
          id: t ?? "",
          address: e
        }
      }
    }
  });
  xi(({ params: _, topic: x }) => {
    const T = _.event.name, w = _.event.address ?? _.event.data.address;
    (t && T === "selectedAccountSynced" && !r || T === "sharedAccountSynced" && r && w === e) && a();
  });
  const f = !!n && !!s && !!t && (r ? !!e : !0);
  At(() => {
    f && !c && a();
  }, [f]);
  const d = () => {
    f && !c && a();
  }, p = u ? u.message : o && o.error, m = o, v = m == null ? void 0 : m.event;
  return { fetchEvent: d, event: v, error: p, loading: c };
}, y3 = ({ filter: t, page: e }) => {
  const r = vr(), [n] = yr((v) => [v.account]);
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const { refetch: s, data: i, error: a, isLoading: o } = Oi({
    queryKey: ["useEvents", n == null ? void 0 : n.address, t, e, r == null ? void 0 : r.topic],
    enabled: !!r && !!n,
    wcParams: {
      topic: (r == null ? void 0 : r.topic) ?? "",
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getEvents",
        params: {
          filter: t,
          page: e
        }
      }
    }
  });
  xi(({ id: v, params: _, topic: x }) => {
    _.event.name === "selectedAccountSynced" && s();
  });
  const u = !!r && !!n;
  At(() => {
    u && !o && s();
  }, [u]);
  const c = () => {
    u && !o && s();
  }, f = a ? a.message : i && i.error, d = i, p = d == null ? void 0 : d.events, m = (d == null ? void 0 : d.pageCount) ?? 0;
  return { fetchPage: c, events: p, error: f, loading: o, page: e, pageCount: m };
}, m3 = (t) => {
  const e = vr(), { request: r, data: n, error: s, loading: i } = Ii({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "importSharedState",
      params: {
        seed: t
      }
    }
  }), a = s ? s.message : n && n.error, o = n;
  return { importSharedState: () => {
    e && !i && r();
  }, data: o == null ? void 0 : o.data, loading: i, error: a };
}, v3 = (t) => {
  try {
    return JSON.stringify(t, null, 2).replaceAll('"', "") ?? "";
  } catch {
    return "";
  }
}, b3 = ({ address: t, multisig: e = !1, filter: r, page: n }) => {
  const s = vr(), [i] = yr((x) => [
    x.account
  ]), { refetch: a, data: o, error: u, isLoading: c } = Oi({
    queryKey: ["useRecords", i == null ? void 0 : i.address, t, e, r, n, s == null ? void 0 : s.topic],
    enabled: (e ? !!t : !0) && !!s && !!i,
    wcParams: {
      topic: s == null ? void 0 : s.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getRecords",
        params: {
          address: t,
          filter: r,
          page: n
        }
      }
    }
  }), f = !!s && !!i && (e ? !!t : !0);
  xi(({ params: x }) => {
    const T = x.event.name, w = x.event.address ?? x.event.data.address;
    (T === "selectedAccountSynced" && !e || T === "sharedAccountSynced" && e && w === t) && a();
  });
  const d = () => {
    f && !c && (Ci("useRecords refetching...", [t, e, r, n]), a());
  }, p = u ? u.message : o && o.error, m = o, v = m == null ? void 0 : m.records, _ = (m == null ? void 0 : m.pageCount) ?? 0;
  return { fetchPage: d, records: v, error: p, loading: c, page: n, pageCount: _ };
}, w3 = (t) => {
  const e = vr(), r = t == null ? void 0 : t.inputs.map((f) => typeof f == "string" ? f : f.plaintext), { request: n, data: s, error: i, loading: a } = Ii({
    topic: (e == null ? void 0 : e.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "requestCreateEvent",
      params: {
        ...t,
        inputs: r
      }
    }
  }), o = i ? i.message : s && s.error, u = s;
  return { createEvent: () => {
    t && e && !a && (Ci("useCreateEvent requesting...", t), n());
  }, eventId: u == null ? void 0 : u.eventId, loading: a, error: o };
}, _3 = (t, e) => {
  const r = vr(), { request: n, data: s, error: i, loading: a } = Ii({
    topic: (r == null ? void 0 : r.topic) ?? "",
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "requestSignature",
      params: {
        message: t,
        address: Yc.test(e ?? "") ? e : void 0
      }
    }
  }), o = i ? i.message : s && s.error;
  return { requestSignature: () => {
    r && !a && (Ci("useRequestSignature requesting...", [t, e]), n());
  }, response: s, loading: a, error: o };
}, E3 = async () => {
  const t = await tt(), e = await t.getSession();
  if (!e || !t)
    return { error: "no session or connection" };
  try {
    const r = await t.request({
      topic: e.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getSelectedAccount"
      }
    });
    return yr.setState({ account: r.account }), r;
  } catch (r) {
    const n = r.message;
    return console.error("getAccount error", n), { error: n };
  }
}, S3 = async ({ address: t }) => {
  const e = await tt(), r = await e.getSession();
  if (!r || !e)
    return { error: "no session or connection" };
  try {
    return await e.request({
      topic: r.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "getBalance",
        params: {
          assetId: void 0,
          address: t
        }
      }
    });
  } catch (n) {
    const s = n.message;
    return console.error("getBalance error", s), { error: s };
  }
}, x3 = async () => {
  const t = await tt();
  if (!t)
    throw new Error("call setConnection() first!");
  const e = await t.getSession();
  if (e)
    return console.log("Already connected!", e), e;
  try {
    const r = await t.connect({
      requiredNamespaces: {
        aleo: {
          methods: Wc,
          chains: ko,
          events: Gc
        }
      }
    });
    return fs.emit("session_change"), window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"), r;
  } catch (r) {
    console.error("connect error", r.message);
  }
}, D3 = async (t) => {
  const e = await tt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { error: "no session or connection" };
  const n = t == null ? void 0 : t.inputs.map((s) => typeof s == "string" ? s : s.plaintext);
  try {
    return await e.request({
      topic: r.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "requestCreateEvent",
        params: {
          ...t,
          inputs: n
        }
      }
    });
  } catch (s) {
    const i = s.message;
    return console.error("createEvent error", i), { error: i };
  }
}, O3 = async () => {
  const t = await tt(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return { error: "no session or connection" };
  try {
    return await t.request({
      topic: e.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "createSharedState",
        params: {}
      }
    });
  } catch (r) {
    const n = r.message;
    return console.error("createSharedState error", n), { error: n };
  }
}, I3 = async (t) => {
  const e = await tt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { error: "no session or connection" };
  try {
    return await e.request({
      topic: r.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "decrypt",
        params: {
          ciphertexts: t
        }
      }
    });
  } catch (n) {
    return console.error("decrypt error", n.message), { error: n.message };
  }
}, C3 = async () => {
  const t = await tt(), e = await (t == null ? void 0 : t.getSession());
  if (!e || !t)
    return e || yr.getState().onDisconnect(), { error: "no session or connection" };
  try {
    try {
      await t.disconnect({
        reason: Qc("USER_DISCONNECTED"),
        topic: e.topic
      }), fs.emit("session_change");
    } catch (r) {
      console.warn(r);
    }
    return yr.getState().onDisconnect(), {};
  } catch (r) {
    const n = r.message;
    return console.error("error disconnecting", n), { error: n };
  }
}, R3 = async ({
  id: t,
  address: e
}) => {
  const r = await tt(), n = await (r == null ? void 0 : r.getSession());
  if (!n || !r)
    return { event: void 0, error: "no session or connection" };
  const s = async () => await r.request({
    topic: n.topic,
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "getEvent",
      params: {
        id: t,
        address: e
      }
    }
  });
  try {
    return await s();
  } catch (i) {
    const a = i.message;
    return console.error("getEvents error", a), { error: a };
  }
}, T3 = async (t) => {
  const e = await tt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { events: void 0, error: "no session or connection" };
  (t == null ? void 0 : t.programId) === "" && (t.programId = void 0);
  const n = async (s = 0) => await e.request({
    topic: r.topic,
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "getEvents",
      params: {
        filter: t,
        page: s
      }
    }
  });
  try {
    return await n();
  } catch (s) {
    const i = s.message;
    return console.error("getEvents error", i), { error: i };
  }
}, A3 = async (t) => {
  const e = await tt(), r = await (e == null ? void 0 : e.getSession());
  if (!r || !e)
    return { error: "no session or connection" };
  try {
    return await e.request({
      topic: r.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "importSharedState",
        params: {
          seed: t
        }
      }
    });
  } catch (n) {
    const s = n.message;
    return console.error("importSharedState error", s), { error: s };
  }
}, P3 = async ({
  address: t,
  filter: e,
  page: r = 0
}) => {
  const n = await tt(), s = await (n == null ? void 0 : n.getSession());
  if (!s || !n)
    return { error: "no session or connection" };
  const i = async (a = 0) => await n.request({
    topic: s.topic,
    chainId: "aleo:1",
    request: {
      jsonrpc: "2.0",
      method: "getRecords",
      params: {
        address: t,
        filter: e,
        page: a
      }
    }
  });
  try {
    return await i();
  } catch (a) {
    const o = a.message;
    return console.error("getRecords error", o), { error: o };
  }
}, N3 = async ({
  message: t,
  address: e
}) => {
  const r = await tt(), n = await (r == null ? void 0 : r.getSession());
  if (!n || !r)
    return { error: "no session or connection" };
  try {
    return await r.request({
      topic: n.topic,
      chainId: "aleo:1",
      request: {
        jsonrpc: "2.0",
        method: "requestSignature",
        params: {
          message: t,
          address: Yc.test(e ?? "") ? e : void 0
        }
      }
    });
  } catch (s) {
    const i = s.message;
    return console.error("signature error", i), { error: i };
  }
}, L3 = 20;
var lc = { exports: {} }, Ps = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sf;
function Lx() {
  return Sf || (Sf = 1, process.env.NODE_ENV !== "production" && function() {
    var t = gn, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v = Symbol.iterator, _ = "@@iterator";
    function x(O) {
      if (O === null || typeof O != "object")
        return null;
      var j = v && O[v] || O[_];
      return typeof j == "function" ? j : null;
    }
    var T = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(O) {
      {
        for (var j = arguments.length, J = new Array(j > 1 ? j - 1 : 0), ue = 1; ue < j; ue++)
          J[ue - 1] = arguments[ue];
        D("error", O, J);
      }
    }
    function D(O, j, J) {
      {
        var ue = T.ReactDebugCurrentFrame, $e = ue.getStackAddendum();
        $e !== "" && (j += "%s", J = J.concat([$e]));
        var Pe = J.map(function(Le) {
          return String(Le);
        });
        Pe.unshift("Warning: " + j), Function.prototype.apply.call(console[O], console, Pe);
      }
    }
    var b = !1, S = !1, g = !1, l = !1, y = !1, C;
    C = Symbol.for("react.module.reference");
    function A(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === n || O === i || y || O === s || O === c || O === f || l || O === m || b || S || g || typeof O == "object" && O !== null && (O.$$typeof === p || O.$$typeof === d || O.$$typeof === a || O.$$typeof === o || O.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === C || O.getModuleId !== void 0));
    }
    function M(O, j, J) {
      var ue = O.displayName;
      if (ue)
        return ue;
      var $e = j.displayName || j.name || "";
      return $e !== "" ? J + "(" + $e + ")" : J;
    }
    function z(O) {
      return O.displayName || "Context";
    }
    function G(O) {
      if (O == null)
        return null;
      if (typeof O.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
        return O.displayName || O.name || null;
      if (typeof O == "string")
        return O;
      switch (O) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case s:
          return "StrictMode";
        case c:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case o:
            var j = O;
            return z(j) + ".Consumer";
          case a:
            var J = O;
            return z(J._context) + ".Provider";
          case u:
            return M(O, O.render, "ForwardRef");
          case d:
            var ue = O.displayName || null;
            return ue !== null ? ue : G(O.type) || "Memo";
          case p: {
            var $e = O, Pe = $e._payload, Le = $e._init;
            try {
              return G(Le(Pe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, L = 0, Q, V, k, B, $, K, fe;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function ae() {
      {
        if (L === 0) {
          Q = console.log, V = console.info, k = console.warn, B = console.error, $ = console.group, K = console.groupCollapsed, fe = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: H,
            writable: !0
          };
          Object.defineProperties(console, {
            info: O,
            log: O,
            warn: O,
            error: O,
            group: O,
            groupCollapsed: O,
            groupEnd: O
          });
        }
        L++;
      }
    }
    function te() {
      {
        if (L--, L === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, O, {
              value: Q
            }),
            info: R({}, O, {
              value: V
            }),
            warn: R({}, O, {
              value: k
            }),
            error: R({}, O, {
              value: B
            }),
            group: R({}, O, {
              value: $
            }),
            groupCollapsed: R({}, O, {
              value: K
            }),
            groupEnd: R({}, O, {
              value: fe
            })
          });
        }
        L < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = T.ReactCurrentDispatcher, U;
    function F(O, j, J) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch ($e) {
            var ue = $e.stack.trim().match(/\n( *(at )?)/);
            U = ue && ue[1] || "";
          }
        return `
` + U + O;
      }
    }
    var P = !1, h;
    {
      var I = typeof WeakMap == "function" ? WeakMap : Map;
      h = new I();
    }
    function Z(O, j) {
      if (!O || P)
        return "";
      {
        var J = h.get(O);
        if (J !== void 0)
          return J;
      }
      var ue;
      P = !0;
      var $e = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Pe;
      Pe = oe.current, oe.current = null, ae();
      try {
        if (j) {
          var Le = function() {
            throw Error();
          };
          if (Object.defineProperty(Le.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Le, []);
            } catch (br) {
              ue = br;
            }
            Reflect.construct(O, [], Le);
          } else {
            try {
              Le.call();
            } catch (br) {
              ue = br;
            }
            O.call(Le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (br) {
            ue = br;
          }
          O();
        }
      } catch (br) {
        if (br && ue && typeof br.stack == "string") {
          for (var Re = br.stack.split(`
`), Rt = ue.stack.split(`
`), nt = Re.length - 1, ut = Rt.length - 1; nt >= 1 && ut >= 0 && Re[nt] !== Rt[ut]; )
            ut--;
          for (; nt >= 1 && ut >= 0; nt--, ut--)
            if (Re[nt] !== Rt[ut]) {
              if (nt !== 1 || ut !== 1)
                do
                  if (nt--, ut--, ut < 0 || Re[nt] !== Rt[ut]) {
                    var bt = `
` + Re[nt].replace(" at new ", " at ");
                    return O.displayName && bt.includes("<anonymous>") && (bt = bt.replace("<anonymous>", O.displayName)), typeof O == "function" && h.set(O, bt), bt;
                  }
                while (nt >= 1 && ut >= 0);
              break;
            }
        }
      } finally {
        P = !1, oe.current = Pe, te(), Error.prepareStackTrace = $e;
      }
      var en = O ? O.displayName || O.name : "", Ri = en ? F(en) : "";
      return typeof O == "function" && h.set(O, Ri), Ri;
    }
    function X(O, j, J) {
      return Z(O, !1);
    }
    function Oe(O) {
      var j = O.prototype;
      return !!(j && j.isReactComponent);
    }
    function Ie(O, j, J) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return Z(O, Oe(O));
      if (typeof O == "string")
        return F(O);
      switch (O) {
        case c:
          return F("Suspense");
        case f:
          return F("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case u:
            return X(O.render);
          case d:
            return Ie(O.type, j, J);
          case p: {
            var ue = O, $e = ue._payload, Pe = ue._init;
            try {
              return Ie(Pe($e), j, J);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, Fe = {}, Je = T.ReactDebugCurrentFrame;
    function He(O) {
      if (O) {
        var j = O._owner, J = Ie(O.type, O._source, j ? j.type : null);
        Je.setExtraStackFrame(J);
      } else
        Je.setExtraStackFrame(null);
    }
    function Ne(O, j, J, ue, $e) {
      {
        var Pe = Function.call.bind(we);
        for (var Le in O)
          if (Pe(O, Le)) {
            var Re = void 0;
            try {
              if (typeof O[Le] != "function") {
                var Rt = Error((ue || "React class") + ": " + J + " type `" + Le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[Le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Rt.name = "Invariant Violation", Rt;
              }
              Re = O[Le](j, Le, ue, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nt) {
              Re = nt;
            }
            Re && !(Re instanceof Error) && (He($e), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ue || "React class", J, Le, typeof Re), He(null)), Re instanceof Error && !(Re.message in Fe) && (Fe[Re.message] = !0, He($e), w("Failed %s type: %s", J, Re.message), He(null));
          }
      }
    }
    var Te = Array.isArray;
    function _e(O) {
      return Te(O);
    }
    function Se(O) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, J = j && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return J;
      }
    }
    function Ee(O) {
      try {
        return ge(O), !1;
      } catch {
        return !0;
      }
    }
    function ge(O) {
      return "" + O;
    }
    function pe(O) {
      if (Ee(O))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Se(O)), ge(O);
    }
    var ce = T.ReactCurrentOwner, xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, he, Ae;
    Ae = {};
    function Ue(O) {
      if (we.call(O, "ref")) {
        var j = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function ke(O) {
      if (we.call(O, "key")) {
        var j = Object.getOwnPropertyDescriptor(O, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function qe(O, j) {
      if (typeof O.ref == "string" && ce.current && j && ce.current.stateNode !== j) {
        var J = G(ce.current.type);
        Ae[J] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(ce.current.type), O.ref), Ae[J] = !0);
      }
    }
    function je(O, j) {
      {
        var J = function() {
          Ce || (Ce = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        J.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: J,
          configurable: !0
        });
      }
    }
    function nr(O, j) {
      {
        var J = function() {
          he || (he = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        J.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: J,
          configurable: !0
        });
      }
    }
    var lr = function(O, j, J, ue, $e, Pe, Le) {
      var Re = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: O,
        key: j,
        ref: J,
        props: Le,
        // Record the component responsible for creating this element.
        _owner: Pe
      };
      return Re._store = {}, Object.defineProperty(Re._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Re, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ue
      }), Object.defineProperty(Re, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $e
      }), Object.freeze && (Object.freeze(Re.props), Object.freeze(Re)), Re;
    };
    function Rr(O, j, J, ue, $e) {
      {
        var Pe, Le = {}, Re = null, Rt = null;
        J !== void 0 && (pe(J), Re = "" + J), ke(j) && (pe(j.key), Re = "" + j.key), Ue(j) && (Rt = j.ref, qe(j, $e));
        for (Pe in j)
          we.call(j, Pe) && !xe.hasOwnProperty(Pe) && (Le[Pe] = j[Pe]);
        if (O && O.defaultProps) {
          var nt = O.defaultProps;
          for (Pe in nt)
            Le[Pe] === void 0 && (Le[Pe] = nt[Pe]);
        }
        if (Re || Rt) {
          var ut = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          Re && je(Le, ut), Rt && nr(Le, ut);
        }
        return lr(O, Re, Rt, $e, ue, ce.current, Le);
      }
    }
    var Ct = T.ReactCurrentOwner, Tr = T.ReactDebugCurrentFrame;
    function fr(O) {
      if (O) {
        var j = O._owner, J = Ie(O.type, O._source, j ? j.type : null);
        Tr.setExtraStackFrame(J);
      } else
        Tr.setExtraStackFrame(null);
    }
    var Xr;
    Xr = !1;
    function Xe(O) {
      return typeof O == "object" && O !== null && O.$$typeof === e;
    }
    function Qe() {
      {
        if (Ct.current) {
          var O = G(Ct.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function ot(O) {
      {
        if (O !== void 0) {
          var j = O.fileName.replace(/^.*[\\\/]/, ""), J = O.lineNumber;
          return `

Check your code at ` + j + ":" + J + ".";
        }
        return "";
      }
    }
    var rt = {};
    function at(O) {
      {
        var j = Qe();
        if (!j) {
          var J = typeof O == "string" ? O : O.displayName || O.name;
          J && (j = `

Check the top-level render call using <` + J + ">.");
        }
        return j;
      }
    }
    function Ze(O, j) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var J = at(j);
        if (rt[J])
          return;
        rt[J] = !0;
        var ue = "";
        O && O._owner && O._owner !== Ct.current && (ue = " It was passed a child from " + G(O._owner.type) + "."), fr(O), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, ue), fr(null);
      }
    }
    function ft(O, j) {
      {
        if (typeof O != "object")
          return;
        if (_e(O))
          for (var J = 0; J < O.length; J++) {
            var ue = O[J];
            Xe(ue) && Ze(ue, j);
          }
        else if (Xe(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var $e = x(O);
          if (typeof $e == "function" && $e !== O.entries)
            for (var Pe = $e.call(O), Le; !(Le = Pe.next()).done; )
              Xe(Le.value) && Ze(Le.value, j);
        }
      }
    }
    function yt(O) {
      {
        var j = O.type;
        if (j == null || typeof j == "string")
          return;
        var J;
        if (typeof j == "function")
          J = j.propTypes;
        else if (typeof j == "object" && (j.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === d))
          J = j.propTypes;
        else
          return;
        if (J) {
          var ue = G(j);
          Ne(J, O.props, "prop", ue, O);
        } else if (j.PropTypes !== void 0 && !Xr) {
          Xr = !0;
          var $e = G(j);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $e || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mt(O) {
      {
        for (var j = Object.keys(O.props), J = 0; J < j.length; J++) {
          var ue = j[J];
          if (ue !== "children" && ue !== "key") {
            fr(O), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ue), fr(null);
            break;
          }
        }
        O.ref !== null && (fr(O), w("Invalid attribute `ref` supplied to `React.Fragment`."), fr(null));
      }
    }
    function ht(O, j, J, ue, $e, Pe) {
      {
        var Le = A(O);
        if (!Le) {
          var Re = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (Re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Rt = ot($e);
          Rt ? Re += Rt : Re += Qe();
          var nt;
          O === null ? nt = "null" : _e(O) ? nt = "array" : O !== void 0 && O.$$typeof === e ? (nt = "<" + (G(O.type) || "Unknown") + " />", Re = " Did you accidentally export a JSX literal instead of a component?") : nt = typeof O, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nt, Re);
        }
        var ut = Rr(O, j, J, $e, Pe);
        if (ut == null)
          return ut;
        if (Le) {
          var bt = j.children;
          if (bt !== void 0)
            if (ue)
              if (_e(bt)) {
                for (var en = 0; en < bt.length; en++)
                  ft(bt[en], O);
                Object.freeze && Object.freeze(bt);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ft(bt, O);
        }
        return O === n ? mt(ut) : yt(ut), ut;
      }
    }
    function vt(O, j, J) {
      return ht(O, j, J, !0);
    }
    function dt(O, j, J) {
      return ht(O, j, J, !1);
    }
    var ct = dt, We = vt;
    Ps.Fragment = n, Ps.jsx = ct, Ps.jsxs = We;
  }()), Ps;
}
var Ns = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xf;
function Fx() {
  if (xf)
    return Ns;
  xf = 1;
  var t = gn, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(o, u, c) {
    var f, d = {}, p = null, m = null;
    c !== void 0 && (p = "" + c), u.key !== void 0 && (p = "" + u.key), u.ref !== void 0 && (m = u.ref);
    for (f in u)
      n.call(u, f) && !i.hasOwnProperty(f) && (d[f] = u[f]);
    if (o && o.defaultProps)
      for (f in u = o.defaultProps, u)
        d[f] === void 0 && (d[f] = u[f]);
    return { $$typeof: e, type: o, key: p, ref: m, props: d, _owner: s.current };
  }
  return Ns.Fragment = r, Ns.jsx = a, Ns.jsxs = a, Ns;
}
process.env.NODE_ENV === "production" ? lc.exports = Fx() : lc.exports = Lx();
var Df = lc.exports, ye = {
  context: void 0,
  registry: void 0
};
function Ms(t) {
  ye.context = t;
}
var Ux = (t, e) => t === e, Eo = Symbol("solid-proxy"), Od = Symbol("solid-track"), So = {
  equals: Ux
}, Id = Nd, Jr = 1, xo = 2, Cd = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
}, wa = {}, ze = null, _a = null, Ve = null, qt = null, Zr = null, Vo = 0, [Mx, F3] = /* @__PURE__ */ Wt(!1);
function Nn(t, e) {
  const r = Ve, n = ze, s = t.length === 0, i = e === void 0 ? n : e, a = s ? Cd : {
    owned: null,
    cleanups: null,
    context: i ? i.context : null,
    owner: i
  }, o = s ? t : () => t(() => It(() => Ho(a)));
  ze = a, Ve = null;
  try {
    return $r(o, !0);
  } finally {
    Ve = r, ze = n;
  }
}
function Wt(t, e) {
  e = e ? Object.assign({}, So, e) : So;
  const r = {
    value: t,
    observers: null,
    observerSlots: null,
    comparator: e.equals || void 0
  }, n = (s) => (typeof s == "function" && (s = s(r.value)), Pd(r, s));
  return [Ad.bind(r), n];
}
function Of(t, e, r) {
  const n = Ko(t, e, !0, Jr);
  Es(n);
}
function Ln(t, e, r) {
  const n = Ko(t, e, !1, Jr);
  Es(n);
}
function Rd(t, e, r) {
  Id = Kx;
  const n = Ko(t, e, !1, Jr);
  (!r || !r.render) && (n.user = !0), Zr ? Zr.push(n) : Es(n);
}
function rr(t, e, r) {
  r = r ? Object.assign({}, So, r) : So;
  const n = Ko(t, e, !0, 0);
  return n.observers = null, n.observerSlots = null, n.comparator = r.equals || void 0, Es(n), Ad.bind(n);
}
function If(t) {
  return t && typeof t == "object" && "then" in t;
}
function jx(t, e, r) {
  let n, s, i;
  arguments.length === 2 && typeof e == "object" || arguments.length === 1 ? (n = !0, s = t, i = e || {}) : (n = t, s = e, i = r || {});
  let a = null, o = wa, u = null, c = !1, f = "initialValue" in i, d = typeof n == "function" && rr(n);
  const p = /* @__PURE__ */ new Set(), [m, v] = (i.storage || Wt)(i.initialValue), [_, x] = Wt(void 0), [T, w] = Wt(void 0, {
    equals: !1
  }), [D, b] = Wt(f ? "ready" : "unresolved");
  if (ye.context) {
    u = `${ye.context.id}${ye.context.count++}`;
    let C;
    i.ssrLoadFrom === "initial" ? o = i.initialValue : ye.load && (C = ye.load(u)) && (o = If(C) && "value" in C ? C.value : C);
  }
  function S(C, A, M, z) {
    return a === C && (a = null, z !== void 0 && (f = !0), (C === o || A === o) && i.onHydrated && queueMicrotask(
      () => i.onHydrated(z, {
        value: A
      })
    ), o = wa, g(A, M)), A;
  }
  function g(C, A) {
    $r(() => {
      A === void 0 && v(() => C), b(A !== void 0 ? "errored" : f ? "ready" : "unresolved"), x(A);
      for (const M of p.keys())
        M.decrement();
      p.clear();
    }, !1);
  }
  function l() {
    const C = zx, A = m(), M = _();
    if (M !== void 0 && !a)
      throw M;
    return Ve && !Ve.user && C && Of(() => {
      T(), a && (C.resolved || p.has(C) || (C.increment(), p.add(C)));
    }), A;
  }
  function y(C = !0) {
    if (C !== !1 && c)
      return;
    c = !1;
    const A = d ? d() : n;
    if (A == null || A === !1) {
      S(a, It(m));
      return;
    }
    const M = o !== wa ? o : It(
      () => s(A, {
        value: m(),
        refetching: C
      })
    );
    return If(M) ? (a = M, c = !0, queueMicrotask(() => c = !1), $r(() => {
      b(f ? "refreshing" : "pending"), w();
    }, !1), M.then(
      (z) => S(M, z, void 0, A),
      (z) => S(M, void 0, Fd(z), A)
    )) : (S(a, M, void 0, A), M);
  }
  return Object.defineProperties(l, {
    state: {
      get: () => D()
    },
    error: {
      get: () => _()
    },
    loading: {
      get() {
        const C = D();
        return C === "pending" || C === "refreshing";
      }
    },
    latest: {
      get() {
        if (!f)
          return l();
        const C = _();
        if (C && !a)
          throw C;
        return m();
      }
    }
  }), d ? Of(() => y(!1)) : y(!1), [
    l,
    {
      refetch: y,
      mutate: v
    }
  ];
}
function U3(t) {
  return $r(t, !1);
}
function It(t) {
  if (Ve === null)
    return t();
  const e = Ve;
  Ve = null;
  try {
    return t();
  } finally {
    Ve = e;
  }
}
function M3(t, e, r) {
  const n = Array.isArray(t);
  let s, i = r && r.defer;
  return (a) => {
    let o;
    if (n) {
      o = Array(t.length);
      for (let c = 0; c < t.length; c++)
        o[c] = t[c]();
    } else
      o = t();
    if (i) {
      i = !1;
      return;
    }
    const u = It(() => e(o, s, a));
    return s = o, u;
  };
}
function $x(t) {
  Rd(() => It(t));
}
function si(t) {
  return ze === null || (ze.cleanups === null ? ze.cleanups = [t] : ze.cleanups.push(t)), t;
}
function j3() {
  return Ve;
}
function Cf() {
  return ze;
}
function kx(t, e) {
  const r = ze, n = Ve;
  ze = t, Ve = null;
  try {
    return $r(e, !0);
  } catch (s) {
    ru(s);
  } finally {
    ze = r, Ve = n;
  }
}
function qx(t) {
  const e = Ve, r = ze;
  return Promise.resolve().then(() => {
    Ve = e, ze = r;
    let n;
    return $r(t, !1), Ve = ze = null, n ? n.done : void 0;
  });
}
function $3() {
  return [Mx, qx];
}
function k3(t, e) {
  const r = Symbol("context");
  return {
    id: r,
    Provider: Hx(r),
    defaultValue: t
  };
}
function q3(t) {
  return ze && ze.context && ze.context[t.id] !== void 0 ? ze.context[t.id] : t.defaultValue;
}
function Td(t) {
  const e = rr(t), r = rr(() => fc(e()));
  return r.toArray = () => {
    const n = r();
    return Array.isArray(n) ? n : n != null ? [n] : [];
  }, r;
}
var zx;
function Ad() {
  if (this.sources && this.state)
    if (this.state === Jr)
      Es(this);
    else {
      const t = qt;
      qt = null, $r(() => Oo(this), !1), qt = t;
    }
  if (Ve) {
    const t = this.observers ? this.observers.length : 0;
    Ve.sources ? (Ve.sources.push(this), Ve.sourceSlots.push(t)) : (Ve.sources = [this], Ve.sourceSlots = [t]), this.observers ? (this.observers.push(Ve), this.observerSlots.push(Ve.sources.length - 1)) : (this.observers = [Ve], this.observerSlots = [Ve.sources.length - 1]);
  }
  return this.value;
}
function Pd(t, e, r) {
  let n = t.value;
  return (!t.comparator || !t.comparator(n, e)) && (t.value = e, t.observers && t.observers.length && $r(() => {
    for (let s = 0; s < t.observers.length; s += 1) {
      const i = t.observers[s], a = _a && _a.running;
      a && _a.disposed.has(i), (a ? !i.tState : !i.state) && (i.pure ? qt.push(i) : Zr.push(i), i.observers && Ld(i)), a || (i.state = Jr);
    }
    if (qt.length > 1e6)
      throw qt = [], new Error();
  }, !1)), e;
}
function Es(t) {
  if (!t.fn)
    return;
  Ho(t);
  const e = ze, r = Ve, n = Vo;
  Ve = ze = t, Bx(
    t,
    t.value,
    n
  ), Ve = r, ze = e;
}
function Bx(t, e, r) {
  let n;
  try {
    n = t.fn(e);
  } catch (s) {
    return t.pure && (t.state = Jr, t.owned && t.owned.forEach(Ho), t.owned = null), t.updatedAt = r + 1, ru(s);
  }
  (!t.updatedAt || t.updatedAt <= r) && (t.updatedAt != null && "observers" in t ? Pd(t, n) : t.value = n, t.updatedAt = r);
}
function Ko(t, e, r, n = Jr, s) {
  const i = {
    fn: t,
    state: n,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: e,
    owner: ze,
    context: ze ? ze.context : null,
    pure: r
  };
  return ze === null || ze !== Cd && (ze.owned ? ze.owned.push(i) : ze.owned = [i]), i;
}
function Do(t) {
  if (t.state === 0)
    return;
  if (t.state === xo)
    return Oo(t);
  if (t.suspense && It(t.suspense.inFallback))
    return t.suspense.effects.push(t);
  const e = [t];
  for (; (t = t.owner) && (!t.updatedAt || t.updatedAt < Vo); )
    t.state && e.push(t);
  for (let r = e.length - 1; r >= 0; r--)
    if (t = e[r], t.state === Jr)
      Es(t);
    else if (t.state === xo) {
      const n = qt;
      qt = null, $r(() => Oo(t, e[0]), !1), qt = n;
    }
}
function $r(t, e) {
  if (qt)
    return t();
  let r = !1;
  e || (qt = []), Zr ? r = !0 : Zr = [], Vo++;
  try {
    const n = t();
    return Vx(r), n;
  } catch (n) {
    r || (Zr = null), qt = null, ru(n);
  }
}
function Vx(t) {
  if (qt && (Nd(qt), qt = null), t)
    return;
  const e = Zr;
  Zr = null, e.length && $r(() => Id(e), !1);
}
function Nd(t) {
  for (let e = 0; e < t.length; e++)
    Do(t[e]);
}
function Kx(t) {
  let e, r = 0;
  for (e = 0; e < t.length; e++) {
    const n = t[e];
    n.user ? t[r++] = n : Do(n);
  }
  if (ye.context) {
    if (ye.count) {
      ye.effects || (ye.effects = []), ye.effects.push(...t.slice(0, r));
      return;
    } else
      ye.effects && (t = [...ye.effects, ...t], r += ye.effects.length, delete ye.effects);
    Ms();
  }
  for (e = 0; e < r; e++)
    Do(t[e]);
}
function Oo(t, e) {
  t.state = 0;
  for (let r = 0; r < t.sources.length; r += 1) {
    const n = t.sources[r];
    if (n.sources) {
      const s = n.state;
      s === Jr ? n !== e && (!n.updatedAt || n.updatedAt < Vo) && Do(n) : s === xo && Oo(n, e);
    }
  }
}
function Ld(t) {
  for (let e = 0; e < t.observers.length; e += 1) {
    const r = t.observers[e];
    r.state || (r.state = xo, r.pure ? qt.push(r) : Zr.push(r), r.observers && Ld(r));
  }
}
function Ho(t) {
  let e;
  if (t.sources)
    for (; t.sources.length; ) {
      const r = t.sources.pop(), n = t.sourceSlots.pop(), s = r.observers;
      if (s && s.length) {
        const i = s.pop(), a = r.observerSlots.pop();
        n < s.length && (i.sourceSlots[a] = n, s[n] = i, r.observerSlots[n] = a);
      }
    }
  if (t.owned) {
    for (e = t.owned.length - 1; e >= 0; e--)
      Ho(t.owned[e]);
    t.owned = null;
  }
  if (t.cleanups) {
    for (e = t.cleanups.length - 1; e >= 0; e--)
      t.cleanups[e]();
    t.cleanups = null;
  }
  t.state = 0;
}
function Fd(t) {
  return t instanceof Error ? t : new Error(typeof t == "string" ? t : "Unknown error", {
    cause: t
  });
}
function ru(t, e = ze) {
  throw Fd(t);
}
function fc(t) {
  if (typeof t == "function" && !t.length)
    return fc(t());
  if (Array.isArray(t)) {
    const e = [];
    for (let r = 0; r < t.length; r++) {
      const n = fc(t[r]);
      Array.isArray(n) ? e.push.apply(e, n) : e.push(n);
    }
    return e;
  }
  return t;
}
function Hx(t, e) {
  return function(n) {
    let s;
    return Ln(
      () => s = It(() => (ze.context = {
        ...ze.context,
        [t]: n.value
      }, Td(() => n.children))),
      void 0
    ), s;
  };
}
var hc = Symbol("fallback");
function Io(t) {
  for (let e = 0; e < t.length; e++)
    t[e]();
}
function Wx(t, e, r = {}) {
  let n = [], s = [], i = [], a = 0, o = e.length > 1 ? [] : null;
  return si(() => Io(i)), () => {
    let u = t() || [], c, f;
    return u[Od], It(() => {
      let p = u.length, m, v, _, x, T, w, D, b, S;
      if (p === 0)
        a !== 0 && (Io(i), i = [], n = [], s = [], a = 0, o && (o = [])), r.fallback && (n = [hc], s[0] = Nn((g) => (i[0] = g, r.fallback())), a = 1);
      else if (a === 0) {
        for (s = new Array(p), f = 0; f < p; f++)
          n[f] = u[f], s[f] = Nn(d);
        a = p;
      } else {
        for (_ = new Array(p), x = new Array(p), o && (T = new Array(p)), w = 0, D = Math.min(a, p); w < D && n[w] === u[w]; w++)
          ;
        for (D = a - 1, b = p - 1; D >= w && b >= w && n[D] === u[b]; D--, b--)
          _[b] = s[D], x[b] = i[D], o && (T[b] = o[D]);
        for (m = /* @__PURE__ */ new Map(), v = new Array(b + 1), f = b; f >= w; f--)
          S = u[f], c = m.get(S), v[f] = c === void 0 ? -1 : c, m.set(S, f);
        for (c = w; c <= D; c++)
          S = n[c], f = m.get(S), f !== void 0 && f !== -1 ? (_[f] = s[c], x[f] = i[c], o && (T[f] = o[c]), f = v[f], m.set(S, f)) : i[c]();
        for (f = w; f < p; f++)
          f in _ ? (s[f] = _[f], i[f] = x[f], o && (o[f] = T[f], o[f](f))) : s[f] = Nn(d);
        s = s.slice(0, a = p), n = u.slice(0);
      }
      return s;
    });
    function d(p) {
      if (i[f] = p, o) {
        const [m, v] = Wt(f);
        return o[f] = v, e(u[f], m);
      }
      return e(u[f]);
    }
  };
}
function Gx(t, e, r = {}) {
  let n = [], s = [], i = [], a = [], o = 0, u;
  return si(() => Io(i)), () => {
    const c = t() || [];
    return c[Od], It(() => {
      if (c.length === 0)
        return o !== 0 && (Io(i), i = [], n = [], s = [], o = 0, a = []), r.fallback && (n = [hc], s[0] = Nn((d) => (i[0] = d, r.fallback())), o = 1), s;
      for (n[0] === hc && (i[0](), i = [], n = [], s = [], o = 0), u = 0; u < c.length; u++)
        u < n.length && n[u] !== c[u] ? a[u](() => c[u]) : u >= n.length && (s[u] = Nn(f));
      for (; u < n.length; u++)
        i[u]();
      return o = a.length = i.length = c.length, n = c.slice(0), s = s.slice(0, o);
    });
    function f(d) {
      i[u] = d;
      const [p, m] = Wt(c[u]);
      return a[u] = m, e(p, u);
    }
  };
}
function Qx(t, e) {
  return It(() => t(e || {}));
}
function Vi() {
  return !0;
}
var dc = {
  get(t, e, r) {
    return e === Eo ? r : t.get(e);
  },
  has(t, e) {
    return e === Eo ? !0 : t.has(e);
  },
  set: Vi,
  deleteProperty: Vi,
  getOwnPropertyDescriptor(t, e) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return t.get(e);
      },
      set: Vi,
      deleteProperty: Vi
    };
  },
  ownKeys(t) {
    return t.keys();
  }
};
function Ea(t) {
  return (t = typeof t == "function" ? t() : t) ? t : {};
}
function Zx() {
  for (let t = 0, e = this.length; t < e; ++t) {
    const r = this[t]();
    if (r !== void 0)
      return r;
  }
}
function Yx(...t) {
  let e = !1;
  for (let i = 0; i < t.length; i++) {
    const a = t[i];
    e = e || !!a && Eo in a, t[i] = typeof a == "function" ? (e = !0, rr(a)) : a;
  }
  if (e)
    return new Proxy(
      {
        get(i) {
          for (let a = t.length - 1; a >= 0; a--) {
            const o = Ea(t[a])[i];
            if (o !== void 0)
              return o;
          }
        },
        has(i) {
          for (let a = t.length - 1; a >= 0; a--)
            if (i in Ea(t[a]))
              return !0;
          return !1;
        },
        keys() {
          const i = [];
          for (let a = 0; a < t.length; a++)
            i.push(...Object.keys(Ea(t[a])));
          return [...new Set(i)];
        }
      },
      dc
    );
  const r = {}, n = {}, s = /* @__PURE__ */ new Set();
  for (let i = t.length - 1; i >= 0; i--) {
    const a = t[i];
    if (!a)
      continue;
    const o = Object.getOwnPropertyNames(a);
    for (let u = 0, c = o.length; u < c; u++) {
      const f = o[u];
      if (f === "__proto__" || f === "constructor")
        continue;
      const d = Object.getOwnPropertyDescriptor(a, f);
      if (!s.has(f))
        d.get ? (s.add(f), Object.defineProperty(r, f, {
          enumerable: !0,
          configurable: !0,
          get: Zx.bind(n[f] = [d.get.bind(a)])
        })) : (d.value !== void 0 && s.add(f), r[f] = d.value);
      else {
        const p = n[f];
        p ? d.get ? p.push(d.get.bind(a)) : d.value !== void 0 && p.push(() => d.value) : r[f] === void 0 && (r[f] = d.value);
      }
    }
  }
  return r;
}
function Jx(t, ...e) {
  if (Eo in t) {
    const s = new Set(e.length > 1 ? e.flat() : e[0]), i = e.map((a) => new Proxy(
      {
        get(o) {
          return a.includes(o) ? t[o] : void 0;
        },
        has(o) {
          return a.includes(o) && o in t;
        },
        keys() {
          return a.filter((o) => o in t);
        }
      },
      dc
    ));
    return i.push(
      new Proxy(
        {
          get(a) {
            return s.has(a) ? void 0 : t[a];
          },
          has(a) {
            return s.has(a) ? !1 : a in t;
          },
          keys() {
            return Object.keys(t).filter((a) => !s.has(a));
          }
        },
        dc
      )
    ), i;
  }
  const r = {}, n = e.map(() => ({}));
  for (const s of Object.getOwnPropertyNames(t)) {
    const i = Object.getOwnPropertyDescriptor(t, s), a = !i.get && !i.set && i.enumerable && i.writable && i.configurable;
    let o = !1, u = 0;
    for (const c of e)
      c.includes(s) && (o = !0, a ? n[u][s] = i.value : Object.defineProperty(n[u], s, i)), ++u;
    o || (a ? r[s] = i.value : Object.defineProperty(r, s, i));
  }
  return [...n, r];
}
function Xx(t) {
  let e, r;
  const n = (s) => {
    const i = ye.context;
    if (i) {
      const [o, u] = Wt();
      ye.count || (ye.count = 0), ye.count++, (r || (r = t())).then((c) => {
        Ms(i), ye.count--, u(() => c.default), Ms();
      }), e = o;
    } else if (!e) {
      const [o] = jx(() => (r || (r = t())).then((u) => u.default));
      e = o;
    }
    let a;
    return rr(
      () => (a = e()) && It(() => {
        if (!i)
          return a(s);
        const o = ye.context;
        Ms(i);
        const u = a(s);
        return Ms(o), u;
      })
    );
  };
  return n.preload = () => r || ((r = t()).then((s) => e = () => s.default), r), n;
}
var eD = 0;
function z3() {
  const t = ye.context;
  return t ? `${t.id}${t.count++}` : `cl-${eD++}`;
}
var Ud = (t) => `Stale read from <${t}>.`;
function B3(t) {
  const e = "fallback" in t && {
    fallback: () => t.fallback
  };
  return rr(Wx(() => t.each, t.children, e || void 0));
}
function V3(t) {
  const e = "fallback" in t && {
    fallback: () => t.fallback
  };
  return rr(Gx(() => t.each, t.children, e || void 0));
}
function K3(t) {
  const e = t.keyed, r = rr(() => t.when, void 0, {
    equals: (n, s) => e ? n === s : !n == !s
  });
  return rr(
    () => {
      const n = r();
      if (n) {
        const s = t.children;
        return typeof s == "function" && s.length > 0 ? It(
          () => s(
            e ? n : () => {
              if (!It(r))
                throw Ud("Show");
              return t.when;
            }
          )
        ) : s;
      }
      return t.fallback;
    },
    void 0,
    void 0
  );
}
function H3(t) {
  let e = !1;
  const r = (i, a) => i[0] === a[0] && (e ? i[1] === a[1] : !i[1] == !a[1]) && i[2] === a[2], n = Td(() => t.children), s = rr(
    () => {
      let i = n();
      Array.isArray(i) || (i = [i]);
      for (let a = 0; a < i.length; a++) {
        const o = i[a].when;
        if (o)
          return e = !!i[a].keyed, [a, o, i[a]];
      }
      return [-1];
    },
    void 0,
    {
      equals: r
    }
  );
  return rr(
    () => {
      const [i, a, o] = s();
      if (i < 0)
        return t.fallback;
      const u = o.children;
      return typeof u == "function" && u.length > 0 ? It(
        () => u(
          e ? a : () => {
            if (It(s)[0] !== i)
              throw Ud("Match");
            return o.when;
          }
        )
      ) : u;
    },
    void 0,
    void 0
  );
}
function W3(t) {
  return t;
}
var tD = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "hidden",
  "indeterminate",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected"
], rD = /* @__PURE__ */ new Set([
  "className",
  "value",
  "readOnly",
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  ...tD
]), nD = /* @__PURE__ */ new Set([
  "innerHTML",
  "textContent",
  "innerText",
  "children"
]), sD = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), iD = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  class: "className",
  formnovalidate: {
    $: "formNoValidate",
    BUTTON: 1,
    INPUT: 1
  },
  ismap: {
    $: "isMap",
    IMG: 1
  },
  nomodule: {
    $: "noModule",
    SCRIPT: 1
  },
  playsinline: {
    $: "playsInline",
    VIDEO: 1
  },
  readonly: {
    $: "readOnly",
    INPUT: 1,
    TEXTAREA: 1
  }
});
function oD(t, e) {
  const r = iD[t];
  return typeof r == "object" ? r[e] ? r.$ : void 0 : r;
}
var aD = /* @__PURE__ */ new Set([
  "beforeinput",
  "click",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
]), cD = /* @__PURE__ */ new Set([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animate",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "circle",
  "clipPath",
  "color-profile",
  "cursor",
  "defs",
  "desc",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "font",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignObject",
  "g",
  "glyph",
  "glyphRef",
  "hkern",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "missing-glyph",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "set",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "textPath",
  "tref",
  "tspan",
  "use",
  "view",
  "vkern"
]), uD = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function lD(t, e, r) {
  let n = r.length, s = e.length, i = n, a = 0, o = 0, u = e[s - 1].nextSibling, c = null;
  for (; a < s || o < i; ) {
    if (e[a] === r[o]) {
      a++, o++;
      continue;
    }
    for (; e[s - 1] === r[i - 1]; )
      s--, i--;
    if (s === a) {
      const f = i < n ? o ? r[o - 1].nextSibling : r[i - o] : u;
      for (; o < i; )
        t.insertBefore(r[o++], f);
    } else if (i === o)
      for (; a < s; )
        (!c || !c.has(e[a])) && e[a].remove(), a++;
    else if (e[a] === r[i - 1] && r[o] === e[s - 1]) {
      const f = e[--s].nextSibling;
      t.insertBefore(r[o++], e[a++].nextSibling), t.insertBefore(r[--i], f), e[s] = r[i];
    } else {
      if (!c) {
        c = /* @__PURE__ */ new Map();
        let d = o;
        for (; d < i; )
          c.set(r[d], d++);
      }
      const f = c.get(e[a]);
      if (f != null)
        if (o < f && f < i) {
          let d = a, p = 1, m;
          for (; ++d < s && d < i && !((m = c.get(e[d])) == null || m !== f + p); )
            p++;
          if (p > f - o) {
            const v = e[a];
            for (; o < f; )
              t.insertBefore(r[o++], v);
          } else
            t.replaceChild(r[o++], e[a++]);
        } else
          a++;
      else
        e[a++].remove();
    }
  }
}
var Rf = "_$DX_DELEGATE";
function fD(t, e, r, n = {}) {
  let s;
  return Nn((i) => {
    s = i, e === document ? t() : gc(e, t(), e.firstChild ? null : void 0, r);
  }, n.owner), () => {
    s(), e.textContent = "";
  };
}
function G3(t, e, r) {
  let n;
  const s = () => {
    const a = document.createElement("template");
    return a.innerHTML = t, r ? a.content.firstChild.firstChild : a.content.firstChild;
  }, i = e ? () => It(() => document.importNode(n || (n = s()), !0)) : () => (n || (n = s())).cloneNode(!0);
  return i.cloneNode = i, i;
}
function hD(t, e = window.document) {
  const r = e[Rf] || (e[Rf] = /* @__PURE__ */ new Set());
  for (let n = 0, s = t.length; n < s; n++) {
    const i = t[n];
    r.has(i) || (r.add(i), e.addEventListener(i, ED));
  }
}
function pc(t, e, r) {
  ye.context || (r == null ? t.removeAttribute(e) : t.setAttribute(e, r));
}
function dD(t, e, r, n) {
  ye.context || (n == null ? t.removeAttributeNS(e, r) : t.setAttributeNS(e, r, n));
}
function pD(t, e) {
  ye.context || (e == null ? t.removeAttribute("class") : t.className = e);
}
function gD(t, e, r, n) {
  if (n)
    Array.isArray(r) ? (t[`$$${e}`] = r[0], t[`$$${e}Data`] = r[1]) : t[`$$${e}`] = r;
  else if (Array.isArray(r)) {
    const s = r[0];
    t.addEventListener(e, r[0] = (i) => s.call(t, r[1], i));
  } else
    t.addEventListener(e, r);
}
function yD(t, e, r = {}) {
  const n = Object.keys(e || {}), s = Object.keys(r);
  let i, a;
  for (i = 0, a = s.length; i < a; i++) {
    const o = s[i];
    !o || o === "undefined" || e[o] || (Tf(t, o, !1), delete r[o]);
  }
  for (i = 0, a = n.length; i < a; i++) {
    const o = n[i], u = !!e[o];
    !o || o === "undefined" || r[o] === u || !u || (Tf(t, o, !0), r[o] = u);
  }
  return r;
}
function mD(t, e, r) {
  if (!e)
    return r ? pc(t, "style") : e;
  const n = t.style;
  if (typeof e == "string")
    return n.cssText = e;
  typeof r == "string" && (n.cssText = r = void 0), r || (r = {}), e || (e = {});
  let s, i;
  for (i in r)
    e[i] == null && n.removeProperty(i), delete r[i];
  for (i in e)
    s = e[i], s !== r[i] && (n.setProperty(i, s), r[i] = s);
  return r;
}
function vD(t, e = {}, r, n) {
  const s = {};
  return n || Ln(
    () => s.children = ps(t, e.children, s.children)
  ), Ln(() => e.ref && e.ref(t)), Ln(() => bD(t, e, r, !0, s, !0)), s;
}
function Q3(t, e, r) {
  return It(() => t(e, r));
}
function gc(t, e, r, n) {
  if (r !== void 0 && !n && (n = []), typeof e != "function")
    return ps(t, e, n, r);
  Ln((s) => ps(t, e(), s, r), n);
}
function bD(t, e, r, n, s = {}, i = !1) {
  e || (e = {});
  for (const a in s)
    if (!(a in e)) {
      if (a === "children")
        continue;
      s[a] = Af(t, a, null, s[a], r, i);
    }
  for (const a in e) {
    if (a === "children") {
      n || ps(t, e.children);
      continue;
    }
    const o = e[a];
    s[a] = Af(t, a, o, s[a], r, i);
  }
}
function wD(t) {
  let e, r;
  return !ye.context || !(e = ye.registry.get(r = SD())) ? t() : (ye.completed && ye.completed.add(e), ye.registry.delete(r), e);
}
function _D(t) {
  return t.toLowerCase().replace(/-([a-z])/g, (e, r) => r.toUpperCase());
}
function Tf(t, e, r) {
  const n = e.trim().split(/\s+/);
  for (let s = 0, i = n.length; s < i; s++)
    t.classList.toggle(n[s], r);
}
function Af(t, e, r, n, s, i) {
  let a, o, u, c, f;
  if (e === "style")
    return mD(t, r, n);
  if (e === "classList")
    return yD(t, r, n);
  if (r === n)
    return n;
  if (e === "ref")
    i || r(t);
  else if (e.slice(0, 3) === "on:") {
    const d = e.slice(3);
    n && t.removeEventListener(d, n), r && t.addEventListener(d, r);
  } else if (e.slice(0, 10) === "oncapture:") {
    const d = e.slice(10);
    n && t.removeEventListener(d, n, !0), r && t.addEventListener(d, r, !0);
  } else if (e.slice(0, 2) === "on") {
    const d = e.slice(2).toLowerCase(), p = aD.has(d);
    if (!p && n) {
      const m = Array.isArray(n) ? n[0] : n;
      t.removeEventListener(d, m);
    }
    (p || r) && (gD(t, d, r, p), p && hD([d]));
  } else if (e.slice(0, 5) === "attr:")
    pc(t, e.slice(5), r);
  else if ((f = e.slice(0, 5) === "prop:") || (u = nD.has(e)) || !s && ((c = oD(e, t.tagName)) || (o = rD.has(e))) || (a = t.nodeName.includes("-"))) {
    if (f)
      e = e.slice(5), o = !0;
    else if (ye.context)
      return r;
    e === "class" || e === "className" ? pD(t, r) : a && !o && !u ? t[_D(e)] = r : t[c || e] = r;
  } else {
    const d = s && e.indexOf(":") > -1 && uD[e.split(":")[0]];
    d ? dD(t, d, e, r) : pc(t, sD[e] || e, r);
  }
  return r;
}
function ED(t) {
  const e = `$$${t.type}`;
  let r = t.composedPath && t.composedPath()[0] || t.target;
  for (t.target !== r && Object.defineProperty(t, "target", {
    configurable: !0,
    value: r
  }), Object.defineProperty(t, "currentTarget", {
    configurable: !0,
    get() {
      return r || document;
    }
  }), ye.registry && !ye.done && (ye.done = _$HY.done = !0); r; ) {
    const n = r[e];
    if (n && !r.disabled) {
      const s = r[`${e}Data`];
      if (s !== void 0 ? n.call(r, s, t) : n.call(r, t), t.cancelBubble)
        return;
    }
    r = r._$host || r.parentNode || r.host;
  }
}
function ps(t, e, r, n, s) {
  if (ye.context) {
    !r && (r = [...t.childNodes]);
    let o = [];
    for (let u = 0; u < r.length; u++) {
      const c = r[u];
      c.nodeType === 8 && c.data.slice(0, 2) === "!$" ? c.remove() : o.push(c);
    }
    r = o;
  }
  for (; typeof r == "function"; )
    r = r();
  if (e === r)
    return r;
  const i = typeof e, a = n !== void 0;
  if (t = a && r[0] && r[0].parentNode || t, i === "string" || i === "number") {
    if (ye.context)
      return r;
    if (i === "number" && (e = e.toString()), a) {
      let o = r[0];
      o && o.nodeType === 3 ? o.data = e : o = document.createTextNode(e), r = Hn(t, r, n, o);
    } else
      r !== "" && typeof r == "string" ? r = t.firstChild.data = e : r = t.textContent = e;
  } else if (e == null || i === "boolean") {
    if (ye.context)
      return r;
    r = Hn(t, r, n);
  } else {
    if (i === "function")
      return Ln(() => {
        let o = e();
        for (; typeof o == "function"; )
          o = o();
        r = ps(t, o, r, n);
      }), () => r;
    if (Array.isArray(e)) {
      const o = [], u = r && Array.isArray(r);
      if (yc(o, e, r, s))
        return Ln(() => r = ps(t, o, r, n, !0)), () => r;
      if (ye.context) {
        if (!o.length)
          return r;
        if (n === void 0)
          return [...t.childNodes];
        let c = o[0], f = [c];
        for (; (c = c.nextSibling) !== n; )
          f.push(c);
        return r = f;
      }
      if (o.length === 0) {
        if (r = Hn(t, r, n), a)
          return r;
      } else
        u ? r.length === 0 ? Pf(t, o, n) : lD(t, r, o) : (r && Hn(t), Pf(t, o));
      r = o;
    } else if (e.nodeType) {
      if (ye.context && e.parentNode)
        return r = a ? [e] : e;
      if (Array.isArray(r)) {
        if (a)
          return r = Hn(t, r, n, e);
        Hn(t, r, null, e);
      } else
        r == null || r === "" || !t.firstChild ? t.appendChild(e) : t.replaceChild(e, t.firstChild);
      r = e;
    }
  }
  return r;
}
function yc(t, e, r, n) {
  let s = !1;
  for (let i = 0, a = e.length; i < a; i++) {
    let o = e[i], u = r && r[i], c;
    if (!(o == null || o === !0 || o === !1))
      if ((c = typeof o) == "object" && o.nodeType)
        t.push(o);
      else if (Array.isArray(o))
        s = yc(t, o, u) || s;
      else if (c === "function")
        if (n) {
          for (; typeof o == "function"; )
            o = o();
          s = yc(
            t,
            Array.isArray(o) ? o : [o],
            Array.isArray(u) ? u : [u]
          ) || s;
        } else
          t.push(o), s = !0;
      else {
        const f = String(o);
        u && u.nodeType === 3 && u.data === f ? t.push(u) : t.push(document.createTextNode(f));
      }
  }
  return s;
}
function Pf(t, e, r = null) {
  for (let n = 0, s = e.length; n < s; n++)
    t.insertBefore(e[n], r);
}
function Hn(t, e, r, n) {
  if (r === void 0)
    return t.textContent = "";
  const s = n || document.createTextNode("");
  if (e.length) {
    let i = !1;
    for (let a = e.length - 1; a >= 0; a--) {
      const o = e[a];
      if (s !== o) {
        const u = o.parentNode === t;
        !i && !a ? u ? t.replaceChild(s, o) : t.insertBefore(s, r) : u && o.remove();
      } else
        i = !0;
    }
  } else
    t.insertBefore(s, r);
  return [s];
}
function SD() {
  const t = ye.context;
  return `${t.id}${t.count++}`;
}
var xD = "http://www.w3.org/2000/svg";
function Md(t, e = !1) {
  return e ? document.createElementNS(xD, t) : document.createElement(t);
}
function Z3(t) {
  const { useShadow: e } = t, r = document.createTextNode(""), n = () => t.mount || document.body, s = Cf();
  let i, a = !!ye.context;
  return Rd(
    () => {
      a && (Cf().user = a = !1), i || (i = kx(s, () => rr(() => t.children)));
      const o = n();
      if (o instanceof HTMLHeadElement) {
        const [u, c] = Wt(!1), f = () => c(!0);
        Nn((d) => gc(o, () => u() ? d() : i(), null)), si(f);
      } else {
        const u = Md(t.isSVG ? "g" : "div", t.isSVG), c = e && u.attachShadow ? u.attachShadow({
          mode: "open"
        }) : u;
        Object.defineProperty(u, "_$host", {
          get() {
            return r.parentNode;
          },
          configurable: !0
        }), gc(c, i), o.appendChild(u), t.ref && t.ref(u), si(() => o.removeChild(u));
      }
    },
    void 0,
    {
      render: !a
    }
  ), r;
}
function Y3(t) {
  const [e, r] = Jx(t, ["component"]), n = rr(() => e.component);
  return rr(() => {
    const s = n();
    switch (typeof s) {
      case "function":
        return It(() => s(r));
      case "string":
        const i = cD.has(s), a = ye.context ? wD() : Md(s, i);
        return vD(a, r, i), a;
    }
  });
}
var DD = (
  /** @class */
  function() {
    function t() {
      this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
    }
    return t.prototype.set = function(e, r) {
      this.keyToValue.set(e, r), this.valueToKey.set(r, e);
    }, t.prototype.getByKey = function(e) {
      return this.keyToValue.get(e);
    }, t.prototype.getByValue = function(e) {
      return this.valueToKey.get(e);
    }, t.prototype.clear = function() {
      this.keyToValue.clear(), this.valueToKey.clear();
    }, t;
  }()
), jd = (
  /** @class */
  function() {
    function t(e) {
      this.generateIdentifier = e, this.kv = new DD();
    }
    return t.prototype.register = function(e, r) {
      this.kv.getByValue(e) || (r || (r = this.generateIdentifier(e)), this.kv.set(r, e));
    }, t.prototype.clear = function() {
      this.kv.clear();
    }, t.prototype.getIdentifier = function(e) {
      return this.kv.getByValue(e);
    }, t.prototype.getValue = function(e) {
      return this.kv.getByKey(e);
    }, t;
  }()
), OD = /* @__PURE__ */ function() {
  var t = function(e, r) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, s) {
      n.__proto__ = s;
    } || function(n, s) {
      for (var i in s)
        Object.prototype.hasOwnProperty.call(s, i) && (n[i] = s[i]);
    }, t(e, r);
  };
  return function(e, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    t(e, r);
    function n() {
      this.constructor = e;
    }
    e.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), ID = (
  /** @class */
  function(t) {
    OD(e, t);
    function e() {
      var r = t.call(this, function(n) {
        return n.name;
      }) || this;
      return r.classToAllowedProps = /* @__PURE__ */ new Map(), r;
    }
    return e.prototype.register = function(r, n) {
      typeof n == "object" ? (n.allowProps && this.classToAllowedProps.set(r, n.allowProps), t.prototype.register.call(this, r, n.identifier)) : t.prototype.register.call(this, r, n);
    }, e.prototype.getAllowedProps = function(r) {
      return this.classToAllowedProps.get(r);
    }, e;
  }(jd)
), CD = function(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), s, i = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = n.next()).done; )
      i.push(s.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      s && !s.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return i;
};
function RD(t) {
  if ("values" in Object)
    return Object.values(t);
  var e = [];
  for (var r in t)
    t.hasOwnProperty(r) && e.push(t[r]);
  return e;
}
function TD(t, e) {
  var r = RD(t);
  if ("find" in r)
    return r.find(e);
  for (var n = r, s = 0; s < n.length; s++) {
    var i = n[s];
    if (e(i))
      return i;
  }
}
function gs(t, e) {
  Object.entries(t).forEach(function(r) {
    var n = CD(r, 2), s = n[0], i = n[1];
    return e(i, s);
  });
}
function to(t, e) {
  return t.indexOf(e) !== -1;
}
function Nf(t, e) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    if (e(n))
      return n;
  }
}
var AD = (
  /** @class */
  function() {
    function t() {
      this.transfomers = {};
    }
    return t.prototype.register = function(e) {
      this.transfomers[e.name] = e;
    }, t.prototype.findApplicable = function(e) {
      return TD(this.transfomers, function(r) {
        return r.isApplicable(e);
      });
    }, t.prototype.findByName = function(e) {
      return this.transfomers[e];
    }, t;
  }()
), PD = function(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}, $d = function(t) {
  return typeof t > "u";
}, ND = function(t) {
  return t === null;
}, ii = function(t) {
  return typeof t != "object" || t === null || t === Object.prototype ? !1 : Object.getPrototypeOf(t) === null ? !0 : Object.getPrototypeOf(t) === Object.prototype;
}, mc = function(t) {
  return ii(t) && Object.keys(t).length === 0;
}, pn = function(t) {
  return Array.isArray(t);
}, LD = function(t) {
  return typeof t == "string";
}, FD = function(t) {
  return typeof t == "number" && !isNaN(t);
}, UD = function(t) {
  return typeof t == "boolean";
}, MD = function(t) {
  return t instanceof RegExp;
}, oi = function(t) {
  return t instanceof Map;
}, ai = function(t) {
  return t instanceof Set;
}, kd = function(t) {
  return PD(t) === "Symbol";
}, jD = function(t) {
  return t instanceof Date && !isNaN(t.valueOf());
}, $D = function(t) {
  return t instanceof Error;
}, Lf = function(t) {
  return typeof t == "number" && isNaN(t);
}, Ff = function(t) {
  return UD(t) || ND(t) || $d(t) || FD(t) || LD(t) || kd(t);
}, kD = function(t) {
  return typeof t == "bigint";
}, qD = function(t) {
  return t === 1 / 0 || t === -1 / 0;
}, zD = function(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}, BD = function(t) {
  return t instanceof URL;
}, qd = function(t) {
  return t.replace(/\./g, "\\.");
}, Sa = function(t) {
  return t.map(String).map(qd).join(".");
}, ks = function(t) {
  for (var e = [], r = "", n = 0; n < t.length; n++) {
    var s = t.charAt(n), i = s === "\\" && t.charAt(n + 1) === ".";
    if (i) {
      r += ".", n++;
      continue;
    }
    var a = s === ".";
    if (a) {
      e.push(r), r = "";
      continue;
    }
    r += s;
  }
  var o = r;
  return e.push(o), e;
}, vc = function() {
  return vc = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, vc.apply(this, arguments);
}, bc = function(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), s, i = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = n.next()).done; )
      i.push(s.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      s && !s.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return i;
}, wc = function(t, e) {
  for (var r = 0, n = e.length, s = t.length; r < n; r++, s++)
    t[s] = e[r];
  return t;
};
function Fr(t, e, r, n) {
  return {
    isApplicable: t,
    annotation: e,
    transform: r,
    untransform: n
  };
}
var zd = [
  Fr($d, "undefined", function() {
    return null;
  }, function() {
  }),
  Fr(kD, "bigint", function(t) {
    return t.toString();
  }, function(t) {
    return typeof BigInt < "u" ? BigInt(t) : t;
  }),
  Fr(jD, "Date", function(t) {
    return t.toISOString();
  }, function(t) {
    return new Date(t);
  }),
  Fr($D, "Error", function(t, e) {
    var r = {
      name: t.name,
      message: t.message
    };
    return e.allowedErrorProps.forEach(function(n) {
      r[n] = t[n];
    }), r;
  }, function(t, e) {
    var r = new Error(t.message);
    return r.name = t.name, r.stack = t.stack, e.allowedErrorProps.forEach(function(n) {
      r[n] = t[n];
    }), r;
  }),
  Fr(MD, "regexp", function(t) {
    return "" + t;
  }, function(t) {
    var e = t.slice(1, t.lastIndexOf("/")), r = t.slice(t.lastIndexOf("/") + 1);
    return new RegExp(e, r);
  }),
  Fr(
    ai,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    function(t) {
      return wc([], bc(t.values()));
    },
    function(t) {
      return new Set(t);
    }
  ),
  Fr(oi, "map", function(t) {
    return wc([], bc(t.entries()));
  }, function(t) {
    return new Map(t);
  }),
  Fr(function(t) {
    return Lf(t) || qD(t);
  }, "number", function(t) {
    return Lf(t) ? "NaN" : t > 0 ? "Infinity" : "-Infinity";
  }, Number),
  Fr(function(t) {
    return t === 0 && 1 / t === -1 / 0;
  }, "number", function() {
    return "-0";
  }, Number),
  Fr(BD, "URL", function(t) {
    return t.toString();
  }, function(t) {
    return new URL(t);
  })
];
function Wo(t, e, r, n) {
  return {
    isApplicable: t,
    annotation: e,
    transform: r,
    untransform: n
  };
}
var Bd = Wo(function(t, e) {
  if (kd(t)) {
    var r = !!e.symbolRegistry.getIdentifier(t);
    return r;
  }
  return !1;
}, function(t, e) {
  var r = e.symbolRegistry.getIdentifier(t);
  return ["symbol", r];
}, function(t) {
  return t.description;
}, function(t, e, r) {
  var n = r.symbolRegistry.getValue(e[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown symbol");
  return n;
}), VD = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce(function(t, e) {
  return t[e.name] = e, t;
}, {}), Vd = Wo(zD, function(t) {
  return ["typed-array", t.constructor.name];
}, function(t) {
  return wc([], bc(t));
}, function(t, e) {
  var r = VD[e[1]];
  if (!r)
    throw new Error("Trying to deserialize unknown typed array");
  return new r(t);
});
function Kd(t, e) {
  if (t != null && t.constructor) {
    var r = !!e.classRegistry.getIdentifier(t.constructor);
    return r;
  }
  return !1;
}
var Hd = Wo(Kd, function(t, e) {
  var r = e.classRegistry.getIdentifier(t.constructor);
  return ["class", r];
}, function(t, e) {
  var r = e.classRegistry.getAllowedProps(t.constructor);
  if (!r)
    return vc({}, t);
  var n = {};
  return r.forEach(function(s) {
    n[s] = t[s];
  }), n;
}, function(t, e, r) {
  var n = r.classRegistry.getValue(e[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
  return Object.assign(Object.create(n.prototype), t);
}), Wd = Wo(function(t, e) {
  return !!e.customTransformerRegistry.findApplicable(t);
}, function(t, e) {
  var r = e.customTransformerRegistry.findApplicable(t);
  return ["custom", r.name];
}, function(t, e) {
  var r = e.customTransformerRegistry.findApplicable(t);
  return r.serialize(t);
}, function(t, e, r) {
  var n = r.customTransformerRegistry.findByName(e[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown custom value");
  return n.deserialize(t);
}), KD = [Hd, Bd, Wd, Vd], Uf = function(t, e) {
  var r = Nf(KD, function(s) {
    return s.isApplicable(t, e);
  });
  if (r)
    return {
      value: r.transform(t, e),
      type: r.annotation(t, e)
    };
  var n = Nf(zd, function(s) {
    return s.isApplicable(t, e);
  });
  if (n)
    return {
      value: n.transform(t, e),
      type: n.annotation
    };
}, Gd = {};
zd.forEach(function(t) {
  Gd[t.annotation] = t;
});
var HD = function(t, e, r) {
  if (pn(e))
    switch (e[0]) {
      case "symbol":
        return Bd.untransform(t, e, r);
      case "class":
        return Hd.untransform(t, e, r);
      case "custom":
        return Wd.untransform(t, e, r);
      case "typed-array":
        return Vd.untransform(t, e, r);
      default:
        throw new Error("Unknown transformation: " + e);
    }
  else {
    var n = Gd[e];
    if (!n)
      throw new Error("Unknown transformation: " + e);
    return n.untransform(t, r);
  }
}, Xn = function(t, e) {
  for (var r = t.keys(); e > 0; )
    r.next(), e--;
  return r.next().value;
};
function Qd(t) {
  if (to(t, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (to(t, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (to(t, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var WD = function(t, e) {
  Qd(e);
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    if (ai(t))
      t = Xn(t, +n);
    else if (oi(t)) {
      var s = +n, i = +e[++r] == 0 ? "key" : "value", a = Xn(t, s);
      switch (i) {
        case "key":
          t = a;
          break;
        case "value":
          t = t.get(a);
          break;
      }
    } else
      t = t[n];
  }
  return t;
}, _c = function(t, e, r) {
  if (Qd(e), e.length === 0)
    return r(t);
  for (var n = t, s = 0; s < e.length - 1; s++) {
    var i = e[s];
    if (pn(n)) {
      var a = +i;
      n = n[a];
    } else if (ii(n))
      n = n[i];
    else if (ai(n)) {
      var o = +i;
      n = Xn(n, o);
    } else if (oi(n)) {
      var u = s === e.length - 2;
      if (u)
        break;
      var o = +i, c = +e[++s] == 0 ? "key" : "value", f = Xn(n, o);
      switch (c) {
        case "key":
          n = f;
          break;
        case "value":
          n = n.get(f);
          break;
      }
    }
  }
  var d = e[e.length - 1];
  if (pn(n) ? n[+d] = r(n[+d]) : ii(n) && (n[d] = r(n[d])), ai(n)) {
    var p = Xn(n, +d), m = r(p);
    p !== m && (n.delete(p), n.add(m));
  }
  if (oi(n)) {
    var o = +e[e.length - 2], v = Xn(n, o), c = +d == 0 ? "key" : "value";
    switch (c) {
      case "key": {
        var _ = r(v);
        n.set(_, n.get(v)), _ !== v && n.delete(v);
        break;
      }
      case "value": {
        n.set(v, r(n.get(v)));
        break;
      }
    }
  }
  return t;
}, Gr = function(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), s, i = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = n.next()).done; )
      i.push(s.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      s && !s.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return i;
}, un = function(t, e) {
  for (var r = 0, n = e.length, s = t.length; r < n; r++, s++)
    t[s] = e[r];
  return t;
};
function Ec(t, e, r) {
  if (r === void 0 && (r = []), !!t) {
    if (!pn(t)) {
      gs(t, function(a, o) {
        return Ec(a, e, un(un([], Gr(r)), Gr(ks(o))));
      });
      return;
    }
    var n = Gr(t, 2), s = n[0], i = n[1];
    i && gs(i, function(a, o) {
      Ec(a, e, un(un([], Gr(r)), Gr(ks(o))));
    }), e(s, r);
  }
}
function GD(t, e, r) {
  return Ec(e, function(n, s) {
    t = _c(t, s, function(i) {
      return HD(i, n, r);
    });
  }), t;
}
function QD(t, e) {
  function r(a, o) {
    var u = WD(t, ks(o));
    a.map(ks).forEach(function(c) {
      t = _c(t, c, function() {
        return u;
      });
    });
  }
  if (pn(e)) {
    var n = Gr(e, 2), s = n[0], i = n[1];
    s.forEach(function(a) {
      t = _c(t, ks(a), function() {
        return t;
      });
    }), i && gs(i, r);
  } else
    gs(e, r);
  return t;
}
var ZD = function(t, e) {
  return ii(t) || pn(t) || oi(t) || ai(t) || Kd(t, e);
};
function YD(t, e, r) {
  var n = r.get(t);
  n ? n.push(e) : r.set(t, [e]);
}
function JD(t) {
  var e = {}, r = void 0;
  return t.forEach(function(n) {
    if (!(n.length <= 1)) {
      var s = Gr(n.map(function(o) {
        return o.map(String);
      }).sort(function(o, u) {
        return o.length - u.length;
      })), i = s[0], a = s.slice(1);
      i.length === 0 ? r = a.map(Sa) : e[Sa(i)] = a.map(Sa);
    }
  }), r ? mc(e) ? [r] : [r, e] : mc(e) ? void 0 : e;
}
var Zd = function(t, e, r, n, s) {
  var i;
  if (n === void 0 && (n = []), s === void 0 && (s = []), Ff(t) || YD(t, n, e), !ZD(t, r)) {
    var a = Uf(t, r);
    return a ? {
      transformedValue: a.value,
      annotations: [a.type]
    } : {
      transformedValue: t
    };
  }
  if (to(s, t))
    return {
      transformedValue: null
    };
  var o = Uf(t, r), u = (i = o == null ? void 0 : o.value) !== null && i !== void 0 ? i : t;
  Ff(t) || (s = un(un([], Gr(s)), [t]));
  var c = pn(u) ? [] : {}, f = {};
  return gs(u, function(d, p) {
    var m = Zd(d, e, r, un(un([], Gr(n)), [p]), s);
    c[p] = m.transformedValue, pn(m.annotations) ? f[p] = m.annotations : ii(m.annotations) && gs(m.annotations, function(v, _) {
      f[qd(p) + "." + _] = v;
    });
  }), mc(f) ? {
    transformedValue: c,
    annotations: o ? [o.type] : void 0
  } : {
    transformedValue: c,
    annotations: o ? [o.type, f] : f
  };
};
function Yd(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function XD(t) {
  if (Yd(t) !== "Object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return !!e && e.constructor === Object && e === Object.prototype;
}
function Mf(t) {
  return Yd(t) === "Array";
}
function eO(t, e, r, n, s) {
  const i = {}.propertyIsEnumerable.call(n, e) ? "enumerable" : "nonenumerable";
  i === "enumerable" && (t[e] = r), s && i === "nonenumerable" && Object.defineProperty(t, e, {
    value: r,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function Sc(t, e = {}) {
  if (Mf(t))
    return t.map((s) => Sc(s, e));
  if (!XD(t))
    return t;
  const r = Object.getOwnPropertyNames(t), n = Object.getOwnPropertySymbols(t);
  return [...r, ...n].reduce((s, i) => {
    if (Mf(e.props) && !e.props.includes(i))
      return s;
    const a = t[i], o = Sc(a, e);
    return eO(s, i, o, t, e.nonenumerable), s;
  }, {});
}
var Cn = function() {
  return Cn = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, Cn.apply(this, arguments);
}, tO = function(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), s, i = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = n.next()).done; )
      i.push(s.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      s && !s.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return i;
}, rO = function(t, e) {
  for (var r = 0, n = e.length, s = t.length; r < n; r++, s++)
    t[s] = e[r];
  return t;
}, Jd = (
  /** @class */
  function() {
    function t() {
      this.classRegistry = new ID(), this.symbolRegistry = new jd(function(e) {
        var r;
        return (r = e.description) !== null && r !== void 0 ? r : "";
      }), this.customTransformerRegistry = new AD(), this.allowedErrorProps = [];
    }
    return t.prototype.serialize = function(e) {
      var r = /* @__PURE__ */ new Map(), n = Zd(e, r, this), s = {
        json: n.transformedValue
      };
      n.annotations && (s.meta = Cn(Cn({}, s.meta), { values: n.annotations }));
      var i = JD(r);
      return i && (s.meta = Cn(Cn({}, s.meta), { referentialEqualities: i })), s;
    }, t.prototype.deserialize = function(e) {
      var r = e.json, n = e.meta, s = Sc(r);
      return n != null && n.values && (s = GD(s, n.values, this)), n != null && n.referentialEqualities && (s = QD(s, n.referentialEqualities)), s;
    }, t.prototype.stringify = function(e) {
      return JSON.stringify(this.serialize(e));
    }, t.prototype.parse = function(e) {
      return this.deserialize(JSON.parse(e));
    }, t.prototype.registerClass = function(e, r) {
      this.classRegistry.register(e, r);
    }, t.prototype.registerSymbol = function(e, r) {
      this.symbolRegistry.register(e, r);
    }, t.prototype.registerCustom = function(e, r) {
      this.customTransformerRegistry.register(Cn({ name: r }, e));
    }, t.prototype.allowErrorProps = function() {
      for (var e, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      (e = this.allowedErrorProps).push.apply(e, rO([], tO(r)));
    }, t.defaultInstance = new t(), t.serialize = t.defaultInstance.serialize.bind(t.defaultInstance), t.deserialize = t.defaultInstance.deserialize.bind(t.defaultInstance), t.stringify = t.defaultInstance.stringify.bind(t.defaultInstance), t.parse = t.defaultInstance.parse.bind(t.defaultInstance), t.registerClass = t.defaultInstance.registerClass.bind(t.defaultInstance), t.registerSymbol = t.defaultInstance.registerSymbol.bind(t.defaultInstance), t.registerCustom = t.defaultInstance.registerCustom.bind(t.defaultInstance), t.allowErrorProps = t.defaultInstance.allowErrorProps.bind(t.defaultInstance), t;
  }()
), nO = Jd.serialize, J3 = Jd.stringify;
function X3(t) {
  return t.state.fetchStatus === "fetching" ? "fetching" : t.getObserversCount() ? t.state.fetchStatus === "paused" ? "paused" : t.isStale() ? "stale" : "fresh" : "inactive";
}
function eI(t, e) {
  return `${t}${e.charAt(0).toUpperCase() + e.slice(1)}`;
}
function tI({
  queryState: t,
  observerCount: e,
  isStale: r
}) {
  return t.fetchStatus === "fetching" ? "blue" : e ? t.fetchStatus === "paused" ? "purple" : r ? "yellow" : "green" : "gray";
}
function rI({
  status: t,
  isPaused: e
}) {
  return e ? "purple" : t === "error" ? "red" : t === "pending" ? "yellow" : t === "success" ? "green" : "gray";
}
function nI(t) {
  return t === "fresh" ? "green" : t === "stale" ? "yellow" : t === "paused" ? "purple" : t === "inactive" ? "gray" : "blue";
}
var sI = (t, e = !1) => {
  const {
    json: r
  } = nO(t);
  return JSON.stringify(r, null, e ? 2 : void 0);
}, Ki = (t) => t.state.fetchStatus !== "idle" ? 0 : t.getObserversCount() ? t.isStale() ? 2 : 1 : 3, sO = (t, e) => t.queryHash.localeCompare(e.queryHash), Xd = (t, e) => t.state.dataUpdatedAt < e.state.dataUpdatedAt ? 1 : -1, iO = (t, e) => Ki(t) === Ki(e) ? Xd(t, e) : Ki(t) > Ki(e) ? 1 : -1, iI = {
  status: iO,
  "query hash": sO,
  "last updated": Xd
}, Hi = (t) => t.state.isPaused ? 0 : t.state.status === "error" ? 2 : t.state.status === "pending" ? 1 : 3, ep = (t, e) => t.state.submittedAt < e.state.submittedAt ? 1 : -1, oO = (t, e) => Hi(t) === Hi(e) ? ep(t, e) : Hi(t) > Hi(e) ? 1 : -1, oI = {
  status: oO,
  "last updated": ep
}, aI = (t) => t * parseFloat(getComputedStyle(document.documentElement).fontSize), cI = () => {
  const [t, e] = Wt("dark");
  return $x(() => {
    const r = window.matchMedia("(prefers-color-scheme: dark)");
    e(r.matches ? "dark" : "light");
    const n = (s) => {
      e(s.matches ? "dark" : "light");
    };
    r.addEventListener("change", n), si(() => r.removeEventListener("change", n));
  }), t;
}, Wi = (t, e, r) => {
  if (e.length === 0)
    return r;
  if (t instanceof Map) {
    const n = new Map(t);
    if (e.length === 1)
      return n.set(e[0], r), n;
    const [s, ...i] = e;
    return n.set(s, Wi(n.get(s), i, r)), n;
  }
  if (t instanceof Set) {
    const n = Wi(Array.from(t), e, r);
    return new Set(n);
  }
  if (Array.isArray(t)) {
    const n = [...t];
    if (e.length === 1)
      return n[e[0]] = r, n;
    const [s, ...i] = e;
    return n[s] = Wi(n[s], i, r), n;
  }
  if (t instanceof Object) {
    const n = {
      ...t
    };
    if (e.length === 1)
      return n[e[0]] = r, n;
    const [s, ...i] = e;
    return n[s] = Wi(n[s], i, r), n;
  }
  return t;
}, Gi = (t, e) => {
  if (t instanceof Map) {
    const r = new Map(t);
    if (e.length === 1)
      return r.delete(e[0]), r;
    const [n, ...s] = e;
    return r.set(n, Gi(r.get(n), s)), r;
  }
  if (t instanceof Set) {
    const r = Gi(Array.from(t), e);
    return new Set(r);
  }
  if (Array.isArray(t)) {
    const r = [...t];
    if (e.length === 1)
      return r.filter((i, a) => a.toString() !== e[0]);
    const [n, ...s] = e;
    return r[n] = Gi(r[n], s), r;
  }
  if (t instanceof Object) {
    const r = {
      ...t
    };
    if (e.length === 1)
      return delete r[e[0]], r;
    const [n, ...s] = e;
    return r[n] = Gi(r[n], s), r;
  }
  return t;
}, aO = (t) => {
  if (!t || document.querySelector("#_goober"))
    return;
  const r = document.createElement("style"), n = document.createTextNode("");
  r.appendChild(n), r.id = "_goober", r.setAttribute("nonce", t), document.head.appendChild(r);
}, ss, ci, ui, li, An, fi, is, os, as, cs, us, hi, jf, cO = (jf = class {
  constructor(t) {
    ir(this, ss, void 0);
    ir(this, ci, void 0);
    ir(this, ui, void 0);
    ir(this, li, void 0);
    ir(this, An, !1);
    ir(this, fi, void 0);
    ir(this, is, void 0);
    ir(this, os, void 0);
    ir(this, as, void 0);
    ir(this, cs, void 0);
    ir(this, us, void 0);
    ir(this, hi, void 0);
    const {
      client: e,
      queryFlavor: r,
      version: n,
      onlineManager: s,
      buttonPosition: i,
      position: a,
      initialIsOpen: o,
      errorTypes: u,
      styleNonce: c
    } = t;
    Jt(this, ss, Wt(e)), Jt(this, ui, r), Jt(this, li, n), Jt(this, ci, s), Jt(this, fi, c), Jt(this, is, Wt(i)), Jt(this, os, Wt(a)), Jt(this, as, Wt(o)), Jt(this, cs, Wt(u));
  }
  setButtonPosition(t) {
    wt(this, is)[1](t);
  }
  setPosition(t) {
    wt(this, os)[1](t);
  }
  setInitialIsOpen(t) {
    wt(this, as)[1](t);
  }
  setErrorTypes(t) {
    wt(this, cs)[1](t);
  }
  setClient(t) {
    wt(this, ss)[1](t);
  }
  mount(t) {
    if (wt(this, An))
      throw new Error("Devtools is already mounted");
    const e = fD(() => {
      const [r] = wt(this, is), [n] = wt(this, os), [s] = wt(this, as), [i] = wt(this, cs), [a] = wt(this, ss);
      let o;
      wt(this, us) ? o = wt(this, us) : (o = Xx(() => import("./N66J3ZXT-OrHrr7bW.js")), Jt(this, us, o)), aO(wt(this, fi));
      const u = this;
      return Qx(o, Yx({
        get queryFlavor() {
          return wt(u, ui);
        },
        get version() {
          return wt(u, li);
        },
        get onlineManager() {
          return wt(u, ci);
        }
      }, {
        get client() {
          return a();
        },
        get buttonPosition() {
          return r();
        },
        get position() {
          return n();
        },
        get initialIsOpen() {
          return s();
        },
        get errorTypes() {
          return i();
        }
      }));
    }, t);
    Jt(this, An, !0), Jt(this, hi, e);
  }
  unmount() {
    var t;
    if (!wt(this, An))
      throw new Error("Devtools is not mounted");
    (t = wt(this, hi)) == null || t.call(this), Jt(this, An, !1);
  }
}, ss = new WeakMap(), ci = new WeakMap(), ui = new WeakMap(), li = new WeakMap(), An = new WeakMap(), fi = new WeakMap(), is = new WeakMap(), os = new WeakMap(), as = new WeakMap(), cs = new WeakMap(), us = new WeakMap(), hi = new WeakMap(), jf);
function uO(t) {
  const e = Sd(), r = t.client || e, n = Pp(null), { buttonPosition: s, position: i, initialIsOpen: a, errorTypes: o, styleNonce: u } = t, [c] = js(
    new cO({
      client: r,
      queryFlavor: "React Query",
      version: "5",
      onlineManager: ni,
      buttonPosition: s,
      position: i,
      initialIsOpen: a,
      errorTypes: o,
      styleNonce: u
    })
  );
  return At(() => {
    c.setClient(r);
  }, [r, c]), At(() => {
    s && c.setButtonPosition(s);
  }, [s, c]), At(() => {
    i && c.setPosition(i);
  }, [i, c]), At(() => {
    c.setInitialIsOpen(a || !1);
  }, [a, c]), At(() => {
    c.setErrorTypes(o || []);
  }, [o, c]), At(() => (n.current && c.mount(n.current), () => {
    c.unmount();
  }), [c]), /* @__PURE__ */ gn.createElement("div", { className: "tsqd-parent-container", ref: n });
}
var lO = process.env.NODE_ENV !== "development" ? function() {
  return null;
} : uO;
const tp = new cx(), uI = ({ dAppName: t, dAppDescription: e, dAppUrl: r, dAppIconURL: n, children: s, debugQuery: i = !1 }) => (At(() => {
  qE({
    dAppName: t,
    dAppDescription: e,
    dAppUrl: r,
    dAppIconURL: n
  }), pi.defaultMaxListeners = 100;
}, []), /* @__PURE__ */ Df.jsxs(px, { client: tp, children: [
  i && /* @__PURE__ */ Df.jsx(lO, { initialIsOpen: !1 }),
  s
] }));
export {
  Eo as $,
  sI as A,
  U3 as B,
  si as C,
  Od as D,
  j3 as E,
  B3 as F,
  z3 as G,
  k3 as H,
  q3 as I,
  V3 as J,
  Wi as K,
  G3 as L,
  Q3 as M,
  aI as N,
  eI as O,
  X3 as P,
  It as Q,
  kp as R,
  K3 as S,
  $f as T,
  Nn as U,
  Jx as V,
  Z3 as W,
  gD as X,
  J3 as Y,
  W3 as Z,
  H3 as _,
  $t as a,
  g3 as a$,
  Gi as a0,
  $3 as a1,
  Y3 as a2,
  Td as a3,
  Of as a4,
  ff as a5,
  ec as a6,
  Xa as a7,
  rc as a8,
  tc as a9,
  a3 as aA,
  t3 as aB,
  WO as aC,
  e3 as aD,
  GO as aE,
  r3 as aF,
  QO as aG,
  ZO as aH,
  o3 as aI,
  i3 as aJ,
  YO as aK,
  XO as aL,
  JO as aM,
  n3 as aN,
  Wc as aO,
  ko as aP,
  Gc as aQ,
  eE as aR,
  tE as aS,
  NO as aT,
  cc as aU,
  u3 as aV,
  l3 as aW,
  f3 as aX,
  h3 as aY,
  d3 as aZ,
  p3 as a_,
  Yc as aa,
  VS as ab,
  zS as ac,
  BS as ad,
  KS as ae,
  HS as af,
  qS as ag,
  LO as ah,
  zO as ai,
  qO as aj,
  jO as ak,
  BO as al,
  UO as am,
  MO as an,
  $O as ao,
  kO as ap,
  FO as aq,
  VO as ar,
  fs as as,
  qE as at,
  tt as au,
  lf as av,
  KO as aw,
  HO as ax,
  s3 as ay,
  c3 as az,
  iI as b,
  y3 as b0,
  m3 as b1,
  v3 as b2,
  b3,
  w3 as b4,
  _3 as b5,
  hd as b6,
  xi as b7,
  WS as b8,
  dd as b9,
  vr as ba,
  L3 as bb,
  E3 as bc,
  S3 as bd,
  x3 as be,
  D3 as bf,
  O3 as bg,
  I3 as bh,
  C3 as bi,
  R3 as bj,
  T3 as bk,
  A3 as bl,
  P3 as bm,
  N3 as bn,
  tp as bo,
  uI as bp,
  Wt as c,
  hD as d,
  rr as e,
  Qx as f,
  cI as g,
  Rd as h,
  $x as i,
  gc as j,
  Ln as k,
  pD as l,
  oI as m,
  Su as n,
  pO as o,
  Sr as p,
  M3 as q,
  pc as r,
  Zo as s,
  dO as t,
  tI as u,
  rI as v,
  vD as w,
  Yx as x,
  ls as y,
  nI as z
};