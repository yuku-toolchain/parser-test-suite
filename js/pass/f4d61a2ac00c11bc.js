const feb20 = new Temporal.PlainDateTime(2020, 2, 1, 0, 0);
const feb21 = new Temporal.PlainDateTime(2021, 2, 1, 0, 0);
const badOptions = [null, 1, 'obviously invalid', true, Symbol('foo'), 1n];
badOptions.forEach(bad => {});