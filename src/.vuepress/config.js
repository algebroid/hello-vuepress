module.exports = {
    title: "VuePressの練習サイト",
    description: "Reactについて書きません",
    head: [
        ['meta', {name: 'og:url', content: 'https://example.com'}],
        ['meta', {name: 'og:type', content: 'website'}],
        ['meta', {name: 'og:title', content: 'VuePressの練習サイト'}],
        ['meta', {name: 'og:description', content: 'VuePressで簡単に作ったウェブサイトです。何もないので見にこないでね！'}]
    ],

    locales: {
        '/': {
            lang: 'ja',
            title: 'VuePressの練習サイト'
        },
        '/en/': {
            lang: 'en-US',
            title: 'Hello VuePress'
        }
    },

    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'About', link: '/about'},
        ],
    }
};
