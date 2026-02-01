const units = ["second", "minute", "hour", "day", "week", "month", "quarter", "year"];
const rtf = new Intl.RelativeTimeFormat("en-US", {
  "numeric": "auto"
});
const exceptions = {
  "year": {
    "-1": "last year",
    "0": "this year",
    "1": "next year"
  },
  "quarter": {
    "-1": "last quarter",
    "0": "this quarter",
    "1": "next quarter"
  },
  "month": {
    "-1": "last month",
    "0": "this month",
    "1": "next month"
  },
  "week": {
    "-1": "last week",
    "0": "this week",
    "1": "next week"
  },
  "day": {
    "-1": "yesterday",
    "0": "today",
    "1": "tomorrow"
  },
  "hour": {
    "-1": "1 hour ago",
    '0': 'this hour',
    "1": "in 1 hour"
  },
  "minute": {
    "-1": "1 minute ago",
    '0': 'this minute',
    "1": "in 1 minute"
  },
  "second": {
    "-1": "1 second ago",
    "0": "now",
    "1": "in 1 second"
  }
};
for (const unit of units) {
  const expected = (unit in exceptions) ? [exceptions[unit]["1"], exceptions[unit]["0"], exceptions[unit]["0"], exceptions[unit]["-1"]] : [`in 1 ${unit}`, `in 0 ${unit}s`, `0 ${unit}s ago`, `1 ${unit} ago`];
}