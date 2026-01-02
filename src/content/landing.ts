export type LandingContent = {
  lang: 'ko' | 'en';
  meta: {
    title: string;
    description: string;
  };
  nav: {
    features: string;
    download: string;
    docs: string;
    faq: string;
    qna: string;
    github: string;
  };
  hero: {
    title: string;
    slogan: string;
    description: string;
    ctaMac: string;
    ctaWindows: string;
    ctaGithub: string;
  };
  scatter: {
    title: string;
    subtitle: string;
    left: {
      title: string;
      copy: string;
      code: string;
    };
    right: {
      title: string;
      copy: string;
      code: string;
    };
  };
  features: {
    title: string;
    cards: Array<{
      title: string;
      copy: string;
    }>;
  };
  beta: {
    title: string;
    copy: string;
    os: string;
    updates: string;
  };
  faq: {
    title: string;
    copy: string;
    cta: string;
  };
  community: {
    title: string;
    copy: string;
    qna: string;
    bug: string;
    feature: string;
    announcements: string;
  };
  footer: {
    slogan: string;
  };
};

export const koContent: LandingContent = {
  lang: 'ko',
  meta: {
    title: 'Notaly | 로컬 지식 기록 앱',
    description:
      '흩어진 생각을 텍스트로 남기고, 태그로 구조화하고, 쿼리로 다시 꺼내보세요. 로컬에 저장되는 개인 지식 관리 앱 Notaly.'
  },
  nav: {
    features: '기능',
    download: '다운로드',
    docs: '문서',
    faq: 'FAQ',
    qna: 'Q&A',
    github: 'GitHub'
  },
  hero: {
    title: 'Notaly',
    slogan: '기록은 남기고, 생각은 모으고. Notaly',
    description:
      '흩어진 생각을 텍스트로 남기고, 태그로 구조화하고, 쿼리로 다시 꺼내보세요. 로컬에 저장되는 개인 지식 관리 앱 Notaly.',
    ctaMac: 'Download for macOS',
    ctaWindows: 'Download for Windows',
    ctaGithub: 'View on GitHub'
  },
  scatter: {
    title: '흩어짐을 모으는 기록',
    subtitle: '텍스트, 태그, 쿼리로 정리하는 데스크톱 지식 베이스',
    left: {
      title: 'Scatter',
      copy: '떠오르는 생각을 즉시 기록하고, 태그로 단서를 남깁니다.',
      code: `- 오늘 회의: #product #roadmap\n- 버그 재현: #issue #sync\n- 아이디어: #alpha #experiment`
    },
    right: {
      title: 'Unite',
      copy: '태그와 쿼리로 연결된 기록을 모아 다시 꺼냅니다.',
      code: `query tag:product AND tag:roadmap\nquery tag:issue AND updated:7d\nquery tag:alpha OR tag:experiment`
    }
  },
  features: {
    title: '핵심 기능',
    cards: [
      {
        title: 'Attribute Tags',
        copy: '메모를 태그로 구조화하고, 프로젝트 맥락을 한눈에 관리합니다.'
      },
      {
        title: 'Live Queries',
        copy: '조건에 맞는 기록을 실시간으로 모아 뷰로 구성합니다.'
      },
      {
        title: 'Local Privacy',
        copy: '데이터는 로컬에 저장됩니다. 개인 기록은 개인에게 남습니다.'
      }
    ]
  },
  beta: {
    title: 'Beta 안내',
    copy: 'Notaly는 현재 베타 단계입니다. 사용 경험을 바탕으로 빠르게 개선하고 있습니다.',
    os: '지원 OS: macOS, Windows (beta)',
    updates: '바이너리와 자동 업데이트는 Cloudflare R2를 통해 제공될 예정입니다.'
  },
  faq: {
    title: '자주 묻는 질문',
    copy: '설치, 동기화, 백업 등 주요 질문을 정리하고 있습니다.',
    cta: 'FAQ 보기'
  },
  community: {
    title: '커뮤니티 / 지원',
    copy: '질문, 버그, 기능 제안은 Discussions에서 받고 있습니다.',
    qna: 'Q&A',
    bug: '버그 제보',
    feature: '기능 제안',
    announcements: '공지사항'
  },
  footer: {
    slogan: '기록은 남기고, 생각은 모으고. Notaly'
  }
};

export const enContent: LandingContent = {
  lang: 'en',
  meta: {
    title: 'Notaly | Local-first knowledge app',
    description:
      'Capture thoughts in plain text, structure them with tags, and surface them again with queries. A local-first personal knowledge app for your desktop.'
  },
  nav: {
    features: 'Features',
    download: 'Download',
    docs: 'Docs',
    faq: 'FAQ',
    qna: 'Q&A',
    github: 'GitHub'
  },
  hero: {
    title: 'Notaly',
    slogan: 'Stay Noted, Stay Notaly.',
    description:
      'Capture thoughts in plain text, structure them with tags, and surface them again with queries. A local-first personal knowledge app for your desktop.',
    ctaMac: 'Download for macOS',
    ctaWindows: 'Download for Windows',
    ctaGithub: 'View on GitHub'
  },
  scatter: {
    title: 'From Scatter to Unite',
    subtitle: 'A desktop knowledge base shaped by text, tags, and queries.',
    left: {
      title: 'Scatter',
      copy: 'Log ideas fast, leave tags as anchors for later.',
      code: `- Team sync: #product #roadmap\n- Repro steps: #issue #sync\n- Idea: #alpha #experiment`
    },
    right: {
      title: 'Unite',
      copy: 'Pull related notes together with live queries.',
      code: `query tag:product AND tag:roadmap\nquery tag:issue AND updated:7d\nquery tag:alpha OR tag:experiment`
    }
  },
  features: {
    title: 'Core Features',
    cards: [
      {
        title: 'Attribute Tags',
        copy: 'Structure notes with tags and keep project context in view.'
      },
      {
        title: 'Live Queries',
        copy: 'Build dynamic views that always surface the right notes.'
      },
      {
        title: 'Local Privacy',
        copy: 'Your data stays on device. Personal notes remain yours.'
      }
    ]
  },
  beta: {
    title: 'Beta Notice',
    copy: 'Notaly is in beta. We are iterating quickly based on real usage.',
    os: 'Supported OS: macOS, Windows (beta)',
    updates: 'Binaries and auto-updates will be served via Cloudflare R2.'
  },
  faq: {
    title: 'FAQ',
    copy: 'Answers for installation, sync, and backups live here.',
    cta: 'View FAQ'
  },
  community: {
    title: 'Community & Support',
    copy: 'Ask questions, report bugs, and propose features in Discussions.',
    qna: 'Q&A',
    bug: 'Report a Bug',
    feature: 'Feature Requests',
    announcements: 'Announcements'
  },
  footer: {
    slogan: 'Stay Noted, Stay Notaly.'
  }
};
