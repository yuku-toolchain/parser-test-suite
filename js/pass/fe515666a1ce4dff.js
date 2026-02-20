const instance = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC");
const props = {};
props.minute = 30;
const result = instance.withPlainTime(props);