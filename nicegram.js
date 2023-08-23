/*******************************
脚本名称:  
脚本作者：彭于晏💞

*******************************
[rewrite_local]
^http[s]?:\/\/my.nicegram.appapi\/v4\/settings\/* url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/nicegram.js
[mitm] 
hostname = my.nicegram.app

*******************************/

const obj = {
  "data": {
    "premiumAccess": true
  }
};
$done({status:200,headers:{'Content-Type':'application/json'},body:JSON.stringify(obj)});
