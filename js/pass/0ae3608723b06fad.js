var __body = "";
__body += '<body onXXX="alert(event.type);">\n';
__body += '<p>Kibology for all<\/p>\n';
__body += '<p>All for Kibology<\/p>\n';
__body += '<\/body>';
var __html = "";
__html += '<html>\n';
__html += __body;
__html += '\n<\/html>';
var __executed = (/<body.*>((.*\n?)*?)<\/body>/i).exec(__html);
var __expected = [__body, '\n<p>Kibology for all</p>\n<p>All for Kibology</p>\n', '<p>All for Kibology</p>\n'];
__expected.index = 7;
__expected.input = __html;
for (var index = 0; index < __expected.length; index++) {}