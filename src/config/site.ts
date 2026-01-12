export const siteConfig = {
  siteUrl: "https://notaly.dev",
  githubRepoUrl: "",
  docsBaseUrl: "",
  faqBaseUrl: "",
  discussionsBaseUrl: "https://github.com/soonsm/notaly/discussions",
  download: {
    macosUrl: "https://notaly.dev/download/macos",
    windowsUrl: "",
  },
  discussions: {
    categories: {
      qnaKoSlug: "q-a",
      qnaEnSlug: "q-a",
      bugKoSlug: "report-a-bug",
      bugEnSlug: "report-a-bug",
      featureSlug: "feature-requests",
      announcementsSlug: "announcements",
    },
  },
};

export const buildCategoryUrl = (slug: string) =>
  slug ? `${siteConfig.discussionsBaseUrl}/categories/${slug}` : '';
