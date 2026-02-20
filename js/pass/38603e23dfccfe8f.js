const datetime = new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789);
const badOptions = [null, 1, 'hello', true, Symbol('foo'), 1n];
badOptions.forEach(bad => {});