/*******************************
脚本名称:  考研小程序
脚本作者：hakxixo
更新时间：2023年8月21日 下午5:00
#小程序://英语刷刷刷/WQVUXaATQxUjNIc
#小程序://考研调剂/wVQHIryWBstf4lH
*******************************
[rewrite_local]
^http[s]?:\/\/tiaoji.hanxiaocong.cn\/api\/member url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/kao.js
^http[s]?:\/\/yysss23.piggyzzz.com\/mainApi\/* url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/kao.js
^http[s]?:\/\/zzsss23new.piggyzzz.com\/mainApi\/* url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/kao.js

[mitm] 
hostname = tiaoji.hanxiaocong.cn,*.piggyzzz.com
*******************************/
var body=$response.body;
body = body.replace(/is_vip\":\d+/g,'is_vip":1').replace(/haveauth":\d/g, 'haveauth":1').replace(/oncheck":\d/g, 'oncheck":0');
$done(body);
