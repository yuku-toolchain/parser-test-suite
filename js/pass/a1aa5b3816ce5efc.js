var other = $262.createRealm().global;
var C = new other.Function();
C.prototype = null;
var o = Reflect.construct(Intl.DisplayNames, [undefined, {
  type: 'language'
}], C);