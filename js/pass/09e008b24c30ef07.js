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
    "value": "公里/小時"
  }],
  "narrow": [{
    "type": "minusSign",
    "value": "-"
  }, {
    "type": "integer",
    "value": "987"
  }, {
    "type": "unit",
    "value": "公里/小時"
  }],
  "long": [{
    "type": "unit",
    "value": "每小時"
  }, {
    "type": "literal",
    "value": " "
  }, {
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
    "value": "公里"
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
    "value": "公里/小時"
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
    "value": "公里/小時"
  }],
  "long": [{
    "type": "unit",
    "value": "每小時"
  }, {
    "type": "literal",
    "value": " "
  }, {
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
    "value": "公里"
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
    "value": "公里/小時"
  }],
  "narrow": [{
    "type": "minusSign",
    "value": "-"
  }, {
    "type": "integer",
    "value": "0"
  }, {
    "type": "unit",
    "value": "公里/小時"
  }],
  "long": [{
    "type": "unit",
    "value": "每小時"
  }, {
    "type": "literal",
    "value": " "
  }, {
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
    "value": "公里"
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
    "value": "公里/小時"
  }],
  "narrow": [{
    "type": "integer",
    "value": "0"
  }, {
    "type": "unit",
    "value": "公里/小時"
  }],
  "long": [{
    "type": "unit",
    "value": "每小時"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "integer",
    "value": "0"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "unit",
    "value": "公里"
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
    "value": "公里/小時"
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
    "value": "公里/小時"
  }],
  "long": [{
    "type": "unit",
    "value": "每小時"
  }, {
    "type": "literal",
    "value": " "
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
    "value": "公里"
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
    "value": "公里/小時"
  }],
  "narrow": [{
    "type": "integer",
    "value": "987"
  }, {
    "type": "unit",
    "value": "公里/小時"
  }],
  "long": [{
    "type": "unit",
    "value": "每小時"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "integer",
    "value": "987"
  }, {
    "type": "literal",
    "value": " "
  }, {
    "type": "unit",
    "value": "公里"
  }]
}]];
for (const [number, expectedData] of tests) {
  for (const [unitDisplay, expected] of Object.entries(expectedData)) {
    const nf = new Intl.NumberFormat("zh-TW", {
      style: "unit",
      unit: "kilometer-per-hour",
      unitDisplay
    });
    verifyFormatParts(nf.formatToParts(number), expected);
  }
}