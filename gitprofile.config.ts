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
      mode: 'automatic', // Top repos by stars (embedded + software). TypixNode is a separate org, so it never appears here.
      automatic: {
        sortBy: 'stars',
        limit: 12,
        exclude: {
          forks: true,
          // Only hide infra repos, not real projects.
          projects: ['eggfly/eggfly', 'eggfly/eggfly.github.io'],
        },
      },
      manual: {
        projects: [],
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
      'Mobile & systems engineer and hardware tinkerer — Android internals, Kotlin/JVM, cross-platform (Flutter · KMP), Go, and ESP32 gadgets.',
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
    'C / C++',
    'JVM Internals',
    'ESP32 / Arduino',
    'MicroPython',
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
