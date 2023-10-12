---
title: 社交媒体
icon: iconfont icon-shejiaoAPP
order: 2
category:
  - Rsshub
tag:
  - Rsshub
---

## 简书
### 首页
举例：https://rsshub.guidebook.top/jianshu/home
路由：/jianshu/home
参数：无
### 热门
举例：https://rsshub.guidebook.top/jianshu/trending/weekly
路由：/jianshu/trending/:timeframe
参数：
timeframe，必选 — 按周 weekly 或 按月 monthly
### 专题
举例：https://rsshub.guidebook.top/jianshu/collection/xYuZYD
路由：/jianshu/collection/:id
参数：
id，必选 — 专题 id, 可在专题页 URL 中找到
### 作者
举例：https://rsshub.guidebook.top/jianshu/user/yZq3ZV
路由：/jianshu/user/:id
参数：
id，必选 — 作者 id, 可在作者主页 URL 中找到
## 酷安
### 图文
举例：https://rsshub.guidebook.top/coolapk/tuwen
路由：/coolapk/tuwen/:type?
参数：
type，可选 — 默认为hot
| 参数名称 | 编辑精选 | 最新   |
| -------- | -------- | ------ |
| type     | hot      | latest |
### 头条
举例：https://rsshub.guidebook.top/coolapk/toutiao
路由：/coolapk/toutiao/:type?
参数：
type，可选 — 默认为history
| 参数名称 | 历史头条 | 最新   |
| -------- | -------- | ------ |
| type     | history  | latest |
### 看看号
举例：https://rsshub.guidebook.top/coolapk/dyh/1524
路由：/coolapk/dyh/:dyhId
参数：
dyhId，必选 — 看看号ID
:::tip
仅限于采集**站内订阅**的看看号的内容。看看号 ID 可在看看号界面右上分享 - 复制链接得到。
:::
### 话题
举例：https://rsshub.guidebook.top/coolapk/huati/酷安夜话
路由：/coolapk/huati/:tag
参数：
tag，必选 — 话题名称
### 用户
举例：https://rsshub.guidebook.top/coolapk/user/3177668/dynamic
路由：/coolapk/user/:uid/dynamic
参数：
uid，必选 — 在个人界面右上分享-复制链接获取
### 热榜
举例：https://rsshub.guidebook.top/coolapk/hot
路由：/coolapk/hot/:type?/:period?
参数：
type，可选 — 默认为jrrm
period，可选 — 默认为daily
| 参数名称 | 今日热门 | 点赞榜 | 评论榜 | 收藏榜 | 酷图榜 |
| -------- | -------- | ------ | ------ | ------ | ------ |
| type     | jrrm     | dzb    | plb    | scb    | ktb    |

| 参数名称 | 日榜  | 周榜   |
| -------- | ----- | ------ |
| period   | daily | weekly |
:::tip
今日热门没有周榜，酷图榜日榜的参数会变成周榜，周榜的参数会变成月榜。
:::
## 美拍
### 用户动态
举例：https://rsshub.guidebook.top/meipai/user/56537299
路由：/meipai/user/:id
参数：
id，必选 — 用户 id, 可在 分享出去获得的用户主页 URL 中找到
## 全民 K 歌
### 用户作品列表
举例：https://rsshub.guidebook.top/qq/kg/639a9a86272c308e33
路由：/qq/kg/:userId
参数：
userId，必选 — 用户 ID, 可在对应页面的 URL 中找到
### 用户作品评论动态
举例：https://rsshub.guidebook.top/qq/kg/reply/OhXHMdO1VxLWQOOm
路由：/qq/kg/reply/:playId
参数：
playId，必选 — 音频页 ID, 可在对应页面的 URL 中找到
## 数字尾巴
### 首页
举例：https://rsshub.guidebook.top/dgtle
路由：/dgtle
参数：无
### 闲置（分类）
举例：https://rsshub.guidebook.top/dgtle/trade/111
路由：/dgtle/trade/:typeId?
参数：
typeId，可选 — 分类 id，默认为全部

| 全部 | 电脑 | 手机 | 平板 | 相机 | 影音 | 外设 | 生活 | 公告 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 0    | 111  | 109  | 110  | 113  | 114  | 115  | 112  | 116  |

### 闲置（关键词）
举例：https://rsshub.guidebook.top/dgtle/trade/search/ipad
路由：/dgtle/trade/search/:keyword
参数：
keyword，必选 — 搜索关键词
### 鲸图（分类）
举例：https://rsshub.guidebook.top/dgtle/whale/category/0
路由：/dgtle/whale/category/:category
参数：
category，必选 — 分类 id

| 精选 | 人物 | 静物 | 二次元 | 黑白 | 自然 | 美食 | 电影与游戏 | 科技与艺术 | 城市与建筑 | 萌物 | 美女 |
| ---- | ---- | ---- | ------ | ---- | ---- | ---- | ---------- | ---------- | ---------- | ---- | ---- |
| 0    | 1    | 2    | 3      | 4    | 5    | 6    | 7          | 8          | 9          | 10   | 11   |

