/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'CircleMonk',
  tagline: 'Knowledge By Community & Knowledge For Community',
  url: 'https://rahulranjanmca.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'rahulranjanmca', // Usually your GitHub org/user name.
  projectName: 'circlemonk', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CircleMonk',
      logo: {
        alt: 'Circle Monk',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/doc1', label: 'Doc', position: 'left'},
        {to: 'docs/doc2', label: 'Core Java', position: 'left'},
        {to: 'node-js/doc1', label: 'Node JS', position: 'left'},
        {to: 'java-ee/doc1', label: 'Java EE', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/rahulranjanmca/circlemonk',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    sidebarCollapsible: false,
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/doc1',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} TexMonk, Inc..`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
