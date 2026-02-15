var defaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
var notSupported = 'zxx';
var requestedLocales = [defaultLocale, notSupported];
var supportedLocales;
supportedLocales = Intl.NumberFormat.supportedLocalesOf(requestedLocales);