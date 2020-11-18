import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import 'prismjs/components/prism-java.js';
import { DisableAngular } from 'scully-plugin-disable-angular';
import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';
require ('@notiz/scully-plugin-lazy-images');
require('@notiz/scully-plugin-medium-zoom');

const Http404Plugin = getHttp404Plugin();
const postRenderersBlog = [DisableAngular, Http404Plugin, 'mediumZoom'];

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
    // '/blog/:slug': {
    //   type: 'contentFolder',
    //   slug: {
    //     folder: './blog'
    //   }
    // },
  }
};
