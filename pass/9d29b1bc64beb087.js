var match;
match = (/[\d-a]+/).exec(':a0123456789-:');
match = (/[\d-az]+/).exec(':a0123456789z-:');
match = (/[%-\d]+/).exec('&%0123456789-&');
match = (/[%-\dz]+/).exec('&%0123456789z-&');
match = (/[\s-\d]+/).exec('& \t0123456789-&');
match = (/[\s-\dz]+/).exec('& \t0123456789z-&');