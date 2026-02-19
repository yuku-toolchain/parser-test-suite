const relativeTo = new Temporal.PlainDate(2000, 1, 1);
const zero = new Temporal.Duration();
const instance = new Temporal.Duration(0, 0, 1, Math.trunc(2 ** 53 / 86_400));
const negInstance = new Temporal.Duration(0, 0, -1, -Math.trunc(2 ** 53 / 86_400));