---
title: 哔哩哔哩
icon: iconfont icon-bilibili
order: 2
category:
  - Rsshub
tag:
  - Rsshub
---

## Bilibili
### 番剧
举例：https://rsshub.guidebook.top/bilibili/bangumi/media/9192
路由：`/bilibili/bangumi/media/:mediaid`
参数：
`mediaid`，必选 — 番剧媒体 id, 番剧主页 URL 中获取
### 用户追番列表
举例：https://rsshub.guidebook.top/bilibili/user/bangumi/208259
路由：`/bilibili/user/bangumi/:uid/:type?`
参数：
`uid`，必选 — 用户 id
`type`，可选 — 1为番，2为剧，留空为1
### UP 主投稿
举例：https://rsshub.guidebook.top/bilibili/user/video/2267573
路由：`/bilibili/user/video/:uid/:disableEmbed?`
参数：
`uid`，必选 — 用户 id, 可在 UP 主主页中找到
`disableEmbed`，可选 — 默认为开启内嵌视频, 任意值为关闭
### UP 主所有视频
举例：https://rsshub.guidebook.top/bilibili/user/video-all/436361287
路由：`/bilibili/user/video-all/:uid/:disableEmbed?`
参数：
`uid`，必选 — 用户 id, 可在 UP 主主页中找到
`disableEmbed`，可选 — 默认为开启内嵌视频, 任意值为关闭
### UP 主专栏
举例：https://rsshub.guidebook.top/bilibili/user/article/334958638
路由：`/bilibili/user/article/:uid`
参数：
`uid`，必选 — 用户 id, 可在 UP 主主页中找到
### UP 主动态
举例：https://rsshub.guidebook.top/bilibili/user/dynamic/2267573
路由：`/bilibili/user/dynamic/:uid/:routeParams?`
参数：
`uid`，必选 — 用户 id, 可在 UP 主主页中找到
`routeParams`，可选 — 额外参数；请参阅以下说明和表格
| 键 | 含义 | 接受的值 | 默认值 |
| -- | ---- | ------- | ------ |
| showEmoji | 显示或隐藏表情图片 | 0/1/true/false | false |
| disableEmbed | 关闭内嵌视频 | 0/1/true/false | false |
| useAvid | 视频链接使用AV号(默认为BV号) | 0/1/true/false | false |
| directLink | 使用内容直链 | 0/1/true/false | false |

用例：`/bilibili/user/dynamic/2267573/showEmoji=1&disableEmbed=1&useAvid=1`

:::tip 动态的专栏显示全文

动态的专栏显示全文请使用通用参数里的 `mode=fulltext `

举例: bilibili 专栏全文输出 `/bilibili/user/dynamic/2267573/?mode=fulltext`

:::
### UP 主频道的合集
举例：https://rsshub.guidebook.top/bilibili/user/collection/245645656/529166
路由：/bilibili/user/collection/:uid/:sid/:disableEmbed?
参数：
`uid`，必选 — 用户 id, 可在 UP 主主页中找到
`sid`，必选 — 合集 id, 可在合集页面的 URL 中找到
`disableEmbed`，可选 — 默认为开启内嵌视频, 任意值为关闭
### UP 主频道的视频列表
举例：https://rsshub.guidebook.top/bilibili/user/channel/2267573/396050
路由：`/bilibili/user/channel/:uid/:sid/:disableEmbed?`
参数：
`uid`，必选 — 用户 id, 可在 UP 主主页中找到
`sid`，必选 — 频道 id, 可在频道的 URL 中找到
`disableEmbed`，可选 — 默认为开启内嵌视频, 任意值为关闭
### UP 主默认收藏夹
举例：https://rsshub.guidebook.top/bilibili/user/fav/2267573
路由：`/bilibili/user/fav/:uid/:disableEmbed?`
参数：
`uid`，必选 — 用户 id, 可在 UP 主主页中找到
`disableEmbed`，可选 — 默认为开启内嵌视频, 任意值为关闭
### UP 主非默认收藏夹
举例：https://rsshub.guidebook.top/bilibili/fav/756508/50948568
路由：`/bilibili/fav/:uid/:fid/:disableEmbed?`
参数：
`uid`，必选 — 用户 id, 可在 UP 主主页中找到
`fid`，必选 — 收藏夹 ID, 可在收藏夹的 URL 中找到, 默认收藏夹建议使用 UP 主默认收藏夹功能
`disableEmbed`，可选 — 默认为开启内嵌视频, 任意值为关闭
### UP 主投币视频
举例：https://rsshub.guidebook.top/bilibili/user/coin/208259
路由：`/bilibili/user/coin/:uid/:disableEmbed?`
参数：
`uid`，必选 — 用户 id, 可在 UP 主主页中找到
`disableEmbed`，可选 — 默认为开启内嵌视频, 任意值为关闭
### UP 主粉丝
举例：https://rsshub.guidebook.top/bilibili/user/followers/2267573/3
路由：`/bilibili/user/followers/:uid/:loginUid`
参数：
`uid`，必选 — 用户 id, 可在 UP 主主页中找到
`loginUid`，必选 — 用于登入的用户id,需要配置对应的 Cookie 值

