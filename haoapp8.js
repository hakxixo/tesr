/*******************************
脚本名称:  PYTHON手册破解
更新时间：2023年8月21日 下午3:30

*******************************
[rewrite_local]
^http[s]?:\/\/book.haoapp8.cn\/API\/programming\/v5\/booklist.php url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/haoapp8.js
[mitm] 
hostname = book.haoapp8.cn

*******************************/

var modifiedHeaders = $request.headers;
modifiedHeaders[''] = 'vip":"0';
modifiedHeaders['Host'] = '  ';
modifiedHeaders['Host'] = ' ';
modifiedHeaders['Host'] = ' ';
$done({headers : modifiedHeaders});
