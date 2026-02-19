var types = ['language', 'region', 'script', 'currency'];
types.forEach(type => {
  var dn = new Intl.DisplayNames('en-US', {
    type
  });
  var options = dn.resolvedOptions();
});