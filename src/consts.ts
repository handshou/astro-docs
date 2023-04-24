export const SITE = {
    title: 'Docs',
    description: 'Setup your own website following these instructions.',
    defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
    image: {
        src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
        alt:
            'astro logo on a starry expanse of space,' +
            ' with a purple saturn-like planet floating in the right foreground',
    },
    twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
    English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
    indexName: 'XXXXXXXXXX',
    appId: 'XXXXXXXXXX',
    apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
    (typeof KNOWN_LANGUAGE_CODES)[number],
    Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
    en: {
        'Introduction': [
            { text: 'Getting Started', link: 'en/getting-started' },
            { text: 'Configuration', link: 'en/configuration' },
            { text: 'Astro Templates', link: 'en/astro-templates' },
        ],
        'Lay of the Land': [
            { text: 'Notion', link: 'en/info-notion' },
            { text: 'Github', link: 'en/info-github' },
            { text: 'Cloudflare', link: 'en/info-cloudflare'},
            { text: 'Cloudinary', link: 'en/info-cloudinary' },
        ],
        'Set Up Notion': [
            { text: 'Using Notion', link: 'en/using-notion' },
            { text: 'Databases', link: 'en/using-notion-databases' },
            { text: 'Pages', link: 'en/using-notion-pages' },
        ],
        'Domain': [
            { text: 'Buying a Name', link: 'en/domain-buying' },
            { text: 'Connect Cloudflare', link: 'en/domain-cloudflare'},
            { text: 'Subdomains', link: 'en/domain-subdomain' },
        ],
        'Metadata': [
            { text: 'SEO', link: 'en/meta-seo' },
            { text: 'RSS', link: 'en/meta-rss' },
            { text: 'Favicon', link: 'en/meta-favicon' },
        ],
        'Automation': [
            { text: 'Nightly Updates', link: 'en/automation-nightly' },
        ],
    },
};
