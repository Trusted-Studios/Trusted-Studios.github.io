const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
})

const config = withNextra()

// Nextra injects rewrites by default. They are not used for static export and only
// produce warnings in build/dev for this repository.
delete config.rewrites

module.exports = {
    ...config,
    output: 'export',
    images: {
        unoptimized: true,
    },
};
