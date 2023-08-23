/*******************************
脚本名称:  mh
脚本作者：halxixo
更新时间：2023年8月23日 下午6:30

*******************************
[rewrite_local]
^http[s]?:\/\/mangaapi.manhuaren.com\/v1\/manga\/(getSections|getRead|getChapterStatus) url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/mh.js
[mitm] 
hostname = mangaapi.manhuaren.com

*******************************/

var body=$response.body;
body = body.replace(/isMustPay\":.*/g,'isMustPay":0');
body = body.replace(/giftCoinBalance\":\d+/g,'giftCoinBalance":999999');
body = body.replace(/mangaCoin\":\d+/g,'mangaCoin":0');
body = body.replace(/remainingMangaCoin\":\d+/g,'remainingMangaCoin":999999');
body = body.replace(/remainingGiftCoin\":\d+/g,'remainingGiftCoin":999999');
body = body.replace(/isMustPay\":.*/g,'isMustPay":0');
body = body.replace(/isLackOfBalance\":\d+/g,'isLackOfBalance":0');
$done(body);
