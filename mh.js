/*******************************
脚本名称:  mh
脚本作者：halxixo
更新时间：2023年8月23日 下午6:30

*******************************
[rewrite_local]
^http[s]?:\/\/mangaapi.manhuaren.com\/v1\/manga url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/mh.js
[mitm] 
hostname = mangaapi.manhuaren.com

*******************************/
var body=$response.body;
body = body.replace(/isMustPay\":\d/g,'isMustPay":0');
$done(body);
