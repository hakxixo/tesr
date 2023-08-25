/*******************************
脚本名称:  屌丝博客、木小木微信小程序破解
脚本作者：hakxixo
*******************************
[rewrite_local]
^http[s]?:\/\/wx.appds.cn\/api\/* url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/gg.js
^http[s]?:\/\/gd.hseon.cn\/api\/* url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/gg.js
[mitm] 
hostname = *.appds.cn
hostname = *.hseon.cn
*******************************/
var body=$response.body;
body = body.replace(/adRead\":\w+/g,'adRead":false');
$done(body);
