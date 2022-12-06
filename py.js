/*
[rewrite_local]
#本地重写

#重写路径
^ http:\/\/book\.haoapp8\.cn url script-response-body https://raw.githubusercontent.com/hakxixo/tesr/main/py.js
[MITM]
#域名
hostname = book.haoapp8.cn

*/
var body = $response.body; //声明一个变量body并以响应消息体赋
let obj = JSON.parse($response.body);
obj= {
  "rules" : [
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "vip\":\"0",
      "matchValue" : "vip\":\"\\d+",
      "destiontion" : "response",
      "isRegex" : true
    },
    {
      "action" : "modify-header",
      "matchField" : "Host",
      "field" : "",
      "value" : "  ",
      "matchValue" : "googleads.g.doubleclick.net",
      "destiontion" : "request",
      "isRegex" : false
    },
    {
      "action" : "modify-header",
      "matchField" : "Host",
      "field" : "",
      "value" : " ",
      "matchValue" : "app-measurement.com",
      "destiontion" : "request",
      "isRegex" : false
    },
    {
      "action" : "modify-header",
      "matchField" : "Host",
      "field" : "",
      "value" : " ",
      "matchValue" : "googleads4.g.doubleclick.net",
      "destiontion" : "request",
      "isRegex" : false
    }
  ],
  "enabled" : false,
  "name" : "PYTHON手册破解",
  "description" : "使用:  先开网球再开app  \n功能：去除广告和vip限制\n下载：https:\/\/apps.apple.com\/cn\/app\/python%E7%BC%96%E7%A8%8B%E7%A5%9E%E5%99%A8-%E7%A8%8B%E5%BA%8F%E5%91%98%E5%BF%85%E5%A4%87%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C\/id1212829695?l=en\n",
  "locations" : [
    {
      "method" : "POST",
      "scheme" : "http",
      "enabled" : true,
      "port" : 0,
      "query" : "",
      "host" : "book.haoapp8.cn",
      "path" : "\/API\/programming\/v5\/booklist.php"
    },
    {
      "method" : "POST",
      "scheme" : "http",
      "enabled" : true,
      "port" : 80,
      "query" : "",
      "host" : "book.haoapp8.cn",
      "path" : "\/API\/programming\/v5\/homeCat.php"
    },
    {
      "method" : "GET",
      "scheme" : "",
      "enabled" : true,
      "port" : 0,
      "query" : "",
      "host" : "googleads.g.doubleclick.net",
      "path" : ""
    },
    {
      "method" : "GET",
      "scheme" : "",
      "enabled" : true,
      "port" : 0,
      "query" : "",
      "host" : "app-measurement.com",
      "path" : ""
    }
  ]
}
$done({body: JSON.stringify(obj)});
