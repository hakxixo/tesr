/*******************************
脚本名称:  文加择校
脚本作者：hakxixo
*******************************
[rewrite_local]
^http[s]?:\/\/zx.wenjiaedu.com\/api\/appUserPower\/hasPower url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/wenjia.js
[mitm] 
hostname = zx.wenjiaedu.com
*******************************/
var body=$response.body;
body = body.replace(/hasPower\":\w+/g,'hasPower":true');
$done(body);
