{
  let log = [];
  const o = JSON.parse('[1,[]]', function reviver(k, v, {source}) {
    log.push(`key: |${k}| value: ${JSON.stringify(v)} source: |${source}|`);
    if (v === 1) {
      this[1].push('barf');
    }
    return this[k];
  });
}
{
  let log = [];
  const o = JSON.parse('{"p":1,"q":{}}', function (k, v, {source}) {
    log.push(`key: |${k}| value: ${JSON.stringify(v)} source: |${source}|`);
    if (v === 1) {
      this.q.added = 'barf';
    }
    return this[k];
  });
}