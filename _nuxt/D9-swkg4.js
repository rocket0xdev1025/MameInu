import {
  bV as e,
  bP as t,
  bD as o,
  bE as l,
  bH as s,
  bW as n,
  bF as a,
  bG as i,
  bX as r,
  bY as c,
  bL as d,
  bx as u,
  bM as m,
  bZ as w,
  b_ as h,
  b$ as b,
  c as v,
  c0 as f,
  bB as p,
  c1 as y,
  c2 as g,
  bJ as _,
  c3 as k,
  bS as S,
  bR as T,
  bQ as E,
  c4 as x,
  c5 as H,
  bT as L,
  bU as C,
  bK as $,
} from "./Du3brXL7.js";
import { i as A } from "./B_rfR8YE.js";
const N = { class: "base-wrong-network" },
  O = { class: "content-container" },
  P = { name: "BaseWrongNetwork" },
  B = Object.assign(P, {
    setup(c) {
      const d = e(),
        u = () => {
          d.switchNetwork();
        };
      return (e, c) => {
        const d = t("VBtn");
        return (
          o(),
          l("div", N, [
            s("div", O, [
              c[1] ||
                (c[1] = s(
                  "img",
                  { class: "loader__image", src: n, alt: "Wrong network" },
                  null,
                  -1
                )),
              c[2] ||
                (c[2] = s(
                  "div",
                  { class: "loader__content" },
                  [
                    s(
                      "div",
                      { class: "content__title" },
                      "Oops, it looks like you’re on the wrong network!"
                    ),
                    s(
                      "div",
                      { class: "content__text" },
                      "Connect to the Shibarium network to get access to our $MAME platform."
                    ),
                  ],
                  -1
                )),
              a(
                d,
                {
                  class: "switch-network__button",
                  title: "Switch Network",
                  ripple: !1,
                  onClick: u,
                },
                {
                  default: i(() => c[0] || (c[0] = [r("Switch Network")])),
                  _: 1,
                }
              ),
            ]),
          ])
        );
      };
    },
  }),
  M = {
    __name: "default",
    setup(s) {
      const { $gsap: n, $ScrollTrigger: N, $ASScroll: O, $emitter: P } = c(),
        M = d(),
        { smAndDown: z } = u(),
        V = m(),
        W = e(),
        R = w(),
        j = h(),
        D = { show: !1, type: "success", msg: "" },
        F = b(null),
        Y = b(!1),
        q = b(!1),
        I = b(0),
        U = b(null),
        G = b({ ...D }),
        J = v(() => M.name && "claim" === M.name),
        K = v(() => [].includes(M.name)),
        Q = v(() => ["index"].includes(M.name)),
        X = () => {
          const e = 0.01 * window.innerHeight;
          document.documentElement.style.setProperty("--vh", `${e}px`);
        },
        Z = () => {
          const e = 0.01 * window.innerHeight;
          document.documentElement.style.setProperty("--ovh", `${e}px`);
        },
        ee = () => {
          let e = 100;
          q.value && (e = 800),
            setTimeout(() => {
              ae(), (q.value = !1);
            }, e);
        },
        te = () => {
          if (V.isScrollReady) {
            if (O.controller && !z.value) {
              Y.value = !0;
              let e = window.innerHeight;
              2 * e > document.body.offsetHeight &&
                (e = document.body.offsetHeight - window.innerHeight),
                O.scrollTo(e);
            } else
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            le();
          }
        },
        oe = () => {
          O.controller
            ? O.scrollTo(0)
            : window.scrollTo({ top: 0, behavior: "smooth" });
          document
            .querySelectorAll(
              'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )[0]
            .focus({ preventScroll: !0 }),
            le();
        },
        le = () => {
          setTimeout(() => {
            Y.value = !1;
          }, 750);
        },
        se = () => {
          V.isMenuOpened = !1;
        },
        ne = (e = {}) => {
          const t = e.duration || 3e3;
          (G.value = e),
            clearTimeout(U.value),
            (U.value = setTimeout(() => {
              G.value = D;
            }, t));
        };
      f(
        A,
        (e) => {
          e
            ? document.body.classList.add("is-touch-screen")
            : document.body.classList.remove("is-touch-screen");
        },
        { immediate: !0 }
      ),
        f(
          () => V.isMenuOpened,
          (e) => {
            document.body.classList.contains("hide-scroller") ||
              (e
                ? (document.body.closest("html").classList.add("no-scroll"),
                  O.disable())
                : (document.body.closest("html").classList.remove("no-scroll"),
                  O.enable({ horizontalScroll: Q.value, restore: !0 })));
          }
        ),
        f(Y, (e) => {
          e
            ? O.disable({ inputOnly: !0 })
            : O.enable({ horizontalScroll: Q.value, restore: !0 });
        }),
        f(
          () => M.path,
          () => {
            (q.value = !0),
              (I.value = window.scrollY),
              setTimeout(() => {
                (() => {
                  const e = N.getAll();
                  for (let t = 0; t < e.length; t += 1) e[t].kill(!0);
                })(),
                  ee(),
                  (O.currentPos = 0),
                  (O.containerElement.scrollTop = 0),
                  K.value &&
                    document.getElementsByClassName("asscrollbar__handle")[0] &&
                    (document.getElementsByClassName(
                      "asscrollbar__handle"
                    )[0].style.height = 0),
                  ie();
              }, 400);
          }
        ),
        f(
          () => W.activeAccount,
          async (e, t) => {
            W.isConnected &&
              t &&
              e !== t &&
              e &&
              (await W.disconnectWallet(),
              R.resetClaimData(),
              (j.isInitialSetupFinished = !1));
          }
        );
      const ae = () => {
          n.ticker.add(O.update),
            N.defaults({ scroller: O.containerElement }),
            N.scrollerProxy(O.containerElement, {
              scrollTop(e) {
                return arguments.length ? (O.currentPos = e) : O.currentPos;
              },
              getBoundingClientRect: () => ({
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
              }),
            }),
            ie(),
            O.on("update", N.update),
            N.addEventListener("refresh", O.resize),
            P.on("scroll-to-top", oe),
            P.on("scroll-to-first-section", te);
        },
        ie = () => {
          A.value ||
            (K.value &&
              document &&
              document.querySelectorAll("[asscroll-container]").length) ||
            O.on("scrollEnd", (e) => {
              I.value !== e && (I.value = e);
            }),
            (Q.value && A.value) ||
              (clearTimeout(F.value),
              (F.value = setTimeout(() => {
                N.refresh(), clearTimeout(F.value);
              }, 1500))),
            K.value || (V.isScrollReady = !0);
        };
      return (
        p(() => {
          window &&
            (P.on("notify", ne),
            X(),
            Z(),
            window.addEventListener(
              "resize",
              y(() => {
                X(), Z();
              }, 20)
            ),
            window.addEventListener(
              "resize",
              y(() => {
                setTimeout(() => {
                  N.refresh();
                }, 200);
              }, 300)
            ),
            A.value &&
              window.addEventListener(
                "scroll",
                y(() => {
                  I.value = window.scrollY;
                }),
                0
              ),
            ee());
        }),
        g(() => {
          P.off("scroll-to-top"),
            P.off("scroll-to-first-section"),
            P.off("notify");
        }),
        (e, s) => {
          const n = L,
            c = B,
            d = t("VMain"),
            u = C,
            m = $,
            w = t("VApp"),
            h = t("VAlert");
          return (
            o(),
            l(
              H,
              null,
              [
                a(
                  w,
                  { "asscroll-container": "" },
                  {
                    default: i(() => [
                      a(m, null, {
                        default: i(() => [
                          a(n, { "aria-hidden": "false", tabindex: "0" }),
                          a(
                            d,
                            { "aria-hidden": "false" },
                            {
                              default: i(() => [
                                _(J) && _(V).showSwitchNetwork
                                  ? S("", !0)
                                  : k(e.$slots, "default", { key: 0 }),
                                a(
                                  T,
                                  { name: "fade" },
                                  {
                                    default: i(() => [
                                      _(J) && _(V).showSwitchNetwork
                                        ? (o(), E(c, { key: 0 }))
                                        : S("", !0),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 3,
                            }
                          ),
                          a(
                            T,
                            { name: "slide-left" },
                            {
                              default: i(() => [
                                _(V).isMenuOpened
                                  ? (o(), E(u, { key: 0, onClose: se }))
                                  : S("", !0),
                              ]),
                              _: 1,
                            }
                          ),
                          a(
                            T,
                            { name: "fade" },
                            {
                              default: i(() => [
                                _(V).isMenuOpened
                                  ? (o(),
                                    l("div", {
                                      key: 0,
                                      class: "sidebar-overlay",
                                      onClick: se,
                                    }))
                                  : S("", !0),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 3,
                      }),
                    ]),
                    _: 3,
                  }
                ),
                a(m, null, {
                  default: i(() => [
                    a(
                      T,
                      { name: "fade" },
                      {
                        default: i(() => [
                          a(
                            h,
                            {
                              type: _(G).type,
                              "model-value": _(G).show,
                              position: "fixed",
                              rounded: "",
                            },
                            { default: i(() => [r(x(_(G).msg), 1)]), _: 1 },
                            8,
                            ["type", "model-value"]
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }),
              ],
              64
            )
          );
        }
      );
    },
  };
export { M as default };
