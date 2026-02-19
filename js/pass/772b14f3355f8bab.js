let optionKeys = ["localeMatcher", "numberingSystem", "style", "currency", "currencyDisplay", "currencySign", "unit", "unitDisplay", "notation", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "roundingIncrement", "roundingMode", "roundingPriority", "trailingZeroDisplay", "compactDisplay", "useGrouping", "signDisplay"];
let reads = new Array();
let options = {};
optionKeys.forEach(key => {
  Object.defineProperty(options, key, {
    get() {
      reads.push(key);
      return undefined;
    }
  });
});
new Intl.NumberFormat(undefined, options);