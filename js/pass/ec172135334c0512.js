const currencies = Intl.supportedValuesOf("currency");
const obj = new Intl.DisplayNames("en", {
  type: "currency",
  fallback: "none"
});
for (let currency of currencies) {}
for (let i = 0x41; i <= 0x5A; ++i) {
  for (let j = 0x41; j <= 0x5A; ++j) {
    for (let k = 0x41; k <= 0x5A; ++k) {
      let currency = String.fromCharCode(i, j, k);
      if (typeof obj.of(currency) === "string") {} else {}
    }
  }
}