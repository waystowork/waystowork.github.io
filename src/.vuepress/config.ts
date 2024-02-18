import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { defineUserConfig } from "vuepress/cli";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
head: [
    // 添加百度统计
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?4195ec3871b3ca715e1edea49ea0685f";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
        `
    ],
	[
      "script",
      {},
      `
      var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?3a40a37dc0b02aba707a70320b520b52";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
        `
    ],
  ],
  lang: "zh-CN",
  title: "数字生活指南知识库",
  description: "数字生活指南知识库Guidebook.top",

  theme,

  plugins: [
    docsearchPlugin({
      appId: "9RG6PS53WQ",
      apiKey: "ccc6fad1a880e4255c2cbf8c32b0f7e9",
      indexName: "waystoworkio",
	  locales: {
	          "/": {
	            placeholder: "搜索文档",
	            translations: {
	              button: {
	                buttonText: "搜索文档",
	                buttonAriaLabel: "搜索文档",
	              },
	              modal: {
	                searchBox: {
	                  resetButtonTitle: "清除查询条件",
	                  resetButtonAriaLabel: "清除查询条件",
	                  cancelButtonText: "取消",
	                  cancelButtonAriaLabel: "取消",
	                },
	                startScreen: {
	                  recentSearchesTitle: "搜索历史",
	                  noRecentSearchesText: "没有搜索历史",
	                  saveRecentSearchButtonTitle: "保存至搜索历史",
	                  removeRecentSearchButtonTitle: "从搜索历史中移除",
	                  favoriteSearchesTitle: "收藏",
	                  removeFavoriteSearchButtonTitle: "从收藏中移除",
	                },
	                errorScreen: {
	                  titleText: "无法获取结果",
	                  helpText: "你可能需要检查你的网络连接",
	                },
	                footer: {
	                  selectText: "选择",
	                  navigateText: "切换",
	                  closeText: "关闭",
	                  searchByText: "搜索提供者",
	                },
	                noResultsScreen: {
	                  noResultsText: "无法找到相关结果",
	                  suggestedQueryText: "你可以尝试查询",
	                  reportMissingResultsText: "你认为该查询应该有结果？",
	                  reportMissingResultsLinkText: "点击反馈",
	                },
	              },
	            },
	          },
	        },
    }),
  ],
  

  // Enable it with pwa
  // shouldPrefetch: false,
});
