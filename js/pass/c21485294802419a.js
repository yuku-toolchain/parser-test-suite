const d = new Temporal.Duration(0, 0, 0, 0, 0, 0, 0, 0, Number.MAX_SAFE_INTEGER, 0);
const result = d.add({
  microseconds: Number.MAX_SAFE_INTEGER - 1
});