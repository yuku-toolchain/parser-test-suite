const duration = new Temporal.Duration(1, 2, 3, 4, 5, 6, 7, 987, 650, 0);
const explicit = duration.toString(undefined);
const implicit = duration.toString();