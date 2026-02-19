function verifyFormatParts(actual, expected, message) {
  for (let i = 0; i < actual.length; ++i) {}
}
const tests = [["auto", [{
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
}], [{
  "type": "minusSign",
  "value": "-"
}, {
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
}], [{
  "type": "minusSign",
  "value": "-"
}, {
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
}], [{
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
}], [{
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
}], [{
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
}]], ["always", [{
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
}], [{
  "type": "minusSign",
  "value": "-"
}, {
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
}], [{
  "type": "minusSign",
  "value": "-"
}, {
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
}], [{
  "type": "plusSign",
  "value": "+"
}, {
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
}], [{
  "type": "plusSign",
  "value": "+"
}, {
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
}], [{
  "type": "plusSign",
  "value": "+"
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
}]], ["never", [{
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
}], [{
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
}], [{
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
}], [{
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
}], [{
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
}], [{
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
}]], ["exceptZero", [{
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
}], [{
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
}], [{
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
}], [{
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
}], [{
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
}], [{
  "type": "plusSign",
  "value": "+"
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
}]]];
for (const [signDisplay, negative, negativeNearZero, negativeZero, zero, positiveNearZero, positive] of tests) {
  const nf = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "USD",
    currencySign: "accounting",
    signDisplay
  });
  verifyFormatParts(nf.formatToParts(-987), negative, "negative");
  verifyFormatParts(nf.formatToParts(-0.0001), negativeNearZero, "negativeNearZero");
  verifyFormatParts(nf.formatToParts(-0), negativeZero, "negativeZero");
  verifyFormatParts(nf.formatToParts(0), zero, "zero");
  verifyFormatParts(nf.formatToParts(0.0001), positiveNearZero, "positiveNearZero");
  verifyFormatParts(nf.formatToParts(987), positive, "positive");
}