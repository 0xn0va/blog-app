# Blog App with Next.js and Tailwind CSS

This is a simple blog application built with **Next.js**, **TypeScript**, and **Tailwind CSS**. The app fetches blog posts from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts) and displays them in a responsive grid layout. It includes a homepage that lists the posts, and a dynamic post details page that displays more information about each individual post.

## Features

### 1. Homepage (/)

- Fetches a list of blog posts from the **JSONPlaceholder API** using `getStaticProps`.
- Displays the posts in a responsive grid layout using **Tailwind CSS**.
- Each blog post card includes:
  - **Title**: A clickable link directing to the post's details page.
  - **First 100 characters** of the body.
  - A **"Read More"** link directing to the post details page.

### 2. Post Details Page (/post/[id])

- Implements a dynamic route (`/post/[id]`).
- Uses `getStaticPaths` and `getStaticProps` to statically generate pages for each post.
- Displays the full post details, including:
  - **Title** of the post.
  - **Full body** of the post.
  - **Post ID** and **author** (using the `userId` field from the post).

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- JSONPlaceholder API for fetching data

## Project Setup

`npx create-next-app@latest blog-app --typescript` - Next.js version 15.1.6 with Pages Router

## Additional Enhancements

- Custom \_app.tsx file to manage the global layout and initialization of the app;
- Custom \_document.tsx file to manage the document structure, including meta tags, language settings, and body class;
- The global CSS file styles/globals.css for Tailwind CSS configuration;
- Created a types.ts file to define the Post type.
