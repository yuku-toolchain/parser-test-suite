for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const fixedLength = new ctor(rab, 0, 4);
  const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
  const lengthTracking = new ctor(rab, 0);
  const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
  const taFull = new ctor(rab, 0);
  function WriteUnsortedData() {
    for (let i = 0; i < taFull.length; ++i) {
      taFull[i] = MayNeedBigInt(taFull, 10 - i);
    }
  }
  function OddBeforeEvenComparison(a, b) {
    a = Number(a);
    b = Number(b);
    if (a % 2 == 1 && b % 2 == 0) {
      return -1;
    }
    if (a % 2 == 0 && b % 2 == 1) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }
  WriteUnsortedData();
  Array.prototype.sort.call(fixedLength, OddBeforeEvenComparison);
  WriteUnsortedData();
  Array.prototype.sort.call(fixedLengthWithOffset, OddBeforeEvenComparison);
  WriteUnsortedData();
  Array.prototype.sort.call(lengthTracking, OddBeforeEvenComparison);
  WriteUnsortedData();
  Array.prototype.sort.call(lengthTrackingWithOffset, OddBeforeEvenComparison);
  rab.resize(3 * ctor.BYTES_PER_ELEMENT);
  WriteUnsortedData();
  Array.prototype.sort.call(fixedLength, OddBeforeEvenComparison);
  Array.prototype.sort.call(fixedLengthWithOffset, OddBeforeEvenComparison);
  WriteUnsortedData();
  Array.prototype.sort.call(lengthTracking, OddBeforeEvenComparison);
  WriteUnsortedData();
  Array.prototype.sort.call(lengthTrackingWithOffset, OddBeforeEvenComparison);
  rab.resize(1 * ctor.BYTES_PER_ELEMENT);
  WriteUnsortedData();
  Array.prototype.sort.call(fixedLength, OddBeforeEvenComparison);
  Array.prototype.sort.call(fixedLengthWithOffset, OddBeforeEvenComparison);
  Array.prototype.sort.call(lengthTrackingWithOffset, OddBeforeEvenComparison);
  WriteUnsortedData();
  Array.prototype.sort.call(lengthTracking, OddBeforeEvenComparison);
  rab.resize(0);
  Array.prototype.sort.call(fixedLength, OddBeforeEvenComparison);
  Array.prototype.sort.call(fixedLengthWithOffset, OddBeforeEvenComparison);
  Array.prototype.sort.call(lengthTrackingWithOffset, OddBeforeEvenComparison);
  Array.prototype.sort.call(lengthTracking, OddBeforeEvenComparison);
  rab.resize(6 * ctor.BYTES_PER_ELEMENT);
  WriteUnsortedData();
  Array.prototype.sort.call(fixedLength, OddBeforeEvenComparison);
  WriteUnsortedData();
  Array.prototype.sort.call(fixedLengthWithOffset, OddBeforeEvenComparison);
  WriteUnsortedData();
  Array.prototype.sort.call(lengthTracking, OddBeforeEvenComparison);
  WriteUnsortedData();
  Array.prototype.sort.call(lengthTrackingWithOffset, OddBeforeEvenComparison);
}