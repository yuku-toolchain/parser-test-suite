function fakeObject() {}
fakeObject.entries = Object.entries;
global.Object = fakeObject;