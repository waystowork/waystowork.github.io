---
title: 豆瓣
icon: iconfont icon-shejiaotubiao-48
order: 2
category:
  - Rsshub
tag:
  - Rsshub
---

## 豆瓣
### 正在上映的电影
举例：https://rsshub.guidebook.top/douban/movie/playing
路由：`/douban/movie/playing`
参数：无
### 正在上映的高分电影
举例：https://rsshub.guidebook.top/douban/movie/playing/7.5
路由：`/douban/movie/playing/:score`
参数：
`score`，必选 — 返回大于等于这个分数的电影
### 即将上映的电影
举例：https://rsshub.guidebook.top/douban/movie/later
路由：`/douban/movie/later`
参数：无
### 北美票房榜
举例：https://rsshub.guidebook.top/douban/movie/ustop
路由：`/douban/movie/ustop`
参数：无
### 一周口碑榜
举例：https://rsshub.guidebook.top/douban/movie/weekly
路由：`/douban/movie/weekly/:type?`
参数：
`type`，可选 — 分类，可在榜单页 URL 中找到，默认为一周口碑电影榜
| 一周口碑电影榜    | 华语口碑剧集榜         |
| ----------------- | ---------------------- |
| movie_weekly_best | tv_chinese_best_weekly |
### 豆瓣电影分类
举例：https://rsshub.guidebook.top/douban/movie/classification/R/7.5/Netflix,剧情,2020
路由：`/douban/movie/classification/:sort?/:score?/:tags?`
参数：
`sort`，可选 — 排序方式，默认为U
`score`，可选 — 最低评分，默认不限制
`tags`，可选 — 分类标签，多个标签之间用英文逗号分隔，常见的标签到豆瓣电影的分类页面查看，支持自定义标签
排序方式可选值如下
| 近期热门 | 标记最多 | 评分最高 | 最近上映 |
| -------- | -------- | -------- | -------- |
| U        | T        | S        | R        |
### 豆瓣电影人
举例：https://rsshub.guidebook.top/douban/celebrity/1274261
路由：`/douban/celebrity/:id/:sort?`
参数：
`id`，必选 — 电影人 id
`sort`，可选 — 排序方式，缺省为 time（时间排序），可为 vote （评价排序）
### 豆瓣小组
反爬严格
举例：https://rsshub.guidebook.top/douban/group/648102
路由：/douban/group/:groupid/:type?
参数：
`groupid`，必选 — 豆瓣小组的 id
`type`，可选 — 缺省 最新，essence 最热，elite 精华
### 浏览发现
举例：https://rsshub.guidebook.top/douban/explore
路由：`/douban/explore`
参数：无
### 浏览发现分栏目
举例：https://rsshub.guidebook.top/douban/explore/column/2
路由：`/douban/explore_column/:id`
参数：
`id`，必选 — 分栏目id
### 新书速递
举例：https://rsshub.guidebook.top/douban/book/latest
路由：`douban/book/latest`
参数：无
### 最新增加的音乐
举例：https://rsshub.guidebook.top/douban/music/latest/chinese
路由：`/douban/music/latest/:area?`
参数：
`area`，可选 — 区域类型，默认全部
| 华语    | 欧美    | 日韩        |
| ------- | ------- | ----------- |
| chinese | western | japankorean |
### 热门同城活动
举例：https://rsshub.guidebook.top/douban/event/hot/118172
路由：`/douban/event/hot/:locationId`
参数：
`locationId`，必选 — 位置 id, 同城首页打开控制台执行 window.__loc_id__ 获取
### 商务印书馆新书速递
举例：https://rsshub.guidebook.top/douban/commercialpress/latest
路由：`/douban/commercialpress/latest`
参数：无
### 豆瓣书店
举例：https://rsshub.guidebook.top/douban/bookstore
路由：`/douban/bookstore`
参数：无
### 热门图书排行
举例：https://rsshub.guidebook.top/douban/book/rank/fiction
路由：`/douban/book/rank/:type?`
参数：
type，可选 — 图书类型，默认合并列表
| 全部 | 虚构    | 非虚构     |
| ---- | ------- | ---------- |
|      | fiction | nonfiction |
### 豆列
举例：https://rsshub.guidebook.top/douban/doulist/37716774
路由：`douban/doulist/:id`
参数：
`id`，必选 — 豆列id
### 用户广播
举例：https://rsshub.guidebook.top/douban/people/62759792/status
路由：`douban/people/:userid/status/:routeParams`
参数：
`userid`，必选 — 整数型用户 id
`routeParams`，必选 — 额外参数；见下
:::tip

-   **目前只支持整数型 id**
-   字母型的 id，可以通过头像图片链接来找到其整数型 id，图片命名规则`ul[userid]-*.jpg`或`u[userid]-*.jpg`，即取文件名中间的数字
-   例如：用户 id: `MovieL`他的头像图片链接：`https://img1.doubanio.com/icon/ul1128221-98.jpg`他的整数型 id: `1128221`

:::

对于豆瓣用户广播内容，在 `routeParams` 参数中以 query string 格式设置如下选项可以控制输出的样式

