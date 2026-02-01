var extensions = ["-u-co-phonebk-kn", "-u-kn-co-phonebk", "-u-co-phonebk-kn-true", "-u-kn-true-co-phonebk"];
extensions.forEach(function (extension) {
  var defaultLocale = new Intl.Collator().resolvedOptions().locale;
  var collator = new Intl.Collator([defaultLocale + extension], {
    usage: "sort"
  });
  var locale = collator.resolvedOptions().locale;
  var numeric = collator.resolvedOptions().numeric;
  if (numeric !== undefined) {}
});