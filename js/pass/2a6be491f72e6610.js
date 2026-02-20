var result = false;
function callbackfn(val, idx, obj) {
  result = this === JSON;
}
[11].forEach(callbackfn, JSON);