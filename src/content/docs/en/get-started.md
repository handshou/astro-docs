---
title: "Get started"
description: "Docs intro"
---

**Setup your site and write content within the hour!**

- ✅ **Use Notion - to write**
- ✅ **Use GitHub - to automate and view code**
- ✅ **Use Cloudinary - to host images**
- ✅ **Use Cloudflare - to host your site**

## Accounts 

- Sign up for [Notion](https://www.notion.so/signup)
- Sign up for [GitHub](https://github.com/signup)
- Sign up for [Cloudinary](https://cloudinary.com/users/register_free)
- Sign up for [Cloudflare](https://dash.cloudflare.com/signup)

## Public folder

The `/public/` directory contains files and assets such as images, fonts and special files.
Some examples are included below. We will be hosting images on Cloudinary.

**Prepare the following files and set them aside.**


### Favicon.svg

This is the icon which appears on the window tab, next to the title. You can 
use [RealFaviconGenerator](https://realfavicongenerator.net/svg-favicon/) 
to generate an .svg vector. 

### Robots.txt

This is a file to aid webcrawlers with descriptions of your site. Here are 
[Google's guidelines](https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt#useful-robots.txt-rules) 
to creating a robots.txt file.

An example which allows all crawlers (`User-agent: *`) to access the `/public/` 
folder only.

```text
# Robots.txt
User-agent: *
Disallow: /
Allow: /public/
```

