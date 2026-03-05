var x = {
  x: true
};
export default ('x' in x);
import('./eval-export-dflt-expr-in.js').then(imported => {}).then($DONE, $DONE).catch($DONE);