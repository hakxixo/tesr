/*******************************
脚本名称:  PYTHON手册破解

*******************************
[rewrite_local]
^http[s]?:\/\/book.haoapp8.cn\/API\/programming\/v5\/booklist.php url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/sc.js
[mitm] 
hostname = book.haoapp8.cn

*******************************/

var modifiedHeaders = $request.headers;
modifiedHeaders[''] = 'vip":"0';
modifiedHeaders['Host'] = '  ';
modifiedHeaders['Host'] = ' ';
modifiedHeaders['Host'] = ' ';
$done({headers : modifiedHeaders});
