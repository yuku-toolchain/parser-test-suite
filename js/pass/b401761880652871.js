function* g() {
  return 1;
}
let o = {
  [g()]: 1
};