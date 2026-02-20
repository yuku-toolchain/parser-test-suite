const args = [2020, 12, 24];
const dateExplicit = new Temporal.PlainDate(...args, undefined);
const dateImplicit = new Temporal.PlainDate(...args);