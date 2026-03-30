import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid({
  title: "码途：从 Java 到 AI Agent 的全栈演进",
  description: "德德锅的技术成长与教学笔记",
  base: '/',

  mermaid: {
    // theme: 'default',
  },

  themeConfig: {
    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      {
        text: '技术栈',
        items: [
          { text: 'Java', link: '/java/' },
          { text: 'AI 与大模型', link: '/ai/' },
          { text: '客户端开发', link: '/client/' }
        ]
      },
      { text: '考试辅导', link: '/exam/' },
      { text: '实战项目', link: '/projects/' }
    ],

    // 侧边栏 - 按模块分组
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          collapsed: false,
          items: [
            { text: '快速开始', link: '/guide/quickstart' },
            { text: '学习路线', link: '/guide/roadmap' }
          ]
        }
      ],
      '/java/': [
        {
          text: 'Java 核心',
          collapsed: true,
          items: [
            { text: 'Java 基础', link: '/java/core/basic' },
            { text: 'JVM 原理', link: '/java/core/jvm' },
            { text: '并发编程', link: '/java/core/concurrency' }
          ]
        },
        {
          text: 'Spring 生态',
          collapsed: true,
          items: [
            { text: 'Spring Framework', link: '/java/spring/framework' },
            { text: 'Spring MVC', link: '/java/spring/mvc' },
            { text: 'Spring Boot', link: '/java/spring/springboot' },
            { text: 'Spring Cloud', link: '/java/spring/cloud' }
          ]
        },
        {
          text: '云原生与中间件',
          collapsed: true,
          items: [
            { text: 'Docker', link: '/java/cloud-native/docker' },
            { text: 'Kubernetes', link: '/java/cloud-native/k8s' },
            { text: 'Redis', link: '/java/middleware/redis' },
            { text: '消息队列', link: '/java/middleware/mq' }
          ]
        }
      ],
      '/ai/': [
        {
          text: '基础理论',
          collapsed: true,
          items: [
            { text: '机器学习', link: '/ai/ml/basic' },
            { text: '深度学习', link: '/ai/ml/deep-learning' }
          ]
        },
        {
          text: '大语言模型',
          collapsed: true,
          items: [
            { text: 'LLM 基础', link: '/ai/llm/basic' },
            { text: '本地部署 (Ollama)', link: '/ai/llm/ollama' },
            { text: 'Prompt 工程', link: '/ai/llm/prompt' }
          ]
        },
        {
          text: '应用开发',
          collapsed: true,
          items: [
            { text: 'RAG 检索增强', link: '/ai/rag/basic' },
            { text: 'AI Agent', link: '/ai/agent/basic' }
          ]
        }
      ],
      '/client/': [
        {
          text: '客户端开发',
          collapsed: false,
          items: [
            { text: 'Electron', link: '/client/electron' },
            { text: 'Android', link: '/client/android' },
            { text: '微信小程序', link: '/client/wechat' }
          ]
        }
      ],
      '/exam/': [
        {
          text: '软考 - 软件架构设计师',
          collapsed: true,
          items: [
            { text: '综合知识', link: '/exam/architect/knowledge' },
            { text: '案例分析', link: '/exam/architect/case' },
            { text: '论文写作', link: '/exam/architect/essay' }
          ]
        },
        {
          text: '考研 408',
          collapsed: true,
          items: [
            { text: '数据结构', link: '/exam/kaoyan/ds' },
            { text: '计算机组成原理', link: '/exam/kaoyan/co' },
            { text: '操作系统', link: '/exam/kaoyan/os' },
            { text: '计算机网络', link: '/exam/kaoyan/cn' }
          ]
        }
      ],
      '/projects/': [
        {
          text: '实战项目',
          collapsed: false,
          items: [
            { text: '企业级后台管理系统', link: '/projects/admin-system' },
            { text: '微服务 Demo', link: '/projects/microservices' },
            { text: 'AI 应用开发', link: '/projects/ai-app' }
          ]
        }
      ]
    },

    // 搜索
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

    // 最后更新时间
    lastUpdatedText: '最后更新于',

    // 翻页按钮
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 底部信息
    footer: {
      message: '学而不厌，诲人不倦',
      copyright: 'Copyright © 2025-present 陈德 | 码途 - 技术成长笔记'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaomabenten/system_architect' }
    ]
  }
})
