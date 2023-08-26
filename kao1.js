/*******************************
脚本名称: 考研备考之家小程序破解
脚本作者：hakxixo
#小程序://考研备考之家/DBXW6hAcUBMUVuG
*******************************
[rewrite_local]
^http[s]?:\/\/*.next.bspapp.com\/politic\/judgeReciteVip url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/kao1.js
^http[s]?:\/\/*.next.bspapp.com\/tiaoji\/isVip url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/kao1.js
[mitm] 
hostname = *.next.bspapp.com

*******************************/
var body=$response.body;
body = body.replace(/.+/g,'true');
$done(body);
