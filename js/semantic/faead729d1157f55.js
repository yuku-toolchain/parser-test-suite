export default class {
  static name() {
    return 'name method';
  }
}
import('./eval-export-dflt-cls-name-meth.js').then(imported => {}).then($DONE, $DONE).catch($DONE);