var locales = {
  '0': 'en-US'
};
Object.defineProperty(locales, "length", {
  get: function () {}
});
var locales = {
  '0': 'en-US',
  '1': 'pt-BR'
};
Object.defineProperty(locales, "length", {
  get: function () {
    return "1";
  }
});
var locales = {
  '0': 'en-US',
  '1': 'pt-BR'
};
Object.defineProperty(locales, "length", {
  get: function () {
    return 1.3;
  }
});
var locales = {
  '0': 'en-US',
  '1': 'pt-BR'
};
Object.defineProperty(locales, "length", {
  get: function () {
    return Symbol("1.8");
  }
});
var locales = {
  '0': 'en-US',
  '1': 'pt-BR'
};
Object.defineProperty(locales, "length", {
  get: function () {
    return -Infinity;
  }
});
var locales = {
  length: -Math.pow(2, 32) + 1
};
Object.defineProperty(locales, "0", {
  get: function () {
    throw new Error("must not be gotten!");
  }
});
var count = 0;
var locs = {
  get length() {
    if (count++ > 0) throw 42;
    return 0;
  }
};
var locales = Intl.getCanonicalLocales(locs);