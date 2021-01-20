import { defineConfig } from 'dumi';

const repo = 'SetWorld';

export default defineConfig({
  title: repo,
  favicon:
    'https://cdn.fuzui.net/logo/setworld_64.png?x-oss-process=style/ys',
  logo:
    'https://cdn.fuzui.net/logo/setworld_256.png?x-oss-process=style/ys',
  locales: [['zh-CN', '中文']],
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/fuzui',
    },
  ],
  // more config: https://d.umijs.org/config
});
