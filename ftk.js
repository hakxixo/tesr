/*******************************
脚本名称:  法题库
脚本作者：hakxixo
更新时间：2023年8月26日 上午11:23
*******************************
[rewrite_local]

^http[s]?:\/\/newapi.kaoyanhui.com.cn\/index.php\/* url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/ftk.js

[mitm] 

hostname = newapi.kaoyanhui.com.cn

*******************************/

var body = $response.body.replace(/permission":\d/g,'permission":1')
.replace(/is_vip":\s*\d/g,'is_vip":1')
.replace(/is_vip":\d/g,'is_vip":1')
$done({ body });
