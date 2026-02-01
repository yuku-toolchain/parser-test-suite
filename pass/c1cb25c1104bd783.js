const collations = Intl.supportedValuesOf("collation");
const locales = ["en", "ar", "de", "es", "hi", "ko", "ln", "si", "sv", "zh"];
for (let collation of collations) {
  let supported = false;
  for (let locale of locales) {
    let obj = new Intl.Collator(locale, {
      collation
    });
    if (obj.resolvedOptions().collation === collation) {
      supported = true;
      break;
    }
  }
}
for (let collation of allCollations()) {
  let supported = false;
  for (let locale of locales) {
    let obj = new Intl.Collator(locale, {
      collation
    });
    if (obj.resolvedOptions().collation === collation) {
      supported = true;
      break;
    }
  }
  if (supported) {} else {}
}