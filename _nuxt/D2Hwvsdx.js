import {
  bB as e,
  bC as t,
  bP as a,
  bD as n,
  bE as s,
  bH as l,
  bF as o,
  bG as r,
  bX as i,
  b$ as c,
  c0 as d,
  bM as u,
  c as m,
  cj as p,
  bJ as h,
  bS as b,
  cc as y,
  by as v,
  bQ as g,
  bY as f,
  bx as w,
  bN as _,
  c1 as S,
  bz as x,
  cm as k,
  c2 as L,
  bR as C,
  c5 as I,
  cb as E,
  bI as H,
  ch as N,
} from "./Du3brXL7.js";
import { i as $ } from "./B_rfR8YE.js";
const F = { class: "lore-opening" },
  R = {
    __name: "LoreOpening",
    setup: (c) => (
      e(() => {
        document.body.closest("html").classList.add("no-scroll");
      }),
      t(() => {
        document.body.closest("html").classList.remove("no-scroll");
      }),
      (e, t) => {
        const c = a("VBtn"),
          d = a("VContainer");
        return (
          n(),
          s("div", F, [
            t[3] ||
              (t[3] = l(
                "div",
                { class: "lore__stars" },
                [
                  l("div", { class: "star star--big" }),
                  l("div", { class: "star star--small" }),
                ],
                -1
              )),
            o(
              d,
              { class: "container" },
              {
                default: r(() => [
                  t[2] ||
                    (t[2] = l(
                      "h3",
                      { class: "opening__title" },
                      "Mame Inu - the last Shiba",
                      -1
                    )),
                  o(
                    c,
                    {
                      class: "button",
                      title: "Explore",
                      onClick: t[0] || (t[0] = (t) => e.$emit("close")),
                    },
                    { default: r(() => t[1] || (t[1] = [i("Explore")])), _: 1 }
                  ),
                ]),
                _: 1,
              }
            ),
          ])
        );
      }
    ),
  },
  U = { class: "lore__text" },
  B = { class: "text__content" },
  M = ["innerHTML"],
  A = {
    __name: "TextContent",
    props: { content: { type: String, default: "" } },
    setup: (e) => (t, a) => (
      n(),
      s("div", U, [l("div", B, [l("p", { innerHTML: e.content }, null, 8, M)])])
    ),
  },
  T = ["src"],
  j = ["src"],
  X = ["src"],
  z = { key: 0, class: "lore__container" },
  P = {
    __name: "LorePartItem",
    props: {
      id: { type: Number, default: 1 },
      x: { type: Number, default: 0 },
      width: { type: Number, default: 0 },
      content: { type: String, default: "" },
    },
    setup(t) {
      const a = t,
        r = u(),
        { loreContainerRef: i } = ((t) => {
          const a = c(null),
            n = () => {
              const e = (a.value.offsetLeft - t.x) / 1e3 / 100,
                n = a.value.querySelectorAll(".layer");
              for (let t = 0; t < n.length; t += 1) {
                const a = n[t],
                  s = parseInt(a.getAttribute("strength") || 0, 10);
                a.style.transform = `translateX(${e * s * 1e3}px)`;
              }
            };
          return (
            d(
              () => t.x,
              () => {
                n();
              }
            ),
            e(() => {
              n();
            }),
            { props: t, loreContainerRef: a, updateParallax: n }
          );
        })(a),
        g = c(!1),
        f = m(() => {
          const e = [`part-${a.id}`];
          return g.value && e.push("is-loaded"), e.join(" ");
        }),
        w = (e) => v(`lore/${e}/${a.id}.png`),
        _ = m(() => ({ bg: w("bg"), mg: w("mg"), fg: w("fg") }));
      return (
        p(() => {
          r.isScrollReady && i.value && (g.value = !0);
        }),
        (e, a) => {
          const r = A;
          console.log(h(_))
          return (
            n(),
            s(
              "div",
              {
                class: y(["lore__part", h(f)]),
                ref_key: "loreContainerRef",
                ref: i,
              },
              [
                l(
                  "img",
                  {
                    class: "layer layer--bg",
                    src: h(_).bg,
                    alt: "Background",
                    strength: -3,
                  },
                  null,
                  8,
                  T
                ),
                l(
                  "video",
                  {
                    class: "layer layer--middle",
                    autoPlay: "",
                    muted: "",
                    loop: !0,
                    src: h(_).mg,
                    alt: "Middle Ground",
                  },
                  null,
                  8,
                  j
                ),
                l(
                  "img",
                  {
                    class: "layer layer--fg",
                    src: h(_).fg,
                    alt: "Foreground",
                    strength: -5,
                  },
                  null,
                  8,
                  X
                ),
                t.content
                  ? (n(),
                    s("div", z, [
                      o(r, { content: t.content }, null, 8, ["content"]),
                    ]))
                  : b("", !0),
              ],
              2
            )
          );
        }
      );
    },
  },
  V = {
    __name: "LorePart",
    props: {
      id: { type: Number, default: 1 },
      x: { type: Number, default: 0 },
      width: { type: Number, default: 0 },
      content: { type: String, default: "" },
    },
    setup: (e) => (t, a) => (
      n(),
      g(P, { id: e.id, x: e.x, width: e.width, content: e.content }, null, 8, [
        "id",
        "x",
        "width",
        "content",
      ])
    ),
  },
  W = {
    __name: "ScrollHint",
    props: { isVisible: { type: Boolean, default: !1 } },
    setup: (e) => (t, a) => (
      n(),
      s(
        "div",
        { class: y(["scroll-hint", { "is-visible": e.isVisible }]) },
        a[0] ||
          (a[0] = [
            l(
              "div",
              { class: "scroll-hint__text scroll-hint__text--mouse" },
              [
                l("i", { class: "icon icon-mouse" }),
                l("span", null, "Scroll to explore"),
              ],
              -1
            ),
            l(
              "div",
              { class: "scroll-hint__text scroll-hint__text--touch" },
              [
                l("i", { class: "icon icon-touch" }),
                l("span", null, "Swipe to explore"),
              ],
              -1
            ),
          ]),
        2
      )
    ),
  },
  D = "Mame Inu",
  G = {
    __name: "index",
    setup(a) {
      const { $ASScroll: i } = f(),
        d = N(),
        { smAndDown: y } = w(),
        v = u(),
        F = `${d.public.siteUrl}og/og-shifu.jpg`;
      _({
        title: D,
        meta: [
          {
            property: "description",
            content:
              "Mame Inu, incubated by Web3 titans Shiba Inu and Imaginary Ones on Shibarium, is the Master of meme tokens. $MAME has mastered the meme arts and is delivering a 100% unlocked roundhouse kick to tradition, setting a new discipline for meme tokens on Shibarium.",
          },
          { property: "og:title", content: D },
          { property: "og:image", content: F },
          { property: "og:image:alt", content: "" },
          { property: "og:type", content: "website" },
          { property: "twitter:card", content: "summary_large_image" },
          { property: "twitter:site", content: "Shifutokencom" },
          { property: "twitter:title", content: D },
          { property: "twitter:image", content: F },
          { property: "twitter:image:alt", content: "" },
        ],
        link: [{ rel: "canonical", href: "https://shifutoken.com/" }],
      });
      const U = c(720),
        B = c(720),
        M = c(1080),
        A = c(0),
        T = c(0),
        j = c(!0),
        X = c(!0),
        z = c(null),
        P = m(() => 4),
        G = m(() => {
          const e = {},
            t = y.value ? -1 * P.value : 0,
            a = M.value * P.value + t,
            n = U.value;
          return (e.height = `${n}px`), (e.width = `${a}px`), e;
        }),
        J = m(() => ({
          1: "Before fake hype and capsules took over the meme universe, there was Dog Planet the home of the original meme culture. A world where legendary meme dogs like MILO, BabyDoge, and FLOKI built memes around fun, loyalty, and community.",
          2: "Then Pump Planet arrived. Dog Planet was destroyed. But before the planet burned away, BabyDoge and FLOKI saved one final survivor.",
          3: "LP locked, buy/sell taxes are zero, total supply is 1,000,000,000 and ownership is renounced. Mame Inu.",
          4: "Years later, Mame awakens in a fake meme world ruled by manipulation, endless hype, and capsules. Nobody remembers the real meme culture anymore. But Mame does. And now he’s here to bring it back.",
        })),
        O = () => {
          T.value = document.getElementsByClassName("v-main")[0].scrollLeft;
        },
        q = () => {
          if (!z.value) return;
          const e = document.getElementsByClassName("v-main")[0].scrollLeft;
          (A.value = e), (j.value = e < 0.75 * M.value), (T.value = e);
        },
        Q = () => {
          (U.value = window.innerHeight),
            (M.value = (U.value / 9) * 16),
            (B.value = window.innerWidth);
        },
        Y = S(function (e) {
          const t = e || 0;
          (A.value = t), (j.value = t < 0.75 * M.value);
        }, 10);
      return (
        p(() => {
          X.value
            ? document.body.classList.add("hide-scroller")
            : document.body.classList.remove("hide-scroller");
        }),
        x(() => {
          k();
        }),
        e(() => {
          Q(),
            $.value &&
              (window.addEventListener("touchstart", O),
              window.addEventListener("touchmove", q)),
            document &&
              (document.body.classList.add("lore__body"),
              document.body.closest("html").classList.add("lore__html")),
            window.addEventListener(
              "resize",
              S(() => {
                Q();
              }, 300)
            );
        }),
        t(() => {
          document.body.classList.remove("lore__body"),
            document.body.closest("html").classList.remove("lore__html"),
            document.getElementsByClassName("v-main")[0].scrollTo({ left: 0 });
        }),
        L(() => {
          (v.isScrollReady = !1), i.disable();
        }),
        p(() => {
          z.value &&
            v.isScrollReady &&
            !X.value &&
            (i.on("scroll", (e) => Y(e)),
            i.on("scrollEnd", (e) => Y(e)),
            i.enable({
              newScrollElements: z.value,
              reset: !0,
              horizontalScroll: !0,
            }));
        }),
        p(() => {
          if (z.value && v.isScrollReady && $.value) {
            let e = M.value / 2 - 60;
            B.value > 600 && (e -= B.value / 2),
              document
                .getElementsByClassName("v-main")[0]
                .scrollTo({ left: e });
          }
        }),
        (e, t) => {
          const a = R,
            i = V,
            c = W;
          return (
            n(),
            s(
              "div",
              {
                class: "lore",
                ref_key: "loreContainerRef",
                ref: z,
                style: H(h(G)),
              },
              [
                o(
                  C,
                  { name: "fade" },
                  {
                    default: r(() => [
                      h(X)
                        ? (n(),
                          g(a, {
                            key: 0,
                            onClose: t[0] || (t[0] = (e) => (X.value = !1)),
                          }))
                        : b("", !0),
                    ]),
                    _: 1,
                  }
                ),
                (n(!0),
                s(
                  I,
                  null,
                  E(
                    h(P),
                    (e, t) => (
                      n(),
                      g(
                        i,
                        {
                          key: t,
                          id: e,
                          x: h(A),
                          width: h(M),
                          content: h(J)[e],
                        },
                        null,
                        8,
                        ["id", "x", "width", "content"]
                      )
                    )
                  ),
                  128
                )),
                t[1] ||
                  (t[1] = l("div", { class: "lore__measurement" }, null, -1)),
                o(c, { "is-visible": h(j) }, null, 8, ["is-visible"]),
              ],
              4
            )
          );
        }
      );
    },
  };
export { G as default };
