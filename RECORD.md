# 学习视频、文档

next14: https://www.bilibili.com/video/BV157pRe8EyD/?spm_id_from=333.337.search-card.all.click
中文文档：https://next.nodejs.cn/docs

# 文章

## 跨域

1. 跨域: https://juejin.cn/post/7366177423775531008?share_token=fc72ebf6-93f2-43e6-9678-6b4fc608378d
2. 跨域 14: https://juejin.cn/post/7338808893529276427?share_token=71e1c1b3-9327-476d-8667-dcdfdf7b0ba9

## 国际化

1. 国际化 App Router i18next: https://juejin.cn/post/7388818047753109558?searchId=202410122117469648FD949604B0CFEBF9
2. 国际化 Page Router i18next: https://juejin.cn/post/7317201268191428643?searchId=202410122117469648FD949604B0CFEBF9
3. 国际化 App Router 原生实现：https://juejin.cn/post/7380694342744735782
4. 国际化 App Router next-intl：https://juejin.cn/post/7353280369360896051?searchId=20241013010453F251E19508D59DD47884

## 入门

1. NextJs 14 从入门到精通：https://juejin.cn/post/7386873708601032754?share_token=1281ba4a-2fa2-49ad-8d36-e14e39bf77c7
2. 给上市公司从 0 到 1 搭建 Next.js14 项目: https://juejin.cn/post/7344571324305981503?searchId=20241012163249920A7C5DFBA494AB538D#heading-28
3. NextJs 14 从入门到精通: https://juejin.cn/post/7386873708601032754?searchId=202410121658107D42828C6191F9A45AFC
4. 2024 Nextjs 开发资源最佳组合 :https://juejin.cn/post/7393185863654260777?share_token=0ad84dd7-a257-4fae-818f-919b8460c6de
5. NextJs 从 0-1 实现一个博客系统，万字长文: https://juejin.cn/post/7398350653355950119?searchId=2024101316595559FB7FCA51677527D51A

## 功能

1. m3u8:https://juejin.cn/post/7382966707060703268?share_token=91713cfd-d861-496c-bdc0-db4ea0e75844

# cli

```shell
# 开启实验性 https
next dev --experimental-https
```

# SEO

1. OpenGraph，又叫 OG 协议：https://segmentfault.com/a/1190000040863000
2. Twitter 卡片标签看上去与开放图谱标签相似，基于与开放图谱协议相同的约定。当使用开放图谱协议描述页面上的数据时，很容易生成 Twitter 卡片，而无需复制标签和数据。当 Twitter 卡片处理器在页面上寻找标签时，它会首先检查 Twitter 特定的属性；如果不存在，则会返回受支持的开放图谱属性。它允许在页面上独立定义这两种属性，并最大程度减少描述内容和体验所需的标记复制量。

# tailwindcss

1. 快速掌握 Tailwind：最流行的原子化 CSS 框架（神说光）：https://juejin.cn/post/7231539903649398843?share_token=46882d88-1374-4aa4-84b7-4259040113b1

## 自定义 tailwindcss 插件

```ts
const plugin = require("tailwindcss/plugin")

module.exports = plugin(function ({ addUtilities }) {
  addUtilities({
    ".guang": {
      background: "blue",
      color: "yellow",
    },
    ".guangguang": {
      "font-size": "70px",
    },
  })
})

// 在 tailwind.config.ts 中引入
const config: Config = {
  plugins: [require("./xx")],
}

// 就可以在 html 中使用 <div className="gunag gunagguang"></div>
// 插件的方式或者 @layer 的方式都可以扩展。
```

# vercel.json 文档

- https://vercel.com/docs/projects/project-configuration

# SEO

## Google 搜索引擎优化

1. Google搜索成最大入口，简单谈下个人博客的SEO: https://juejin.cn/post/6844904050740166663?searchId=20241025005109B96F36B1CDFA183710E9
