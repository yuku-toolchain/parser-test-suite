let throwOnGrossBufferConstruction = false;
class GrossBuffer extends ArrayBuffer {
  constructor() {
    super(...arguments);
    if (throwOnGrossBufferConstruction) {}
  }
  static get [Symbol.species]() {}
}
let grossBuf = new GrossBuffer(1024);
throwOnGrossBufferConstruction = true;
let grossTA = new Uint8Array(grossBuf);
let mysteryTA = new Int8Array(grossTA);