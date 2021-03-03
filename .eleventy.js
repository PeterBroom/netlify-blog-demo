const yaml = require("js-yaml");
const htmlmin = require("html-minifier");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const searchFilter = require("./src/filters/searchFilter");
const md = require('markdown-it')({
    html: true,
    breaks: true,
    linkify: true,
});

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Global collection
    eleventyConfig.addDataExtension('yaml', contents => yaml.safeLoad(contents))
    eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));

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

    // Nunjucks Markdown rendering for blocks
    eleventyConfig.setLibrary('md', md);
    eleventyConfig.addFilter('markdownify', str => md.render(str));

    // Page collection
    eleventyConfig.addCollection("pages", collection => {
        return [...collection.getFilteredByGlob("./src/content/pages/**/*.md")];
    });

};