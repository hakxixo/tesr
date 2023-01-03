###小程序:活动抽奖
###每次二十金币
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://api-hdcjgo.9w9.com//receiveTask`;
const method = `POST`;
const headers = {
'content-type' : `application/json`,
'sign' : `ea3598fcdf5cf2ba5016d2d825175787`,
'Connection' : `keep-alive`,
'uid' : `9HB7V3L`,
'app-version' : `6.10.35`,
'appid' : `0`,
'req-id' : `6297eebf3eed39ba4faa7d34764fa197`,
'Accept-Encoding' : `gzip,compress,br,deflate`,
'scene' : `1089`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.28(0x18001c2e) NetType/WIFI Language/zh_CN`,
'token' : `1fl6ukyopk0cpfo8ohr5nujoex3ijqlp`,
'Host' : `api-hdcjgo.9w9.com`,
'Referer' : `https://servicewechat.com/wx4692f08fa6ad3bc2/1019/page-frame.html`,
'Accept' : `application/json`
};
const body = `{"id":"59VH1BJ"}`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
