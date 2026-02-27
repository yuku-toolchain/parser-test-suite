import mod from './module-import-unwrapped_FIXTURE.js';
import {x, y} from './module-import-unwrapped_FIXTURE.js';
var err;
try {
  await x;
} catch (e) {
  err = e;
}