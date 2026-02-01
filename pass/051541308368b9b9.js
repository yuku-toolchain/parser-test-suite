var custom = new Function();
custom.prototype = {};
const obj = Reflect.construct(Intl.Segmenter, [], custom);