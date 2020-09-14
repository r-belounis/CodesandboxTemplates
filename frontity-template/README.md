# `Codesanbox.io frontity-template`

This project was bootstrapped with [Frontity](https://frontity.org/).

## Table of Contents
- [Fork repository to your codesanbox](#fork-repository-to-your-codesanbox)
- [Fetch your own articles from your wordpress](#fetch-your-own-articles-from-your-wordpress)
- [How to make it Frontity work in codeanbox.io '?'](#how-to-make-it-frontity-work-in-codeanboxio-)
- [Have a look at the official docs](#have-a-look-at-the-official-docs)

### Fork repository to your codesanbox

```
https://github.com/r-belounis/codesandbox_templates/tree/master/frontity-template

```

> Fork or copy url to your ***template directory*** or ***import repository*** directly via ***import from github*** to get the box ready and set.

### Fetch your own articles from your wordpress

Open ***frontity.setting.js*** and at the bottom line, change the url of the api like this :

```json
"name": "@frontity/wp-source",
    "state": {
        "source": {
          // Here you can add your WP-REST API url to fetch your posts data
          "api": "https://public-api.wordpress.com/wp/v2/sites/myapiadress.wordpress.com"
        }
    }
```

Here we define our api adress from ***public-api-wordpress*** for websites from wordpress.com, but you can change it to match your own wordpress WP-REST api. Take a look at the docs at the bottom from Frontity
for more info.

### How to make it Frontity work in codeanbox.io '?'

To make Frontity working on codesandbox.io, you need to make some ***script editing*** on ***package.json*** and create a ***sandbox.config.json*** file at your root project folder.

You'll need to have ***[symlink-dir](https://github.com/zkochan/symlink-dir)*** installed in your project to make it work with Frontity and change the package.json to :

```js

"scripts": {
    "start":  "frontity dev",
    "postinstall":  "symlink-dir ./packages/mars-theme ./node_modules/@frontity/mars-theme"
}

```

>***Because codesanbox can't resolve the Mars-theme, as it tries to download it as a dependencies from a cdn that doesn't exist. So we need to self-require this package from node-modules. Hence the use of symlink-dir package.***

The ***sandbox.config.json*** will have to be configured this way :

```json
{
    "infiniteLoopProtection": true,
    "hardReloadOnChange": false,
    "view": "browser",
    "template": "node"
}
```

> This way codesandbox will be able to see the template needed to run the project at first run when deploying the code.

### Have a look at the official docs

- Have a look at Frontity [Quick Start Guide](https://docs.frontity.org/getting-started/quick-start-guide)

- Have a look at Frontity blog post [How to Create a React WordPress Theme in 30 Minutes](https://frontity.org/blog/how-to-create-a-react-theme-in-30-minutes/)

Thanks for reading and enjoy this Frontity-template :grin:
