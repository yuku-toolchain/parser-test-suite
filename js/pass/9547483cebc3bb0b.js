var validValues = ["CNY", "USD", "EUR", "IDR", "jpy", {
  toString: function () {
    return "INR";
  }
}];
var invalidValues = ["$", "SFr.", "US$", "ßP", {
  toString: function () {
    return;
  }
}];
var defaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
validValues.forEach(function (value) {
  var format, actual, expected;
  format = new Intl.NumberFormat([defaultLocale], {
    style: "currency",
    currency: value
  });
  actual = format.resolvedOptions().currency;
  expected = value.toString().toUpperCase();
  format = new Intl.NumberFormat([defaultLocale], {
    currency: value
  });
  actual = format.resolvedOptions().currency;
  expected = undefined;
  format = new Intl.NumberFormat([defaultLocale + "-u-cu-krw"], {
    style: "currency",
    currency: value
  });
  actual = format.resolvedOptions().currency;
  expected = value.toString().toUpperCase();
  format = new Intl.NumberFormat([defaultLocale + "-u-cu-krw"], {
    currency: value
  });
  actual = format.resolvedOptions().currency;
  expected = undefined;
});
invalidValues.forEach(function (value) {});