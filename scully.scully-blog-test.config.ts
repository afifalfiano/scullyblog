import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import 'prismjs/components/prism-java.js';
import { DisableAngular } from 'scully-plugin-disable-angular';
import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';
import { criticalCSS } from '@scullyio/scully-plugin-critical-css';
import '@notiz/scully-plugin-rss';

require ('@notiz/scully-plugin-lazy-images');
require('@notiz/scully-plugin-medium-zoom');
require('scully-plugin-amp-css');
require('scully-plugin-canonical');
const linkPreview = require('markdown-it-link-preview');
const md = require('markdown-it')();
md.use(linkPreview);

const { MinifyHtml } = require('scully-plugin-minify-html');

const Http404Plugin = getHttp404Plugin();
// tslint:disable-next-line:max-line-length
const postRenderersBlog = [Http404Plugin, 'mediumZoom', MinifyHtml, 'setCanonicalLinkPlugin', 'seoHrefOptimise', 'combineStylesAmpPlugin'];

setPluginConfig('md', { enableSyntaxHighlighting: true });
setPluginConfig(DisableAngular, 'render', {removeState: false});
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'scully-blog-test',
  outDir: './dist/static',
  defaultPostRenderers: postRenderersBlog,
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog'
      },
      postRenderers: postRenderersBlog
    },
  }
};
