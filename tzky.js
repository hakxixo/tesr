/*******************************
脚本名称:  团子考研题库小程序破解
脚本作者：hakxixo
#小程序://考研题库/bKv01vfuohFHhXo
*******************************
[rewrite_local]
^http[s]?:\/\/dev.miniapp.okaoyan.com\/api\/v1\/users\/info url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/tzky.js
[mitm] 
hostname = dev.miniapp.okaoyan.com

*******************************/
var body=$response.body;
body = body.replace(/is_vip\":\w+/g,'is_vip":true');
$done(body);
