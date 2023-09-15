/*******************************
脚本名称:法硕带背微信小程序
脚本作者：hakxixo
#小程序://法硕带背/74xotxsK8pIk8bF
*******************************
[rewrite_local]
^http[s]?:\/\/daibei.zhishikaoyan.com\/daibei\/res\/v1\/index\/info url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/daibei.js
[mitm] 
hostname = daibei.zhishikaoyan.com
*******************************/
var body=$response.body;
body = body.replace(/isBuy\":\w+/g,'isBuy":true');
$done(body);

