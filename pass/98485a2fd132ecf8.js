const tag = "ar";
const tag2 = "fa";
const tag3 = "zh";
const loc = new Intl.Locale(tag);
class PatchedLocale extends Intl.Locale {
  constructor(tag, options) {
    super(tag, options);
  }
  toString() {}
}
const ploc = new PatchedLocale(tag2);
let res = Intl.getCanonicalLocales(loc);
res = Intl.getCanonicalLocales(ploc);
res = Intl.getCanonicalLocales([loc, tag3, ploc]);