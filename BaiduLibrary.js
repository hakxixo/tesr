/*

[rewrite_local]

^https:\/\/appwk\.baidu\.com\/(naapi\/(recommend\/recommenddoc|wkcircle\/messagetab|search\/wkhotwords|api\/wmadopt)|appapi\/(search\/hot|donate\/detail)|xpage\/interface\/wknaad) url reject
^https:\/\/appwk\.baidu\.com\/naapi\/(user\/getinfo|doc\/getdocdownloadcopywriter) url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/BaiduLibrary.js

[mitm] 

hostname = appwk.baidu.com

*/

var url = $request.url;
var modified = JSON.parse($response.body);
const URL1 = '/user/getinfo';
const URL2 = '/doc/getdocdownloadcopywriter';
if (url.indexOf(URL1) != -1) {
modified.data.vip.base_vip_info = {"end_time":4070880000,"uid":510004015,"is_vip":1,"pro_total":0,"start_time":1672502400,"type":2,"remain_day":365,"normal_total":0};
};
if (url.indexOf(URL2) != -1) {
modified.data.copywriter2 = "";
modified.data.downloadStatus = 21;
};
$done({body:JSON.stringify(modified)});
