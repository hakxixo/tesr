/*******************************
脚本名称:  法硕考研小程序
脚本作者：hakxixo
#小程序://法硕考研/43CL6bQOUkJy5wj
*******************************
[rewrite_local]
^http[s]?:\/\/testbank.okaoyan.com\/api\/users\/login url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/fashuo.js
[mitm] 
hostname = testbank.okaoyan.com
*******************************/
var body=$response.body;
body = body.replace(/isVip\":\w+/g,'isVip":true');
$done(body);
