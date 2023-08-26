/*******************************
脚本名称:  
脚本作者：hakxixo
更新时间：2023年8月26日 上午8:54

*******************************
[rewrite_local]
^http[s]?:\/\/haituncloud.xyz\/user\/* url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/xyz.js
[mitm] 
hostname = haituncloud.xyz

*******************************/

var body=$response.body;
body = body.replace(/need\":.*/g,'need":"0"');
$done(body);
