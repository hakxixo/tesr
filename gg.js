/*******************************
脚本名称:  屌丝博客微信小程序破解
脚本作者：hakxixo

*******************************
[rewrite_local]
^http[s]?:\/\/wx.appds.cn\/api\/posts url script-response-body gg.js
[mitm] 
hostname = wx.appds.cn

*******************************/

var body=$response.body;
body = body.replace(/adRead\":\w+/g,'adRead":false');
body = body.replace(/adSwitch\":\w+/g,'adSwitch":false');
$done(body);
