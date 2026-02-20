class CustomRelativeTimeFormat extends Intl.RelativeTimeFormat {
  constructor(locales, options) {
    super(locales, options);
    this.isCustom = true;
  }
}
const locale = "de";
const value = 7;
const unit = "day";
const real_rtf = new Intl.RelativeTimeFormat(locale);
const custom_rtf = new CustomRelativeTimeFormat(locale);