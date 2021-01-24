import { defineConfig } from 'dumi';
import { metas } from './config/metas';

const repo = 'SetWorld';

export default defineConfig({
  title: repo,
  favicon: 'https://cdn.fuzui.net/logo/setworld_64.png?x-oss-process=style/ys',
  logo: 'https://cdn.fuzui.net/logo/setworld_256.png?x-oss-process=style/ys',
  locales: [['zh-CN', '中文']],
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/`,
  publicPath: `/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/fuzui',
    },
  ],
  ssr: {
    removeWindowInitialProps: true,
  },
  exportStatic: {},
  metas,
  // more config: https://d.umijs.org/config
});
