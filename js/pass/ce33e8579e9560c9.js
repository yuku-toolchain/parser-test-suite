function verifyFormatParts(actual, expected, message) {
  for (let i = 0; i < actual.length; ++i) {}
}
function always(s) {
  return {
    "many": s,
    "few": s,
    "one": s,
    "other": s
  };
}
const units = {
  "second": always("sek."),
  "minute": always("min"),
  "hour": always("godz."),
  "day": {
    "many": "dni",
    "few": "dni",
    "one": "dzień",
    "other": "dnia"
  },
  "week": {
    "many": "tyg.",
    "few": "tyg.",
    "one": "tydz.",
    "other": "tyg."
  },
  "month": always("mies."),
  "quarter": always("kw."),
  "year": {
    "many": "lat",
    "few": "lata",
    "one": "rok",
    "other": "roku"
  }
};
const rtf = new Intl.RelativeTimeFormat("pl-PL", {
  "style": "short"
});
for (const [unitArgument, expected] of Object.entries(units)) {
  verifyFormatParts(rtf.formatToParts(1000, unitArgument), [{
    "type": "literal",
    "value": "za "
  }, {
    "type": "integer",
    "value": "1000",
    "unit": unitArgument
  }, {
    "type": "literal",
    "value": ` ${expected.many}`
  }], `formatToParts(1000, ${unitArgument})`);
  verifyFormatParts(rtf.formatToParts(10, unitArgument), [{
    "type": "literal",
    "value": "za "
  }, {
    "type": "integer",
    "value": "10",
    "unit": unitArgument
  }, {
    "type": "literal",
    "value": ` ${expected.many}`
  }], `formatToParts(10, ${unitArgument})`);
  verifyFormatParts(rtf.formatToParts(2, unitArgument), [{
    "type": "literal",
    "value": "za "
  }, {
    "type": "integer",
    "value": "2",
    "unit": unitArgument
  }, {
    "type": "literal",
    "value": ` ${expected.few}`
  }], `formatToParts(2, ${unitArgument})`);
  verifyFormatParts(rtf.formatToParts(1, unitArgument), [{
    "type": "literal",
    "value": "za "
  }, {
    "type": "integer",
    "value": "1",
    "unit": unitArgument
  }, {
    "type": "literal",
    "value": ` ${expected.one}`
  }], `formatToParts(1, ${unitArgument})`);
  verifyFormatParts(rtf.formatToParts(0, unitArgument), [{
    "type": "literal",
    "value": "za "
  }, {
    "type": "integer",
    "value": "0",
    "unit": unitArgument
  }, {
    "type": "literal",
    "value": ` ${expected.many}`
  }], `formatToParts(0, ${unitArgument})`);
  verifyFormatParts(rtf.formatToParts(-0, unitArgument), [{
    "type": "integer",
    "value": "0",
    "unit": unitArgument
  }, {
    "type": "literal",
    "value": ` ${expected.many} temu`
  }], `formatToParts(-0, ${unitArgument})`);
  verifyFormatParts(rtf.formatToParts(-1, unitArgument), [{
    "type": "integer",
    "value": "1",
    "unit": unitArgument
  }, {
    "type": "literal",
    "value": ` ${expected.one} temu`
  }], `formatToParts(-1, ${unitArgument})`);
  verifyFormatParts(rtf.formatToParts(-2, unitArgument), [{
    "type": "integer",
    "value": "2",
    "unit": unitArgument
  }, {
    "type": "literal",
    "value": ` ${expected.few} temu`
  }], `formatToParts(-2, ${unitArgument})`);
  verifyFormatParts(rtf.formatToParts(-10, unitArgument), [{
    "type": "integer",
    "value": "10",
    "unit": unitArgument
  }, {
    "type": "literal",
    "value": ` ${expected.many} temu`
  }], `formatToParts(-10, ${unitArgument})`);
  verifyFormatParts(rtf.formatToParts(-1000, unitArgument), [{
    "type": "integer",
    "value": "1000",
    "unit": unitArgument
  }, {
    "type": "literal",
    "value": ` ${expected.many} temu`
  }], `formatToParts(-1000, ${unitArgument})`);
  verifyFormatParts(rtf.formatToParts(123456.78, unitArgument), [{
    "type": "literal",
    "value": "za "
  }, {
    "type": "integer",
    "value": "123",
    "unit": unitArgument
  }, {
    "type": "group",
    "value": "\u00a0",
    "unit": unitArgument
  }, {
    "type": "integer",
    "value": "456",
    "unit": unitArgument
  }, {
    "type": "decimal",
    "value": ",",
    "unit": unitArgument
  }, {
    "type": "fraction",
    "value": "78",
    "unit": unitArgument
  }, {
    "type": "literal",
    "value": ` ${expected.other}`
  }], `formatToParts(123456.78, ${unitArgument})`);
}