const f = async () => await import('./instn-iee-err-circular-1_FIXTURE.js');
f().catch(error => {}).then($DONE, $DONE);