const availableCalendars = ["buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "gregory", "hebrew", "indian", "islamic-civil", "islamic-tbla", "islamic-umalqura", "iso8601", "japanese", "persian", "roc"];
const islamic = new Intl.DateTimeFormat("en", {
  calendar: "islamic"
});
const islamicRgsa = new Intl.DateTimeFormat("en", {
  calendar: "islamic-rgsa"
});
const islamicUExtension = new Intl.DateTimeFormat("en-u-ca-islamic");
const islamicRgsaUExtension = new Intl.DateTimeFormat("en-u-ca-islamic-rgsa");