const defaultLocale = new Intl.ListFormat().resolvedOptions().locale;
const notSupported = 'zxx';
const requestedLocales = [defaultLocale, notSupported];
const supportedLocales = Intl.ListFormat.supportedLocalesOf(requestedLocales);