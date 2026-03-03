export type Language = 'en' | 'zh';

export const dictionaries = {
    en: {
        hero: {
            status: "Open to Full Stack roles",
            greeting: "Hi, I'm",
            role: "AI Algorithm Application Engineer focused on Edge Deployment to Backend Architecture, expanding into Full Stack.",
            description: "Experienced in the entire ML lifecycle from data pipeline construction to deploying YOLO (v8/v11) on Edge devices. I specialize in backend systems using Go and Python, and I am driven to integrate modern frontend practices (Next.js/React) to engineer end-to-end, AI-powered solutions.",
            github: "GitHub Profile",
            contact: "Contact Me"
        },
        skills: {
            title: "Technical Arsenal",
            frontend: "Frontend",
            backend: "Backend",
            cloud: "Cloud & Data",
            ai: "AI & Tools"
        },
        projects: {
            title: "Featured Engineering",
            loading: "Loading projects from GitHub...",
            noDesc: "No description provided.",
            viewRepo: "View Repository →"
        },
        contact: {
            title: "Let's build something great.",
            desc: "Currently looking for new opportunities in fast-paced environments where I can leverage my full-stack skills and dive deeper into AI integrations.",
            emailBtn: "Send me an email →"
        },
        toggle: "中文"
    },
    zh: {
        hero: {
            status: "开放寻找全栈岗位",
            greeting: "你好，我是",
            role: "AI 算法应用工程师，聚焦于模型落地与后端架构，正向全栈领域发力。",
            description: "具备 YOLO (v8/v11) 等前沿算法从“业务侧痛点分析 -> 数据迭代流水线构建 -> 边缘端设备部署落地”的完整工程结界。目前主要使用 Go 与 Python 构建健壮的后端应用架构，并致力于将 Next.js/React 开发经验沉淀融合，旨在交付由 AI 驱动、端到端的高级全栈解决方案。",
            github: "GitHub 主页",
            contact: "联系我"
        },
        skills: {
            title: "技术栈",
            frontend: "前端开发",
            backend: "后端与容器化",
            cloud: "系统与运维",
            ai: "人工智能与工具"
        },
        projects: {
            title: "精选开源项目",
            loading: "正在从 GitHub 加载项目...",
            noDesc: "暂无描述。",
            viewRepo: "查看仓库 →"
        },
        contact: {
            title: "让我们一起创造卓越。",
            desc: "目前正在积极寻找快节奏、高强度的工程环境中的新机会，期待能发挥我的全栈与 AI 集成技能。",
            emailBtn: "给我发邮件 →"
        },
        toggle: "English"
    }
};
