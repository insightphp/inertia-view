var p = Object.defineProperty;
var l = (t, e, o) => e in t ? p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var s = (t, e, o) => (l(t, typeof e != "symbol" ? e + "" : e, o), o);
import { defineComponent as m, openBlock as i, createBlock as h, resolveDynamicComponent as C, normalizeProps as u, guardReactiveProps as f, withCtx as g, renderSlot as w } from "vue";
class b {
  constructor() {
    s(this, "components", {});
  }
  registerComponentsInNamespace(e, o, n = "app") {
    this.components.hasOwnProperty(n) || (this.components[n] = {}), Object.keys(e).forEach((c) => {
      const r = c.replace("./", "").replace(o.replace("./", ""), "").replace("/", "").replace(/\//g, "-");
      this.components[n][this.resolveComponentName(r)] = e[c];
    });
  }
  resolveComponentName(e, o = null) {
    const n = e.split("/"), r = n[n.length - 1].replace(".vue", "").replace(/\B([A-Z])(?=[a-z])/g, "-$1").replace(/\B([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    return o ? `${o}-${r}` : r;
  }
  boot(e) {
    Object.keys(this.components).forEach((o) => {
      Object.keys(this.components[o]).forEach((n) => {
        e.component(`${o}-${n}`, this.components[o][n].default);
      });
    });
  }
}
const a = new b(), k = {
  install(t, e) {
    e != null && e.components && Object.keys(e.components).forEach((o) => {
      Object.keys(e.components[o]).forEach((n) => {
        a.registerComponentsInNamespace(e.components[o][n], n, o);
      });
    }), a.boot(t);
  }
}, v = /* @__PURE__ */ m({
  __name: "Portal",
  props: {
    component: null
  },
  setup(t) {
    if (!t.component._component)
      throw new Error("Component rendered in Portal must be valid View Component.");
    return (o, n) => (i(), h(C(t.component._component.name), u(f(t.component)), {
      default: g(() => [
        w(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  k as Plugin,
  v as Portal,
  a as ViewComponentManager
};