:::tip
UP 主粉丝现在需要 b 站登录后的 Cookie 值，所以只能自建，详情见部署页面的配置模块。
:::
### 分区视频
举例：https://rsshub.guidebook.top/bilibili/partion/33
路由：`/bilibili/partion/:tid/:disableEmbed?`
参数：
`tid`，必选 — 分区 id
`disableEmbed`，可选 — 默认为开启内嵌视频, 任意值为关闭
动画

| MAD·AMV | MMD·3D | 短片・手书・配音 | 特摄 | 综合 |
| ------- | ------ | ---------------- | ---- | ---- |
| 24      | 25     | 47               | 86   | 27   |

番剧

| 连载动画 | 完结动画 | 资讯 | 官方延伸 |
| -------- | -------- | ---- | -------- |
| 33       | 32       | 51   | 152      |

国创

| 国产动画 | 国产原创相关 | 布袋戏 | 动态漫・广播剧 | 资讯 |
| -------- | ------------ | ------ | -------------- | ---- |
| 153      | 168          | 169    | 195            | 170  |

音乐

| 原创音乐 | 翻唱 | VOCALOID·UTAU | 电音 | 演奏 | MV  | 音乐现场 | 音乐综合 | ~~OP/ED/OST~~ |
| -------- | ---- | ------------- | ---- | ---- | --- | -------- | -------- | ------------- |
| 28       | 31   | 30            | 194  | 59   | 193 | 29       | 130      | 54            |

舞蹈

| 宅舞 | 街舞 | 明星舞蹈 | 中国舞 | 舞蹈综合 | 舞蹈教程 |
| ---- | ---- | -------- | ------ | -------- | -------- |
| 20   | 198  | 199      | 200    | 154      | 156      |

游戏

| 单机游戏 | 电子竞技 | 手机游戏 | 网络游戏 | 桌游棋牌 | GMV | 音游 | Mugen |
| -------- | -------- | -------- | -------- | -------- | --- | ---- | ----- |
| 17       | 171      | 172      | 65       | 173      | 121 | 136  | 19    |

知识

| 科学科普 | 社科人文 | 财经 | 校园学习 | 职业职场 | 野生技术协会 |
| -------- | -------- | ---- | -------- | -------- | ------------ |
| 201      | 124      | 207  | 208      | 209      | 122          |

~~科技~~

| ~~演讲・公开课~~ | ~~星海~~ | ~~机械~~ | ~~汽车~~ |
| ---------------- | -------- | -------- | -------- |
| 39               | 96       | 98       | 176      |

数码

| 手机平板 | 电脑装机 | 摄影摄像 | 影音智能 |
| -------- | -------- | -------- | -------- |
| 95       | 189      | 190      | 191      |

生活

| 搞笑 | 日常 | 美食圈 | 动物圈 | 手工 | 绘画 | 运动 | 汽车 | 其他 | ~~ASMR~~ |
| ---- | ---- | ------ | ------ | ---- | ---- | ---- | ---- | ---- | -------- |
| 138  | 21   | 76     | 75     | 161  | 162  | 163  | 176  | 174  | 175      |

鬼畜

| 鬼畜调教 | 音 MAD | 人力 VOCALOID | 教程演示 |
| -------- | ------ | ------------- | -------- |
| 22       | 26     | 126           | 127      |

时尚

| 美妆 | 服饰 | 健身 | T 台 | 风向标 |
| ---- | ---- | ---- | ---- | ------ |
| 157  | 158  | 164  | 159  | 192    |

