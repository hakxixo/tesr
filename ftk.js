/*******************************
脚本名称:  法题库
脚本作者：hakxixo
*******************************
[rewrite_local]
^http[s]?:\/\/*.kaoyanhui.com.cn\/index.php\/api\/chapter\/* url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/ftk.js
[mitm] 
hostname = newapi.kaoyanhui.com.cn
*******************************/

var body=$response.body;
body = body.replace(/permission\":\d/g,'permission":1');
$done(body);
