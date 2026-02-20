const instance = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC");
const resultHours = instance.add("-PT24.567890123H");
const resultMinutes = instance.add("-PT1440.567890123M");