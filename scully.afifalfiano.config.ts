import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'afifalfiano',
  outDir: './dist/static',
  routes: {
    '/blog/:title': {
      type: 'contentFolder',
      title: {
        folder: './blog'
      }
    },
    // '/blog/:slug': {
    //   type: 'contentFolder',
    //   slug: {
    //     folder: './blog'
    //   }
    // },
  }
};
