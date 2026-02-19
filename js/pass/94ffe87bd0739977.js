const args = [2000, 5];
const dateExplicit = new Temporal.PlainYearMonth(...args, undefined);
const dateImplicit = new Temporal.PlainYearMonth(...args);