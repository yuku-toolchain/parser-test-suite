let f = () => import('./dynamic-import-module_FIXTURE.js')['then'](x => x).then(imported => {});
f().then($DONE, $DONE).catch($DONE);