const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");

  // Minify HTML output
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath.indexOf(".html") > -1) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });
};