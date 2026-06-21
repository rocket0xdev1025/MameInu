import {
  b$ as a,
  bV as l,
  bP as t,
  bD as e,
  bQ as o,
  bG as n,
  bX as s,
  c4 as i,
  bJ as c,
  c9 as r,
  ca as d,
  bx as u,
  bZ as m,
  c as p,
  bE as b,
  c5 as y,
  cb as h,
  cc as v,
  bH as g,
  bS as _,
  cd as S,
  ce as f,
  cf as w,
  bF as k,
  cg as A,
  ch as C,
  bY as I,
  bM as B,
  b_ as $,
  bN as x,
  c0 as U,
  bz as H,
  ci as F,
  c2 as L,
  cj as E,
  bK as V,
  ck as N,
  cl as W,
} from "./Du3brXL7.js";
const D = {
    __name: "ConnectWalletButton",
    props: {
      text: { type: String, default: "Connect Wallet" },
      isDisabled: { type: Boolean, default: !1 },
    },
    emits: ["wallet-connected"],
    setup(u, { emit: m }) {
      const p = m,
        b = u,
        y = a(!1),
        h = l();
      async function v() {
        if (!b.isDisabled) {
          (y.value = !1), r(), (y.value = !0), d();
          try {
            if ((await h.connectWallet(), null === h.activeAccount))
              return void (y.value = !1);
            p("wallet-connected");
          } catch (a) {
            (y.value = !1), console.error("Failed to connect wallet", a);
          }
        }
      }
      return (a, l) => {
        const r = t("VBtn");
        return (
          e(),
          o(
            r,
            {
              class: "btn-connect",
              title: u.text,
              ripple: !1,
              disabled: c(y),
              loading: c(y),
              outlined: "",
              rounded: "",
              onClick: v,
            },
            { default: n(() => [s(i(u.text), 1)]), _: 1 },
            8,
            ["title", "disabled", "loading"]
          )
        );
      };
    },
  },
  O = { class: "claim-airdrop__breakdown" },
  T = { class: "card__image" },
  R = ["src", "alt"],
  j = { class: "card__content" },
  z = { class: "content__details" },
  G = { class: "total-supply" },
  M = { class: "text--green" },
  P = { key: 0, class: "description" },
  Q = { class: "content__allocation" },
  Y = { key: 0, class: "text" },
  Z = { class: "allocation-item" },
  q = { class: "text" },
  J = { class: "quantity" },
  K = {
    __name: "ClaimBreakdown",
    setup(a) {
      const { smAndDown: l } = u(),
        t = m(),
        o = p(() => {
          var a, l, e, o, n, s;
          return [
            {
              name: "$SHIB : $BUBBLE ALLOCATION",
              totalSupply: "22%",
              description:
                "For every  100,000 $SHIB : 100 $BUBBLE, you get 1 allocation slot.",
              allocation:
                (null == (a = t.claimAllocation)
                  ? void 0
                  : a.shibBubbleAllocation) || 0,
              image: new URL(
                "" +
                  new URL(
                    "shib-bubble-allocation.BH-C-Z5w.png",
                    import.meta.url
                  ).href,
                import.meta.url
              ).href,
            },
            {
              name: "IO Carnival",
              totalSupply: "5%",
              allocation:
                (null == (l = t.claimAllocation)
                  ? void 0
                  : l.shifuWheelAllocation) || 0,
            },
            {
              name: "$Leash",
              totalSupply: "3%",
              allocation:
                (null == (e = t.claimAllocation)
                  ? void 0
                  : e.leashAllocation) || 0,
            },
            {
              name: "$BONE",
              totalSupply: "1%",
              allocation:
                (null == (o = t.claimAllocation) ? void 0 : o.boneAllocation) ||
                0,
            },
            {
              name: "Gaming",
              totalSupply: "0.5%",
              allocation:
                (null == (n = t.claimAllocation)
                  ? void 0
                  : n.gamingAllocation) || 0,
            },
            {
              name: "Shiboshi + Sheboshi NFT",
              totalSupply: "0.5%",
              allocation:
                (null == (s = t.claimAllocation) ? void 0 : s.nftAllocation) ||
                0,
            },
          ];
        });
      return (a, t) => (
        e(),
        b("div", O, [
          (e(!0),
          b(
            y,
            null,
            h(
              c(o),
              (a, o) => (
                e(),
                b(
                  "div",
                  {
                    class: v([
                      "airdrop-breakdown__card",
                      { "full--width": !!a.image },
                    ]),
                    key: o,
                  },
                  [
                    g("div", T, [
                      a.image
                        ? (e(),
                          b(
                            "img",
                            {
                              key: 0,
                              class: "image",
                              src: a.image,
                              alt: a.name,
                            },
                            null,
                            8,
                            R
                          ))
                        : _("", !0),
                    ]),
                    g("div", j, [
                      g("div", z, [
                        g(
                          "h1",
                          {
                            class: v([
                              "name",
                              {
                                "text--small":
                                  !c(l) && "Shiboshi + Sheboshi NFT" === a.name,
                              },
                            ]),
                          },
                          i(a.name),
                          3
                        ),
                        g("h2", G, [
                          t[0] ||
                            (t[0] = g("span", null, "Total Supply :  ", -1)),
                          g("span", M, i(a.totalSupply), 1),
                        ]),
                        a.description
                          ? (e(), b("h3", P, i(a.description), 1))
                          : _("", !0),
                      ]),
                      g("div", Q, [
                        a.image
                          ? (e(), b("h4", Y, "$MAME Allocated:"))
                          : _("", !0),
                        g("div", Z, [
                          g("div", q, [
                            t[1] ||
                              (t[1] = g(
                                "img",
                                { class: "icon", src: S, alt: "Icon" },
                                null,
                                -1
                              )),
                            g(
                              "span",
                              null,
                              "$MAME " + i(a.image ? "" : "Allocated") + ":",
                              1
                            ),
                          ]),
                          g("span", J, i(c(f)(c(w)(a.allocation))), 1),
                        ]),
                      ]),
                    ]),
                  ],
                  2
                )
              )
            ),
            128
          )),
        ])
      );
    },
  },
  X = { class: "modal-content" },
  aa = { class: "claim__content" },
  la = { class: "amount" },
  ta = {
    __name: "ClaimSuccessModal",
    props: {
      show: { type: Boolean, default: !1 },
      txId: { type: String, default: "" },
      amount: { type: Number, default: 0 },
    },
    emits: ["close"],
    setup(a, { emit: l }) {
      const r = C(),
        d = l,
        u = a,
        m = p({
          get: () => u.show,
          set(a) {
            a || d("close");
          },
        }),
        b = p(
          () =>
            `${
              "0xaa36a7" === r.public.chainId.toLowerCase()
                ? "https://sepolia.etherscan.io"
                : "https://etherscan.io"
            }/tx/${u.txId}`
        );
      return (l, r) => {
        const u = t("VBtn"),
          p = t("VDialog");
        return (
          e(),
          o(
            p,
            {
              class: "shifu-claim-success__modal",
              modelValue: c(m),
              "onUpdate:modelValue":
                r[1] || (r[1] = (a) => (A(m) ? (m.value = a) : null)),
              fullscreen: "",
              scrim: !1,
            },
            {
              default: n(() => [
                g("div", {
                  class: "modal__overlay",
                  title: "Click to close modal",
                  onClick: r[0] || (r[0] = (a) => d("close")),
                }),
                g("div", X, [
                  r[5] ||
                    (r[5] = g(
                      "div",
                      { class: "claim__preview" },
                      [g("img", { class: "image", src: S, alt: "Dust" })],
                      -1
                    )),
                  g("div", aa, [
                    r[4] ||
                      (r[4] = g(
                        "h1",
                        { class: "text" },
                        "Congrats you have claimed :",
                        -1
                      )),
                    g("h2", la, [
                      g("span", null, i(c(f)(c(w)(a.amount))) + " ", 1),
                      r[2] ||
                        (r[2] = g(
                          "span",
                          { class: "text--small" },
                          "$MAME",
                          -1
                        )),
                    ]),
                    k(
                      u,
                      {
                        class: "view__button",
                        title: "View on Etherscan",
                        href: c(b),
                        target: "_blank",
                        ripple: !1,
                      },
                      {
                        default: n(
                          () => r[3] || (r[3] = [s("View on Etherscan")])
                        ),
                        _: 1,
                      },
                      8,
                      ["href"]
                    ),
                  ]),
                ]),
              ]),
              _: 1,
            },
            8,
            ["modelValue"]
          )
        );
      };
    },
  },
  ea = { class: "content-container" },
  oa = { key: 0, class: "checker__content" },
  na = { class: "airdrop-cta__wrapper" },
  sa = { class: "allocation__wrapper" },
  ia = { class: "allocation total" },
  ca = { class: "total" },
  ra = { key: 0 },
  da = { class: "text--green" },
  ua = { key: 0, class: "allocation balance" },
  ma = { class: "total" },
  pa = { key: 0 },
  ba = { class: "text--green" },
  ya = { key: 1, class: "allocation claimable" },
  ha = { class: "total" },
  va = { key: 0 },
  ga = { class: "text--green" },
  _a = "Claim - $MAME",
  Sa = {
    __name: "claim",
    setup(o) {
      const { $ASScroll: r, $emitter: d } = I(),
        { xs: h } = u(),
        S = C(),
        A = B(),
        O = l(),
        T = m(),
        R = $(),
        j = `${S.public.siteUrl}og/og-shifu.jpg`;
      x({
        title: _a,
        meta: [
          {
            property: "description",
            content:
              "Dust, incubated by Web3 titans Shiba Inu and Imaginary Ones on Shibarium, is the Master of meme tokens. Dust has mastered the meme arts and is delivering a 100% unlocked roundhouse kick to tradition, setting a new discipline for meme tokens on Shibarium.",
          },
          { property: "og:title", content: _a },
          { property: "og:image", content: j },
          { property: "og:image:alt", content: "" },
          { property: "og:type", content: "website" },
          { property: "twitter:card", content: "summary_large_image" },
          { property: "twitter:site", content: "Shifutokencom" },
          { property: "twitter:title", content: _a },
          { property: "twitter:image", content: j },
          { property: "twitter:image:alt", content: "" },
        ],
        link: [{ rel: "canonical", href: "https://shifutoken.com/claim" }],
      });
      const z = a(null),
        G = a(!1),
        M = a(!1),
        P = a(0),
        Q = a(""),
        Y = p(() => N(T.claimAllocation.total)),
        Z = p(() => !1),
        q = (a = 0) => f(w(a)),
        J = async () => {
          try {
            await T.getClaimBreakdown(), (O.isConnected = !0);
          } catch (a) {
            O.disconnectWallet();
          }
        },
        X = async () => {
          if (!Z.value) {
            G.value = !0;
            try {
              const a = await T.claimAirdrop();
              (P.value = (null == a ? void 0 : a.claimedQty) || 0),
                (M.value = !!(null == a ? void 0 : a.claimedQty) || !1),
                (Q.value = (null == a ? void 0 : a.txId) || ""),
                d.emit("notify", {
                  msg: "Your vested $MAME allocation has been successfully claimed.",
                  type: "success",
                  show: !0,
                });
            } catch (a) {
              console.error(a),
                (P.value = 0),
                (M.value = !1),
                d.emit("notify", { msg: a, type: "error", show: !0 });
            } finally {
              G.value = !1;
            }
          }
        };
      return (
        U(
          () => M.value,
          (a) => {
            document.body.classList.contains("hide-scroller") ||
              (a
                ? (document.body.closest("html").classList.add("no-scroll"),
                  r.disable())
                : (document.body.closest("html").classList.remove("no-scroll"),
                  r.enable({ restore: !0 })));
          }
        ),
        U(
          () => O.isConnected,
          async (a) => {
            a &&
              R.isShifuAirdropContractPaused &&
              d.emit("notify", {
                msg: "Shifu Airdrop has been paused, Please try again later",
                type: "error",
              }),
              a ||
                (await W(),
                r.enable({ newScrollElements: z.value, reset: !0 }));
          }
        ),
        H(() => {
          F();
        }),
        L(() => {
          (A.isScrollReady = !1), r.disable();
        }),
        E(async () => {
          z.value &&
            A.isScrollReady &&
            O.isConnected &&
            (await W(), r.enable({ newScrollElements: z.value, reset: !0 }));
        }),
        (a, l) => {
          const o = D,
            r = t("VBtn"),
            d = V;
          return (
            e(),
            b(
              "div",
              { class: "shifu-airdrop", ref_key: "wrapper", ref: z },
              [
                k(d, null, {
                  default: n(() => [
                    g(
                      "div",
                      {
                        class: v([
                          "shifu-airdrop__container",
                          { "is-connected": c(O).isConnected },
                        ]),
                      },
                      [
                        g("div", ea, [
                          c(O).isConnected
                            ? (e(),
                              b(
                                y,
                                { key: 1 },
                                [
                                  k(K),
                                  g("div", na, [
                                    g("div", sa, [
                                      g("div", ia, [
                                        g("h3", ca, [
                                          l[3] ||
                                            (l[3] = g(
                                              "span",
                                              null,
                                              "Total Allocation:",
                                              -1
                                            )),
                                          c(h) ? (e(), b("br", ra)) : _("", !0),
                                          g("span", da, i(q(c(Y))), 1),
                                          l[4] ||
                                            (l[4] = g(
                                              "span",
                                              null,
                                              "$MAME",
                                              -1
                                            )),
                                        ]),
                                      ]),
                                      c(T).isVestingInitialized
                                        ? (e(),
                                          b("div", ua, [
                                            g("h3", ma, [
                                              l[5] ||
                                                (l[5] = g(
                                                  "span",
                                                  null,
                                                  "Balance Allocation:",
                                                  -1
                                                )),
                                              c(h)
                                                ? (e(), b("br", pa))
                                                : _("", !0),
                                              g(
                                                "span",
                                                ba,
                                                i(
                                                  q(c(T).totalBalanceAllocation)
                                                ),
                                                1
                                              ),
                                              l[6] ||
                                                (l[6] = g(
                                                  "span",
                                                  null,
                                                  "$MAME",
                                                  -1
                                                )),
                                            ]),
                                          ]))
                                        : _("", !0),
                                      c(T).isVestingInitialized
                                        ? (e(),
                                          b("div", ya, [
                                            g("h3", ha, [
                                              l[7] ||
                                                (l[7] = g(
                                                  "span",
                                                  null,
                                                  "Claimable Allocation:",
                                                  -1
                                                )),
                                              c(h)
                                                ? (e(), b("br", va))
                                                : _("", !0),
                                              g(
                                                "span",
                                                ga,
                                                i(q(c(T).totalClaimableAmount)),
                                                1
                                              ),
                                              l[8] ||
                                                (l[8] = g(
                                                  "span",
                                                  null,
                                                  "$MAME",
                                                  -1
                                                )),
                                            ]),
                                          ]))
                                        : _("", !0),
                                      l[9] ||
                                        (l[9] = g(
                                          "h4",
                                          { class: "info" },
                                          [
                                            s(
                                              "TGE Unlock : 50% / Daily unlock across 4 weeks"
                                            ),
                                            g("br"),
                                            s(
                                              "(Important : Selling your $SHIB / $BUBBLE / $LEASH / $BONE will put your allocation at risk)"
                                            ),
                                          ],
                                          -1
                                        )),
                                    ]),
                                    k(
                                      r,
                                      {
                                        class: "claim-airdrop__button",
                                        title: "Claim Airdrop",
                                        ripple: !1,
                                        disabled: c(Z),
                                        loading: c(G),
                                        onClick: X,
                                      },
                                      {
                                        default: n(
                                          () =>
                                            l[10] ||
                                            (l[10] = [s("Claim Airdrop")])
                                        ),
                                        _: 1,
                                      },
                                      8,
                                      ["disabled", "loading"]
                                    ),
                                  ]),
                                ],
                                64
                              ))
                            : (e(),
                              b("div", oa, [
                                l[1] ||
                                  (l[1] = g(
                                    "h1",
                                    { class: "content-title" },
                                    "Claim $MAME",
                                    -1
                                  )),
                                l[2] ||
                                  (l[2] = g(
                                    "h2",
                                    { class: "content-subtitle" },
                                    "Connect your wallet to claim!",
                                    -1
                                  )),
                                k(o, { onWalletConnected: J }),
                              ])),
                        ]),
                      ],
                      2
                    ),
                    k(
                      ta,
                      {
                        show: c(M),
                        amount: c(P),
                        "tx-id": c(Q),
                        onClose: l[0] || (l[0] = (a) => (M.value = !1)),
                      },
                      null,
                      8,
                      ["show", "amount", "tx-id"]
                    ),
                  ]),
                  _: 1,
                }),
              ],
              512
            )
          );
        }
      );
    },
  };
export { Sa as default };
