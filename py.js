/*
[rewrite_local]

#python
;vip
^http:\/\/book\.haoapp8\.cn url script-response-body py.js

[MITM]
#域名
hostname = book.haoapp8.cn

*/
var pyt = $response.pyt; //声明一个变量body并以响应消息体赋值
pyt=pyt.replacebody=pyt.replace(/vip\":\d/g,'vip":0');
