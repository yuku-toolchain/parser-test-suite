const d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, Number.MAX_SAFE_INTEGER, 0);
const result = d.subtract({
  microseconds: Number.MIN_SAFE_INTEGER + 1
});