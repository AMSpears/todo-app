(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    251: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(51),
        r = a(0),
        o = a.n(r),
        l = a(46);
      t.default = ({
        onChange: e,
        autoFocus: t,
        field: a,
        value: r,
        errors: u,
        isDisabled: c,
      }) => {
        const i = "ks-input-" + a.path;
        return o.a.createElement(
          n.a,
          null,
          o.a.createElement(n.d, { htmlFor: i, field: a, errors: u }),
          o.a.createElement(n.b, { text: a.adminDoc }),
          o.a.createElement(
            n.c,
            null,
            o.a.createElement(l.c, {
              autoComplete: "off",
              autoFocus: t,
              required: a.isRequired,
              type: "text",
              value: ((e) =>
                "string" == typeof e
                  ? e
                  : "number" == typeof e
                  ? String(e)
                  : "")(r),
              onChange: (t) => {
                const a = t.target.value;
                e(a.replace(/\D/g, ""));
              },
              id: i,
              disabled: c,
            })
          )
        );
      };
    },
  },
]);
