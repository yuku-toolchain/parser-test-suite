let count;
const obj = {
  a: true
};
for (count = 0; obj?.a; count++) {
  if (count > 0) break;
}
let count2 = 0;
const obj2 = undefined;
for (obj?.a; obj2?.a; obj?.a) {
  count2++;
}
for (obj?.a; undefined?.a; obj?.a) {
  count2++;
}
let touched = 0;
const obj3 = {
  get a() {
    count++;
    return undefined;
  }
};
for (count = 0; true; obj3?.a?.[touched++]) {
  if (count > 0) {
    break;
  }
}