### 🚀Project launch

For development, you need to open two terminals:

`npm run dev:css` — compiles Tailwind CSS and keeps track of changes

`shopify theme dev` — launches a local Shopify server with automatic page refresh

### 🌀 Tailwind CSS Setup

# Setting up dependencies

`npm install`

# This will install tailwindcss and @tailwindcss/cli, which are specified in devDependencies

### ⚙️ Scripts

The following scripts have been added to package.json:

`npm run dev:css` Runs Tailwind in --watch mode for development
`npm run build:css` One-time CSS compilation for production

### 📂 Pathes

Tailwind input file: ./src/input.css

Compiled CSS file: ./assets/tailwind.css (automatically used by Shopify)

Tailwind CSS is connected to layout/theme.liquid via:

`{{ 'tailwind.css' | asset_url | stylesheet_tag }}`

### ✅ After the launch

`npm run dev:css`

all changes automatically appear in Shopify via shopify theme dev.