| 键                         | 含义                                                           | 接受的值       | 默认值 |
| -------------------------- | -------------------------------------------------------------- | -------------- | ------ |
| readable                   | 是否开启细节排版可读性优化                                     | 0/1/true/false | false  |
| authorNameBold             | 是否加粗作者名字                                               | 0/1/true/false | false  |
| showAuthorInTitle          | 是否在标题处显示作者                                           | 0/1/true/false | true   |
| showAuthorInDesc           | 是否在正文处显示作者                                           | 0/1/true/false | false  |
| showAuthorAvatarInDesc     | 是否在正文处显示作者头像（若阅读器会提取正文图片，不建议开启） | 0/1/true/false | false  |
| showEmojiForRetweet        | 显示 “🔁” 取代 “Fw”（转发）                                    | 0/1/true/false | false  |
| showRetweetTextInTitle     | 在标题出显示转发评论（置为 false 则在标题只显示被转发的广播）  | 0/1/true/false | false  |
| addLinkForPics             | 为图片添加可点击的链接                                         | 0/1/true/false | false  |
| showTimestampInDescription | 在正文处显示广播的时间戳                                       | 0/1/true/false | false  |
| showComments               | 在正文处显示评论                                               | 0/1/true/false | false  |
| widthOfPics                | 广播配图宽（生效取决于阅读器）                                 | 不指定 / 数字  | 不指定 |
| heightOfPics               | 广播配图高（生效取决于阅读器）                                 | 不指定 / 数字  | 不指定 |
| sizeOfAuthorAvatar         | 作者头像大小                                                   | 数字           | 48     |

指定更多与默认值不同的参数选项可以改善 RSS 的可读性
### 日记最新回应
举例：https://rsshub.guidebook.top/douban/replies/xiaoyaxiaoya
路由：`/douban/replies/:uid`
参数：
`uid`，必选 — 用户id，可在用户日记页 URL 中找到
### 最新回应过的日记
举例：https://rsshub.guidebook.top/douban/replied/xiaoyaxiaoya
路由：`/douban/replied/:uid`
参数：
`uid`，必选 — 用户id，可在用户日记页 URL 中找到
### 话题
举例：https://rsshub.guidebook.top/douban/topic/48823
路由：`/douban/topic/:id/:sort?`
参数：
`id`，必选 — 话题id
`sort`，可选 — 排序方式，hot或new，默认为new
### 频道专题
举例：https://rsshub.guidebook.top/douban/channel/30168934/hot
路由：`/douban/channel/:id/:nav?`
参数：
`id`，必选 — 频道id
`nav`，可选 — 专题分类，可选，默认为 default
| 默认    | 热门 | 最新 |
| ------- | ---- | ---- |
| default | hot  | new  |
### 频道书影音
举例：https://rsshub.guidebook.top/douban/channel/30168934/subject/0
路由：`/douban/channel/:id/subject/:nav`
参数：
`id`，必选 — 频道id
`nav`，必选 — 书影音分类
| 电影 | 电视剧 | 图书 | 唱片 |
| ---- | ------ | ---- | ---- |
| 0    | 1      | 2    | 3    |
### 用户想看
举例：https://rsshub.guidebook.top/douban/people/exherb/wish
路由：`/douban/people/:userid/wish/:routeParams?`
参数：
`userid`，必选 — 用户id
`routeParams`，可选 — 额外参数；见下
对于豆瓣用户想看的内容，在 routeParams 参数中以 query string 格式设置如下选项可以控制输出的样式
| 键         | 含义       | 接受的值 | 默认值 |
| ---------- | ---------- | -------- | ------ |
| pagesCount | 查询页面数 |          | 1      |
### 豆瓣招聘
举例：https://rsshub.guidebook.top/douban/jobs/campus
路由：`/douban/jobs/:type`
参数：
`type`，必选 — 招聘类型，见下表
| 社会招聘 | 校园招聘 | 实习生招聘 |
| :------: | :------: | :--------: |
|  social  |  campus  |   intern   |
### 榜单与集合
举例：https://rsshub.guidebook.top/douban/list/subject_real_time_hotest
路由：`/douban/list/:type?`
参数：
`type`，可选 — 榜单类型，见下表。默认为实时热门书影音
| 榜单 / 集合        | 路由（type）               |
| ------------------ | -------------------------- |
| 实时热门书影音     | subject_real_time_hotest   |
| 影院热映           | movie_showing              |
| 实时热门电影       | movie_real_time_hotest     |
| 实时热门电视       | tv_real_time_hotest        |
| 一周口碑电影榜     | movie_weekly_best          |
| 华语口碑剧集榜     | tv_chinese_best_weekly     |
| 全球口碑剧集榜     | tv_global_best_weekly      |
| 国内口碑综艺榜     | show_chinese_best_weekly   |
| 国外口碑综艺榜     | show_global_best_weekly    |
| 虚构类小说热门榜   | book_fiction_hot_weekly    |
| 非虚构类小说热门榜 | book_nonfiction_hot_weekly |
| 热门单曲榜         | music_single               |
| 华语新碟榜         | music_chinese              |
| ...                | ...                        |
> 上面的榜单 / 集合并没有列举完整。
>
> 如何找到榜单对应的路由参数：
> 在豆瓣手机 APP 中，对应地榜单页面右上角，点击分享链接。链接路径 `subject_collection` 后的路径就是路由参数 `type`。
> 如：小说热门榜的分享链接为：`https://m.douban.com/subject_collection/ECDIHUN4A`，其对应本 RSS 路由的 `type` 为 `ECDIHUN4A`，对应的订阅链接路由：[`/douban/list/ECDIHUN4A`](https://rsshub.guidebook.top/douban/list/ECDIHUN4A)