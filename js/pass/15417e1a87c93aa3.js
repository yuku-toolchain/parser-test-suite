let stringRegExp = /^(Sun|Mon|Tue|Wed|Thu|Fri|Sat) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) [0-9]{2} [0-9]{4} [0-9]{2}:[0-9]{2}:[0-9]{2} GMT[+-][0-9]{4}( \(.+\))?$/;
let match = stringRegExp.exec(new Date(0).toString());
match = stringRegExp.exec(new Date('0020-01-01T00:00:00Z').toString());