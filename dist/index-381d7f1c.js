import Xr, { memo as Dl, useEffect as St, useState as Lt, useDebugValue as Ol } from "react";
var Nt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Os(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Is(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function i() {
      return this instanceof i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(i) {
    var n = Object.getOwnPropertyDescriptor(e, i);
    Object.defineProperty(r, i, n.get ? n : {
      enumerable: !0,
      get: function() {
        return e[i];
      }
    });
  }), r;
}
var Hn = { exports: {} }, oi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yo;
function Il() {
  if (yo)
    return oi;
  yo = 1;
  var e = Xr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(a, l, f) {
    var h, b = {}, w = null, S = null;
    f !== void 0 && (w = "" + f), l.key !== void 0 && (w = "" + l.key), l.ref !== void 0 && (S = l.ref);
    for (h in l)
      i.call(l, h) && !s.hasOwnProperty(h) && (b[h] = l[h]);
    if (a && a.defaultProps)
      for (h in l = a.defaultProps, l)
        b[h] === void 0 && (b[h] = l[h]);
    return { $$typeof: t, type: a, key: w, ref: S, props: b, _owner: n.current };
  }
  return oi.Fragment = r, oi.jsx = u, oi.jsxs = u, oi;
}
var ai = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bo;
function xl() {
  return bo || (bo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Xr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), D = Symbol.iterator, x = "@@iterator";
    function P(v) {
      if (v === null || typeof v != "object")
        return null;
      var j = D && v[D] || v[x];
      return typeof j == "function" ? j : null;
    }
    var M = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(v) {
      {
        for (var j = arguments.length, J = new Array(j > 1 ? j - 1 : 0), se = 1; se < j; se++)
          J[se - 1] = arguments[se];
        I("error", v, J);
      }
    }
    function I(v, j, J) {
      {
        var se = M.ReactDebugCurrentFrame, Ae = se.getStackAddendum();
        Ae !== "" && (j += "%s", J = J.concat([Ae]));
        var Se = J.map(function(Oe) {
          return String(Oe);
        });
        Se.unshift("Warning: " + j), Function.prototype.apply.call(console[v], console, Se);
      }
    }
    var g = !1, m = !1, d = !1, o = !1, p = !1, L;
    L = Symbol.for("react.module.reference");
    function U(v) {
      return !!(typeof v == "string" || typeof v == "function" || v === i || v === s || p || v === n || v === f || v === h || o || v === S || g || m || d || typeof v == "object" && v !== null && (v.$$typeof === w || v.$$typeof === b || v.$$typeof === u || v.$$typeof === a || v.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      v.$$typeof === L || v.getModuleId !== void 0));
    }
    function $(v, j, J) {
      var se = v.displayName;
      if (se)
        return se;
      var Ae = j.displayName || j.name || "";
      return Ae !== "" ? J + "(" + Ae + ")" : J;
    }
    function F(v) {
      return v.displayName || "Context";
    }
    function q(v) {
      if (v == null)
        return null;
      if (typeof v.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof v == "function")
        return v.displayName || v.name || null;
      if (typeof v == "string")
        return v;
      switch (v) {
        case i:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case n:
          return "StrictMode";
        case f:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case a:
            var j = v;
            return F(j) + ".Consumer";
          case u:
            var J = v;
            return F(J._context) + ".Provider";
          case l:
            return $(v, v.render, "ForwardRef");
          case b:
            var se = v.displayName || null;
            return se !== null ? se : q(v.type) || "Memo";
          case w: {
            var Ae = v, Se = Ae._payload, Oe = Ae._init;
            try {
              return q(Oe(Se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var _ = Object.assign, T = 0, G, V, z, k, B, W, oe;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function ie() {
      {
        if (T === 0) {
          G = console.log, V = console.info, z = console.warn, k = console.error, B = console.group, W = console.groupCollapsed, oe = console.groupEnd;
          var v = {
            configurable: !0,
            enumerable: !0,
            value: H,
            writable: !0
          };
          Object.defineProperties(console, {
            info: v,
            log: v,
            warn: v,
            error: v,
            group: v,
            groupCollapsed: v,
            groupEnd: v
          });
        }
        T++;
      }
    }
    function Z() {
      {
        if (T--, T === 0) {
          var v = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _({}, v, {
              value: G
            }),
            info: _({}, v, {
              value: V
            }),
            warn: _({}, v, {
              value: z
            }),
            error: _({}, v, {
              value: k
            }),
            group: _({}, v, {
              value: B
            }),
            groupCollapsed: _({}, v, {
              value: W
            }),
            groupEnd: _({}, v, {
              value: oe
            })
          });
        }
        T < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = M.ReactCurrentDispatcher, N;
    function C(v, j, J) {
      {
        if (N === void 0)
          try {
            throw Error();
          } catch (Ae) {
            var se = Ae.stack.trim().match(/\n( *(at )?)/);
            N = se && se[1] || "";
          }
        return `
` + N + v;
      }
    }
    var R = !1, c;
    {
      var O = typeof WeakMap == "function" ? WeakMap : Map;
      c = new O();
    }
    function Y(v, j) {
      if (!v || R)
        return "";
      {
        var J = c.get(v);
        if (J !== void 0)
          return J;
      }
      var se;
      R = !0;
      var Ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Se;
      Se = re.current, re.current = null, ie();
      try {
        if (j) {
          var Oe = function() {
            throw Error();
          };
          if (Object.defineProperty(Oe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Oe, []);
            } catch (kt) {
              se = kt;
            }
            Reflect.construct(v, [], Oe);
          } else {
            try {
              Oe.call();
            } catch (kt) {
              se = kt;
            }
            v.call(Oe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (kt) {
            se = kt;
          }
          v();
        }
      } catch (kt) {
        if (kt && se && typeof kt.stack == "string") {
          for (var _e = kt.stack.split(`
`), ht = se.stack.split(`
`), Ke = _e.length - 1, Ye = ht.length - 1; Ke >= 1 && Ye >= 0 && _e[Ke] !== ht[Ye]; )
            Ye--;
          for (; Ke >= 1 && Ye >= 0; Ke--, Ye--)
            if (_e[Ke] !== ht[Ye]) {
              if (Ke !== 1 || Ye !== 1)
                do
                  if (Ke--, Ye--, Ye < 0 || _e[Ke] !== ht[Ye]) {
                    var nt = `
` + _e[Ke].replace(" at new ", " at ");
                    return v.displayName && nt.includes("<anonymous>") && (nt = nt.replace("<anonymous>", v.displayName)), typeof v == "function" && c.set(v, nt), nt;
                  }
                while (Ke >= 1 && Ye >= 0);
              break;
            }
        }
      } finally {
        R = !1, re.current = Se, Z(), Error.prepareStackTrace = Ae;
      }
      var fr = v ? v.displayName || v.name : "", Ui = fr ? C(fr) : "";
      return typeof v == "function" && c.set(v, Ui), Ui;
    }
    function Q(v, j, J) {
      return Y(v, !1);
    }
    function be(v) {
      var j = v.prototype;
      return !!(j && j.isReactComponent);
    }
    function ve(v, j, J) {
      if (v == null)
        return "";
      if (typeof v == "function")
        return Y(v, be(v));
      if (typeof v == "string")
        return C(v);
      switch (v) {
        case f:
          return C("Suspense");
        case h:
          return C("SuspenseList");
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case l:
            return Q(v.render);
          case b:
            return ve(v.type, j, J);
          case w: {
            var se = v, Ae = se._payload, Se = se._init;
            try {
              return ve(Se(Ae), j, J);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, Ie = {}, Be = M.ReactDebugCurrentFrame;
    function Le(v) {
      if (v) {
        var j = v._owner, J = ve(v.type, v._source, j ? j.type : null);
        Be.setExtraStackFrame(J);
      } else
        Be.setExtraStackFrame(null);
    }
    function De(v, j, J, se, Ae) {
      {
        var Se = Function.call.bind(he);
        for (var Oe in v)
          if (Se(v, Oe)) {
            var _e = void 0;
            try {
              if (typeof v[Oe] != "function") {
                var ht = Error((se || "React class") + ": " + J + " type `" + Oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof v[Oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ht.name = "Invariant Violation", ht;
              }
              _e = v[Oe](j, Oe, se, J, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ke) {
              _e = Ke;
            }
            _e && !(_e instanceof Error) && (Le(Ae), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", se || "React class", J, Oe, typeof _e), Le(null)), _e instanceof Error && !(_e.message in Ie) && (Ie[_e.message] = !0, Le(Ae), E("Failed %s type: %s", J, _e.message), Le(null));
          }
      }
    }
    var we = Array.isArray;
    function de(v) {
      return we(v);
    }
    function ge(v) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, J = j && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return J;
      }
    }
    function pe(v) {
      try {
        return ue(v), !1;
      } catch {
        return !0;
      }
    }
    function ue(v) {
      return "" + v;
    }
    function ce(v) {
      if (pe(v))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ge(v)), ue(v);
    }
    var ne = M.ReactCurrentOwner, ye = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, ae, Ee;
    Ee = {};
    function xe(v) {
      if (he.call(v, "ref")) {
        var j = Object.getOwnPropertyDescriptor(v, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return v.ref !== void 0;
    }
    function Ce(v) {
      if (he.call(v, "key")) {
        var j = Object.getOwnPropertyDescriptor(v, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return v.key !== void 0;
    }
    function Pe(v, j) {
      if (typeof v.ref == "string" && ne.current && j && ne.current.stateNode !== j) {
        var J = q(ne.current.type);
        Ee[J] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(ne.current.type), v.ref), Ee[J] = !0);
      }
    }
    function Re(v, j) {
      {
        var J = function() {
          me || (me = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        J.isReactWarning = !0, Object.defineProperty(v, "key", {
          get: J,
          configurable: !0
        });
      }
    }
    function Ct(v, j) {
      {
        var J = function() {
          ae || (ae = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        J.isReactWarning = !0, Object.defineProperty(v, "ref", {
          get: J,
          configurable: !0
        });
      }
    }
    var Mt = function(v, j, J, se, Ae, Se, Oe) {
      var _e = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: v,
        key: j,
        ref: J,
        props: Oe,
        // Record the component responsible for creating this element.
        _owner: Se
      };
      return _e._store = {}, Object.defineProperty(_e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_e, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: se
      }), Object.defineProperty(_e, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ae
      }), Object.freeze && (Object.freeze(_e.props), Object.freeze(_e)), _e;
    };
    function Qt(v, j, J, se, Ae) {
      {
        var Se, Oe = {}, _e = null, ht = null;
        J !== void 0 && (ce(J), _e = "" + J), Ce(j) && (ce(j.key), _e = "" + j.key), xe(j) && (ht = j.ref, Pe(j, Ae));
        for (Se in j)
          he.call(j, Se) && !ye.hasOwnProperty(Se) && (Oe[Se] = j[Se]);
        if (v && v.defaultProps) {
          var Ke = v.defaultProps;
          for (Se in Ke)
            Oe[Se] === void 0 && (Oe[Se] = Ke[Se]);
        }
        if (_e || ht) {
          var Ye = typeof v == "function" ? v.displayName || v.name || "Unknown" : v;
          _e && Re(Oe, Ye), ht && Ct(Oe, Ye);
        }
        return Mt(v, _e, ht, Ae, se, ne.current, Oe);
      }
    }
    var ft = M.ReactCurrentOwner, Zt = M.ReactDebugCurrentFrame;
    function jt(v) {
      if (v) {
        var j = v._owner, J = ve(v.type, v._source, j ? j.type : null);
        Zt.setExtraStackFrame(J);
      } else
        Zt.setExtraStackFrame(null);
    }
    var lr;
    lr = !1;
    function qe(v) {
      return typeof v == "object" && v !== null && v.$$typeof === t;
    }
    function Fe() {
      {
        if (ft.current) {
          var v = q(ft.current.type);
          if (v)
            return `

Check the render method of \`` + v + "`.";
        }
        return "";
      }
    }
    function We(v) {
      {
        if (v !== void 0) {
          var j = v.fileName.replace(/^.*[\\\/]/, ""), J = v.lineNumber;
          return `

Check your code at ` + j + ":" + J + ".";
        }
        return "";
      }
    }
    var Ve = {};
    function He(v) {
      {
        var j = Fe();
        if (!j) {
          var J = typeof v == "string" ? v : v.displayName || v.name;
          J && (j = `

Check the top-level render call using <` + J + ">.");
        }
        return j;
      }
    }
    function Me(v, j) {
      {
        if (!v._store || v._store.validated || v.key != null)
          return;
        v._store.validated = !0;
        var J = He(j);
        if (Ve[J])
          return;
        Ve[J] = !0;
        var se = "";
        v && v._owner && v._owner !== ft.current && (se = " It was passed a child from " + q(v._owner.type) + "."), jt(v), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', J, se), jt(null);
      }
    }
    function Qe(v, j) {
      {
        if (typeof v != "object")
          return;
        if (de(v))
          for (var J = 0; J < v.length; J++) {
            var se = v[J];
            qe(se) && Me(se, j);
          }
        else if (qe(v))
          v._store && (v._store.validated = !0);
        else if (v) {
          var Ae = P(v);
          if (typeof Ae == "function" && Ae !== v.entries)
            for (var Se = Ae.call(v), Oe; !(Oe = Se.next()).done; )
              qe(Oe.value) && Me(Oe.value, j);
        }
      }
    }
    function tt(v) {
      {
        var j = v.type;
        if (j == null || typeof j == "string")
          return;
        var J;
        if (typeof j == "function")
          J = j.propTypes;
        else if (typeof j == "object" && (j.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === b))
          J = j.propTypes;
        else
          return;
        if (J) {
          var se = q(j);
          De(J, v.props, "prop", se, v);
        } else if (j.PropTypes !== void 0 && !lr) {
          lr = !0;
          var Ae = q(j);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ae || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rt(v) {
      {
        for (var j = Object.keys(v.props), J = 0; J < j.length; J++) {
          var se = j[J];
          if (se !== "children" && se !== "key") {
            jt(v), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", se), jt(null);
            break;
          }
        }
        v.ref !== null && (jt(v), E("Invalid attribute `ref` supplied to `React.Fragment`."), jt(null));
      }
    }
    function Ze(v, j, J, se, Ae, Se) {
      {
        var Oe = U(v);
        if (!Oe) {
          var _e = "";
          (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (_e += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ht = We(Ae);
          ht ? _e += ht : _e += Fe();
          var Ke;
          v === null ? Ke = "null" : de(v) ? Ke = "array" : v !== void 0 && v.$$typeof === t ? (Ke = "<" + (q(v.type) || "Unknown") + " />", _e = " Did you accidentally export a JSX literal instead of a component?") : Ke = typeof v, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ke, _e);
        }
        var Ye = Qt(v, j, J, Ae, Se);
        if (Ye == null)
          return Ye;
        if (Oe) {
          var nt = j.children;
          if (nt !== void 0)
            if (se)
              if (de(nt)) {
                for (var fr = 0; fr < nt.length; fr++)
                  Qe(nt[fr], v);
                Object.freeze && Object.freeze(nt);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Qe(nt, v);
        }
        return v === i ? rt(Ye) : tt(Ye), Ye;
      }
    }
    function it(v, j, J) {
      return Ze(v, j, J, !0);
    }
    function et(v, j, J) {
      return Ze(v, j, J, !1);
    }
    var Ge = et, Ue = it;
    ai.Fragment = i, ai.jsx = Ge, ai.jsxs = Ue;
  }()), ai;
}
process.env.NODE_ENV === "production" ? Hn.exports = Il() : Hn.exports = xl();
var Gn = Hn.exports;
const Rl = Symbol(), vo = Object.getPrototypeOf, Yn = /* @__PURE__ */ new WeakMap(), Al = (e) => e && (Yn.has(e) ? Yn.get(e) : vo(e) === Object.prototype || vo(e) === Array.prototype), Tl = (e) => Al(e) && e[Rl] || null, mo = (e, t = !0) => {
  Yn.set(e, t);
}, wn = (e) => typeof e == "object" && e !== null, gr = /* @__PURE__ */ new WeakMap(), zi = /* @__PURE__ */ new WeakSet(), Cl = (e = Object.is, t = (h, b) => new Proxy(h, b), r = (h) => wn(h) && !zi.has(h) && (Array.isArray(h) || !(Symbol.iterator in h)) && !(h instanceof WeakMap) && !(h instanceof WeakSet) && !(h instanceof Error) && !(h instanceof Number) && !(h instanceof Date) && !(h instanceof String) && !(h instanceof RegExp) && !(h instanceof ArrayBuffer), i = (h) => h.configurable && h.enumerable && h.writable, n = (h) => {
  switch (h.status) {
    case "fulfilled":
      return h.value;
    case "rejected":
      throw h.reason;
    default:
      throw h;
  }
}, s = /* @__PURE__ */ new WeakMap(), u = (h, b, w = n) => {
  const S = s.get(h);
  if ((S == null ? void 0 : S[0]) === b)
    return S[1];
  const D = Array.isArray(h) ? [] : Object.create(Object.getPrototypeOf(h));
  return mo(D, !0), s.set(h, [b, D]), Reflect.ownKeys(h).forEach((x) => {
    if (Object.getOwnPropertyDescriptor(D, x))
      return;
    const P = Reflect.get(h, x), M = {
      value: P,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (zi.has(P))
      mo(P, !1);
    else if (P instanceof Promise)
      delete M.value, M.get = () => w(P);
    else if (gr.has(P)) {
      const [E, I] = gr.get(
        P
      );
      M.value = u(
        E,
        I(),
        w
      );
    }
    Object.defineProperty(D, x, M);
  }), Object.preventExtensions(D);
}, a = /* @__PURE__ */ new WeakMap(), l = [1, 1], f = (h) => {
  if (!wn(h))
    throw new Error("object required");
  const b = a.get(h);
  if (b)
    return b;
  let w = l[0];
  const S = /* @__PURE__ */ new Set(), D = ($, F = ++l[0]) => {
    w !== F && (w = F, S.forEach((q) => q($, F)));
  };
  let x = l[1];
  const P = ($ = ++l[1]) => (x !== $ && !S.size && (x = $, E.forEach(([F]) => {
    const q = F[1]($);
    q > w && (w = q);
  })), w), M = ($) => (F, q) => {
    const _ = [...F];
    _[1] = [$, ..._[1]], D(_, q);
  }, E = /* @__PURE__ */ new Map(), I = ($, F) => {
    if (S.size) {
      const q = F[3](M($));
      E.set($, [F, q]);
    } else
      E.set($, [F]);
  }, g = ($) => {
    var F;
    const q = E.get($);
    q && (E.delete($), (F = q[1]) == null || F.call(q));
  }, m = ($) => (S.add($), S.size === 1 && E.forEach(([q, _], T) => {
    const G = q[3](M(T));
    E.set(T, [q, G]);
  }), () => {
    S.delete($), S.size === 0 && E.forEach(([q, _], T) => {
      _ && (_(), E.set(T, [q]));
    });
  }), d = Array.isArray(h) ? [] : Object.create(Object.getPrototypeOf(h)), o = ($, F, q, _, T) => {
    if ($ && (e(F, _) || a.has(_) && e(F, a.get(_))))
      return;
    g(q), wn(_) && (_ = Tl(_) || _);
    let G = _;
    if (_ instanceof Promise)
      _.then((V) => {
        _.status = "fulfilled", _.value = V, D(["resolve", [q], V]);
      }).catch((V) => {
        _.status = "rejected", _.reason = V, D(["reject", [q], V]);
      });
    else {
      !gr.has(_) && r(_) && (G = f(_));
      const V = !zi.has(G) && gr.get(G);
      V && I(q, V);
    }
    T(G), D(["set", [q], _, F]);
  }, L = t(d, {
    deleteProperty($, F) {
      const q = Reflect.get($, F);
      g(F);
      const _ = Reflect.deleteProperty($, F);
      return _ && D(["delete", [F], q]), _;
    },
    set($, F, q, _) {
      const T = Reflect.has($, F), G = Reflect.get($, F, _);
      return o(T, G, F, q, (V) => {
        Reflect.set($, F, V, _);
      }), !0;
    },
    defineProperty($, F, q) {
      if (i(q)) {
        const _ = Reflect.getOwnPropertyDescriptor($, F);
        if (!_ || i(_))
          return o(
            !!_ && "value" in _,
            _ == null ? void 0 : _.value,
            F,
            q.value,
            (T) => {
              Reflect.defineProperty($, F, {
                ...q,
                value: T
              });
            }
          ), !0;
      }
      return Reflect.defineProperty($, F, q);
    }
  });
  a.set(h, L);
  const U = [
    d,
    P,
    u,
    m
  ];
  return gr.set(L, U), Reflect.ownKeys(h).forEach(($) => {
    const F = Object.getOwnPropertyDescriptor(
      h,
      $
    );
    "value" in F && (L[$] = h[$], delete F.value, delete F.writable), Object.defineProperty(d, $, F);
  }), L;
}) => [
  // public functions
  f,
  // shared state
  gr,
  zi,
  // internal things
  e,
  t,
  r,
  i,
  n,
  s,
  u,
  a,
  l
], [Pl] = Cl();
function mr(e = {}) {
  return Pl(e);
}
function Lr(e, t, r) {
  const i = gr.get(e);
  let n;
  const s = [], u = i[3];
  let a = !1;
  const f = u((h) => {
    if (s.push(h), r) {
      t(s.splice(0));
      return;
    }
    n || (n = Promise.resolve().then(() => {
      n = void 0, a && t(s.splice(0));
    }));
  });
  return a = !0, () => {
    a = !1, f();
  };
}
function Nl(e, t) {
  const r = gr.get(e), [i, n, s] = r;
  return s(i, n(), t);
}
const at = mr({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), vc = { state: at, subscribe(e) {
  return Lr(at, () => e(at));
}, push(e, t) {
  e !== at.view && (at.view = e, t && (at.data = t), at.history.push(e));
}, reset(e) {
  at.view = e, at.history = [e];
}, replace(e) {
  at.history.length > 1 && (at.history[at.history.length - 1] = e, at.view = e);
}, goBack() {
  if (at.history.length > 1) {
    at.history.pop();
    const [e] = at.history.slice(-1);
    at.view = e;
  }
}, setData(e) {
  at.data = e;
} }, Et = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", WCM_VERSION: "WCM_VERSION", RECOMMENDED_WALLET_AMOUNT: 9, isMobile() {
  return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return Et.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isIos() {
  const e = navigator.userAgent.toLowerCase();
  return Et.isMobile() && (e.includes("iphone") || e.includes("ipad"));
}, isHttpUrl(e) {
  return e.startsWith("http://") || e.startsWith("https://");
}, isArray(e) {
  return Array.isArray(e) && e.length > 0;
}, formatNativeUrl(e, t, r) {
  if (Et.isHttpUrl(e))
    return this.formatUniversalUrl(e, t, r);
  let i = e;
  i.includes("://") || (i = e.replaceAll("/", "").replaceAll(":", ""), i = `${i}://`), i.endsWith("/") || (i = `${i}/`), this.setWalletConnectDeepLink(i, r);
  const n = encodeURIComponent(t);
  return `${i}wc?uri=${n}`;
}, formatUniversalUrl(e, t, r) {
  if (!Et.isHttpUrl(e))
    return this.formatNativeUrl(e, t, r);
  let i = e;
  i.endsWith("/") || (i = `${i}/`), this.setWalletConnectDeepLink(i, r);
  const n = encodeURIComponent(t);
  return `${i}wc?uri=${n}`;
}, async wait(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}, openHref(e, t) {
  window.open(e, t, "noreferrer noopener");
}, setWalletConnectDeepLink(e, t) {
  try {
    localStorage.setItem(Et.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: e, name: t }));
  } catch {
    console.info("Unable to set WalletConnect deep link");
  }
}, setWalletConnectAndroidDeepLink(e) {
  try {
    const [t] = e.split("?");
    localStorage.setItem(Et.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: t, name: "Android" }));
  } catch {
    console.info("Unable to set WalletConnect android deep link");
  }
}, removeWalletConnectDeepLink() {
  try {
    localStorage.removeItem(Et.WALLETCONNECT_DEEPLINK_CHOICE);
  } catch {
    console.info("Unable to remove WalletConnect deep link");
  }
}, setModalVersionInStorage() {
  try {
    typeof localStorage < "u" && localStorage.setItem(Et.WCM_VERSION, "2.6.1");
  } catch {
    console.info("Unable to set Web3Modal version in storage");
  }
}, getWalletRouterData() {
  var e;
  const t = (e = vc.state.data) == null ? void 0 : e.Wallet;
  if (!t)
    throw new Error('Missing "Wallet" view data');
  return t;
} }, Ll = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), vt = mr({ enabled: Ll, userSessionId: "", events: [], connectedWalletId: void 0 }), Ul = { state: vt, subscribe(e) {
  return Lr(vt.events, () => e(Nl(vt.events[vt.events.length - 1])));
}, initialize() {
  vt.enabled && typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" && (vt.userSessionId = crypto.randomUUID());
}, setConnectedWalletId(e) {
  vt.connectedWalletId = e;
}, click(e) {
  if (vt.enabled) {
    const t = { type: "CLICK", name: e.name, userSessionId: vt.userSessionId, timestamp: Date.now(), data: e };
    vt.events.push(t);
  }
}, track(e) {
  if (vt.enabled) {
    const t = { type: "TRACK", name: e.name, userSessionId: vt.userSessionId, timestamp: Date.now(), data: e };
    vt.events.push(t);
  }
}, view(e) {
  if (vt.enabled) {
    const t = { type: "VIEW", name: e.name, userSessionId: vt.userSessionId, timestamp: Date.now(), data: e };
    vt.events.push(t);
  }
} }, er = mr({ chains: void 0, walletConnectUri: void 0, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1 }), Yt = { state: er, subscribe(e) {
  return Lr(er, () => e(er));
}, setChains(e) {
  er.chains = e;
}, setWalletConnectUri(e) {
  er.walletConnectUri = e;
}, setIsCustomDesktop(e) {
  er.isCustomDesktop = e;
}, setIsCustomMobile(e) {
  er.isCustomMobile = e;
}, setIsDataLoaded(e) {
  er.isDataLoaded = e;
}, setIsUiLoaded(e) {
  er.isUiLoaded = e;
}, setIsAuth(e) {
  er.isAuth = e;
} }, Vi = mr({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chains: void 0, enableAuthMode: !1, enableExplorer: !0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), Gr = { state: Vi, subscribe(e) {
  return Lr(Vi, () => e(Vi));
}, setConfig(e) {
  var t, r;
  Ul.initialize(), Yt.setChains(e.chains), Yt.setIsAuth(!!e.enableAuthMode), Yt.setIsCustomMobile(!!((t = e.mobileWallets) != null && t.length)), Yt.setIsCustomDesktop(!!((r = e.desktopWallets) != null && r.length)), Et.setModalVersionInStorage(), Object.assign(Vi, e);
} };
var $l = Object.defineProperty, _o = Object.getOwnPropertySymbols, Fl = Object.prototype.hasOwnProperty, Ml = Object.prototype.propertyIsEnumerable, wo = (e, t, r) => t in e ? $l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, jl = (e, t) => {
  for (var r in t || (t = {}))
    Fl.call(t, r) && wo(e, r, t[r]);
  if (_o)
    for (var r of _o(t))
      Ml.call(t, r) && wo(e, r, t[r]);
  return e;
};
const Jn = "https://explorer-api.walletconnect.com", Xn = "wcm", Qn = "js-2.6.1";
async function Ki(e, t) {
  const r = jl({ sdkType: Xn, sdkVersion: Qn }, t), i = new URL(e, Jn);
  return i.searchParams.append("projectId", Gr.state.projectId), Object.entries(r).forEach(([n, s]) => {
    s && i.searchParams.append(n, String(s));
  }), (await fetch(i)).json();
}
const Sr = { async getDesktopListings(e) {
  return Ki("/w3m/v1/getDesktopListings", e);
}, async getMobileListings(e) {
  return Ki("/w3m/v1/getMobileListings", e);
}, async getInjectedListings(e) {
  return Ki("/w3m/v1/getInjectedListings", e);
}, async getAllListings(e) {
  return Ki("/w3m/v1/getAllListings", e);
}, getWalletImageUrl(e) {
  return `${Jn}/w3m/v1/getWalletImage/${e}?projectId=${Gr.state.projectId}&sdkType=${Xn}&sdkVersion=${Qn}`;
}, getAssetImageUrl(e) {
  return `${Jn}/w3m/v1/getAssetImage/${e}?projectId=${Gr.state.projectId}&sdkType=${Xn}&sdkVersion=${Qn}`;
} };
var Bl = Object.defineProperty, Eo = Object.getOwnPropertySymbols, ql = Object.prototype.hasOwnProperty, zl = Object.prototype.propertyIsEnumerable, So = (e, t, r) => t in e ? Bl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Vl = (e, t) => {
  for (var r in t || (t = {}))
    ql.call(t, r) && So(e, r, t[r]);
  if (Eo)
    for (var r of Eo(t))
      zl.call(t, r) && So(e, r, t[r]);
  return e;
};
const Do = Et.isMobile(), tr = mr({ wallets: { listings: [], total: 0, page: 1 }, search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), av = { state: tr, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: e, explorerExcludedWalletIds: t } = Gr.state;
  if (e === "NONE" || t === "ALL" && !e)
    return tr.recomendedWallets;
  if (Et.isArray(e)) {
    const r = { recommendedIds: e.join(",") }, { listings: i } = await Sr.getAllListings(r), n = Object.values(i);
    n.sort((s, u) => {
      const a = e.indexOf(s.id), l = e.indexOf(u.id);
      return a - l;
    }), tr.recomendedWallets = n;
  } else {
    const { chains: r, isAuth: i } = Yt.state, n = r == null ? void 0 : r.join(","), s = Et.isArray(t), u = { page: 1, sdks: i ? "auth_v1" : void 0, entries: Et.RECOMMENDED_WALLET_AMOUNT, chains: n, version: 2, excludedIds: s ? t.join(",") : void 0 }, { listings: a } = Do ? await Sr.getMobileListings(u) : await Sr.getDesktopListings(u);
    tr.recomendedWallets = Object.values(a);
  }
  return tr.recomendedWallets;
}, async getWallets(e) {
  const t = Vl({}, e), { explorerRecommendedWalletIds: r, explorerExcludedWalletIds: i } = Gr.state, { recomendedWallets: n } = tr;
  if (i === "ALL")
    return tr.wallets;
  n.length ? t.excludedIds = n.map((b) => b.id).join(",") : Et.isArray(r) && (t.excludedIds = r.join(",")), Et.isArray(i) && (t.excludedIds = [t.excludedIds, i].filter(Boolean).join(",")), Yt.state.isAuth && (t.sdks = "auth_v1");
  const { page: s, search: u } = e, { listings: a, total: l } = Do ? await Sr.getMobileListings(t) : await Sr.getDesktopListings(t), f = Object.values(a), h = u ? "search" : "wallets";
  return tr[h] = { listings: [...tr[h].listings, ...f], total: l, page: s ?? 1 }, { listings: f, total: l };
}, getWalletImageUrl(e) {
  return Sr.getWalletImageUrl(e);
}, getAssetImageUrl(e) {
  return Sr.getAssetImageUrl(e);
}, resetSearch() {
  tr.search = { listings: [], total: 0, page: 1 };
} }, qr = mr({ open: !1 }), En = { state: qr, subscribe(e) {
  return Lr(qr, () => e(qr));
}, async open(e) {
  return new Promise((t) => {
    const { isUiLoaded: r, isDataLoaded: i } = Yt.state;
    if (Et.removeWalletConnectDeepLink(), Yt.setWalletConnectUri(e == null ? void 0 : e.uri), Yt.setChains(e == null ? void 0 : e.chains), vc.reset("ConnectWallet"), r && i)
      qr.open = !0, t();
    else {
      const n = setInterval(() => {
        const s = Yt.state;
        s.isUiLoaded && s.isDataLoaded && (clearInterval(n), qr.open = !0, t());
      }, 200);
    }
  });
}, close() {
  qr.open = !1;
} };
var Kl = Object.defineProperty, Oo = Object.getOwnPropertySymbols, kl = Object.prototype.hasOwnProperty, Wl = Object.prototype.propertyIsEnumerable, Io = (e, t, r) => t in e ? Kl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Hl = (e, t) => {
  for (var r in t || (t = {}))
    kl.call(t, r) && Io(e, r, t[r]);
  if (Oo)
    for (var r of Oo(t))
      Wl.call(t, r) && Io(e, r, t[r]);
  return e;
};
function Gl() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const ci = mr({ themeMode: Gl() ? "dark" : "light" }), xo = { state: ci, subscribe(e) {
  return Lr(ci, () => e(ci));
}, setThemeConfig(e) {
  const { themeMode: t, themeVariables: r } = e;
  t && (ci.themeMode = t), r && (ci.themeVariables = Hl({}, r));
} }, Dr = mr({ open: !1, message: "", variant: "success" }), cv = { state: Dr, subscribe(e) {
  return Lr(Dr, () => e(Dr));
}, openToast(e, t) {
  Dr.open = !0, Dr.message = e, Dr.variant = t;
}, closeToast() {
  Dr.open = !1;
} };
let Yl = class {
  constructor(t) {
    this.openModal = En.open, this.closeModal = En.close, this.subscribeModal = En.subscribe, this.setTheme = xo.setThemeConfig, xo.setThemeConfig(t), Gr.setConfig(t), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index-7da60f6a.js");
      const t = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", t), Yt.setIsUiLoaded(!0);
    }
  }
};
var xs = { exports: {} }, Wr = typeof Reflect == "object" ? Reflect : null, Ro = Wr && typeof Wr.apply == "function" ? Wr.apply : function(t, r, i) {
  return Function.prototype.apply.call(t, r, i);
}, Hi;
Wr && typeof Wr.ownKeys == "function" ? Hi = Wr.ownKeys : Object.getOwnPropertySymbols ? Hi = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Hi = function(t) {
  return Object.getOwnPropertyNames(t);
};
function Jl(e) {
  console && console.warn && console.warn(e);
}
var mc = Number.isNaN || function(t) {
  return t !== t;
};
function Ne() {
  Ne.init.call(this);
}
xs.exports = Ne;
xs.exports.once = ef;
Ne.EventEmitter = Ne;
Ne.prototype._events = void 0;
Ne.prototype._eventsCount = 0;
Ne.prototype._maxListeners = void 0;
var Ao = 10;
function cn(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(Ne, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Ao;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || mc(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    Ao = e;
  }
});
Ne.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Ne.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || mc(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function _c(e) {
  return e._maxListeners === void 0 ? Ne.defaultMaxListeners : e._maxListeners;
}
Ne.prototype.getMaxListeners = function() {
  return _c(this);
};
Ne.prototype.emit = function(t) {
  for (var r = [], i = 1; i < arguments.length; i++)
    r.push(arguments[i]);
  var n = t === "error", s = this._events;
  if (s !== void 0)
    n = n && s.error === void 0;
  else if (!n)
    return !1;
  if (n) {
    var u;
    if (r.length > 0 && (u = r[0]), u instanceof Error)
      throw u;
    var a = new Error("Unhandled error." + (u ? " (" + u.message + ")" : ""));
    throw a.context = u, a;
  }
  var l = s[t];
  if (l === void 0)
    return !1;
  if (typeof l == "function")
    Ro(l, this, r);
  else
    for (var f = l.length, h = Oc(l, f), i = 0; i < f; ++i)
      Ro(h[i], this, r);
  return !0;
};
function wc(e, t, r, i) {
  var n, s, u;
  if (cn(r), s = e._events, s === void 0 ? (s = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (s.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    r.listener ? r.listener : r
  ), s = e._events), u = s[t]), u === void 0)
    u = s[t] = r, ++e._eventsCount;
  else if (typeof u == "function" ? u = s[t] = i ? [r, u] : [u, r] : i ? u.unshift(r) : u.push(r), n = _c(e), n > 0 && u.length > n && !u.warned) {
    u.warned = !0;
    var a = new Error("Possible EventEmitter memory leak detected. " + u.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a.name = "MaxListenersExceededWarning", a.emitter = e, a.type = t, a.count = u.length, Jl(a);
  }
  return e;
}
Ne.prototype.addListener = function(t, r) {
  return wc(this, t, r, !1);
};
Ne.prototype.on = Ne.prototype.addListener;
Ne.prototype.prependListener = function(t, r) {
  return wc(this, t, r, !0);
};
function Xl() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Ec(e, t, r) {
  var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r }, n = Xl.bind(i);
  return n.listener = r, i.wrapFn = n, n;
}
Ne.prototype.once = function(t, r) {
  return cn(r), this.on(t, Ec(this, t, r)), this;
};
Ne.prototype.prependOnceListener = function(t, r) {
  return cn(r), this.prependListener(t, Ec(this, t, r)), this;
};
Ne.prototype.removeListener = function(t, r) {
  var i, n, s, u, a;
  if (cn(r), n = this._events, n === void 0)
    return this;
  if (i = n[t], i === void 0)
    return this;
  if (i === r || i.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete n[t], n.removeListener && this.emit("removeListener", t, i.listener || r));
  else if (typeof i != "function") {
    for (s = -1, u = i.length - 1; u >= 0; u--)
      if (i[u] === r || i[u].listener === r) {
        a = i[u].listener, s = u;
        break;
      }
    if (s < 0)
      return this;
    s === 0 ? i.shift() : Ql(i, s), i.length === 1 && (n[t] = i[0]), n.removeListener !== void 0 && this.emit("removeListener", t, a || r);
  }
  return this;
};
Ne.prototype.off = Ne.prototype.removeListener;
Ne.prototype.removeAllListeners = function(t) {
  var r, i, n;
  if (i = this._events, i === void 0)
    return this;
  if (i.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : i[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete i[t]), this;
  if (arguments.length === 0) {
    var s = Object.keys(i), u;
    for (n = 0; n < s.length; ++n)
      u = s[n], u !== "removeListener" && this.removeAllListeners(u);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = i[t], typeof r == "function")
    this.removeListener(t, r);
  else if (r !== void 0)
    for (n = r.length - 1; n >= 0; n--)
      this.removeListener(t, r[n]);
  return this;
};
function Sc(e, t, r) {
  var i = e._events;
  if (i === void 0)
    return [];
  var n = i[t];
  return n === void 0 ? [] : typeof n == "function" ? r ? [n.listener || n] : [n] : r ? Zl(n) : Oc(n, n.length);
}
Ne.prototype.listeners = function(t) {
  return Sc(this, t, !0);
};
Ne.prototype.rawListeners = function(t) {
  return Sc(this, t, !1);
};
Ne.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Dc.call(e, t);
};
Ne.prototype.listenerCount = Dc;
function Dc(e) {
  var t = this._events;
  if (t !== void 0) {
    var r = t[e];
    if (typeof r == "function")
      return 1;
    if (r !== void 0)
      return r.length;
  }
  return 0;
}
Ne.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Hi(this._events) : [];
};
function Oc(e, t) {
  for (var r = new Array(t), i = 0; i < t; ++i)
    r[i] = e[i];
  return r;
}
function Ql(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function Zl(e) {
  for (var t = new Array(e.length), r = 0; r < t.length; ++r)
    t[r] = e[r].listener || e[r];
  return t;
}
function ef(e, t) {
  return new Promise(function(r, i) {
    function n(u) {
      e.removeListener(t, s), i(u);
    }
    function s() {
      typeof e.removeListener == "function" && e.removeListener("error", n), r([].slice.call(arguments));
    }
    Ic(e, t, s, { once: !0 }), t !== "error" && tf(e, n, { once: !0 });
  });
}
function tf(e, t, r) {
  typeof e.on == "function" && Ic(e, "error", t, r);
}
function Ic(e, t, r, i) {
  if (typeof e.on == "function")
    i.once ? e.once(t, r) : e.on(t, r);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function n(s) {
      i.once && e.removeEventListener(t, n), r(s);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var Xt = xs.exports;
const xc = /* @__PURE__ */ Os(Xt);
var un = {};
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
var Zn = function(e, t) {
  return Zn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
    r.__proto__ = i;
  } || function(r, i) {
    for (var n in i)
      i.hasOwnProperty(n) && (r[n] = i[n]);
  }, Zn(e, t);
};
function rf(e, t) {
  Zn(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var es = function() {
  return es = Object.assign || function(t) {
    for (var r, i = 1, n = arguments.length; i < n; i++) {
      r = arguments[i];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, es.apply(this, arguments);
};
function nf(e, t) {
  var r = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++)
      t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
  return r;
}
function sf(e, t, r, i) {
  var n = arguments.length, s = n < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, r) : i, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(e, t, r, i);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (u = e[a]) && (s = (n < 3 ? u(s) : n > 3 ? u(t, r, s) : u(t, r)) || s);
  return n > 3 && s && Object.defineProperty(t, r, s), s;
}
function of(e, t) {
  return function(r, i) {
    t(r, i, e);
  };
}
function af(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(e, t);
}
function cf(e, t, r, i) {
  function n(s) {
    return s instanceof r ? s : new r(function(u) {
      u(s);
    });
  }
  return new (r || (r = Promise))(function(s, u) {
    function a(h) {
      try {
        f(i.next(h));
      } catch (b) {
        u(b);
      }
    }
    function l(h) {
      try {
        f(i.throw(h));
      } catch (b) {
        u(b);
      }
    }
    function f(h) {
      h.done ? s(h.value) : n(h.value).then(a, l);
    }
    f((i = i.apply(e, t || [])).next());
  });
}
function uf(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, i, n, s, u;
  return u = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function a(f) {
    return function(h) {
      return l([f, h]);
    };
  }
  function l(f) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; r; )
      try {
        if (i = 1, n && (s = f[0] & 2 ? n.return : f[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, f[1])).done)
          return s;
        switch (n = 0, s && (f = [f[0] & 2, s.value]), f[0]) {
          case 0:
          case 1:
            s = f;
            break;
          case 4:
            return r.label++, { value: f[1], done: !1 };
          case 5:
            r.label++, n = f[1], f = [0];
            continue;
          case 7:
            f = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (f[0] === 6 || f[0] === 2)) {
              r = 0;
              continue;
            }
            if (f[0] === 3 && (!s || f[1] > s[0] && f[1] < s[3])) {
              r.label = f[1];
              break;
            }
            if (f[0] === 6 && r.label < s[1]) {
              r.label = s[1], s = f;
              break;
            }
            if (s && r.label < s[2]) {
              r.label = s[2], r.ops.push(f);
              break;
            }
            s[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        f = t.call(e, r);
      } catch (h) {
        f = [6, h], n = 0;
      } finally {
        i = s = 0;
      }
    if (f[0] & 5)
      throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}
function lf(e, t, r, i) {
  i === void 0 && (i = r), e[i] = t[r];
}
function ff(e, t) {
  for (var r in e)
    r !== "default" && !t.hasOwnProperty(r) && (t[r] = e[r]);
}
function ts(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], i = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Rc(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var i = r.call(e), n, s = [], u;
  try {
    for (; (t === void 0 || t-- > 0) && !(n = i.next()).done; )
      s.push(n.value);
  } catch (a) {
    u = { error: a };
  } finally {
    try {
      n && !n.done && (r = i.return) && r.call(i);
    } finally {
      if (u)
        throw u.error;
    }
  }
  return s;
}
function hf() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(Rc(arguments[t]));
  return e;
}
function df() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++)
    e += arguments[t].length;
  for (var i = Array(e), n = 0, t = 0; t < r; t++)
    for (var s = arguments[t], u = 0, a = s.length; u < a; u++, n++)
      i[n] = s[u];
  return i;
}
function Ii(e) {
  return this instanceof Ii ? (this.v = e, this) : new Ii(e);
}
function pf(e, t, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = r.apply(e, t || []), n, s = [];
  return n = {}, u("next"), u("throw"), u("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n;
  function u(w) {
    i[w] && (n[w] = function(S) {
      return new Promise(function(D, x) {
        s.push([w, S, D, x]) > 1 || a(w, S);
      });
    });
  }
  function a(w, S) {
    try {
      l(i[w](S));
    } catch (D) {
      b(s[0][3], D);
    }
  }
  function l(w) {
    w.value instanceof Ii ? Promise.resolve(w.value.v).then(f, h) : b(s[0][2], w);
  }
  function f(w) {
    a("next", w);
  }
  function h(w) {
    a("throw", w);
  }
  function b(w, S) {
    w(S), s.shift(), s.length && a(s[0][0], s[0][1]);
  }
}
function gf(e) {
  var t, r;
  return t = {}, i("next"), i("throw", function(n) {
    throw n;
  }), i("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function i(n, s) {
    t[n] = e[n] ? function(u) {
      return (r = !r) ? { value: Ii(e[n](u)), done: n === "return" } : s ? s(u) : u;
    } : s;
  }
}
function yf(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof ts == "function" ? ts(e) : e[Symbol.iterator](), r = {}, i("next"), i("throw"), i("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function i(s) {
    r[s] = e[s] && function(u) {
      return new Promise(function(a, l) {
        u = e[s](u), n(a, l, u.done, u.value);
      });
    };
  }
  function n(s, u, a, l) {
    Promise.resolve(l).then(function(f) {
      s({ value: f, done: a });
    }, u);
  }
}
function bf(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
function vf(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return t.default = e, t;
}
function mf(e) {
  return e && e.__esModule ? e : { default: e };
}
function _f(e, t) {
  if (!t.has(e))
    throw new TypeError("attempted to get private field on non-instance");
  return t.get(e);
}
function wf(e, t, r) {
  if (!t.has(e))
    throw new TypeError("attempted to set private field on non-instance");
  return t.set(e, r), r;
}
const Ef = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get __assign() {
    return es;
  },
  __asyncDelegator: gf,
  __asyncGenerator: pf,
  __asyncValues: yf,
  __await: Ii,
  __awaiter: cf,
  __classPrivateFieldGet: _f,
  __classPrivateFieldSet: wf,
  __createBinding: lf,
  __decorate: sf,
  __exportStar: ff,
  __extends: rf,
  __generator: uf,
  __importDefault: mf,
  __importStar: vf,
  __makeTemplateObject: bf,
  __metadata: af,
  __param: of,
  __read: Rc,
  __rest: nf,
  __spread: hf,
  __spreadArrays: df,
  __values: ts
}, Symbol.toStringTag, { value: "Module" })), Kt = /* @__PURE__ */ Is(Ef);
var Ai = {};
Object.defineProperty(Ai, "__esModule", { value: !0 });
function Sf(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return JSON.parse(e);
  } catch {
    return e;
  }
}
Ai.safeJsonParse = Sf;
function Df(e) {
  return typeof e == "string" ? e : JSON.stringify(e, (t, r) => typeof r > "u" ? null : r);
}
Ai.safeJsonStringify = Df;
var ui = { exports: {} }, To;
function Of() {
  return To || (To = 1, function() {
    let e;
    function t() {
    }
    e = t, e.prototype.getItem = function(r) {
      return this.hasOwnProperty(r) ? String(this[r]) : null;
    }, e.prototype.setItem = function(r, i) {
      this[r] = String(i);
    }, e.prototype.removeItem = function(r) {
      delete this[r];
    }, e.prototype.clear = function() {
      const r = this;
      Object.keys(r).forEach(function(i) {
        r[i] = void 0, delete r[i];
      });
    }, e.prototype.key = function(r) {
      return r = r || 0, Object.keys(this)[r];
    }, e.prototype.__defineGetter__("length", function() {
      return Object.keys(this).length;
    }), typeof Nt < "u" && Nt.localStorage ? ui.exports = Nt.localStorage : typeof window < "u" && window.localStorage ? ui.exports = window.localStorage : ui.exports = new t();
  }()), ui.exports;
}
var Sn = {}, li = {}, Co;
function If() {
  if (Co)
    return li;
  Co = 1, Object.defineProperty(li, "__esModule", { value: !0 }), li.IKeyValueStorage = void 0;
  class e {
  }
  return li.IKeyValueStorage = e, li;
}
var fi = {}, Po;
function xf() {
  if (Po)
    return fi;
  Po = 1, Object.defineProperty(fi, "__esModule", { value: !0 }), fi.parseEntry = void 0;
  const e = Ai;
  function t(r) {
    var i;
    return [r[0], e.safeJsonParse((i = r[1]) !== null && i !== void 0 ? i : "")];
  }
  return fi.parseEntry = t, fi;
}
var No;
function Rf() {
  return No || (No = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = Kt;
    t.__exportStar(If(), e), t.__exportStar(xf(), e);
  }(Sn)), Sn;
}
Object.defineProperty(un, "__esModule", { value: !0 });
un.KeyValueStorage = void 0;
const Vr = Kt, Lo = Ai, Af = Vr.__importDefault(Of()), Tf = Rf();
class Ac {
  constructor() {
    this.localStorage = Af.default;
  }
  getKeys() {
    return Vr.__awaiter(this, void 0, void 0, function* () {
      return Object.keys(this.localStorage);
    });
  }
  getEntries() {
    return Vr.__awaiter(this, void 0, void 0, function* () {
      return Object.entries(this.localStorage).map(Tf.parseEntry);
    });
  }
  getItem(t) {
    return Vr.__awaiter(this, void 0, void 0, function* () {
      const r = this.localStorage.getItem(t);
      if (r !== null)
        return Lo.safeJsonParse(r);
    });
  }
  setItem(t, r) {
    return Vr.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.setItem(t, Lo.safeJsonStringify(r));
    });
  }
  removeItem(t) {
    return Vr.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.removeItem(t);
    });
  }
}
un.KeyValueStorage = Ac;
var Cf = un.default = Ac, Qr = {}, hi = {}, te = {}, Dn = {}, di = {}, Uo;
function Pf() {
  if (Uo)
    return di;
  Uo = 1, Object.defineProperty(di, "__esModule", { value: !0 }), di.delay = void 0;
  function e(t) {
    return new Promise((r) => {
      setTimeout(() => {
        r(!0);
      }, t);
    });
  }
  return di.delay = e, di;
}
var Or = {}, On = {}, Ir = {}, $o;
function Nf() {
  return $o || ($o = 1, Object.defineProperty(Ir, "__esModule", { value: !0 }), Ir.ONE_THOUSAND = Ir.ONE_HUNDRED = void 0, Ir.ONE_HUNDRED = 100, Ir.ONE_THOUSAND = 1e3), Ir;
}
var In = {}, Fo;
function Lf() {
  return Fo || (Fo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ONE_YEAR = e.FOUR_WEEKS = e.THREE_WEEKS = e.TWO_WEEKS = e.ONE_WEEK = e.THIRTY_DAYS = e.SEVEN_DAYS = e.FIVE_DAYS = e.THREE_DAYS = e.ONE_DAY = e.TWENTY_FOUR_HOURS = e.TWELVE_HOURS = e.SIX_HOURS = e.THREE_HOURS = e.ONE_HOUR = e.SIXTY_MINUTES = e.THIRTY_MINUTES = e.TEN_MINUTES = e.FIVE_MINUTES = e.ONE_MINUTE = e.SIXTY_SECONDS = e.THIRTY_SECONDS = e.TEN_SECONDS = e.FIVE_SECONDS = e.ONE_SECOND = void 0, e.ONE_SECOND = 1, e.FIVE_SECONDS = 5, e.TEN_SECONDS = 10, e.THIRTY_SECONDS = 30, e.SIXTY_SECONDS = 60, e.ONE_MINUTE = e.SIXTY_SECONDS, e.FIVE_MINUTES = e.ONE_MINUTE * 5, e.TEN_MINUTES = e.ONE_MINUTE * 10, e.THIRTY_MINUTES = e.ONE_MINUTE * 30, e.SIXTY_MINUTES = e.ONE_MINUTE * 60, e.ONE_HOUR = e.SIXTY_MINUTES, e.THREE_HOURS = e.ONE_HOUR * 3, e.SIX_HOURS = e.ONE_HOUR * 6, e.TWELVE_HOURS = e.ONE_HOUR * 12, e.TWENTY_FOUR_HOURS = e.ONE_HOUR * 24, e.ONE_DAY = e.TWENTY_FOUR_HOURS, e.THREE_DAYS = e.ONE_DAY * 3, e.FIVE_DAYS = e.ONE_DAY * 5, e.SEVEN_DAYS = e.ONE_DAY * 7, e.THIRTY_DAYS = e.ONE_DAY * 30, e.ONE_WEEK = e.SEVEN_DAYS, e.TWO_WEEKS = e.ONE_WEEK * 2, e.THREE_WEEKS = e.ONE_WEEK * 3, e.FOUR_WEEKS = e.ONE_WEEK * 4, e.ONE_YEAR = e.ONE_DAY * 365;
  }(In)), In;
}
var Mo;
function Tc() {
  return Mo || (Mo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = Kt;
    t.__exportStar(Nf(), e), t.__exportStar(Lf(), e);
  }(On)), On;
}
var jo;
function Uf() {
  if (jo)
    return Or;
  jo = 1, Object.defineProperty(Or, "__esModule", { value: !0 }), Or.fromMiliseconds = Or.toMiliseconds = void 0;
  const e = Tc();
  function t(i) {
    return i * e.ONE_THOUSAND;
  }
  Or.toMiliseconds = t;
  function r(i) {
    return Math.floor(i / e.ONE_THOUSAND);
  }
  return Or.fromMiliseconds = r, Or;
}
var Bo;
function $f() {
  return Bo || (Bo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
    const t = Kt;
    t.__exportStar(Pf(), e), t.__exportStar(Uf(), e);
  }(Dn)), Dn;
}
var zr = {}, qo;
function Ff() {
  if (qo)
    return zr;
  qo = 1, Object.defineProperty(zr, "__esModule", { value: !0 }), zr.Watch = void 0;
  class e {
    constructor() {
      this.timestamps = /* @__PURE__ */ new Map();
    }
    start(r) {
      if (this.timestamps.has(r))
        throw new Error(`Watch already started for label: ${r}`);
      this.timestamps.set(r, { started: Date.now() });
    }
    stop(r) {
      const i = this.get(r);
      if (typeof i.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${r}`);
      const n = Date.now() - i.started;
      this.timestamps.set(r, { started: i.started, elapsed: n });
    }
    get(r) {
      const i = this.timestamps.get(r);
      if (typeof i > "u")
        throw new Error(`No timestamp found for label: ${r}`);
      return i;
    }
    elapsed(r) {
      const i = this.get(r);
      return i.elapsed || Date.now() - i.started;
    }
  }
  return zr.Watch = e, zr.default = e, zr;
}
var xn = {}, pi = {}, zo;
function Mf() {
  if (zo)
    return pi;
  zo = 1, Object.defineProperty(pi, "__esModule", { value: !0 }), pi.IWatch = void 0;
  class e {
  }
  return pi.IWatch = e, pi;
}
var Vo;
function jf() {
  return Vo || (Vo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), Kt.__exportStar(Mf(), e);
  }(xn)), xn;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = Kt;
  t.__exportStar($f(), e), t.__exportStar(Ff(), e), t.__exportStar(jf(), e), t.__exportStar(Tc(), e);
})(te);
var Rn = {}, gi = {};
let Ur = class {
};
const Bf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: Ur
}, Symbol.toStringTag, { value: "Module" })), qf = /* @__PURE__ */ Is(Bf);
var Ko;
function zf() {
  if (Ko)
    return gi;
  Ko = 1, Object.defineProperty(gi, "__esModule", { value: !0 }), gi.IHeartBeat = void 0;
  const e = qf;
  class t extends e.IEvents {
    constructor(i) {
      super();
    }
  }
  return gi.IHeartBeat = t, gi;
}
var ko;
function Cc() {
  return ko || (ko = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), Kt.__exportStar(zf(), e);
  }(Rn)), Rn;
}
var An = {}, xr = {}, Wo;
function Vf() {
  if (Wo)
    return xr;
  Wo = 1, Object.defineProperty(xr, "__esModule", { value: !0 }), xr.HEARTBEAT_EVENTS = xr.HEARTBEAT_INTERVAL = void 0;
  const e = te;
  return xr.HEARTBEAT_INTERVAL = e.FIVE_SECONDS, xr.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, xr;
}
var Ho;
function Pc() {
  return Ho || (Ho = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), Kt.__exportStar(Vf(), e);
  }(An)), An;
}
var Go;
function Kf() {
  if (Go)
    return hi;
  Go = 1, Object.defineProperty(hi, "__esModule", { value: !0 }), hi.HeartBeat = void 0;
  const e = Kt, t = Xt, r = te, i = Cc(), n = Pc();
  class s extends i.IHeartBeat {
    constructor(a) {
      super(a), this.events = new t.EventEmitter(), this.interval = n.HEARTBEAT_INTERVAL, this.interval = (a == null ? void 0 : a.interval) || n.HEARTBEAT_INTERVAL;
    }
    static init(a) {
      return e.__awaiter(this, void 0, void 0, function* () {
        const l = new s(a);
        return yield l.init(), l;
      });
    }
    init() {
      return e.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(a, l) {
      this.events.on(a, l);
    }
    once(a, l) {
      this.events.once(a, l);
    }
    off(a, l) {
      this.events.off(a, l);
    }
    removeListener(a, l) {
      this.events.removeListener(a, l);
    }
    initialize() {
      return e.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(() => this.pulse(), r.toMiliseconds(this.interval));
      });
    }
    pulse() {
      this.events.emit(n.HEARTBEAT_EVENTS.pulse);
    }
  }
  return hi.HeartBeat = s, hi;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = Kt;
  t.__exportStar(Kf(), e), t.__exportStar(Cc(), e), t.__exportStar(Pc(), e);
})(Qr);
var Te = {}, Tn, Yo;
function kf() {
  if (Yo)
    return Tn;
  Yo = 1;
  function e(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  Tn = t;
  function t(r, i, n) {
    var s = n && n.stringify || e, u = 1;
    if (typeof r == "object" && r !== null) {
      var a = i.length + u;
      if (a === 1)
        return r;
      var l = new Array(a);
      l[0] = s(r);
      for (var f = 1; f < a; f++)
        l[f] = s(i[f]);
      return l.join(" ");
    }
    if (typeof r != "string")
      return r;
    var h = i.length;
    if (h === 0)
      return r;
    for (var b = "", w = 1 - u, S = -1, D = r && r.length || 0, x = 0; x < D; ) {
      if (r.charCodeAt(x) === 37 && x + 1 < D) {
        switch (S = S > -1 ? S : 0, r.charCodeAt(x + 1)) {
          case 100:
          case 102:
            if (w >= h || i[w] == null)
              break;
            S < x && (b += r.slice(S, x)), b += Number(i[w]), S = x + 2, x++;
            break;
          case 105:
            if (w >= h || i[w] == null)
              break;
            S < x && (b += r.slice(S, x)), b += Math.floor(Number(i[w])), S = x + 2, x++;
            break;
          case 79:
          case 111:
          case 106:
            if (w >= h || i[w] === void 0)
              break;
            S < x && (b += r.slice(S, x));
            var P = typeof i[w];
            if (P === "string") {
              b += "'" + i[w] + "'", S = x + 2, x++;
              break;
            }
            if (P === "function") {
              b += i[w].name || "<anonymous>", S = x + 2, x++;
              break;
            }
            b += s(i[w]), S = x + 2, x++;
            break;
          case 115:
            if (w >= h)
              break;
            S < x && (b += r.slice(S, x)), b += String(i[w]), S = x + 2, x++;
            break;
          case 37:
            S < x && (b += r.slice(S, x)), b += "%", S = x + 2, x++, w--;
            break;
        }
        ++w;
      }
      ++x;
    }
    return S === -1 ? r : (S < D && (b += r.slice(S)), b);
  }
  return Tn;
}
var Cn, Jo;
function Wf() {
  if (Jo)
    return Cn;
  Jo = 1;
  const e = kf();
  Cn = n;
  const t = m().console || {}, r = {
    mapHttpRequest: D,
    mapHttpResponse: D,
    wrapRequestSerializer: x,
    wrapResponseSerializer: x,
    wrapErrorSerializer: x,
    req: D,
    res: D,
    err: w
  };
  function i(d, o) {
    return Array.isArray(d) ? d.filter(function(L) {
      return L !== "!stdSerializers.err";
    }) : d === !0 ? Object.keys(o) : !1;
  }
  function n(d) {
    d = d || {}, d.browser = d.browser || {};
    const o = d.browser.transmit;
    if (o && typeof o.send != "function")
      throw Error("pino: transmit option must have a send function");
    const p = d.browser.write || t;
    d.browser.write && (d.browser.asObject = !0);
    const L = d.serializers || {}, U = i(d.browser.serialize, L);
    let $ = d.browser.serialize;
    Array.isArray(d.browser.serialize) && d.browser.serialize.indexOf("!stdSerializers.err") > -1 && ($ = !1);
    const F = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof p == "function" && (p.error = p.fatal = p.warn = p.info = p.debug = p.trace = p), d.enabled === !1 && (d.level = "silent");
    const q = d.level || "info", _ = Object.create(p);
    _.log || (_.log = P), Object.defineProperty(_, "levelVal", {
      get: G
    }), Object.defineProperty(_, "level", {
      get: V,
      set: z
    });
    const T = {
      transmit: o,
      serialize: U,
      asObject: d.browser.asObject,
      levels: F,
      timestamp: S(d)
    };
    _.levels = n.levels, _.level = q, _.setMaxListeners = _.getMaxListeners = _.emit = _.addListener = _.on = _.prependListener = _.once = _.prependOnceListener = _.removeListener = _.removeAllListeners = _.listeners = _.listenerCount = _.eventNames = _.write = _.flush = P, _.serializers = L, _._serialize = U, _._stdErrSerialize = $, _.child = k, o && (_._logEvent = b());
    function G() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function V() {
      return this._level;
    }
    function z(B) {
      if (B !== "silent" && !this.levels.values[B])
        throw Error("unknown level " + B);
      this._level = B, s(T, _, "error", "log"), s(T, _, "fatal", "error"), s(T, _, "warn", "error"), s(T, _, "info", "log"), s(T, _, "debug", "log"), s(T, _, "trace", "log");
    }
    function k(B, W) {
      if (!B)
        throw new Error("missing bindings for child Pino");
      W = W || {}, U && B.serializers && (W.serializers = B.serializers);
      const oe = W.serializers;
      if (U && oe) {
        var H = Object.assign({}, L, oe), ie = d.browser.serialize === !0 ? Object.keys(H) : U;
        delete B.serializers, l([B], ie, H, this._stdErrSerialize);
      }
      function Z(re) {
        this._childLevel = (re._childLevel | 0) + 1, this.error = f(re, B, "error"), this.fatal = f(re, B, "fatal"), this.warn = f(re, B, "warn"), this.info = f(re, B, "info"), this.debug = f(re, B, "debug"), this.trace = f(re, B, "trace"), H && (this.serializers = H, this._serialize = ie), o && (this._logEvent = b(
          [].concat(re._logEvent.bindings, B)
        ));
      }
      return Z.prototype = this, new Z(this);
    }
    return _;
  }
  n.levels = {
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
  }, n.stdSerializers = r, n.stdTimeFunctions = Object.assign({}, { nullTime: M, epochTime: E, unixTime: I, isoTime: g });
  function s(d, o, p, L) {
    const U = Object.getPrototypeOf(o);
    o[p] = o.levelVal > o.levels.values[p] ? P : U[p] ? U[p] : t[p] || t[L] || P, u(d, o, p);
  }
  function u(d, o, p) {
    !d.transmit && o[p] === P || (o[p] = function(L) {
      return function() {
        const $ = d.timestamp(), F = new Array(arguments.length), q = Object.getPrototypeOf && Object.getPrototypeOf(this) === t ? t : this;
        for (var _ = 0; _ < F.length; _++)
          F[_] = arguments[_];
        if (d.serialize && !d.asObject && l(F, this._serialize, this.serializers, this._stdErrSerialize), d.asObject ? L.call(q, a(this, p, F, $)) : L.apply(q, F), d.transmit) {
          const T = d.transmit.level || o.level, G = n.levels.values[T], V = n.levels.values[p];
          if (V < G)
            return;
          h(this, {
            ts: $,
            methodLevel: p,
            methodValue: V,
            transmitLevel: T,
            transmitValue: n.levels.values[d.transmit.level || o.level],
            send: d.transmit.send,
            val: o.levelVal
          }, F);
        }
      };
    }(o[p]));
  }
  function a(d, o, p, L) {
    d._serialize && l(p, d._serialize, d.serializers, d._stdErrSerialize);
    const U = p.slice();
    let $ = U[0];
    const F = {};
    L && (F.time = L), F.level = n.levels.values[o];
    let q = (d._childLevel | 0) + 1;
    if (q < 1 && (q = 1), $ !== null && typeof $ == "object") {
      for (; q-- && typeof U[0] == "object"; )
        Object.assign(F, U.shift());
      $ = U.length ? e(U.shift(), U) : void 0;
    } else
      typeof $ == "string" && ($ = e(U.shift(), U));
    return $ !== void 0 && (F.msg = $), F;
  }
  function l(d, o, p, L) {
    for (const U in d)
      if (L && d[U] instanceof Error)
        d[U] = n.stdSerializers.err(d[U]);
      else if (typeof d[U] == "object" && !Array.isArray(d[U]))
        for (const $ in d[U])
          o && o.indexOf($) > -1 && $ in p && (d[U][$] = p[$](d[U][$]));
  }
  function f(d, o, p) {
    return function() {
      const L = new Array(1 + arguments.length);
      L[0] = o;
      for (var U = 1; U < L.length; U++)
        L[U] = arguments[U - 1];
      return d[p].apply(this, L);
    };
  }
  function h(d, o, p) {
    const L = o.send, U = o.ts, $ = o.methodLevel, F = o.methodValue, q = o.val, _ = d._logEvent.bindings;
    l(
      p,
      d._serialize || Object.keys(d.serializers),
      d.serializers,
      d._stdErrSerialize === void 0 ? !0 : d._stdErrSerialize
    ), d._logEvent.ts = U, d._logEvent.messages = p.filter(function(T) {
      return _.indexOf(T) === -1;
    }), d._logEvent.level.label = $, d._logEvent.level.value = F, L($, d._logEvent, q), d._logEvent = b(_);
  }
  function b(d) {
    return {
      ts: 0,
      messages: [],
      bindings: d || [],
      level: { label: "", value: 0 }
    };
  }
  function w(d) {
    const o = {
      type: d.constructor.name,
      msg: d.message,
      stack: d.stack
    };
    for (const p in d)
      o[p] === void 0 && (o[p] = d[p]);
    return o;
  }
  function S(d) {
    return typeof d.timestamp == "function" ? d.timestamp : d.timestamp === !1 ? M : E;
  }
  function D() {
    return {};
  }
  function x(d) {
    return d;
  }
  function P() {
  }
  function M() {
    return !1;
  }
  function E() {
    return Date.now();
  }
  function I() {
    return Math.round(Date.now() / 1e3);
  }
  function g() {
    return new Date(Date.now()).toISOString();
  }
  function m() {
    function d(o) {
      return typeof o < "u" && o;
    }
    try {
      return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
        get: function() {
          return delete Object.prototype.globalThis, this.globalThis = this;
        },
        configurable: !0
      }), globalThis;
    } catch {
      return d(self) || d(window) || d(this) || {};
    }
  }
  return Cn;
}
var Rr = {}, Xo;
function Nc() {
  return Xo || (Xo = 1, Object.defineProperty(Rr, "__esModule", { value: !0 }), Rr.PINO_CUSTOM_CONTEXT_KEY = Rr.PINO_LOGGER_DEFAULTS = void 0, Rr.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, Rr.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), Rr;
}
var Dt = {}, Qo;
function Hf() {
  if (Qo)
    return Dt;
  Qo = 1, Object.defineProperty(Dt, "__esModule", { value: !0 }), Dt.generateChildLogger = Dt.formatChildLoggerContext = Dt.getLoggerContext = Dt.setBrowserLoggerContext = Dt.getBrowserLoggerContext = Dt.getDefaultLoggerOptions = void 0;
  const e = Nc();
  function t(a) {
    return Object.assign(Object.assign({}, a), { level: (a == null ? void 0 : a.level) || e.PINO_LOGGER_DEFAULTS.level });
  }
  Dt.getDefaultLoggerOptions = t;
  function r(a, l = e.PINO_CUSTOM_CONTEXT_KEY) {
    return a[l] || "";
  }
  Dt.getBrowserLoggerContext = r;
  function i(a, l, f = e.PINO_CUSTOM_CONTEXT_KEY) {
    return a[f] = l, a;
  }
  Dt.setBrowserLoggerContext = i;
  function n(a, l = e.PINO_CUSTOM_CONTEXT_KEY) {
    let f = "";
    return typeof a.bindings > "u" ? f = r(a, l) : f = a.bindings().context || "", f;
  }
  Dt.getLoggerContext = n;
  function s(a, l, f = e.PINO_CUSTOM_CONTEXT_KEY) {
    const h = n(a, f);
    return h.trim() ? `${h}/${l}` : l;
  }
  Dt.formatChildLoggerContext = s;
  function u(a, l, f = e.PINO_CUSTOM_CONTEXT_KEY) {
    const h = s(a, l, f), b = a.child({ context: h });
    return i(b, h, f);
  }
  return Dt.generateChildLogger = u, Dt;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.pino = void 0;
  const t = Kt, r = t.__importDefault(Wf());
  Object.defineProperty(e, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), t.__exportStar(Nc(), e), t.__exportStar(Hf(), e);
})(Te);
let Gf = class extends Ur {
  constructor(t) {
    super(), this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, Yf = class extends Ur {
  constructor(t, r) {
    super(), this.core = t, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}, Jf = class {
  constructor(t, r) {
    this.logger = t, this.core = r;
  }
}, Xf = class extends Ur {
  constructor(t, r) {
    super(), this.relayer = t, this.logger = r;
  }
}, Qf = class extends Ur {
  constructor(t) {
    super();
  }
}, Zf = class {
  constructor(t, r, i, n) {
    this.core = t, this.logger = r, this.name = i;
  }
}, eh = class extends Ur {
  constructor(t, r) {
    super(), this.relayer = t, this.logger = r;
  }
}, th = class extends Ur {
  constructor(t, r) {
    super(), this.core = t, this.logger = r;
  }
}, rh = class {
  constructor(t, r) {
    this.projectId = t, this.logger = r;
  }
}, ih = class {
  constructor(t) {
    this.opts = t, this.protocol = "wc", this.version = 2;
  }
}, nh = class {
  constructor(t) {
    this.client = t;
  }
};
const sh = (e) => JSON.stringify(e, (t, r) => typeof r == "bigint" ? r.toString() + "n" : r), oh = (e) => {
  const t = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, r = e.replace(t, '$1"$2n"$3');
  return JSON.parse(r, (i, n) => typeof n == "string" && n.match(/^\d+n$/) ? BigInt(n.substring(0, n.length - 1)) : n);
};
function Lc(e) {
  if (typeof e != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof e}`);
  try {
    return oh(e);
  } catch {
    return e;
  }
}
function Rs(e) {
  return typeof e == "string" ? e : sh(e) || "";
}
var As = {}, Zr = {}, ln = {}, fn = {};
Object.defineProperty(fn, "__esModule", { value: !0 });
fn.BrowserRandomSource = void 0;
const Zo = 65536;
class ah {
  constructor() {
    this.isAvailable = !1, this.isInstantiated = !1;
    const t = typeof self < "u" ? self.crypto || self.msCrypto : null;
    t && t.getRandomValues !== void 0 && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0);
  }
  randomBytes(t) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const r = new Uint8Array(t);
    for (let i = 0; i < r.length; i += Zo)
      this._crypto.getRandomValues(r.subarray(i, i + Math.min(r.length - i, Zo)));
    return r;
  }
}
fn.BrowserRandomSource = ah;
function ch(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var hn = {}, Ft = {};
Object.defineProperty(Ft, "__esModule", { value: !0 });
function uh(e) {
  for (var t = 0; t < e.length; t++)
    e[t] = 0;
  return e;
}
Ft.wipe = uh;
const lh = {}, fh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lh
}, Symbol.toStringTag, { value: "Module" })), hh = /* @__PURE__ */ Is(fh);
Object.defineProperty(hn, "__esModule", { value: !0 });
hn.NodeRandomSource = void 0;
const dh = Ft;
class ph {
  constructor() {
    if (this.isAvailable = !1, this.isInstantiated = !1, typeof ch < "u") {
      const t = hh;
      t && t.randomBytes && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0);
    }
  }
  randomBytes(t) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Node.js random byte generator is not available.");
    let r = this._crypto.randomBytes(t);
    if (r.length !== t)
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    const i = new Uint8Array(t);
    for (let n = 0; n < i.length; n++)
      i[n] = r[n];
    return (0, dh.wipe)(r), i;
  }
}
hn.NodeRandomSource = ph;
Object.defineProperty(ln, "__esModule", { value: !0 });
ln.SystemRandomSource = void 0;
const gh = fn, yh = hn;
class bh {
  constructor() {
    if (this.isAvailable = !1, this.name = "", this._source = new gh.BrowserRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Browser";
      return;
    }
    if (this._source = new yh.NodeRandomSource(), this._source.isAvailable) {
      this.isAvailable = !0, this.name = "Node";
      return;
    }
  }
  randomBytes(t) {
    if (!this.isAvailable)
      throw new Error("System random byte generator is not available.");
    return this._source.randomBytes(t);
  }
}
ln.SystemRandomSource = bh;
var le = {}, Uc = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  function t(a, l) {
    var f = a >>> 16 & 65535, h = a & 65535, b = l >>> 16 & 65535, w = l & 65535;
    return h * w + (f * w + h * b << 16 >>> 0) | 0;
  }
  e.mul = Math.imul || t;
  function r(a, l) {
    return a + l | 0;
  }
  e.add = r;
  function i(a, l) {
    return a - l | 0;
  }
  e.sub = i;
  function n(a, l) {
    return a << l | a >>> 32 - l;
  }
  e.rotl = n;
  function s(a, l) {
    return a << 32 - l | a >>> l;
  }
  e.rotr = s;
  function u(a) {
    return typeof a == "number" && isFinite(a) && Math.floor(a) === a;
  }
  e.isInteger = Number.isInteger || u, e.MAX_SAFE_INTEGER = 9007199254740991, e.isSafeInteger = function(a) {
    return e.isInteger(a) && a >= -e.MAX_SAFE_INTEGER && a <= e.MAX_SAFE_INTEGER;
  };
})(Uc);
Object.defineProperty(le, "__esModule", { value: !0 });
var $c = Uc;
function vh(e, t) {
  return t === void 0 && (t = 0), (e[t + 0] << 8 | e[t + 1]) << 16 >> 16;
}
le.readInt16BE = vh;
function mh(e, t) {
  return t === void 0 && (t = 0), (e[t + 0] << 8 | e[t + 1]) >>> 0;
}
le.readUint16BE = mh;
function _h(e, t) {
  return t === void 0 && (t = 0), (e[t + 1] << 8 | e[t]) << 16 >> 16;
}
le.readInt16LE = _h;
function wh(e, t) {
  return t === void 0 && (t = 0), (e[t + 1] << 8 | e[t]) >>> 0;
}
le.readUint16LE = wh;
function Fc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(2)), r === void 0 && (r = 0), t[r + 0] = e >>> 8, t[r + 1] = e >>> 0, t;
}
le.writeUint16BE = Fc;
le.writeInt16BE = Fc;
function Mc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(2)), r === void 0 && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t;
}
le.writeUint16LE = Mc;
le.writeInt16LE = Mc;
function rs(e, t) {
  return t === void 0 && (t = 0), e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
}
le.readInt32BE = rs;
function is(e, t) {
  return t === void 0 && (t = 0), (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
}
le.readUint32BE = is;
function ns(e, t) {
  return t === void 0 && (t = 0), e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
}
le.readInt32LE = ns;
function ss(e, t) {
  return t === void 0 && (t = 0), (e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]) >>> 0;
}
le.readUint32LE = ss;
function Ji(e, t, r) {
  return t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0), t[r + 0] = e >>> 24, t[r + 1] = e >>> 16, t[r + 2] = e >>> 8, t[r + 3] = e >>> 0, t;
}
le.writeUint32BE = Ji;
le.writeInt32BE = Ji;
function Xi(e, t, r) {
  return t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t[r + 2] = e >>> 16, t[r + 3] = e >>> 24, t;
}
le.writeUint32LE = Xi;
le.writeInt32LE = Xi;
function Eh(e, t) {
  t === void 0 && (t = 0);
  var r = rs(e, t), i = rs(e, t + 4);
  return r * 4294967296 + i - (i >> 31) * 4294967296;
}
le.readInt64BE = Eh;
function Sh(e, t) {
  t === void 0 && (t = 0);
  var r = is(e, t), i = is(e, t + 4);
  return r * 4294967296 + i;
}
le.readUint64BE = Sh;
function Dh(e, t) {
  t === void 0 && (t = 0);
  var r = ns(e, t), i = ns(e, t + 4);
  return i * 4294967296 + r - (r >> 31) * 4294967296;
}
le.readInt64LE = Dh;
function Oh(e, t) {
  t === void 0 && (t = 0);
  var r = ss(e, t), i = ss(e, t + 4);
  return i * 4294967296 + r;
}
le.readUint64LE = Oh;
function jc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0), Ji(e / 4294967296 >>> 0, t, r), Ji(e >>> 0, t, r + 4), t;
}
le.writeUint64BE = jc;
le.writeInt64BE = jc;
function Bc(e, t, r) {
  return t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0), Xi(e >>> 0, t, r), Xi(e / 4294967296 >>> 0, t, r + 4), t;
}
le.writeUint64LE = Bc;
le.writeInt64LE = Bc;
function Ih(e, t, r) {
  if (r === void 0 && (r = 0), e % 8 !== 0)
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - r)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var i = 0, n = 1, s = e / 8 + r - 1; s >= r; s--)
    i += t[s] * n, n *= 256;
  return i;
}
le.readUintBE = Ih;
function xh(e, t, r) {
  if (r === void 0 && (r = 0), e % 8 !== 0)
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (e / 8 > t.length - r)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var i = 0, n = 1, s = r; s < r + e / 8; s++)
    i += t[s] * n, n *= 256;
  return i;
}
le.readUintLE = xh;
function Rh(e, t, r, i) {
  if (r === void 0 && (r = new Uint8Array(e / 8)), i === void 0 && (i = 0), e % 8 !== 0)
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!$c.isSafeInteger(t))
    throw new Error("writeUintBE value must be an integer");
  for (var n = 1, s = e / 8 + i - 1; s >= i; s--)
    r[s] = t / n & 255, n *= 256;
  return r;
}
le.writeUintBE = Rh;
function Ah(e, t, r, i) {
  if (r === void 0 && (r = new Uint8Array(e / 8)), i === void 0 && (i = 0), e % 8 !== 0)
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!$c.isSafeInteger(t))
    throw new Error("writeUintLE value must be an integer");
  for (var n = 1, s = i; s < i + e / 8; s++)
    r[s] = t / n & 255, n *= 256;
  return r;
}
le.writeUintLE = Ah;
function Th(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat32(t);
}
le.readFloat32BE = Th;
function Ch(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat32(t, !0);
}
le.readFloat32LE = Ch;
function Ph(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat64(t);
}
le.readFloat64BE = Ph;
function Nh(e, t) {
  t === void 0 && (t = 0);
  var r = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return r.getFloat64(t, !0);
}
le.readFloat64LE = Nh;
function Lh(e, t, r) {
  t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat32(r, e), t;
}
le.writeFloat32BE = Lh;
function Uh(e, t, r) {
  t === void 0 && (t = new Uint8Array(4)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat32(r, e, !0), t;
}
le.writeFloat32LE = Uh;
function $h(e, t, r) {
  t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat64(r, e), t;
}
le.writeFloat64BE = $h;
function Fh(e, t, r) {
  t === void 0 && (t = new Uint8Array(8)), r === void 0 && (r = 0);
  var i = new DataView(t.buffer, t.byteOffset, t.byteLength);
  return i.setFloat64(r, e, !0), t;
}
le.writeFloat64LE = Fh;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.randomStringForEntropy = e.randomString = e.randomUint32 = e.randomBytes = e.defaultRandomSource = void 0;
  const t = ln, r = le, i = Ft;
  e.defaultRandomSource = new t.SystemRandomSource();
  function n(f, h = e.defaultRandomSource) {
    return h.randomBytes(f);
  }
  e.randomBytes = n;
  function s(f = e.defaultRandomSource) {
    const h = n(4, f), b = (0, r.readUint32LE)(h);
    return (0, i.wipe)(h), b;
  }
  e.randomUint32 = s;
  const u = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function a(f, h = u, b = e.defaultRandomSource) {
    if (h.length < 2)
      throw new Error("randomString charset is too short");
    if (h.length > 256)
      throw new Error("randomString charset is too long");
    let w = "";
    const S = h.length, D = 256 - 256 % S;
    for (; f > 0; ) {
      const x = n(Math.ceil(f * 256 / D), b);
      for (let P = 0; P < x.length && f > 0; P++) {
        const M = x[P];
        M < D && (w += h.charAt(M % S), f--);
      }
      (0, i.wipe)(x);
    }
    return w;
  }
  e.randomString = a;
  function l(f, h = u, b = e.defaultRandomSource) {
    const w = Math.ceil(f / (Math.log(h.length) / Math.LN2));
    return a(w, h, b);
  }
  e.randomStringForEntropy = l;
})(Zr);
var qc = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = le, r = Ft;
  e.DIGEST_LENGTH = 64, e.BLOCK_SIZE = 128;
  var i = (
    /** @class */
    function() {
      function a() {
        this.digestLength = e.DIGEST_LENGTH, this.blockSize = e.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return a.prototype._initState = function() {
        this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209;
      }, a.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, a.prototype.clean = function() {
        r.wipe(this._buffer), r.wipe(this._tempHi), r.wipe(this._tempLo), this.reset();
      }, a.prototype.update = function(l, f) {
        if (f === void 0 && (f = l.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var h = 0;
        if (this._bytesHashed += f, this._bufferLength > 0) {
          for (; this._bufferLength < e.BLOCK_SIZE && f > 0; )
            this._buffer[this._bufferLength++] = l[h++], f--;
          this._bufferLength === this.blockSize && (s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (f >= this.blockSize && (h = s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, l, h, f), f %= this.blockSize); f > 0; )
          this._buffer[this._bufferLength++] = l[h++], f--;
        return this;
      }, a.prototype.finish = function(l) {
        if (!this._finished) {
          var f = this._bytesHashed, h = this._bufferLength, b = f / 536870912 | 0, w = f << 3, S = f % 128 < 112 ? 128 : 256;
          this._buffer[h] = 128;
          for (var D = h + 1; D < S - 8; D++)
            this._buffer[D] = 0;
          t.writeUint32BE(b, this._buffer, S - 8), t.writeUint32BE(w, this._buffer, S - 4), s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, S), this._finished = !0;
        }
        for (var D = 0; D < this.digestLength / 8; D++)
          t.writeUint32BE(this._stateHi[D], l, D * 8), t.writeUint32BE(this._stateLo[D], l, D * 8 + 4);
        return this;
      }, a.prototype.digest = function() {
        var l = new Uint8Array(this.digestLength);
        return this.finish(l), l;
      }, a.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, a.prototype.restoreState = function(l) {
        return this._stateHi.set(l.stateHi), this._stateLo.set(l.stateLo), this._bufferLength = l.bufferLength, l.buffer && this._buffer.set(l.buffer), this._bytesHashed = l.bytesHashed, this._finished = !1, this;
      }, a.prototype.cleanSavedState = function(l) {
        r.wipe(l.stateHi), r.wipe(l.stateLo), l.buffer && r.wipe(l.buffer), l.bufferLength = 0, l.bytesHashed = 0;
      }, a;
    }()
  );
  e.SHA512 = i;
  var n = new Int32Array([
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
  function s(a, l, f, h, b, w, S) {
    for (var D = f[0], x = f[1], P = f[2], M = f[3], E = f[4], I = f[5], g = f[6], m = f[7], d = h[0], o = h[1], p = h[2], L = h[3], U = h[4], $ = h[5], F = h[6], q = h[7], _, T, G, V, z, k, B, W; S >= 128; ) {
      for (var oe = 0; oe < 16; oe++) {
        var H = 8 * oe + w;
        a[oe] = t.readUint32BE(b, H), l[oe] = t.readUint32BE(b, H + 4);
      }
      for (var oe = 0; oe < 80; oe++) {
        var ie = D, Z = x, re = P, N = M, C = E, R = I, c = g, O = m, Y = d, Q = o, be = p, ve = L, he = U, Ie = $, Be = F, Le = q;
        if (_ = m, T = q, z = T & 65535, k = T >>> 16, B = _ & 65535, W = _ >>> 16, _ = (E >>> 14 | U << 32 - 14) ^ (E >>> 18 | U << 32 - 18) ^ (U >>> 41 - 32 | E << 32 - (41 - 32)), T = (U >>> 14 | E << 32 - 14) ^ (U >>> 18 | E << 32 - 18) ^ (E >>> 41 - 32 | U << 32 - (41 - 32)), z += T & 65535, k += T >>> 16, B += _ & 65535, W += _ >>> 16, _ = E & I ^ ~E & g, T = U & $ ^ ~U & F, z += T & 65535, k += T >>> 16, B += _ & 65535, W += _ >>> 16, _ = n[oe * 2], T = n[oe * 2 + 1], z += T & 65535, k += T >>> 16, B += _ & 65535, W += _ >>> 16, _ = a[oe % 16], T = l[oe % 16], z += T & 65535, k += T >>> 16, B += _ & 65535, W += _ >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, G = B & 65535 | W << 16, V = z & 65535 | k << 16, _ = G, T = V, z = T & 65535, k = T >>> 16, B = _ & 65535, W = _ >>> 16, _ = (D >>> 28 | d << 32 - 28) ^ (d >>> 34 - 32 | D << 32 - (34 - 32)) ^ (d >>> 39 - 32 | D << 32 - (39 - 32)), T = (d >>> 28 | D << 32 - 28) ^ (D >>> 34 - 32 | d << 32 - (34 - 32)) ^ (D >>> 39 - 32 | d << 32 - (39 - 32)), z += T & 65535, k += T >>> 16, B += _ & 65535, W += _ >>> 16, _ = D & x ^ D & P ^ x & P, T = d & o ^ d & p ^ o & p, z += T & 65535, k += T >>> 16, B += _ & 65535, W += _ >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, O = B & 65535 | W << 16, Le = z & 65535 | k << 16, _ = N, T = ve, z = T & 65535, k = T >>> 16, B = _ & 65535, W = _ >>> 16, _ = G, T = V, z += T & 65535, k += T >>> 16, B += _ & 65535, W += _ >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, N = B & 65535 | W << 16, ve = z & 65535 | k << 16, x = ie, P = Z, M = re, E = N, I = C, g = R, m = c, D = O, o = Y, p = Q, L = be, U = ve, $ = he, F = Ie, q = Be, d = Le, oe % 16 === 15)
          for (var H = 0; H < 16; H++)
            _ = a[H], T = l[H], z = T & 65535, k = T >>> 16, B = _ & 65535, W = _ >>> 16, _ = a[(H + 9) % 16], T = l[(H + 9) % 16], z += T & 65535, k += T >>> 16, B += _ & 65535, W += _ >>> 16, G = a[(H + 1) % 16], V = l[(H + 1) % 16], _ = (G >>> 1 | V << 32 - 1) ^ (G >>> 8 | V << 32 - 8) ^ G >>> 7, T = (V >>> 1 | G << 32 - 1) ^ (V >>> 8 | G << 32 - 8) ^ (V >>> 7 | G << 32 - 7), z += T & 65535, k += T >>> 16, B += _ & 65535, W += _ >>> 16, G = a[(H + 14) % 16], V = l[(H + 14) % 16], _ = (G >>> 19 | V << 32 - 19) ^ (V >>> 61 - 32 | G << 32 - (61 - 32)) ^ G >>> 6, T = (V >>> 19 | G << 32 - 19) ^ (G >>> 61 - 32 | V << 32 - (61 - 32)) ^ (V >>> 6 | G << 32 - 6), z += T & 65535, k += T >>> 16, B += _ & 65535, W += _ >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, a[H] = B & 65535 | W << 16, l[H] = z & 65535 | k << 16;
      }
      _ = D, T = d, z = T & 65535, k = T >>> 16, B = _ & 65535, W = _ >>> 16, _ = f[0], T = h[0], z += T & 65535, k += T >>> 16, B += _ & 65535, W += _ >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, f[0] = D = B & 65535 | W << 16, h[0] = d = z & 65535 | k << 16, _ = x, T = o, z = T & 65535, k = T >>> 16, B = _ & 65535, W = _ >>> 16, _ = f[1], T = h[1], z += T & 65535, k += T >>> 16, B += _ & 65535, W += _ >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, f[1] = x = B & 65535 | W << 16, h[1] = o = z & 65535 | k << 16, _ = P, T = p, z = T & 65535, k = T >>> 16, B = _ & 65535, W = _ >>> 16, _ = f[2], T = h[2], z += T & 65535, k += T >>> 16, B += _ & 65535, W += _ >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, f[2] = P = B & 65535 | W << 16, h[2] = p = z & 65535 | k << 16, _ = M, T = L, z = T & 65535, k = T >>> 16, B = _ & 65535, W = _ >>> 16, _ = f[3], T = h[3], z += T & 65535, k += T >>> 16, B += _ & 65535, W += _ >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, f[3] = M = B & 65535 | W << 16, h[3] = L = z & 65535 | k << 16, _ = E, T = U, z = T & 65535, k = T >>> 16, B = _ & 65535, W = _ >>> 16, _ = f[4], T = h[4], z += T & 65535, k += T >>> 16, B += _ & 65535, W += _ >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, f[4] = E = B & 65535 | W << 16, h[4] = U = z & 65535 | k << 16, _ = I, T = $, z = T & 65535, k = T >>> 16, B = _ & 65535, W = _ >>> 16, _ = f[5], T = h[5], z += T & 65535, k += T >>> 16, B += _ & 65535, W += _ >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, f[5] = I = B & 65535 | W << 16, h[5] = $ = z & 65535 | k << 16, _ = g, T = F, z = T & 65535, k = T >>> 16, B = _ & 65535, W = _ >>> 16, _ = f[6], T = h[6], z += T & 65535, k += T >>> 16, B += _ & 65535, W += _ >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, f[6] = g = B & 65535 | W << 16, h[6] = F = z & 65535 | k << 16, _ = m, T = q, z = T & 65535, k = T >>> 16, B = _ & 65535, W = _ >>> 16, _ = f[7], T = h[7], z += T & 65535, k += T >>> 16, B += _ & 65535, W += _ >>> 16, k += z >>> 16, B += k >>> 16, W += B >>> 16, f[7] = m = B & 65535 | W << 16, h[7] = q = z & 65535 | k << 16, w += 128, S -= 128;
    }
    return w;
  }
  function u(a) {
    var l = new i();
    l.update(a);
    var f = l.digest();
    return l.clean(), f;
  }
  e.hash = u;
})(qc);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.convertSecretKeyToX25519 = e.convertPublicKeyToX25519 = e.verify = e.sign = e.extractPublicKeyFromSecretKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.SEED_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = e.SIGNATURE_LENGTH = void 0;
  const t = Zr, r = qc, i = Ft;
  e.SIGNATURE_LENGTH = 64, e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 64, e.SEED_LENGTH = 32;
  function n(N) {
    const C = new Float64Array(16);
    if (N)
      for (let R = 0; R < N.length; R++)
        C[R] = N[R];
    return C;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const u = n(), a = n([1]), l = n([
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
  ]), f = n([
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
  ]), h = n([
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
  ]), b = n([
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
  ]), w = n([
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
  function S(N, C) {
    for (let R = 0; R < 16; R++)
      N[R] = C[R] | 0;
  }
  function D(N) {
    let C = 1;
    for (let R = 0; R < 16; R++) {
      let c = N[R] + C + 65535;
      C = Math.floor(c / 65536), N[R] = c - C * 65536;
    }
    N[0] += C - 1 + 37 * (C - 1);
  }
  function x(N, C, R) {
    const c = ~(R - 1);
    for (let O = 0; O < 16; O++) {
      const Y = c & (N[O] ^ C[O]);
      N[O] ^= Y, C[O] ^= Y;
    }
  }
  function P(N, C) {
    const R = n(), c = n();
    for (let O = 0; O < 16; O++)
      c[O] = C[O];
    D(c), D(c), D(c);
    for (let O = 0; O < 2; O++) {
      R[0] = c[0] - 65517;
      for (let Q = 1; Q < 15; Q++)
        R[Q] = c[Q] - 65535 - (R[Q - 1] >> 16 & 1), R[Q - 1] &= 65535;
      R[15] = c[15] - 32767 - (R[14] >> 16 & 1);
      const Y = R[15] >> 16 & 1;
      R[14] &= 65535, x(c, R, 1 - Y);
    }
    for (let O = 0; O < 16; O++)
      N[2 * O] = c[O] & 255, N[2 * O + 1] = c[O] >> 8;
  }
  function M(N, C) {
    let R = 0;
    for (let c = 0; c < 32; c++)
      R |= N[c] ^ C[c];
    return (1 & R - 1 >>> 8) - 1;
  }
  function E(N, C) {
    const R = new Uint8Array(32), c = new Uint8Array(32);
    return P(R, N), P(c, C), M(R, c);
  }
  function I(N) {
    const C = new Uint8Array(32);
    return P(C, N), C[0] & 1;
  }
  function g(N, C) {
    for (let R = 0; R < 16; R++)
      N[R] = C[2 * R] + (C[2 * R + 1] << 8);
    N[15] &= 32767;
  }
  function m(N, C, R) {
    for (let c = 0; c < 16; c++)
      N[c] = C[c] + R[c];
  }
  function d(N, C, R) {
    for (let c = 0; c < 16; c++)
      N[c] = C[c] - R[c];
  }
  function o(N, C, R) {
    let c, O, Y = 0, Q = 0, be = 0, ve = 0, he = 0, Ie = 0, Be = 0, Le = 0, De = 0, we = 0, de = 0, ge = 0, pe = 0, ue = 0, ce = 0, ne = 0, ye = 0, me = 0, ae = 0, Ee = 0, xe = 0, Ce = 0, Pe = 0, Re = 0, Ct = 0, Mt = 0, Qt = 0, ft = 0, Zt = 0, jt = 0, lr = 0, qe = R[0], Fe = R[1], We = R[2], Ve = R[3], He = R[4], Me = R[5], Qe = R[6], tt = R[7], rt = R[8], Ze = R[9], it = R[10], et = R[11], Ge = R[12], Ue = R[13], v = R[14], j = R[15];
    c = C[0], Y += c * qe, Q += c * Fe, be += c * We, ve += c * Ve, he += c * He, Ie += c * Me, Be += c * Qe, Le += c * tt, De += c * rt, we += c * Ze, de += c * it, ge += c * et, pe += c * Ge, ue += c * Ue, ce += c * v, ne += c * j, c = C[1], Q += c * qe, be += c * Fe, ve += c * We, he += c * Ve, Ie += c * He, Be += c * Me, Le += c * Qe, De += c * tt, we += c * rt, de += c * Ze, ge += c * it, pe += c * et, ue += c * Ge, ce += c * Ue, ne += c * v, ye += c * j, c = C[2], be += c * qe, ve += c * Fe, he += c * We, Ie += c * Ve, Be += c * He, Le += c * Me, De += c * Qe, we += c * tt, de += c * rt, ge += c * Ze, pe += c * it, ue += c * et, ce += c * Ge, ne += c * Ue, ye += c * v, me += c * j, c = C[3], ve += c * qe, he += c * Fe, Ie += c * We, Be += c * Ve, Le += c * He, De += c * Me, we += c * Qe, de += c * tt, ge += c * rt, pe += c * Ze, ue += c * it, ce += c * et, ne += c * Ge, ye += c * Ue, me += c * v, ae += c * j, c = C[4], he += c * qe, Ie += c * Fe, Be += c * We, Le += c * Ve, De += c * He, we += c * Me, de += c * Qe, ge += c * tt, pe += c * rt, ue += c * Ze, ce += c * it, ne += c * et, ye += c * Ge, me += c * Ue, ae += c * v, Ee += c * j, c = C[5], Ie += c * qe, Be += c * Fe, Le += c * We, De += c * Ve, we += c * He, de += c * Me, ge += c * Qe, pe += c * tt, ue += c * rt, ce += c * Ze, ne += c * it, ye += c * et, me += c * Ge, ae += c * Ue, Ee += c * v, xe += c * j, c = C[6], Be += c * qe, Le += c * Fe, De += c * We, we += c * Ve, de += c * He, ge += c * Me, pe += c * Qe, ue += c * tt, ce += c * rt, ne += c * Ze, ye += c * it, me += c * et, ae += c * Ge, Ee += c * Ue, xe += c * v, Ce += c * j, c = C[7], Le += c * qe, De += c * Fe, we += c * We, de += c * Ve, ge += c * He, pe += c * Me, ue += c * Qe, ce += c * tt, ne += c * rt, ye += c * Ze, me += c * it, ae += c * et, Ee += c * Ge, xe += c * Ue, Ce += c * v, Pe += c * j, c = C[8], De += c * qe, we += c * Fe, de += c * We, ge += c * Ve, pe += c * He, ue += c * Me, ce += c * Qe, ne += c * tt, ye += c * rt, me += c * Ze, ae += c * it, Ee += c * et, xe += c * Ge, Ce += c * Ue, Pe += c * v, Re += c * j, c = C[9], we += c * qe, de += c * Fe, ge += c * We, pe += c * Ve, ue += c * He, ce += c * Me, ne += c * Qe, ye += c * tt, me += c * rt, ae += c * Ze, Ee += c * it, xe += c * et, Ce += c * Ge, Pe += c * Ue, Re += c * v, Ct += c * j, c = C[10], de += c * qe, ge += c * Fe, pe += c * We, ue += c * Ve, ce += c * He, ne += c * Me, ye += c * Qe, me += c * tt, ae += c * rt, Ee += c * Ze, xe += c * it, Ce += c * et, Pe += c * Ge, Re += c * Ue, Ct += c * v, Mt += c * j, c = C[11], ge += c * qe, pe += c * Fe, ue += c * We, ce += c * Ve, ne += c * He, ye += c * Me, me += c * Qe, ae += c * tt, Ee += c * rt, xe += c * Ze, Ce += c * it, Pe += c * et, Re += c * Ge, Ct += c * Ue, Mt += c * v, Qt += c * j, c = C[12], pe += c * qe, ue += c * Fe, ce += c * We, ne += c * Ve, ye += c * He, me += c * Me, ae += c * Qe, Ee += c * tt, xe += c * rt, Ce += c * Ze, Pe += c * it, Re += c * et, Ct += c * Ge, Mt += c * Ue, Qt += c * v, ft += c * j, c = C[13], ue += c * qe, ce += c * Fe, ne += c * We, ye += c * Ve, me += c * He, ae += c * Me, Ee += c * Qe, xe += c * tt, Ce += c * rt, Pe += c * Ze, Re += c * it, Ct += c * et, Mt += c * Ge, Qt += c * Ue, ft += c * v, Zt += c * j, c = C[14], ce += c * qe, ne += c * Fe, ye += c * We, me += c * Ve, ae += c * He, Ee += c * Me, xe += c * Qe, Ce += c * tt, Pe += c * rt, Re += c * Ze, Ct += c * it, Mt += c * et, Qt += c * Ge, ft += c * Ue, Zt += c * v, jt += c * j, c = C[15], ne += c * qe, ye += c * Fe, me += c * We, ae += c * Ve, Ee += c * He, xe += c * Me, Ce += c * Qe, Pe += c * tt, Re += c * rt, Ct += c * Ze, Mt += c * it, Qt += c * et, ft += c * Ge, Zt += c * Ue, jt += c * v, lr += c * j, Y += 38 * ye, Q += 38 * me, be += 38 * ae, ve += 38 * Ee, he += 38 * xe, Ie += 38 * Ce, Be += 38 * Pe, Le += 38 * Re, De += 38 * Ct, we += 38 * Mt, de += 38 * Qt, ge += 38 * ft, pe += 38 * Zt, ue += 38 * jt, ce += 38 * lr, O = 1, c = Y + O + 65535, O = Math.floor(c / 65536), Y = c - O * 65536, c = Q + O + 65535, O = Math.floor(c / 65536), Q = c - O * 65536, c = be + O + 65535, O = Math.floor(c / 65536), be = c - O * 65536, c = ve + O + 65535, O = Math.floor(c / 65536), ve = c - O * 65536, c = he + O + 65535, O = Math.floor(c / 65536), he = c - O * 65536, c = Ie + O + 65535, O = Math.floor(c / 65536), Ie = c - O * 65536, c = Be + O + 65535, O = Math.floor(c / 65536), Be = c - O * 65536, c = Le + O + 65535, O = Math.floor(c / 65536), Le = c - O * 65536, c = De + O + 65535, O = Math.floor(c / 65536), De = c - O * 65536, c = we + O + 65535, O = Math.floor(c / 65536), we = c - O * 65536, c = de + O + 65535, O = Math.floor(c / 65536), de = c - O * 65536, c = ge + O + 65535, O = Math.floor(c / 65536), ge = c - O * 65536, c = pe + O + 65535, O = Math.floor(c / 65536), pe = c - O * 65536, c = ue + O + 65535, O = Math.floor(c / 65536), ue = c - O * 65536, c = ce + O + 65535, O = Math.floor(c / 65536), ce = c - O * 65536, c = ne + O + 65535, O = Math.floor(c / 65536), ne = c - O * 65536, Y += O - 1 + 37 * (O - 1), O = 1, c = Y + O + 65535, O = Math.floor(c / 65536), Y = c - O * 65536, c = Q + O + 65535, O = Math.floor(c / 65536), Q = c - O * 65536, c = be + O + 65535, O = Math.floor(c / 65536), be = c - O * 65536, c = ve + O + 65535, O = Math.floor(c / 65536), ve = c - O * 65536, c = he + O + 65535, O = Math.floor(c / 65536), he = c - O * 65536, c = Ie + O + 65535, O = Math.floor(c / 65536), Ie = c - O * 65536, c = Be + O + 65535, O = Math.floor(c / 65536), Be = c - O * 65536, c = Le + O + 65535, O = Math.floor(c / 65536), Le = c - O * 65536, c = De + O + 65535, O = Math.floor(c / 65536), De = c - O * 65536, c = we + O + 65535, O = Math.floor(c / 65536), we = c - O * 65536, c = de + O + 65535, O = Math.floor(c / 65536), de = c - O * 65536, c = ge + O + 65535, O = Math.floor(c / 65536), ge = c - O * 65536, c = pe + O + 65535, O = Math.floor(c / 65536), pe = c - O * 65536, c = ue + O + 65535, O = Math.floor(c / 65536), ue = c - O * 65536, c = ce + O + 65535, O = Math.floor(c / 65536), ce = c - O * 65536, c = ne + O + 65535, O = Math.floor(c / 65536), ne = c - O * 65536, Y += O - 1 + 37 * (O - 1), N[0] = Y, N[1] = Q, N[2] = be, N[3] = ve, N[4] = he, N[5] = Ie, N[6] = Be, N[7] = Le, N[8] = De, N[9] = we, N[10] = de, N[11] = ge, N[12] = pe, N[13] = ue, N[14] = ce, N[15] = ne;
  }
  function p(N, C) {
    o(N, C, C);
  }
  function L(N, C) {
    const R = n();
    let c;
    for (c = 0; c < 16; c++)
      R[c] = C[c];
    for (c = 253; c >= 0; c--)
      p(R, R), c !== 2 && c !== 4 && o(R, R, C);
    for (c = 0; c < 16; c++)
      N[c] = R[c];
  }
  function U(N, C) {
    const R = n();
    let c;
    for (c = 0; c < 16; c++)
      R[c] = C[c];
    for (c = 250; c >= 0; c--)
      p(R, R), c !== 1 && o(R, R, C);
    for (c = 0; c < 16; c++)
      N[c] = R[c];
  }
  function $(N, C) {
    const R = n(), c = n(), O = n(), Y = n(), Q = n(), be = n(), ve = n(), he = n(), Ie = n();
    d(R, N[1], N[0]), d(Ie, C[1], C[0]), o(R, R, Ie), m(c, N[0], N[1]), m(Ie, C[0], C[1]), o(c, c, Ie), o(O, N[3], C[3]), o(O, O, f), o(Y, N[2], C[2]), m(Y, Y, Y), d(Q, c, R), d(be, Y, O), m(ve, Y, O), m(he, c, R), o(N[0], Q, be), o(N[1], he, ve), o(N[2], ve, be), o(N[3], Q, he);
  }
  function F(N, C, R) {
    for (let c = 0; c < 4; c++)
      x(N[c], C[c], R);
  }
  function q(N, C) {
    const R = n(), c = n(), O = n();
    L(O, C[2]), o(R, C[0], O), o(c, C[1], O), P(N, c), N[31] ^= I(R) << 7;
  }
  function _(N, C, R) {
    S(N[0], u), S(N[1], a), S(N[2], a), S(N[3], u);
    for (let c = 255; c >= 0; --c) {
      const O = R[c / 8 | 0] >> (c & 7) & 1;
      F(N, C, O), $(C, N), $(N, N), F(N, C, O);
    }
  }
  function T(N, C) {
    const R = [n(), n(), n(), n()];
    S(R[0], h), S(R[1], b), S(R[2], a), o(R[3], h, b), _(N, R, C);
  }
  function G(N) {
    if (N.length !== e.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${e.SEED_LENGTH} bytes`);
    const C = (0, r.hash)(N);
    C[0] &= 248, C[31] &= 127, C[31] |= 64;
    const R = new Uint8Array(32), c = [n(), n(), n(), n()];
    T(c, C), q(R, c);
    const O = new Uint8Array(64);
    return O.set(N), O.set(R, 32), {
      publicKey: R,
      secretKey: O
    };
  }
  e.generateKeyPairFromSeed = G;
  function V(N) {
    const C = (0, t.randomBytes)(32, N), R = G(C);
    return (0, i.wipe)(C), R;
  }
  e.generateKeyPair = V;
  function z(N) {
    if (N.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${e.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(N.subarray(32));
  }
  e.extractPublicKeyFromSecretKey = z;
  const k = new Float64Array([
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
  function B(N, C) {
    let R, c, O, Y;
    for (c = 63; c >= 32; --c) {
      for (R = 0, O = c - 32, Y = c - 12; O < Y; ++O)
        C[O] += R - 16 * C[c] * k[O - (c - 32)], R = Math.floor((C[O] + 128) / 256), C[O] -= R * 256;
      C[O] += R, C[c] = 0;
    }
    for (R = 0, O = 0; O < 32; O++)
      C[O] += R - (C[31] >> 4) * k[O], R = C[O] >> 8, C[O] &= 255;
    for (O = 0; O < 32; O++)
      C[O] -= R * k[O];
    for (c = 0; c < 32; c++)
      C[c + 1] += C[c] >> 8, N[c] = C[c] & 255;
  }
  function W(N) {
    const C = new Float64Array(64);
    for (let R = 0; R < 64; R++)
      C[R] = N[R];
    for (let R = 0; R < 64; R++)
      N[R] = 0;
    B(N, C);
  }
  function oe(N, C) {
    const R = new Float64Array(64), c = [n(), n(), n(), n()], O = (0, r.hash)(N.subarray(0, 32));
    O[0] &= 248, O[31] &= 127, O[31] |= 64;
    const Y = new Uint8Array(64);
    Y.set(O.subarray(32), 32);
    const Q = new r.SHA512();
    Q.update(Y.subarray(32)), Q.update(C);
    const be = Q.digest();
    Q.clean(), W(be), T(c, be), q(Y, c), Q.reset(), Q.update(Y.subarray(0, 32)), Q.update(N.subarray(32)), Q.update(C);
    const ve = Q.digest();
    W(ve);
    for (let he = 0; he < 32; he++)
      R[he] = be[he];
    for (let he = 0; he < 32; he++)
      for (let Ie = 0; Ie < 32; Ie++)
        R[he + Ie] += ve[he] * O[Ie];
    return B(Y.subarray(32), R), Y;
  }
  e.sign = oe;
  function H(N, C) {
    const R = n(), c = n(), O = n(), Y = n(), Q = n(), be = n(), ve = n();
    return S(N[2], a), g(N[1], C), p(O, N[1]), o(Y, O, l), d(O, O, N[2]), m(Y, N[2], Y), p(Q, Y), p(be, Q), o(ve, be, Q), o(R, ve, O), o(R, R, Y), U(R, R), o(R, R, O), o(R, R, Y), o(R, R, Y), o(N[0], R, Y), p(c, N[0]), o(c, c, Y), E(c, O) && o(N[0], N[0], w), p(c, N[0]), o(c, c, Y), E(c, O) ? -1 : (I(N[0]) === C[31] >> 7 && d(N[0], u, N[0]), o(N[3], N[0], N[1]), 0);
  }
  function ie(N, C, R) {
    const c = new Uint8Array(32), O = [n(), n(), n(), n()], Y = [n(), n(), n(), n()];
    if (R.length !== e.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${e.SIGNATURE_LENGTH} bytes`);
    if (H(Y, N))
      return !1;
    const Q = new r.SHA512();
    Q.update(R.subarray(0, 32)), Q.update(N), Q.update(C);
    const be = Q.digest();
    return W(be), _(O, Y, be), T(Y, R.subarray(32)), $(O, Y), q(c, O), !M(R, c);
  }
  e.verify = ie;
  function Z(N) {
    let C = [n(), n(), n(), n()];
    if (H(C, N))
      throw new Error("Ed25519: invalid public key");
    let R = n(), c = n(), O = C[1];
    m(R, a, O), d(c, a, O), L(c, c), o(R, R, c);
    let Y = new Uint8Array(32);
    return P(Y, R), Y;
  }
  e.convertPublicKeyToX25519 = Z;
  function re(N) {
    const C = (0, r.hash)(N.subarray(0, 32));
    C[0] &= 248, C[31] &= 127, C[31] |= 64;
    const R = new Uint8Array(C.subarray(0, 32));
    return (0, i.wipe)(C), R;
  }
  e.convertSecretKeyToX25519 = re;
})(As);
const Mh = "EdDSA", jh = "JWT", zc = ".", Vc = "base64url", Bh = "utf8", qh = "utf8", zh = ":", Vh = "did", Kh = "key", ea = "base58btc", kh = "z", Wh = "K36", Hh = 32;
function Ts(e) {
  return globalThis.Buffer != null ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e;
}
function Kc(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Ts(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e);
}
function os(e, t) {
  t || (t = e.reduce((n, s) => n + s.length, 0));
  const r = Kc(t);
  let i = 0;
  for (const n of e)
    r.set(n, i), i += n.length;
  return Ts(r);
}
function Gh(e, t) {
  if (e.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), i = 0; i < r.length; i++)
    r[i] = 255;
  for (var n = 0; n < e.length; n++) {
    var s = e.charAt(n), u = s.charCodeAt(0);
    if (r[u] !== 255)
      throw new TypeError(s + " is ambiguous");
    r[u] = n;
  }
  var a = e.length, l = e.charAt(0), f = Math.log(a) / Math.log(256), h = Math.log(256) / Math.log(a);
  function b(D) {
    if (D instanceof Uint8Array || (ArrayBuffer.isView(D) ? D = new Uint8Array(D.buffer, D.byteOffset, D.byteLength) : Array.isArray(D) && (D = Uint8Array.from(D))), !(D instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (D.length === 0)
      return "";
    for (var x = 0, P = 0, M = 0, E = D.length; M !== E && D[M] === 0; )
      M++, x++;
    for (var I = (E - M) * h + 1 >>> 0, g = new Uint8Array(I); M !== E; ) {
      for (var m = D[M], d = 0, o = I - 1; (m !== 0 || d < P) && o !== -1; o--, d++)
        m += 256 * g[o] >>> 0, g[o] = m % a >>> 0, m = m / a >>> 0;
      if (m !== 0)
        throw new Error("Non-zero carry");
      P = d, M++;
    }
    for (var p = I - P; p !== I && g[p] === 0; )
      p++;
    for (var L = l.repeat(x); p < I; ++p)
      L += e.charAt(g[p]);
    return L;
  }
  function w(D) {
    if (typeof D != "string")
      throw new TypeError("Expected String");
    if (D.length === 0)
      return new Uint8Array();
    var x = 0;
    if (D[x] !== " ") {
      for (var P = 0, M = 0; D[x] === l; )
        P++, x++;
      for (var E = (D.length - x) * f + 1 >>> 0, I = new Uint8Array(E); D[x]; ) {
        var g = r[D.charCodeAt(x)];
        if (g === 255)
          return;
        for (var m = 0, d = E - 1; (g !== 0 || m < M) && d !== -1; d--, m++)
          g += a * I[d] >>> 0, I[d] = g % 256 >>> 0, g = g / 256 >>> 0;
        if (g !== 0)
          throw new Error("Non-zero carry");
        M = m, x++;
      }
      if (D[x] !== " ") {
        for (var o = E - M; o !== E && I[o] === 0; )
          o++;
        for (var p = new Uint8Array(P + (E - o)), L = P; o !== E; )
          p[L++] = I[o++];
        return p;
      }
    }
  }
  function S(D) {
    var x = w(D);
    if (x)
      return x;
    throw new Error(`Non-${t} character`);
  }
  return {
    encode: b,
    decodeUnsafe: w,
    decode: S
  };
}
var Yh = Gh, Jh = Yh;
const Xh = (e) => {
  if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
    return e;
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Qh = (e) => new TextEncoder().encode(e), Zh = (e) => new TextDecoder().decode(e);
class ed {
  constructor(t, r, i) {
    this.name = t, this.prefix = r, this.baseEncode = i;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class td {
  constructor(t, r, i) {
    if (this.name = t, this.prefix = r, r.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = i;
  }
  decode(t) {
    if (typeof t == "string") {
      if (t.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(t.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(t) {
    return kc(this, t);
  }
}
class rd {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return kc(this, t);
  }
  decode(t) {
    const r = t[0], i = this.decoders[r];
    if (i)
      return i.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const kc = (e, t) => new rd({
  ...e.decoders || { [e.prefix]: e },
  ...t.decoders || { [t.prefix]: t }
});
class id {
  constructor(t, r, i, n) {
    this.name = t, this.prefix = r, this.baseEncode = i, this.baseDecode = n, this.encoder = new ed(t, r, i), this.decoder = new td(t, r, n);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const dn = ({ name: e, prefix: t, encode: r, decode: i }) => new id(e, t, r, i), Ti = ({ prefix: e, name: t, alphabet: r }) => {
  const { encode: i, decode: n } = Jh(r, t);
  return dn({
    prefix: e,
    name: t,
    encode: i,
    decode: (s) => Xh(n(s))
  });
}, nd = (e, t, r, i) => {
  const n = {};
  for (let h = 0; h < t.length; ++h)
    n[t[h]] = h;
  let s = e.length;
  for (; e[s - 1] === "="; )
    --s;
  const u = new Uint8Array(s * r / 8 | 0);
  let a = 0, l = 0, f = 0;
  for (let h = 0; h < s; ++h) {
    const b = n[e[h]];
    if (b === void 0)
      throw new SyntaxError(`Non-${i} character`);
    l = l << r | b, a += r, a >= 8 && (a -= 8, u[f++] = 255 & l >> a);
  }
  if (a >= r || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return u;
}, sd = (e, t, r) => {
  const i = t[t.length - 1] === "=", n = (1 << r) - 1;
  let s = "", u = 0, a = 0;
  for (let l = 0; l < e.length; ++l)
    for (a = a << 8 | e[l], u += 8; u > r; )
      u -= r, s += t[n & a >> u];
  if (u && (s += t[n & a << r - u]), i)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, gt = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) => dn({
  prefix: t,
  name: e,
  encode(n) {
    return sd(n, i, r);
  },
  decode(n) {
    return nd(n, i, r, e);
  }
}), od = dn({
  prefix: "\0",
  name: "identity",
  encode: (e) => Zh(e),
  decode: (e) => Qh(e)
}), ad = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: od
}, Symbol.toStringTag, { value: "Module" })), cd = gt({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
}), ud = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2: cd
}, Symbol.toStringTag, { value: "Module" })), ld = gt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
}), fd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8: ld
}, Symbol.toStringTag, { value: "Module" })), hd = Ti({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
}), dd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10: hd
}, Symbol.toStringTag, { value: "Module" })), pd = gt({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
}), gd = gt({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
}), yd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16: pd,
  base16upper: gd
}, Symbol.toStringTag, { value: "Module" })), bd = gt({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
}), vd = gt({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
}), md = gt({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
}), _d = gt({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
}), wd = gt({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
}), Ed = gt({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
}), Sd = gt({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
}), Dd = gt({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
}), Od = gt({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
}), Id = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32: bd,
  base32hex: wd,
  base32hexpad: Sd,
  base32hexpadupper: Dd,
  base32hexupper: Ed,
  base32pad: md,
  base32padupper: _d,
  base32upper: vd,
  base32z: Od
}, Symbol.toStringTag, { value: "Module" })), xd = Ti({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
}), Rd = Ti({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}), Ad = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36: xd,
  base36upper: Rd
}, Symbol.toStringTag, { value: "Module" })), Td = Ti({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
}), Cd = Ti({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
}), Pd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc: Td,
  base58flickr: Cd
}, Symbol.toStringTag, { value: "Module" })), Nd = gt({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
}), Ld = gt({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
}), Ud = gt({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
}), $d = gt({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
}), Fd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: Nd,
  base64pad: Ld,
  base64url: Ud,
  base64urlpad: $d
}, Symbol.toStringTag, { value: "Module" })), Wc = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Md = Wc.reduce((e, t, r) => (e[r] = t, e), []), jd = Wc.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []);
function Bd(e) {
  return e.reduce((t, r) => (t += Md[r], t), "");
}
function qd(e) {
  const t = [];
  for (const r of e) {
    const i = jd[r.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    t.push(i);
  }
  return new Uint8Array(t);
}
const zd = dn({
  prefix: "🚀",
  name: "base256emoji",
  encode: Bd,
  decode: qd
}), Vd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji: zd
}, Symbol.toStringTag, { value: "Module" }));
new TextEncoder();
new TextDecoder();
const ta = {
  ...ad,
  ...ud,
  ...fd,
  ...dd,
  ...yd,
  ...Id,
  ...Ad,
  ...Pd,
  ...Fd,
  ...Vd
};
function Hc(e, t, r, i) {
  return {
    name: e,
    prefix: t,
    encoder: {
      name: e,
      prefix: t,
      encode: r
    },
    decoder: { decode: i }
  };
}
const ra = Hc("utf8", "u", (e) => "u" + new TextDecoder("utf8").decode(e), (e) => new TextEncoder().encode(e.substring(1))), Pn = Hc("ascii", "a", (e) => {
  let t = "a";
  for (let r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]);
  return t;
}, (e) => {
  e = e.substring(1);
  const t = Kc(e.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e.charCodeAt(r);
  return t;
}), Gc = {
  utf8: ra,
  "utf-8": ra,
  hex: ta.base16,
  latin1: Pn,
  ascii: Pn,
  binary: Pn,
  ...ta
};
function Rt(e, t = "utf8") {
  const r = Gc[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8") : r.encoder.encode(e).substring(1);
}
function Tt(e, t = "utf8") {
  const r = Gc[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Ts(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`);
}
function Qi(e) {
  return Rt(Tt(Rs(e), Bh), Vc);
}
function Yc(e) {
  const t = Tt(Wh, ea), r = kh + Rt(os([t, e]), ea);
  return [Vh, Kh, r].join(zh);
}
function Kd(e) {
  return Rt(e, Vc);
}
function kd(e) {
  return Tt([Qi(e.header), Qi(e.payload)].join(zc), qh);
}
function Wd(e) {
  return [
    Qi(e.header),
    Qi(e.payload),
    Kd(e.signature)
  ].join(zc);
}
function ia(e = Zr.randomBytes(Hh)) {
  return As.generateKeyPairFromSeed(e);
}
async function Hd(e, t, r, i, n = te.fromMiliseconds(Date.now())) {
  const s = { alg: Mh, typ: jh }, u = Yc(i.publicKey), a = n + r, l = { iss: u, sub: e, aud: t, iat: n, exp: a }, f = kd({ header: s, payload: l }), h = As.sign(i.secretKey, f);
  return Wd({ header: s, payload: l, signature: h });
}
var Cs = {}, pn = {};
Object.defineProperty(pn, "__esModule", { value: !0 });
var mt = le, as = Ft, Gd = 20;
function Yd(e, t, r) {
  for (var i = 1634760805, n = 857760878, s = 2036477234, u = 1797285236, a = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], l = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], f = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], h = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], b = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], w = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], S = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], D = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], x = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], P = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], M = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], E = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], I = i, g = n, m = s, d = u, o = a, p = l, L = f, U = h, $ = b, F = w, q = S, _ = D, T = x, G = P, V = M, z = E, k = 0; k < Gd; k += 2)
    I = I + o | 0, T ^= I, T = T >>> 32 - 16 | T << 16, $ = $ + T | 0, o ^= $, o = o >>> 32 - 12 | o << 12, g = g + p | 0, G ^= g, G = G >>> 32 - 16 | G << 16, F = F + G | 0, p ^= F, p = p >>> 32 - 12 | p << 12, m = m + L | 0, V ^= m, V = V >>> 32 - 16 | V << 16, q = q + V | 0, L ^= q, L = L >>> 32 - 12 | L << 12, d = d + U | 0, z ^= d, z = z >>> 32 - 16 | z << 16, _ = _ + z | 0, U ^= _, U = U >>> 32 - 12 | U << 12, m = m + L | 0, V ^= m, V = V >>> 32 - 8 | V << 8, q = q + V | 0, L ^= q, L = L >>> 32 - 7 | L << 7, d = d + U | 0, z ^= d, z = z >>> 32 - 8 | z << 8, _ = _ + z | 0, U ^= _, U = U >>> 32 - 7 | U << 7, g = g + p | 0, G ^= g, G = G >>> 32 - 8 | G << 8, F = F + G | 0, p ^= F, p = p >>> 32 - 7 | p << 7, I = I + o | 0, T ^= I, T = T >>> 32 - 8 | T << 8, $ = $ + T | 0, o ^= $, o = o >>> 32 - 7 | o << 7, I = I + p | 0, z ^= I, z = z >>> 32 - 16 | z << 16, q = q + z | 0, p ^= q, p = p >>> 32 - 12 | p << 12, g = g + L | 0, T ^= g, T = T >>> 32 - 16 | T << 16, _ = _ + T | 0, L ^= _, L = L >>> 32 - 12 | L << 12, m = m + U | 0, G ^= m, G = G >>> 32 - 16 | G << 16, $ = $ + G | 0, U ^= $, U = U >>> 32 - 12 | U << 12, d = d + o | 0, V ^= d, V = V >>> 32 - 16 | V << 16, F = F + V | 0, o ^= F, o = o >>> 32 - 12 | o << 12, m = m + U | 0, G ^= m, G = G >>> 32 - 8 | G << 8, $ = $ + G | 0, U ^= $, U = U >>> 32 - 7 | U << 7, d = d + o | 0, V ^= d, V = V >>> 32 - 8 | V << 8, F = F + V | 0, o ^= F, o = o >>> 32 - 7 | o << 7, g = g + L | 0, T ^= g, T = T >>> 32 - 8 | T << 8, _ = _ + T | 0, L ^= _, L = L >>> 32 - 7 | L << 7, I = I + p | 0, z ^= I, z = z >>> 32 - 8 | z << 8, q = q + z | 0, p ^= q, p = p >>> 32 - 7 | p << 7;
  mt.writeUint32LE(I + i | 0, e, 0), mt.writeUint32LE(g + n | 0, e, 4), mt.writeUint32LE(m + s | 0, e, 8), mt.writeUint32LE(d + u | 0, e, 12), mt.writeUint32LE(o + a | 0, e, 16), mt.writeUint32LE(p + l | 0, e, 20), mt.writeUint32LE(L + f | 0, e, 24), mt.writeUint32LE(U + h | 0, e, 28), mt.writeUint32LE($ + b | 0, e, 32), mt.writeUint32LE(F + w | 0, e, 36), mt.writeUint32LE(q + S | 0, e, 40), mt.writeUint32LE(_ + D | 0, e, 44), mt.writeUint32LE(T + x | 0, e, 48), mt.writeUint32LE(G + P | 0, e, 52), mt.writeUint32LE(V + M | 0, e, 56), mt.writeUint32LE(z + E | 0, e, 60);
}
function Jc(e, t, r, i, n) {
  if (n === void 0 && (n = 0), e.length !== 32)
    throw new Error("ChaCha: key size must be 32 bytes");
  if (i.length < r.length)
    throw new Error("ChaCha: destination is shorter than source");
  var s, u;
  if (n === 0) {
    if (t.length !== 8 && t.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    s = new Uint8Array(16), u = s.length - t.length, s.set(t, u);
  } else {
    if (t.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    s = t, u = n;
  }
  for (var a = new Uint8Array(64), l = 0; l < r.length; l += 64) {
    Yd(a, s, e);
    for (var f = l; f < l + 64 && f < r.length; f++)
      i[f] = r[f] ^ a[f - l];
    Xd(s, 0, u);
  }
  return as.wipe(a), n === 0 && as.wipe(s), i;
}
pn.streamXOR = Jc;
function Jd(e, t, r, i) {
  return i === void 0 && (i = 0), as.wipe(r), Jc(e, t, r, r, i);
}
pn.stream = Jd;
function Xd(e, t, r) {
  for (var i = 1; r--; )
    i = i + (e[t] & 255) | 0, e[t] = i & 255, i >>>= 8, t++;
  if (i > 0)
    throw new Error("ChaCha: counter overflow");
}
var Xc = {}, _r = {};
Object.defineProperty(_r, "__esModule", { value: !0 });
function Qd(e, t, r) {
  return ~(e - 1) & t | e - 1 & r;
}
_r.select = Qd;
function Zd(e, t) {
  return (e | 0) - (t | 0) - 1 >>> 31 & 1;
}
_r.lessOrEqual = Zd;
function Qc(e, t) {
  if (e.length !== t.length)
    return 0;
  for (var r = 0, i = 0; i < e.length; i++)
    r |= e[i] ^ t[i];
  return 1 & r - 1 >>> 8;
}
_r.compare = Qc;
function ep(e, t) {
  return e.length === 0 || t.length === 0 ? !1 : Qc(e, t) !== 0;
}
_r.equal = ep;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = _r, r = Ft;
  e.DIGEST_LENGTH = 16;
  var i = (
    /** @class */
    function() {
      function u(a) {
        this.digestLength = e.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var l = a[0] | a[1] << 8;
        this._r[0] = l & 8191;
        var f = a[2] | a[3] << 8;
        this._r[1] = (l >>> 13 | f << 3) & 8191;
        var h = a[4] | a[5] << 8;
        this._r[2] = (f >>> 10 | h << 6) & 7939;
        var b = a[6] | a[7] << 8;
        this._r[3] = (h >>> 7 | b << 9) & 8191;
        var w = a[8] | a[9] << 8;
        this._r[4] = (b >>> 4 | w << 12) & 255, this._r[5] = w >>> 1 & 8190;
        var S = a[10] | a[11] << 8;
        this._r[6] = (w >>> 14 | S << 2) & 8191;
        var D = a[12] | a[13] << 8;
        this._r[7] = (S >>> 11 | D << 5) & 8065;
        var x = a[14] | a[15] << 8;
        this._r[8] = (D >>> 8 | x << 8) & 8191, this._r[9] = x >>> 5 & 127, this._pad[0] = a[16] | a[17] << 8, this._pad[1] = a[18] | a[19] << 8, this._pad[2] = a[20] | a[21] << 8, this._pad[3] = a[22] | a[23] << 8, this._pad[4] = a[24] | a[25] << 8, this._pad[5] = a[26] | a[27] << 8, this._pad[6] = a[28] | a[29] << 8, this._pad[7] = a[30] | a[31] << 8;
      }
      return u.prototype._blocks = function(a, l, f) {
        for (var h = this._fin ? 0 : 2048, b = this._h[0], w = this._h[1], S = this._h[2], D = this._h[3], x = this._h[4], P = this._h[5], M = this._h[6], E = this._h[7], I = this._h[8], g = this._h[9], m = this._r[0], d = this._r[1], o = this._r[2], p = this._r[3], L = this._r[4], U = this._r[5], $ = this._r[6], F = this._r[7], q = this._r[8], _ = this._r[9]; f >= 16; ) {
          var T = a[l + 0] | a[l + 1] << 8;
          b += T & 8191;
          var G = a[l + 2] | a[l + 3] << 8;
          w += (T >>> 13 | G << 3) & 8191;
          var V = a[l + 4] | a[l + 5] << 8;
          S += (G >>> 10 | V << 6) & 8191;
          var z = a[l + 6] | a[l + 7] << 8;
          D += (V >>> 7 | z << 9) & 8191;
          var k = a[l + 8] | a[l + 9] << 8;
          x += (z >>> 4 | k << 12) & 8191, P += k >>> 1 & 8191;
          var B = a[l + 10] | a[l + 11] << 8;
          M += (k >>> 14 | B << 2) & 8191;
          var W = a[l + 12] | a[l + 13] << 8;
          E += (B >>> 11 | W << 5) & 8191;
          var oe = a[l + 14] | a[l + 15] << 8;
          I += (W >>> 8 | oe << 8) & 8191, g += oe >>> 5 | h;
          var H = 0, ie = H;
          ie += b * m, ie += w * (5 * _), ie += S * (5 * q), ie += D * (5 * F), ie += x * (5 * $), H = ie >>> 13, ie &= 8191, ie += P * (5 * U), ie += M * (5 * L), ie += E * (5 * p), ie += I * (5 * o), ie += g * (5 * d), H += ie >>> 13, ie &= 8191;
          var Z = H;
          Z += b * d, Z += w * m, Z += S * (5 * _), Z += D * (5 * q), Z += x * (5 * F), H = Z >>> 13, Z &= 8191, Z += P * (5 * $), Z += M * (5 * U), Z += E * (5 * L), Z += I * (5 * p), Z += g * (5 * o), H += Z >>> 13, Z &= 8191;
          var re = H;
          re += b * o, re += w * d, re += S * m, re += D * (5 * _), re += x * (5 * q), H = re >>> 13, re &= 8191, re += P * (5 * F), re += M * (5 * $), re += E * (5 * U), re += I * (5 * L), re += g * (5 * p), H += re >>> 13, re &= 8191;
          var N = H;
          N += b * p, N += w * o, N += S * d, N += D * m, N += x * (5 * _), H = N >>> 13, N &= 8191, N += P * (5 * q), N += M * (5 * F), N += E * (5 * $), N += I * (5 * U), N += g * (5 * L), H += N >>> 13, N &= 8191;
          var C = H;
          C += b * L, C += w * p, C += S * o, C += D * d, C += x * m, H = C >>> 13, C &= 8191, C += P * (5 * _), C += M * (5 * q), C += E * (5 * F), C += I * (5 * $), C += g * (5 * U), H += C >>> 13, C &= 8191;
          var R = H;
          R += b * U, R += w * L, R += S * p, R += D * o, R += x * d, H = R >>> 13, R &= 8191, R += P * m, R += M * (5 * _), R += E * (5 * q), R += I * (5 * F), R += g * (5 * $), H += R >>> 13, R &= 8191;
          var c = H;
          c += b * $, c += w * U, c += S * L, c += D * p, c += x * o, H = c >>> 13, c &= 8191, c += P * d, c += M * m, c += E * (5 * _), c += I * (5 * q), c += g * (5 * F), H += c >>> 13, c &= 8191;
          var O = H;
          O += b * F, O += w * $, O += S * U, O += D * L, O += x * p, H = O >>> 13, O &= 8191, O += P * o, O += M * d, O += E * m, O += I * (5 * _), O += g * (5 * q), H += O >>> 13, O &= 8191;
          var Y = H;
          Y += b * q, Y += w * F, Y += S * $, Y += D * U, Y += x * L, H = Y >>> 13, Y &= 8191, Y += P * p, Y += M * o, Y += E * d, Y += I * m, Y += g * (5 * _), H += Y >>> 13, Y &= 8191;
          var Q = H;
          Q += b * _, Q += w * q, Q += S * F, Q += D * $, Q += x * U, H = Q >>> 13, Q &= 8191, Q += P * L, Q += M * p, Q += E * o, Q += I * d, Q += g * m, H += Q >>> 13, Q &= 8191, H = (H << 2) + H | 0, H = H + ie | 0, ie = H & 8191, H = H >>> 13, Z += H, b = ie, w = Z, S = re, D = N, x = C, P = R, M = c, E = O, I = Y, g = Q, l += 16, f -= 16;
        }
        this._h[0] = b, this._h[1] = w, this._h[2] = S, this._h[3] = D, this._h[4] = x, this._h[5] = P, this._h[6] = M, this._h[7] = E, this._h[8] = I, this._h[9] = g;
      }, u.prototype.finish = function(a, l) {
        l === void 0 && (l = 0);
        var f = new Uint16Array(10), h, b, w, S;
        if (this._leftover) {
          for (S = this._leftover, this._buffer[S++] = 1; S < 16; S++)
            this._buffer[S] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (h = this._h[1] >>> 13, this._h[1] &= 8191, S = 2; S < 10; S++)
          this._h[S] += h, h = this._h[S] >>> 13, this._h[S] &= 8191;
        for (this._h[0] += h * 5, h = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += h, h = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += h, f[0] = this._h[0] + 5, h = f[0] >>> 13, f[0] &= 8191, S = 1; S < 10; S++)
          f[S] = this._h[S] + h, h = f[S] >>> 13, f[S] &= 8191;
        for (f[9] -= 8192, b = (h ^ 1) - 1, S = 0; S < 10; S++)
          f[S] &= b;
        for (b = ~b, S = 0; S < 10; S++)
          this._h[S] = this._h[S] & b | f[S];
        for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, w = this._h[0] + this._pad[0], this._h[0] = w & 65535, S = 1; S < 8; S++)
          w = (this._h[S] + this._pad[S] | 0) + (w >>> 16) | 0, this._h[S] = w & 65535;
        return a[l + 0] = this._h[0] >>> 0, a[l + 1] = this._h[0] >>> 8, a[l + 2] = this._h[1] >>> 0, a[l + 3] = this._h[1] >>> 8, a[l + 4] = this._h[2] >>> 0, a[l + 5] = this._h[2] >>> 8, a[l + 6] = this._h[3] >>> 0, a[l + 7] = this._h[3] >>> 8, a[l + 8] = this._h[4] >>> 0, a[l + 9] = this._h[4] >>> 8, a[l + 10] = this._h[5] >>> 0, a[l + 11] = this._h[5] >>> 8, a[l + 12] = this._h[6] >>> 0, a[l + 13] = this._h[6] >>> 8, a[l + 14] = this._h[7] >>> 0, a[l + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, u.prototype.update = function(a) {
        var l = 0, f = a.length, h;
        if (this._leftover) {
          h = 16 - this._leftover, h > f && (h = f);
          for (var b = 0; b < h; b++)
            this._buffer[this._leftover + b] = a[l + b];
          if (f -= h, l += h, this._leftover += h, this._leftover < 16)
            return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (f >= 16 && (h = f - f % 16, this._blocks(a, l, h), l += h, f -= h), f) {
          for (var b = 0; b < f; b++)
            this._buffer[this._leftover + b] = a[l + b];
          this._leftover += f;
        }
        return this;
      }, u.prototype.digest = function() {
        if (this._finished)
          throw new Error("Poly1305 was finished");
        var a = new Uint8Array(16);
        return this.finish(a), a;
      }, u.prototype.clean = function() {
        return r.wipe(this._buffer), r.wipe(this._r), r.wipe(this._h), r.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this;
      }, u;
    }()
  );
  e.Poly1305 = i;
  function n(u, a) {
    var l = new i(u);
    l.update(a);
    var f = l.digest();
    return l.clean(), f;
  }
  e.oneTimeAuth = n;
  function s(u, a) {
    return u.length !== e.DIGEST_LENGTH || a.length !== e.DIGEST_LENGTH ? !1 : t.equal(u, a);
  }
  e.equal = s;
})(Xc);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = pn, r = Xc, i = Ft, n = le, s = _r;
  e.KEY_LENGTH = 32, e.NONCE_LENGTH = 12, e.TAG_LENGTH = 16;
  var u = new Uint8Array(16), a = (
    /** @class */
    function() {
      function l(f) {
        if (this.nonceLength = e.NONCE_LENGTH, this.tagLength = e.TAG_LENGTH, f.length !== e.KEY_LENGTH)
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(f);
      }
      return l.prototype.seal = function(f, h, b, w) {
        if (f.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var S = new Uint8Array(16);
        S.set(f, S.length - f.length);
        var D = new Uint8Array(32);
        t.stream(this._key, S, D, 4);
        var x = h.length + this.tagLength, P;
        if (w) {
          if (w.length !== x)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          P = w;
        } else
          P = new Uint8Array(x);
        return t.streamXOR(this._key, S, h, P, 4), this._authenticate(P.subarray(P.length - this.tagLength, P.length), D, P.subarray(0, P.length - this.tagLength), b), i.wipe(S), P;
      }, l.prototype.open = function(f, h, b, w) {
        if (f.length > 16)
          throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (h.length < this.tagLength)
          return null;
        var S = new Uint8Array(16);
        S.set(f, S.length - f.length);
        var D = new Uint8Array(32);
        t.stream(this._key, S, D, 4);
        var x = new Uint8Array(this.tagLength);
        if (this._authenticate(x, D, h.subarray(0, h.length - this.tagLength), b), !s.equal(x, h.subarray(h.length - this.tagLength, h.length)))
          return null;
        var P = h.length - this.tagLength, M;
        if (w) {
          if (w.length !== P)
            throw new Error("ChaCha20Poly1305: incorrect destination length");
          M = w;
        } else
          M = new Uint8Array(P);
        return t.streamXOR(this._key, S, h.subarray(0, h.length - this.tagLength), M, 4), i.wipe(S), M;
      }, l.prototype.clean = function() {
        return i.wipe(this._key), this;
      }, l.prototype._authenticate = function(f, h, b, w) {
        var S = new r.Poly1305(h);
        w && (S.update(w), w.length % 16 > 0 && S.update(u.subarray(w.length % 16))), S.update(b), b.length % 16 > 0 && S.update(u.subarray(b.length % 16));
        var D = new Uint8Array(8);
        w && n.writeUint64LE(w.length, D), S.update(D), n.writeUint64LE(b.length, D), S.update(D);
        for (var x = S.digest(), P = 0; P < x.length; P++)
          f[P] = x[P];
        S.clean(), i.wipe(x), i.wipe(D);
      }, l;
    }()
  );
  e.ChaCha20Poly1305 = a;
})(Cs);
var Zc = {}, Ci = {}, Ps = {};
Object.defineProperty(Ps, "__esModule", { value: !0 });
function tp(e) {
  return typeof e.saveState < "u" && typeof e.restoreState < "u" && typeof e.cleanSavedState < "u";
}
Ps.isSerializableHash = tp;
Object.defineProperty(Ci, "__esModule", { value: !0 });
var rr = Ps, rp = _r, ip = Ft, eu = (
  /** @class */
  function() {
    function e(t, r) {
      this._finished = !1, this._inner = new t(), this._outer = new t(), this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
      var i = new Uint8Array(this.blockSize);
      r.length > this.blockSize ? this._inner.update(r).finish(i).clean() : i.set(r);
      for (var n = 0; n < i.length; n++)
        i[n] ^= 54;
      this._inner.update(i);
      for (var n = 0; n < i.length; n++)
        i[n] ^= 106;
      this._outer.update(i), rr.isSerializableHash(this._inner) && rr.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), ip.wipe(i);
    }
    return e.prototype.reset = function() {
      if (!rr.isSerializableHash(this._inner) || !rr.isSerializableHash(this._outer))
        throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
      return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, e.prototype.clean = function() {
      rr.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), rr.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean();
    }, e.prototype.update = function(t) {
      return this._inner.update(t), this;
    }, e.prototype.finish = function(t) {
      return this._finished ? (this._outer.finish(t), this) : (this._inner.finish(t), this._outer.update(t.subarray(0, this.digestLength)).finish(t), this._finished = !0, this);
    }, e.prototype.digest = function() {
      var t = new Uint8Array(this.digestLength);
      return this.finish(t), t;
    }, e.prototype.saveState = function() {
      if (!rr.isSerializableHash(this._inner))
        throw new Error("hmac: can't saveState() because hash doesn't implement it");
      return this._inner.saveState();
    }, e.prototype.restoreState = function(t) {
      if (!rr.isSerializableHash(this._inner) || !rr.isSerializableHash(this._outer))
        throw new Error("hmac: can't restoreState() because hash doesn't implement it");
      return this._inner.restoreState(t), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
    }, e.prototype.cleanSavedState = function(t) {
      if (!rr.isSerializableHash(this._inner))
        throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
      this._inner.cleanSavedState(t);
    }, e;
  }()
);
Ci.HMAC = eu;
function np(e, t, r) {
  var i = new eu(e, t);
  i.update(r);
  var n = i.digest();
  return i.clean(), n;
}
Ci.hmac = np;
Ci.equal = rp.equal;
Object.defineProperty(Zc, "__esModule", { value: !0 });
var na = Ci, sa = Ft, sp = (
  /** @class */
  function() {
    function e(t, r, i, n) {
      i === void 0 && (i = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = t, this._info = n;
      var s = na.hmac(this._hash, i, r);
      this._hmac = new na.HMAC(t, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
    }
    return e.prototype._fillBuffer = function() {
      this._counter[0]++;
      var t = this._counter[0];
      if (t === 0)
        throw new Error("hkdf: cannot expand more");
      this._hmac.reset(), t > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0;
    }, e.prototype.expand = function(t) {
      for (var r = new Uint8Array(t), i = 0; i < r.length; i++)
        this._bufpos === this._buffer.length && this._fillBuffer(), r[i] = this._buffer[this._bufpos++];
      return r;
    }, e.prototype.clean = function() {
      this._hmac.clean(), sa.wipe(this._buffer), sa.wipe(this._counter), this._bufpos = 0;
    }, e;
  }()
), op = Zc.HKDF = sp, gn = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = le, r = Ft;
  e.DIGEST_LENGTH = 32, e.BLOCK_SIZE = 64;
  var i = (
    /** @class */
    function() {
      function a() {
        this.digestLength = e.DIGEST_LENGTH, this.blockSize = e.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return a.prototype._initState = function() {
        this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225;
      }, a.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, a.prototype.clean = function() {
        r.wipe(this._buffer), r.wipe(this._temp), this.reset();
      }, a.prototype.update = function(l, f) {
        if (f === void 0 && (f = l.length), this._finished)
          throw new Error("SHA256: can't update because hash was finished.");
        var h = 0;
        if (this._bytesHashed += f, this._bufferLength > 0) {
          for (; this._bufferLength < this.blockSize && f > 0; )
            this._buffer[this._bufferLength++] = l[h++], f--;
          this._bufferLength === this.blockSize && (s(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (f >= this.blockSize && (h = s(this._temp, this._state, l, h, f), f %= this.blockSize); f > 0; )
          this._buffer[this._bufferLength++] = l[h++], f--;
        return this;
      }, a.prototype.finish = function(l) {
        if (!this._finished) {
          var f = this._bytesHashed, h = this._bufferLength, b = f / 536870912 | 0, w = f << 3, S = f % 64 < 56 ? 64 : 128;
          this._buffer[h] = 128;
          for (var D = h + 1; D < S - 8; D++)
            this._buffer[D] = 0;
          t.writeUint32BE(b, this._buffer, S - 8), t.writeUint32BE(w, this._buffer, S - 4), s(this._temp, this._state, this._buffer, 0, S), this._finished = !0;
        }
        for (var D = 0; D < this.digestLength / 4; D++)
          t.writeUint32BE(this._state[D], l, D * 4);
        return this;
      }, a.prototype.digest = function() {
        var l = new Uint8Array(this.digestLength);
        return this.finish(l), l;
      }, a.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, a.prototype.restoreState = function(l) {
        return this._state.set(l.state), this._bufferLength = l.bufferLength, l.buffer && this._buffer.set(l.buffer), this._bytesHashed = l.bytesHashed, this._finished = !1, this;
      }, a.prototype.cleanSavedState = function(l) {
        r.wipe(l.state), l.buffer && r.wipe(l.buffer), l.bufferLength = 0, l.bytesHashed = 0;
      }, a;
    }()
  );
  e.SHA256 = i;
  var n = new Int32Array([
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
  function s(a, l, f, h, b) {
    for (; b >= 64; ) {
      for (var w = l[0], S = l[1], D = l[2], x = l[3], P = l[4], M = l[5], E = l[6], I = l[7], g = 0; g < 16; g++) {
        var m = h + g * 4;
        a[g] = t.readUint32BE(f, m);
      }
      for (var g = 16; g < 64; g++) {
        var d = a[g - 2], o = (d >>> 17 | d << 32 - 17) ^ (d >>> 19 | d << 32 - 19) ^ d >>> 10;
        d = a[g - 15];
        var p = (d >>> 7 | d << 32 - 7) ^ (d >>> 18 | d << 32 - 18) ^ d >>> 3;
        a[g] = (o + a[g - 7] | 0) + (p + a[g - 16] | 0);
      }
      for (var g = 0; g < 64; g++) {
        var o = (((P >>> 6 | P << 26) ^ (P >>> 11 | P << 21) ^ (P >>> 25 | P << 7)) + (P & M ^ ~P & E) | 0) + (I + (n[g] + a[g] | 0) | 0) | 0, p = ((w >>> 2 | w << 32 - 2) ^ (w >>> 13 | w << 32 - 13) ^ (w >>> 22 | w << 32 - 22)) + (w & S ^ w & D ^ S & D) | 0;
        I = E, E = M, M = P, P = x + o | 0, x = D, D = S, S = w, w = o + p | 0;
      }
      l[0] += w, l[1] += S, l[2] += D, l[3] += x, l[4] += P, l[5] += M, l[6] += E, l[7] += I, h += 64, b -= 64;
    }
    return h;
  }
  function u(a) {
    var l = new i();
    l.update(a);
    var f = l.digest();
    return l.clean(), f;
  }
  e.hash = u;
})(gn);
var Ns = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.sharedKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.scalarMultBase = e.scalarMult = e.SHARED_KEY_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = void 0;
  const t = Zr, r = Ft;
  e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 32, e.SHARED_KEY_LENGTH = 32;
  function i(g) {
    const m = new Float64Array(16);
    if (g)
      for (let d = 0; d < g.length; d++)
        m[d] = g[d];
    return m;
  }
  const n = new Uint8Array(32);
  n[0] = 9;
  const s = i([56129, 1]);
  function u(g) {
    let m = 1;
    for (let d = 0; d < 16; d++) {
      let o = g[d] + m + 65535;
      m = Math.floor(o / 65536), g[d] = o - m * 65536;
    }
    g[0] += m - 1 + 37 * (m - 1);
  }
  function a(g, m, d) {
    const o = ~(d - 1);
    for (let p = 0; p < 16; p++) {
      const L = o & (g[p] ^ m[p]);
      g[p] ^= L, m[p] ^= L;
    }
  }
  function l(g, m) {
    const d = i(), o = i();
    for (let p = 0; p < 16; p++)
      o[p] = m[p];
    u(o), u(o), u(o);
    for (let p = 0; p < 2; p++) {
      d[0] = o[0] - 65517;
      for (let U = 1; U < 15; U++)
        d[U] = o[U] - 65535 - (d[U - 1] >> 16 & 1), d[U - 1] &= 65535;
      d[15] = o[15] - 32767 - (d[14] >> 16 & 1);
      const L = d[15] >> 16 & 1;
      d[14] &= 65535, a(o, d, 1 - L);
    }
    for (let p = 0; p < 16; p++)
      g[2 * p] = o[p] & 255, g[2 * p + 1] = o[p] >> 8;
  }
  function f(g, m) {
    for (let d = 0; d < 16; d++)
      g[d] = m[2 * d] + (m[2 * d + 1] << 8);
    g[15] &= 32767;
  }
  function h(g, m, d) {
    for (let o = 0; o < 16; o++)
      g[o] = m[o] + d[o];
  }
  function b(g, m, d) {
    for (let o = 0; o < 16; o++)
      g[o] = m[o] - d[o];
  }
  function w(g, m, d) {
    let o, p, L = 0, U = 0, $ = 0, F = 0, q = 0, _ = 0, T = 0, G = 0, V = 0, z = 0, k = 0, B = 0, W = 0, oe = 0, H = 0, ie = 0, Z = 0, re = 0, N = 0, C = 0, R = 0, c = 0, O = 0, Y = 0, Q = 0, be = 0, ve = 0, he = 0, Ie = 0, Be = 0, Le = 0, De = d[0], we = d[1], de = d[2], ge = d[3], pe = d[4], ue = d[5], ce = d[6], ne = d[7], ye = d[8], me = d[9], ae = d[10], Ee = d[11], xe = d[12], Ce = d[13], Pe = d[14], Re = d[15];
    o = m[0], L += o * De, U += o * we, $ += o * de, F += o * ge, q += o * pe, _ += o * ue, T += o * ce, G += o * ne, V += o * ye, z += o * me, k += o * ae, B += o * Ee, W += o * xe, oe += o * Ce, H += o * Pe, ie += o * Re, o = m[1], U += o * De, $ += o * we, F += o * de, q += o * ge, _ += o * pe, T += o * ue, G += o * ce, V += o * ne, z += o * ye, k += o * me, B += o * ae, W += o * Ee, oe += o * xe, H += o * Ce, ie += o * Pe, Z += o * Re, o = m[2], $ += o * De, F += o * we, q += o * de, _ += o * ge, T += o * pe, G += o * ue, V += o * ce, z += o * ne, k += o * ye, B += o * me, W += o * ae, oe += o * Ee, H += o * xe, ie += o * Ce, Z += o * Pe, re += o * Re, o = m[3], F += o * De, q += o * we, _ += o * de, T += o * ge, G += o * pe, V += o * ue, z += o * ce, k += o * ne, B += o * ye, W += o * me, oe += o * ae, H += o * Ee, ie += o * xe, Z += o * Ce, re += o * Pe, N += o * Re, o = m[4], q += o * De, _ += o * we, T += o * de, G += o * ge, V += o * pe, z += o * ue, k += o * ce, B += o * ne, W += o * ye, oe += o * me, H += o * ae, ie += o * Ee, Z += o * xe, re += o * Ce, N += o * Pe, C += o * Re, o = m[5], _ += o * De, T += o * we, G += o * de, V += o * ge, z += o * pe, k += o * ue, B += o * ce, W += o * ne, oe += o * ye, H += o * me, ie += o * ae, Z += o * Ee, re += o * xe, N += o * Ce, C += o * Pe, R += o * Re, o = m[6], T += o * De, G += o * we, V += o * de, z += o * ge, k += o * pe, B += o * ue, W += o * ce, oe += o * ne, H += o * ye, ie += o * me, Z += o * ae, re += o * Ee, N += o * xe, C += o * Ce, R += o * Pe, c += o * Re, o = m[7], G += o * De, V += o * we, z += o * de, k += o * ge, B += o * pe, W += o * ue, oe += o * ce, H += o * ne, ie += o * ye, Z += o * me, re += o * ae, N += o * Ee, C += o * xe, R += o * Ce, c += o * Pe, O += o * Re, o = m[8], V += o * De, z += o * we, k += o * de, B += o * ge, W += o * pe, oe += o * ue, H += o * ce, ie += o * ne, Z += o * ye, re += o * me, N += o * ae, C += o * Ee, R += o * xe, c += o * Ce, O += o * Pe, Y += o * Re, o = m[9], z += o * De, k += o * we, B += o * de, W += o * ge, oe += o * pe, H += o * ue, ie += o * ce, Z += o * ne, re += o * ye, N += o * me, C += o * ae, R += o * Ee, c += o * xe, O += o * Ce, Y += o * Pe, Q += o * Re, o = m[10], k += o * De, B += o * we, W += o * de, oe += o * ge, H += o * pe, ie += o * ue, Z += o * ce, re += o * ne, N += o * ye, C += o * me, R += o * ae, c += o * Ee, O += o * xe, Y += o * Ce, Q += o * Pe, be += o * Re, o = m[11], B += o * De, W += o * we, oe += o * de, H += o * ge, ie += o * pe, Z += o * ue, re += o * ce, N += o * ne, C += o * ye, R += o * me, c += o * ae, O += o * Ee, Y += o * xe, Q += o * Ce, be += o * Pe, ve += o * Re, o = m[12], W += o * De, oe += o * we, H += o * de, ie += o * ge, Z += o * pe, re += o * ue, N += o * ce, C += o * ne, R += o * ye, c += o * me, O += o * ae, Y += o * Ee, Q += o * xe, be += o * Ce, ve += o * Pe, he += o * Re, o = m[13], oe += o * De, H += o * we, ie += o * de, Z += o * ge, re += o * pe, N += o * ue, C += o * ce, R += o * ne, c += o * ye, O += o * me, Y += o * ae, Q += o * Ee, be += o * xe, ve += o * Ce, he += o * Pe, Ie += o * Re, o = m[14], H += o * De, ie += o * we, Z += o * de, re += o * ge, N += o * pe, C += o * ue, R += o * ce, c += o * ne, O += o * ye, Y += o * me, Q += o * ae, be += o * Ee, ve += o * xe, he += o * Ce, Ie += o * Pe, Be += o * Re, o = m[15], ie += o * De, Z += o * we, re += o * de, N += o * ge, C += o * pe, R += o * ue, c += o * ce, O += o * ne, Y += o * ye, Q += o * me, be += o * ae, ve += o * Ee, he += o * xe, Ie += o * Ce, Be += o * Pe, Le += o * Re, L += 38 * Z, U += 38 * re, $ += 38 * N, F += 38 * C, q += 38 * R, _ += 38 * c, T += 38 * O, G += 38 * Y, V += 38 * Q, z += 38 * be, k += 38 * ve, B += 38 * he, W += 38 * Ie, oe += 38 * Be, H += 38 * Le, p = 1, o = L + p + 65535, p = Math.floor(o / 65536), L = o - p * 65536, o = U + p + 65535, p = Math.floor(o / 65536), U = o - p * 65536, o = $ + p + 65535, p = Math.floor(o / 65536), $ = o - p * 65536, o = F + p + 65535, p = Math.floor(o / 65536), F = o - p * 65536, o = q + p + 65535, p = Math.floor(o / 65536), q = o - p * 65536, o = _ + p + 65535, p = Math.floor(o / 65536), _ = o - p * 65536, o = T + p + 65535, p = Math.floor(o / 65536), T = o - p * 65536, o = G + p + 65535, p = Math.floor(o / 65536), G = o - p * 65536, o = V + p + 65535, p = Math.floor(o / 65536), V = o - p * 65536, o = z + p + 65535, p = Math.floor(o / 65536), z = o - p * 65536, o = k + p + 65535, p = Math.floor(o / 65536), k = o - p * 65536, o = B + p + 65535, p = Math.floor(o / 65536), B = o - p * 65536, o = W + p + 65535, p = Math.floor(o / 65536), W = o - p * 65536, o = oe + p + 65535, p = Math.floor(o / 65536), oe = o - p * 65536, o = H + p + 65535, p = Math.floor(o / 65536), H = o - p * 65536, o = ie + p + 65535, p = Math.floor(o / 65536), ie = o - p * 65536, L += p - 1 + 37 * (p - 1), p = 1, o = L + p + 65535, p = Math.floor(o / 65536), L = o - p * 65536, o = U + p + 65535, p = Math.floor(o / 65536), U = o - p * 65536, o = $ + p + 65535, p = Math.floor(o / 65536), $ = o - p * 65536, o = F + p + 65535, p = Math.floor(o / 65536), F = o - p * 65536, o = q + p + 65535, p = Math.floor(o / 65536), q = o - p * 65536, o = _ + p + 65535, p = Math.floor(o / 65536), _ = o - p * 65536, o = T + p + 65535, p = Math.floor(o / 65536), T = o - p * 65536, o = G + p + 65535, p = Math.floor(o / 65536), G = o - p * 65536, o = V + p + 65535, p = Math.floor(o / 65536), V = o - p * 65536, o = z + p + 65535, p = Math.floor(o / 65536), z = o - p * 65536, o = k + p + 65535, p = Math.floor(o / 65536), k = o - p * 65536, o = B + p + 65535, p = Math.floor(o / 65536), B = o - p * 65536, o = W + p + 65535, p = Math.floor(o / 65536), W = o - p * 65536, o = oe + p + 65535, p = Math.floor(o / 65536), oe = o - p * 65536, o = H + p + 65535, p = Math.floor(o / 65536), H = o - p * 65536, o = ie + p + 65535, p = Math.floor(o / 65536), ie = o - p * 65536, L += p - 1 + 37 * (p - 1), g[0] = L, g[1] = U, g[2] = $, g[3] = F, g[4] = q, g[5] = _, g[6] = T, g[7] = G, g[8] = V, g[9] = z, g[10] = k, g[11] = B, g[12] = W, g[13] = oe, g[14] = H, g[15] = ie;
  }
  function S(g, m) {
    w(g, m, m);
  }
  function D(g, m) {
    const d = i();
    for (let o = 0; o < 16; o++)
      d[o] = m[o];
    for (let o = 253; o >= 0; o--)
      S(d, d), o !== 2 && o !== 4 && w(d, d, m);
    for (let o = 0; o < 16; o++)
      g[o] = d[o];
  }
  function x(g, m) {
    const d = new Uint8Array(32), o = new Float64Array(80), p = i(), L = i(), U = i(), $ = i(), F = i(), q = i();
    for (let V = 0; V < 31; V++)
      d[V] = g[V];
    d[31] = g[31] & 127 | 64, d[0] &= 248, f(o, m);
    for (let V = 0; V < 16; V++)
      L[V] = o[V];
    p[0] = $[0] = 1;
    for (let V = 254; V >= 0; --V) {
      const z = d[V >>> 3] >>> (V & 7) & 1;
      a(p, L, z), a(U, $, z), h(F, p, U), b(p, p, U), h(U, L, $), b(L, L, $), S($, F), S(q, p), w(p, U, p), w(U, L, F), h(F, p, U), b(p, p, U), S(L, p), b(U, $, q), w(p, U, s), h(p, p, $), w(U, U, p), w(p, $, q), w($, L, o), S(L, F), a(p, L, z), a(U, $, z);
    }
    for (let V = 0; V < 16; V++)
      o[V + 16] = p[V], o[V + 32] = U[V], o[V + 48] = L[V], o[V + 64] = $[V];
    const _ = o.subarray(32), T = o.subarray(16);
    D(_, _), w(T, T, _);
    const G = new Uint8Array(32);
    return l(G, T), G;
  }
  e.scalarMult = x;
  function P(g) {
    return x(g, n);
  }
  e.scalarMultBase = P;
  function M(g) {
    if (g.length !== e.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${e.SECRET_KEY_LENGTH} bytes`);
    const m = new Uint8Array(g);
    return {
      publicKey: P(m),
      secretKey: m
    };
  }
  e.generateKeyPairFromSeed = M;
  function E(g) {
    const m = (0, t.randomBytes)(32, g), d = M(m);
    return (0, r.wipe)(m), d;
  }
  e.generateKeyPair = E;
  function I(g, m, d = !1) {
    if (g.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (m.length !== e.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const o = x(g, m);
    if (d) {
      let p = 0;
      for (let L = 0; L < o.length; L++)
        p |= o[L];
      if (p === 0)
        throw new Error("X25519: invalid shared key");
    }
    return o;
  }
  e.sharedKey = I;
})(Ns);
var oa = globalThis && globalThis.__spreadArray || function(e, t, r) {
  if (r || arguments.length === 2)
    for (var i = 0, n = t.length, s; i < n; i++)
      (s || !(i in t)) && (s || (s = Array.prototype.slice.call(t, 0, i)), s[i] = t[i]);
  return e.concat(s || Array.prototype.slice.call(t));
}, ap = (
  /** @class */
  function() {
    function e(t, r, i) {
      this.name = t, this.version = r, this.os = i, this.type = "browser";
    }
    return e;
  }()
), cp = (
  /** @class */
  function() {
    function e(t) {
      this.version = t, this.type = "node", this.name = "node", this.os = process.platform;
    }
    return e;
  }()
), up = (
  /** @class */
  function() {
    function e(t, r, i, n) {
      this.name = t, this.version = r, this.os = i, this.bot = n, this.type = "bot-device";
    }
    return e;
  }()
), lp = (
  /** @class */
  function() {
    function e() {
      this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
    }
    return e;
  }()
), fp = (
  /** @class */
  function() {
    function e() {
      this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
    }
    return e;
  }()
), hp = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/, dp = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, aa = 3, pp = [
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
  ["searchbot", hp]
], ca = [
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
function gp(e) {
  return e ? ua(e) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new fp() : typeof navigator < "u" ? ua(navigator.userAgent) : vp();
}
function yp(e) {
  return e !== "" && pp.reduce(function(t, r) {
    var i = r[0], n = r[1];
    if (t)
      return t;
    var s = n.exec(e);
    return !!s && [i, s];
  }, !1);
}
function ua(e) {
  var t = yp(e);
  if (!t)
    return null;
  var r = t[0], i = t[1];
  if (r === "searchbot")
    return new lp();
  var n = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
  n ? n.length < aa && (n = oa(oa([], n, !0), mp(aa - n.length), !0)) : n = [];
  var s = n.join("."), u = bp(e), a = dp.exec(e);
  return a && a[1] ? new up(r, s, u, a[1]) : new ap(r, s, u);
}
function bp(e) {
  for (var t = 0, r = ca.length; t < r; t++) {
    var i = ca[t], n = i[0], s = i[1], u = s.exec(e);
    if (u)
      return n;
  }
  return null;
}
function vp() {
  var e = typeof process < "u" && process.version;
  return e ? new cp(process.version.slice(1)) : null;
}
function mp(e) {
  for (var t = [], r = 0; r < e; r++)
    t.push("0");
  return t;
}
var $e = {};
Object.defineProperty($e, "__esModule", { value: !0 });
$e.getLocalStorage = $e.getLocalStorageOrThrow = $e.getCrypto = $e.getCryptoOrThrow = ru = $e.getLocation = $e.getLocationOrThrow = Ls = $e.getNavigator = $e.getNavigatorOrThrow = tu = $e.getDocument = $e.getDocumentOrThrow = $e.getFromWindowOrThrow = $e.getFromWindow = void 0;
function $r(e) {
  let t;
  return typeof window < "u" && typeof window[e] < "u" && (t = window[e]), t;
}
$e.getFromWindow = $r;
function ei(e) {
  const t = $r(e);
  if (!t)
    throw new Error(`${e} is not defined in Window`);
  return t;
}
$e.getFromWindowOrThrow = ei;
function _p() {
  return ei("document");
}
$e.getDocumentOrThrow = _p;
function wp() {
  return $r("document");
}
var tu = $e.getDocument = wp;
function Ep() {
  return ei("navigator");
}
$e.getNavigatorOrThrow = Ep;
function Sp() {
  return $r("navigator");
}
var Ls = $e.getNavigator = Sp;
function Dp() {
  return ei("location");
}
$e.getLocationOrThrow = Dp;
function Op() {
  return $r("location");
}
var ru = $e.getLocation = Op;
function Ip() {
  return ei("crypto");
}
$e.getCryptoOrThrow = Ip;
function xp() {
  return $r("crypto");
}
$e.getCrypto = xp;
function Rp() {
  return ei("localStorage");
}
$e.getLocalStorageOrThrow = Rp;
function Ap() {
  return $r("localStorage");
}
$e.getLocalStorage = Ap;
var Us = {};
Object.defineProperty(Us, "__esModule", { value: !0 });
var iu = Us.getWindowMetadata = void 0;
const la = $e;
function Tp() {
  let e, t;
  try {
    e = la.getDocumentOrThrow(), t = la.getLocationOrThrow();
  } catch {
    return null;
  }
  function r() {
    const b = e.getElementsByTagName("link"), w = [];
    for (let S = 0; S < b.length; S++) {
      const D = b[S], x = D.getAttribute("rel");
      if (x && x.toLowerCase().indexOf("icon") > -1) {
        const P = D.getAttribute("href");
        if (P)
          if (P.toLowerCase().indexOf("https:") === -1 && P.toLowerCase().indexOf("http:") === -1 && P.indexOf("//") !== 0) {
            let M = t.protocol + "//" + t.host;
            if (P.indexOf("/") === 0)
              M += P;
            else {
              const E = t.pathname.split("/");
              E.pop();
              const I = E.join("/");
              M += I + "/" + P;
            }
            w.push(M);
          } else if (P.indexOf("//") === 0) {
            const M = t.protocol + P;
            w.push(M);
          } else
            w.push(P);
      }
    }
    return w;
  }
  function i(...b) {
    const w = e.getElementsByTagName("meta");
    for (let S = 0; S < w.length; S++) {
      const D = w[S], x = ["itemprop", "property", "name"].map((P) => D.getAttribute(P)).filter((P) => P ? b.includes(P) : !1);
      if (x.length && x) {
        const P = D.getAttribute("content");
        if (P)
          return P;
      }
    }
    return "";
  }
  function n() {
    let b = i("name", "og:site_name", "og:title", "twitter:title");
    return b || (b = e.title), b;
  }
  function s() {
    return i("description", "og:description", "twitter:description", "keywords");
  }
  const u = n(), a = s(), l = t.origin, f = r();
  return {
    description: a,
    url: l,
    icons: f,
    name: u
  };
}
iu = Us.getWindowMetadata = Tp;
var xi = {}, Cp = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`), nu = "%[a-f0-9]{2}", fa = new RegExp("(" + nu + ")|([^%]+?)", "gi"), ha = new RegExp("(" + nu + ")+", "gi");
function cs(e, t) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch {
  }
  if (e.length === 1)
    return e;
  t = t || 1;
  var r = e.slice(0, t), i = e.slice(t);
  return Array.prototype.concat.call([], cs(r), cs(i));
}
function Pp(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var t = e.match(fa) || [], r = 1; r < t.length; r++)
      e = cs(t, r).join(""), t = e.match(fa) || [];
    return e;
  }
}
function Np(e) {
  for (var t = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, r = ha.exec(e); r; ) {
    try {
      t[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var i = Pp(r[0]);
      i !== r[0] && (t[r[0]] = i);
    }
    r = ha.exec(e);
  }
  t["%C2"] = "�";
  for (var n = Object.keys(t), s = 0; s < n.length; s++) {
    var u = n[s];
    e = e.replace(new RegExp(u, "g"), t[u]);
  }
  return e;
}
var Lp = function(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return e = e.replace(/\+/g, " "), decodeURIComponent(e);
  } catch {
    return Np(e);
  }
}, Up = (e, t) => {
  if (!(typeof e == "string" && typeof t == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (t === "")
    return [e];
  const r = e.indexOf(t);
  return r === -1 ? [e] : [
    e.slice(0, r),
    e.slice(r + t.length)
  ];
}, $p = function(e, t) {
  for (var r = {}, i = Object.keys(e), n = Array.isArray(t), s = 0; s < i.length; s++) {
    var u = i[s], a = e[u];
    (n ? t.indexOf(u) !== -1 : t(u, a, e)) && (r[u] = a);
  }
  return r;
};
(function(e) {
  const t = Cp, r = Lp, i = Up, n = $p, s = (E) => E == null, u = Symbol("encodeFragmentIdentifier");
  function a(E) {
    switch (E.arrayFormat) {
      case "index":
        return (I) => (g, m) => {
          const d = g.length;
          return m === void 0 || E.skipNull && m === null || E.skipEmptyString && m === "" ? g : m === null ? [...g, [h(I, E), "[", d, "]"].join("")] : [
            ...g,
            [h(I, E), "[", h(d, E), "]=", h(m, E)].join("")
          ];
        };
      case "bracket":
        return (I) => (g, m) => m === void 0 || E.skipNull && m === null || E.skipEmptyString && m === "" ? g : m === null ? [...g, [h(I, E), "[]"].join("")] : [...g, [h(I, E), "[]=", h(m, E)].join("")];
      case "colon-list-separator":
        return (I) => (g, m) => m === void 0 || E.skipNull && m === null || E.skipEmptyString && m === "" ? g : m === null ? [...g, [h(I, E), ":list="].join("")] : [...g, [h(I, E), ":list=", h(m, E)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const I = E.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (g) => (m, d) => d === void 0 || E.skipNull && d === null || E.skipEmptyString && d === "" ? m : (d = d === null ? "" : d, m.length === 0 ? [[h(g, E), I, h(d, E)].join("")] : [[m, h(d, E)].join(E.arrayFormatSeparator)]);
      }
      default:
        return (I) => (g, m) => m === void 0 || E.skipNull && m === null || E.skipEmptyString && m === "" ? g : m === null ? [...g, h(I, E)] : [...g, [h(I, E), "=", h(m, E)].join("")];
    }
  }
  function l(E) {
    let I;
    switch (E.arrayFormat) {
      case "index":
        return (g, m, d) => {
          if (I = /\[(\d*)\]$/.exec(g), g = g.replace(/\[\d*\]$/, ""), !I) {
            d[g] = m;
            return;
          }
          d[g] === void 0 && (d[g] = {}), d[g][I[1]] = m;
        };
      case "bracket":
        return (g, m, d) => {
          if (I = /(\[\])$/.exec(g), g = g.replace(/\[\]$/, ""), !I) {
            d[g] = m;
            return;
          }
          if (d[g] === void 0) {
            d[g] = [m];
            return;
          }
          d[g] = [].concat(d[g], m);
        };
      case "colon-list-separator":
        return (g, m, d) => {
          if (I = /(:list)$/.exec(g), g = g.replace(/:list$/, ""), !I) {
            d[g] = m;
            return;
          }
          if (d[g] === void 0) {
            d[g] = [m];
            return;
          }
          d[g] = [].concat(d[g], m);
        };
      case "comma":
      case "separator":
        return (g, m, d) => {
          const o = typeof m == "string" && m.includes(E.arrayFormatSeparator), p = typeof m == "string" && !o && b(m, E).includes(E.arrayFormatSeparator);
          m = p ? b(m, E) : m;
          const L = o || p ? m.split(E.arrayFormatSeparator).map((U) => b(U, E)) : m === null ? m : b(m, E);
          d[g] = L;
        };
      case "bracket-separator":
        return (g, m, d) => {
          const o = /(\[\])$/.test(g);
          if (g = g.replace(/\[\]$/, ""), !o) {
            d[g] = m && b(m, E);
            return;
          }
          const p = m === null ? [] : m.split(E.arrayFormatSeparator).map((L) => b(L, E));
          if (d[g] === void 0) {
            d[g] = p;
            return;
          }
          d[g] = [].concat(d[g], p);
        };
      default:
        return (g, m, d) => {
          if (d[g] === void 0) {
            d[g] = m;
            return;
          }
          d[g] = [].concat(d[g], m);
        };
    }
  }
  function f(E) {
    if (typeof E != "string" || E.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function h(E, I) {
    return I.encode ? I.strict ? t(E) : encodeURIComponent(E) : E;
  }
  function b(E, I) {
    return I.decode ? r(E) : E;
  }
  function w(E) {
    return Array.isArray(E) ? E.sort() : typeof E == "object" ? w(Object.keys(E)).sort((I, g) => Number(I) - Number(g)).map((I) => E[I]) : E;
  }
  function S(E) {
    const I = E.indexOf("#");
    return I !== -1 && (E = E.slice(0, I)), E;
  }
  function D(E) {
    let I = "";
    const g = E.indexOf("#");
    return g !== -1 && (I = E.slice(g)), I;
  }
  function x(E) {
    E = S(E);
    const I = E.indexOf("?");
    return I === -1 ? "" : E.slice(I + 1);
  }
  function P(E, I) {
    return I.parseNumbers && !Number.isNaN(Number(E)) && typeof E == "string" && E.trim() !== "" ? E = Number(E) : I.parseBooleans && E !== null && (E.toLowerCase() === "true" || E.toLowerCase() === "false") && (E = E.toLowerCase() === "true"), E;
  }
  function M(E, I) {
    I = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, I), f(I.arrayFormatSeparator);
    const g = l(I), m = /* @__PURE__ */ Object.create(null);
    if (typeof E != "string" || (E = E.trim().replace(/^[?#&]/, ""), !E))
      return m;
    for (const d of E.split("&")) {
      if (d === "")
        continue;
      let [o, p] = i(I.decode ? d.replace(/\+/g, " ") : d, "=");
      p = p === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(I.arrayFormat) ? p : b(p, I), g(b(o, I), p, m);
    }
    for (const d of Object.keys(m)) {
      const o = m[d];
      if (typeof o == "object" && o !== null)
        for (const p of Object.keys(o))
          o[p] = P(o[p], I);
      else
        m[d] = P(o, I);
    }
    return I.sort === !1 ? m : (I.sort === !0 ? Object.keys(m).sort() : Object.keys(m).sort(I.sort)).reduce((d, o) => {
      const p = m[o];
      return p && typeof p == "object" && !Array.isArray(p) ? d[o] = w(p) : d[o] = p, d;
    }, /* @__PURE__ */ Object.create(null));
  }
  e.extract = x, e.parse = M, e.stringify = (E, I) => {
    if (!E)
      return "";
    I = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, I), f(I.arrayFormatSeparator);
    const g = (p) => I.skipNull && s(E[p]) || I.skipEmptyString && E[p] === "", m = a(I), d = {};
    for (const p of Object.keys(E))
      g(p) || (d[p] = E[p]);
    const o = Object.keys(d);
    return I.sort !== !1 && o.sort(I.sort), o.map((p) => {
      const L = E[p];
      return L === void 0 ? "" : L === null ? h(p, I) : Array.isArray(L) ? L.length === 0 && I.arrayFormat === "bracket-separator" ? h(p, I) + "[]" : L.reduce(m(p), []).join("&") : h(p, I) + "=" + h(L, I);
    }).filter((p) => p.length > 0).join("&");
  }, e.parseUrl = (E, I) => {
    I = Object.assign({
      decode: !0
    }, I);
    const [g, m] = i(E, "#");
    return Object.assign(
      {
        url: g.split("?")[0] || "",
        query: M(x(E), I)
      },
      I && I.parseFragmentIdentifier && m ? { fragmentIdentifier: b(m, I) } : {}
    );
  }, e.stringifyUrl = (E, I) => {
    I = Object.assign({
      encode: !0,
      strict: !0,
      [u]: !0
    }, I);
    const g = S(E.url).split("?")[0] || "", m = e.extract(E.url), d = e.parse(m, { sort: !1 }), o = Object.assign(d, E.query);
    let p = e.stringify(o, I);
    p && (p = `?${p}`);
    let L = D(E.url);
    return E.fragmentIdentifier && (L = `#${I[u] ? h(E.fragmentIdentifier, I) : E.fragmentIdentifier}`), `${g}${p}${L}`;
  }, e.pick = (E, I, g) => {
    g = Object.assign({
      parseFragmentIdentifier: !0,
      [u]: !1
    }, g);
    const { url: m, query: d, fragmentIdentifier: o } = e.parseUrl(E, g);
    return e.stringifyUrl({
      url: m,
      query: n(d, I),
      fragmentIdentifier: o
    }, g);
  }, e.exclude = (E, I, g) => {
    const m = Array.isArray(I) ? (d) => !I.includes(d) : (d, o) => !I(d, o);
    return e.pick(E, m, g);
  };
})(xi);
const Fp = {
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
function su(e, t) {
  return e.includes(":") ? [e] : t.chains || [];
}
const ou = "base10", xt = "base16", us = "base64pad", $s = "utf8", au = 0, Fr = 1, Mp = 0, da = 1, ls = 12, Fs = 32;
function jp() {
  const e = Ns.generateKeyPair();
  return { privateKey: Rt(e.secretKey, xt), publicKey: Rt(e.publicKey, xt) };
}
function fs() {
  const e = Zr.randomBytes(Fs);
  return Rt(e, xt);
}
function Bp(e, t) {
  const r = Ns.sharedKey(Tt(e, xt), Tt(t, xt)), i = new op(gn.SHA256, r).expand(Fs);
  return Rt(i, xt);
}
function qp(e) {
  const t = gn.hash(Tt(e, xt));
  return Rt(t, xt);
}
function Hr(e) {
  const t = gn.hash(Tt(e, $s));
  return Rt(t, xt);
}
function zp(e) {
  return Tt(`${e}`, ou);
}
function Pi(e) {
  return Number(Rt(e, ou));
}
function Vp(e) {
  const t = zp(typeof e.type < "u" ? e.type : au);
  if (Pi(t) === Fr && typeof e.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof e.senderPublicKey < "u" ? Tt(e.senderPublicKey, xt) : void 0, i = typeof e.iv < "u" ? Tt(e.iv, xt) : Zr.randomBytes(ls), n = new Cs.ChaCha20Poly1305(Tt(e.symKey, xt)).seal(i, Tt(e.message, $s));
  return kp({ type: t, sealed: n, iv: i, senderPublicKey: r });
}
function Kp(e) {
  const t = new Cs.ChaCha20Poly1305(Tt(e.symKey, xt)), { sealed: r, iv: i } = Zi(e.encoded), n = t.open(i, r);
  if (n === null)
    throw new Error("Failed to decrypt");
  return Rt(n, $s);
}
function kp(e) {
  if (Pi(e.type) === Fr) {
    if (typeof e.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return Rt(os([e.type, e.senderPublicKey, e.iv, e.sealed]), us);
  }
  return Rt(os([e.type, e.iv, e.sealed]), us);
}
function Zi(e) {
  const t = Tt(e, us), r = t.slice(Mp, da), i = da;
  if (Pi(r) === Fr) {
    const a = i + Fs, l = a + ls, f = t.slice(i, a), h = t.slice(a, l), b = t.slice(l);
    return { type: r, sealed: b, iv: h, senderPublicKey: f };
  }
  const n = i + ls, s = t.slice(i, n), u = t.slice(n);
  return { type: r, sealed: u, iv: s };
}
function Wp(e, t) {
  const r = Zi(e);
  return cu({ type: Pi(r.type), senderPublicKey: typeof r.senderPublicKey < "u" ? Rt(r.senderPublicKey, xt) : void 0, receiverPublicKey: t == null ? void 0 : t.receiverPublicKey });
}
function cu(e) {
  const t = (e == null ? void 0 : e.type) || au;
  if (t === Fr) {
    if (typeof (e == null ? void 0 : e.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (e == null ? void 0 : e.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return { type: t, senderPublicKey: e == null ? void 0 : e.senderPublicKey, receiverPublicKey: e == null ? void 0 : e.receiverPublicKey };
}
function pa(e) {
  return e.type === Fr && typeof e.senderPublicKey == "string" && typeof e.receiverPublicKey == "string";
}
var Hp = Object.defineProperty, ga = Object.getOwnPropertySymbols, Gp = Object.prototype.hasOwnProperty, Yp = Object.prototype.propertyIsEnumerable, ya = (e, t, r) => t in e ? Hp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, ba = (e, t) => {
  for (var r in t || (t = {}))
    Gp.call(t, r) && ya(e, r, t[r]);
  if (ga)
    for (var r of ga(t))
      Yp.call(t, r) && ya(e, r, t[r]);
  return e;
};
const Jp = "ReactNative", br = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" }, Xp = "js";
function Ms() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function uu() {
  return !tu() && !!Ls() && navigator.product === Jp;
}
function js() {
  return !Ms() && !!Ls();
}
function Bs() {
  return uu() ? br.reactNative : Ms() ? br.node : js() ? br.browser : br.unknown;
}
function Qp(e, t) {
  let r = xi.parse(e);
  return r = ba(ba({}, r), t), e = xi.stringify(r), e;
}
function Zp() {
  return iu() || { name: "", description: "", url: "", icons: [""] };
}
function eg() {
  if (Bs() === br.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: r, Version: i } = global.Platform;
    return [r, i].join("-");
  }
  const e = gp();
  if (e === null)
    return "unknown";
  const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
  return e.type === "browser" ? [t, e.name, e.version].join("-") : [t, e.version].join("-");
}
function tg() {
  var e;
  const t = Bs();
  return t === br.browser ? [t, ((e = ru()) == null ? void 0 : e.host) || "unknown"].join(":") : t;
}
function rg(e, t, r) {
  const i = eg(), n = tg();
  return [[e, t].join("-"), [Xp, r].join("-"), i, n].join("/");
}
function ig({ protocol: e, version: t, relayUrl: r, sdkVersion: i, auth: n, projectId: s, useOnCloseEvent: u }) {
  const a = r.split("?"), l = rg(e, t, i), f = { auth: n, ua: l, projectId: s, useOnCloseEvent: u || void 0 }, h = Qp(a[1] || "", f);
  return a[0] + "?" + h;
}
function Pr(e, t) {
  return e.filter((r) => t.includes(r)).length === e.length;
}
function lu(e) {
  return Object.fromEntries(e.entries());
}
function fu(e) {
  return new Map(Object.entries(e));
}
function Kr(e = te.FIVE_MINUTES, t) {
  const r = te.toMiliseconds(e || te.FIVE_MINUTES);
  let i, n, s;
  return { resolve: (u) => {
    s && i && (clearTimeout(s), i(u));
  }, reject: (u) => {
    s && n && (clearTimeout(s), n(u));
  }, done: () => new Promise((u, a) => {
    s = setTimeout(() => {
      a(new Error(t));
    }, r), i = u, n = a;
  }) };
}
function en(e, t, r) {
  return new Promise(async (i, n) => {
    const s = setTimeout(() => n(new Error(r)), t);
    try {
      const u = await e;
      i(u);
    } catch (u) {
      n(u);
    }
    clearTimeout(s);
  });
}
function hu(e, t) {
  if (typeof t == "string" && t.startsWith(`${e}:`))
    return t;
  if (e.toLowerCase() === "topic") {
    if (typeof t != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${t}`;
  } else if (e.toLowerCase() === "id") {
    if (typeof t != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${t}`;
  }
  throw new Error(`Unknown expirer target type: ${e}`);
}
function ng(e) {
  return hu("topic", e);
}
function sg(e) {
  return hu("id", e);
}
function du(e) {
  const [t, r] = e.split(":"), i = { id: void 0, topic: void 0 };
  if (t === "topic" && typeof r == "string")
    i.topic = r;
  else if (t === "id" && Number.isInteger(Number(r)))
    i.id = Number(r);
  else
    throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
  return i;
}
function Ht(e, t) {
  return te.fromMiliseconds((t || Date.now()) + te.toMiliseconds(e));
}
function yr(e) {
  return Date.now() >= te.toMiliseconds(e);
}
function st(e, t) {
  return `${e}${t ? `:${t}` : ""}`;
}
async function og({ id: e, topic: t, wcDeepLink: r }) {
  try {
    if (!r)
      return;
    const i = typeof r == "string" ? JSON.parse(r) : r;
    let n = i == null ? void 0 : i.href;
    if (typeof n != "string")
      return;
    n.endsWith("/") && (n = n.slice(0, -1));
    const s = `${n}/wc?requestId=${e}&sessionTopic=${t}`, u = Bs();
    u === br.browser ? s.startsWith("https://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : u === br.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(s);
  } catch (i) {
    console.error(i);
  }
}
const ag = "irn";
function hs(e) {
  return (e == null ? void 0 : e.relay) || { protocol: ag };
}
function Gi(e) {
  const t = Fp[e];
  if (typeof t > "u")
    throw new Error(`Relay Protocol not supported: ${e}`);
  return t;
}
var cg = Object.defineProperty, va = Object.getOwnPropertySymbols, ug = Object.prototype.hasOwnProperty, lg = Object.prototype.propertyIsEnumerable, ma = (e, t, r) => t in e ? cg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, fg = (e, t) => {
  for (var r in t || (t = {}))
    ug.call(t, r) && ma(e, r, t[r]);
  if (va)
    for (var r of va(t))
      lg.call(t, r) && ma(e, r, t[r]);
  return e;
};
function hg(e, t = "-") {
  const r = {}, i = "relay" + t;
  return Object.keys(e).forEach((n) => {
    if (n.startsWith(i)) {
      const s = n.replace(i, ""), u = e[n];
      r[s] = u;
    }
  }), r;
}
function dg(e) {
  const t = e.indexOf(":"), r = e.indexOf("?") !== -1 ? e.indexOf("?") : void 0, i = e.substring(0, t), n = e.substring(t + 1, r).split("@"), s = typeof r < "u" ? e.substring(r) : "", u = xi.parse(s);
  return { protocol: i, topic: pg(n[0]), version: parseInt(n[1], 10), symKey: u.symKey, relay: hg(u) };
}
function pg(e) {
  return e.startsWith("//") ? e.substring(2) : e;
}
function gg(e, t = "-") {
  const r = "relay", i = {};
  return Object.keys(e).forEach((n) => {
    const s = r + t + n;
    e[n] && (i[s] = e[n]);
  }), i;
}
function yg(e) {
  return `${e.protocol}:${e.topic}@${e.version}?` + xi.stringify(fg({ symKey: e.symKey }, gg(e.relay)));
}
function ti(e) {
  const t = [];
  return e.forEach((r) => {
    const [i, n] = r.split(":");
    t.push(`${i}:${n}`);
  }), t;
}
function bg(e) {
  const t = [];
  return Object.values(e).forEach((r) => {
    t.push(...ti(r.accounts));
  }), t;
}
function vg(e, t) {
  const r = [];
  return Object.values(e).forEach((i) => {
    ti(i.accounts).includes(t) && r.push(...i.methods);
  }), r;
}
function mg(e, t) {
  const r = [];
  return Object.values(e).forEach((i) => {
    ti(i.accounts).includes(t) && r.push(...i.events);
  }), r;
}
function _g(e, t) {
  const r = Yi(e, t);
  if (r)
    throw new Error(r.message);
  const i = {};
  for (const [n, s] of Object.entries(e))
    i[n] = { methods: s.methods, events: s.events, chains: s.accounts.map((u) => `${u.split(":")[0]}:${u.split(":")[1]}`) };
  return i;
}
const wg = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } }, Eg = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function X(e, t) {
  const { message: r, code: i } = Eg[e];
  return { message: t ? `${r} ${t}` : r, code: i };
}
function ut(e, t) {
  const { message: r, code: i } = wg[e];
  return { message: t ? `${r} ${t}` : r, code: i };
}
function Ni(e, t) {
  return Array.isArray(e) ? typeof t < "u" && e.length ? e.every(t) : !0 : !1;
}
function Di(e) {
  return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
function It(e) {
  return typeof e > "u";
}
function lt(e, t) {
  return t && It(e) ? !0 : typeof e == "string" && !!e.trim().length;
}
function qs(e, t) {
  return t && It(e) ? !0 : typeof e == "number" && !isNaN(e);
}
function Sg(e, t) {
  const { requiredNamespaces: r } = t, i = Object.keys(e.namespaces), n = Object.keys(r);
  let s = !0;
  return Pr(n, i) ? (i.forEach((u) => {
    const { accounts: a, methods: l, events: f } = e.namespaces[u], h = ti(a), b = r[u];
    (!Pr(su(u, b), h) || !Pr(b.methods, l) || !Pr(b.events, f)) && (s = !1);
  }), s) : !1;
}
function tn(e) {
  return lt(e, !1) && e.includes(":") ? e.split(":").length === 2 : !1;
}
function Dg(e) {
  if (lt(e, !1) && e.includes(":")) {
    const t = e.split(":");
    if (t.length === 3) {
      const r = t[0] + ":" + t[1];
      return !!t[2] && tn(r);
    }
  }
  return !1;
}
function Og(e) {
  if (lt(e, !1))
    try {
      return typeof new URL(e) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function Ig(e) {
  var t;
  return (t = e == null ? void 0 : e.proposer) == null ? void 0 : t.publicKey;
}
function xg(e) {
  return e == null ? void 0 : e.topic;
}
function Rg(e, t) {
  let r = null;
  return lt(e == null ? void 0 : e.publicKey, !1) || (r = X("MISSING_OR_INVALID", `${t} controller public key should be a string`)), r;
}
function _a(e) {
  let t = !0;
  return Ni(e) ? e.length && (t = e.every((r) => lt(r, !1))) : t = !1, t;
}
function Ag(e, t, r) {
  let i = null;
  return Ni(t) && t.length ? t.forEach((n) => {
    i || tn(n) || (i = ut("UNSUPPORTED_CHAINS", `${r}, chain ${n} should be a string and conform to "namespace:chainId" format`));
  }) : tn(e) || (i = ut("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i;
}
function Tg(e, t, r) {
  let i = null;
  return Object.entries(e).forEach(([n, s]) => {
    if (i)
      return;
    const u = Ag(n, su(n, s), `${t} ${r}`);
    u && (i = u);
  }), i;
}
function Cg(e, t) {
  let r = null;
  return Ni(e) ? e.forEach((i) => {
    r || Dg(i) || (r = ut("UNSUPPORTED_ACCOUNTS", `${t}, account ${i} should be a string and conform to "namespace:chainId:address" format`));
  }) : r = ut("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function Pg(e, t) {
  let r = null;
  return Object.values(e).forEach((i) => {
    if (r)
      return;
    const n = Cg(i == null ? void 0 : i.accounts, `${t} namespace`);
    n && (r = n);
  }), r;
}
function Ng(e, t) {
  let r = null;
  return _a(e == null ? void 0 : e.methods) ? _a(e == null ? void 0 : e.events) || (r = ut("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : r = ut("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), r;
}
function pu(e, t) {
  let r = null;
  return Object.values(e).forEach((i) => {
    if (r)
      return;
    const n = Ng(i, `${t}, namespace`);
    n && (r = n);
  }), r;
}
function Lg(e, t, r) {
  let i = null;
  if (e && Di(e)) {
    const n = pu(e, t);
    n && (i = n);
    const s = Tg(e, t, r);
    s && (i = s);
  } else
    i = X("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
  return i;
}
function Yi(e, t) {
  let r = null;
  if (e && Di(e)) {
    const i = pu(e, t);
    i && (r = i);
    const n = Pg(e, t);
    n && (r = n);
  } else
    r = X("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
  return r;
}
function gu(e) {
  return lt(e.protocol, !0);
}
function Ug(e, t) {
  let r = !1;
  return t && !e ? r = !0 : e && Ni(e) && e.length && e.forEach((i) => {
    r = gu(i);
  }), r;
}
function $g(e) {
  return typeof e == "number";
}
function At(e) {
  return typeof e < "u" && typeof e !== null;
}
function Fg(e) {
  return !(!e || typeof e != "object" || !e.code || !qs(e.code, !1) || !e.message || !lt(e.message, !1));
}
function Mg(e) {
  return !(It(e) || !lt(e.method, !1));
}
function jg(e) {
  return !(It(e) || It(e.result) && It(e.error) || !qs(e.id, !1) || !lt(e.jsonrpc, !1));
}
function Bg(e) {
  return !(It(e) || !lt(e.name, !1));
}
function wa(e, t) {
  return !(!tn(t) || !bg(e).includes(t));
}
function qg(e, t, r) {
  return lt(r, !1) ? vg(e, t).includes(r) : !1;
}
function zg(e, t, r) {
  return lt(r, !1) ? mg(e, t).includes(r) : !1;
}
function Ea(e, t, r) {
  let i = null;
  const n = Vg(e), s = Kg(t), u = Object.keys(n), a = Object.keys(s), l = Sa(Object.keys(e)), f = Sa(Object.keys(t)), h = l.filter((b) => !f.includes(b));
  return h.length && (i = X("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${h.toString()}
      Received: ${Object.keys(t).toString()}`)), Pr(u, a) || (i = X("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${u.toString()}
      Approved: ${a.toString()}`)), Object.keys(t).forEach((b) => {
    if (!b.includes(":") || i)
      return;
    const w = ti(t[b].accounts);
    w.includes(b) || (i = X("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${b}
        Required: ${b}
        Approved: ${w.toString()}`));
  }), u.forEach((b) => {
    i || (Pr(n[b].methods, s[b].methods) ? Pr(n[b].events, s[b].events) || (i = X("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${b}`)) : i = X("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${b}`));
  }), i;
}
function Vg(e) {
  const t = {};
  return Object.keys(e).forEach((r) => {
    var i;
    r.includes(":") ? t[r] = e[r] : (i = e[r].chains) == null || i.forEach((n) => {
      t[n] = { methods: e[r].methods, events: e[r].events };
    });
  }), t;
}
function Sa(e) {
  return [...new Set(e.map((t) => t.includes(":") ? t.split(":")[0] : t))];
}
function Kg(e) {
  const t = {};
  return Object.keys(e).forEach((r) => {
    if (r.includes(":"))
      t[r] = e[r];
    else {
      const i = ti(e[r].accounts);
      i == null || i.forEach((n) => {
        t[n] = { accounts: e[r].accounts.filter((s) => s.includes(`${n}:`)), methods: e[r].methods, events: e[r].events };
      });
    }
  }), t;
}
function kg(e, t) {
  return qs(e, !1) && e <= t.max && e >= t.min;
}
const Wg = "PARSE_ERROR", Hg = "INVALID_REQUEST", Gg = "METHOD_NOT_FOUND", Yg = "INVALID_PARAMS", yu = "INTERNAL_ERROR", zs = "SERVER_ERROR", Jg = [-32700, -32600, -32601, -32602, -32603], Oi = {
  [Wg]: { code: -32700, message: "Parse error" },
  [Hg]: { code: -32600, message: "Invalid Request" },
  [Gg]: { code: -32601, message: "Method not found" },
  [Yg]: { code: -32602, message: "Invalid params" },
  [yu]: { code: -32603, message: "Internal error" },
  [zs]: { code: -32e3, message: "Server error" }
}, bu = zs;
function Xg(e) {
  return Jg.includes(e);
}
function Da(e) {
  return Object.keys(Oi).includes(e) ? Oi[e] : Oi[bu];
}
function Qg(e) {
  const t = Object.values(Oi).find((r) => r.code === e);
  return t || Oi[bu];
}
function Zg(e, t, r) {
  return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${t}`) : e;
}
var vu = {}, ar = {}, Oa;
function ey() {
  if (Oa)
    return ar;
  Oa = 1, Object.defineProperty(ar, "__esModule", { value: !0 }), ar.isBrowserCryptoAvailable = ar.getSubtleCrypto = ar.getBrowerCrypto = void 0;
  function e() {
    return (Nt == null ? void 0 : Nt.crypto) || (Nt == null ? void 0 : Nt.msCrypto) || {};
  }
  ar.getBrowerCrypto = e;
  function t() {
    const i = e();
    return i.subtle || i.webkitSubtle;
  }
  ar.getSubtleCrypto = t;
  function r() {
    return !!e() && !!t();
  }
  return ar.isBrowserCryptoAvailable = r, ar;
}
var cr = {}, Ia;
function ty() {
  if (Ia)
    return cr;
  Ia = 1, Object.defineProperty(cr, "__esModule", { value: !0 }), cr.isBrowser = cr.isNode = cr.isReactNative = void 0;
  function e() {
    return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
  }
  cr.isReactNative = e;
  function t() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  cr.isNode = t;
  function r() {
    return !e() && !t();
  }
  return cr.isBrowser = r, cr;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const t = Kt;
  t.__exportStar(ey(), e), t.__exportStar(ty(), e);
})(vu);
function mu(e = 3) {
  const t = Date.now() * Math.pow(10, e), r = Math.floor(Math.random() * Math.pow(10, e));
  return t + r;
}
function Vs(e = 6) {
  return BigInt(mu(e));
}
function yn(e, t, r) {
  return {
    id: r || mu(),
    jsonrpc: "2.0",
    method: e,
    params: t
  };
}
function Ks(e, t) {
  return {
    id: e,
    jsonrpc: "2.0",
    result: t
  };
}
function ks(e, t, r) {
  return {
    id: e,
    jsonrpc: "2.0",
    error: ry(t, r)
  };
}
function ry(e, t) {
  return typeof e > "u" ? Da(yu) : (typeof e == "string" && (e = Object.assign(Object.assign({}, Da(zs)), { message: e })), typeof t < "u" && (e.data = t), Xg(e.code) && (e = Qg(e.code)), e);
}
class iy {
}
class ny extends iy {
  constructor() {
    super();
  }
}
class sy extends ny {
  constructor(t) {
    super();
  }
}
const oy = "^wss?:";
function ay(e) {
  const t = e.match(new RegExp(/^\w+:/, "gi"));
  if (!(!t || !t.length))
    return t[0];
}
function cy(e, t) {
  const r = ay(e);
  return typeof r > "u" ? !1 : new RegExp(t).test(r);
}
function xa(e) {
  return cy(e, oy);
}
function uy(e) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(e);
}
function _u(e) {
  return typeof e == "object" && "id" in e && "jsonrpc" in e && e.jsonrpc === "2.0";
}
function Ws(e) {
  return _u(e) && "method" in e;
}
function bn(e) {
  return _u(e) && (ur(e) || Gt(e));
}
function ur(e) {
  return "result" in e;
}
function Gt(e) {
  return "error" in e;
}
class ly extends sy {
  constructor(t) {
    super(t), this.events = new Xt.EventEmitter(), this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners();
  }
  async connect(t = this.connection) {
    await this.open(t);
  }
  async disconnect() {
    await this.close();
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async request(t, r) {
    return this.requestStrict(yn(t.method, t.params || [], t.id || Vs().toString()), r);
  }
  async requestStrict(t, r) {
    return new Promise(async (i, n) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (s) {
          n(s);
        }
      this.events.on(`${t.id}`, (s) => {
        Gt(s) ? n(s.error) : i(s.result);
      });
      try {
        await this.connection.send(t, r);
      } catch (s) {
        n(s);
      }
    });
  }
  setConnection(t = this.connection) {
    return t;
  }
  onPayload(t) {
    this.events.emit("payload", t), bn(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
      type: t.method,
      data: t.params
    });
  }
  onClose(t) {
    t && t.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason ? `(${t.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(t = this.connection) {
    this.connection === t && this.connection.connected || (this.connection.connected && this.close(), typeof t == "string" && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (t) => this.onPayload(t)), this.connection.on("close", (t) => this.onClose(t)), this.connection.on("error", (t) => this.events.emit("error", t)), this.connection.on("register_error", (t) => this.onClose()), this.hasRegisteredEventListeners = !0);
  }
}
const fy = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), hy = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", Ra = (e) => e.split("?")[0], Aa = 10, dy = fy();
class py {
  constructor(t) {
    if (this.url = t, this.events = new Xt.EventEmitter(), this.registering = !1, !xa(t))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
    this.url = t;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async open(t = this.url) {
    await this.register(t);
  }
  async close() {
    return new Promise((t, r) => {
      if (typeof this.socket > "u") {
        r(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (i) => {
        this.onClose(i), t();
      }, this.socket.close();
    });
  }
  async send(t, r) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(Rs(t));
    } catch (i) {
      this.onError(t.id, i);
    }
  }
  register(t = this.url) {
    if (!xa(t))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((i, n) => {
        this.events.once("register_error", (s) => {
          this.resetMaxListeners(), n(s);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u")
            return n(new Error("WebSocket connection is missing or invalid"));
          i(this.socket);
        });
      });
    }
    return this.url = t, this.registering = !0, new Promise((r, i) => {
      const n = vu.isReactNative() ? void 0 : { rejectUnauthorized: !uy(t) }, s = new dy(t, [], n);
      hy() ? s.onerror = (u) => {
        const a = u;
        i(this.emitError(a.error));
      } : s.on("error", (u) => {
        i(this.emitError(u));
      }), s.onopen = () => {
        this.onOpen(s), r(s);
      };
    });
  }
  onOpen(t) {
    t.onmessage = (r) => this.onPayload(r), t.onclose = (r) => this.onClose(r), this.socket = t, this.registering = !1, this.events.emit("open");
  }
  onClose(t) {
    this.socket = void 0, this.registering = !1, this.events.emit("close", t);
  }
  onPayload(t) {
    if (typeof t.data > "u")
      return;
    const r = typeof t.data == "string" ? Lc(t.data) : t.data;
    this.events.emit("payload", r);
  }
  onError(t, r) {
    const i = this.parseError(r), n = i.message || i.toString(), s = ks(t, n);
    this.events.emit("payload", s);
  }
  parseError(t, r = this.url) {
    return Zg(t, Ra(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Aa && this.events.setMaxListeners(Aa);
  }
  emitError(t) {
    const r = this.parseError(new Error((t == null ? void 0 : t.message) || `WebSocket connection failed for host: ${Ra(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var rn = { exports: {} };
rn.exports;
(function(e, t) {
  var r = 200, i = "__lodash_hash_undefined__", n = 1, s = 2, u = 9007199254740991, a = "[object Arguments]", l = "[object Array]", f = "[object AsyncFunction]", h = "[object Boolean]", b = "[object Date]", w = "[object Error]", S = "[object Function]", D = "[object GeneratorFunction]", x = "[object Map]", P = "[object Number]", M = "[object Null]", E = "[object Object]", I = "[object Promise]", g = "[object Proxy]", m = "[object RegExp]", d = "[object Set]", o = "[object String]", p = "[object Symbol]", L = "[object Undefined]", U = "[object WeakMap]", $ = "[object ArrayBuffer]", F = "[object DataView]", q = "[object Float32Array]", _ = "[object Float64Array]", T = "[object Int8Array]", G = "[object Int16Array]", V = "[object Int32Array]", z = "[object Uint8Array]", k = "[object Uint8ClampedArray]", B = "[object Uint16Array]", W = "[object Uint32Array]", oe = /[\\^$.*+?()[\]{}|]/g, H = /^\[object .+?Constructor\]$/, ie = /^(?:0|[1-9]\d*)$/, Z = {};
  Z[q] = Z[_] = Z[T] = Z[G] = Z[V] = Z[z] = Z[k] = Z[B] = Z[W] = !0, Z[a] = Z[l] = Z[$] = Z[h] = Z[F] = Z[b] = Z[w] = Z[S] = Z[x] = Z[P] = Z[E] = Z[m] = Z[d] = Z[o] = Z[U] = !1;
  var re = typeof Nt == "object" && Nt && Nt.Object === Object && Nt, N = typeof self == "object" && self && self.Object === Object && self, C = re || N || Function("return this")(), R = t && !t.nodeType && t, c = R && !0 && e && !e.nodeType && e, O = c && c.exports === R, Y = O && re.process, Q = function() {
    try {
      return Y && Y.binding && Y.binding("util");
    } catch {
    }
  }(), be = Q && Q.isTypedArray;
  function ve(y, A) {
    for (var K = -1, ee = y == null ? 0 : y.length, je = 0, fe = []; ++K < ee; ) {
      var Je = y[K];
      A(Je, K, y) && (fe[je++] = Je);
    }
    return fe;
  }
  function he(y, A) {
    for (var K = -1, ee = A.length, je = y.length; ++K < ee; )
      y[je + K] = A[K];
    return y;
  }
  function Ie(y, A) {
    for (var K = -1, ee = y == null ? 0 : y.length; ++K < ee; )
      if (A(y[K], K, y))
        return !0;
    return !1;
  }
  function Be(y, A) {
    for (var K = -1, ee = Array(y); ++K < y; )
      ee[K] = A(K);
    return ee;
  }
  function Le(y) {
    return function(A) {
      return y(A);
    };
  }
  function De(y, A) {
    return y.has(A);
  }
  function we(y, A) {
    return y == null ? void 0 : y[A];
  }
  function de(y) {
    var A = -1, K = Array(y.size);
    return y.forEach(function(ee, je) {
      K[++A] = [je, ee];
    }), K;
  }
  function ge(y, A) {
    return function(K) {
      return y(A(K));
    };
  }
  function pe(y) {
    var A = -1, K = Array(y.size);
    return y.forEach(function(ee) {
      K[++A] = ee;
    }), K;
  }
  var ue = Array.prototype, ce = Function.prototype, ne = Object.prototype, ye = C["__core-js_shared__"], me = ce.toString, ae = ne.hasOwnProperty, Ee = function() {
    var y = /[^.]+$/.exec(ye && ye.keys && ye.keys.IE_PROTO || "");
    return y ? "Symbol(src)_1." + y : "";
  }(), xe = ne.toString, Ce = RegExp(
    "^" + me.call(ae).replace(oe, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Pe = O ? C.Buffer : void 0, Re = C.Symbol, Ct = C.Uint8Array, Mt = ne.propertyIsEnumerable, Qt = ue.splice, ft = Re ? Re.toStringTag : void 0, Zt = Object.getOwnPropertySymbols, jt = Pe ? Pe.isBuffer : void 0, lr = ge(Object.keys, Object), qe = Br(C, "DataView"), Fe = Br(C, "Map"), We = Br(C, "Promise"), Ve = Br(C, "Set"), He = Br(C, "WeakMap"), Me = Br(Object, "create"), Qe = wr(qe), tt = wr(Fe), rt = wr(We), Ze = wr(Ve), it = wr(He), et = Re ? Re.prototype : void 0, Ge = et ? et.valueOf : void 0;
  function Ue(y) {
    var A = -1, K = y == null ? 0 : y.length;
    for (this.clear(); ++A < K; ) {
      var ee = y[A];
      this.set(ee[0], ee[1]);
    }
  }
  function v() {
    this.__data__ = Me ? Me(null) : {}, this.size = 0;
  }
  function j(y) {
    var A = this.has(y) && delete this.__data__[y];
    return this.size -= A ? 1 : 0, A;
  }
  function J(y) {
    var A = this.__data__;
    if (Me) {
      var K = A[y];
      return K === i ? void 0 : K;
    }
    return ae.call(A, y) ? A[y] : void 0;
  }
  function se(y) {
    var A = this.__data__;
    return Me ? A[y] !== void 0 : ae.call(A, y);
  }
  function Ae(y, A) {
    var K = this.__data__;
    return this.size += this.has(y) ? 0 : 1, K[y] = Me && A === void 0 ? i : A, this;
  }
  Ue.prototype.clear = v, Ue.prototype.delete = j, Ue.prototype.get = J, Ue.prototype.has = se, Ue.prototype.set = Ae;
  function Se(y) {
    var A = -1, K = y == null ? 0 : y.length;
    for (this.clear(); ++A < K; ) {
      var ee = y[A];
      this.set(ee[0], ee[1]);
    }
  }
  function Oe() {
    this.__data__ = [], this.size = 0;
  }
  function _e(y) {
    var A = this.__data__, K = Fi(A, y);
    if (K < 0)
      return !1;
    var ee = A.length - 1;
    return K == ee ? A.pop() : Qt.call(A, K, 1), --this.size, !0;
  }
  function ht(y) {
    var A = this.__data__, K = Fi(A, y);
    return K < 0 ? void 0 : A[K][1];
  }
  function Ke(y) {
    return Fi(this.__data__, y) > -1;
  }
  function Ye(y, A) {
    var K = this.__data__, ee = Fi(K, y);
    return ee < 0 ? (++this.size, K.push([y, A])) : K[ee][1] = A, this;
  }
  Se.prototype.clear = Oe, Se.prototype.delete = _e, Se.prototype.get = ht, Se.prototype.has = Ke, Se.prototype.set = Ye;
  function nt(y) {
    var A = -1, K = y == null ? 0 : y.length;
    for (this.clear(); ++A < K; ) {
      var ee = y[A];
      this.set(ee[0], ee[1]);
    }
  }
  function fr() {
    this.size = 0, this.__data__ = {
      hash: new Ue(),
      map: new (Fe || Se)(),
      string: new Ue()
    };
  }
  function Ui(y) {
    var A = Mi(this, y).delete(y);
    return this.size -= A ? 1 : 0, A;
  }
  function kt(y) {
    return Mi(this, y).get(y);
  }
  function Gu(y) {
    return Mi(this, y).has(y);
  }
  function Yu(y, A) {
    var K = Mi(this, y), ee = K.size;
    return K.set(y, A), this.size += K.size == ee ? 0 : 1, this;
  }
  nt.prototype.clear = fr, nt.prototype.delete = Ui, nt.prototype.get = kt, nt.prototype.has = Gu, nt.prototype.set = Yu;
  function $i(y) {
    var A = -1, K = y == null ? 0 : y.length;
    for (this.__data__ = new nt(); ++A < K; )
      this.add(y[A]);
  }
  function Ju(y) {
    return this.__data__.set(y, i), this;
  }
  function Xu(y) {
    return this.__data__.has(y);
  }
  $i.prototype.add = $i.prototype.push = Ju, $i.prototype.has = Xu;
  function hr(y) {
    var A = this.__data__ = new Se(y);
    this.size = A.size;
  }
  function Qu() {
    this.__data__ = new Se(), this.size = 0;
  }
  function Zu(y) {
    var A = this.__data__, K = A.delete(y);
    return this.size = A.size, K;
  }
  function el(y) {
    return this.__data__.get(y);
  }
  function tl(y) {
    return this.__data__.has(y);
  }
  function rl(y, A) {
    var K = this.__data__;
    if (K instanceof Se) {
      var ee = K.__data__;
      if (!Fe || ee.length < r - 1)
        return ee.push([y, A]), this.size = ++K.size, this;
      K = this.__data__ = new nt(ee);
    }
    return K.set(y, A), this.size = K.size, this;
  }
  hr.prototype.clear = Qu, hr.prototype.delete = Zu, hr.prototype.get = el, hr.prototype.has = tl, hr.prototype.set = rl;
  function il(y, A) {
    var K = ji(y), ee = !K && vl(y), je = !K && !ee && _n(y), fe = !K && !ee && !je && po(y), Je = K || ee || je || fe, ot = Je ? Be(y.length, String) : [], dt = ot.length;
    for (var ke in y)
      (A || ae.call(y, ke)) && !(Je && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ke == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      je && (ke == "offset" || ke == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      fe && (ke == "buffer" || ke == "byteLength" || ke == "byteOffset") || // Skip index properties.
      dl(ke, dt))) && ot.push(ke);
    return ot;
  }
  function Fi(y, A) {
    for (var K = y.length; K--; )
      if (uo(y[K][0], A))
        return K;
    return -1;
  }
  function nl(y, A, K) {
    var ee = A(y);
    return ji(y) ? ee : he(ee, K(y));
  }
  function ni(y) {
    return y == null ? y === void 0 ? L : M : ft && ft in Object(y) ? fl(y) : bl(y);
  }
  function so(y) {
    return si(y) && ni(y) == a;
  }
  function oo(y, A, K, ee, je) {
    return y === A ? !0 : y == null || A == null || !si(y) && !si(A) ? y !== y && A !== A : sl(y, A, K, ee, oo, je);
  }
  function sl(y, A, K, ee, je, fe) {
    var Je = ji(y), ot = ji(A), dt = Je ? l : dr(y), ke = ot ? l : dr(A);
    dt = dt == a ? E : dt, ke = ke == a ? E : ke;
    var Pt = dt == E, Wt = ke == E, bt = dt == ke;
    if (bt && _n(y)) {
      if (!_n(A))
        return !1;
      Je = !0, Pt = !1;
    }
    if (bt && !Pt)
      return fe || (fe = new hr()), Je || po(y) ? ao(y, A, K, ee, je, fe) : ul(y, A, dt, K, ee, je, fe);
    if (!(K & n)) {
      var Bt = Pt && ae.call(y, "__wrapped__"), qt = Wt && ae.call(A, "__wrapped__");
      if (Bt || qt) {
        var pr = Bt ? y.value() : y, or = qt ? A.value() : A;
        return fe || (fe = new hr()), je(pr, or, K, ee, fe);
      }
    }
    return bt ? (fe || (fe = new hr()), ll(y, A, K, ee, je, fe)) : !1;
  }
  function ol(y) {
    if (!ho(y) || gl(y))
      return !1;
    var A = lo(y) ? Ce : H;
    return A.test(wr(y));
  }
  function al(y) {
    return si(y) && fo(y.length) && !!Z[ni(y)];
  }
  function cl(y) {
    if (!yl(y))
      return lr(y);
    var A = [];
    for (var K in Object(y))
      ae.call(y, K) && K != "constructor" && A.push(K);
    return A;
  }
  function ao(y, A, K, ee, je, fe) {
    var Je = K & n, ot = y.length, dt = A.length;
    if (ot != dt && !(Je && dt > ot))
      return !1;
    var ke = fe.get(y);
    if (ke && fe.get(A))
      return ke == A;
    var Pt = -1, Wt = !0, bt = K & s ? new $i() : void 0;
    for (fe.set(y, A), fe.set(A, y); ++Pt < ot; ) {
      var Bt = y[Pt], qt = A[Pt];
      if (ee)
        var pr = Je ? ee(qt, Bt, Pt, A, y, fe) : ee(Bt, qt, Pt, y, A, fe);
      if (pr !== void 0) {
        if (pr)
          continue;
        Wt = !1;
        break;
      }
      if (bt) {
        if (!Ie(A, function(or, Er) {
          if (!De(bt, Er) && (Bt === or || je(Bt, or, K, ee, fe)))
            return bt.push(Er);
        })) {
          Wt = !1;
          break;
        }
      } else if (!(Bt === qt || je(Bt, qt, K, ee, fe))) {
        Wt = !1;
        break;
      }
    }
    return fe.delete(y), fe.delete(A), Wt;
  }
  function ul(y, A, K, ee, je, fe, Je) {
    switch (K) {
      case F:
        if (y.byteLength != A.byteLength || y.byteOffset != A.byteOffset)
          return !1;
        y = y.buffer, A = A.buffer;
      case $:
        return !(y.byteLength != A.byteLength || !fe(new Ct(y), new Ct(A)));
      case h:
      case b:
      case P:
        return uo(+y, +A);
      case w:
        return y.name == A.name && y.message == A.message;
      case m:
      case o:
        return y == A + "";
      case x:
        var ot = de;
      case d:
        var dt = ee & n;
        if (ot || (ot = pe), y.size != A.size && !dt)
          return !1;
        var ke = Je.get(y);
        if (ke)
          return ke == A;
        ee |= s, Je.set(y, A);
        var Pt = ao(ot(y), ot(A), ee, je, fe, Je);
        return Je.delete(y), Pt;
      case p:
        if (Ge)
          return Ge.call(y) == Ge.call(A);
    }
    return !1;
  }
  function ll(y, A, K, ee, je, fe) {
    var Je = K & n, ot = co(y), dt = ot.length, ke = co(A), Pt = ke.length;
    if (dt != Pt && !Je)
      return !1;
    for (var Wt = dt; Wt--; ) {
      var bt = ot[Wt];
      if (!(Je ? bt in A : ae.call(A, bt)))
        return !1;
    }
    var Bt = fe.get(y);
    if (Bt && fe.get(A))
      return Bt == A;
    var qt = !0;
    fe.set(y, A), fe.set(A, y);
    for (var pr = Je; ++Wt < dt; ) {
      bt = ot[Wt];
      var or = y[bt], Er = A[bt];
      if (ee)
        var go = Je ? ee(Er, or, bt, A, y, fe) : ee(or, Er, bt, y, A, fe);
      if (!(go === void 0 ? or === Er || je(or, Er, K, ee, fe) : go)) {
        qt = !1;
        break;
      }
      pr || (pr = bt == "constructor");
    }
    if (qt && !pr) {
      var Bi = y.constructor, qi = A.constructor;
      Bi != qi && "constructor" in y && "constructor" in A && !(typeof Bi == "function" && Bi instanceof Bi && typeof qi == "function" && qi instanceof qi) && (qt = !1);
    }
    return fe.delete(y), fe.delete(A), qt;
  }
  function co(y) {
    return nl(y, wl, hl);
  }
  function Mi(y, A) {
    var K = y.__data__;
    return pl(A) ? K[typeof A == "string" ? "string" : "hash"] : K.map;
  }
  function Br(y, A) {
    var K = we(y, A);
    return ol(K) ? K : void 0;
  }
  function fl(y) {
    var A = ae.call(y, ft), K = y[ft];
    try {
      y[ft] = void 0;
      var ee = !0;
    } catch {
    }
    var je = xe.call(y);
    return ee && (A ? y[ft] = K : delete y[ft]), je;
  }
  var hl = Zt ? function(y) {
    return y == null ? [] : (y = Object(y), ve(Zt(y), function(A) {
      return Mt.call(y, A);
    }));
  } : El, dr = ni;
  (qe && dr(new qe(new ArrayBuffer(1))) != F || Fe && dr(new Fe()) != x || We && dr(We.resolve()) != I || Ve && dr(new Ve()) != d || He && dr(new He()) != U) && (dr = function(y) {
    var A = ni(y), K = A == E ? y.constructor : void 0, ee = K ? wr(K) : "";
    if (ee)
      switch (ee) {
        case Qe:
          return F;
        case tt:
          return x;
        case rt:
          return I;
        case Ze:
          return d;
        case it:
          return U;
      }
    return A;
  });
  function dl(y, A) {
    return A = A ?? u, !!A && (typeof y == "number" || ie.test(y)) && y > -1 && y % 1 == 0 && y < A;
  }
  function pl(y) {
    var A = typeof y;
    return A == "string" || A == "number" || A == "symbol" || A == "boolean" ? y !== "__proto__" : y === null;
  }
  function gl(y) {
    return !!Ee && Ee in y;
  }
  function yl(y) {
    var A = y && y.constructor, K = typeof A == "function" && A.prototype || ne;
    return y === K;
  }
  function bl(y) {
    return xe.call(y);
  }
  function wr(y) {
    if (y != null) {
      try {
        return me.call(y);
      } catch {
      }
      try {
        return y + "";
      } catch {
      }
    }
    return "";
  }
  function uo(y, A) {
    return y === A || y !== y && A !== A;
  }
  var vl = so(function() {
    return arguments;
  }()) ? so : function(y) {
    return si(y) && ae.call(y, "callee") && !Mt.call(y, "callee");
  }, ji = Array.isArray;
  function ml(y) {
    return y != null && fo(y.length) && !lo(y);
  }
  var _n = jt || Sl;
  function _l(y, A) {
    return oo(y, A);
  }
  function lo(y) {
    if (!ho(y))
      return !1;
    var A = ni(y);
    return A == S || A == D || A == f || A == g;
  }
  function fo(y) {
    return typeof y == "number" && y > -1 && y % 1 == 0 && y <= u;
  }
  function ho(y) {
    var A = typeof y;
    return y != null && (A == "object" || A == "function");
  }
  function si(y) {
    return y != null && typeof y == "object";
  }
  var po = be ? Le(be) : al;
  function wl(y) {
    return ml(y) ? il(y) : cl(y);
  }
  function El() {
    return [];
  }
  function Sl() {
    return !1;
  }
  e.exports = _l;
})(rn, rn.exports);
var gy = rn.exports;
const yy = /* @__PURE__ */ Os(gy);
function by(e, t) {
  if (e.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), i = 0; i < r.length; i++)
    r[i] = 255;
  for (var n = 0; n < e.length; n++) {
    var s = e.charAt(n), u = s.charCodeAt(0);
    if (r[u] !== 255)
      throw new TypeError(s + " is ambiguous");
    r[u] = n;
  }
  var a = e.length, l = e.charAt(0), f = Math.log(a) / Math.log(256), h = Math.log(256) / Math.log(a);
  function b(D) {
    if (D instanceof Uint8Array || (ArrayBuffer.isView(D) ? D = new Uint8Array(D.buffer, D.byteOffset, D.byteLength) : Array.isArray(D) && (D = Uint8Array.from(D))), !(D instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (D.length === 0)
      return "";
    for (var x = 0, P = 0, M = 0, E = D.length; M !== E && D[M] === 0; )
      M++, x++;
    for (var I = (E - M) * h + 1 >>> 0, g = new Uint8Array(I); M !== E; ) {
      for (var m = D[M], d = 0, o = I - 1; (m !== 0 || d < P) && o !== -1; o--, d++)
        m += 256 * g[o] >>> 0, g[o] = m % a >>> 0, m = m / a >>> 0;
      if (m !== 0)
        throw new Error("Non-zero carry");
      P = d, M++;
    }
    for (var p = I - P; p !== I && g[p] === 0; )
      p++;
    for (var L = l.repeat(x); p < I; ++p)
      L += e.charAt(g[p]);
    return L;
  }
  function w(D) {
    if (typeof D != "string")
      throw new TypeError("Expected String");
    if (D.length === 0)
      return new Uint8Array();
    var x = 0;
    if (D[x] !== " ") {
      for (var P = 0, M = 0; D[x] === l; )
        P++, x++;
      for (var E = (D.length - x) * f + 1 >>> 0, I = new Uint8Array(E); D[x]; ) {
        var g = r[D.charCodeAt(x)];
        if (g === 255)
          return;
        for (var m = 0, d = E - 1; (g !== 0 || m < M) && d !== -1; d--, m++)
          g += a * I[d] >>> 0, I[d] = g % 256 >>> 0, g = g / 256 >>> 0;
        if (g !== 0)
          throw new Error("Non-zero carry");
        M = m, x++;
      }
      if (D[x] !== " ") {
        for (var o = E - M; o !== E && I[o] === 0; )
          o++;
        for (var p = new Uint8Array(P + (E - o)), L = P; o !== E; )
          p[L++] = I[o++];
        return p;
      }
    }
  }
  function S(D) {
    var x = w(D);
    if (x)
      return x;
    throw new Error(`Non-${t} character`);
  }
  return { encode: b, decodeUnsafe: w, decode: S };
}
var vy = by, my = vy;
const wu = (e) => {
  if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
    return e;
  if (e instanceof ArrayBuffer)
    return new Uint8Array(e);
  if (ArrayBuffer.isView(e))
    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  throw new Error("Unknown type, must be binary type");
}, _y = (e) => new TextEncoder().encode(e), wy = (e) => new TextDecoder().decode(e);
class Ey {
  constructor(t, r, i) {
    this.name = t, this.prefix = r, this.baseEncode = i;
  }
  encode(t) {
    if (t instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Sy {
  constructor(t, r, i) {
    if (this.name = t, this.prefix = r, r.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = i;
  }
  decode(t) {
    if (typeof t == "string") {
      if (t.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(t.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(t) {
    return Eu(this, t);
  }
}
class Dy {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return Eu(this, t);
  }
  decode(t) {
    const r = t[0], i = this.decoders[r];
    if (i)
      return i.decode(t);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Eu = (e, t) => new Dy({ ...e.decoders || { [e.prefix]: e }, ...t.decoders || { [t.prefix]: t } });
class Oy {
  constructor(t, r, i, n) {
    this.name = t, this.prefix = r, this.baseEncode = i, this.baseDecode = n, this.encoder = new Ey(t, r, i), this.decoder = new Sy(t, r, n);
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const vn = ({ name: e, prefix: t, encode: r, decode: i }) => new Oy(e, t, r, i), Li = ({ prefix: e, name: t, alphabet: r }) => {
  const { encode: i, decode: n } = my(r, t);
  return vn({ prefix: e, name: t, encode: i, decode: (s) => wu(n(s)) });
}, Iy = (e, t, r, i) => {
  const n = {};
  for (let h = 0; h < t.length; ++h)
    n[t[h]] = h;
  let s = e.length;
  for (; e[s - 1] === "="; )
    --s;
  const u = new Uint8Array(s * r / 8 | 0);
  let a = 0, l = 0, f = 0;
  for (let h = 0; h < s; ++h) {
    const b = n[e[h]];
    if (b === void 0)
      throw new SyntaxError(`Non-${i} character`);
    l = l << r | b, a += r, a >= 8 && (a -= 8, u[f++] = 255 & l >> a);
  }
  if (a >= r || 255 & l << 8 - a)
    throw new SyntaxError("Unexpected end of data");
  return u;
}, xy = (e, t, r) => {
  const i = t[t.length - 1] === "=", n = (1 << r) - 1;
  let s = "", u = 0, a = 0;
  for (let l = 0; l < e.length; ++l)
    for (a = a << 8 | e[l], u += 8; u > r; )
      u -= r, s += t[n & a >> u];
  if (u && (s += t[n & a << r - u]), i)
    for (; s.length * r & 7; )
      s += "=";
  return s;
}, yt = ({ name: e, prefix: t, bitsPerChar: r, alphabet: i }) => vn({ prefix: t, name: e, encode(n) {
  return xy(n, i, r);
}, decode(n) {
  return Iy(n, i, r, e);
} }), Ry = vn({ prefix: "\0", name: "identity", encode: (e) => wy(e), decode: (e) => _y(e) });
var Ay = Object.freeze({ __proto__: null, identity: Ry });
const Ty = yt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Cy = Object.freeze({ __proto__: null, base2: Ty });
const Py = yt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Ny = Object.freeze({ __proto__: null, base8: Py });
const Ly = Li({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Uy = Object.freeze({ __proto__: null, base10: Ly });
const $y = yt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), Fy = yt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var My = Object.freeze({ __proto__: null, base16: $y, base16upper: Fy });
const jy = yt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), By = yt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), qy = yt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), zy = yt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Vy = yt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Ky = yt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), ky = yt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), Wy = yt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), Hy = yt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Gy = Object.freeze({ __proto__: null, base32: jy, base32upper: By, base32pad: qy, base32padupper: zy, base32hex: Vy, base32hexupper: Ky, base32hexpad: ky, base32hexpadupper: Wy, base32z: Hy });
const Yy = Li({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), Jy = Li({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Xy = Object.freeze({ __proto__: null, base36: Yy, base36upper: Jy });
const Qy = Li({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Zy = Li({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var e0 = Object.freeze({ __proto__: null, base58btc: Qy, base58flickr: Zy });
const t0 = yt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), r0 = yt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), i0 = yt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), n0 = yt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var s0 = Object.freeze({ __proto__: null, base64: t0, base64pad: r0, base64url: i0, base64urlpad: n0 });
const Su = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), o0 = Su.reduce((e, t, r) => (e[r] = t, e), []), a0 = Su.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []);
function c0(e) {
  return e.reduce((t, r) => (t += o0[r], t), "");
}
function u0(e) {
  const t = [];
  for (const r of e) {
    const i = a0[r.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    t.push(i);
  }
  return new Uint8Array(t);
}
const l0 = vn({ prefix: "🚀", name: "base256emoji", encode: c0, decode: u0 });
var f0 = Object.freeze({ __proto__: null, base256emoji: l0 }), h0 = Du, Ta = 128, d0 = 127, p0 = ~d0, g0 = Math.pow(2, 31);
function Du(e, t, r) {
  t = t || [], r = r || 0;
  for (var i = r; e >= g0; )
    t[r++] = e & 255 | Ta, e /= 128;
  for (; e & p0; )
    t[r++] = e & 255 | Ta, e >>>= 7;
  return t[r] = e | 0, Du.bytes = r - i + 1, t;
}
var y0 = ds, b0 = 128, Ca = 127;
function ds(e, i) {
  var r = 0, i = i || 0, n = 0, s = i, u, a = e.length;
  do {
    if (s >= a)
      throw ds.bytes = 0, new RangeError("Could not decode varint");
    u = e[s++], r += n < 28 ? (u & Ca) << n : (u & Ca) * Math.pow(2, n), n += 7;
  } while (u >= b0);
  return ds.bytes = s - i, r;
}
var v0 = Math.pow(2, 7), m0 = Math.pow(2, 14), _0 = Math.pow(2, 21), w0 = Math.pow(2, 28), E0 = Math.pow(2, 35), S0 = Math.pow(2, 42), D0 = Math.pow(2, 49), O0 = Math.pow(2, 56), I0 = Math.pow(2, 63), x0 = function(e) {
  return e < v0 ? 1 : e < m0 ? 2 : e < _0 ? 3 : e < w0 ? 4 : e < E0 ? 5 : e < S0 ? 6 : e < D0 ? 7 : e < O0 ? 8 : e < I0 ? 9 : 10;
}, R0 = { encode: h0, decode: y0, encodingLength: x0 }, Ou = R0;
const Pa = (e, t, r = 0) => (Ou.encode(e, t, r), t), Na = (e) => Ou.encodingLength(e), ps = (e, t) => {
  const r = t.byteLength, i = Na(e), n = i + Na(r), s = new Uint8Array(n + r);
  return Pa(e, s, 0), Pa(r, s, i), s.set(t, n), new A0(e, r, t, s);
};
class A0 {
  constructor(t, r, i, n) {
    this.code = t, this.size = r, this.digest = i, this.bytes = n;
  }
}
const Iu = ({ name: e, code: t, encode: r }) => new T0(e, t, r);
class T0 {
  constructor(t, r, i) {
    this.name = t, this.code = r, this.encode = i;
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const r = this.encode(t);
      return r instanceof Uint8Array ? ps(this.code, r) : r.then((i) => ps(this.code, i));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const xu = (e) => async (t) => new Uint8Array(await crypto.subtle.digest(e, t)), C0 = Iu({ name: "sha2-256", code: 18, encode: xu("SHA-256") }), P0 = Iu({ name: "sha2-512", code: 19, encode: xu("SHA-512") });
var N0 = Object.freeze({ __proto__: null, sha256: C0, sha512: P0 });
const Ru = 0, L0 = "identity", Au = wu, U0 = (e) => ps(Ru, Au(e)), $0 = { code: Ru, name: L0, encode: Au, digest: U0 };
var F0 = Object.freeze({ __proto__: null, identity: $0 });
new TextEncoder(), new TextDecoder();
const La = { ...Ay, ...Cy, ...Ny, ...Uy, ...My, ...Gy, ...Xy, ...e0, ...s0, ...f0 };
({ ...N0, ...F0 });
function Tu(e) {
  return globalThis.Buffer != null ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e;
}
function M0(e = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Tu(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e);
}
function Cu(e, t, r, i) {
  return { name: e, prefix: t, encoder: { name: e, prefix: t, encode: r }, decoder: { decode: i } };
}
const Ua = Cu("utf8", "u", (e) => "u" + new TextDecoder("utf8").decode(e), (e) => new TextEncoder().encode(e.substring(1))), Nn = Cu("ascii", "a", (e) => {
  let t = "a";
  for (let r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]);
  return t;
}, (e) => {
  e = e.substring(1);
  const t = M0(e.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e.charCodeAt(r);
  return t;
}), j0 = { utf8: Ua, "utf-8": Ua, hex: La.base16, latin1: Nn, ascii: Nn, binary: Nn, ...La };
function B0(e, t = "utf8") {
  const r = j0[t];
  if (!r)
    throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Tu(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`);
}
const Pu = "wc", q0 = 2, Hs = "core", vr = `${Pu}@2:${Hs}:`, z0 = { name: Hs, logger: "error" }, V0 = { database: ":memory:" }, K0 = "crypto", $a = "client_ed25519_seed", k0 = te.ONE_DAY, W0 = "keychain", H0 = "0.3", G0 = "messages", Y0 = "0.3", J0 = te.SIX_HOURS, X0 = "publisher", Nu = "irn", Q0 = "error", Lu = "wss://relay.walletconnect.com", Fa = "wss://relay.walletconnect.org", Z0 = "relayer", Xe = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, eb = "_subscription", yi = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, tb = te.ONE_SECOND / 2, rb = "2.9.1", ib = 1e4, nb = "0.3", sb = "WALLETCONNECT_CLIENT_ID", nr = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, ob = "subscription", ab = "0.3", cb = te.FIVE_SECONDS * 1e3, ub = "pairing", lb = "0.3", bi = { wc_pairingDelete: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 0 } } }, ir = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, fb = "history", hb = "0.3", db = "expirer", Vt = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, pb = "0.3", Ln = "verify-api", Ma = "https://verify.walletconnect.com";
class gb {
  constructor(t, r) {
    this.core = t, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = W0, this.version = H0, this.initialized = !1, this.storagePrefix = vr, this.init = async () => {
      if (!this.initialized) {
        const i = await this.getKeyChain();
        typeof i < "u" && (this.keychain = i), this.initialized = !0;
      }
    }, this.has = (i) => (this.isInitialized(), this.keychain.has(i)), this.set = async (i, n) => {
      this.isInitialized(), this.keychain.set(i, n), await this.persist();
    }, this.get = (i) => {
      this.isInitialized();
      const n = this.keychain.get(i);
      if (typeof n > "u") {
        const { message: s } = X("NO_MATCHING_KEY", `${this.name}: ${i}`);
        throw new Error(s);
      }
      return n;
    }, this.del = async (i) => {
      this.isInitialized(), this.keychain.delete(i), await this.persist();
    }, this.core = t, this.logger = Te.generateChildLogger(r, this.name);
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setKeyChain(t) {
    await this.core.storage.setItem(this.storageKey, lu(t));
  }
  async getKeyChain() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? fu(t) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class yb {
  constructor(t, r, i) {
    this.core = t, this.logger = r, this.name = K0, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (n) => (this.isInitialized(), this.keychain.has(n)), this.getClientId = async () => {
      this.isInitialized();
      const n = await this.getClientSeed(), s = ia(n);
      return Yc(s.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const n = jp();
      return this.setPrivateKey(n.publicKey, n.privateKey);
    }, this.signJWT = async (n) => {
      this.isInitialized();
      const s = await this.getClientSeed(), u = ia(s), a = fs();
      return await Hd(a, n, k0, u);
    }, this.generateSharedKey = (n, s, u) => {
      this.isInitialized();
      const a = this.getPrivateKey(n), l = Bp(a, s);
      return this.setSymKey(l, u);
    }, this.setSymKey = async (n, s) => {
      this.isInitialized();
      const u = s || qp(n);
      return await this.keychain.set(u, n), u;
    }, this.deleteKeyPair = async (n) => {
      this.isInitialized(), await this.keychain.del(n);
    }, this.deleteSymKey = async (n) => {
      this.isInitialized(), await this.keychain.del(n);
    }, this.encode = async (n, s, u) => {
      this.isInitialized();
      const a = cu(u), l = Rs(s);
      if (pa(a)) {
        const w = a.senderPublicKey, S = a.receiverPublicKey;
        n = await this.generateSharedKey(w, S);
      }
      const f = this.getSymKey(n), { type: h, senderPublicKey: b } = a;
      return Vp({ type: h, symKey: f, message: l, senderPublicKey: b });
    }, this.decode = async (n, s, u) => {
      this.isInitialized();
      const a = Wp(s, u);
      if (pa(a)) {
        const l = a.receiverPublicKey, f = a.senderPublicKey;
        n = await this.generateSharedKey(l, f);
      }
      try {
        const l = this.getSymKey(n), f = Kp({ symKey: l, encoded: s });
        return Lc(f);
      } catch (l) {
        this.logger.error(`Failed to decode message from topic: '${n}', clientId: '${await this.getClientId()}'`), this.logger.error(l);
      }
    }, this.getPayloadType = (n) => {
      const s = Zi(n);
      return Pi(s.type);
    }, this.getPayloadSenderPublicKey = (n) => {
      const s = Zi(n);
      return s.senderPublicKey ? Rt(s.senderPublicKey, xt) : void 0;
    }, this.core = t, this.logger = Te.generateChildLogger(r, this.name), this.keychain = i || new gb(this.core, this.logger);
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  async setPrivateKey(t, r) {
    return await this.keychain.set(t, r), t;
  }
  getPrivateKey(t) {
    return this.keychain.get(t);
  }
  async getClientSeed() {
    let t = "";
    try {
      t = this.keychain.get($a);
    } catch {
      t = fs(), await this.keychain.set($a, t);
    }
    return B0(t, "base16");
  }
  getSymKey(t) {
    return this.keychain.get(t);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class bb extends Jf {
  constructor(t, r) {
    super(t, r), this.logger = t, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = G0, this.version = Y0, this.initialized = !1, this.storagePrefix = vr, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i = await this.getRelayerMessages();
          typeof i < "u" && (this.messages = i), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i);
        } finally {
          this.initialized = !0;
        }
      }
    }, this.set = async (i, n) => {
      this.isInitialized();
      const s = Hr(n);
      let u = this.messages.get(i);
      return typeof u > "u" && (u = {}), typeof u[s] < "u" || (u[s] = n, this.messages.set(i, u), await this.persist()), s;
    }, this.get = (i) => {
      this.isInitialized();
      let n = this.messages.get(i);
      return typeof n > "u" && (n = {}), n;
    }, this.has = (i, n) => {
      this.isInitialized();
      const s = this.get(i), u = Hr(n);
      return typeof s[u] < "u";
    }, this.del = async (i) => {
      this.isInitialized(), this.messages.delete(i), await this.persist();
    }, this.logger = Te.generateChildLogger(t, this.name), this.core = r;
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setRelayerMessages(t) {
    await this.core.storage.setItem(this.storageKey, lu(t));
  }
  async getRelayerMessages() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? fu(t) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class vb extends Xf {
  constructor(t, r) {
    super(t, r), this.relayer = t, this.logger = r, this.events = new Xt.EventEmitter(), this.name = X0, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = te.toMiliseconds(te.TEN_SECONDS), this.queueTimeout = te.toMiliseconds(te.FIVE_SECONDS), this.needsTransportRestart = !1, this.publish = async (i, n, s) => {
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: n, opts: s } });
      try {
        const u = (s == null ? void 0 : s.ttl) || J0, a = hs(s), l = (s == null ? void 0 : s.prompt) || !1, f = (s == null ? void 0 : s.tag) || 0, h = (s == null ? void 0 : s.id) || Vs().toString(), b = { topic: i, message: n, opts: { ttl: u, relay: a, prompt: l, tag: f, id: h } }, w = setTimeout(() => this.queue.set(h, b), this.queueTimeout);
        try {
          await await en(this.rpcPublish(i, n, u, a, l, f, h), this.publishTimeout), clearTimeout(w), this.relayer.events.emit(Xe.publish, b);
        } catch {
          this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0;
          return;
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: n, opts: s } });
      } catch (u) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(u), u;
      }
    }, this.on = (i, n) => {
      this.events.on(i, n);
    }, this.once = (i, n) => {
      this.events.once(i, n);
    }, this.off = (i, n) => {
      this.events.off(i, n);
    }, this.removeListener = (i, n) => {
      this.events.removeListener(i, n);
    }, this.relayer = t, this.logger = Te.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  rpcPublish(t, r, i, n, s, u, a) {
    var l, f, h, b;
    const w = { method: Gi(n.protocol).publish, params: { topic: t, message: r, ttl: i, prompt: s, tag: u }, id: a };
    return It((l = w.params) == null ? void 0 : l.prompt) && ((f = w.params) == null || delete f.prompt), It((h = w.params) == null ? void 0 : h.tag) && ((b = w.params) == null || delete b.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: w }), this.relayer.request(w);
  }
  onPublish(t) {
    this.queue.delete(t);
  }
  checkQueue() {
    this.queue.forEach(async (t) => {
      const { topic: r, message: i, opts: n } = t;
      await this.publish(r, i, n);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Qr.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(Xe.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(Xe.message_ack, (t) => {
      this.onPublish(t.id.toString());
    });
  }
}
class mb {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (t, r) => {
      const i = this.get(t);
      this.exists(t, r) || this.map.set(t, [...i, r]);
    }, this.get = (t) => this.map.get(t) || [], this.exists = (t, r) => this.get(t).includes(r), this.delete = (t, r) => {
      if (typeof r > "u") {
        this.map.delete(t);
        return;
      }
      if (!this.map.has(t))
        return;
      const i = this.get(t);
      if (!this.exists(t, r))
        return;
      const n = i.filter((s) => s !== r);
      if (!n.length) {
        this.map.delete(t);
        return;
      }
      this.map.set(t, n);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var _b = Object.defineProperty, wb = Object.defineProperties, Eb = Object.getOwnPropertyDescriptors, ja = Object.getOwnPropertySymbols, Sb = Object.prototype.hasOwnProperty, Db = Object.prototype.propertyIsEnumerable, Ba = (e, t, r) => t in e ? _b(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, vi = (e, t) => {
  for (var r in t || (t = {}))
    Sb.call(t, r) && Ba(e, r, t[r]);
  if (ja)
    for (var r of ja(t))
      Db.call(t, r) && Ba(e, r, t[r]);
  return e;
}, Un = (e, t) => wb(e, Eb(t));
class Ob extends eh {
  constructor(t, r) {
    super(t, r), this.relayer = t, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new mb(), this.events = new Xt.EventEmitter(), this.name = ob, this.version = ab, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = vr, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restart(), this.registerEventListeners(), this.onEnable(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (i, n) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: n } });
      try {
        const s = hs(n), u = { topic: i, relay: s };
        this.pending.set(i, u);
        const a = await this.rpcSubscribe(i, s);
        return this.onSubscribe(a, u), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: n } }), a;
      } catch (s) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(s), s;
      }
    }, this.unsubscribe = async (i, n) => {
      await this.restartToComplete(), this.isInitialized(), typeof (n == null ? void 0 : n.id) < "u" ? await this.unsubscribeById(i, n.id, n) : await this.unsubscribeByTopic(i, n);
    }, this.isSubscribed = async (i) => this.topics.includes(i) ? !0 : await new Promise((n, s) => {
      const u = new te.Watch();
      u.start(this.pendingSubscriptionWatchLabel);
      const a = setInterval(() => {
        !this.pending.has(i) && this.topics.includes(i) && (clearInterval(a), u.stop(this.pendingSubscriptionWatchLabel), n(!0)), u.elapsed(this.pendingSubscriptionWatchLabel) >= cb && (clearInterval(a), u.stop(this.pendingSubscriptionWatchLabel), s(new Error("Subscription resolution timeout")));
      }, this.pollingInterval);
    }).catch(() => !1), this.on = (i, n) => {
      this.events.on(i, n);
    }, this.once = (i, n) => {
      this.events.once(i, n);
    }, this.off = (i, n) => {
      this.events.off(i, n);
    }, this.removeListener = (i, n) => {
      this.events.removeListener(i, n);
    }, this.restart = async () => {
      this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
    }, this.relayer = t, this.logger = Te.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
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
  hasSubscription(t, r) {
    let i = !1;
    try {
      i = this.getSubscription(t).topic === r;
    } catch {
    }
    return i;
  }
  onEnable() {
    this.cached = [], this.initialized = !0;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(t, r) {
    const i = this.topicMap.get(t);
    await Promise.all(i.map(async (n) => await this.unsubscribeById(t, n, r)));
  }
  async unsubscribeById(t, r, i) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: t, id: r, opts: i } });
    try {
      const n = hs(i);
      await this.rpcUnsubscribe(t, r, n);
      const s = ut("USER_DISCONNECTED", `${this.name}, ${t}`);
      await this.onUnsubscribe(t, r, s), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: t, id: r, opts: i } });
    } catch (n) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(n), n;
    }
  }
  async rpcSubscribe(t, r) {
    const i = { method: Gi(r.protocol).subscribe, params: { topic: t } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      await await en(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Xe.connection_stalled);
    }
    return Hr(t + this.clientId);
  }
  async rpcBatchSubscribe(t) {
    if (!t.length)
      return;
    const r = t[0].relay, i = { method: Gi(r.protocol).batchSubscribe, params: { topics: t.map((n) => n.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      return await await en(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Xe.connection_stalled);
    }
  }
  rpcUnsubscribe(t, r, i) {
    const n = { method: Gi(i.protocol).unsubscribe, params: { topic: t, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n }), this.relayer.request(n);
  }
  onSubscribe(t, r) {
    this.setSubscription(t, Un(vi({}, r), { id: t })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(t) {
    t.length && t.forEach((r) => {
      this.setSubscription(r.id, vi({}, r)), this.pending.delete(r.topic);
    });
  }
  async onUnsubscribe(t, r, i) {
    this.events.removeAllListeners(r), this.hasSubscription(r, t) && this.deleteSubscription(r, i), await this.relayer.messages.del(t);
  }
  async setRelayerSubscriptions(t) {
    await this.relayer.core.storage.setItem(this.storageKey, t);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(t, r) {
    this.subscriptions.has(t) || (this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: t, subscription: r }), this.addSubscription(t, r));
  }
  addSubscription(t, r) {
    this.subscriptions.set(t, vi({}, r)), this.topicMap.set(r.topic, t), this.events.emit(nr.created, r);
  }
  getSubscription(t) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: t });
    const r = this.subscriptions.get(t);
    if (!r) {
      const { message: i } = X("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(i);
    }
    return r;
  }
  deleteSubscription(t, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: t, reason: r });
    const i = this.getSubscription(t);
    this.subscriptions.delete(t), this.topicMap.delete(i.topic, t), this.events.emit(nr.deleted, Un(vi({}, i), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(nr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < t; r++) {
        const i = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(i);
      }
    }
    this.events.emit(nr.resubscribed);
  }
  async restore() {
    try {
      const t = await this.getRelayerSubscriptions();
      if (typeof t > "u" || !t.length)
        return;
      if (this.subscriptions.size) {
        const { message: r } = X("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(r);
      }
      this.cached = t, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(t);
    }
  }
  async batchSubscribe(t) {
    if (!t.length)
      return;
    const r = await this.rpcBatchSubscribe(t);
    Ni(r) && this.onBatchSubscribe(r.map((i, n) => Un(vi({}, t[n]), { id: i })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (this.relayer.transportExplicitlyClosed)
      return;
    const t = [];
    this.pending.forEach((r) => {
      t.push(r);
    }), await this.batchSubscribe(t);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Qr.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(Xe.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(Xe.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(nr.created, async (t) => {
      const r = nr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), await this.persist();
    }), this.events.on(nr.deleted, async (t) => {
      const r = nr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((t) => {
      const r = setInterval(() => {
        this.restartInProgress || (clearInterval(r), t());
      }, this.pollingInterval);
    });
  }
}
var Ib = Object.defineProperty, qa = Object.getOwnPropertySymbols, xb = Object.prototype.hasOwnProperty, Rb = Object.prototype.propertyIsEnumerable, za = (e, t, r) => t in e ? Ib(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ab = (e, t) => {
  for (var r in t || (t = {}))
    xb.call(t, r) && za(e, r, t[r]);
  if (qa)
    for (var r of qa(t))
      Rb.call(t, r) && za(e, r, t[r]);
  return e;
};
class Tb extends Qf {
  constructor(t) {
    super(t), this.protocol = "wc", this.version = 2, this.events = new Xt.EventEmitter(), this.name = Z0, this.transportExplicitlyClosed = !1, this.initialized = !1, this.reconnecting = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (i) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(i), i;
      }
    }, this.core = t.core, this.logger = typeof t.logger < "u" && typeof t.logger != "string" ? Te.generateChildLogger(t.logger, this.name) : Te.pino(Te.getDefaultLoggerOptions({ level: t.logger || Q0 })), this.messages = new bb(this.logger, t.core), this.subscriber = new Ob(this, this.logger), this.publisher = new vb(this, this.logger), this.relayUrl = (t == null ? void 0 : t.relayUrl) || Lu, this.projectId = t.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Fa}...`), await this.restartTransport(Fa);
    }
    this.registerEventListeners(), this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, ib);
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(t, r, i) {
    this.isInitialized(), await this.publisher.publish(t, r, i), await this.recordMessageEvent({ topic: t, message: r, publishedAt: Date.now() });
  }
  async subscribe(t, r) {
    var i;
    this.isInitialized();
    let n = ((i = this.subscriber.topicMap.get(t)) == null ? void 0 : i[0]) || "";
    return n || (await Promise.all([new Promise((s) => {
      this.subscriber.once(nr.created, (u) => {
        u.topic === t && s();
      });
    }), new Promise(async (s) => {
      n = await this.subscriber.subscribe(t, r), s();
    })]), n);
  }
  async unsubscribe(t, r) {
    this.isInitialized(), await this.subscriber.unsubscribe(t, r);
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async transportClose() {
    this.transportExplicitlyClosed = !0, this.connected && (await this.provider.disconnect(), this.events.emit(Xe.transport_closed));
  }
  async transportOpen(t) {
    if (this.transportExplicitlyClosed = !1, !this.reconnecting) {
      this.relayUrl = t || this.relayUrl, this.reconnecting = !0;
      try {
        await Promise.all([new Promise((r) => {
          this.initialized || r(), this.subscriber.once(nr.resubscribed, () => {
            r();
          });
        }), await Promise.race([new Promise(async (r, i) => {
          await en(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((n) => i(n)).then(() => r()).finally(() => this.removeListener(Xe.transport_closed, this.rejectTransportOpen));
        }), new Promise((r) => this.once(Xe.transport_closed, this.rejectTransportOpen))])]);
      } catch (r) {
        this.logger.error(r);
        const i = r;
        if (!this.isConnectionStalled(i.message))
          throw r;
        this.events.emit(Xe.transport_closed);
      } finally {
        this.reconnecting = !1;
      }
    }
  }
  async restartTransport(t) {
    this.transportExplicitlyClosed || this.reconnecting || (this.relayUrl = t || this.relayUrl, this.connected && await Promise.all([new Promise((r) => {
      this.provider.once(yi.disconnect, () => {
        r();
      });
    }), this.transportClose()]), await this.createProvider(), await this.transportOpen());
  }
  isConnectionStalled(t) {
    return this.staleConnectionErrors.some((r) => t.includes(r));
  }
  rejectTransportOpen() {
    throw new Error("Attempt to connect to relay via `transportOpen` has stalled. Retrying...");
  }
  async createProvider() {
    const t = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new ly(new py(ig({ sdkVersion: rb, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: t, useOnCloseEvent: !0 }))), this.registerProviderListeners();
  }
  async recordMessageEvent(t) {
    const { topic: r, message: i } = t;
    await this.messages.set(r, i);
  }
  async shouldIgnoreMessageEvent(t) {
    const { topic: r, message: i } = t;
    if (!i || i.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${i}`), !0;
    if (!await this.subscriber.isSubscribed(r))
      return this.logger.debug(`Ignoring message for non-subscribed topic ${r}`), !0;
    const n = this.messages.has(r, i);
    return n && this.logger.debug(`Ignoring duplicate message: ${i}`), n;
  }
  async onProviderPayload(t) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: t }), Ws(t)) {
      if (!t.method.endsWith(eb))
        return;
      const r = t.params, { topic: i, message: n, publishedAt: s } = r.data, u = { topic: i, message: n, publishedAt: s };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Ab({ type: "event", event: r.id }, u)), this.events.emit(r.id, u), await this.acknowledgePayload(t), await this.onMessageEvent(u);
    } else
      bn(t) && this.events.emit(Xe.message_ack, t);
  }
  async onMessageEvent(t) {
    await this.shouldIgnoreMessageEvent(t) || (this.events.emit(Xe.message, t), await this.recordMessageEvent(t));
  }
  async acknowledgePayload(t) {
    const r = Ks(t.id, !0);
    await this.provider.connection.send(r);
  }
  registerProviderListeners() {
    this.provider.on(yi.payload, (t) => this.onProviderPayload(t)), this.provider.on(yi.connect, () => {
      this.events.emit(Xe.connect);
    }), this.provider.on(yi.disconnect, () => {
      this.onProviderDisconnect();
    }), this.provider.on(yi.error, (t) => {
      this.logger.error(t), this.events.emit(Xe.error, t);
    });
  }
  registerEventListeners() {
    this.events.on(Xe.connection_stalled, async () => {
      await this.restartTransport();
    });
  }
  onProviderDisconnect() {
    this.events.emit(Xe.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || setTimeout(async () => {
      await this.restartTransport();
    }, te.toMiliseconds(tb));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  async toEstablishConnection() {
    if (!this.connected) {
      if (this.connecting)
        return await new Promise((t) => {
          const r = setInterval(() => {
            this.connected && (clearInterval(r), t());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var Cb = Object.defineProperty, Va = Object.getOwnPropertySymbols, Pb = Object.prototype.hasOwnProperty, Nb = Object.prototype.propertyIsEnumerable, Ka = (e, t, r) => t in e ? Cb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, ka = (e, t) => {
  for (var r in t || (t = {}))
    Pb.call(t, r) && Ka(e, r, t[r]);
  if (Va)
    for (var r of Va(t))
      Nb.call(t, r) && Ka(e, r, t[r]);
  return e;
};
class mn extends Zf {
  constructor(t, r, i, n = vr, s = void 0) {
    super(t, r, i, n), this.core = t, this.logger = r, this.name = i, this.map = /* @__PURE__ */ new Map(), this.version = nb, this.cached = [], this.initialized = !1, this.storagePrefix = vr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((u) => {
        this.getKey && u !== null && !It(u) ? this.map.set(this.getKey(u), u) : Ig(u) ? this.map.set(u.id, u) : xg(u) && this.map.set(u.topic, u);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (u, a) => {
      this.isInitialized(), this.map.has(u) ? await this.update(u, a) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: u, value: a }), this.map.set(u, a), await this.persist());
    }, this.get = (u) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: u }), this.getData(u)), this.getAll = (u) => (this.isInitialized(), u ? this.values.filter((a) => Object.keys(u).every((l) => yy(a[l], u[l]))) : this.values), this.update = async (u, a) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: u, update: a });
      const l = ka(ka({}, this.getData(u)), a);
      this.map.set(u, l), await this.persist();
    }, this.delete = async (u, a) => {
      this.isInitialized(), this.map.has(u) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: u, reason: a }), this.map.delete(u), await this.persist());
    }, this.logger = Te.generateChildLogger(r, this.name), this.storagePrefix = n, this.getKey = s;
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
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
  async setDataStore(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(t) {
    const r = this.map.get(t);
    if (!r) {
      const { message: i } = X("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw this.logger.error(i), new Error(i);
    }
    return r;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const t = await this.getDataStore();
      if (typeof t > "u" || !t.length)
        return;
      if (this.map.size) {
        const { message: r } = X("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = t, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class Lb {
  constructor(t, r) {
    this.core = t, this.logger = r, this.name = ub, this.version = lb, this.events = new xc(), this.initialized = !1, this.storagePrefix = vr, this.ignoredPayloadTypes = [Fr], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i])];
    }, this.create = async () => {
      this.isInitialized();
      const i = fs(), n = await this.core.crypto.setSymKey(i), s = Ht(te.FIVE_MINUTES), u = { protocol: Nu }, a = { topic: n, expiry: s, relay: u, active: !1 }, l = yg({ protocol: this.core.protocol, version: this.core.version, topic: n, symKey: i, relay: u });
      return await this.pairings.set(n, a), await this.core.relayer.subscribe(n), this.core.expirer.set(n, s), { topic: n, uri: l };
    }, this.pair = async (i) => {
      this.isInitialized(), this.isValidPair(i);
      const { topic: n, symKey: s, relay: u } = dg(i.uri);
      if (this.pairings.keys.includes(n))
        throw new Error(`Pairing already exists: ${n}`);
      if (this.core.crypto.hasKeys(n))
        throw new Error(`Keychain already exists: ${n}`);
      const a = Ht(te.FIVE_MINUTES), l = { topic: n, relay: u, expiry: a, active: !1 };
      return await this.pairings.set(n, l), await this.core.crypto.setSymKey(s, n), await this.core.relayer.subscribe(n, { relay: u }), this.core.expirer.set(n, a), i.activatePairing && await this.activate({ topic: n }), l;
    }, this.activate = async ({ topic: i }) => {
      this.isInitialized();
      const n = Ht(te.THIRTY_DAYS);
      await this.pairings.update(i, { active: !0, expiry: n }), this.core.expirer.set(i, n);
    }, this.ping = async (i) => {
      this.isInitialized(), await this.isValidPing(i);
      const { topic: n } = i;
      if (this.pairings.keys.includes(n)) {
        const s = await this.sendRequest(n, "wc_pairingPing", {}), { done: u, resolve: a, reject: l } = Kr();
        this.events.once(st("pairing_ping", s), ({ error: f }) => {
          f ? l(f) : a();
        }), await u();
      }
    }, this.updateExpiry = async ({ topic: i, expiry: n }) => {
      this.isInitialized(), await this.pairings.update(i, { expiry: n });
    }, this.updateMetadata = async ({ topic: i, metadata: n }) => {
      this.isInitialized(), await this.pairings.update(i, { peerMetadata: n });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (i) => {
      this.isInitialized(), await this.isValidDisconnect(i);
      const { topic: n } = i;
      this.pairings.keys.includes(n) && (await this.sendRequest(n, "wc_pairingDelete", ut("USER_DISCONNECTED")), await this.deletePairing(n));
    }, this.sendRequest = async (i, n, s) => {
      const u = yn(n, s), a = await this.core.crypto.encode(i, u), l = bi[n].req;
      return this.core.history.set(i, u), this.core.relayer.publish(i, a, l), u.id;
    }, this.sendResult = async (i, n, s) => {
      const u = Ks(i, s), a = await this.core.crypto.encode(n, u), l = await this.core.history.get(n, i), f = bi[l.request.method].res;
      await this.core.relayer.publish(n, a, f), await this.core.history.resolve(u);
    }, this.sendError = async (i, n, s) => {
      const u = ks(i, s), a = await this.core.crypto.encode(n, u), l = await this.core.history.get(n, i), f = bi[l.request.method] ? bi[l.request.method].res : bi.unregistered_method.res;
      await this.core.relayer.publish(n, a, f), await this.core.history.resolve(u);
    }, this.deletePairing = async (i, n) => {
      await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, ut("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), n ? Promise.resolve() : this.core.expirer.del(i)]);
    }, this.cleanup = async () => {
      const i = this.pairings.getAll().filter((n) => yr(n.expiry));
      await Promise.all(i.map((n) => this.deletePairing(n.topic)));
    }, this.onRelayEventRequest = (i) => {
      const { topic: n, payload: s } = i;
      switch (s.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(n, s);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(n, s);
        default:
          return this.onUnknownRpcMethodRequest(n, s);
      }
    }, this.onRelayEventResponse = async (i) => {
      const { topic: n, payload: s } = i, u = (await this.core.history.get(n, s.id)).request.method;
      switch (u) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(n, s);
        default:
          return this.onUnknownRpcMethodResponse(u);
      }
    }, this.onPairingPingRequest = async (i, n) => {
      const { id: s } = n;
      try {
        this.isValidPing({ topic: i }), await this.sendResult(s, i, !0), this.events.emit("pairing_ping", { id: s, topic: i });
      } catch (u) {
        await this.sendError(s, i, u), this.logger.error(u);
      }
    }, this.onPairingPingResponse = (i, n) => {
      const { id: s } = n;
      setTimeout(() => {
        ur(n) ? this.events.emit(st("pairing_ping", s), {}) : Gt(n) && this.events.emit(st("pairing_ping", s), { error: n.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (i, n) => {
      const { id: s } = n;
      try {
        this.isValidDisconnect({ topic: i }), await this.deletePairing(i), this.events.emit("pairing_delete", { id: s, topic: i });
      } catch (u) {
        await this.sendError(s, i, u), this.logger.error(u);
      }
    }, this.onUnknownRpcMethodRequest = async (i, n) => {
      const { id: s, method: u } = n;
      try {
        if (this.registeredMethods.includes(u))
          return;
        const a = ut("WC_METHOD_UNSUPPORTED", u);
        await this.sendError(s, i, a), this.logger.error(a);
      } catch (a) {
        await this.sendError(s, i, a), this.logger.error(a);
      }
    }, this.onUnknownRpcMethodResponse = (i) => {
      this.registeredMethods.includes(i) || this.logger.error(ut("WC_METHOD_UNSUPPORTED", i));
    }, this.isValidPair = (i) => {
      if (!At(i)) {
        const { message: n } = X("MISSING_OR_INVALID", `pair() params: ${i}`);
        throw new Error(n);
      }
      if (!Og(i.uri)) {
        const { message: n } = X("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
        throw new Error(n);
      }
    }, this.isValidPing = async (i) => {
      if (!At(i)) {
        const { message: s } = X("MISSING_OR_INVALID", `ping() params: ${i}`);
        throw new Error(s);
      }
      const { topic: n } = i;
      await this.isValidPairingTopic(n);
    }, this.isValidDisconnect = async (i) => {
      if (!At(i)) {
        const { message: s } = X("MISSING_OR_INVALID", `disconnect() params: ${i}`);
        throw new Error(s);
      }
      const { topic: n } = i;
      await this.isValidPairingTopic(n);
    }, this.isValidPairingTopic = async (i) => {
      if (!lt(i, !1)) {
        const { message: n } = X("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
        throw new Error(n);
      }
      if (!this.pairings.keys.includes(i)) {
        const { message: n } = X("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
        throw new Error(n);
      }
      if (yr(this.pairings.get(i).expiry)) {
        await this.deletePairing(i);
        const { message: n } = X("EXPIRED", `pairing topic: ${i}`);
        throw new Error(n);
      }
    }, this.core = t, this.logger = Te.generateChildLogger(r, this.name), this.pairings = new mn(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(Xe.message, async (t) => {
      const { topic: r, message: i } = t;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i)))
        return;
      const n = await this.core.crypto.decode(r, i);
      Ws(n) ? (this.core.history.set(r, n), this.onRelayEventRequest({ topic: r, payload: n })) : bn(n) && (await this.core.history.resolve(n), await this.onRelayEventResponse({ topic: r, payload: n }), this.core.history.delete(r, n.id));
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Vt.expired, async (t) => {
      const { topic: r } = du(t.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit("pairing_expire", { topic: r }));
    });
  }
}
class Ub extends Yf {
  constructor(t, r) {
    super(t, r), this.core = t, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Xt.EventEmitter(), this.name = fb, this.version = hb, this.cached = [], this.initialized = !1, this.storagePrefix = vr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (i, n, s) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i, request: n, chainId: s }), this.records.has(n.id))
        return;
      const u = { id: n.id, topic: i, request: { method: n.method, params: n.params || null }, chainId: s, expiry: Ht(te.THIRTY_DAYS) };
      this.records.set(u.id, u), this.events.emit(ir.created, u);
    }, this.resolve = async (i) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i }), !this.records.has(i.id))
        return;
      const n = await this.getRecord(i.id);
      typeof n.response > "u" && (n.response = Gt(i) ? { error: i.error } : { result: i.result }, this.records.set(n.id, n), this.events.emit(ir.updated, n));
    }, this.get = async (i, n) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i, id: n }), await this.getRecord(n)), this.delete = (i, n) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: n }), this.values.forEach((s) => {
        if (s.topic === i) {
          if (typeof n < "u" && s.id !== n)
            return;
          this.records.delete(s.id), this.events.emit(ir.deleted, s);
        }
      });
    }, this.exists = async (i, n) => (this.isInitialized(), this.records.has(n) ? (await this.getRecord(n)).topic === i : !1), this.on = (i, n) => {
      this.events.on(i, n);
    }, this.once = (i, n) => {
      this.events.once(i, n);
    }, this.off = (i, n) => {
      this.events.off(i, n);
    }, this.removeListener = (i, n) => {
      this.events.removeListener(i, n);
    }, this.logger = Te.generateChildLogger(r, this.name);
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
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
    const t = [];
    return this.values.forEach((r) => {
      if (typeof r.response < "u")
        return;
      const i = { topic: r.topic, request: yn(r.request.method, r.request.params, r.id), chainId: r.chainId };
      return t.push(i);
    }), t;
  }
  async setJsonRpcRecords(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(t) {
    this.isInitialized();
    const r = this.records.get(t);
    if (!r) {
      const { message: i } = X("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(i);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(ir.sync);
  }
  async restore() {
    try {
      const t = await this.getJsonRpcRecords();
      if (typeof t > "u" || !t.length)
        return;
      if (this.records.size) {
        const { message: r } = X("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = t, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(t);
    }
  }
  registerEventListeners() {
    this.events.on(ir.created, (t) => {
      const r = ir.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: t }), this.persist();
    }), this.events.on(ir.updated, (t) => {
      const r = ir.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: t }), this.persist();
    }), this.events.on(ir.deleted, (t) => {
      const r = ir.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: t }), this.persist();
    }), this.core.heartbeat.on(Qr.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((t) => {
        te.toMiliseconds(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.delete(t.topic, t.id));
      });
    } catch (t) {
      this.logger.warn(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class $b extends th {
  constructor(t, r) {
    super(t, r), this.core = t, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Xt.EventEmitter(), this.name = db, this.version = pb, this.cached = [], this.initialized = !1, this.storagePrefix = vr, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.expirations.set(i.target, i)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.has = (i) => {
      try {
        const n = this.formatTarget(i);
        return typeof this.getExpiration(n) < "u";
      } catch {
        return !1;
      }
    }, this.set = (i, n) => {
      this.isInitialized();
      const s = this.formatTarget(i), u = { target: s, expiry: n };
      this.expirations.set(s, u), this.checkExpiry(s, u), this.events.emit(Vt.created, { target: s, expiration: u });
    }, this.get = (i) => {
      this.isInitialized();
      const n = this.formatTarget(i);
      return this.getExpiration(n);
    }, this.del = (i) => {
      if (this.isInitialized(), this.has(i)) {
        const n = this.formatTarget(i), s = this.getExpiration(n);
        this.expirations.delete(n), this.events.emit(Vt.deleted, { target: n, expiration: s });
      }
    }, this.on = (i, n) => {
      this.events.on(i, n);
    }, this.once = (i, n) => {
      this.events.once(i, n);
    }, this.off = (i, n) => {
      this.events.off(i, n);
    }, this.removeListener = (i, n) => {
      this.events.removeListener(i, n);
    }, this.logger = Te.generateChildLogger(r, this.name);
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
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
  formatTarget(t) {
    if (typeof t == "string")
      return ng(t);
    if (typeof t == "number")
      return sg(t);
    const { message: r } = X("UNKNOWN_TYPE", `Target type: ${typeof t}`);
    throw new Error(r);
  }
  async setExpirations(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Vt.sync);
  }
  async restore() {
    try {
      const t = await this.getExpirations();
      if (typeof t > "u" || !t.length)
        return;
      if (this.expirations.size) {
        const { message: r } = X("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = t, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(t);
    }
  }
  getExpiration(t) {
    const r = this.expirations.get(t);
    if (!r) {
      const { message: i } = X("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw this.logger.error(i), new Error(i);
    }
    return r;
  }
  checkExpiry(t, r) {
    const { expiry: i } = r;
    te.toMiliseconds(i) - Date.now() <= 0 && this.expire(t, r);
  }
  expire(t, r) {
    this.expirations.delete(t), this.events.emit(Vt.expired, { target: t, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((t, r) => this.checkExpiry(r, t));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Qr.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(Vt.created, (t) => {
      const r = Vt.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    }), this.events.on(Vt.expired, (t) => {
      const r = Vt.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    }), this.events.on(Vt.deleted, (t) => {
      const r = Vt.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: t }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class Fb extends rh {
  constructor(t, r) {
    super(t, r), this.projectId = t, this.logger = r, this.name = Ln, this.initialized = !1, this.init = async (i) => {
      uu() || !js() || (this.verifyUrl = (i == null ? void 0 : i.verifyUrl) || Ma, await this.createIframe());
    }, this.register = async (i) => {
      var n;
      if (this.initialized || await this.init(), !!this.iframe)
        try {
          (n = this.iframe.contentWindow) == null || n.postMessage(i.attestationId, this.verifyUrl), this.logger.info(`postMessage sent: ${i.attestationId} ${this.verifyUrl}`);
        } catch {
        }
    }, this.resolve = async (i) => {
      var n;
      if (this.isDevEnv)
        return "";
      this.logger.info(`resolving attestation: ${i.attestationId}`);
      const s = this.startAbortTimer(te.FIVE_SECONDS), u = await fetch(`${this.verifyUrl}/attestation/${i.attestationId}`, { signal: this.abortController.signal });
      return clearTimeout(s), u.status === 200 ? (n = await u.json()) == null ? void 0 : n.origin : "";
    }, this.createIframe = async () => {
      try {
        await Promise.race([new Promise((i, n) => {
          if (document.getElementById(Ln))
            return i();
          const s = document.createElement("iframe");
          s.setAttribute("id", Ln), s.setAttribute("src", `${this.verifyUrl}/${this.projectId}`), s.style.display = "none", s.addEventListener("load", () => {
            this.initialized = !0, i();
          }), s.addEventListener("error", (u) => {
            n(u);
          }), document.body.append(s), this.iframe = s;
        }), new Promise((i) => {
          setTimeout(() => i("iframe load timeout"), te.toMiliseconds(te.ONE_SECOND / 2));
        })]);
      } catch (i) {
        this.logger.error(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.error(i);
      }
    }, this.logger = Te.generateChildLogger(r, this.name), this.verifyUrl = Ma, this.abortController = new AbortController(), this.isDevEnv = Ms() && process.env.IS_VITEST;
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  startAbortTimer(t) {
    return setTimeout(() => this.abortController.abort(), te.toMiliseconds(t));
  }
}
var Mb = Object.defineProperty, Wa = Object.getOwnPropertySymbols, jb = Object.prototype.hasOwnProperty, Bb = Object.prototype.propertyIsEnumerable, Ha = (e, t, r) => t in e ? Mb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ga = (e, t) => {
  for (var r in t || (t = {}))
    jb.call(t, r) && Ha(e, r, t[r]);
  if (Wa)
    for (var r of Wa(t))
      Bb.call(t, r) && Ha(e, r, t[r]);
  return e;
};
let qb = class Uu extends Gf {
  constructor(t) {
    super(t), this.protocol = Pu, this.version = q0, this.name = Hs, this.events = new Xt.EventEmitter(), this.initialized = !1, this.on = (i, n) => this.events.on(i, n), this.once = (i, n) => this.events.once(i, n), this.off = (i, n) => this.events.off(i, n), this.removeListener = (i, n) => this.events.removeListener(i, n), this.projectId = t == null ? void 0 : t.projectId, this.relayUrl = (t == null ? void 0 : t.relayUrl) || Lu;
    const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Te.pino(Te.getDefaultLoggerOptions({ level: (t == null ? void 0 : t.logger) || z0.logger }));
    this.logger = Te.generateChildLogger(r, this.name), this.heartbeat = new Qr.HeartBeat(), this.crypto = new yb(this, this.logger, t == null ? void 0 : t.keychain), this.history = new Ub(this, this.logger), this.expirer = new $b(this, this.logger), this.storage = t != null && t.storage ? t.storage : new Cf(Ga(Ga({}, V0), t == null ? void 0 : t.storageOptions)), this.relayer = new Tb({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Lb(this, this.logger), this.verify = new Fb(this.projectId || "", this.logger);
  }
  static async init(t) {
    const r = new Uu(t);
    await r.initialize();
    const i = await r.crypto.getClientId();
    return await r.storage.setItem(sb, i), r;
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success");
    } catch (t) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, t), this.logger.error(t.message), t;
    }
  }
};
const zb = qb, $u = "wc", Fu = 2, Mu = "client", Gs = `${$u}@${Fu}:${Mu}:`, $n = { name: Mu, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, Vb = "WALLETCONNECT_DEEPLINK_CHOICE", Kb = "proposal", kb = "Proposal expired", Wb = "session", ki = te.SEVEN_DAYS, Hb = "engine", mi = { wc_sessionPropose: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: te.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: te.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: te.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: te.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: te.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, Fn = { min: te.FIVE_MINUTES, max: te.SEVEN_DAYS }, _i = { idle: "idle", active: "active" }, Gb = "request", Yb = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var Jb = Object.defineProperty, Xb = Object.defineProperties, Qb = Object.getOwnPropertyDescriptors, Ya = Object.getOwnPropertySymbols, Zb = Object.prototype.hasOwnProperty, e1 = Object.prototype.propertyIsEnumerable, Ja = (e, t, r) => t in e ? Jb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, zt = (e, t) => {
  for (var r in t || (t = {}))
    Zb.call(t, r) && Ja(e, r, t[r]);
  if (Ya)
    for (var r of Ya(t))
      e1.call(t, r) && Ja(e, r, t[r]);
  return e;
}, Mn = (e, t) => Xb(e, Qb(t));
class t1 extends nh {
  constructor(t) {
    super(t), this.name = Hb, this.events = new xc(), this.initialized = !1, this.ignoredPayloadTypes = [Fr], this.requestQueue = { state: _i.idle, requests: [] }, this.requestQueueDelay = te.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(mi) }), this.initialized = !0, setTimeout(() => {
        this.requestQueue.requests = this.getPendingSessionRequests(), this.processRequestQueue();
      }, te.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      this.isInitialized();
      const i = Mn(zt({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(i);
      const { pairingTopic: n, requiredNamespaces: s, optionalNamespaces: u, sessionProperties: a, relays: l } = i;
      let f = n, h, b = !1;
      if (f && (b = this.client.core.pairing.pairings.get(f).active), !f || !b) {
        const { topic: I, uri: g } = await this.client.core.pairing.create();
        f = I, h = g;
      }
      const w = await this.client.core.crypto.generateKeyPair(), S = zt({ requiredNamespaces: s, optionalNamespaces: u, relays: l ?? [{ protocol: Nu }], proposer: { publicKey: w, metadata: this.client.metadata } }, a && { sessionProperties: a }), { reject: D, resolve: x, done: P } = Kr(te.FIVE_MINUTES, kb);
      if (this.events.once(st("session_connect"), async ({ error: I, session: g }) => {
        if (I)
          D(I);
        else if (g) {
          g.self.publicKey = w;
          const m = Mn(zt({}, g), { requiredNamespaces: g.requiredNamespaces, optionalNamespaces: g.optionalNamespaces });
          await this.client.session.set(g.topic, m), await this.setExpiry(g.topic, g.expiry), f && await this.client.core.pairing.updateMetadata({ topic: f, metadata: g.peer.metadata }), x(m);
        }
      }), !f) {
        const { message: I } = X("NO_MATCHING_KEY", `connect() pairing topic: ${f}`);
        throw new Error(I);
      }
      const M = await this.sendRequest(f, "wc_sessionPropose", S), E = Ht(te.FIVE_MINUTES);
      return await this.setProposal(M, zt({ id: M, expiry: E }, S)), { uri: h, approval: P };
    }, this.pair = async (r) => (this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      this.isInitialized(), await this.isValidApprove(r);
      const { id: i, relayProtocol: n, namespaces: s, sessionProperties: u } = r, a = this.client.proposal.get(i);
      let { pairingTopic: l, proposer: f, requiredNamespaces: h, optionalNamespaces: b } = a;
      l = l || "", Di(h) || (h = _g(s, "approve()"));
      const w = await this.client.core.crypto.generateKeyPair(), S = f.publicKey, D = await this.client.core.crypto.generateSharedKey(w, S);
      l && i && (await this.client.core.pairing.updateMetadata({ topic: l, metadata: f.metadata }), await this.sendResult(i, l, { relay: { protocol: n ?? "irn" }, responderPublicKey: w }), await this.client.proposal.delete(i, ut("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: l }));
      const x = zt({ relay: { protocol: n ?? "irn" }, namespaces: s, requiredNamespaces: h, optionalNamespaces: b, pairingTopic: l, controller: { publicKey: w, metadata: this.client.metadata }, expiry: Ht(ki) }, u && { sessionProperties: u });
      await this.client.core.relayer.subscribe(D), await this.sendRequest(D, "wc_sessionSettle", x);
      const P = Mn(zt({}, x), { topic: D, pairingTopic: l, acknowledged: !1, self: x.controller, peer: { publicKey: f.publicKey, metadata: f.metadata }, controller: w });
      return await this.client.session.set(D, P), await this.setExpiry(D, Ht(ki)), { topic: D, acknowledged: () => new Promise((M) => setTimeout(() => M(this.client.session.get(D)), 500)) };
    }, this.reject = async (r) => {
      this.isInitialized(), await this.isValidReject(r);
      const { id: i, reason: n } = r, { pairingTopic: s } = this.client.proposal.get(i);
      s && (await this.sendError(i, s, n), await this.client.proposal.delete(i, ut("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      this.isInitialized(), await this.isValidUpdate(r);
      const { topic: i, namespaces: n } = r, s = await this.sendRequest(i, "wc_sessionUpdate", { namespaces: n }), { done: u, resolve: a, reject: l } = Kr();
      return this.events.once(st("session_update", s), ({ error: f }) => {
        f ? l(f) : a();
      }), await this.client.session.update(i, { namespaces: n }), { acknowledged: u };
    }, this.extend = async (r) => {
      this.isInitialized(), await this.isValidExtend(r);
      const { topic: i } = r, n = await this.sendRequest(i, "wc_sessionExtend", {}), { done: s, resolve: u, reject: a } = Kr();
      return this.events.once(st("session_extend", n), ({ error: l }) => {
        l ? a(l) : u();
      }), await this.setExpiry(i, Ht(ki)), { acknowledged: s };
    }, this.request = async (r) => {
      this.isInitialized(), await this.isValidRequest(r);
      const { chainId: i, request: n, topic: s, expiry: u } = r, a = await this.sendRequest(s, "wc_sessionRequest", { request: n, chainId: i }, u), { done: l, resolve: f, reject: h } = Kr(u);
      this.events.once(st("session_request", a), ({ error: w, result: S }) => {
        w ? h(w) : f(S);
      }), this.client.events.emit("session_request_sent", { topic: s, request: n, chainId: i, id: a });
      const b = await this.client.core.storage.getItem(Vb);
      return og({ id: a, topic: s, wcDeepLink: b }), await l();
    }, this.respond = async (r) => {
      this.isInitialized(), await this.isValidRespond(r);
      const { topic: i, response: n } = r, { id: s } = n;
      ur(n) ? await this.sendResult(s, i, n.result) : Gt(n) && await this.sendError(s, i, n.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      this.isInitialized(), await this.isValidPing(r);
      const { topic: i } = r;
      if (this.client.session.keys.includes(i)) {
        const n = await this.sendRequest(i, "wc_sessionPing", {}), { done: s, resolve: u, reject: a } = Kr();
        this.events.once(st("session_ping", n), ({ error: l }) => {
          l ? a(l) : u();
        }), await s();
      } else
        this.client.core.pairing.pairings.keys.includes(i) && await this.client.core.pairing.ping({ topic: i });
    }, this.emit = async (r) => {
      this.isInitialized(), await this.isValidEmit(r);
      const { topic: i, event: n, chainId: s } = r;
      await this.sendRequest(i, "wc_sessionEvent", { event: n, chainId: s });
    }, this.disconnect = async (r) => {
      this.isInitialized(), await this.isValidDisconnect(r);
      const { topic: i } = r;
      if (this.client.session.keys.includes(i)) {
        const n = Vs().toString();
        let s;
        const u = (a) => {
          (a == null ? void 0 : a.id.toString()) === n && (this.client.core.relayer.events.removeListener(Xe.message_ack, u), s());
        };
        await Promise.all([new Promise((a) => {
          s = a, this.client.core.relayer.on(Xe.message_ack, u);
        }), this.sendRequest(i, "wc_sessionDelete", ut("USER_DISCONNECTED"), void 0, n)]), await this.deleteSession(i);
      } else
        await this.client.core.pairing.disconnect({ topic: i });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((i) => Sg(i, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic)
        try {
          const i = this.client.core.pairing.pairings.get(r.pairingTopic), n = this.client.core.pairing.pairings.getAll().filter((s) => {
            var u, a;
            return ((u = s.peerMetadata) == null ? void 0 : u.url) && ((a = s.peerMetadata) == null ? void 0 : a.url) === r.peer.metadata.url && s.topic && s.topic !== i.topic;
          });
          if (n.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${n.length} duplicate pairing(s)`), await Promise.all(n.map((s) => this.client.core.pairing.disconnect({ topic: s.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (i) {
          this.client.logger.error(i);
        }
    }, this.deleteSession = async (r, i) => {
      const { self: n } = this.client.session.get(r);
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, ut("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(n.publicKey) && await this.client.core.crypto.deleteKeyPair(n.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), i || this.client.core.expirer.del(r);
    }, this.deleteProposal = async (r, i) => {
      await Promise.all([this.client.proposal.delete(r, ut("USER_DISCONNECTED")), i ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, i, n = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, i), n ? Promise.resolve() : this.client.core.expirer.del(r)]), this.requestQueue.requests = this.requestQueue.requests.filter((s) => s.id !== r), n && (this.requestQueue.state = _i.idle);
    }, this.setExpiry = async (r, i) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: i }), this.client.core.expirer.set(r, i);
    }, this.setProposal = async (r, i) => {
      await this.client.proposal.set(r, i), this.client.core.expirer.set(r, i.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const i = mi.wc_sessionRequest.req.ttl, { id: n, topic: s, params: u } = r;
      await this.client.pendingRequest.set(n, { id: n, topic: s, params: u }), i && this.client.core.expirer.set(n, Ht(i));
    }, this.sendRequest = async (r, i, n, s, u) => {
      const a = yn(i, n);
      if (js() && Yb.includes(i)) {
        const h = Hr(JSON.stringify(a));
        await this.client.core.verify.register({ attestationId: h });
      }
      const l = await this.client.core.crypto.encode(r, a), f = mi[i].req;
      return s && (f.ttl = s), u && (f.id = u), this.client.core.history.set(r, a), this.client.core.relayer.publish(r, l, f), a.id;
    }, this.sendResult = async (r, i, n) => {
      const s = Ks(r, n), u = await this.client.core.crypto.encode(i, s), a = await this.client.core.history.get(i, r), l = mi[a.request.method].res;
      this.client.core.relayer.publish(i, u, l), await this.client.core.history.resolve(s);
    }, this.sendError = async (r, i, n) => {
      const s = ks(r, n), u = await this.client.core.crypto.encode(i, s), a = await this.client.core.history.get(i, r), l = mi[a.request.method].res;
      this.client.core.relayer.publish(i, u, l), await this.client.core.history.resolve(s);
    }, this.cleanup = async () => {
      const r = [], i = [];
      this.client.session.getAll().forEach((n) => {
        yr(n.expiry) && r.push(n.topic);
      }), this.client.proposal.getAll().forEach((n) => {
        yr(n.expiry) && i.push(n.id);
      }), await Promise.all([...r.map((n) => this.deleteSession(n)), ...i.map((n) => this.deleteProposal(n))]);
    }, this.onRelayEventRequest = (r) => {
      const { topic: i, payload: n } = r, s = n.method;
      switch (s) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(i, n);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(i, n);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(i, n);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(i, n);
        case "wc_sessionPing":
          return this.onSessionPingRequest(i, n);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(i, n);
        case "wc_sessionRequest":
          return this.onSessionRequest(i, n);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(i, n);
        default:
          return this.client.logger.info(`Unsupported request method ${s}`);
      }
    }, this.onRelayEventResponse = async (r) => {
      const { topic: i, payload: n } = r, s = (await this.client.core.history.get(i, n.id)).request.method;
      switch (s) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(i, n);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(i, n);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(i, n);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(i, n);
        case "wc_sessionPing":
          return this.onSessionPingResponse(i, n);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(i, n);
        default:
          return this.client.logger.info(`Unsupported response method ${s}`);
      }
    }, this.onRelayEventUnknownPayload = (r) => {
      const { topic: i } = r, { message: n } = X("MISSING_OR_INVALID", `Decoded payload on topic ${i} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(n);
    }, this.onSessionProposeRequest = async (r, i) => {
      const { params: n, id: s } = i;
      try {
        this.isValidConnect(zt({}, i.params));
        const u = Ht(te.FIVE_MINUTES), a = zt({ id: s, pairingTopic: r, expiry: u }, n);
        await this.setProposal(s, a);
        const l = Hr(JSON.stringify(i)), f = await this.getVerifyContext(l, a.proposer.metadata);
        this.client.events.emit("session_proposal", { id: s, params: a, verifyContext: f });
      } catch (u) {
        await this.sendError(s, r, u), this.client.logger.error(u);
      }
    }, this.onSessionProposeResponse = async (r, i) => {
      const { id: n } = i;
      if (ur(i)) {
        const { result: s } = i;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: s });
        const u = this.client.proposal.get(n);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: u });
        const a = u.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: a });
        const l = s.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: l });
        const f = await this.client.core.crypto.generateSharedKey(a, l);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: f });
        const h = await this.client.core.relayer.subscribe(f);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: h }), await this.client.core.pairing.activate({ topic: r });
      } else
        Gt(i) && (await this.client.proposal.delete(n, ut("USER_DISCONNECTED")), this.events.emit(st("session_connect"), { error: i.error }));
    }, this.onSessionSettleRequest = async (r, i) => {
      const { id: n, params: s } = i;
      try {
        this.isValidSessionSettleRequest(s);
        const { relay: u, controller: a, expiry: l, namespaces: f, requiredNamespaces: h, optionalNamespaces: b, sessionProperties: w, pairingTopic: S } = i.params, D = zt({ topic: r, relay: u, expiry: l, namespaces: f, acknowledged: !0, pairingTopic: S, requiredNamespaces: h, optionalNamespaces: b, controller: a.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: a.publicKey, metadata: a.metadata } }, w && { sessionProperties: w });
        await this.sendResult(i.id, r, !0), this.events.emit(st("session_connect"), { session: D }), this.cleanupDuplicatePairings(D);
      } catch (u) {
        await this.sendError(n, r, u), this.client.logger.error(u);
      }
    }, this.onSessionSettleResponse = async (r, i) => {
      const { id: n } = i;
      ur(i) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(st("session_approve", n), {})) : Gt(i) && (await this.client.session.delete(r, ut("USER_DISCONNECTED")), this.events.emit(st("session_approve", n), { error: i.error }));
    }, this.onSessionUpdateRequest = async (r, i) => {
      const { params: n, id: s } = i;
      try {
        this.isValidUpdate(zt({ topic: r }, n)), await this.client.session.update(r, { namespaces: n.namespaces }), await this.sendResult(s, r, !0), this.client.events.emit("session_update", { id: s, topic: r, params: n });
      } catch (u) {
        await this.sendError(s, r, u), this.client.logger.error(u);
      }
    }, this.onSessionUpdateResponse = (r, i) => {
      const { id: n } = i;
      ur(i) ? this.events.emit(st("session_update", n), {}) : Gt(i) && this.events.emit(st("session_update", n), { error: i.error });
    }, this.onSessionExtendRequest = async (r, i) => {
      const { id: n } = i;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, Ht(ki)), await this.sendResult(n, r, !0), this.client.events.emit("session_extend", { id: n, topic: r });
      } catch (s) {
        await this.sendError(n, r, s), this.client.logger.error(s);
      }
    }, this.onSessionExtendResponse = (r, i) => {
      const { id: n } = i;
      ur(i) ? this.events.emit(st("session_extend", n), {}) : Gt(i) && this.events.emit(st("session_extend", n), { error: i.error });
    }, this.onSessionPingRequest = async (r, i) => {
      const { id: n } = i;
      try {
        this.isValidPing({ topic: r }), await this.sendResult(n, r, !0), this.client.events.emit("session_ping", { id: n, topic: r });
      } catch (s) {
        await this.sendError(n, r, s), this.client.logger.error(s);
      }
    }, this.onSessionPingResponse = (r, i) => {
      const { id: n } = i;
      setTimeout(() => {
        ur(i) ? this.events.emit(st("session_ping", n), {}) : Gt(i) && this.events.emit(st("session_ping", n), { error: i.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, i) => {
      const { id: n } = i;
      try {
        this.isValidDisconnect({ topic: r, reason: i.params }), await Promise.all([new Promise((s) => {
          this.client.core.relayer.once(Xe.publish, async () => {
            s(await this.deleteSession(r));
          });
        }), this.sendResult(n, r, !0)]), this.client.events.emit("session_delete", { id: n, topic: r });
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onSessionRequest = async (r, i) => {
      const { id: n, params: s } = i;
      try {
        this.isValidRequest(zt({ topic: r }, s)), await this.setPendingSessionRequest({ id: n, topic: r, params: s }), this.addRequestToQueue({ id: n, topic: r, params: s }), await this.processRequestQueue();
      } catch (u) {
        await this.sendError(n, r, u), this.client.logger.error(u);
      }
    }, this.onSessionRequestResponse = (r, i) => {
      const { id: n } = i;
      ur(i) ? this.events.emit(st("session_request", n), { result: i.result }) : Gt(i) && this.events.emit(st("session_request", n), { error: i.error });
    }, this.onSessionEventRequest = async (r, i) => {
      const { id: n, params: s } = i;
      try {
        this.isValidEmit(zt({ topic: r }, s)), this.client.events.emit("session_event", { id: n, topic: r, params: s });
      } catch (u) {
        await this.sendError(n, r, u), this.client.logger.error(u);
      }
    }, this.addRequestToQueue = (r) => {
      this.requestQueue.requests.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.requestQueue.state = _i.idle, this.processRequestQueue();
      }, te.toMiliseconds(this.requestQueueDelay));
    }, this.processRequestQueue = async () => {
      if (this.requestQueue.state === _i.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.requestQueue.requests[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        const { id: i, topic: n, params: s } = r, u = Hr(JSON.stringify({ id: i, params: s })), a = this.client.session.get(n), l = await this.getVerifyContext(u, a.peer.metadata);
        this.requestQueue.state = _i.active, this.client.events.emit("session_request", { id: i, topic: n, params: s, verifyContext: l });
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.isValidConnect = async (r) => {
      if (!At(r)) {
        const { message: l } = X("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(l);
      }
      const { pairingTopic: i, requiredNamespaces: n, optionalNamespaces: s, sessionProperties: u, relays: a } = r;
      if (It(i) || await this.isValidPairingTopic(i), !Ug(a, !0)) {
        const { message: l } = X("MISSING_OR_INVALID", `connect() relays: ${a}`);
        throw new Error(l);
      }
      !It(n) && Di(n) !== 0 && this.validateNamespaces(n, "requiredNamespaces"), !It(s) && Di(s) !== 0 && this.validateNamespaces(s, "optionalNamespaces"), It(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.validateNamespaces = (r, i) => {
      const n = Lg(r, "connect()", i);
      if (n)
        throw new Error(n.message);
    }, this.isValidApprove = async (r) => {
      if (!At(r))
        throw new Error(X("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: i, namespaces: n, relayProtocol: s, sessionProperties: u } = r;
      await this.isValidProposalId(i);
      const a = this.client.proposal.get(i), l = Yi(n, "approve()");
      if (l)
        throw new Error(l.message);
      const f = Ea(a.requiredNamespaces, n, "approve()");
      if (f)
        throw new Error(f.message);
      if (!lt(s, !0)) {
        const { message: h } = X("MISSING_OR_INVALID", `approve() relayProtocol: ${s}`);
        throw new Error(h);
      }
      It(u) || this.validateSessionProps(u, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!At(r)) {
        const { message: s } = X("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(s);
      }
      const { id: i, reason: n } = r;
      if (await this.isValidProposalId(i), !Fg(n)) {
        const { message: s } = X("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(n)}`);
        throw new Error(s);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!At(r)) {
        const { message: f } = X("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(f);
      }
      const { relay: i, controller: n, namespaces: s, expiry: u } = r;
      if (!gu(i)) {
        const { message: f } = X("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(f);
      }
      const a = Rg(n, "onSessionSettleRequest()");
      if (a)
        throw new Error(a.message);
      const l = Yi(s, "onSessionSettleRequest()");
      if (l)
        throw new Error(l.message);
      if (yr(u)) {
        const { message: f } = X("EXPIRED", "onSessionSettleRequest()");
        throw new Error(f);
      }
    }, this.isValidUpdate = async (r) => {
      if (!At(r)) {
        const { message: l } = X("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(l);
      }
      const { topic: i, namespaces: n } = r;
      await this.isValidSessionTopic(i);
      const s = this.client.session.get(i), u = Yi(n, "update()");
      if (u)
        throw new Error(u.message);
      const a = Ea(s.requiredNamespaces, n, "update()");
      if (a)
        throw new Error(a.message);
    }, this.isValidExtend = async (r) => {
      if (!At(r)) {
        const { message: n } = X("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(n);
      }
      const { topic: i } = r;
      await this.isValidSessionTopic(i);
    }, this.isValidRequest = async (r) => {
      if (!At(r)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(l);
      }
      const { topic: i, request: n, chainId: s, expiry: u } = r;
      await this.isValidSessionTopic(i);
      const { namespaces: a } = this.client.session.get(i);
      if (!wa(a, s)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() chainId: ${s}`);
        throw new Error(l);
      }
      if (!Mg(n)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() ${JSON.stringify(n)}`);
        throw new Error(l);
      }
      if (!qg(a, s, n.method)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() method: ${n.method}`);
        throw new Error(l);
      }
      if (u && !kg(u, Fn)) {
        const { message: l } = X("MISSING_OR_INVALID", `request() expiry: ${u}. Expiry must be a number (in seconds) between ${Fn.min} and ${Fn.max}`);
        throw new Error(l);
      }
    }, this.isValidRespond = async (r) => {
      if (!At(r)) {
        const { message: s } = X("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(s);
      }
      const { topic: i, response: n } = r;
      if (await this.isValidSessionTopic(i), !jg(n)) {
        const { message: s } = X("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(n)}`);
        throw new Error(s);
      }
    }, this.isValidPing = async (r) => {
      if (!At(r)) {
        const { message: n } = X("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(n);
      }
      const { topic: i } = r;
      await this.isValidSessionOrPairingTopic(i);
    }, this.isValidEmit = async (r) => {
      if (!At(r)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(a);
      }
      const { topic: i, event: n, chainId: s } = r;
      await this.isValidSessionTopic(i);
      const { namespaces: u } = this.client.session.get(i);
      if (!wa(u, s)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() chainId: ${s}`);
        throw new Error(a);
      }
      if (!Bg(n)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(n)}`);
        throw new Error(a);
      }
      if (!zg(u, s, n.name)) {
        const { message: a } = X("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(n)}`);
        throw new Error(a);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!At(r)) {
        const { message: n } = X("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(n);
      }
      const { topic: i } = r;
      await this.isValidSessionOrPairingTopic(i);
    }, this.getVerifyContext = async (r, i) => {
      const n = { verified: { verifyUrl: i.verifyUrl || "", validation: "UNKNOWN", origin: i.url || "" } };
      try {
        const s = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: i.verifyUrl });
        s && (n.verified.origin = s, n.verified.validation = s === i.url ? "VALID" : "INVALID");
      } catch (s) {
        this.client.logger.error(s);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(n)}`), n;
    }, this.validateSessionProps = (r, i) => {
      Object.values(r).forEach((n) => {
        if (!lt(n, !1)) {
          const { message: s } = X("MISSING_OR_INVALID", `${i} must be in Record<string, string> format. Received: ${JSON.stringify(n)}`);
          throw new Error(s);
        }
      });
    };
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = X("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(Xe.message, async (t) => {
      const { topic: r, message: i } = t;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(i)))
        return;
      const n = await this.client.core.crypto.decode(r, i);
      Ws(n) ? (this.client.core.history.set(r, n), this.onRelayEventRequest({ topic: r, payload: n })) : bn(n) ? (await this.client.core.history.resolve(n), await this.onRelayEventResponse({ topic: r, payload: n }), this.client.core.history.delete(r, n.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: n });
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Vt.expired, async (t) => {
      const { topic: r, id: i } = du(t.target);
      if (i && this.client.pendingRequest.keys.includes(i))
        return await this.deletePendingSessionRequest(i, X("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", { topic: r })) : i && (await this.deleteProposal(i, !0), this.client.events.emit("proposal_expire", { id: i }));
    });
  }
  isValidPairingTopic(t) {
    if (!lt(t, !1)) {
      const { message: r } = X("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(t)) {
      const { message: r } = X("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (yr(this.client.core.pairing.pairings.get(t).expiry)) {
      const { message: r } = X("EXPIRED", `pairing topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(t) {
    if (!lt(t, !1)) {
      const { message: r } = X("MISSING_OR_INVALID", `session topic should be a string: ${t}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(t)) {
      const { message: r } = X("NO_MATCHING_KEY", `session topic doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (yr(this.client.session.get(t).expiry)) {
      await this.deleteSession(t);
      const { message: r } = X("EXPIRED", `session topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(t) {
    if (this.client.session.keys.includes(t))
      await this.isValidSessionTopic(t);
    else if (this.client.core.pairing.pairings.keys.includes(t))
      this.isValidPairingTopic(t);
    else if (lt(t, !1)) {
      const { message: r } = X("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${t}`);
      throw new Error(r);
    } else {
      const { message: r } = X("MISSING_OR_INVALID", `session or pairing topic should be a string: ${t}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(t) {
    if (!$g(t)) {
      const { message: r } = X("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(t)) {
      const { message: r } = X("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (yr(this.client.proposal.get(t).expiry)) {
      await this.deleteProposal(t);
      const { message: r } = X("EXPIRED", `proposal id: ${t}`);
      throw new Error(r);
    }
  }
}
class r1 extends mn {
  constructor(t, r) {
    super(t, r, Kb, Gs), this.core = t, this.logger = r;
  }
}
class i1 extends mn {
  constructor(t, r) {
    super(t, r, Wb, Gs), this.core = t, this.logger = r;
  }
}
class n1 extends mn {
  constructor(t, r) {
    super(t, r, Gb, Gs, (i) => i.id), this.core = t, this.logger = r;
  }
}
let s1 = class ju extends ih {
  constructor(t) {
    super(t), this.protocol = $u, this.version = Fu, this.name = $n.name, this.events = new Xt.EventEmitter(), this.on = (i, n) => this.events.on(i, n), this.once = (i, n) => this.events.once(i, n), this.off = (i, n) => this.events.off(i, n), this.removeListener = (i, n) => this.events.removeListener(i, n), this.removeAllListeners = (i) => this.events.removeAllListeners(i), this.connect = async (i) => {
      try {
        return await this.engine.connect(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.pair = async (i) => {
      try {
        return await this.engine.pair(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.approve = async (i) => {
      try {
        return await this.engine.approve(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.reject = async (i) => {
      try {
        return await this.engine.reject(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.update = async (i) => {
      try {
        return await this.engine.update(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.extend = async (i) => {
      try {
        return await this.engine.extend(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.request = async (i) => {
      try {
        return await this.engine.request(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.respond = async (i) => {
      try {
        return await this.engine.respond(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.ping = async (i) => {
      try {
        return await this.engine.ping(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.emit = async (i) => {
      try {
        return await this.engine.emit(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.disconnect = async (i) => {
      try {
        return await this.engine.disconnect(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.find = (i) => {
      try {
        return this.engine.find(i);
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (i) {
        throw this.logger.error(i.message), i;
      }
    }, this.name = (t == null ? void 0 : t.name) || $n.name, this.metadata = (t == null ? void 0 : t.metadata) || Zp();
    const r = typeof (t == null ? void 0 : t.logger) < "u" && typeof (t == null ? void 0 : t.logger) != "string" ? t.logger : Te.pino(Te.getDefaultLoggerOptions({ level: (t == null ? void 0 : t.logger) || $n.logger }));
    this.core = (t == null ? void 0 : t.core) || new zb(t), this.logger = Te.generateChildLogger(r, this.name), this.session = new i1(this.core, this.logger), this.proposal = new r1(this.core, this.logger), this.pendingRequest = new n1(this.core, this.logger), this.engine = new t1(this);
  }
  static async init(t) {
    const r = new ju(t);
    return await r.initialize(), r;
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }), this.logger.info("SignClient Initialization Success");
    } catch (t) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(t.message), t;
    }
  }
};
var o1 = Object.defineProperty, a1 = Object.defineProperties, c1 = Object.getOwnPropertyDescriptors, Xa = Object.getOwnPropertySymbols, u1 = Object.prototype.hasOwnProperty, l1 = Object.prototype.propertyIsEnumerable, Qa = (e, t, r) => t in e ? o1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, f1 = (e, t) => {
  for (var r in t || (t = {}))
    u1.call(t, r) && Qa(e, r, t[r]);
  if (Xa)
    for (var r of Xa(t))
      l1.call(t, r) && Qa(e, r, t[r]);
  return e;
}, h1 = (e, t) => a1(e, c1(t)), Ys = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
}, ze = (e, t, r) => (Ys(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Ar = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, nn = (e, t, r, i) => (Ys(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r), _t = (e, t, r) => (Ys(e, t, "access private method"), r), Cr, kr, wi, ct, gs, Bu, wt, Ot, ys, Za;
let d1 = class {
  constructor(t) {
    Ar(this, gs), Ar(this, wt), Ar(this, ys), Ar(this, Cr, void 0), Ar(this, kr, void 0), Ar(this, wi, void 0), Ar(this, ct, void 0), nn(this, Cr, t), nn(this, kr, _t(this, gs, Bu).call(this)), _t(this, wt, Ot).call(this);
  }
  async connect(t) {
    const { requiredNamespaces: r, optionalNamespaces: i } = t;
    return new Promise(async (n, s) => {
      await _t(this, wt, Ot).call(this);
      const u = ze(this, kr).subscribeModal((f) => {
        f.open || (u(), s(new Error("Modal closed")));
      }), { uri: a, approval: l } = await ze(this, ct).connect(t);
      if (a) {
        const f = /* @__PURE__ */ new Set();
        r && Object.values(r).forEach(({ chains: h }) => {
          h && h.forEach((b) => f.add(b));
        }), i && Object.values(i).forEach(({ chains: h }) => {
          h && h.forEach((b) => f.add(b));
        }), await ze(this, kr).openModal({ uri: a, chains: Array.from(f) });
      }
      try {
        const f = await l();
        n(f);
      } catch (f) {
        s(f);
      } finally {
        u(), ze(this, kr).closeModal();
      }
    });
  }
  async disconnect(t) {
    await _t(this, wt, Ot).call(this), await ze(this, ct).disconnect(t);
  }
  async request(t) {
    return await _t(this, wt, Ot).call(this), await ze(this, ct).request(t);
  }
  async getSessions() {
    return await _t(this, wt, Ot).call(this), ze(this, ct).session.getAll();
  }
  async getSession() {
    return await _t(this, wt, Ot).call(this), ze(this, ct).session.getAll().at(-1);
  }
  async onSessionEvent(t) {
    await _t(this, wt, Ot).call(this), ze(this, ct).on("session_event", t);
  }
  async offSessionEvent(t) {
    await _t(this, wt, Ot).call(this), ze(this, ct).off("session_event", t);
  }
  async onSessionUpdate(t) {
    await _t(this, wt, Ot).call(this), ze(this, ct).on("session_update", t);
  }
  async offSessionUpdate(t) {
    await _t(this, wt, Ot).call(this), ze(this, ct).off("session_update", t);
  }
  async onSessionDelete(t) {
    await _t(this, wt, Ot).call(this), ze(this, ct).on("session_delete", t);
  }
  async offSessionDelete(t) {
    await _t(this, wt, Ot).call(this), ze(this, ct).off("session_delete", t);
  }
  async onSessionExpire(t) {
    await _t(this, wt, Ot).call(this), ze(this, ct).on("session_expire", t);
  }
  async offSessionExpire(t) {
    await _t(this, wt, Ot).call(this), ze(this, ct).off("session_expire", t);
  }
};
Cr = /* @__PURE__ */ new WeakMap(), kr = /* @__PURE__ */ new WeakMap(), wi = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakMap(), gs = /* @__PURE__ */ new WeakSet(), Bu = function() {
  const { modalOptions: e, projectId: t } = ze(this, Cr);
  return new Yl(h1(f1({}, e), { projectId: t }));
}, wt = /* @__PURE__ */ new WeakSet(), Ot = async function() {
  return ze(this, ct) ? !0 : (!ze(this, wi) && typeof window < "u" && nn(this, wi, _t(this, ys, Za).call(this)), ze(this, wi));
}, ys = /* @__PURE__ */ new WeakSet(), Za = async function() {
  nn(this, ct, await s1.init({ metadata: ze(this, Cr).metadata, projectId: ze(this, Cr).projectId, relayUrl: ze(this, Cr).relayUrl }));
  const e = await ze(this, ct).core.crypto.getClientId();
  try {
    localStorage.setItem("WCM_WALLETCONNECT_CLIENT_ID", e);
  } catch {
    console.info("Unable to set client id");
  }
};
function p1(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, r) {
    var i = e.get(t);
    i ? i.push(r) : e.set(t, [r]);
  }, off: function(t, r) {
    var i = e.get(t);
    i && (r ? i.splice(i.indexOf(r) >>> 0, 1) : e.set(t, []));
  }, emit: function(t, r) {
    var i = e.get(t);
    i && i.slice().map(function(n) {
      n(r);
    }), (i = e.get("*")) && i.slice().map(function(n) {
      n(t, r);
    });
  } };
}
const bs = p1();
let Ei;
function g1(e) {
  Ei = new d1(e);
}
async function Jt() {
  return new Promise((e) => {
    if (Ei)
      e(Ei);
    else {
      const t = setInterval(() => {
        Ei && (clearInterval(t), e(Ei));
      }, 200);
    }
  });
}
function y1(e) {
  return St(() => {
    g1(e);
  }, []), null;
}
const b1 = Dl(y1);
function qu() {
  const [e, t] = Lt(void 0), [r, i] = Lt(void 0), [n, s] = Lt(!1);
  return { data: e, error: r, loading: n, setData: t, setError: i, setLoading: s };
}
function v1(e) {
  const { data: t, error: r, loading: i, setData: n, setError: s, setLoading: u } = qu();
  async function a(l) {
    try {
      u(!0), s(void 0);
      const f = await (await Jt()).connect(l ?? e);
      return n(f), bs.emit("session_change"), f;
    } catch (f) {
      throw s(f), f;
    } finally {
      u(!1);
    }
  }
  return { data: t, error: r, loading: i, connect: a };
}
function zu(e) {
  St(() => (Jt().then((t) => {
    t.onSessionDelete(e);
  }), () => {
    Jt().then((t) => {
      t.offSessionDelete(e);
    });
  }), [e]);
}
function Js(e) {
  St(() => (Jt().then((t) => {
    t.onSessionEvent(e);
  }), () => {
    Jt().then((t) => {
      t.offSessionEvent(e);
    });
  }), [e]);
}
function m1(e) {
  St(() => (Jt().then((t) => {
    t.onSessionExpire(e);
  }), () => {
    Jt().then((t) => {
      t.offSessionExpire(e);
    });
  }), [e]);
}
function _1(e) {
  St(() => (Jt().then((t) => {
    t.onSessionUpdate(e);
  }), () => {
    Jt().then((t) => {
      t.offSessionUpdate(e);
    });
  }), [e]);
}
function ri(e) {
  const { data: t, error: r, loading: i, setData: n, setError: s, setLoading: u } = qu();
  async function a(l) {
    try {
      u(!0), s(void 0);
      const f = await (await Jt()).request(l ?? e);
      return n(f), f;
    } catch (f) {
      throw s(f), f;
    } finally {
      u(!1);
    }
  }
  return { data: t, error: r, loading: i, request: a };
}
var w1 = Object.defineProperty, E1 = Object.defineProperties, S1 = Object.getOwnPropertyDescriptors, ec = Object.getOwnPropertySymbols, D1 = Object.prototype.hasOwnProperty, O1 = Object.prototype.propertyIsEnumerable, tc = (e, t, r) => t in e ? w1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, I1 = (e, t) => {
  for (var r in t || (t = {}))
    D1.call(t, r) && tc(e, r, t[r]);
  if (ec)
    for (var r of ec(t))
      O1.call(t, r) && tc(e, r, t[r]);
  return e;
}, x1 = (e, t) => E1(e, S1(t));
function Mr() {
  const [e, t] = Lt(void 0);
  return zu((r) => {
    r.topic === (e == null ? void 0 : e.topic) && t(void 0);
  }), _1((r) => {
    if (e && r.topic === (e == null ? void 0 : e.topic)) {
      const { namespaces: i } = r.params, n = x1(I1({}, e), { namespaces: i });
      t(n);
    }
  }), m1((r) => {
    e && r.topic === (e == null ? void 0 : e.topic) && t(void 0);
  }), St(() => {
    async function r() {
      const i = await (await Jt()).getSession();
      t(i);
    }
    return r(), bs.on("session_change", r), () => {
      bs.off("session_change", r);
    };
  }, []), e;
}
const R1 = [
  // aztec methods
  "aztec_connect",
  "aztec_disconnect",
  "aztec_getAccountPublicKey",
  "aztec_getSpendingPublicKey",
  "aztec_requestProofs"
], Vu = ["aztec:1337"], Ku = [
  // aleo methods
  "aleo_connect",
  "aleo_disconnect",
  "aleo_getSelectedAccount",
  "aleo_transfer",
  "aleo_deployProgram",
  "aleo_getBalance",
  "aleo_executeProgram",
  "aleo_getRecords"
], Xs = ["aleo:1"], vs = ["chainChanged", "accountSelected", "accountSynced"], A1 = "f0aaeffe71b636da453fce042d79d723", rc = "https://walletconnect.puzzle.online/", T1 = {
  standaloneChains: Vu.concat(Xs),
  enableExplorer: !1,
  enableAccountView: !0,
  enableNetworkView: !0,
  enableStandaloneMode: !0,
  mobileWallets: [
    {
      id: "puzzle",
      name: "Puzzle Wallet",
      links: {
        native: "",
        universal: rc
      }
    }
  ],
  desktopWallets: [
    {
      id: "puzzle",
      name: "Puzzle Wallet",
      links: {
        native: "",
        universal: rc
      }
    }
  ],
  walletImages: {
    // Override manual wallet image
    puzzle: "https://i.imgur.com/p9tHaFC.png"
  }
}, Sv = {
  requiredNamespaces: {
    aztec: {
      methods: R1,
      chains: Vu,
      events: vs
    },
    aleo: {
      methods: Ku,
      chains: Xs,
      events: vs
    }
  }
}, Dv = ({ dAppName: e, dAppDescription: t, dAppUrl: r, dAppIconURL: i }) => /* @__PURE__ */ Gn.jsx(
  b1,
  {
    projectId: A1,
    metadata: {
      name: e,
      description: t,
      url: r,
      icons: [
        i
      ]
    },
    modalOptions: { ...T1 }
  }
), Ov = ({ children: e }) => (rv(), /* @__PURE__ */ Gn.jsx(Gn.Fragment, { children: e })), ic = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), i = (l, f) => {
    const h = typeof l == "function" ? l(t) : l;
    if (!Object.is(h, t)) {
      const b = t;
      t = f ?? typeof h != "object" ? h : Object.assign({}, t, h), r.forEach((w) => w(t, b));
    }
  }, n = () => t, a = { setState: i, getState: n, subscribe: (l) => (r.add(l), () => r.delete(l)), destroy: () => {
    r.clear();
  } };
  return t = e(i, n, a), a;
}, C1 = (e) => e ? ic(e) : ic;
var ms = { exports: {} }, jn = {}, Wi = { exports: {} }, Bn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nc;
function P1() {
  if (nc)
    return Bn;
  nc = 1;
  var e = Xr;
  function t(b, w) {
    return b === w && (b !== 0 || 1 / b === 1 / w) || b !== b && w !== w;
  }
  var r = typeof Object.is == "function" ? Object.is : t, i = e.useState, n = e.useEffect, s = e.useLayoutEffect, u = e.useDebugValue;
  function a(b, w) {
    var S = w(), D = i({ inst: { value: S, getSnapshot: w } }), x = D[0].inst, P = D[1];
    return s(function() {
      x.value = S, x.getSnapshot = w, l(x) && P({ inst: x });
    }, [b, S, w]), n(function() {
      return l(x) && P({ inst: x }), b(function() {
        l(x) && P({ inst: x });
      });
    }, [b]), u(S), S;
  }
  function l(b) {
    var w = b.getSnapshot;
    b = b.value;
    try {
      var S = w();
      return !r(b, S);
    } catch {
      return !0;
    }
  }
  function f(b, w) {
    return w();
  }
  var h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? f : a;
  return Bn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : h, Bn;
}
var qn = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sc;
function N1() {
  return sc || (sc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Xr, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(I) {
      {
        for (var g = arguments.length, m = new Array(g > 1 ? g - 1 : 0), d = 1; d < g; d++)
          m[d - 1] = arguments[d];
        i("error", I, m);
      }
    }
    function i(I, g, m) {
      {
        var d = t.ReactDebugCurrentFrame, o = d.getStackAddendum();
        o !== "" && (g += "%s", m = m.concat([o]));
        var p = m.map(function(L) {
          return String(L);
        });
        p.unshift("Warning: " + g), Function.prototype.apply.call(console[I], console, p);
      }
    }
    function n(I, g) {
      return I === g && (I !== 0 || 1 / I === 1 / g) || I !== I && g !== g;
    }
    var s = typeof Object.is == "function" ? Object.is : n, u = e.useState, a = e.useEffect, l = e.useLayoutEffect, f = e.useDebugValue, h = !1, b = !1;
    function w(I, g, m) {
      h || e.startTransition !== void 0 && (h = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var d = g();
      if (!b) {
        var o = g();
        s(d, o) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), b = !0);
      }
      var p = u({
        inst: {
          value: d,
          getSnapshot: g
        }
      }), L = p[0].inst, U = p[1];
      return l(function() {
        L.value = d, L.getSnapshot = g, S(L) && U({
          inst: L
        });
      }, [I, d, g]), a(function() {
        S(L) && U({
          inst: L
        });
        var $ = function() {
          S(L) && U({
            inst: L
          });
        };
        return I($);
      }, [I]), f(d), d;
    }
    function S(I) {
      var g = I.getSnapshot, m = I.value;
      try {
        var d = g();
        return !s(m, d);
      } catch {
        return !0;
      }
    }
    function D(I, g, m) {
      return g();
    }
    var x = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", P = !x, M = P ? D : w, E = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : M;
    qn.useSyncExternalStore = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), qn;
}
var oc;
function ku() {
  return oc || (oc = 1, process.env.NODE_ENV === "production" ? Wi.exports = P1() : Wi.exports = N1()), Wi.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ac;
function L1() {
  if (ac)
    return jn;
  ac = 1;
  var e = Xr, t = ku();
  function r(f, h) {
    return f === h && (f !== 0 || 1 / f === 1 / h) || f !== f && h !== h;
  }
  var i = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, s = e.useRef, u = e.useEffect, a = e.useMemo, l = e.useDebugValue;
  return jn.useSyncExternalStoreWithSelector = function(f, h, b, w, S) {
    var D = s(null);
    if (D.current === null) {
      var x = { hasValue: !1, value: null };
      D.current = x;
    } else
      x = D.current;
    D = a(function() {
      function M(d) {
        if (!E) {
          if (E = !0, I = d, d = w(d), S !== void 0 && x.hasValue) {
            var o = x.value;
            if (S(o, d))
              return g = o;
          }
          return g = d;
        }
        if (o = g, i(I, d))
          return o;
        var p = w(d);
        return S !== void 0 && S(o, p) ? o : (I = d, g = p);
      }
      var E = !1, I, g, m = b === void 0 ? null : b;
      return [function() {
        return M(h());
      }, m === null ? void 0 : function() {
        return M(m());
      }];
    }, [h, b, w, S]);
    var P = n(f, D[0], D[1]);
    return u(function() {
      x.hasValue = !0, x.value = P;
    }, [P]), l(P), P;
  }, jn;
}
var zn = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cc;
function U1() {
  return cc || (cc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Xr, t = ku();
    function r(h, b) {
      return h === b && (h !== 0 || 1 / h === 1 / b) || h !== h && b !== b;
    }
    var i = typeof Object.is == "function" ? Object.is : r, n = t.useSyncExternalStore, s = e.useRef, u = e.useEffect, a = e.useMemo, l = e.useDebugValue;
    function f(h, b, w, S, D) {
      var x = s(null), P;
      x.current === null ? (P = {
        hasValue: !1,
        value: null
      }, x.current = P) : P = x.current;
      var M = a(function() {
        var m = !1, d, o, p = function(F) {
          if (!m) {
            m = !0, d = F;
            var q = S(F);
            if (D !== void 0 && P.hasValue) {
              var _ = P.value;
              if (D(_, q))
                return o = _, _;
            }
            return o = q, q;
          }
          var T = d, G = o;
          if (i(T, F))
            return G;
          var V = S(F);
          return D !== void 0 && D(G, V) ? G : (d = F, o = V, V);
        }, L = w === void 0 ? null : w, U = function() {
          return p(b());
        }, $ = L === null ? void 0 : function() {
          return p(L());
        };
        return [U, $];
      }, [b, w, S, D]), E = M[0], I = M[1], g = n(h, E, I);
      return u(function() {
        P.hasValue = !0, P.value = g;
      }, [g]), l(g), g;
    }
    zn.useSyncExternalStoreWithSelector = f, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), zn;
}
process.env.NODE_ENV === "production" ? ms.exports = L1() : ms.exports = U1();
var $1 = ms.exports;
const F1 = /* @__PURE__ */ Os($1), { useSyncExternalStoreWithSelector: M1 } = F1;
function j1(e, t = e.getState, r) {
  const i = M1(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    r
  );
  return Ol(i), i;
}
const uc = (e) => {
  const t = typeof e == "function" ? C1(e) : e, r = (i, n) => j1(t, i, n);
  return Object.assign(r, t), r;
}, B1 = (e) => e ? uc(e) : uc;
function pt(e) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    r[i - 1] = arguments[i];
  if (process.env.NODE_ENV !== "production") {
    var n = G1[e], s = n ? typeof n == "function" ? n.apply(null, r) : n : "unknown error nr: " + e;
    throw Error("[Immer] " + s);
  }
  throw Error("[Immer] minified error nr: " + e + (r.length ? " " + r.map(function(u) {
    return "'" + u + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function Yr(e) {
  return !!e && !!e[Ut];
}
function Nr(e) {
  var t;
  return !!e && (function(r) {
    if (!r || typeof r != "object")
      return !1;
    var i = Object.getPrototypeOf(r);
    if (i === null)
      return !0;
    var n = Object.hasOwnProperty.call(i, "constructor") && i.constructor;
    return n === Object || typeof n == "function" && Function.toString.call(n) === Y1;
  }(e) || Array.isArray(e) || !!e[bc] || !!(!((t = e.constructor) === null || t === void 0) && t[bc]) || Qs(e) || Zs(e));
}
function Ri(e, t, r) {
  r === void 0 && (r = !1), ii(e) === 0 ? (r ? Object.keys : no)(e).forEach(function(i) {
    r && typeof i == "symbol" || t(i, e[i], e);
  }) : e.forEach(function(i, n) {
    return t(n, i, e);
  });
}
function ii(e) {
  var t = e[Ut];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : Qs(e) ? 2 : Zs(e) ? 3 : 0;
}
function _s(e, t) {
  return ii(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function q1(e, t) {
  return ii(e) === 2 ? e.get(t) : e[t];
}
function Wu(e, t, r) {
  var i = ii(e);
  i === 2 ? e.set(t, r) : i === 3 ? e.add(r) : e[t] = r;
}
function z1(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Qs(e) {
  return W1 && e instanceof Map;
}
function Zs(e) {
  return H1 && e instanceof Set;
}
function Tr(e) {
  return e.o || e.t;
}
function eo(e) {
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  var t = J1(e);
  delete t[Ut];
  for (var r = no(t), i = 0; i < r.length; i++) {
    var n = r[i], s = t[n];
    s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (t[n] = { configurable: !0, writable: !0, enumerable: s.enumerable, value: e[n] });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function to(e, t) {
  return t === void 0 && (t = !1), ro(e) || Yr(e) || !Nr(e) || (ii(e) > 1 && (e.set = e.add = e.clear = e.delete = V1), Object.freeze(e), t && Ri(e, function(r, i) {
    return to(i, !0);
  }, !0)), e;
}
function V1() {
  pt(2);
}
function ro(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function sr(e) {
  var t = X1[e];
  return t || pt(18, e), t;
}
function lc() {
  return process.env.NODE_ENV === "production" || Jr || pt(0), Jr;
}
function Vn(e, t) {
  t && (sr("Patches"), e.u = [], e.s = [], e.v = t);
}
function sn(e) {
  ws(e), e.p.forEach(K1), e.p = null;
}
function ws(e) {
  e === Jr && (Jr = e.l);
}
function fc(e) {
  return Jr = { p: [], l: Jr, h: e, m: !0, _: 0 };
}
function K1(e) {
  var t = e[Ut];
  t.i === 0 || t.i === 1 ? t.j() : t.O = !0;
}
function Kn(e, t) {
  t._ = t.p.length;
  var r = t.p[0], i = e !== void 0 && e !== r;
  return t.h.g || sr("ES5").S(t, e, i), i ? (r[Ut].P && (sn(t), pt(4)), Nr(e) && (e = on(t, e), t.l || an(t, e)), t.u && sr("Patches").M(r[Ut].t, e, t.u, t.s)) : e = on(t, r, []), sn(t), t.u && t.v(t.u, t.s), e !== Hu ? e : void 0;
}
function on(e, t, r) {
  if (ro(t))
    return t;
  var i = t[Ut];
  if (!i)
    return Ri(t, function(a, l) {
      return hc(e, i, t, a, l, r);
    }, !0), t;
  if (i.A !== e)
    return t;
  if (!i.P)
    return an(e, i.t, !0), i.t;
  if (!i.I) {
    i.I = !0, i.A._--;
    var n = i.i === 4 || i.i === 5 ? i.o = eo(i.k) : i.o, s = n, u = !1;
    i.i === 3 && (s = new Set(n), n.clear(), u = !0), Ri(s, function(a, l) {
      return hc(e, i, n, a, l, r, u);
    }), an(e, n, !1), r && e.u && sr("Patches").N(i, r, e.u, e.s);
  }
  return i.o;
}
function hc(e, t, r, i, n, s, u) {
  if (process.env.NODE_ENV !== "production" && n === r && pt(5), Yr(n)) {
    var a = on(e, n, s && t && t.i !== 3 && !_s(t.R, i) ? s.concat(i) : void 0);
    if (Wu(r, i, a), !Yr(a))
      return;
    e.m = !1;
  } else
    u && r.add(n);
  if (Nr(n) && !ro(n)) {
    if (!e.h.D && e._ < 1)
      return;
    on(e, n), t && t.A.l || an(e, n);
  }
}
function an(e, t, r) {
  r === void 0 && (r = !1), !e.l && e.h.D && e.m && to(t, r);
}
function kn(e, t) {
  var r = e[Ut];
  return (r ? Tr(r) : e)[t];
}
function dc(e, t) {
  if (t in e)
    for (var r = Object.getPrototypeOf(e); r; ) {
      var i = Object.getOwnPropertyDescriptor(r, t);
      if (i)
        return i;
      r = Object.getPrototypeOf(r);
    }
}
function Es(e) {
  e.P || (e.P = !0, e.l && Es(e.l));
}
function Wn(e) {
  e.o || (e.o = eo(e.t));
}
function Ss(e, t, r) {
  var i = Qs(t) ? sr("MapSet").F(t, r) : Zs(t) ? sr("MapSet").T(t, r) : e.g ? function(n, s) {
    var u = Array.isArray(n), a = { i: u ? 1 : 0, A: s ? s.A : lc(), P: !1, I: !1, R: {}, l: s, t: n, k: null, o: null, j: null, C: !1 }, l = a, f = Ds;
    u && (l = [a], f = Si);
    var h = Proxy.revocable(l, f), b = h.revoke, w = h.proxy;
    return a.k = w, a.j = b, w;
  }(t, r) : sr("ES5").J(t, r);
  return (r ? r.A : lc()).p.push(i), i;
}
function k1(e) {
  return Yr(e) || pt(22, e), function t(r) {
    if (!Nr(r))
      return r;
    var i, n = r[Ut], s = ii(r);
    if (n) {
      if (!n.P && (n.i < 4 || !sr("ES5").K(n)))
        return n.t;
      n.I = !0, i = pc(r, s), n.I = !1;
    } else
      i = pc(r, s);
    return Ri(i, function(u, a) {
      n && q1(n.t, u) === a || Wu(i, u, t(a));
    }), s === 3 ? new Set(i) : i;
  }(e);
}
function pc(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return eo(e);
}
var gc, Jr, io = typeof Symbol < "u" && typeof Symbol("x") == "symbol", W1 = typeof Map < "u", H1 = typeof Set < "u", yc = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", Hu = io ? Symbol.for("immer-nothing") : ((gc = {})["immer-nothing"] = !0, gc), bc = io ? Symbol.for("immer-draftable") : "__$immer_draftable", Ut = io ? Symbol.for("immer-state") : "__$immer_state", G1 = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(e) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(e) {
  return "Cannot apply patch, path doesn't resolve: " + e;
}, 16: 'Sets cannot have "replace" patches.', 17: function(e) {
  return "Unsupported patch operation: " + e;
}, 18: function(e) {
  return "The plugin for '" + e + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + e + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(e) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + e + "'";
}, 22: function(e) {
  return "'current' expects a draft, got: " + e;
}, 23: function(e) {
  return "'original' expects a draft, got: " + e;
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, Y1 = "" + Object.prototype.constructor, no = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Object.getOwnPropertyNames, J1 = Object.getOwnPropertyDescriptors || function(e) {
  var t = {};
  return no(e).forEach(function(r) {
    t[r] = Object.getOwnPropertyDescriptor(e, r);
  }), t;
}, X1 = {}, Ds = { get: function(e, t) {
  if (t === Ut)
    return e;
  var r = Tr(e);
  if (!_s(r, t))
    return function(n, s, u) {
      var a, l = dc(s, u);
      return l ? "value" in l ? l.value : (a = l.get) === null || a === void 0 ? void 0 : a.call(n.k) : void 0;
    }(e, r, t);
  var i = r[t];
  return e.I || !Nr(i) ? i : i === kn(e.t, t) ? (Wn(e), e.o[t] = Ss(e.A.h, i, e)) : i;
}, has: function(e, t) {
  return t in Tr(e);
}, ownKeys: function(e) {
  return Reflect.ownKeys(Tr(e));
}, set: function(e, t, r) {
  var i = dc(Tr(e), t);
  if (i != null && i.set)
    return i.set.call(e.k, r), !0;
  if (!e.P) {
    var n = kn(Tr(e), t), s = n == null ? void 0 : n[Ut];
    if (s && s.t === r)
      return e.o[t] = r, e.R[t] = !1, !0;
    if (z1(r, n) && (r !== void 0 || _s(e.t, t)))
      return !0;
    Wn(e), Es(e);
  }
  return e.o[t] === r && (r !== void 0 || t in e.o) || Number.isNaN(r) && Number.isNaN(e.o[t]) || (e.o[t] = r, e.R[t] = !0), !0;
}, deleteProperty: function(e, t) {
  return kn(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, Wn(e), Es(e)) : delete e.R[t], e.o && delete e.o[t], !0;
}, getOwnPropertyDescriptor: function(e, t) {
  var r = Tr(e), i = Reflect.getOwnPropertyDescriptor(r, t);
  return i && { writable: !0, configurable: e.i !== 1 || t !== "length", enumerable: i.enumerable, value: r[t] };
}, defineProperty: function() {
  pt(11);
}, getPrototypeOf: function(e) {
  return Object.getPrototypeOf(e.t);
}, setPrototypeOf: function() {
  pt(12);
} }, Si = {};
Ri(Ds, function(e, t) {
  Si[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), Si.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && pt(13), Si.set.call(this, e, t, void 0);
}, Si.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && pt(14), Ds.set.call(this, e[0], t, r, e[0]);
};
var Q1 = function() {
  function e(r) {
    var i = this;
    this.g = yc, this.D = !0, this.produce = function(n, s, u) {
      if (typeof n == "function" && typeof s != "function") {
        var a = s;
        s = n;
        var l = i;
        return function(x) {
          var P = this;
          x === void 0 && (x = a);
          for (var M = arguments.length, E = Array(M > 1 ? M - 1 : 0), I = 1; I < M; I++)
            E[I - 1] = arguments[I];
          return l.produce(x, function(g) {
            var m;
            return (m = s).call.apply(m, [P, g].concat(E));
          });
        };
      }
      var f;
      if (typeof s != "function" && pt(6), u !== void 0 && typeof u != "function" && pt(7), Nr(n)) {
        var h = fc(i), b = Ss(i, n, void 0), w = !0;
        try {
          f = s(b), w = !1;
        } finally {
          w ? sn(h) : ws(h);
        }
        return typeof Promise < "u" && f instanceof Promise ? f.then(function(x) {
          return Vn(h, u), Kn(x, h);
        }, function(x) {
          throw sn(h), x;
        }) : (Vn(h, u), Kn(f, h));
      }
      if (!n || typeof n != "object") {
        if ((f = s(n)) === void 0 && (f = n), f === Hu && (f = void 0), i.D && to(f, !0), u) {
          var S = [], D = [];
          sr("Patches").M(n, f, S, D), u(S, D);
        }
        return f;
      }
      pt(21, n);
    }, this.produceWithPatches = function(n, s) {
      if (typeof n == "function")
        return function(f) {
          for (var h = arguments.length, b = Array(h > 1 ? h - 1 : 0), w = 1; w < h; w++)
            b[w - 1] = arguments[w];
          return i.produceWithPatches(f, function(S) {
            return n.apply(void 0, [S].concat(b));
          });
        };
      var u, a, l = i.produce(n, s, function(f, h) {
        u = f, a = h;
      });
      return typeof Promise < "u" && l instanceof Promise ? l.then(function(f) {
        return [f, u, a];
      }) : [l, u, a];
    }, typeof (r == null ? void 0 : r.useProxies) == "boolean" && this.setUseProxies(r.useProxies), typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze);
  }
  var t = e.prototype;
  return t.createDraft = function(r) {
    Nr(r) || pt(8), Yr(r) && (r = k1(r));
    var i = fc(this), n = Ss(this, r, void 0);
    return n[Ut].C = !0, ws(i), n;
  }, t.finishDraft = function(r, i) {
    var n = r && r[Ut];
    process.env.NODE_ENV !== "production" && (n && n.C || pt(9), n.I && pt(10));
    var s = n.A;
    return Vn(s, i), Kn(void 0, s);
  }, t.setAutoFreeze = function(r) {
    this.D = r;
  }, t.setUseProxies = function(r) {
    r && !yc && pt(20), this.g = r;
  }, t.applyPatches = function(r, i) {
    var n;
    for (n = i.length - 1; n >= 0; n--) {
      var s = i[n];
      if (s.path.length === 0 && s.op === "replace") {
        r = s.value;
        break;
      }
    }
    n > -1 && (i = i.slice(n + 1));
    var u = sr("Patches").$;
    return Yr(r) ? u(r, i) : this.produce(r, function(a) {
      return u(a, i);
    });
  }, e;
}(), $t = new Q1(), Z1 = $t.produce;
$t.produceWithPatches.bind($t);
$t.setAutoFreeze.bind($t);
$t.setUseProxies.bind($t);
$t.applyPatches.bind($t);
$t.createDraft.bind($t);
$t.finishDraft.bind($t);
const ev = (e) => (t, r, i) => (i.setState = (n, s, ...u) => {
  const a = typeof n == "function" ? Z1(n) : n;
  return t(a, s, ...u);
}, e(i.setState, r, i)), tv = ev, jr = B1()(
  tv((e, t) => ({
    account: void 0,
    accounts: [],
    chainId: void 0,
    setAccounts: (r) => {
      e({ accounts: r });
    },
    setAccount: (r) => {
      e({ account: r });
    },
    setChainId: (r) => {
      e({ chainId: r });
    }
  }))
), Iv = () => {
  const e = Mr(), [t, r, i, n] = jr((b) => [
    b.account,
    b.accounts,
    b.chainId,
    b.setAccount
  ]), [s, u] = Lt(void 0), { request: a, data: l, error: f, loading: h } = ri({
    topic: e == null ? void 0 : e.topic,
    chainId: i ?? "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "aleo_getSelectedAccount",
      params: {
        type: "GET_SELECTED_ACCOUNT"
      }
    }
  });
  return Js(({ params: b, topic: w }) => {
    if (b.event.name === "accountSelected" && e && e.topic === w) {
      const D = b.event.data, x = b.chainId.split(":")[0], P = b.chainId.split(":")[1];
      n({
        network: x,
        chainId: P,
        address: D
      }), u(void 0);
    }
  }), St(() => {
    e && a();
  }, [e]), St(() => {
    if (f)
      u(f.message);
    else if (l) {
      const b = l && l.type === "GET_SELECTED_ACCOUNT_RES" ? l : void 0, w = l && l.type === "GET_SELECTED_ACCOUNT_RES" ? l.data.error : void 0, S = b == null ? void 0 : b.data.account;
      S && n(S), u(w);
    }
  }, [l, f]), {
    account: t,
    accounts: r,
    isConnected: !!t,
    session: e,
    error: s,
    loading: h
  };
}, xv = () => {
  const e = Mr(), [t, r] = jr((D) => [
    D.chainId,
    D.account
  ]), [i, n] = Lt(0), [s, u] = Lt(!1), [a, l] = Lt(void 0), { request: f, data: h, error: b, loading: w } = ri({
    topic: e == null ? void 0 : e.topic,
    chainId: t ?? "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "aleo_getBalance",
      params: {
        type: "GET_BALANCE",
        data: {
          assetId: void 0
        }
      }
    }
  });
  Js(({ id: D, params: x, topic: P }) => {
    x.event.name === "accountSynced" && e && e.topic === P && (f(), u(!0));
  });
  const S = e && r;
  return St(() => {
    console.log("readyToRequest balance", S), S && (f(), u(!0), console.log("sending balance request in useBalance!"));
  }, [S, r]), St(() => {
    if (b)
      n(0), l(b.message), u(!1);
    else if (h) {
      const D = h && h.type === "GET_BALANCE_RES" ? h : void 0, x = h && h.type === "GET_BALANCE_REJ" ? h.data.error : void 0, P = (D == null ? void 0 : D.data.balance) ?? 0;
      n(P), l(x), u(!1);
    }
  }, [h, b]), { loading: s, balance: i, error: a };
}, Rv = () => {
  const [e, t] = Lt(void 0), { connect: r, data: i, error: n, loading: s } = v1({
    requiredNamespaces: {
      aleo: {
        methods: Ku,
        chains: Xs,
        events: vs
      }
    }
  }), u = async () => {
    try {
      await r(), t(void 0);
    } catch {
    }
  };
  return St(() => {
    n && t(n.message);
  }, [n]), { connect: u, data: i, error: e, loading: s };
}, Av = (e) => {
  const t = Mr(), [r] = jr((b) => [
    b.chainId
  ]), { request: i, data: n, error: s, loading: u } = ri({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: r ?? "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "aleo_deployProgram",
      params: {
        type: "DEPLOY",
        data: {
          data: e
        }
      }
    }
  }), a = s ? s.message : n && n.type === "DEPLOY_REJ" ? n.data.error : void 0, l = n && n.type === "DEPLOY_RES" ? n : void 0, f = l == null ? void 0 : l.data.transactionId;
  return { deploy: () => {
    e && i();
  }, transactionId: f, loading: u, error: a };
}, Tv = (e) => {
  const t = Mr();
  jr((D) => [
    D.chainId
  ]);
  const { request: r, data: i, error: n, loading: s } = ri({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "aleo_executeProgram",
      params: {
        type: "EXECUTE",
        data: {
          data: e
        }
      }
    }
  }), u = n ? n.message : i && i.type === "EXECUTE_REJ" ? i.data.error : void 0, a = i && i.type === "EXECUTE_RES" ? i : void 0, l = a == null ? void 0 : a.data.transactionId, f = a == null ? void 0 : a.data.outputPrivate, h = a == null ? void 0 : a.data.outputPublic, b = a == null ? void 0 : a.data.outputRecords, w = a == null ? void 0 : a.data.outputConstant;
  return { execute: () => {
    e && (r(), console.log("sent execute request"));
  }, transactionId: l, outputConstant: w, outputPrivate: f, outputRecords: b, outputPublic: h, error: u, loading: s };
}, Cv = () => {
  const [e, t] = Lt({
    loading: !0
  });
  return St(() => {
  }, []), { ...e };
}, Pv = (e) => {
  const t = Mr(), [r, i] = jr((x) => [
    x.chainId,
    x.account
  ]), [n, s] = Lt([]), [u, a] = Lt(void 0), [l, f] = Lt(!1), { request: h, data: b, error: w, loading: S } = ri({
    topic: t == null ? void 0 : t.topic,
    chainId: r ?? "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "aleo_getRecords",
      params: {
        type: "GET_RECORDS",
        filter: e
      }
    }
  });
  Js(({ id: x, params: P, topic: M }) => {
    P.event.name === "accountSynced" && t && t.topic === M && (h(), f(!0));
  });
  const D = t && i;
  return St(() => {
    console.log("readyToRequest records", D), D && (h(), f(!0), console.log("sending records request in useRecords!"));
  }, [D, i]), St(() => {
    console.log(t);
  }, [t]), St(() => {
    if (w)
      s([]), a(w.message), f(!1);
    else if (b) {
      const x = b, P = x.type === "GET_RECORDS_REJ" ? x.data.error : void 0, M = x.type === "GET_RECORDS_RES" ? x.data.records : [];
      s(M), a(P), f(!1);
    }
  }, [b, w]), { records: n, error: u, loading: l };
}, Nv = (e) => {
  const t = Mr(), [r] = jr((a) => [
    a.chainId
  ]), { request: i, data: n, error: s, loading: u } = ri({
    topic: (t == null ? void 0 : t.topic) ?? "",
    chainId: r ?? "aleo:1",
    request: {
      id: 1,
      jsonrpc: "2.0",
      method: "aleo_transfer",
      params: e
    }
  });
  return { transfer: i, data: n, error: s, loading: u };
}, rv = () => {
  const e = Mr(), [t, r] = jr((i) => [
    i.setAccount,
    i.setAccounts
  ]);
  St(() => {
    if (e) {
      window.localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE");
      const i = e.namespaces.aleo.accounts.map((n) => {
        const s = n.split(":");
        return {
          network: s[0],
          chainId: s[1],
          address: s[2]
        };
      });
      r(i ?? []), i[0] && t(i[0]);
    }
  }, [e]), zu(({ id: i, topic: n }) => {
    console.log("session deleted! topic: ", n);
  });
};
function iv(e, t, r = t) {
  const i = e < BigInt(0), n = e.toString().slice(i ? 1 : 0).padStart(t + 1, "0"), s = n.slice(0, n.length - t), u = n.slice(-t);
  let a = u.length - 1;
  for (; u[a] === "0"; )
    --a;
  const l = u.slice(0, a + 1);
  return (i ? "-" : "") + (l ? `${s}.${l.slice(0, r)}` : s);
}
function Lv(e, t) {
  const [r, i] = e.split("."), n = (i || "").replace(/0+$/, "").slice(0, t), s = BigInt(10) ** BigInt(t), u = s / BigInt(10) ** BigInt(n.length || 0);
  return BigInt(n || 0) * u + BigInt(r || 0) * s;
}
var nv = /* @__PURE__ */ ((e) => (e[e.ETH = 0] = "ETH", e[e.DAI = 1] = "DAI", e))(nv || {});
function sv(e) {
  switch (e) {
    case 0:
      return {
        id: 0,
        symbol: "ETH",
        coinMarketCapID: "1027"
      };
    case 1:
      return {
        id: 1,
        symbol: "DAI",
        coinMarketCapID: "4943"
      };
  }
}
class Uv {
  constructor(t, r) {
    this.getDisplayValue = () => iv(this.value, 18) + " " + this.symbol, this.type = t;
    const { id: i, symbol: n, coinMarketCapID: s } = sv(t);
    this.id = i, this.symbol = n, this.coinMarketCapID = s, this.value = r;
  }
}
const $v = "0x6b175474e89094c44da98b954eedeac495271d0f", Fv = [
  {
    constant: !0,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: !1,
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    payable: !1,
    type: "function"
  },
  {
    constant: !0,
    inputs: [
      {
        name: "_owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256"
      }
    ],
    payable: !1,
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: !1,
    type: "function"
  }
];
export {
  nv as A,
  rc as B,
  T1 as C,
  Sv as D,
  $v as E,
  Fv as F,
  Dv as P,
  Ul as R,
  vc as T,
  Et as a,
  Ov as b,
  xv as c,
  Rv as d,
  Av as e,
  Tv as f,
  Cv as g,
  Pv as h,
  Nv as i,
  rv as j,
  iv as k,
  Lv as l,
  Uv as m,
  xo as n,
  cv as o,
  Yt as p,
  Vu as q,
  Ku as r,
  En as s,
  av as t,
  Iv as u,
  Xs as v,
  R1 as w,
  vs as x,
  Gr as y,
  A1 as z
};