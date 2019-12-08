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
      title: '',
      logo: {
        alt: 'Circle Monk',
        src: 'img/logo.png',
      },
      links: [
        {to: 'docs/contribution', label: 'Contribute', position: 'left'},
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
          title: 'Important Links',
          items: [
            {
              label: 'Contribution',
              to: 'docs/contribution',
            },
            {
              label: 'Github',
              to: 'https://github.com/rahulranjanmca/circlemonk',
            },
            {
              label: 'Contributors',
              to: 'docs/contributors',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'About',
              to: 'docs/about',
            },
            {
              label: 'Earn With Us',
              to: 'docs/earn-with-us',
            },
            {
              label: 'Contact',
              to: 'docs/contact',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Facebook',
              to: 'https://facebook.com/circlemonk',
            },
            {
              label: 'Twitter',
              to: 'https://twitter.com/circlemonk',
            },
            {
              label: 'Instagram',
              to: 'https://instagram.com/circlemonk',
            },
            {
              label: 'Youtube',
              to: 'https://youtube.com/circlemonk',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CircleMonk`,
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
