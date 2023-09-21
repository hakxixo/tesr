/*******************************
脚本名称:  君诚法硕小程序
脚本作者：hakxixo
#小程序://法硕/sUv8j6wDbNRHwAI
*******************************
[rewrite_local]
^http[s]?:\/\/appodmy6nxf4545.h5.xiaoeknow.com\/evaluation_wechat\/practice\/base_info url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/juncheng.js
[mitm] 
hostname = *.h5.xiaoeknow.com
*******************************/
var body=$response.body;
body = body.replace(/available\":\w+/g,'available":true');
$done(body);
