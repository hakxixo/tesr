
/*******************************
脚本名称:  
脚本作者：hakxixo
更新时间：2023年8月26日 下午6:35
*******************************
[rewrite_local]

^http[s]?:\/\/www.fakaotiji.top\/api\/wy\/public\/* url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/kao.js

[mitm] 

hostname = www.fakaotiji.top

*******************************/

var body = $response.body.replace(/is_can":\d/g,'is_can":1')
$done({ body });
