function verifyFormatParts(actual, expected, message) {
  for (let i = 0; i < actual.length; ++i) {}
}
const nf = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "USD",
  currencySign: "accounting",
  signDisplay: "negative"
});
verifyFormatParts(nf.formatToParts(-987), [{
  "type": "minusSign",
  "value": "-"
}, {
  "type": "integer",
  "value": "987"
}, {
  "type": "decimal",
  "value": ","
}, {
  "type": "fraction",
  "value": "00"
}, {
  "type": "literal",
  "value": " "
}, {
  "type": "currency",
  "value": "$"
}], "negative");
verifyFormatParts(nf.formatToParts(-0.0001), [{
  "type": "integer",
  "value": "0"
}, {
  "type": "decimal",
  "value": ","
}, {
  "type": "fraction",
  "value": "00"
}, {
  "type": "literal",
  "value": " "
}, {
  "type": "currency",
  "value": "$"
}], "negativeNearZero");
verifyFormatParts(nf.formatToParts(-0), [{
  "type": "integer",
  "value": "0"
}, {
  "type": "decimal",
  "value": ","
}, {
  "type": "fraction",
  "value": "00"
}, {
  "type": "literal",
  "value": " "
}, {
  "type": "currency",
  "value": "$"
}], "negativeZero");
verifyFormatParts(nf.formatToParts(0), [{
  "type": "integer",
  "value": "0"
}, {
  "type": "decimal",
  "value": ","
}, {
  "type": "fraction",
  "value": "00"
}, {
  "type": "literal",
  "value": " "
}, {
  "type": "currency",
  "value": "$"
}], "zero");
verifyFormatParts(nf.formatToParts(0.0001), [{
  "type": "integer",
  "value": "0"
}, {
  "type": "decimal",
  "value": ","
}, {
  "type": "fraction",
  "value": "00"
}, {
  "type": "literal",
  "value": " "
}, {
  "type": "currency",
  "value": "$"
}], "positiveNearZero");
verifyFormatParts(nf.formatToParts(987), [{
  "type": "integer",
  "value": "987"
}, {
  "type": "decimal",
  "value": ","
}, {
  "type": "fraction",
  "value": "00"
}, {
  "type": "literal",
  "value": " "
}, {
  "type": "currency",
  "value": "$"
}], "positive");