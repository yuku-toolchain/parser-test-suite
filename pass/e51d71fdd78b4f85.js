var str = 'Ninguém é igual a ninguém. Todo o ser humano é um estranho ímpar.';
var result;
result = str.replaceAll('ninguém', '$$');
result = str.replaceAll('é', '$$');
result = str.replaceAll('é', '$$ -');
result = str.replaceAll('é', '$$&');
result = str.replaceAll('é', '$$$');
result = str.replaceAll('é', '$$$$');