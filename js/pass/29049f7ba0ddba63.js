const instance = new Temporal.PlainDateTime(2000, 5, 2);
const timeZone = 'uTc';
const result = instance.toZonedDateTime(timeZone);