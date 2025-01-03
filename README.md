# Intuit Blog

Codebase for the Intuit website/blog. Built using NextJS in Typescript.

The site is deployed on GitHub pages: https://txdk.github.io/intuit/

## Getting Started

Clone the repository and install the project's dependencies via:
```bash
npm install
```

To view the website, first run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding a new blog post

To add a new post to the blog, create a Markdown file (`.md`) in the `public/posts/` directory. The file name will serve as the
unique id of the page, i.e. the blog post will be rendered at the path `/blog/[filename]`.

You can add equation rendering via LaTeX to the blog post by enclosing valid LaTeX within `$` signs for inline equations, e.g. `$\alpha$`, or a multiline block using enclosing `$$`:

```tex
$$
\lambda^2+2\lambda+1=0
$$
```