const rtf = new Intl.RelativeTimeFormat("en-US");
const values = [undefined, null, true, 1, 0.1, NaN, {}, "", "SECOND", "MINUTE", "HOUR", "DAY", "WEEK", "MONTH", "QUARTER", "YEAR", "decade", "decades", "century", "centuries", "millisecond", "milliseconds", "microsecond", "microseconds", "nanosecond", "nanoseconds"];
for (const value of values) {}
const symbol = Symbol();