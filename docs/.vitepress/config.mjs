import { defineConfig } from 'vitepress'

const head = [
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/mozart-k332/logo.svg' }],
  ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover' }]
]

export default defineConfig({
  title: '莫札特 K. 332 第一樂章讀本',
  description: '專為演奏者與愛樂者設計的深度導讀與風格結構探索',
  base: '/mozart-k332/',
  head,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首頁（導讀）', link: '/' },
      { text: '開始閱讀', link: '/chapters/CORE_M1_SECTION_1' },
      { text: '資料與製作說明', link: '/appendix/SOURCES_AND_PRODUCTION_NOTE' },
      { text: '主要參考文獻', link: '/appendix/REFERENCES' },
      { text: '🔖 閱讀預覽 v0.1.1 (2026-09-09)', link: '/appendix/SOURCES_AND_PRODUCTION_NOTE' }
    ],
    sidebar: [
      {
        text: '📖 導讀首頁',
        items: [
          {
            text: '<div class="sb-item"><strong class="sb-title">莫札特 K. 332 第一樂章</strong><span class="sb-sub">換了神情，方向在哪裡？</span></div>',
            link: '/'
          }
        ]
      },
      {
        text: '第一樂章：六章完整導讀',
        collapsed: false,
        items: [
          {
            text: '<div class="sb-item"><strong class="sb-title">第一章：換了神情，仍接得住同一句話</strong><span class="sb-sub">mm.1–22｜歌唱、模仿、舞步與號角</span></div>',
            link: '/chapters/CORE_M1_SECTION_1'
          },
          {
            text: '<div class="sb-item"><strong class="sb-title">第二章：表面起了風，方向仍可以追</strong><span class="sb-sub">mm.22–70｜狂飆、半音低音、吉他與性格轉換</span></div>',
            link: '/chapters/CORE_M1_SECTION_2'
          },
          {
            text: '<div class="sb-item"><strong class="sb-title">第三章：句號到了，為什麼還想往下聽？</strong><span class="sb-sub">mm.71–93｜多次終止的期待與呈示部收束</span></div>',
            link: '/chapters/CORE_M1_SECTION_3'
          },
          {
            text: '<div class="sb-item"><strong class="sb-title">第四章：穿過亮處，期待仍留在高處</strong><span class="sb-sub">mm.94–132｜發展部的調性穿梭與高音懸念</span></div>',
            link: '/chapters/CORE_M1_SECTION_4'
          },
          {
            text: '<div class="sb-item"><strong class="sb-title">第五章：回來的地方，有哪些真的改變？</strong><span class="sb-sub">mm.133–206｜再現部的對照與未變之處</span></div>',
            link: '/chapters/CORE_M1_SECTION_5'
          },
          {
            text: '<div class="sb-item"><strong class="sb-title">第六章：期待轉了彎，怎樣走到句末？</strong><span class="sb-sub">mm.207–229｜尾聲的收束、ossia 與整章回顧</span></div>',
            link: '/chapters/CORE_M1_SECTION_6'
          }
        ]
      },
      {
        text: '附錄',
        collapsed: false,
        items: [
          {
            text: '<div class="sb-item"><strong class="sb-title">資料來源與製作說明</strong><span class="sb-sub">學術來源、證據界線與 AI 協作聲明</span></div>',
            link: '/appendix/SOURCES_AND_PRODUCTION_NOTE'
          },
          {
            text: '<div class="sb-item"><strong class="sb-title">主要參考文獻</strong><span class="sb-sub">譜本、專著、論文與研究資料</span></div>',
            link: '/appendix/REFERENCES'
          }
        ]
      }
    ],
    docFooter: {
      prev: '← 上一章',
      next: '下一章 →'
    },
    outline: {
      label: '本章目錄',
      level: [2, 3]
    },
    lastUpdated: {
      text: '最後更新於',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
    footer: {
      message: '莫札特 F 大調鋼琴奏鳴曲 K. 332 第一樂章讀本 · 閱讀預覽 v0.1.1（2026-09-09）',
      copyright: '作者｜鄒年城'
    }
  }
})
