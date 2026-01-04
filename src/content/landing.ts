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
    badge: string;
    title: string;
    taglineLine1: string;
    taglineLine2: string;
    description: string;
    ctaDownload: string;
    ctaMac: string;
    ctaWindows: string;
    ctaGithub: string;
    ctaBeta: string;
  };
  scatter: {
    left: {
      title: string;
    };
    right: {
      title: string;
    };
  };
  features: {
    title: string;
    cards: Array<{
      icon: string;
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
    tagline: string;
  };
};

export const koContent: LandingContent = {
  lang: 'ko',
  meta: {
    title: 'Notaly | 생각은 흩뿌리고, 쿼리로 하나로 묶으세요',
    description:
      '어디에 저장할지 고민하지 마세요. 어떤 줄이든 데이터로 표시만 하세요. 흩어진 아이디어들이 하나의 뷰로 모이는 것을 경험해 보세요.'
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
    badge: '✨ 현재 공공 베타 버전 테스트 중',
    title: 'Notaly',
    taglineLine1: '생각은 흩뿌리고,',
    taglineLine2: '쿼리로 하나로 묶으세요.',
    description:
      '어디에 저장할지 고민하지 마세요. 어떤 줄이든 데이터로 표시만 하세요. 흩어진 아이디어들이 하나의 뷰로 모이는 것을 경험해 보세요.',
    ctaDownload: 'Download Beta',
    ctaMac: 'macOS 베타 다운로드',
    ctaWindows: 'Windows 베타 다운로드',
    ctaGithub: 'GitHub',
    ctaBeta: 'Beta'
  },
  scatter: {
    left: {
      title: '// 1. Scatter'
    },
    right: {
      title: '// 2. Unite'
    }
  },
  features: {
    title: '왜 Notaly인가요?',
    cards: [
      {
        icon: '🏷️',
        title: 'Attributes',
        copy: '모든 라인에 메타데이터를 부여하세요. Notaly는 중첩된 하위 구조까지 하나의 데이터 객체로 취급합니다.'
      },
      {
        icon: '⚡',
        title: 'Live Queries',
        copy: '어느 페이지에서든 실시간으로 블록을 불러오세요. 쿼리 결과의 수정은 원본에 즉시 반영됩니다.'
      },
      {
        icon: '🛡️',
        title: 'Local First',
        copy: '데이터는 사용자의 로컬 텍스트 파일로 저장됩니다. 파일의 소유권을 유지하며 강력한 기능을 누리세요.'
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
    title: 'Community',
    copy: '질문하거나 피드백을 남겨주세요. Notaly는 사용자와 함께 성장합니다.',
    qna: 'Q&A',
    bug: 'Report a Bug',
    feature: 'Feature Requests',
    announcements: 'Announcements'
  },
  footer: {
    tagline: 'Notaly: Beyond Plain Text'
  }
};

export const enContent: LandingContent = {
  lang: 'en',
  meta: {
    title: 'Notaly | Scatter your thoughts, unite them with Queries',
    description:
      "Don't worry about where to save. Just mark any line as data, and watch your scattered ideas come together in a single view."
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
    badge: '✨ Currently in Public Beta',
    title: 'Notaly',
    taglineLine1: 'Scatter your thoughts,',
    taglineLine2: 'unite them with Queries.',
    description:
      "Don't worry about where to save. Just mark any line as data, and watch your scattered ideas come together in a single view.",
    ctaDownload: 'Download Beta',
    ctaMac: 'Download Beta for macOS',
    ctaWindows: 'Download Beta for Windows',
    ctaGithub: 'GitHub',
    ctaBeta: 'Beta'
  },
  scatter: {
    left: {
      title: '// 1. Scatter'
    },
    right: {
      title: '// 2. Unite'
    }
  },
  features: {
    title: 'Why Notaly?',
    cards: [
      {
        icon: '🏷️',
        title: 'Attributes',
        copy: 'Assign metadata to any block. Notaly treats the nested structure as a single data object.'
      },
      {
        icon: '⚡',
        title: 'Live Queries',
        copy: 'Pull blocks anywhere in real-time. Changes in Query results are synced back to the source.'
      },
      {
        icon: '🛡️',
        title: 'Local First',
        copy: 'Your data stays in plain text files. Own your files while enjoying the power of a database.'
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
    title: 'Community',
    copy: 'Have questions or feedback? Notaly grows with its community.',
    qna: 'Q&A',
    bug: 'Report a Bug',
    feature: 'Feature Requests',
    announcements: 'Announcements'
  },
  footer: {
    tagline: 'Notaly: Beyond Plain Text'
  }
};
