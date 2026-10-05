# Learning Blog

A simple static blog website built with HTML, CSS, and JavaScript.

## Overview
This project is a lightweight personal learning journal. It includes a home page, a blog detail page, and an about page, with content rendered dynamically from a JavaScript data file.

## Features
- Responsive blog layout
- Home page with a featured post and article list
- Individual blog post pages
- Simple static site with no backend required
- Easy to customize by editing the blog data

## Project structure
- `index.html` — homepage
- `blog.html` — blog post detail page
- `about.html` — about section
- `css/` — site styles
- `js/script.js` — renders page content
- `js/blogs_data.js` — blog post data
- `assets/` — images and favicons

## Run locally
From the project root, start a simple local web server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Customize content
Update the post titles, text, and images in `js/blogs_data.js` to change the blog content.
