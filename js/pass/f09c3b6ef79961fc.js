var VALUE_GOPD = "VALUE_GOPD";
var VALUE_GET = "VALUE_GET";
var dontEnumSymbol = Symbol("dont_enum_symbol");
var enumerableSymbol = Symbol("enumerable_symbol");
var dontEnumKeys = [dontEnumSymbol, "dontEnumString", "0"];
var enumerableKeys = [enumerableSymbol, "enumerableString", "1"];
var ownKeysResult = [...dontEnumKeys, ...enumerableKeys];
var getOwnKeys = [];
var getKeys = [];
var proxy = new Proxy({}, {
  getOwnPropertyDescriptor: function (_target, key) {
    getOwnKeys.push(key);
    var isEnumerable = enumerableKeys.indexOf(key) !== -1;
    return {
      value: VALUE_GOPD,
      writable: false,
      enumerable: isEnumerable,
      configurable: true
    };
  },
  get: function (_target, key) {
    getKeys.push(key);
    return VALUE_GET;
  },
  ownKeys: function () {
    return ownKeysResult;
  }
});
var {...rest} = proxy;