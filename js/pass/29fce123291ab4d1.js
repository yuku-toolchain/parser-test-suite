var x;
var obj = {
  toString() {
    return null;
  },
  valueOf() {
    return null;
  }
};
x = undefined;
x = obj ?? 1;
x = undefined;
x = obj ?? null;
x = undefined;
x = obj ?? undefined;
x = undefined;
x = (obj ?? null) ?? undefined;
x = undefined;
x = (obj ?? undefined) ?? null;
x = undefined;
x = (obj ?? null) ?? null;
x = undefined;
x = (obj ?? undefined) ?? undefined;
x = undefined;
x = (null ?? obj) ?? null;
x = undefined;
x = (null ?? obj) ?? undefined;
x = undefined;
x = (undefined ?? obj) ?? null;
x = undefined;
x = (undefined ?? obj) ?? undefined;