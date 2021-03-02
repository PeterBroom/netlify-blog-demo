---
layout: layouts/home.njk
title: Home page
date: 2016-01-01T00:00:00.000Z
permalink: /
blocks:
  - type: textBlock
    content: |-
      ## Eat the rich!

      Test the rich text.
eleventyNavigation:
  key: Home
  order: 0
metaDescription: This is a description for the homepage. Secret work is yoyo
metaKeywords: yoyo, home, tickle, tummus, health and safely
---
# Welcome

This is a template for building a simple blog website with the [Eleventy static site generator](https://www.11ty.io), with deployment to [Netlify](https://www.netlify.com).

Includes [Netlify CMS](https://www.netlifycms.org) for WYSIWYG content editing, and [Netlify Forms](https://www.netlify.com/docs/form-handling) for processing your site's form data.

For more info on installation and usage, view the \[project repo]({{ pkg.repository.url }}) on GitHub.

Or click the button below to deploy your own copy of this project to Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/danurbanowicz/eleventy-netlify-boilerplate&stack=cms)