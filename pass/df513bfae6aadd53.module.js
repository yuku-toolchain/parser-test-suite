const r = new ShadowRealm();
r.importValue('./import-value_FIXTURE.js', 'x').then(x => {}).then($DONE, $DONE);