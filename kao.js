/*******************************
脚本名称:  考研小程序
脚本作者：hakxixo
更新时间：2023年8月21日 下午5:00
#小程序://考研调剂/wVQHIryWBstf4lH
#小程序://英语刷刷刷/WQVUXaATQxUjNIc
#小程序://政治刷刷刷/dIhwDucJYGorXOA
#小程序://法硕择校通/yRJsLhe5yN5k6us
#小程序://考研政治1000题/vi83UNf6lP1ZRCd
*******************************
[rewrite_local]
^http[s]?:\/\/tiaoji.hanxiaocong.cn\/api\/member url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/kao.js
^http[s]?:\/\/yysss23.piggyzzz.com\/mainApi\/* url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/kao.js
^http[s]?:\/\/zzsss23new.piggyzzz.com\/mainApi\/* url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/kao.js
^http[s]?:\/\/tools.orangevip.com\/yxapplet\/major-index url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/kao.js
^http[s]?:\/\/politics1000.kaochong.com\/politics1000\/* url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/kao.js

[mitm] 
hostname = tiaoji.hanxiaocong.cn,*.piggyzzz.com,tools.orangevip.com,politics1000.kaochong.com
*******************************/
var body=$response.body;
body = body.replace(/is_vip\":\d+/g,'is_vip":1').replace(/haveauth":\d/g, 'haveauth":1').replace(/oncheck":\d/g, 'oncheck":0').replace(/free_assess_no\":\d+/g,'free_assess_no":999999').replace(/upValue\":\d+/g,'upValue":999999').replace(/errorCode\":\d+/g,'errorCode":0');
$done(body);
