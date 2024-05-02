# 1.Dtpc讲解

dtpc主要是根据`cookie`中的 `dtCookie`的值进行分解,并根据一定规则重新生成一串字符`dtPC`

- 在`dtpc.js`文件中的 `ec`对象中主要用的是`app`字段 
```
 ....... 省略JS代码
/**
 * 这里的配置是从网站爬去重来
 * 配置可能是通过解密后的结果
 * 或者是直接网站返回
 * 主要用到app字段
 */
var ec = {
    "reportUrl": "/rb_bf45148ltg",
    "initializedModules": "7NVVfgqrux",
    "csu": "ruxitagentjs",
    "dataDtConfig": "#CONFIGSTRING#|auto=#AUTO#|domain=#DOMAIN#|rid=RID_#REQUEST_ID#|rpid=#RESPONSE_ID#|app=#APP#",
    "legacy": "1",
    "featureHash": "ICA7NVfgqrux",
    "agentLocation": "https://www.freecharge.in",
    "buildNumber": "10287240325103108",
    "rid": "RID_-1267691233",
    "rpid": "1120914298",
    "domain": "freecharge.in",
    "app": "ea7c4b59f27d43eb",
    "cuc": "5mn2r1ab",
    "mel": "100000",
    "dpvc": "1",
    "ssv": "4",
    "lastModification": "1712646803822",
    "tp": "500,50,0",
    "rdnt": "1",
    "uxrgce": "1",
    "bp": "3",
    "agentUri": "/ruxitagentjs_ICA7NVfgqrux_10287240325103108.js",
    "cooO": "true",
    "pVO": "false"
};
```
