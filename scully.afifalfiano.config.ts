import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import 'prismjs/components/prism-java.js';
import { DisableAngular } from 'scully-plugin-disable-angular';
import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';
import '@notiz/scully-plugin-rss';

const { MinifyHtml } = require('scully-plugin-minify-html');

const Http404Plugin = getHttp404Plugin();
const postRenderersBlog = [DisableAngular, Http404Plugin, MinifyHtml, 'combineStylesAmpPlugin'];

setPluginConfig('md', { enableSyntaxHighlighting: true });
setPluginConfig(DisableAngular, 'render', {removeState: false});
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'afifalfiano',
  outDir: './dist/static',
  routes: {
    '/blog/:title': {
      type: 'contentFolder',
      title: {
        folder: './blog'
      },
      postRenderers: postRenderersBlog
    },
    },
};
