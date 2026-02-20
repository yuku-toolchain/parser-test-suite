const args = [5, 2];
const dateExplicit = new Temporal.PlainMonthDay(...args, undefined);
const dateImplicit = new Temporal.PlainMonthDay(...args);