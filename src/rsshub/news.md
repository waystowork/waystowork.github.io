---
title: 新闻资讯
icon: iconfont icon-xinwen
order: 2
category:
  - Rsshub
tag:
  - Rsshub
---
## 21 财经
### 频道
举例：https://rsshub.guidebook.top/21caijing/channel/readnumber
路由：/21caijing/channel/:name
参数：
name，必选 — 频道名称，可在 https://m.21jingji.com/ 页面 URL 中找到
## 半月谈
举例：https://rsshub.guidebook.top/banyuetan/jicengzhili
路由：/banyuetan/:name
参数：
name，必选 — 板块名称，可在 URL 中找到
## 北极星电力网
###环保要闻
举例：https://rsshub.guidebook.top/bjx/huanbao
路由：/bjx/huanbao
参数：无
### 光伏
举例：https://rsshub.guidebook.top/bjx/gf/sc
路由：/bjx/gf/:type
参数：
type，必选 — 分类，北极星光伏最后的type字段
:type 类型可选如下
`:type` 类型可选如下

| 要闻 | 政策 | 市场行情 | 企业动态 | 独家观点 | 项目工程 | 招标采购 | 财经 | 国际行情 | 价格趋势 | 技术跟踪 |
| ---- | ---- | -------- | -------- | -------- | -------- | -------- | ---- | -------- | -------- | -------- |
| yw   | zc   | sc       | mq       | dj       | xm       | zb       | cj   | gj       | sj       | js       |

## 财新网
网站部分内容需要付费订阅，RSS 仅做更新提醒，不含付费内容。
### 首页新闻
举例：https://rsshub.guidebook.top/caixin/article
路由：/caixin/article
参数：无
### 最新文章
举例：https://rsshub.guidebook.top/caixin/latest
路由：/caixin/latest
参数：无
说明：此 RSS feed 会自动抓取财新网的最新文章，但不包含 FM 及视频内容。
### 财新数据通
举例：https://rsshub.guidebook.top/caixin/database
路由：/caixin/database
参数：无
### 财新一线
举例：https://rsshub.guidebook.top/caixin/k
路由：/caixin/k
参数：无
### 财新周刊
举例：https://rsshub.guidebook.top/caixin/weekly
路由：/caixin/weekly
参数：无
## 参考消息
举例：https://rsshub.guidebook.top/cankaoxiaoxi/column/diyi
路由：/cankaoxiaoxi/column/:id?
参数：
id，可选 — 栏目 id，默认为 diyi，即第一关注

| 栏目           | id       |
| -------------- | -------- |
| 第一关注       | diyi     |
| 中国           | zhongguo |
| 国际           | gj       |
| 观点           | guandian |
| 锐参考         | ruick    |
| 体育健康       | tiyujk   |
| 科技应用       | kejiyy   |
| 文化旅游       | wenhualy |
| 参考漫谈       | cankaomt |
| 研究动态       | yjdt     |
| 海外智库       | hwzk     |
| 业界信息・观点 | yjxx     |
| 海外看中国城市 | hwkzgcs  |
| 译名趣谈       | ymymqt   |
| 译名发布       | ymymfb   |
| 双语汇         | ymsyh    |
| 参考视频       | video    |
| 军事           | junshi   |
| 参考人物       | cankaorw |

## 第一财经
### 最新
举例：https://rsshub.guidebook.top/yicai/latest
路由：/yicai/latest
参数：无
### 头条
举例：https://rsshub.guidebook.top/yicai/headline
路由：/yicai/headline
参数：无
### VIP 频道
举例：https://rsshub.guidebook.top/yicai/vip/428
路由：/yicai/vip/:id?
参数：
id，可选 — 频道 id，可在对应频道页中找到，默认为一元点金
### 新闻
举例：https://rsshub.guidebook.top/yicai/news
路由：/yicai/news/:id?
参数：
id，可选 — 分类 id，见下表，可在对应分类页中找到，默认为新闻

