const r = new ShadowRealm();
let count = 0;
const exportName = {
  toString() {
    count += 1;
  }
};