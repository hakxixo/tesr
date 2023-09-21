/*******************************
脚本名称:  马克思带背
脚本作者：hakxixo
#小程序://马克思带背/0mW2zuOzAJ4dASi
*******************************
[rewrite_local]
^http[s]?:\/\/daibei.zhishikaoyan.com\/daibei\/res\/v1\/(index\/info|chapter/getList) url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/mks.js
[mitm] 
hostname = daibei.zhishikaoyan.com
*******************************/
var body=$response.body;
body = body.replace(/isBuy\":\w+/g,'isBuy":true');
$done(body);

