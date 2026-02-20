var __CUBE, __FACTORY, __device;
__CUBE = "cube";
__FACTORY = function () {};
__FACTORY.prototype = {
  shape: __CUBE,
  printShape: function () {
    return this.shape;
  }
};
__device = new __FACTORY();
if (__device.printShape === undefined) {}
if (__device.printShape() !== __CUBE) {}