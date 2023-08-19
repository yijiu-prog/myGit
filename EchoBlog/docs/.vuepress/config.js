module.exports = {
  title: "Echo",
  description: "my Blog",
  base: "/myGit/",
  //   theme: "@vuepress/blog",
  themeConfig: {
    sidebar: [
      {
        title: "工具", // 必要的
        // path: "/tools/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [{ title: "nvm", path: "/tools/nvm" }],
      },
    ],
  },
};
