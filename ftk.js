/*******************************
脚本名称:  法题库
脚本作者：hakxixo
*******************************
[rewrite_local]
^http[s]?:\/\/*.kaoyanhui.com.cn\/index.php\/api\/chapter\/* url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/ftk.js
[mitm] 
hostname = newapi.kaoyanhui.com.cn
*******************************/
var modifiedHeaders = $request.headers;
modifiedHeaders[''] = 'permission ":"1';
$done({headers : modifiedHeaders});
