/*******************************
脚本名称:  猴哥刷题破解
脚本作者：hakxixo
#小程序://猴哥刷题/ulpwimBhdfgsrhJ
*******************************
[rewrite_local]
^http[s]?:\/\/liulianxz.com\/api\/* url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/hgst.js
[mitm] 
hostname = liulianxz.com
*******************************/
var body=$response.body;
body = body.replace(/owned\":\w+/g,'owned":true').replace(/is_trial\":\w+/g,'is_trial":true');
$done(body);
