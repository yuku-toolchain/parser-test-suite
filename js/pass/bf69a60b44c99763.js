for (var indexI = 0; indexI <= 65535; indexI++) {
  if (indexI !== 0x25) {
    try {
      var str = String.fromCharCode(indexI);
      var differs = decodeURI(str) !== str;
    } catch (e) {}
    if (differs) {}
  }
}