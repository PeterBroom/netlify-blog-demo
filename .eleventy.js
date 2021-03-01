const htmlmin = require("html-minifier");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const searchFilter = require("./src/filters/searchFilter");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

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

    // Search filter
    eleventyConfig.addFilter("search", searchFilter);
    eleventyConfig.addCollection("pages", collection => {
        return [...collection.getFilteredByGlob("./src/pages/**/*.md")];
    });
};