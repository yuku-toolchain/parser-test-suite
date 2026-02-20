let defaultLocale = new Intl.DateTimeFormat().resolvedOptions().locale;
let supportedNumberingSystems = ["latn", "arab"].filter(nu => new Intl.DateTimeFormat(defaultLocale + "-u-nu-" + nu).resolvedOptions().numberingSystem === nu);
let supportedCalendars = ["gregory", "chinese"].filter(ca => new Intl.DateTimeFormat(defaultLocale + "-u-ca-" + ca).resolvedOptions().calendar === ca);
let options = [{
  key: "nu",
  property: "numberingSystem",
  type: "string",
  values: supportedNumberingSystems
}, {
  key: "ca",
  property: "calendar",
  type: "string",
  values: supportedCalendars
}];
options.forEach(function (option) {
  let dateTimeFormat, opt, result;
  let supportedValues = [];
  option.values.forEach(function (value) {
    opt = {};
    opt[option.property] = value;
    dateTimeFormat = new Intl.DateTimeFormat([defaultLocale], opt);
    result = dateTimeFormat.resolvedOptions()[option.property];
    if (result !== undefined && supportedValues.indexOf(result) === -1) {
      supportedValues.push(result);
    }
  });
  supportedValues.forEach(function (value) {
    dateTimeFormat = new Intl.DateTimeFormat([defaultLocale + "-u-" + option.key + "-" + value]);
    result = dateTimeFormat.resolvedOptions()[option.property];
  });
  supportedValues.forEach(function (value) {
    let otherValue;
    option.values.forEach(function (possibleValue) {
      if (possibleValue !== value) {
        otherValue = possibleValue;
      }
    });
    if (otherValue !== undefined) {
      opt = {};
      opt[option.property] = value;
      dateTimeFormat = new Intl.DateTimeFormat([defaultLocale + "-u-" + option.key + "-" + otherValue], opt);
      result = dateTimeFormat.resolvedOptions()[option.property];
    }
  });
});