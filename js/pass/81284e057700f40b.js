const types = ['language', 'region', 'script', 'currency'];
types.forEach(type => {
  const obj = new Intl.DisplayNames('en', {
    type
  });
});