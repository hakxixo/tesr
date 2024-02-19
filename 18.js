/*******************************
脚本名称:  破解18+免费看(美国队长)
脚本作者：hakxixo
网址：https://mdwy5.com/
*******************************
[rewrite_local]
^http[s]?:\/\/mdapi.zhbt01.com* url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/18.js
[mitm] 
hostname = mdapi.zhbt01.com
*******************************/
var body=$response.body;
body = body.replace(/look_end\":\s*\d+/g,'look_end":999');
$done(body);