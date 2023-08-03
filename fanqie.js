#!name=番茄小说
#!desc=番茄小说去广告

[rewrite_local]
^https?://.+.pangolin-sdk-toutiao.com/api/ad/union/sdk/(get_ads|stats|settings)/ - reject 
[rewrite_local]
^https?://.+.pglstatp-toutiao.com/.+/toutiao.mp4 - reject
[rewrite_local]
^https?://.+.(pglstatp-toutiao|pstatp).com/(obj|img)/(ad-app-package|ad)/.+ - reject
[rewrite_local]
^https?://.+.(pglstatp-toutiao|pstatp).com/(obj|img)/web.business.image/.+ - reject
[rewrite_local]
^https?://.+.(pglstatp-toutiao|pstatp).com/obj/ad-pattern/renderer - reject
[rewrite_local]
^https?://gurd.snssdk.com/src/server/v3/package - reject
[rewrite_local]
^https?://.+.byteimg.com/tos-cn-i-1yzifmftcy/(.+)-jpeg.jpeg - reject
[rewrite_local]
^https?://.+.pstatp.com/obj/mosaic-legacy/.+?from=ad - reject
[rewrite_local]
^https?://.+.pstatp.com/bytecom/resource/track-log/src/.+ - reject
[rewrite_local]
^https?://.+.snssdk.com/video/play/1/toutiao/.+/mp4 - reject
[rewrite_local]
^https?://.+.snssdk.com/api/ad/.+ - reject
[rewrite_local]
^http://.+.byteimg.com/ad-app-package - reject
[rewrite_local]
^http://.+.byteimg.com/web.business.image - reject
[rewrite_local]
^https?://.+?.snssdk.com/motor/operation/activity/display/config/V2/ - reject
  
[filter_local]
  
DOMAIN,p6-ad-sign.byteimg.com,REJECT
DOMAIN,p9-ad-sign.byteimg.com,REJECT
DOMAIN-SUFFIX,byteimg.com,DIRECT
DOMAIN,i.snssdk.com,REJECT
DOMAIN,i-lq.snssdk.com,REJECT
DOMAIN,dig.bdurl.net,REJECT
DOMAIN-KEYWORD,zijieapi,REJECT
DOMAIN,activity-ag.awemeughun.com,REJECT
DOMAIN,mcs.snssdk.com,REJECT
DOMAIN,tnc3-alisc1.snssdk.com,REJECT
DOMAIN,security-lq.snssdk.com,REJECT
DOMAIN,tnc3-aliec2.snssdk.com,REJECT
DOMAIN,is.snssdk.com,REJECT
DOMAIN,i.snssdk.com,REJECT
DOMAIN,v6-novelapp.ixigua.com,REJECT
DOMAIN,*novelapp.ixigua.com,REJECT
DOMAIN,*default.ixigua.com,REJECT
DOMAIN,msync-im1-vip6-std.easemob.com,REJECT
DOMAIN,apd-pcdnwxlogin.teg.tencent-cloud.net,REJECT
DOMAIN,api.iegadp.qq.com,REJECT
DOMAIN,sf3-ttcdn-tos.pstatp.com,REJECT
DOMAIN-SUFFIX,pglstatp-toutiao.com,REJECT
DOMAIN-SUFFIX,byteorge.com,REJECT
DOMAIN-SUFFIX,bytegoofy.com,REJECT
DOMAIN-SUFFIX,bytedance.com,REJECT
IP-CIDR,49.71.37.101/32,REJECT,no-resolve
IP-CIDR,117.71.105.23/32,REJECT,no-resolve
IP-CIDR,218.94.207.205/32,REJECT,no-resolve
IP-CIDR,117.92.229.188/32,REJECT,no-resolve
IP-CIDR,101.36.166.16/32,REJECT,no-resolve
IP-CIDR,180.96.2.114/32,REJECT,no-resolve

[MITM]
hostname = %APPEND% .pangolin-sdk-toutiao,.pangolin-sdk-toutiao.,.pstatp.com,.pstatp.com.,.pglstatp-toutiao.com.,.pglstatp-toutiao.com,gurd.snssdk.com,gurd.snssdk.com.,*default.ixigua.com
