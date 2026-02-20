var instance;
var method, methodParam;
var getter;
var setter, setterParam;
var genMethod, genMethodParam;
var asyncMethod, asyncMethodParam;
class C {
  static {
    instance = new (class {
      method({test262 = methodParam = arguments}) {
        method = arguments;
      }
      get accessor() {
        getter = arguments;
      }
      set accessor({test262 = setterParam = arguments}) {
        setter = arguments;
      }
      *gen({test262 = genMethodParam = arguments}) {
        genMethod = arguments;
      }
      async async({test262 = asyncMethodParam = arguments}) {
        asyncMethod = arguments;
      }
    })();
  }
}
instance.method('method');
instance.accessor;
instance.accessor = 'setter';
instance.gen('generator method').next();
instance.async('async method');