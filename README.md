# Blog Application

This is a blog application built with **Next.js**, **TypeScript**, and **Tailwind CSS**. The app fetches blog posts from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts) and displays them in a responsive layout.

## Features

### Homepage (/)

- Fetches a list of blog posts using `getStaticProps`.
- Displays posts in a responsive grid layout.
- Each post card includes:
  - Title (clickable link to post details page)
  - First 100 characters of the body
  - "Read More" link to post details page
  - Tags for filtering posts

### Post Details page (/post/[id])

- Dynamic route for each post.
- Uses `getStaticPaths` and `getStaticProps` to generate pages.
- Displays full post details including title, body, post ID, and author ID.

### About page (/about)

- Placeholder page for additional information about the blog.

## Tech stack

- Next.js;
- TypeScript;
- Tailwind CSS;
- JSONPlaceholder API

## Project setup

1. Clone the repository: `https://github.com/BRp99/blog-app.git`
2. Navigate to the project directory: `cd blog-app`
3. Install dependencies:
   `npm install`

4. Run the development server:
   `npm run dev`

## Approach and Advanced Features

### Approach

The application is built using the Next.js framework for server-side rendering and static site generation. TypeScript is used for type safety, and Tailwind CSS is used for styling. The JSONPlaceholder API is used to fetch blog post data.

### Advanced features

Static Site Generation(SSG): The homepage and post details pages are statically generated using getStaticProps and getStaticPaths for better performance and SEO;

Responsive Design: The application is designed to be fully responsive using Tailwind CSS;

Reusable Components: Component Layout are used to ensure consistent styling and structure across the application;

Utility Functions: Utility functions like `generatePostTags` are used to process and display data efficiently.

### Additional information

- Custom \_app.tsx for global layout;
- Custom \_document.tsx for document structure;
- Global CSS file for Tailwind CSS configuration;
- Type definitions in `types.ts`;
- Utility functions in `generatePostTags.ts`;
- `Layout` component for wrapping sections with consistent styling.
- Project deployed on Vercel.

You can acess the live version of this project here: https://blog-app-brp99s-projects.vercel.app/
