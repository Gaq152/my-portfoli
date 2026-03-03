import Image from "next/image";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  topics: string[];
}

export default async function Home() {
  // Fetch repos at build time (SSG)
  const res = await fetch("https://api.github.com/users/Gaq152/repos?per_page=100", {
    next: { revalidate: 3600 }, // Alternatively, since we are using 'export', this acts as a build-time fetch
  });

  if (!res.ok) {
    console.error("Failed to fetch repos", res.status);
  }

  const allRepos: Repo[] = res.ok ? await res.json() : [];

  // Filter specific repos to highlight based on user's skills
  const targetRepos = ["image_classifier", "DailyHotApi", "HowToCook", "ccLoad"];
  const featuredRepos = allRepos.filter((repo) =>
    targetRepos.includes(repo.name)
  );

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent-primary selection:text-background pb-20">

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
            Open to new opportunities
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="text-gradient">Gaq152</span>.
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium text-zinc-400 mt-2 max-w-3xl leading-snug">
            Full Stack Software Engineer building scalable services and modern UI.
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed mt-4">
            Passionate about bridging the gap between elegant frontend experiences (Next.js/React) and robust backend architectures (Python/Node.js). Exploring the frontiers of AI, MLOps, and model training like YOLO11.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="https://github.com/Gaq152" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors">
              GitHub Profile
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full glass font-semibold hover:bg-white/10 transition-colors">
              Contact Me
            </a>
          </div>
        </section>

        {/* SKILLS MATRIX */}
        <section className="mb-32">
          <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-accent-primary"></span>
            Technical Arsenal
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard title="Frontend" skills={["TypeScript", "React", "Next.js", "TailwindCSS"]} icon="⚛️" />
            <SkillCard title="Backend" skills={["Python", "Node.js", "RESTful APIs", "Serverless"]} icon="⚙️" />
            <SkillCard title="Cloud & Data" skills={["GCP", "Vercel", "MongoDB", "NoSQL"]} icon="☁️" />
            <SkillCard title="AI & Tools" skills={["MLOps", "YOLO11", "GitHub Actions", "Docker"]} icon="🤖" />
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="mb-32">
          <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-accent-secondary"></span>
            Featured Engineering
          </h3>
          {featuredRepos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredRepos.map((repo) => (
                <ProjectCard key={repo.id} repo={repo} />
              ))}
            </div>
          ) : (
            <div className="glass p-8 rounded-2xl text-center text-zinc-400">
              Loading projects from GitHub... (Ensure you build the static site)
            </div>
          )}
        </section>

        {/* CONTACT / FOOTER */}
        <section id="contact" className="py-20 border-t border-white/10 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's build something great.</h2>
          <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
            Currently looking for new opportunities in fast-paced environments where I can leverage my full-stack skills and dive deeper into AI integrations.
          </p>
          <a href="mailto:your-email@example.com" className="text-xl font-medium text-gradient hover:opacity-80 transition-opacity">
            Send me an email →
          </a>
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

function ProjectCard({ repo }: { repo: Repo }) {
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
        {repo.description || "No description provided."}
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
          View Repository →
        </span>
      </div>
    </a>
  );
}
