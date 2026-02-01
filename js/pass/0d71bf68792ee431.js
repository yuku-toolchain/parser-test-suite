var match;
match = (/\C/).exec('ABCDE');
match = (/O\PQ/).exec('MNOPQRS');
match = (/\8/).exec('789');
match = (/7\89/).exec('67890');
match = (/\9/).exec('890');
match = (/8\90/).exec('78900');
match = (/(.)(.)(.)(.)(.)(.)(.)(.)\8\8/).exec('0123456777');
match = (/(.)(.)(.)(.)(.)(.)(.)(.)(.)\9\9/).exec('01234567888');