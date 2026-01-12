CREATE TABLE IF NOT EXISTS download_counts (
  version TEXT NOT NULL,
  platform TEXT NOT NULL,
  count INTEGER NOT NULL DEFAULT 0,
  last_download_at TEXT NOT NULL,
  PRIMARY KEY (version, platform)
);
