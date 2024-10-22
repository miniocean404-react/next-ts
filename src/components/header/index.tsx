"use client"

import React, { useEffect, useRef, useState } from "react"
import styles from "./index.module.scss"
import { useTheme } from "next-themes"
import type { MouseEvent } from "react"
import Image from "next/image"
import { APP_DEFAULT_TITLE } from "@/constant/app"
import { useHotkeys } from "react-hotkeys-hook"
import { useTranslations } from "next-intl"
import SearchIcon from "~/public/svg/search.svg"
import classnames from "classnames"
import Link from "next/link"
import { UAParser } from "ua-parser-js"
import { userAgent } from "next/server"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const t = useTranslations("home")
  const [parser, setParser] = useState<UAParser.UAParserInstance>()

  useHotkeys("ctrl+k", openSearch, [], { preventDefault: true })

  useEffect(() => {
    setParser(new UAParser(navigator.userAgent))
  }, [])

  function openSearch() {
    console.log("打开搜索")
  }

  const toggle = async (e: MouseEvent<HTMLDivElement>) => {
    const isDark = theme === "dark"
    const x = e.clientX
    const y = e.clientY
    const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]

    if (!document.startViewTransition) {
      return setTheme(isDark ? "light" : "dark")
    }

    const transition = document.startViewTransition(() => {
      setTheme(isDark ? "light" : "dark")
    })

    await transition.ready

    document.documentElement.animate(
      {
        clipPath: isDark ? [...clipPath].reverse() : clipPath,
      },
      {
        delay: 0,
        endDelay: 0,
        duration: 500,
        easing: "ease-in-out",
        // pseudoElement 将动画效果定在伪元素上
        pseudoElement: isDark ? "::view-transition-old(root)" : "::view-transition-new(root)",
      },
    )
  }

  return (
    <>
      <header className={styles.container}>
        <div className={styles.center}>
          <Link className={styles.title} href={"/zh"}>
            <Image className={styles.logo} src={"/svg/love.svg"} alt={"logo"} width={24} height={24}></Image>
            <span>{APP_DEFAULT_TITLE}</span>
          </Link>

          <div className={styles.content}>
            <div className={styles.searchBox}>
              <div className={classnames(styles.search, "transition")}>
                <SearchIcon className={classnames(styles.searchIcon, "transition")}></SearchIcon>
                <span className={classnames(styles.searchText, "transition")}>{t("search")}</span>

                <span className={styles.shortcut}>
                  <kbd className={styles.mainShortcut}>
                    {parser?.getOS().name === "Mac OS" ? "⌘" : ""}
                    {parser?.getOS().name !== "Mac OS" ? "Ctrl" : ""}
                  </kbd>
                  <kbd>K</kbd>
                </span>
              </div>
            </div>

            <div className={styles.nav}>
              <div className={classnames(styles.sub, "transition")}>指引</div>
              <div className={classnames(styles.sub, "transition")}>配置</div>
              <div className={classnames(styles.sub, "transition")} onClick={toggle}>
                主题切换
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.rainbow}></div>
    </>
  )
}
