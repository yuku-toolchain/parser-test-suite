const args = [957270896987654321n, "UTC"];
const explicit = new Temporal.ZonedDateTime(...args, undefined);
const implicit = new Temporal.ZonedDateTime(...args);