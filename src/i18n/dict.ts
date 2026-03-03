export type Language = 'en' | 'zh';

export const dictionaries = {
    en: {
        hero: {
            status: "Open to new opportunities",
            greeting: "Hi, I'm",
            role: "Full Stack Software Engineer building scalable services and modern UI.",
            description: "Passionate about bridging the gap between elegant frontend experiences (Next.js/React) and robust backend architectures (Python/Node.js). Exploring the frontiers of AI, MLOps, and model training like YOLO11.",
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
            status: "寻找新的求职机会中",
            greeting: "你好，我是",
            role: "全栈软件工程师，专注于构建可扩展的后端服务与现代化UI。",
            description: "热衷于连接优雅的前端体验（Next.js/React）与健壮的后端架构（Python/Node.js）。同时在探索人工智能、MLOps 以及如 YOLO11 等模型训练的前沿技术。",
            github: "GitHub 主页",
            contact: "联系我"
        },
        skills: {
            title: "技术栈",
            frontend: "前端开发",
            backend: "后端服务",
            cloud: "云计算与数据库",
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
            desc: "目前正在寻找快节奏环境中的新机会，期待能发挥我的全栈技能，并深入研究 AI 集成应用。",
            emailBtn: "给我发邮件 →"
        },
        toggle: "English"
    }
};
