var other = $262.createRealm().global;
var OtherTypeError = other.TypeError;
var OtherSyntaxError = other.SyntaxError;
var OtherShadowRealm = other.ShadowRealm;
var realm = Reflect.construct(OtherShadowRealm, []);
const bogus = {};