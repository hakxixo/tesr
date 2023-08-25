/*
[rewrite_local]

^http[s]?:\/\/newapi.kaoyanhui.com.cn\/index.php\/* url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/py.js 

[MITM]

hostname = newapi.kaoyanhui.com.cn

*/
var body = $response.body; 
let obj = JSON.parse($response.body);
obj={
  "rules" : [
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "permission\":1",
      "matchValue" : "permission\":\\d+",
      "destiontion" : "response",
      "isRegex" : true
    }
  ],
  "enabled" : true,
  "name" : "法题库",
  "description" : "",
  "locations" : [
    {
      "method" : "",
      "scheme" : "",
      "enabled" : true,
      "port" : 0,
      "query" : "",
      "host" : "newapi.kaoyanhui.com.cn",
      "path" : "\/index.php\/*"
    }
  ]
}
$done({body: JSON.stringify(obj)});
