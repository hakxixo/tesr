/*******************************
脚本名称:  考研备考之家小程序
脚本作者：hakxixo
*******************************
[rewrite_local]

^http[s]?:\/\/*.next.bspapp.com\/tiaoji\/isVip url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/kyzj.js
^http[s]?:\/\/*.next.bspapp.com\/politic\/judgeReciteVip url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/kyzj.js
^http[s]?:\/\/*.next.bspapp.com\/tiaoji\/isTiaoVip url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/kyzj.js

[mitm]

hostname = *.next.bspapp.com

*******************************/

var body=$response.body.replace(/.+/g,'true')
$done({body});
