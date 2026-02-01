var arrayBuffer = new ArrayBuffer(8);
function callSlice() {
  arrayBuffer.slice();
}
arrayBuffer.constructor = null;
arrayBuffer.constructor = true;
arrayBuffer.constructor = "";
arrayBuffer.constructor = Symbol();
arrayBuffer.constructor = 1;