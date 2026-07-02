// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'eggfly', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * Deployed at https://eggfly.github.io/ (user site), so base is '/'.
   */
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Featured Projects',
      mode: 'manual', // Only show a hand-picked list (hides embedded / TypixNode).
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: true,
          projects: [],
        },
      },
      manual: {
        projects: [
          'eggfly/QuickPatch',
          'eggfly/KVM',
          'eggfly/FastDexInject',
          'eggfly/flutter_windows_webview2',
          'eggfly/bcsgo',
          'eggfly/DroidDiskBench',
        ],
      },
    },
    external: {
      header: 'My Projects',
      // Empty to hide the `External Projects` section.
      projects: [],
    },
  },
  seo: {
    title: 'eggfly — Mobile & Systems Engineer',
    description:
      'Mobile & systems engineer focused on Android internals, Kotlin/JVM, cross-platform (Flutter · KMP) and Go backends.',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: '', // Empty fileUrl hides the `Download Resume` button.
  },
  skills: [
    'Kotlin',
    'Java',
    'Android',
    'Kotlin Multiplatform',
    'Flutter',
    'Dart',
    'Go',
    'Python',
    'C++',
    'JVM Internals',
    'Gradle',
    'Git',
  ],
  experiences: [],
  certifications: [],
  educations: [],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev',
    username: '', // Empty to hide the blog section.
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dim',

    disableSwitch: false,

    respectPrefersColorScheme: true,

    displayAvatarRing: true,

    themes: [
      'light',
      'dark',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'forest',
      'aqua',
      'lofi',
      'black',
      'luxury',
      'dracula',
      'business',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
    ],
  },

  footer: `Made with <a
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
