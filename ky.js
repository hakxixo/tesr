/*******************************
脚本名称:  “考研调剂”微信小程序
脚本作者：hakxixo
更新时间：2023年8月21日 下午5:00

*******************************
[rewrite_local]
^http[s]?:\/\/tiaoji.hanxiaocong.cn\/api\/member url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/ky.js
^http[s]?:\/\/yysss23.piggyzzz.com\/mainApi\/* url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/ky.js
[mitm] 
hostname = tiaoji.hanxiaocong.cn,yysss23.piggyzzz.com

*******************************/
var body=$response.body;
body = body.replace(/is_vip\":\d+/g,'is_vip":1').replace(/haveauth":\d/g, 'haveauth":1').replace(/oncheck":\d/g, 'oncheck":0');
$done(body);
