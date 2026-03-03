import PortfolioClient, { Repo } from "@/components/PortfolioClient";

export default async function Home() {
  // ==========================================
  // ⚙️ CONFIGURATION (配置区)
  // ==========================================
  const EMAIL_ADDRESS = "job@anlife.top"; // 修改为你真实的邮箱地址

  // 你想展示的仓库名称列表（页面显示的顺序将严格按照这里的排列顺序！）
  // The exact order of these array elements dictates the display order on the page.
  const targetRepos = [
    "image_classifier",
    "DailyHotApi",
    "HowToCook-mcp",
    "ccLoad"
  ];
  // ==========================================

  // Fetch repos at build time (SSG)
  const res = await fetch("https://api.github.com/users/Gaq152/repos?per_page=100", {
    next: { revalidate: 3600 }, // Alternatively, since we are using 'export', this acts as a build-time fetch
  });

  if (!res.ok) {
    console.error("Failed to fetch repos", res.status);
  }

  const allRepos: Repo[] = res.ok ? await res.json() : [];

  // Filter and SORT the repos to match the strict order defined in `targetRepos`
  const featuredRepos = targetRepos
    .map((repoName) => allRepos.find((r) => r.name === repoName))
    .filter((repo): repo is Repo => repo !== undefined);

  return <PortfolioClient featuredRepos={featuredRepos} email={EMAIL_ADDRESS} />;
}
