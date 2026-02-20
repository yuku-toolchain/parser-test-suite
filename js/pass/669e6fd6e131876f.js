function fakeObject() {}
fakeObject.values = Object.values;
global.Object = fakeObject;