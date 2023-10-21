import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "数字生活指南知识库",
  description: "数字生活指南知识库Guidebook.top",

  theme,

  plugins: [
    docsearchPlugin({
      appId: "9RG6PS53WQ",
      apiKey: "39b3378421710afdc1ec32fdd2da0c8d",
      indexName: "waystoworkio",
    }),
  ],
  

  // Enable it with pwa
  // shouldPrefetch: false,
});
