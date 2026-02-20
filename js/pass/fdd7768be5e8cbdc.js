var __CUBE = "cube";
function __FACTORY() {}
__FACTORY.prototype = {
  shape: __CUBE,
  printShape: function () {
    return this.shape;
  }
};
var __device = new __FACTORY();
if (__device.printShape === undefined) {}
if (__device.printShape() !== __CUBE) {}