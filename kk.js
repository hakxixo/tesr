/*******************************
不挂科APP破解
*******************************

[rewrite_local]
^https:\/\/mbd\.baidu\.com\/userx\/v1\/info\/ url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/kk.js
[mitm]
hostname = mbd.baidu.com

*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/userx/v1/info';

if (url.indexOf(vip) != -1) {
    obj.data.vip = true;
    body = JSON.stringify(obj);
}
$done({body});
