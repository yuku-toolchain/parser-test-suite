const str = "oi+hello";
const other = $262.createRealm().global;
const res = other.RegExp.escape.call(RegExp, str);