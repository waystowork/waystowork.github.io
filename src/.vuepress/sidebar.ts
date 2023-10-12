import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/":"structure",
  
  "/laws/": [
    "",
    {
      text: "宪法",
      icon: "laptop-code",
      prefix: "宪法/",
      link: "宪法/",
	  /*侧边栏是否折叠*/
	  collapsible: true,
      children: "structure",
    },
    {
      text: "宪法相关法",
      icon: "book",
      prefix: "宪法相关法/",
	  /*侧边栏是否折叠*/
	  collapsible: true,
      children: "structure",
    },
	{
	  text: "公共法律",
	  icon: "book",
	  prefix: "公共法律/",
	  /*侧边栏是否折叠*/
	  collapsible: true,
	  children: "structure",
	},
	{
	  text: "城市管理",
	  icon: "book",
	  prefix: "城市管理/",
	  /*侧边栏是否折叠*/
	  collapsible: true,
	  children: "structure",
	},
	{
	  text: "自然资源",
	  icon: "book",
	  prefix: "自然资源/",
	  /*侧边栏是否折叠*/
	  collapsible: true,
	  children: "structure",
	},
	{
	  text: "住建",
	  icon: "book",
	  prefix: "住建/",
	  /*侧边栏是否折叠*/
	  collapsible: true,
	  children: "structure",
	},
	{
	  text: "应急管理",
	  icon: "book",
	  prefix: "应急管理/",
	  /*侧边栏是否折叠*/
	  collapsible: true,
	  children: "structure",
	},
	{
	  text: "交通运输",
	  icon: "book",
	  prefix: "交通运输/",
	  /*侧边栏是否折叠*/
	  collapsible: true,
	  children: "structure",
	},
	{
	  text: "农业农村",
	  icon: "book",
	  prefix: "农业农村/",
	  /*侧边栏是否折叠*/
	  collapsible: true,
	  children: "structure",
	},
	{
	  text: "商务",
	  icon: "book",
	  prefix: "商务/",
	  /*侧边栏是否折叠*/
	  collapsible: true,
	  children: "structure",
	},
	{
	  text: "生态环境",
	  icon: "book",
	  prefix: "生态环境/",
	  /*侧边栏是否折叠*/
	  collapsible: true,
	  children: "structure",
	},
	{
	  text: "市场监管",
	  icon: "book",
	  prefix: "市场监管/",
	  /*侧边栏是否折叠*/
	  collapsible: true,
	  children: "structure",
	},
	{
	  text: "税务",
	  icon: "book",
	  prefix: "税务/",
	  /*侧边栏是否折叠*/
	  collapsible: true,
	  children: "structure",
	},
	{
	  text: "卫生健康",
	  icon: "book",
	  prefix: "卫生健康/",
	  /*侧边栏是否折叠*/
	  collapsible: true,
	  children: "structure",
	},
	{
	  text: "文化市场",
	  icon: "book",
	  prefix: "文化市场/",
	  /*侧边栏是否折叠*/
	  collapsible: true,
	  children: "structure",
	},
	{
	  text: "刑法",
	  icon: "book",
	  prefix: "刑法/",
	  /*侧边栏是否折叠*/
	  collapsible: true,
	  children: "structure",
	},
	{
	  text: "司法解释",
	  icon: "book",
	  prefix: "司法解释/",
	  /*侧边栏是否折叠*/
	  collapsible: true,
	  children: "structure",
	},
	
  ],
  "/rsshub/":"structure",
  
    
});
