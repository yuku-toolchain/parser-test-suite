let dateRegExp = /^(Sun|Mon|Tue|Wed|Thu|Fri|Sat) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) [0-9]{2} [0-9]{4}$/;
let match = dateRegExp.exec(new Date(0).toDateString());
match = dateRegExp.exec(new Date('0020-01-01T00:00:00Z').toDateString());