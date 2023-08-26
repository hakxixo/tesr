
/*******************************
脚本名称:专业题库破解
脚本作者：hakxixo
#小程序://专业题库/bp6uVbUMIqKEKnA
*******************************
[rewrite_local]

^http[s]?:\/\/www.fakaotiji.top\/api\/wy\/public\/* url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/ka.js

[mitm] 

hostname = www.fakaotiji.top

*******************************/
var body = $response.body.replace(/is_can":\d/g,'is_can":1')
$done({body});
