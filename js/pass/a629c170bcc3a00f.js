class CustomLocale extends Intl.Locale {
  constructor(locales, options) {
    super(locales, options);
    this.isCustom = true;
  }
}
var locale = new CustomLocale("de");