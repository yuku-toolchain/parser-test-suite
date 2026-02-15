function verifyFormatParts(actual, expected, message) {
  for (let i = 0; i < actual.length; ++i) {}
}
const nfStyle = new Intl.NumberFormat("en-US", {
  style: "percent"
});
verifyFormatParts(nfStyle.formatToParts(-123), [{
  "type": "minusSign",
  "value": "-"
}, {
  "type": "integer",
  "value": "12"
}, {
  "type": "group",
  "value": ","
}, {
  "type": "integer",
  "value": "300"
}, {
  "type": "percentSign",
  "value": "%"
}], "style");
const nfUnit = new Intl.NumberFormat("en-US", {
  style: "unit",
  unit: "percent"
});
verifyFormatParts(nfUnit.formatToParts(-123), [{
  "type": "minusSign",
  "value": "-"
}, {
  "type": "integer",
  "value": "123"
}, {
  "type": "unit",
  "value": "%"
}], "unit");