function verifyFormatParts(actual, expected, message) {
  for (let i = 0; i < actual.length; ++i) {}
}
const units = {
  "second": ["sec."],
  "minute": ["min."],
  "hour": ["hr."],
  "day": ["day", "days"],
  "week": ["wk."],
  "month": ["mo."],
  "quarter": ["qtr.", "qtrs."],
  "year": ["yr."]
};
const rtf = new Intl.RelativeTimeFormat("en-US", {
  "style": "short"
});
for (const [unitArgument, unitStrings] of Object.entries(units)) {
  const [singular, plural = singular] = unitStrings;
  verifyFormatParts(rtf.formatToParts(1000, unitArgument), [{
    "type": "literal",
    "value": "in "
  }, {
    "type": "integer",
    "value": "1",
    "unit": unitArgument
  }, {
    "type": "group",
    "value": ",",
    "unit": unitArgument
  }, {
    "type": "integer",
    "value": "000",
    "unit": unitArgument
  }, {
    "type": "literal",
    "value": ` ${plural}`
  }], `formatToParts(1000, ${unitArgument})`);
  verifyFormatParts(rtf.formatToParts(10, unitArgument), [{
    "type": "literal",
    "value": "in "
  }, {
    "type": "integer",
    "value": "10",
    "unit": unitArgument
  }, {
    "type": "literal",
    "value": ` ${plural}`
  }], `formatToParts(10, ${unitArgument})`);
  verifyFormatParts(rtf.formatToParts(2, unitArgument), [{
    "type": "literal",
    "value": "in "
  }, {
    "type": "integer",
    "value": "2",
    "unit": unitArgument
  }, {
    "type": "literal",
    "value": ` ${plural}`
  }], `formatToParts(2, ${unitArgument})`);
  verifyFormatParts(rtf.formatToParts(1, unitArgument), [{
    "type": "literal",
    "value": "in "
  }, {
    "type": "integer",
    "value": "1",
    "unit": unitArgument
  }, {
    "type": "literal",
    "value": ` ${singular}`
  }], `formatToParts(1, ${unitArgument})`);
  verifyFormatParts(rtf.formatToParts(0, unitArgument), [{
    "type": "literal",
    "value": "in "
  }, {
    "type": "integer",
    "value": "0",
    "unit": unitArgument
  }, {
    "type": "literal",
    "value": ` ${plural}`
  }], `formatToParts(0, ${unitArgument})`);
  verifyFormatParts(rtf.formatToParts(-0, unitArgument), [{
    "type": "integer",
    "value": "0",
    "unit": unitArgument
  }, {
    "type": "literal",
    "value": ` ${plural} ago`
  }], `formatToParts(-0, ${unitArgument})`);
  verifyFormatParts(rtf.formatToParts(-1, unitArgument), [{
    "type": "integer",
    "value": "1",
    "unit": unitArgument
  }, {
    "type": "literal",
    "value": ` ${singular} ago`
  }], `formatToParts(-1, ${unitArgument})`);
  verifyFormatParts(rtf.formatToParts(-2, unitArgument), [{
    "type": "integer",
    "value": "2",
    "unit": unitArgument
  }, {
    "type": "literal",
    "value": ` ${plural} ago`
  }], `formatToParts(-2, ${unitArgument})`);
  verifyFormatParts(rtf.formatToParts(-10, unitArgument), [{
    "type": "integer",
    "value": "10",
    "unit": unitArgument
  }, {
    "type": "literal",
    "value": ` ${plural} ago`
  }], `formatToParts(-10, ${unitArgument})`);
  verifyFormatParts(rtf.formatToParts(-1000, unitArgument), [{
    "type": "integer",
    "value": "1",
    "unit": unitArgument
  }, {
    "type": "group",
    "value": ",",
    "unit": unitArgument
  }, {
    "type": "integer",
    "value": "000",
    "unit": unitArgument
  }, {
    "type": "literal",
    "value": ` ${plural} ago`
  }], `formatToParts(-1000, ${unitArgument})`);
  verifyFormatParts(rtf.formatToParts(123456.78, unitArgument), [{
    "type": "literal",
    "value": "in "
  }, {
    "type": "integer",
    "value": "123",
    "unit": unitArgument
  }, {
    "type": "group",
    "value": ",",
    "unit": unitArgument
  }, {
    "type": "integer",
    "value": "456",
    "unit": unitArgument
  }, {
    "type": "decimal",
    "value": ".",
    "unit": unitArgument
  }, {
    "type": "fraction",
    "value": "78",
    "unit": unitArgument
  }, {
    "type": "literal",
    "value": ` ${plural}`
  }], `formatToParts(123456.78, ${unitArgument})`);
}