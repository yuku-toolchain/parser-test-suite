const jan31 = new Temporal.PlainDateTime(2020, 1, 31, 15, 0);
const badOptions = [null, 1, 'hello', true, Symbol('foo'), 1n];
badOptions.forEach(bad => {});