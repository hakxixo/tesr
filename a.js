/*******************************
脚本名称: 屌丝博客小程序破解
脚本作者：halxixo

*******************************
[rewrite_local]
^http[s]?:\/\/wx.appds.cn\/api\/* url script-response-body a.js
[mitm] 
hostname = *.appds.cn

*******************************/

var body=$response.body;
body = body.replace(/adRead\":\w+/g,'adRead":false').replace(/status\":\w+/g,'status":true');
$done(body);
