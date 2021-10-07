
import { registerPlugin, getPluginConfig, HandledRoute } from '@scullyio/scully';
// export const myPlugin = 'myPlugin';

// const myFunctionPlugin = async (html: string): Promise<string> => {
//   return html;
// };

function userIdPlugin(route: string, config = {}): Promise<HandledRoute[]> {
  return Promise.resolve([
    { route: '/blog/10-heuristic-principles' },
    { route: '/blog/10-perintah-git-yang-harus-kamu-ketahui' },
    { route: '/blog/deploy-angular-bazel-azure-github-action-part1' },
    { route: '/blog/deploy-angular-bazel-azure-github-action-part2' },
    { route: '/blog/how-to-hosting-angular-on-github-pages' },
    { route: '/blog/lets-becomes-a-foss-user' },
    { route: '/blog/membuat-animasi-tanpa-jquery' },
    { route: '/blog/membuat-aplikasi-todolist-menggunakan-angular-9' },
    { route: '/blog/menggunakan-automate-commit-conventional-linter-di-angular' },
    { route: '/blog/menggunakan-lazy-load-angular' },
    { route: '/blog/menulis-kenapa-tidak' },
    { route: '/blog/my-first-pull-request' },
    { route: '/blog/my-journey-from-it-support-to-development-team' },
    { route: '/blog/reactive-forms-on-angular' },
    { route: '/blog/reusable-component' },
    { route: '/blog/story-as-a-frontend-developer' },
    { route: '/blog/my-experience-collaborative' },
  ]);
}

const validator = async (conf) => [];

registerPlugin('router', 'userIds', userIdPlugin, validator);
