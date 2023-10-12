---
title: 知乎
icon: iconfont icon-shejiaotubiao-46
order: 2
category:
  - Rsshub
tag:
  - Rsshub
---
## 知乎
### 收藏夹
反爬严格
举例：https://rsshub.guidebook.top/zhihu/collection/26444956
路由：`/zhihu/collection/:id/:getAll?`
参数：
`id`，必选 — 收藏夹 id, 可在收藏夹页面 URL 中找到
`getAll`，可选 — 获取全部收藏内容，任意值为打开
### 用户动态
反爬严格
举例：https://rsshub.guidebook.top/zhihu/people/activities/diygod
路由：`/zhihu/people/activities/:id`
参数：
id，必选 — 作者 id, 可在用户主页 URL 中找到
### 用户回答
举例：https://rsshub.guidebook.top/zhihu/people/answers/diygod
路由：/zhihu/people/answers/:id
参数：
id，必选 — 作者 id, 可在用户主页 URL 中找到
### 用户文章
反爬严格
举例：https://rsshub.guidebook.top/zhihu/posts/people/frederchen
路由：/zhihu/posts/:usertype/:id
参数：
usertype，必选 — 作者 id, 可在用户主页 URL 中找到
id，必选 — 用户类型usertype，参考用户主页的URL。目前有两种，见下表
| 普通用户 | 机构用户 |
| -------- | -------- |
| people   | org      |
### 专栏
反爬严格
举例：https://rsshub.guidebook.top/zhihu/zhuanlan/googledevelopers
路由：/zhihu/zhuanlan/:id
参数：
id，必选 — 专栏 id, 可在专栏主页 URL 中找到
### 知乎日报
反爬严格
举例：https://rsshub.guidebook.top/zhihu/daily
路由：/zhihu/daily
参数：无
### 知乎日报 - 合集
反爬严格
举例：https://rsshub.guidebook.top/zhihu/daily/section/2
路由：/zhihu/daily/section/:sectionId
参数：
sectionId，必选 — 合集 id, 可在 https://news-at.zhihu.com/api/7/sections 找到
### 知乎热榜
反爬严格
举例：https://rsshub.guidebook.top/zhihu/hotlist
路由：/zhihu/hotlist
参数：无
### 知乎分类热榜
反爬严格
举例：https://rsshub.guidebook.top/zhihu/hot
路由：/zhihu/hot/:category?
参数：
category，可选 — 分类，见下表，默认为全站
| 全站  | 国际  | 科学    | 汽车 | 视频   | 时尚    | 时事  | 数码    | 体育  | 校园   | 影视 |
| ----- | ----- | ------- | ---- | ------ | ------- | ----- | ------- | ----- | ------ | ---- |
| total | focus | science | car  | zvideo | fashion | depth | digital | sport | school | film |
### 知乎想法热榜
反爬严格
举例：https://rsshub.guidebook.top/zhihu/pin/hotlist
路由：/zhihu/pin/hotlist
参数：无
### 问题
反爬严格
举例：https://rsshub.guidebook.top/zhihu/question/59895982
路由：/zhihu/question/:questionId/:sortBy?
参数：
questionId，必选 — 问题 id
sortBy，可选 — 排序方式：default, created, updated。默认为 default
### 话题
反爬严格
作者：@xyqfer
举例：https://rsshub.guidebook.top/zhihu/topic/19828946
路由：/zhihu/topic/:topicId
参数：
topicId，必选 — 话题 id
### 用户想法
反爬严格
举例：https://rsshub.guidebook.top/zhihu/people/pins/kan-dan-45
路由：/zhihu/people/pins/:id
参数：
id，必选 — 作者 id, 可在用户主页 URL 中找到
### 知乎书店 - 新书
反爬严格
举例：https://rsshub.guidebook.top/zhihu/bookstore/newest
路由：/zhihu/bookstore/newest
参数：无
### 知乎想法 - 24 小时新闻汇总
反爬严格
举例：https://rsshub.guidebook.top/zhihu/pin/daily
路由：/zhihu/pin/daily
参数：无
### 知乎书店 - 知乎周刊
反爬严格
举例：https://rsshub.guidebook.top/zhihu/weekly
路由：/zhihu/weekly
参数：无
