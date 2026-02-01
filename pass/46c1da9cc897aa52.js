var fromHex = Uint8Array.fromHex;
var noReceiver = fromHex("aa");
class Subclass extends Uint8Array {
  constructor() {}
}
var fromSubclass = Subclass.fromHex("aa");