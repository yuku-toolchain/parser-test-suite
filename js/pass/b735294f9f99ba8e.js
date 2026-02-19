var defaultLocale = new Intl.PluralRules().resolvedOptions().locale;
var notSupported = 'zxx';
var requestedLocales = [defaultLocale, notSupported];
var supportedLocales;
supportedLocales = Intl.PluralRules.supportedLocalesOf(requestedLocales);