~~广告~~

| ~~广告~~ |
| -------- |
| 166      |

资讯

| 热点 | 环球 | 社会 | 综合 |
| ---- | ---- | ---- | ---- |
| 203  | 204  | 205  | 206  |

娱乐

| 综艺 | 明星 | Korea 相关 |
| ---- | ---- | ---------- |
| 71   | 137  | 131        |

影视

| 影视杂谈 | 影视剪辑 | 短片 | 预告・资讯 |
| -------- | -------- | ---- | ---------- |
| 182      | 183      | 85   | 184        |

纪录片

| 全部 | 人文・历史 | 科学・探索・自然 | 军事 | 社会・美食・旅行 |
| ---- | ---------- | ---------------- | ---- | ---------------- |
| 177  | 37         | 178              | 179  | 180              |

电影

| 全部 | 华语电影 | 欧美电影 | 日本电影 | 其他国家 |
| ---- | -------- | -------- | -------- | -------- |
| 23   | 147      | 145      | 146      | 83       |

电视剧

| 全部 | 国产剧 | 海外剧 |
| ---- | ------ | ------ |
| 11   | 185    | 187    |
### 分区视频排行榜
举例：https://rsshub.guidebook.top/bilibili/partion/ranking/171/3
路由：`/bilibili/partion/ranking/:tid/:days?/:disableEmbed?`
参数：
`tid`，必选 — 分区 id, 见上方表格
`days`，可选 — 缺省为 7, 指最近多少天内的热度排序
`disableEmbed`，可选 — 默认为开启内嵌视频, 任意值为关闭
### 视频选集列表
举例：https://rsshub.guidebook.top/bilibili/video/page/BV1i7411M7N9
路由：`/bilibili/video/page/:bvid/:disableEmbed?`
参数：
`bvid`，必选 — 可在视频页 URL 中找到
`disableEmbed`，可选 — 默认为开启内嵌视频, 任意值为关闭
### 视频评论
举例：https://rsshub.guidebook.top/bilibili/video/reply/BV1vA411b7ip
路由：`/bilibili/video/reply/:bvid`
参数：
`bvid`，必选 — 可在视频页 URL 中找到
### 视频弹幕
举例：https://rsshub.guidebook.top/bilibili/video/danmaku/BV1vA411b7ip/1
路由：`/bilibili/video/danmaku/:bvid/:pid?`
参数：
`bvid`，必选 — 视频AV号,可在视频页 URL 中找到
`pid`，可选 — 分P号,不填默认为1
### link 公告
举例：https://rsshub.guidebook.top/bilibili/link/news/live
路由：`/bilibili/link/news/:product`
参数：
`product`，必选 — 公告分类, 包括 直播:live 小视频:vc 相簿:wh
### 视频搜索
举例：https://rsshub.guidebook.top/bilibili/vsearch/藤原千花
路由：`/bilibili/vsearch/:kw/:order?/:disableEmbed?/:tid?`
参数：
`kw`，必选 — 检索关键字
`order`，可选 — 排序方式, 综合:totalrank 最多点击:click 最新发布:pubdate(缺省) 最多弹幕:dm 最多收藏:stow
`disableEmbed`，可选 — 默认为开启内嵌视频, 任意值为关闭
`tid`，可选 — 分区 id
分区 id 的取值请参考下表：

