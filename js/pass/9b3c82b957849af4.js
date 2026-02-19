let optionKeys = ["localeMatcher", "type", "notation", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "roundingIncrement", "roundingMode", "roundingPriority", "trailingZeroDisplay"];
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
new Intl.PluralRules(undefined, options);