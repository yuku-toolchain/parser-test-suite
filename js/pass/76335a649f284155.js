const r = new ShadowRealm();
const wrapped = r.evaluate('x => y => x * y');
const nestedWrapped = wrapped(2);
const otherNestedWrapped = wrapped(4);