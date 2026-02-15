class DV1 extends DataView {
  constructor() {}
}
var buffer = new ArrayBuffer(1);
class DV2 extends DataView {
  constructor(length) {
    super(length);
  }
}
new DV2(buffer);