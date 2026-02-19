testWithIntlConstructors(function (Constructor) {
  var info = getLocaleSupportInfo(Constructor, {
    localeMatcher: "lookup"
  });
  for (var locale of info.supported) {
    var match = (/^([a-z]{2,3})(-[A-Z][a-z]{3})?(-(?:[A-Z]{2}|[0-9]{3}))?$/).exec(locale);
    var [language, script, region] = match.slice(1);
    if (script !== undefined) {
      var fallback = language + script;
    }
    if (region !== undefined) {
      var fallback = language + region;
    }
  }
});