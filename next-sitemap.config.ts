import type { IConfig } from 'next-sitemap';

const config: IConfig = {
  siteUrl: 'https://myresumer.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: [], // Add any routes you want to exclude here
};

export default config;
