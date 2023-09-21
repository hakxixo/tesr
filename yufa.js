/*******************************
脚本名称:  英语语法基础小程序
脚本作者：hakxixo
#小程序://语法基础/eeOwKNIvKntGJyu
*******************************
[rewrite_local]
^http[s]?:\/\/www.hellotoabc.com\/WxApi\/GetUserRoleIdAndShareClickCount url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/yufa.js
[mitm] 
hostname = www.hellotoabc.com
*******************************/
var body=$response.body;
body = body.replace(/RoleID\":\s*\d/g,'RoleID":2');
$done(body);
