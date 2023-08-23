/*******************************
脚本名称:  bilibili破解

*******************************
[rewrite_local]
^http[s]?:\/\/app.bilibili.com\/x\/v2\/account\/(myinfo|mine) url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/bilibili.js 

[mitm]
hostname = *.biliapi.*, *.bilibili.*
*******************************/
var body = $response.body;
body = body.replace(/coins\":\d+/g, 'coins":999999');
body = body.replace(/name\":\w+/g, 'name":🐔🐔');
body = body.replace(/level\":\d+/g, 'level":999');
body = body.replace(/type\":\d/g, 'type":1');
body = body.replace(/status\":\d/g, 'status":1');
body = body.replace(/due_date\":\d+/g, 'due_date":9999');
body = body.replace(/vip_pay_type\":\d/g, 'vip_pay_type":1');
body = body.replace(/tv_vip_status\":\d/g, 'tv_vip_status":1');
body = body.replace(/tv_vip_pay_type\":\d/g, 'tv_vip_pay_type":1');
body = body.replace(/tv_due_date\":\d+/g, 'tv_due_date":9999');
body = body.replace(/role\":\d/g, 'role":1');
body = body.replace(/bcoin\":\d+/g, 'bcoin":999999');
body = body.replace(/vip_type\":\d/g, 'vip_type":1');
body = body.replace(/follower\":\d+/g, 'follower":999999');
$done(body);
