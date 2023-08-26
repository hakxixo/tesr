/*******************************
脚本名称:  考研备考之家小程序
脚本作者：hakxixo
更新时间：2023年8月26日 下午5:11
*******************************
[rewrite_local]

^http[s]?:\/\/*.next.bspapp.com\/tiaoji\/isVip url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/kyzj.js
^http[s]?:\/\/*.next.bspapp.com\/politic\/judgeReciteVip url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/kyzj.js

[mitm] 

hostname = *.next.bspapp.com

*******************************/

var body=$response.body.replace(/.+/g,'true')
$done({body});
