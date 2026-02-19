var defaultLocale = new Intl.DateTimeFormat().resolvedOptions().locale;
var notSupported = 'zxx';
var requestedLocales = [defaultLocale, notSupported];
var supportedLocales;
supportedLocales = Intl.DateTimeFormat.supportedLocalesOf(requestedLocales);