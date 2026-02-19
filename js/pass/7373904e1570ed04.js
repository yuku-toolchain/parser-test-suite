let observedOrder = [];
class MySetLike {
  get size() {
    observedOrder.push("getting size");
    return {
      valueOf: function () {
        observedOrder.push("ToNumber(size)");
        return 3;
      }
    };
  }
  get has() {
    observedOrder.push("getting has");
    return function (v) {
      observedOrder.push("calling has");
      return ["a", "b", "c"].indexOf(v) !== -1;
    };
  }
  get keys() {
    observedOrder.push("getting keys");
    return function () {};
  }
}
{
  observedOrder = [];
  const s1 = new Set(["d", "a"]);
  const s2 = new MySetLike();
  const result = s1.isSubsetOf(s2);
  const expectedOrder = ["getting size", "ToNumber(size)", "getting has", "getting keys", "calling has"];
}
{
  observedOrder = [];
  const s1 = new Set(["a", "b"]);
  const s2 = new MySetLike();
  const result = s1.isSubsetOf(s2);
  const expectedOrder = ["getting size", "ToNumber(size)", "getting has", "getting keys", "calling has", "calling has"];
}
{
  observedOrder = [];
  const s1 = new Set(["a", "b", "c"]);
  const s2 = new MySetLike();
  const result = s1.isSubsetOf(s2);
  const expectedOrder = ["getting size", "ToNumber(size)", "getting has", "getting keys", "calling has", "calling has", "calling has"];
}
{
  observedOrder = [];
  const s1 = new Set(["a", "b", "c", "d"]);
  const s2 = new MySetLike();
  const result = s1.isSubsetOf(s2);
  const expectedOrder = ["getting size", "ToNumber(size)", "getting has", "getting keys"];
}