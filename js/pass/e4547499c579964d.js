function verifyFormatParts(actual, expected, message) {
  for (let i = 0; i < actual.length; ++i) {}
}
const units = ["second", "minute", "hour", "day", "week", "month", "quarter", "year"];
const rtf = new Intl.RelativeTimeFormat("en-US");
for (const unit of units) {
  verifyFormatParts(rtf.formatToParts(1000, unit), [{
    "type": "literal",
    "value": "in "
  }, {
    "type": "integer",
    "value": "1",
    "unit": unit
  }, {
    "type": "group",
    "value": ",",
    "unit": unit
  }, {
    "type": "integer",
    "value": "000",
    "unit": unit
  }, {
    "type": "literal",
    "value": ` ${unit}s`
  }], `formatToParts(1000, ${unit})`);
  verifyFormatParts(rtf.formatToParts(10, unit), [{
    "type": "literal",
    "value": "in "
  }, {
    "type": "integer",
    "value": "10",
    "unit": unit
  }, {
    "type": "literal",
    "value": ` ${unit}s`
  }], `formatToParts(10, ${unit})`);
  verifyFormatParts(rtf.formatToParts(2, unit), [{
    "type": "literal",
    "value": "in "
  }, {
    "type": "integer",
    "value": "2",
    "unit": unit
  }, {
    "type": "literal",
    "value": ` ${unit}s`
  }], `formatToParts(2, ${unit})`);
  verifyFormatParts(rtf.formatToParts(1, unit), [{
    "type": "literal",
    "value": "in "
  }, {
    "type": "integer",
    "value": "1",
    "unit": unit
  }, {
    "type": "literal",
    "value": ` ${unit}`
  }], `formatToParts(1, ${unit})`);
  verifyFormatParts(rtf.formatToParts(0, unit), [{
    "type": "literal",
    "value": "in "
  }, {
    "type": "integer",
    "value": "0",
    "unit": unit
  }, {
    "type": "literal",
    "value": ` ${unit}s`
  }], `formatToParts(0, ${unit})`);
  verifyFormatParts(rtf.formatToParts(-0, unit), [{
    "type": "integer",
    "value": "0",
    "unit": unit
  }, {
    "type": "literal",
    "value": ` ${unit}s ago`
  }], `formatToParts(-0, ${unit})`);
  verifyFormatParts(rtf.formatToParts(-1, unit), [{
    "type": "integer",
    "value": "1",
    "unit": unit
  }, {
    "type": "literal",
    "value": ` ${unit} ago`
  }], `formatToParts(-1, ${unit})`);
  verifyFormatParts(rtf.formatToParts(-2, unit), [{
    "type": "integer",
    "value": "2",
    "unit": unit
  }, {
    "type": "literal",
    "value": ` ${unit}s ago`
  }], `formatToParts(-2, ${unit})`);
  verifyFormatParts(rtf.formatToParts(-10, unit), [{
    "type": "integer",
    "value": "10",
    "unit": unit
  }, {
    "type": "literal",
    "value": ` ${unit}s ago`
  }], `formatToParts(-10, ${unit})`);
  verifyFormatParts(rtf.formatToParts(-1000, unit), [{
    "type": "integer",
    "value": "1",
    "unit": unit
  }, {
    "type": "group",
    "value": ",",
    "unit": unit
  }, {
    "type": "integer",
    "value": "000",
    "unit": unit
  }, {
    "type": "literal",
    "value": ` ${unit}s ago`
  }], `formatToParts(-1000, ${unit})`);
  verifyFormatParts(rtf.formatToParts(123456.78, unit), [{
    "type": "literal",
    "value": "in "
  }, {
    "type": "integer",
    "value": "123",
    "unit": unit
  }, {
    "type": "group",
    "value": ",",
    "unit": unit
  }, {
    "type": "integer",
    "value": "456",
    "unit": unit
  }, {
    "type": "decimal",
    "value": ".",
    "unit": unit
  }, {
    "type": "fraction",
    "value": "78",
    "unit": unit
  }, {
    "type": "literal",
    "value": ` ${unit}s`
  }], `formatToParts(123456.78, ${unit})`);
}