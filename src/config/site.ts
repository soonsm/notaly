export const siteConfig = {
  siteUrl: 'https://notaly.dev',
  githubRepoUrl: 'https://github.com/soonsm/nota-release',
  docsBaseUrl: '',
  faqBaseUrl: '',
  discussionsBaseUrl: 'https://github.com/soonsm/nota-release/discussions',
  download: {
    macosUrl: 'https://notaly.dev/download/macos',
    windowsUrl: 'https://github.com/soonsm/nota-release/releases/latest'
  },
  discussions: {
    categories: {
      qnaKoSlug: 'q-a-korean',
      qnaEnSlug: 'q-a-english',
      bugKoSlug: 'bug-report-korean',
      bugEnSlug: 'bug-report-english',
      featureSlug: 'feature-requests',
      announcementsSlug: 'announcements'
    }
  }
};

export const buildCategoryUrl = (slug: string) =>
  slug ? `${siteConfig.discussionsBaseUrl}/categories/${slug}` : '';
