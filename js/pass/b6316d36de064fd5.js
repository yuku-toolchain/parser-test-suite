let defaultLocale = new Intl.DateTimeFormat().resolvedOptions().locale;
let supportedNumberingSystems = ["latn", "arab"].filter(nu => new Intl.DateTimeFormat(defaultLocale + "-u-nu-" + nu).resolvedOptions().numberingSystem === nu);
if (supportedNumberingSystems.includes("latn")) {
  let dateTimeFormat = new Intl.DateTimeFormat(defaultLocale + "-u-nu-lATn");
}
if (supportedNumberingSystems.includes("arab")) {
  let dateTimeFormat = new Intl.DateTimeFormat(defaultLocale + "-u-nu-Arab");
}
let supportedCalendars = ["gregory", "chinese"].filter(ca => new Intl.DateTimeFormat(defaultLocale + "-u-ca-" + ca).resolvedOptions().calendar === ca);
if (supportedCalendars.includes("gregory")) {
  let dateTimeFormat = new Intl.DateTimeFormat(defaultLocale + "-u-ca-Gregory");
}
if (supportedCalendars.includes("chinese")) {
  let dateTimeFormat = new Intl.DateTimeFormat(defaultLocale + "-u-ca-CHINESE");
}