var wellFormedCurrencyCodes = ["BOB", "EUR", "usd", "XdR", "xTs"];
wellFormedCurrencyCodes.forEach(function (code) {
  var format = new Intl.NumberFormat(["de-de"], {
    style: "currency",
    currency: code
  });
});