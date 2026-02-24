# Blog Management — Decap CMS

Blogs are stored as Markdown files in `content/blogs/`. Decap CMS provides a
web UI at `/admin` to create and edit them without touching code.

---

## One-Time Setup

### 1. Configure the GitHub repo

Edit `public/admin/config.yml` and replace the placeholder:

```yaml
backend:
  name: github
  repo: YOUR_GITHUB_USERNAME/YOUR_REPO_NAME   # ← change this
  branch: development
```

### 2. Create a GitHub OAuth App

1. Go to **GitHub → Settings → Developer settings → OAuth Apps → New OAuth App**
2. Fill in:
   - **Application name:** TAC Design Lab CMS
   - **Homepage URL:** `https://tacdesignlab.com`
   - **Authorization callback URL:** `https://tacdesignlab.com/api/auth`
3. Copy the **Client ID** and generate a **Client Secret**

### 3. Add a serverless OAuth handler

Decap CMS needs a small server endpoint to complete the GitHub OAuth flow.
The easiest options:

| Host | Guide |
|------|-------|
| **Netlify** | Switch backend to `git-gateway` and enable Netlify Identity — no custom handler needed |
| **Vercel** | Use the [`decap-server`](https://www.npmjs.com/package/netlify-cms-proxy-server) or a community OAuth handler (e.g. `@sveltia/cms-auth`) deployed as a Vercel function |

---

## Accessing the Admin

Navigate to **`https://tacdesignlab.com/admin`** in any browser.

You will be prompted to log in with your GitHub account. Only users with
**write access** to the repository can publish content.

---

## Writing a New Blog Post

1. Go to `/admin` and click **"Blog Posts"** in the left sidebar
2. Click **"New Blog Post"**
3. Fill in the fields:

| Field | Description |
|-------|-------------|
| **Title** | Displayed as the page heading and in the blog card |
| **Slug** | URL path — lowercase, hyphens only (e.g. `my-new-post` → `/blogs/my-new-post`) |
| **Short Description** | Preview text shown on the blog listing card |
| **Meta Description** | SEO description, keep under 160 characters |
| **Cover Image** | Click to upload — saved to `public/blog-images/` |
| **Cover Image Width / Height** | Dimensions of the uploaded image in pixels |
| **Author** | Author name shown on the post and card |
| **Published On** | Publication date shown on the post |
| **Body** | Full blog content — Markdown editor with toolbar |

4. Click **"Publish"** — Decap commits the `.mdx` file directly to the
   `development` branch in `content/blogs/`
5. Your CI/CD pipeline rebuilds the site and the post goes live

---

## Editing an Existing Post

1. Go to `/admin` → **"Blog Posts"**
2. Click the post you want to edit
3. Make changes and click **"Publish"** (or **"Save"** to keep as draft)

---

## Content File Format

Each blog is a `.mdx` file in `content/blogs/` with this structure:

```markdown
---
title: My Blog Post Title
slug: my-blog-post-title
short_description: >-
  A short preview shown on the listing page.
meta_description: >-
  SEO description under 160 characters.
cover_image: /blog-images/my-blog-post-title/cover.jpg
cover_image_width: 1200
cover_image_height: 800
author: admin
published_on: "2024-06-01T00:00:00.000Z"
---

Full blog content in Markdown here...
```

> **Note on YAML strings:** Use `>-` block scalars for `short_description` and
> `meta_description` if the text contains colons or special characters. The
> Decap CMS editor handles this automatically when saving through the UI.

---

## Adding Images Inside a Post

Upload images via the Decap media library (the image button in the Body
toolbar), or reference existing ones from `public/blog-images/` directly:

```markdown
<img src="/blog-images/my-blog/image.jpg" data-img-type="full" />
```

`data-img-type` controls the display style (defined in `src/app/globals.css`):

| Value | Effect |
|-------|--------|
| `full` | 100% width, 484 px tall, cropped |
| `auto` | Auto width, 484 px tall, centred |

---

## Project Structure

```
content/blogs/                  ← blog source files (Decap writes here)
public/
  admin/
    index.html                  ← Decap CMS entry point
    config.yml                  ← CMS configuration
  blog-images/                  ← uploaded cover and inline images
src/
  lib/blogs.ts                  ← reads content/blogs/ at build time
  lib/markdown.ts               ← converts Markdown to HTML (remark/rehype)
  components/
    markdown-blog-renderer.tsx  ← renders the HTML with Tailwind prose styles
  services/
    list-blogs.ts               ← returns all blog list items
    get-blogs.ts                ← returns a single blog by slug
  app/blogs/
    page.tsx                    ← blog listing page
    [slug]/page.tsx             ← individual blog post page
```
