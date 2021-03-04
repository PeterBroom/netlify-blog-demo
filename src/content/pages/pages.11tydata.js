module.exports = {
  eleventyNavigation: {
    key: data => data.title,
    parent: data => data.parent
  }
};