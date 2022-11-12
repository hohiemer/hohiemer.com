const { srcset, src, imageWidth, imageHeight } = require("./src/_includes/shortcodes/images.js");
const newest = require('./src/_includes/filters/newest.js');
const toRFC = require('./src/_includes/filters/toRFC.js');
const contextualWorkCollection = require('./src/_includes/utils/contextual-work-collection.js');

module.exports = function(config) {
  config.addPassthroughCopy('./src/assets/');
  config.addPassthroughCopy('./src/favicon.ico');
  config.addCollection("work", contextualWorkCollection);
  config.addShortcode('src', src);
  config.addShortcode('srcset', srcset);
  config.addShortcode('width', imageWidth);
  config.addShortcode('height', imageHeight);
  config.addNunjucksFilter('toRFC', toRFC);
  config.addNunjucksFilter('newest', newest);

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: "src",
      output: "site"
    }
  }
};