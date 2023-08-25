/*******************************
脚本名称:  法题库
脚本作者：hakxixo

*******************************
[rewrite_local]
^http[s]?:\/\/*.kaoyanhui.com.cn\/index.php\/* url script-response-body kaoyanhui.js
[mitm] 
hostname = *.kaoyanhui.com.cn

*******************************/
var body=$response.body;
body = body.replace(/permission\":\d/g,'permission":1').replace(/is_vip\":\d/g,'is_vip":1');
$done(body);