| Id                     | 名称       |
| ---------------------- | ---------- |
| gushi                  | A 股       |
| kechuangban            | 科创板     |
| hongguan               | 大政       |
| jinrong                | 金融       |
| quanqiushichang        | 海外市场   |
| gongsi                 | 产经       |
| shijie                 | 全球       |
| kechuang               | 科技       |
| quyu                   | 区域       |
| comment                | 评论       |
| dafengwenhua           | 商业人文   |
| books                  | 阅读周刊   |
| loushi                 | 地产       |
| automobile             | 汽车       |
| china_financial_herald | 对话陆家嘴 |
| fashion                | 时尚       |
| ad                     | 商业资讯   |
| info                   | 资讯       |
| jzfxb                  | 价值风向标 |
| shuducaijing           | 数读财经   |
| shujujiepan            | 数据解盘   |
| shudushenghuo          | 数读生活   |
| cbndata                | CBNData    |
| dtcj                   | DT 财经    |
| xfsz                   | 消费数知   |

### 关注
举例：https://rsshub.guidebook.top/yicai/feed/669
路由：/yicai/feed/:id?
参数：
id，可选 — 主题 id，可在对应主题页中找到，默认为一财早报
:::tip

全部主题词见 [此处](https://www.yicai.com/feed/alltheme)

:::

### 视听
举例：https://rsshub.guidebook.top/yicai/video
路由：/yicai/video/:id?
参数：
id，可选 — 分类 id，见下表，可在对应分类页中找到，默认为视听

| Id                   | 名称                         |
| -------------------- | ---------------------------- |
| youliao              | 有料                         |
| appshipin            | 此刻                         |
| yicaisudi            | 速递                         |
| caishang             | 财商                         |
| shiji                | 史记                         |
| jinrigushi           | 今日股市                     |
| tangulunjin          | 谈股论金                     |
| gongsiyuhangye       | 公司与行业                   |
| cjyxx                | 财经夜行线                   |
| 6thtradingday        | 第六交易日                   |
| cjfw                 | 财经风味                     |
| chuangshidai         | 创时代                       |
| weilaiyaoqinghan     | 未来邀请函                   |
| tounaofengbao        | 头脑风暴                     |
| zhongguojingyingzhe  | 中国经营者                   |
| shichanglingjuli     | 市场零距离                   |
| huanqiucaijing       | 环球财经视界                 |
| zgjcqyjglsxftl       | 中国杰出企业家管理思想访谈录 |
| jiemacaishang        | 解码财商                     |
| sxpl                 | 首席评论                     |
| zhongguojingjiluntan | 中国经济论坛                 |
| opinionleader        | 意见领袖                     |
| xinjinrong           | 解码新金融                   |
| diyidichan           | 第一地产                     |
| zhichedaren          | 智车达人                     |
| chuangtoufengyun     | 创投风云                     |
| chunxiangrensheng    | 醇享人生                     |
| diyishengyin         | 第一声音                     |
| sanliangboqianjin    | 财智双全                     |
| weilaiyaoqinghan     | 未来邀请函                   |
| zjdy                 | 主角 ▪ 大医                  |
| leye                 | 乐业之城                     |
| sanrenxing           | 价值三人行                   |
| yuandongli           | 中国源动力                   |
| pioneerzone          | 直击引领区                   |

### 正在
举例：https://rsshub.guidebook.top/yicai/brief
路由：/yicai/brief
参数：无
### 一财号
举例：https://rsshub.guidebook.top/yicai/author/100005663
路由：/yicai/author/:id?
参数：
id，可选 — 作者 id，可在对应作者页中找到，默认为第一财经研究院

## 东方网
### 上海新闻
举例：https://rsshub.guidebook.top/eastday/sh
路由：/eastday/sh
参数：无
### 热点搜索
举例：https://rsshub.guidebook.top/eastday/find
路由：/eastday/find
参数：无
### 原创
举例：https://rsshub.guidebook.top/eastday/portrait
路由：/eastday/portrait
参数：无
### 24 小时热闻
举例：https://rsshub.guidebook.top/eastday/24
路由：/eastday/24/:category?
参数：
category，可选 — 分类，见下表，默认为社会

| 推荐 | 社会 | 娱乐 | 国际 | 军事 |
| ---- | ---- | ---- | ---- | ---- |

| 养生 | 汽车 | 体育 | 财经 | 游戏 |
| ---- | ---- | ---- | ---- | ---- |

| 科技 | 国内 | 宠物 | 情感 | 人文 | 教育 |
| ---- | ---- | ---- | ---- | ---- | ---- |

## 环球网
举例：https://rsshub.guidebook.top/huanqiu/news/china
路由：/huanqiu/news/:category?
参数：

category，可选 — 类别，可以使用二级域名作为参数，默认为：china

| 国内新闻 | 国际新闻 | 军事 | 台海   | 评论    |
| -------- | -------- | ---- | ------ | ------- |
| china    | world    | mil  | taiwai | opinion |

## 极客公园
举例：https://rsshub.guidebook.top/geekpark/breakingnews
路由：/geekpark/breakingnews
参数：无

## 界面新闻
### 快报
举例：https://rsshub.guidebook.top/jiemian
路由：/jiemian
参数：无
### 栏目
举例：https://rsshub.guidebook.top/jiemian/list/65
路由：/jiemian/list/:id?
参数：
id，可选 — 栏目，可在对应栏目页 URL 中找到，默认为 4 即快报
## 经济观察网
### 栏目
举例：https://rsshub.guidebook.top/eeo/yaowen/dashi
路由：/eeo/:column?/:category?
参数：

column，可选 — 栏目，见下表，默认为 商业产业
category，可选 — 分类，见下表，默认为该栏目下所有分类

:::tip

以下小标题即栏目 `column`，标题下表格中为对应栏目的分类 `category`，两者需要配合使用。

如订阅 **时事・政策・宏观** 栏目中的 **大宗商品** 分类，填入 [`/eeo/yaowen/dzsp`](http://rsshub.app/eeo/yaowen/dzsp)。

若栏目下没有分类，如 **商业产业** 栏目，直接填入 [`/eeo/shangyechanye`](http://rsshub.app/eeo/shangyechanye)。

或者欲订阅该栏目下的所有分类，如订阅 **时事・政策・宏观** 中的所有分类，则直接将分类 `category` 留空，即 [`/eeo/yaowen`](http://rsshub.app/eeo/yaowen)。

:::

商业产业 shangyechanye [`/eeo/shangyechanye`](http://rsshub.app/eeo/shangyechanye)

财经 caijing [`/eeo/caijing`](http://rsshub.app/eeo/caijing)

上市公司 ssgsn [`/eeo/ssgsn`](http://rsshub.app/eeo/ssgsn)

地产 dichan [`/eeo/dichan`](http://rsshub.app/eeo/dichan)

汽车 qiche [`/eeo/qiche`](http://rsshub.app/eeo/qiche)

TMT tmt [`/eeo/tmt`](http://rsshub.app/eeo/tmt)

评论 pinglun [`/eeo/pinglun`](http://rsshub.app/eeo/pinglun)

研究院 yanjiuyuan [`/eeo/yanjiuyuan`](http://rsshub.app/eeo/yanjiuyuan)

:::tip 建议

请优先选择订阅以上栏目，下面的栏目大部分已经很久没有更新。

:::

两会 lianghui [`/eeo/lianghui`](http://rsshub.app/eeo/lianghui)

时事・政策・宏观 yaowen [`/eeo/yaowen`](http://rsshub.app/eeo/yaowen)

| 时事  | 政策   | 宏观    | 智库       | 首席观点 | 大宗商品 |
| ----- | ------ | ------- | ---------- | -------- | -------- |
| dashi | hfggzc | hfshuju | hfdongjian | sxgd     | dzsp     |

证券・资本・理财 jinrong [`/eeo/jinrong`](http://rsshub.app/eeo/jinrong)

| 债市    | 资本  | 理财  | 证券      | 银行  |
| ------- | ----- | ----- | --------- | ----- |
| zhaishi | ziben | licai | zhengquan | jijin |

| 保险    | PE / 创投 | 科创板      | 新三板    | 互联网金融 |
| ------- | --------- | ----------- | --------- | ---------- |
| jinkong | chuangtou | kechuangban | xinsanban | hlwjr      |

新科技・互联网・O2O shangye [`/eeo/shangye`](http://rsshub.app/eeo/shangye)

| 新科技      | 互联网    | 大健康 | O2O   | 花蕾之约     | 创业家笔记 | 环境     |
| ----------- | --------- | ------ | ----- | ------------ | ---------- | -------- |
| xinnengyuan | dianshang | yiliao | wuliu | hualeizhiyue | cyjbj      | huanjing |

房产・汽车・消费 fcqcxf [`/eeo/fcqcxf`](http://rsshub.app/eeo/fcqcxf)

| 房产   | 汽车  | 消费    |
| ------ | ----- | ------- |
| dichan | qiche | xiaofei |

影视・体育・娱乐 yule [`/eeo/yule`](http://rsshub.app/eeo/yule)

| 娱乐 | 影视    | 体育 | 教育   |
| ---- | ------- | ---- | ------ |
| yule | yingshi | tiyu | jiaoyu |

观察家・书评・思想 gcj [`/eeo/gcj`](http://rsshub.app/eeo/gcj)

| 观察家     | 专栏     | 个人历史 | 书评    |
| ---------- | -------- | -------- | ------- |
| guanchajia | zhuanlan | lishi    | shuping |

| 纵深     | 文化   | 领读   |
| -------- | ------ | ------ |
| zongshen | wenhua | lingdu |

### 分类资讯
举例：https://rsshub.guidebook.top/eeo/15
路由：/eeo/:category
参数：
category，必选 — 分类
category 对应的关键词有

| 时事 | 政策 | 证券 | 资本 | 理财 | 新科技 | 大健康 | 房产 | 汽车 | 消费 | 影视 | 娱乐 | 体育 | 教育 | 观察家 | 专栏 | 书评 | 个人历史 | 宏观 |
| ---- | ---- | ---- | ---- | ---- | ------ | ------ | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ------ | ---- | ---- | -------- | ---- |
| 01   | 02   | 03   | 04   | 05   | 06     | 07     | 08   | 09   | 10   | 11   | 12   | 13   | 14   | 15     | 16   | 17   | 18       | 19   |

## 理论网
### 学习时报
举例：https://rsshub.guidebook.top/cntheory/paper
路由：/cntheory/paper/:id?
参数：
id，可选 — 板块，默认为全部
如订阅 第 A1 版：国内大局，路由为 /cntheory/paper/国内大局。

## 南方都市报
### 奥一网
举例：https://rsshub.guidebook.top/oeeee/web/170
路由：/oeeee/web/:channel
参数：

channel，必选 — 频道 ID
若在桌面端打开奥一网栏目页（如 https://www.oeeee.com/api/channel.php?s=/index/index/channel/gz），可查看该页源代码，搜索 OECID。
若在移动端打开奥一网栏目页（格式例：https://m.oeeee.com/m.php?s=/m2/channel&channel_id=169），即可从 url 中获取。需注意的是，如果该栏目页的 url 格式为 https://m.oeeee.com/detailChannel_indexData.html?channel_id=266 ，则 266 并非为本路由可用的频道 ID，建议从桌面端获取。
### 南都客户端（按南都号 ID）
举例：https://rsshub.guidebook.top/oeeee/app/channel/50
路由：/oeeee/app/channel/:id?
参数：
id，可选 — 南都号 ID
南都号的 UID 可通过 m.mp.oeeee.com 下的文章页面获取。点击文章上方的南都号头像，进入该南都号的个人主页，即可从 url 中获取。
### 南都客户端（按记者）
举例：https://rsshub.guidebook.top/oeeee/app/reporter/249
路由：/oeeee/app/reporter/:id
参数：
id，必选 — 记者 UID
记者的 UID 可通过 m.mp.oeeee.com 下的文章页面获取。点击文章下方的作者头像，进入该作者的个人主页，即可从 url 中获取。
## 南方网
### 南方 +（按栏目 ID）
举例：https://rsshub.guidebook.top/southcn/nfapp/column/38
路由：/southcn/nfapp/column/:column?
参数：
column，可选 — 栏目或南方号 ID

:::tip

若此处输入的是栏目 ID（而非南方号 ID），则该接口会返回与输入栏目相关联栏目的文章。例如，输入栏目 ID `38`（广州），则返回的结果还会包含 ID 为 `3547`（市长报道集）的文章。

:::

1.  `pc.nfapp.southcn.com` 下的文章页面，可通过 url 查看，例：<http://pc.nfapp.southcn.com/13707/7491109.html> 的栏目 ID 为 `13707`。
2.  `static.nfapp.southcn.com` 下的文章页面，可查看网页源代码，搜索 `columnid`。
3.  <https://m.nfapp.southcn.com/column/all> 列出了部分栏目，`id` 即为栏目 ID。

### 南方 +（按作者）
举例：https://rsshub.guidebook.top/southcn/nfapp/reporter/969927791
路由：/southcn/nfapp/reporter/:reporter
参数：
reporter，必选 — 作者 UUID
作者的 UUID 只可通过 static.nfapp.southcn.com 下的文章页面获取。点击文章下方的作者介绍，进入该作者的个人主页，即可从 url 中获取。
## 南方周末
### 新闻分类
举例：https://rsshub.guidebook.top/infzm/2
路由：/infzm/:id
参数：

id，必选 — 南方周末内容分区 id, 可在该内容分区的 URL 中找到（即 https://www.infzm.com/contents?term_id=:id)
下面给出部分参考：

| 推荐 | 新闻 | 观点 | 文化 | 人物 | 影像 | 专题 | 生活 | 视频 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1    | 2    | 3    | 4    | 7    | 8    | 6    | 5    | 131  |

## 澎湃新闻
以下所有路由可使用参数old以采取旧全文获取方法. 该方法会另外获取网页中的图片与视频资源. 在原始url追加?old=yes以启用.

### 首页头条
举例：https://rsshub.guidebook.top/thepaper/featured
路由：/thepaper/featured
参数：无
### 频道
举例：https://rsshub.guidebook.top/thepaper/channel/25950
路由：/thepaper/channel/:id
参数：
id，必选 — 频道 id，可在频道页 URL 中找到

| 频道 ID | 频道名 |
| ------- | ------ |
| 26916   | 视频   |
| 108856  | 战疫   |
| 25950   | 时事   |
| 25951   | 财经   |
| 36079   | 澎湃号 |
| 119908  | 科技   |
| 25952   | 思想   |
| 119489  | 智库   |
| 25953   | 生活   |
| 26161   | 问吧   |
| 122908  | 国际   |
| -21     | 体育   |
| -24     | 评论   |

### 栏目
举例：https://rsshub.guidebook.top/thepaper/list/25457
路由：/thepaper/list/:id
参数：

id，必选 — 栏目 id，可在栏目页 URL 中找到

| 栏目 ID | 栏目名       |
| ------- | ------------ |
| 26912   | 上直播       |
| 26913   | 七环视频     |
| 26965   | 温度计       |
| 26908   | 一级视场     |
| 27260   | World 湃     |
| 26907   | 湃客科技     |
| 33168   | 纪录湃       |
| 26911   | 围观         |
| 26918   | @所有人      |
| 26906   | 大都会       |
| 26909   | 追光灯       |
| 26910   | 运动装       |
| 26914   | 健寻记       |
| 82188   | AI 播报      |
| 89035   | 眼界         |
| 92278   | 关键帧       |
| 90069   | 战疫         |
| 25462   | 中国政库     |
| 25488   | 中南海       |
| 97924   | 初心之路     |
| 25489   | 舆论场       |
| 25490   | 打虎记       |
| 25423   | 人事风向     |
| 25426   | 法治中国     |
| 25424   | 一号专案     |
| 25463   | 港台来信     |
| 25491   | 长三角政商   |
| 25428   | 直击现场     |
| 68750   | 公益湃       |
| 27604   | 暖闻         |
| 25464   | 澎湃质量报告 |
| 25425   | 绿政公署     |
| 25429   | 澎湃国际     |
| 25481   | 外交学人     |
| 25430   | 澎湃防务     |
| 25678   | 唐人街       |
| 25427   | 澎湃人物     |
| 25422   | 浦江头条     |
| 25487   | 教育家       |
| 25634   | 全景现场     |
| 25635   | 美数课       |
| 25600   | 快看         |
| 25434   | 10% 公司     |
| 25436   | 能见度       |
| 25433   | 地产界       |
| 25438   | 财经上下游   |
| 25435   | 金改实验室   |
| 25437   | 牛市点线面   |
| 119963  | IPO 最前线   |
| 25485   | 澎湃商学院   |
| 25432   | 自贸区连线   |
| 37978   | 进博会在线   |
| 36079   | 湃客         |
| 27392   | 政务         |
| 77286   | 媒体         |
| 27234   | 科学湃       |
| 119445  | 生命科学     |
| 119447  | 未来 2%      |
| 119446  | 元宇宙观察   |
| 119448  | 科创 101     |
| 119449  | 科学城邦     |
| 25444   | 社论         |
| 27224   | 澎湃评论     |
| 26525   | 思想湃       |
| 26878   | 上海书评     |
| 25483   | 思想市场     |
| 25457   | 私家历史     |
| 25574   | 翻书党       |
| 25455   | 艺术评论     |
| 26937   | 古代艺术     |
| 25450   | 文化课       |
| 25482   | 逝者         |
| 25536   | 专栏         |
| 26506   | 异次元       |
| 97313   | 海平面       |
| 103076  | 一问三知     |
| 25445   | 澎湃研究所   |
| 25446   | 全球智库     |
| 26915   | 城市漫步     |
| 25456   | 市政厅       |
| 104191  | 世界会客厅   |
| 25448   | 有戏         |
| 26609   | 文艺范       |
| 25942   | 身体         |
| 26015   | 私・奔       |
| 25599   | 运动家       |
| 25842   | 私家地理     |
| 80623   | 非常品       |
| 26862   | 楼市         |
| 25769   | 生活方式     |
| 25990   | 澎湃联播     |
| 26173   | 视界         |
| 26202   | 亲子学堂     |
| 26404   | 赢家         |
| 26490   | 汽车圈       |
| 115327  | IP SH        |
| 117340  | 酒业         |

### 侧边栏
举例：https://rsshub.guidebook.top/thepaper/sidebar/hotNews
路由：/thepaper/sidebar/sec?
参数：无

| 边栏 ID                  | 边栏名   |
| ------------------------ | -------- |
| hotNews                  | 澎湃热榜 |
| financialInformationNews | 澎湃财讯 |
| morningEveningNews       | 早晚报   |

### 明查
举例：https://rsshub.guidebook.top/thepaper/factpaper
路由：/thepaper/factpaper/:status?
参数：

status，可选 — 状态 id，可选 1 即 有定论 或 0 即 核查中，默认为 1
### 澎湃美数组作品集
举例：https://rsshub.guidebook.top/thepaper/839studio/2
路由：/thepaper/839studio/:id?
参数：

id，可选 — 分类 id 可选，默认订阅全部分类

| 视频 | 交互 | 信息图 | 数据故事 |
| ---- | ---- | ------ | -------- |
| 2    | 4    | 3      | 453      |


## 齐鲁晚报
### 新闻
举例：https://rsshub.guidebook.top/qlwb/news
路由：/qlwb/news
参数：无
### 今日城市
举例：https://rsshub.guidebook.top/qlwb/city/:city
路由：/qlwb/city
参数：无

| 今日临沂 | 今日德州 | 今日威海 | 今日枣庄  | 今日淄博 | 今日烟台 | 今日潍坊 | 今日菏泽 | 今日日照 | 今日泰山 | 今日聊城  | 今日济宁 |
| -------- | -------- | -------- | --------- | -------- | -------- | -------- | -------- | -------- | -------- | --------- | -------- |
| linyi    | dezhou   | weihai   | zaozhuang | zibo     | yantai   | weifang  | heze     | rizhao   | taishan  | liaocheng | jining   |

## 人民网
举例：https://rsshub.guidebook.top/people
路由：/people/:site?/:category?
参数：

site，可选 — 站点，可在对应站点 URL 中找到
category，可选 — 分类，可在对应分类页中找到

订阅 **单级** 栏目如 [滚动 -- 生态 -- 人民网](http://env.people.com.cn/GB/74877/index.html) 分类栏目，分为 3 步：

1.  将 URL <http://env.people.com.cn/GB/74877/index.html> 中 `http://` 与 `.people.com.cn/` 中间的 `env` 作为 `site` 参数填入；
2.  将 `http://env.people.com.cn/GB/` 与 `/index.html` 间的 `74877` 作为 `category` 参数填入；
3.  最终可获得 [`/people/env/74877`](https://rsshub.guidebook.top/people/env/74877)。

订阅 **多级** 栏目如 [经济观察 -- 观点 -- 人民网](http://opinion.people.com.cn/GB/427456/434878/index.html) 分类栏目，同样分为 3 步：

1.  将 URL <http://opinion.people.com.cn/GB/427456/434878/index.html> 中 `http://` 与 `.people.com.cn/` 中间的 `opinion` 作为 `site` 参数填入；
2.  把 `http://opinion.people.com.cn/GB/` 与 `/index.html` 间 `427456/434878` 作为 `category` 参数填入；
3.  最终可获得 [`/people/opinion/427456/434878`](https://rsshub.guidebook.top/people/opinion/427456/434878)。

:::tip

人民网大部分站点支持上述通用规则进行订阅。

:::

### 习近平系列重要讲话
举例：https://rsshub.guidebook.top/people/xjpjh
路由：/people/xjpjh/:keyword?/:year?
参数：
keyword，可选 — 关键词，默认不填
year，可选 — 年份，默认 all
### 中国共产党新闻网 24 小时滚动新闻
举例：https://rsshub.guidebook.top/people/cpc/24h
路由：/people/cpc/24h
参数：无
### 领导留言板
举例：https://rsshub.guidebook.top/people/liuyan/539
路由：/people/liuyan/:id/:state?
参数：

id，必选 — 编号，可在对应人物页 URL 中找到
state，可选 — 状态，见下表，默认为全部

| 全部 | 待回复 | 办理中 | 已办理 |
| ---- | ------ | ------ | ------ |
| 1    | 2      | 3      | 4      |

## 新华每日电讯
举例：https://rsshub.guidebook.top/mrdx/today
路由：/mrdx/today
参数：无

## 新京报
### 栏目
举例：https://rsshub.guidebook.top/bjnews/realtime
路由：/bjnews/:category
参数：
category，必选 — 新京报的栏目名，点击对应栏目后在地址栏找到
### 电子报
举例：https://rsshub.guidebook.top/bjnews/epaper/A
路由：/bjnews/epaper/:cat
参数：
cat，必选 — 新京报叠名：A,B,C,D, 特刊为special
## 新蓝网（浙江广播电视集团）
### 浙江新闻联播
举例：https://rsshub.guidebook.top/cztv/zjxwlb
路由：/cztv/zjxwlb
参数：无
### 浙江新闻联播 - 每日合集
举例：https://rsshub.guidebook.top/cztv/zjxwlb/daily
路由：/cztv/zjxwlb/daily
参数：无
## 央视新闻
### 新闻联播
举例：https://rsshub.guidebook.top/cctv/xwlb
路由：/cctv/xwlb
参数：无
新闻联播内容摘要。

### 栏目
举例：https://rsshub.guidebook.top/cctv/lm/xwzk
路由：/cctv/lm/:id?
参数：
id，可选 — 栏目 id，可在对应栏目页 URL 中找到，默认为 xwzk 即 新闻周刊

| 焦点访谈 | 等着我 | 今日说法 | 开讲啦 |
| -------- | ------ | -------- | ------ |
| jdft     | dzw    | jrsf     | kjl    |

| 正大综艺 | 经济半小时 | 第一动画乐园 |
| -------- | ---------- | ------------ |
| zdzy     | jjbxs      | dydhly       |

:::tip

更多栏目请看 [这里](https://tv.cctv.com/lm)

:::

### 新闻专题
举例：https://rsshub.guidebook.top/cctv/special/315
路由：/cctv/special/:id?
参数：
id，可选 — 专题 id，可在对应专题页 URL 中找到，默认为 315 即 3·15 晚会
:::tip

如 [2020 年国家网络安全宣传周](https://news.cctv.com/special/2020gjwlaqxcz/index.shtml) 的专题页 URL 为 <https://news.cctv.com/special/2020gjwlaqxcz/index.shtml。其专题> id 即为 `2020gjwlaqxcz`。

:::

此处查看 [所有新闻专题](http://news.cctv.com/special/index.shtml)

### 专题
举例：https://rsshub.guidebook.top/cctv/world
路由：/cctv/:category
参数：
category，必选 — 分类名

| 新闻 | 国内  | 国际  | 社会    | 法治 | 文娱 | 科技 | 生活 | 教育 | 每周质量报告 | 新闻 1+1  |
| ---- | ----- | ----- | ------- | ---- | ---- | ---- | ---- | ---- | ------------ | --------- |
| news | china | world | society | law  | ent  | tech | life | edu  | mzzlbg       | xinwen1j1 |

### 新闻联播文字版
举例：https://rsshub.guidebook.top/xinwenlianbo/index
路由：/xinwenlianbo/index
参数：无
### 闻联播文字版完整版
举例：https://rsshub.guidebook.top/xwlb
路由：/xwlb/index
参数：无
### 央视网图片《镜象》
举例：https://rsshub.guidebook.top/cctv/photo/jx
路由：/cctv/photo/jx
参数：无
## 羊城晚报金羊网
### 新闻
举例：https://rsshub.guidebook.top/ycwb/1
路由：/ycwb/:node
参数：
node，必选 — 栏目 id
注：小部分栏目的 URL 会给出 nodeid。如未给出，可打开某条新闻链接后，查看网页源代码，搜索 nodeid 的值。

常用栏目节点：

| 首页 | 中国 | 国际 | 体育 | 要闻 | 珠江评论 | 民生观察 | 房产 | 金羊教育 | 金羊财富 | 金羊文化 | 金羊健康 | 金羊汽车 |
| ---- | ---- | ---- | ---- | ---- | -------- | -------- | ---- | -------- | -------- | -------- | -------- | -------- |
| 1    | 14   | 15   | 16   | 22   | 1875     | 21773    | 222  | 5725     | 633      | 5281     | 21692    | 223      |

| 广州 | 广州 - 广州要闻 | 广州 - 社会百态 | 广州 - 深读广州 | 广州 - 生活服务 | 今日大湾区 | 广东 - 政经热闻 | 广东 - 民生视点 | 广东 - 滚动新闻 |
| ---- | --------------- | --------------- | --------------- | --------------- | ---------- | --------------- | --------------- | --------------- |
| 18   | 5261            | 6030            | 13352           | 83422           | 100418     | 13074           | 12252           | 12212           |

## 中国科技网
### 科技日报
举例：https://rsshub.guidebook.top/stdaily/digitalpaper
路由：/stdaily/digitalpaper
参数：无
## 中国日报
### 英语点津
举例：https://rsshub.guidebook.top/chinadaily/english/thelatest
路由：/chinadaily/english/:category
参数：
category，必选 — 目录分类
目录分类

| 最新      | 双语           | 热词          | 口语            | 译词          | 视频        | 听力     | 专栏      | 文件                     | 考试         |
| --------- | -------------- | ------------- | --------------- | ------------- | ----------- | -------- | --------- | ------------------------ | ------------ |
| thelatest | news_bilingual | news_hotwords | practice_tongue | trans_collect | video_links | audio_cd | columnist | 5af95d44a3103f6866ee845c | englishexams |

## 中国新闻网
### 最新
举例：https://rsshub.guidebook.top/chinanews
路由：/chinanews
参数：无
## 中国新闻周刊
举例：https://rsshub.guidebook.top/inewsweek/survey
路由：/inewsweek/:channel
参数：

channel，必选 — 栏目

| 封面  | 时政     | 社会    | 经济    | 国际  | 调查   | 人物   |
| ----- | -------- | ------- | ------- | ----- | ------ | ------ |
| cover | politics | society | finance | world | survey | people |




