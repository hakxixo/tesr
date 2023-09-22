/*******************************
脚本名称:  粉笔专业课小程序
脚本作者：hakxixo
#小程序://专业课/0CxzZ0t32nvAC8j
*******************************
[rewrite_local]
^http[s]?:\/\/english-mini.fenbi.com\/* url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/fenbi.js
[mitm] 
hostname = english-mini.fenbi.com
*******************************/
var body = $response.body.replace(/"is_unlock":\s*\w+/g,"\"is_unlock\": 1");
$done(body);
