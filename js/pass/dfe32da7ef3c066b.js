const defaultLocale = new Intl.Segmenter().resolvedOptions().locale;
const notSupported = "zxx";
const requestedLocales = [defaultLocale, notSupported];
const supportedLocales = Intl.Segmenter.supportedLocalesOf(requestedLocales);