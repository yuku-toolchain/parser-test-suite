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
    "value": "kilometers per hour"
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
    "value": "."
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
    "value": "."
  }, {
    "type": "fraction",
    "value": "001"
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
    "value": "."
  }, {
    "type": "fraction",
    "value": "001"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "unit",
    "value": "kilometers per hour"
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
    "value": "kilometers per hour"
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
    "value": "kilometers per hour"
  }]
}], [0.001, {
  "short": [{
    "type": "integer",
    "value": "0"
  }, {
    "type": "decimal",
    "value": "."
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
    "value": "."
  }, {
    "type": "fraction",
    "value": "001"
  }, {
    "type": "unit",
    "value": "km/h"
  }],
  "long": [{
    "type": "integer",
    "value": "0"
  }, {
    "type": "decimal",
    "value": "."
  }, {
    "type": "fraction",
    "value": "001"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "unit",
    "value": "kilometers per hour"
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
    "value": "kilometers per hour"
  }]
}]];
for (const [number, expectedData] of tests) {
  for (const [unitDisplay, expected] of Object.entries(expectedData)) {
    const nf = new Intl.NumberFormat("en-US", {
      style: "unit",
      unit: "kilometer-per-hour",
      unitDisplay
    });
    verifyFormatParts(nf.formatToParts(number), expected);
  }
}