### 鲸图（排行榜）
举例：https://rsshub.guidebook.top/dgtle/whale/rank/download/day
路由：/dgtle/whale/rank/:type/:rule
参数：
type，必选 — 排行榜类型
rule，必选 — 排行榜周期
type

| 下载排行榜 | 点赞排行榜 |
| ---------- | ---------- |
| download   | like       |

rule

| 日排行 | 周排行 | 月排行 | 总排行 |
| ------ | ------ | ------ | ------ |
| day    | week   | month  | amount |
## 微博
:::tip

微博会针对请求的来源地区返回不同的结果。\
一个已知的例子为：部分视频因未知原因仅限中国大陆境内访问 (CDN 域名为 `locallimit.us.sinaimg.cn` 而非 `f.video.weibocdn.com`)。若一条微博含有这种视频且 RSSHub 实例部署在境外，抓取到的微博可能不含视频。将 RSSHub 部署在境内有助于抓取这种视频，但阅读器也必须处于境内网络环境以加载视频。

:::

对于微博内容，在 `routeParams` 参数中以 query string 格式指定选项，可以控制输出的样式

| 键                         | 含义                                                               | 接受的值       | 默认值                              |
| -------------------------- | ------------------------------------------------------------------ | -------------- | ----------------------------------- |
| readable                   | 是否开启细节排版可读性优化                                         | 0/1/true/false | false                               |
| authorNameBold             | 是否加粗作者名字                                                   | 0/1/true/false | false                               |
| showAuthorInTitle          | 是否在标题处显示作者                                               | 0/1/true/false | false（`/weibo/keyword/`中为 true） |
| showAuthorInDesc           | 是否在正文处显示作者                                               | 0/1/true/false | false（`/weibo/keyword/`中为 true） |
| showAuthorAvatarInDesc     | 是否在正文处显示作者头像（若阅读器会提取正文图片，不建议开启）     | 0/1/true/false | false                               |
| showEmojiForRetweet        | 显示 “🔁” 取代 “转发” 两个字                                       | 0/1/true/false | false                               |
| showRetweetTextInTitle     | 在标题出显示转发评论（置为 false 则在标题只显示被转发微博）        | 0/1/true/false | true                                |
| addLinkForPics             | 为图片添加可点击的链接                                             | 0/1/true/false | false                               |
| showTimestampInDescription | 在正文处显示被转发微博的时间戳                                     | 0/1/true/false | false                               |
| widthOfPics                | 微博配图宽（生效取决于阅读器）                                     | 不指定 / 数字  | 不指定                              |
| heightOfPics               | 微博配图高（生效取决于阅读器）                                     | 不指定 / 数字  | 不指定                              |
| sizeOfAuthorAvatar         | 作者头像大小                                                       | 数字           | 48                                  |
| displayVideo               | 是否直接显示微博视频和 Live Photo，只在博主或个人时间线 RSS 中有效 | 0/1/true/false | true                                |
| displayArticle             | 是否直接显示微博文章，只在博主或个人时间线 RSS 中有效              | 0/1/true/false | false                               |
| displayComments            | 是否直接显示热门评论，只在博主或个人时间线 RSS 中有效              | 0/1/true/false | false                               |
| showEmojiInDescription     | 是否展示正文中的微博表情，关闭则替换为 `[表情名]`                  | 0/1/true/false | true                                |
| showLinkIconInDescription  | 是否展示正文中的链接图标                                           | 0/1/true/false | true                                |
| preferMobileLink           | 是否使用移动版链接（默认使用 PC 版）                               | 0/1/true/false | false                               |

### 博主
举例：https://rsshub.guidebook.top/weibo/user/1195230310
路由：/weibo/user/:uid/:routeParams?
参数：
uid，必选 — 用户 id, 博主主页打开控制台执行 $CONFIG.oid 获取
routeParams，可选 — 额外参数；请参阅上面的说明和表格；特别地，当 routeParams=1 时开启微博视频显示
部分博主仅登录可见，不支持订阅，可以通过打开 https://m.weibo.cn/u/:uid 验证
### 关键词
举例：https://rsshub.guidebook.top/weibo/keyword/DIYgod
路由：/weibo/keyword/:keyword/:routeParams?
参数：
keyword，必选 — 你想订阅的微博关键词
routeParams，可选 — 额外参数；请参阅上面的说明和表格
### 热搜榜
举例：https://rsshub.guidebook.top/weibo/search/hot
路由：/weibo/search/hot
参数：无
### 超话
举例：https://rsshub.guidebook.top/weibo/super_index/1008084989d223732bf6f02f75ea30efad58a9/sort_time
路由：/weibo/super_index/:id/:type?/:routeParams?
参数：
id，必选 — 超话ID
type，可选 — 类型：见下表
routeParams，可选 — 额外参数；请参阅上面的说明和表格
| type      | 备注             |
| --------- | ---------------- |
| soul      | 精华             |
| video     | 视频（暂不支持） |
| album     | 相册（暂不支持） |
| hot_sort  | 热门             |
| sort_time | 最新帖子         |
| feed      | 最新评论         |
