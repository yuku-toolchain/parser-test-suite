let revokeOnGet = false;
const proxyTarget = [];
var proxyObj = Proxy.revocable(proxyTarget, {
  get: (target, key, receiver) => {
    if (revokeOnGet) revoke();
    return Reflect.get(target, key, receiver);
  }
});
var proxy = proxyObj.proxy;
var revoke = proxyObj.revoke;
proxyTarget.join = undefined;
revokeOnGet = true;
RegExp.prototype[Symbol.toStringTag] = "Foo";
Number.prototype[Symbol.toStringTag] = Object("Foo");
Object.defineProperty(JSON, Symbol.toStringTag, {
  value: "Foo"
});
Object.defineProperty(Object.prototype, Symbol.toStringTag, {
  get: () => {}
});