# Everyday Bakeshop Website

## Dev Server

1. Install the dependencies:

    ```bash
    npm install

2. Start the development server:

    ```bash
    nvm use v16
    npm run dev
    ```

    Now you should be able to see the project running at [localhost:3000](http://localhost:3000).

3. Open `./index.html` in your editor (VS Code recommended) and start editing!

## Optimizing for production

Tailwind CSS output needs to be optimized for the production use. The development version for the CSS file is almost 4MB which is not good for production websites. [Read this for more details](https://tailwindcss.com/docs/optimizing-for-production). This boilerplate **helps you generate the production version** of your CSS file easily & quickly.

We have configured `purge` option for PostCSS & Tailwind CSS. To build optimized version of your custom CSS, simply run:

```bash
npm run build
```

For optimizing your images, simply run:

```bash
npm run build-images
```
