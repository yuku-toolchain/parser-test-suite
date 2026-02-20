var fromBase64 = Uint8Array.fromBase64;
var noReceiver = fromBase64("Zg==");
class Subclass extends Uint8Array {
  constructor() {}
}
var fromSubclass = Subclass.fromBase64("Zg==");