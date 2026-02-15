const instance = new Temporal.Instant(1_000_000_000_000_000_000n);
const resultHours = instance.subtract("-PT24.567890123H");
const resultMinutes = instance.subtract("-PT1440.567890123M");