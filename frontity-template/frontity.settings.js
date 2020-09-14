const settings = {
  "name": "frontity-template",
  "state": {
    "frontity-template": {
      "url": "https://test.frontity.org",
      "title": "A Frontity testing app",
      "description": "Codesandbox.io Frontity template for initializing a new project"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ]
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          // Here you can add your WP-REST API url to fetch your posts data
          "api": "https://public-api.wordpress.com/wp/v2/sites/rbtestsite45191106.wordpress.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
