/*************************************
项目名称：刷刷题
**************************************

[rewrite_local]
^https?:\/\/api\.shuashuati\.com url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/sst.js

[mitm]
hostname = api.shuashuati.com

*************************************/


var body = $response.body;
body = body.replace(/\"state":\d+/g, '\"state":2')
    .replace(/\"vipToTime":\w+/g, '\"vipToTime":"2099-09-09 09:09:09"')
    .replace(/\"vipToTimeStr":\w+/g, '\"vipToTimeStr":"2099-09-09 09:09:09"')
    .replace(/\"first":\d+/g, '\"first":1')
    .replace(/\"userDou":\d+/g, '\"userDou":1')
    .replace(/\"balance":\w+/g, '\"balance":1')
    .replace(/\"adType":"(.*?)"/g, '\"adType":null')
    .replace(/\"pay":\d+/g, '\"pay":0')
    .replace(/\"pay":\w+/g, '\"pay":false')
    .replace(/\"free":\d+/g, '\"free":1')
    .replace(/\"word_vip":\d+/g, '\"word_vip":1')
    .replace(/\"from":\d+/g, '\"from":0');
$done({ body });
