/*******************************
脚本名称:  苍盾政治小程序破解(政治)
脚本作者：hakxixo
#小程序://苍盾政治/FvSgXhusHvOhveg
*******************************
[rewrite_local]
^http[s]?:\/\/zztk.cdky100.vip\/(apiyz\/user\/quanxian|apitk\/home) url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/cdky100.js
[mitm] 
hostname = zztk.cdky100.vip
*******************************/
var body=$response.body;
body = body.replace(/jihuo_type\":\s*([^,'jihuo_type":"1"').replace(/ti1600\":\s*\d/g,'ti1600":1').replace(/hexing\": \s*([^,'hexing":"1"');
$done(body);
