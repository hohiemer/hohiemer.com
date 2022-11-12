const sortByDisplayOrder = require('./sort-by-display-order.js');

module.exports = (collection) => {
  if (process.env.CONTEXT === 'development') {
    return sortByDisplayOrder(
      collection
        .getFilteredByGlob('./src/work/*.md')
        .filter((item) => item.data.categories.includes('development'))
    );
  }
  if (process.env.CONTEXT === 'copywriting') {
    return sortByDisplayOrder(
      collection
        .getFilteredByGlob('./src/work/*.md')
        .filter((item) => item.data.categories.includes('copywriting'))
    );
  }
  return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md'));
};
