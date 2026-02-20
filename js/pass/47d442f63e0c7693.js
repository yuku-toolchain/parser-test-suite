var other = $262.createRealm().global;
var OtherTypeError = other.TypeError;
var OtherShadowRealm = other.ShadowRealm;
var yetAnother = $262.createRealm().global;
var YetAnotherTypeError = yetAnother.TypeError;
var YetAnotherShadowRealm = yetAnother.ShadowRealm;
var realm = Reflect.construct(OtherShadowRealm, []);
{
  let wrappedFunction = realm.evaluate('() => {}');
  let wrappedFunction2 = realm.evaluate('() => globalThis');
}
{
  let wrappedFunction = YetAnotherShadowRealm.prototype.evaluate.call(realm, '() => {}');
  let wrappedFunction2 = YetAnotherShadowRealm.prototype.evaluate.call(realm, '() => globalThis');
}