class CustomListFormat extends Intl.ListFormat {
  constructor(locales, options) {
    super(locales, options);
    this.isCustom = true;
  }
}
const locale = "de";
const argument = ["foo", "bar"];
const real_lf = new Intl.ListFormat(locale);
const custom_lf = new CustomListFormat(locale);