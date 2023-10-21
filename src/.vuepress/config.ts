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
      apiKey: "ccc6fad1a880e4255c2cbf8c32b0f7e9",
      indexName: "waystoworkio",
    }),
  ],
  

  // Enable it with pwa
  // shouldPrefetch: false,
});
