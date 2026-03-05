import viaStaticImport1 from './json-idempotency_FIXTURE.json' with { type: 'json' };
import {default as viaStaticImport2} from './json-idempotency_FIXTURE.json' with { type: 'json' };
import './json-idempotency-indirect_FIXTURE.js';
import('./json-idempotency_FIXTURE.json').then(function (viaDynamicImport) {}).then($DONE, $DONE);