var result;
result = (/./)[Symbol.split]('abc', -23);
result = (/./)[Symbol.split]('abc', 1.9);
result = (/./)[Symbol.split]('abc', NaN);