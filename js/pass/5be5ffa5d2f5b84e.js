function fakeObject() {}
fakeObject.getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors;
fakeObject.keys = Object.keys;
global.Object = fakeObject;