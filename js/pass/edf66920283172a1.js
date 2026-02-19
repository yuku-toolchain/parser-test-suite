var defaultLocale = new Intl.Collator().resolvedOptions().locale;
var notSupported = 'zxx';
var requestedLocales = [defaultLocale, notSupported];
var supportedLocales;
supportedLocales = Intl.Collator.supportedLocalesOf(requestedLocales);