---
title: "How things work"
description: "Building the website by combining services together."
---

The four services combined to produce a fast and free site. 

- Notion 
- GitHub
- Cloudinary 
- Cloudflare 

Read the following explanations to find out more!

## Layman

1. Open Notion to **Add**, **Edit**, **Flag content** for publishing.
1. **Click on a Notion button** to trigger build process.
1. Part of the automatic process **saves content** to GitHub.
1. Part of the automatic process **builds pages** using Astro templates.
1. Part of the automatic process **hoists images** to Cloudinary.
1. Final part of the process **serves files** on Cloudflare.

## Technical

[See diagram](https://github.com/handshou/blog-content#workflows) on GitHub.

1. Add or edit content on **Notion** apps. 
1. After editing, a button on Notion will trigger a **Cloudflare worker** and 
**GitHub Actions**.
1. **Notion's** API is used to retrieve Pages and Databases to **GitHub**.
1. **GitHub Actions** builds site via **Astro** template and **Notion**
content.
1. Images are hoisted from **Notion** to **Cloudinary** automatically.
1. **Cloudflare Adapter** will host and serve the built site using files from 
**GitHub repository**.

## Services

### GitHub Actions

To be elaborated.

### Astro Templates

To be elaborated.

### Updating Files

To be elaborated.

### Hosting

To be elaborated.

