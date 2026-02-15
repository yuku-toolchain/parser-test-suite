const r = new ShadowRealm();
r.importValue('./import-value_FIXTURE.js', 'y').then(() => {}, err => {}).then($DONE, $DONE);