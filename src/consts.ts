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
            { text: 'Get started', link: 'en/get-started' },
            { text: 'How things work', link: 'en/how-things-work' },
            { text: 'Templates', link: 'en/templates' },
        ],
        'Notion (WIP)': [
            { text: 'Configure', link: 'en/configure-notion'},
            { text: 'Write', link: 'en/use-notion'},
        ],
        'GitHub (WIP)': [
            { text: 'Posts', link: 'en/use-github' },
        ],
        'Cloudinary (WIP)': [
            { text: 'Images', link: 'en/use-cloudinary' },
        ],
        'Cloudflare (WIP)': [
            { text: 'Configure', link: 'en/configure-cloudflare'},
            { text: 'Hosting', link: 'en/use-cloudflare'},
            { text: 'Domain name', link: 'en/configure-domains'},
        ],
    },
};
