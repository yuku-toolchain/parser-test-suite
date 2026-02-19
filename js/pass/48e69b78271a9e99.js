function verifyFormatParts(actual, expected, message) {
  for (let i = 0; i < actual.length; ++i) {}
}
const tests = [[-987, {
  "short": [{
    "type": "minusSign",
    "value": "-"
  }, {
    "type": "integer",
    "value": "987"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "unit",
    "value": "km/h"
  }],
  "narrow": [{
    "type": "minusSign",
    "value": "-"
  }, {
    "type": "integer",
    "value": "987"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "unit",
    "value": "km/h"
  }],
  "long": [{
    "type": "minusSign",
    "value": "-"
  }, {
    "type": "integer",
    "value": "987"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "unit",
    "value": "Kilometer pro Stunde"
  }]
}], [-0.001, {
  "short": [{
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
    "value": "001"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "unit",
    "value": "km/h"
  }],
  "narrow": [{
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
    "value": "001"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "unit",
    "value": "km/h"
  }],
  "long": [{
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
    "value": "001"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "unit",
    "value": "Kilometer pro Stunde"
  }]
}], [-0, {
  "short": [{
    "type": "minusSign",
    "value": "-"
  }, {
    "type": "integer",
    "value": "0"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "unit",
    "value": "km/h"
  }],
  "narrow": [{
    "type": "minusSign",
    "value": "-"
  }, {
    "type": "integer",
    "value": "0"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "unit",
    "value": "km/h"
  }],
  "long": [{
    "type": "minusSign",
    "value": "-"
  }, {
    "type": "integer",
    "value": "0"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "unit",
    "value": "Kilometer pro Stunde"
  }]
}], [0, {
  "short": [{
    "type": "integer",
    "value": "0"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "unit",
    "value": "km/h"
  }],
  "narrow": [{
    "type": "integer",
    "value": "0"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "unit",
    "value": "km/h"
  }],
  "long": [{
    "type": "integer",
    "value": "0"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "unit",
    "value": "Kilometer pro Stunde"
  }]
}], [0.001, {
  "short": [{
    "type": "integer",
    "value": "0"
  }, {
    "type": "decimal",
    "value": ","
  }, {
    "type": "fraction",
    "value": "001"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "unit",
    "value": "km/h"
  }],
  "narrow": [{
    "type": "integer",
    "value": "0"
  }, {
    "type": "decimal",
    "value": ","
  }, {
    "type": "fraction",
    "value": "001"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "unit",
    "value": "km/h"
  }],
  "long": [{
    "type": "integer",
    "value": "0"
  }, {
    "type": "decimal",
    "value": ","
  }, {
    "type": "fraction",
    "value": "001"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "unit",
    "value": "Kilometer pro Stunde"
  }]
}], [987, {
  "short": [{
    "type": "integer",
    "value": "987"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "unit",
    "value": "km/h"
  }],
  "narrow": [{
    "type": "integer",
    "value": "987"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "unit",
    "value": "km/h"
  }],
  "long": [{
    "type": "integer",
    "value": "987"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "unit",
    "value": "Kilometer pro Stunde"
  }]
}]];
for (const [number, expectedData] of tests) {
  for (const [unitDisplay, expected] of Object.entries(expectedData)) {
    const nf = new Intl.NumberFormat("de-DE", {
      style: "unit",
      unit: "kilometer-per-hour",
      unitDisplay
    });
    verifyFormatParts(nf.formatToParts(number), expected);
  }
}