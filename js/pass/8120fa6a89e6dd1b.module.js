export default class {
  valueOf() {
    return 45;
  }
};
import('./eval-export-dflt-expr-cls-anon.js').then(imported => {}).then($DONE, $DONE).catch($DONE);