| 全部分区 | 动画 | 番剧 | 国创 | 音乐 | 舞蹈 | 游戏 | 知识 | 科技 | 运动 | 汽车 | 生活 | 美食 | 动物圈 | 鬼畜 | 时尚 | 资讯 | 娱乐 | 影视 | 纪录片 | 电影 | 电视剧 |
| -------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ------ | ---- | ---- | ---- | ---- | ---- | ------ | ---- | ------ |
| 0        | 1    | 13   | 167  | 3    | 129  | 4    | 36   | 188  | 234  | 223  | 160  | 211  | 217    | 119  | 155  | 202  | 5    | 181  | 177    | 23   | 11     |
### 当前在线
举例：https://rsshub.guidebook.top/bilibili/online
路由：`/bilibili/online/:disableEmbed?`
参数：
`disableEmbed`，可选 — 默认为开启内嵌视频, 任意值为关闭
### 直播开播
举例：https://rsshub.guidebook.top/bilibili/live/room/3
路由：`/bilibili/live/room/:roomID`
参数：
`roomID`，必选 — 房间号, 可在直播间 URL 中找到, 长短号均可
### 直播搜索
举例：https://rsshub.guidebook.top/bilibili/live/search/编程/online
路由：`/bilibili/live/search/:key/:order`
参数：
`key`，必选 — 搜索关键字
`order`，必选 — 排序方式, live_time 开播时间, online 人气
### 直播分区
举例：https://rsshub.guidebook.top/bilibili/live/area/207/online
路由：`/bilibili/live/area/:areaID/:order`
参数：
`areaID`，必选 — 分区 ID 分区增删较多, 可通过 分区列表 查询
`order`，必选 — 排序方式, live_time 开播时间, online 人气
:::tip
由于接口未提供开播时间，如果直播间未更换标题与分区，将视为一次。如果直播间更换分区与标题，将视为另一项
:::
### 主站话题列表
举例：https://rsshub.guidebook.top/bilibili/blackboard
路由：`/bilibili/blackboard`
参数：无
### 会员购新品上架
举例：https://rsshub.guidebook.top/bilibili/mall/new/1
路由：`/bilibili/mall/new/:category?`
参数：
| 全部 | 手办 | 魔力赏 | 周边 | 游戏 |
| ---- | ---- | ------ | ---- | ---- |
| 0    | 1    | 7      | 3    | 6    |
### 会员购作品
举例：https://rsshub.guidebook.top/bilibili/mall/ip/0_3000294
路由：`/bilibili/mall/ip/:id`
参数：
id，必选 — 作品 id, 可在作品列表页 URL 中找到
### 综合热门
举例：https://rsshub.guidebook.top/bilibili/popular/all
路由：`/bilibili/popular/all`
参数：无
### 热搜
举例：https://rsshub.guidebook.top/bilibili/hot-search
路由：`/bilibili/hot-search`
参数：无
### 排行榜
举例：https://rsshub.guidebook.top/bilibili/ranking/0/3/1
路由：`/bilibili/ranking/:tid/:days?/:arc_type?/:disableEmbed?`
参数：
`tid`，必选 — 排行榜分区 id, 默认 0
`days`，可选 — 时间跨度, 可为 1 3 7 30
`arc_type`，可选 — 投稿时间, 可为 0(全部投稿) 1(近期投稿) , 默认 1
`disableEmbed`，可选 — 默认为开启内嵌视频, 任意值为关闭
| 全站 | 动画 | 国创相关 | 音乐 | 舞蹈 | 游戏 | 科技 | 数码 | 生活 | 鬼畜 | 时尚 | 娱乐 | 影视 |
| ---- | ---- | -------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 0    | 1    | 168      | 3    | 129  | 4    | 36   | 188  | 160  | 119  | 155  | 5    | 181  |
### 话题 (频道 / 标签)
举例：https://rsshub.guidebook.top/bilibili/topic/2233
路由：`/bilibili/topic/:topic`
参数：
`topic`，必选 — 话题名(又称频道名或标签) 例如 2233 或 COSPLAY
### 歌单
举例：https://rsshub.guidebook.top/bilibili/audio/10624
路由：`/bilibili/audio/:id`
参数：
`id`，必选 — 歌单 id, 可在歌单页 URL 中找到
### 专栏文集
举例：https://rsshub.guidebook.top/bilibili/readlist/25611
路由：`/bilibili/readlist/:listid`
参数：
`listid`，必选 — 文集 id, 可在专栏文集 URL 中找到
### B 站每周必看
举例：https://rsshub.guidebook.top/bilibili/weekly
路由：`/bilibili/weekly/:disableEmbed?`
参数：
`disableEmbed`，可选 — 默认为开启内嵌视频, 任意值为关闭
### 漫画更新
举例：https://rsshub.guidebook.top/bilibili/manga/update/26009
路由：`/bilibili/manga/update/:comicid`
参数：
`comicid`，必选 — 漫画 id, 可在 URL 中找到, 支持带有mc前缀
### 频道排行榜
举例：https://rsshub.guidebook.top/bilibili/channel/5417/hot
路由：`/bilibili/channel/:channelid/hot/:disableEmbed?`
参数：
`channelid`，必选 — 频道id，可在频道链接中找到
`disableEmbed`，可选 — 默认为开启内嵌视频, 任意值为关闭