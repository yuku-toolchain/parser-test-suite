const dateTimeArgs = [2020, 12, 24, 12, 34, 56, 123, 456, 789];
const dateTimeExplicit = new Temporal.PlainDateTime(...dateTimeArgs, undefined);
const dateTimeImplicit = new Temporal.PlainDateTime(...dateTimeArgs);