const r = new ShadowRealm();
const s = r.evaluate('Symbol("foobar")');
const shadowX = r.evaluate('Symbol.for("my symbol name")');
const myX = Symbol.for('my symbol name');
const {get: description} = Object.getOwnPropertyDescriptor(Symbol.prototype, 'description');