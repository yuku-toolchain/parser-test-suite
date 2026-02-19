const defaultLocale = new Intl.DurationFormat().resolvedOptions().locale;
const notSupported = "zxx";
const requestedLocales = [defaultLocale, notSupported];
const supportedLocales = Intl.DurationFormat.supportedLocalesOf(requestedLocales);