let defaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
let supportedNumberingSystems = ["latn", "arab"].filter(nu => new Intl.NumberFormat(defaultLocale + "-u-nu-" + nu).resolvedOptions().numberingSystem === nu);
if (supportedNumberingSystems.includes("latn")) {
  let numberFormat = new Intl.NumberFormat(defaultLocale + "-u-nu-lATn");
}
if (supportedNumberingSystems.includes("arab")) {
  let numberFormat = new Intl.NumberFormat(defaultLocale + "-u-nu-Arab");
}