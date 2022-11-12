let jobTitle = 'Copywriter and UX developer';

if (process.env.CONTEXT === 'copywriting') {
  jobTitle = 'Copywriter';
} else if (process.env.CONTEXT === 'development') {
  jobTitle = 'UX developer';
}

module.exports = function () {
  return {
    title: 'Austin Hohiemer',
    jobTitle,
    navigation: [
      {
        text: 'Austin Hohiemer',
        link: '/',
      },
      {
        text: 'Work',
        link: '/',
      },
      {
        text: 'About',
        link: '/about/',
      },
    ],
    baseURL: 'https://hohiemer.com',
    description:
      'Copywriter and UX developer at Bullhorn in Lexington, Kentucky.',
    metaImage: '/assets/og.jpg',
    jsonLDImage: '/assets/austin.jpg',
    jsonLDSameAs: [
      'https://www.linkedin.com/in/austin-hohiemer/',
      'https://github.com/hohiemer',
    ],
  };
};
