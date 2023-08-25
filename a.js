/*******************************
脚本名称:  
脚本作者：halxixo
更新时间：2023年8月25日 上午11:28

*******************************
[rewrite_local]
^http[s]?:\/\/wx.appds.cn\/api\/* url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/a.js 
[mitm] 
hostname = *.appds.cn

*******************************/


var body=$response.body;
body = body.replace(/adRead\":\w+/g,'adRead":false');
$done(body);
