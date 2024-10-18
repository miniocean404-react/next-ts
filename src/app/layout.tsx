import { APP_DEFAULT_TITLE, APP_DESCRIPTION, APP_NAME, APP_TITLE_TEMPLATE } from "@/constant/app"
import ReactLenis from "lenis/react"
import type { Metadata } from "next"
import { getLocale } from "next-intl/server"
import { ThemeProvider } from "next-themes"
import localFont from "next/font/local"

// 在页面中也可以设置专属页面 metadata，并与顶级 metadata 进行merge
export const metadata: Metadata = {
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  keywords: "博客，我是小海洋呀，Isaac Wang, Javascript, Vue, Css, Nextjs, React, TypeScript, NextJs, NestJs, Nodejs, Docker, web3，区块链",
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  category: "分类",
  abstract: "摘要",
  creator: "我是小海洋呀（isaac wang）",
  authors: [{ url: "https://github.com/wanghao1993", name: "我是小海洋呀（isaac wang）" }],
  publisher: "我是小海洋呀（isaac wang）",

  // 当网站被分享到社交媒体时，会显示的信息,可以通过 根文件或者 Next Metadata 设置
  // OpenGraph，又叫 OG 协议，可以简单的看一下介绍。https://segmentfault.com/a/1190000040863000
  // Twitter 卡片标签看上去与开放图谱标签相似，基于与开放图谱协议相同的约定。当使用开放图谱协议描述页面上的数据时，很容易生成 Twitter 卡片，而无需复制标签和数据。当 Twitter 卡片处理器在页面上寻找标签时，它会首先检查 Twitter 特定的属性；如果不存在，则会返回受支持的开放图谱属性。它允许在页面上独立定义这两种属性，并最大程度减少描述内容和体验所需的标记复制量。
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
}

// 使用next/font来加载谷歌字体，而不是在css到声明字体，因为它帮我们优化了字体的加载，很方便使用各种各样的字体
const miSansFont = localFont({
  src: "../../public/font/MiSans VF.ttf",
  // 就是 css font-display
  display: "swap",
  weight: "400",
  variable: "--MiSans",
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale()

  return (
    // suppressHydrationWarning：关闭水合不匹配报错
    <html suppressHydrationWarning lang={locale}>
      <body className={miSansFont.className}>
        {/* 切换：const { theme, setTheme } = useTheme(); */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ReactLenis root options={{ gestureOrientation: "both" }}>
            {children}
          </ReactLenis>
        </ThemeProvider>
      </body>
    </html>
  )
}