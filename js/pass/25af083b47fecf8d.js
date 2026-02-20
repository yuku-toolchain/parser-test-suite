const rtf = new Intl.RelativeTimeFormat("en-US");
const values = [[undefined, "undefined"], [NaN, "NaN"], [Infinity, "Infinity"], [-Infinity, "-Infinity"], ["string", '"string"'], [{}, "empty object"], [{
  toString() {
    return NaN;
  },
  valueOf: undefined
}, "object with toString"], [{
  valueOf() {
    return NaN;
  },
  toString: undefined
}, "object with valueOf"]];
for (const [value, name] of values) {}