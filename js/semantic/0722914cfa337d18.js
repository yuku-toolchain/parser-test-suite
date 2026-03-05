import './verify-dfs-a_FIXTURE.js';
import './verify-dfs-b_FIXTURE.js';
export function evaluated(name) {
  if (!evaluated.order) {
    evaluated.order = [];
  }
  evaluated.order.push(name);
}
export function check(promise) {
  promise.then(() => {}).then($DONE, $DONE);
}