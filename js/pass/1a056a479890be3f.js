const instance = new Temporal.PlainDateTime(2000, 5, 2);
const result1 = instance.toZonedDateTime("UTC", {});
const result2 = instance.toZonedDateTime("UTC", () => {});