const defaultLocale = new Intl.RelativeTimeFormat().resolvedOptions().locale;
const notSupported = 'zxx';
const requestedLocales = [defaultLocale, notSupported];
const supportedLocales = Intl.RelativeTimeFormat.supportedLocalesOf(requestedLocales);