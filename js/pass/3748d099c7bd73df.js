function verifyFormatParts(actual, expected, message) {
  for (let i = 0; i < actual.length; ++i) {}
}
const signDisplay = "negative";
const nf = new Intl.NumberFormat("ja-JP", {
  signDisplay: "negative"
});
verifyFormatParts(nf.formatToParts(-Infinity), [{
  "type": "minusSign",
  "value": "-"
}, {
  "type": "infinity",
  "value": "∞"
}], `-Infinity (${signDisplay})`);
verifyFormatParts(nf.formatToParts(-987), [{
  "type": "minusSign",
  "value": "-"
}, {
  "type": "integer",
  "value": "987"
}], `-987 (${signDisplay})`);
verifyFormatParts(nf.formatToParts(-0.0001), [{
  "type": "integer",
  "value": "0"
}], `-0.0001 (${signDisplay})`);
verifyFormatParts(nf.formatToParts(-0), [{
  "type": "integer",
  "value": "0"
}], `-0 (${signDisplay})`);
verifyFormatParts(nf.formatToParts(0), [{
  "type": "integer",
  "value": "0"
}], `0 (${signDisplay})`);
verifyFormatParts(nf.formatToParts(0.0001), [{
  "type": "integer",
  "value": "0"
}], `0.0001 (${signDisplay})`);
verifyFormatParts(nf.formatToParts(987), [{
  "type": "integer",
  "value": "987"
}], `987 (${signDisplay})`);
verifyFormatParts(nf.formatToParts(Infinity), [{
  "type": "infinity",
  "value": "∞"
}], `Infinity (${signDisplay})`);
verifyFormatParts(nf.formatToParts(NaN), [{
  "type": "nan",
  "value": "NaN"
}], `NaN (${signDisplay})`);