var langtag = "de-latn-de-fonipa-1996-u-ca-gregory-co-phonebk-hc-h23-kf-true-kn-false-nu-latn";
var loc = new Intl.Locale(langtag);
if (("caseFirst" in loc)) {}
if (("numeric" in loc)) {}
var loc = new Intl.Locale(langtag, {
  language: "ja",
  script: "jpan",
  region: "jp",
  variants: "Hepburn",
  calendar: "japanese",
  collation: "search",
  hourCycle: "h24",
  caseFirst: "false",
  numeric: "true",
  numberingSystem: "jpanfin"
});
if (("caseFirst" in loc)) {}
if (("numeric" in loc)) {}
var loc = new Intl.Locale(langtag, {
  language: "fr",
  region: "ca",
  collation: "standard",
  hourCycle: "h11"
});
if (("caseFirst" in loc)) {}
if (("numeric" in loc)) {}
var loc = new Intl.Locale("und");
var loc = new Intl.Locale("und-US-u-co-emoji");
if (("collation" in loc)) {}