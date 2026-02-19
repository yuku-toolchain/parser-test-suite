const currencies = Intl.supportedValuesOf("currency");
for (let currency of currencies) {
  let obj = new Intl.NumberFormat("en", {
    style: "currency",
    currency
  });
}