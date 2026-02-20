const r = new ShadowRealm();
r.importValue('./import-value_syntax_error_FIXTURE.js', 'y').then(() => {}, err => {}).then($DONE, $DONE);