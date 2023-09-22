/*******************************
脚本名称:  Zhina
脚本作者：hakxixo
#小程序://知马考研/JRV1nuuJpf6rmUm
*******************************
[rewrite_local]
^http[s]?:\/\/msky.tykyedu.com\/zhima_api\/(Answer\/getDefualtBookInfo|answer\/getCatalogue) url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/zhima.js
[mitm] 
hostname = msky.tykyedu.com
*******************************/
var body=$response.body;
body = body.replace(/use_status\":\s*([^,'use_status":"unlock"').replace(/is_unlock\":\s*\d/g,'is_unlock":1');
$done(body);
