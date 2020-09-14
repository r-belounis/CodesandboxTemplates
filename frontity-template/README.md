# `Codesanbox.io frontity-template`

This project was bootstrapped with [Frontity](https://frontity.org/).

## Table of Contents
- [`Codesanbox.io frontity-template`](#codesanboxio-frontity-template)
  - [Table of Contents](#table-of-contents)
    - [Fork repository to your codesanbox](#fork-repository-to-your-codesanbox)
    - [How is it working '?'](#how-is-it-working-)
    - [Have a look at the docs](#have-a-look-at-the-docs)

### Fork repository to your codesanbox

```

https://github.com/r-belounis/codesandbox_templates/tree/master/frontity-template

```

> Fork or copy url to your ***template directory*** or ***import repository*** directly via ***import from github*** to get the box ready and set.

### How is it working '?'

To make Frontity working on codesandbox.io, you need to make some ***script editing*** on ***package.json*** and create a ***sandbox.config.json*** file at your root project folder.

You'll need to have ***[symlink-dir](https://github.com/zkochan/symlink-dir)*** installed in your project to make it work with Frontity and change the package.json to :

```js

"scripts": {
    "start":  "frontity dev",
    "postinstall":  "symlink-dir ./packages/mars-theme ./node_modules/@frontity/mars-theme"
}

```

>***Because codesanbox can't resolve the Mars-theme as it try to download it as a dependencies from a cdn that doesn't exist, so we need to self-require this package from node-modules. Hence the use of symlink-dir package***

### Have a look at the docs

- Have a look at Frontity [Quick Start Guide](https://docs.frontity.org/getting-started/quick-start-guide)

- Have a look at Frontity blog post [How to Create a React WordPress Theme in 30 Minutes](https://frontity.org/blog/how-to-create-a-react-theme-in-30-minutes/)

Thanks for reading and enjoy this Frontity-template :grin: