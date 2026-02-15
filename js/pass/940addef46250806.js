var actual = new Intl.Collator().resolvedOptions();
var actual2 = new Intl.Collator().resolvedOptions();
var collations = ["default", ...allCollations()];
var dataPropertyDesc = {
  writable: true,
  enumerable: true,
  configurable: true
};
if (actual.hasOwnProperty("numeric")) {}
if (actual.hasOwnProperty("caseFirst")) {}