"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { dictionaries, Language } from "../i18n/dict";

export interface Repo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    stargazers_count: number;
    topics: string[];
}

export default function PortfolioClient({
    featuredRepos,
    email
}: {
    featuredRepos: Repo[],
    email: string
}) {
    const [lang, setLang] = useState<Language>('zh'); // SSR default
    const [mounted, setMounted] = useState(false);
    const t = dictionaries[lang];

    useEffect(() => {
        // Detect browser language only on the client
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith("zh")) {
            setLang("zh");
        } else {
            setLang("en");
        }
        setMounted(true);
    }, []);

    const toggleLanguage = () => {
        setLang(lang === 'zh' ? 'en' : 'zh');
    };

    // Prevent hydration mismatch on initial render
    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-accent-primary selection:text-background pb-20 relative">
            <button
                onClick={toggleLanguage}
                className="fixed top-6 right-6 z-50 glass px-4 py-2 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
                {t.toggle}
            </button>

            {/* Decorative Background Gradients */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-primary opacity-[0.15] blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-secondary opacity-[0.15] blur-[120px]"></div>
            </div>

            <main className="max-w-5xl mx-auto px-6 pt-32 sm:pt-40">

                {/* HERO SECTION */}
                <section className="flex flex-col items-start gap-6 mb-32 animate-fade-in-up">
                    <div className="glass px-4 py-1.5 rounded-full text-sm font-medium border border-white/10 text-zinc-300 mb-4 inline-flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        {t.hero.status}
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
                        {t.hero.greeting} <span className="text-gradient">Gaq152</span>.
                    </h1>
                    <h2 className="text-2xl sm:text-3xl font-medium text-zinc-400 mt-2 max-w-3xl leading-snug">
                        {t.hero.role}
                    </h2>
                    <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed mt-4">
                        {t.hero.description}
                    </p>
                    <div className="flex gap-4 mt-8">
                        <a href="https://github.com/Gaq152" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors">
                            {t.hero.github}
                        </a>
                        <a href="#contact" className="px-6 py-3 rounded-full glass font-semibold hover:bg-white/10 transition-colors">
                            {t.hero.contact}
                        </a>
                    </div>
                </section>

                {/* SKILLS MATRIX */}
                <section className="mb-32">
                    <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
                        <span className="w-8 h-[2px] bg-accent-primary"></span>
                        {t.skills.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <SkillCard title={t.skills.frontend} skills={["TypeScript", "React", "Next.js", "TailwindCSS"]} icon="⚛️" />
                        <SkillCard title={t.skills.backend} skills={["Python", "Node.js", "RESTful APIs", "Serverless"]} icon="⚙️" />
                        <SkillCard title={t.skills.cloud} skills={["GCP", "Vercel", "MongoDB", "NoSQL"]} icon="☁️" />
                        <SkillCard title={t.skills.ai} skills={["MLOps", "YOLO11", "GitHub Actions", "Docker"]} icon="🤖" />
                    </div>
                </section>

                {/* FEATURED PROJECTS */}
                <section className="mb-32">
                    <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
                        <span className="w-8 h-[2px] bg-accent-secondary"></span>
                        {t.projects.title}
                    </h3>
                    {featuredRepos.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {featuredRepos.map((repo) => (
                                <ProjectCard key={repo.id} repo={repo} t={t} />
                            ))}
                        </div>
                    ) : (
                        <div className="glass p-8 rounded-2xl text-center text-zinc-400">
                            {t.projects.loading}
                        </div>
                    )}
                </section>

                {/* CONTACT / FOOTER */}
                <section id="contact" className="py-20 border-t border-white/10 text-center">
                    <h2 className="text-3xl font-bold mb-6">{t.contact.title}</h2>
                    <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
                        {t.contact.desc}
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <a href={`mailto:${email}`} className="text-xl font-medium text-gradient hover:opacity-80 transition-opacity">
                            {t.contact.emailBtn}
                        </a>
                        <button
                            onClick={async (e) => {
                                const target = e.currentTarget;
                                const originalText = target.innerText;
                                try {
                                    if (navigator.clipboard && window.isSecureContext) {
                                        await navigator.clipboard.writeText(email);
                                    } else {
                                        const textArea = document.createElement("textarea");
                                        textArea.value = email;
                                        textArea.style.position = "absolute";
                                        textArea.style.left = "-999999px";
                                        document.body.prepend(textArea);
                                        textArea.select();
                                        try { document.execCommand('copy'); } catch (error) { console.error(error); }
                                        finally { textArea.remove(); }
                                    }
                                    target.innerText = lang === 'zh' ? "✅ 已复制到剪贴板" : "✅ Copied to clipboard";
                                } catch (error) {
                                    console.error(error);
                                } finally {
                                    setTimeout(() => { target.innerText = originalText; }, 2000);
                                }
                            }}
                            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors underline decoration-zinc-500/50 underline-offset-4"
                        >
                            {lang === 'zh' ? "邮件客户端没反应？点击复制邮箱地址" : "No mail client? Click to copy email address"}
                        </button>
                    </div>
                </section>

            </main>
        </div>
    );
}

function SkillCard({ title, skills, icon }: { title: string; skills: string[]; icon: string }) {
    return (
        <div className="glass p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
            <div className="text-3xl mb-4">{icon}</div>
            <h4 className="text-xl font-semibold mb-4 text-white">{title}</h4>
            <ul className="flex flex-col gap-2">
                {skills.map((skill) => (
                    <li key={skill} className="text-zinc-400 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent-primary/50"></span>
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ProjectCard({ repo, t }: { repo: Repo; t: typeof dictionaries['en'] }) {
    return (
        <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="group block glass p-8 rounded-2xl hover:bg-white/[0.05] transition-all duration-300 hover:border-accent-primary/50"
        >
            <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-bold text-white group-hover:text-accent-primary transition-colors">
                    {repo.name}
                </h4>
                <div className="flex items-center gap-1 text-zinc-400 bg-white/5 px-3 py-1 rounded-full text-sm">
                    <span>⭐</span> {repo.stargazers_count}
                </div>
            </div>
            <p className="text-zinc-400 mb-6 line-clamp-3 h-[4.5rem]">
                {repo.description || t.projects.noDesc}
            </p>
            <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                    {repo.language && (
                        <span className="text-xs font-medium px-2 py-1 bg-white/10 rounded-md text-zinc-300">
                            {repo.language}
                        </span>
                    )}
                </div>
                <span className="text-accent-secondary group-hover:translate-x-1 transition-transform">
                    {t.projects.viewRepo}
                </span>
            </div>
        </a>
    );
}
