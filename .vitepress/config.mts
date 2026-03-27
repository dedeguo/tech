import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// 使用 withMermaid 包裹原本的 defineConfig
export default withMermaid({
  // 这里放您之前的全部配置 (title, themeConfig 等)
  title: "软件开发技术文档",
  description: "软件开发技术文档 - 教学文档库",
  //自定义域名 将 base 从 '/tech/' 改为 '/'
  base: '/',
  
  // Mermaid 特有配置（可选）
  mermaid: {
    // 设置主题，也可以根据 VitePress 的深色模式自动切换
    // theme: 'default', 
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      
      { text: '首页', link: '/' },
      { 
        text: '课程大纲', 
        items: [
          { text: '教学大纲', link: '/doc/chapter01/01-env-setup' },
          { text: '考核方案', link: '/doc/chapter01/02-maven-git' }
        ]
      },
      { text: '电子教材', link: '/doc' },
      // { text: '项目案例', link: '/projects/yudao' },
      // { text: '常用工具', link: '/resources/tools' }
    
    ],

    // 2. 侧边栏：采用分组模式，方便学生按章节查找
    sidebar: {
      '/doc/': [
        {
          text: '第一篇｜开发环境与效能工具',
          collapsed: true,
          items: [
            { text: '开发环境安装', link: '/doc/chapter01/01-env-setup' },
            { text: '工程化基石：Git与Maven', link: '/doc/chapter01/02-maven-git' }
          ]
        },
        {
          text: '第二篇｜Web 底层原理',
          collapsed: true,
          items: [
            { text: 'HTTP 协议与调试工具', link: '/doc/chapter02/01-http-protocol' },
            { text: 'Servlet 基础', link: '/doc/chapter02/02-servlet-basics' },
            { text: '请求与响应 (Req & Resp)', link: '/doc/chapter02/03-request-response' }
          ]
        },
      ],
      '/projects/': [
        {
          text: '企业级实战',
          items: [
            { text: '基于 Yudao 框架的二次开发', link: '/projects/yudao' },
            { text: '前后端分离项目部署', link: '/projects/deploy' }
          ]
        }
      ]
    },

  

    // 4. 文档页内搜索（本地索引）
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: { noResultsText: '无法找到相关结果', resetButtonTitle: '清除查询条件' }
            }
          }
        }
      }
    },
// 文档更新时间前缀
    lastUpdatedText: '最后更新于',

    // 文章翻页按钮
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    // 5. 底部版权信息：体现教研身份
    footer: {
      message: '学而不厌，诲人不倦',
      copyright: 'Copyright © 2025-present 陈德 | 软件开发技术文档'
    },

    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/javaweb-dev-tech' },
      // { 
      //   // 这里自定义 Gitee 图标
      //   icon: {
      //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.984 0A12.006 12.006 0 0 0 0 12a12.006 12.006 0 0 0 12 12 12.006 12.006 0 0 0 12-12A12.006 12.006 0 0 0 11.984 0zM10.5 16.5h-3v-9h9v3h-6v3h6v3h-6z"/></svg>'
      //   }, 
      //   link: 'https://gitee.com/javaweb-dev-tech' 
      // }
    ]
  }
})
// https://vitepress.dev/reference/site-config
// export default defineConfig({
//   title: "Java Web 开发技术",
//   description: "武汉商学院 - 计算机与自动化学院 - 教学文档库",

//   // Mermaid 特有配置（可选）
//   mermaid: {
//     // 设置主题，也可以根据 VitePress 的深色模式自动切换
//     // theme: 'default', 
//   },
//   themeConfig: {
//     // https://vitepress.dev/reference/default-theme-config
//     nav: [
      
//       { text: '首页', link: '/' },
//       { 
//         text: '课程大纲', 
//         items: [
//           { text: '教学大纲', link: '/chapter01/01-env-setup' },
//           { text: '考核方案', link: '/chapter01/02-maven-git' }
//         ]
//       },
//       { text: '电子教材', link: '/doc' },
//       { text: '项目案例', link: '/projects/yudao' },
//       { text: '常用工具', link: '/resources/tools' }
    
//     ],

//     // 2. 侧边栏：采用分组模式，方便学生按章节查找
//     sidebar: {
//       '/doc/': [
//         {
//           text: '第一篇｜开发环境与效能工具',
//           collapsed: true,
//           items: [
//             { text: '开发环境安装', link: '/doc/chapter01/01-env-setup' },
//             { text: '工程化基石：Git与Maven', link: '/doc/chapter01/02-maven-git' }
//           ]
//         },
//         {
//           text: '第二篇｜Web 底层原理',
//           collapsed: false,
//           items: [
//             { text: 'HTTP 协议与调试工具', link: '/doc/chapter02/01-http-protocol' },
//             { text: 'Servlet 基础', link: '/doc/chapter02/02-servlet-basics' },
//             { text: '请求与响应 (Req & Resp)', link: '/doc/chapter02/03-request-response' }
//           ]
//         },
//         {
//           text: '阶段二：Spring Boot 框架',
//           collapsed: true,
//           items: [
//             { text: '实验 4：Spring Boot 快速启动', link: '/labs/lab4-springboot' },
//             { text: '实验 5：MyBatis-Plus 实战', link: '/labs/lab5-mybatis' },
//             { text: '实验 6：RESTful API 设计', link: '/labs/lab6-rest' }
//           ]
//         }
//       ],
//       '/projects/': [
//         {
//           text: '企业级实战',
//           items: [
//             { text: '基于 Yudao 框架的二次开发', link: '/projects/yudao' },
//             { text: '前后端分离项目部署', link: '/projects/deploy' }
//           ]
//         }
//       ]
//     },

//     // sidebar: [
//     //   {
//     //     text: 'Examples',
//     //     items: [
//     //       { text: 'Markdown Examples', link: '/markdown-examples' },
//     //       { text: 'Runtime API Examples', link: '/api-examples' }
//     //     ]
//     //   }
//     // ],

//     // 4. 文档页内搜索（本地索引）
//     search: {
//       provider: 'local',
//       options: {
//         locales: {
//           root: {
//             translations: {
//               button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
//               modal: { noResultsText: '无法找到相关结果', resetButtonTitle: '清除查询条件' }
//             }
//           }
//         }
//       }
//     },

//     // 5. 底部版权信息：体现教研身份
//     footer: {
//       message: '学而不厌，诲人不倦',
//       copyright: 'Copyright © 2025-present 陈德 | 武汉商学院计算机与自动化学院'
//     },

//     socialLinks: [
//       { icon: 'github', link: 'https://gitee.com/javaweb-dev-tech' },
//       // { 
//       //   // 这里自定义 Gitee 图标
//       //   icon: {
//       //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.984 0A12.006 12.006 0 0 0 0 12a12.006 12.006 0 0 0 12 12 12.006 12.006 0 0 0 12-12A12.006 12.006 0 0 0 11.984 0zM10.5 16.5h-3v-9h9v3h-6v3h6v3h-6z"/></svg>'
//       //   }, 
//       //   link: 'https://gitee.com/javaweb-dev-tech' 
//       // }
//     ]
//   }
// })
