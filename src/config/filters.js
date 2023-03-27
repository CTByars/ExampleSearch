/**
 * Add Eleventy filters here
 * https://www.11ty.dev/docs/filters/
*/

module.exports = {
  /**
   * Filter for serverless search results
   */
   results: function (eleventyConfig) {

    eleventyConfig.addFilter("results", (posts, term) => {
      var results = posts.filter(({ data }) => {
        let title = data.page.title;
        let content = data.page.content;
        let url = data.page.url;
        const regex = RegExp(term, "i");
        if (title && regex.test(title)) return true;
        if (url && regex.test(url)) return true;
        if (content && regex.test(content)) return true;
      });

      return results;
    });
  },

  // Filter to highlight wrap the passed term in a span
  highlight: function (eleventyConfig) {
    eleventyConfig.addFilter("highlight", (content, term) => {
      const regex = RegExp(term, "gi");
      return content.replace(regex, `<span class="highlight">$&</span>`);
    });
  }
}
