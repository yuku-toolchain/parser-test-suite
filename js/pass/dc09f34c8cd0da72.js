const r = new ShadowRealm();
const blueFn = (x, y) => x + y;
const redWrappedFn = r.evaluate(`
    function fn(wrapped1, wrapped2, wrapped3) {
        if (wrapped1.x) {
            return 1;
        }
        if (wrapped2.x) {
            return 2;
        }
        if (wrapped3.x) {
return 3;
        }
        if (wrapped1 === wrapped2) {
return 4;
        }
if (wrapped3 === fn) {
            return 5;
        };
return true;
    }
    fn.x = 'secret';
    fn;
`);