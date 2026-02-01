var initCount = 0;
function counter() {
  initCount += 1;
}
const {s: t = counter(), u: v = counter(), w: x = counter(), y: z = counter()} = {
  s: null,
  u: 0,
  w: false,
  y: ''
};