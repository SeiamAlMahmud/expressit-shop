# Frontend Developer Online Home Task (Express IT BD)

Dear HR,

Thank you for considering my application for the Frontend Developer position at Express IT BD. I have completed the task as per your instructions. Below is an overview of what I have done:

## Task Overview

I have created a responsive web page that integrates with an API to fetch data using Axios in **Next.js 15**. The design is fully responsive, and products are dynamically displayed as requested.

I am eagerly awaiting your feedback and hoping for a positive response from your team. Please let me know if you need any further information.

Thank you once again for this opportunity.

---

## Requirements

### Task 1: API Data Fetching

- **GET request** using Axios/Fetch to retrieve data.
- **Create a Store**:
  - Check domain availability:
    ```
    GET https://interview-task-green.vercel.app/task/domains/check/uniquedomain.expressitbd.com
    ```
    **Params:** `uniquedomain.expressitbd.com`
  - If domain returns `false`, then send a **POST request** to create a store:
    ```
    POST https://interview-task-green.vercel.app/task/stores/create
    ```
    **Payload:**
    ```json
    {
      "name": "Store Name",
      "currency": "BDT",
      "country": "Bangladesh",
      "domain": "uniquedomain",
      "category": "any",
      "email": "any@email.com"
    }
    ```

### Task 2: Display Products

- Fetch product data and show in a **grid format**.
- Clicking on a product should open a **dynamic route** for a single product.
- **API:**
  ```
  GET https://glore-bd-backend-node-mongo.vercel.app/api/product
  ```

### Task 3: Responsive UI

- The design should be fully **responsive** for desktop, tablet, and mobile.
- Use **TailwindCSS** or **Ant Design** for styling.
- Use **CSS Flexbox or Grid** to structure the layout properly.

### Task 4: Performance Optimization

- Ensure the application is optimized to avoid unnecessary re-renders.
- The page should load quickly and have smooth interactions.

### Task 5: Code Quality

- Write **clean, readable, and maintainable** code.
- Follow best practices in **React or Next.js**.
- Ensure components are **reusable** where necessary.

### Bonus Points ✨

- Implement **Next.js SSR** with **meta tags**.
- Show **validation errors** as displayed in the provided validation image.

---

## Installation & Setup

### Clone the Repository

```sh
git clone https://github.com/SeiamAlMahmud/expressit-shop.git
cd expressit-shop
```

### Install Dependencies

```sh
npm install
```

### Run the Development Server

```sh
npm run dev
```

### Build & Start the Project

```sh
npm run build
npm start
```

---

## Important NPM Packages Used

```json
{
  "dependencies": {
    "axios": "^1.7.9",
    "formik": "^2.4.6",
    "lodash": "^4.17.21",
    "lucide-react": "^0.475.0",
    "motion": "^12.4.5",
    "next": "15.1.7",
    "next-themes": "^0.4.4",
    "react": "^19.0.0",
    "react-confetti": "^6.2.2",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.54.2",
    "react-icons": "^5.5.0",
    "react-use": "^17.6.0",
    "swr": "^2.3.2",
    "tailwindcss": "^3.4.17",
    "yup": "^1.6.1"
  }
}
```

---

## Submission s

- **Deadline:** Submit by **23 February, 10:00 AM**.
- **Submission:**
  - Live demo link: [https://expressit.almahmud.top](https://expressit.almahmud.top/)

---

## Contact Information

For any queries, reach out via:

- **Email:** mozzammelridoy5iii@gmail.com
- **Phone:** +8809696325199
- **WhatsApp:** +8801724-171556

---

### Prepared by:

**Seiam Al Mahmud**  
GitHub: [SeiamAlMahmud](https://github.com/SeiamAlMahmud)

## This is the full file structure of my repository.

```
expressit-shop/
├─ .gitignore
├─ .husky/
│  ├─ pre-commit
│  └─ _/
│     ├─ .gitignore
│     ├─ applypatch-msg
│     ├─ commit-msg
│     ├─ h
│     ├─ husky.sh
│     ├─ post-applypatch
│     ├─ post-checkout
│     ├─ post-commit
│     ├─ post-merge
│     ├─ post-rewrite
│     ├─ pre-applypatch
│     ├─ pre-auto-gc
│     ├─ pre-commit
│     ├─ pre-merge-commit
│     ├─ pre-push
│     ├─ pre-rebase
│     └─ prepare-commit-msg
├─ .next/
│  ├─ app-build-manifest.json
│  ├─ app-path-routes-manifest.json
│  ├─ build-manifest.json
│  ├─ BUILD_ID
│  ├─ cache/
│  │  ├─ .rscinfo
│  │  ├─ swc/
│  │  │  └─ plugins/
│  │  │     └─ v7_windows_x86_64_4.0.0/
│  │  └─ webpack/
│  │     ├─ client-production/
│  │     │  ├─ 0.pack
│  │     │  ├─ 1.pack
│  │     │  ├─ 2.pack
│  │     │  ├─ 3.pack
│  │     │  ├─ 4.pack
│  │     │  ├─ 5.pack
│  │     │  ├─ 6.pack
│  │     │  ├─ 7.pack
│  │     │  ├─ 8.pack
│  │     │  ├─ index.pack
│  │     │  └─ index.pack.old
│  │     ├─ edge-server-production/
│  │     │  ├─ 0.pack
│  │     │  └─ index.pack
│  │     └─ server-production/
│  │        ├─ 0.pack
│  │        ├─ 1.pack
│  │        ├─ 2.pack
│  │        ├─ 3.pack
│  │        ├─ 4.pack
│  │        ├─ 5.pack
│  │        ├─ 6.pack
│  │        ├─ 7.pack
│  │        ├─ index.pack
│  │        └─ index.pack.old
│  ├─ diagnostics/
│  │  ├─ build-diagnostics.json
│  │  └─ framework.json
│  ├─ export-marker.json
│  ├─ images-manifest.json
│  ├─ next-minimal-server.js.nft.json
│  ├─ next-server.js.nft.json
│  ├─ package.json
│  ├─ prerender-manifest.json
│  ├─ react-loadable-manifest.json
│  ├─ required-server-files.json
│  ├─ routes-manifest.json
│  ├─ server/
│  │  ├─ app/
│  │  │  ├─ (pages)/
│  │  │  │  ├─ product/
│  │  │  │  │  └─ [productId]/
│  │  │  │  │     ├─ page.js
│  │  │  │  │     ├─ page.js.nft.json
│  │  │  │  │     └─ page_client-reference-manifest.js
│  │  │  │  └─ products/
│  │  │  │     ├─ page.js
│  │  │  │     ├─ page.js.nft.json
│  │  │  │     └─ page_client-reference-manifest.js
│  │  │  ├─ favicon.ico/
│  │  │  │  ├─ route.js
│  │  │  │  └─ route.js.nft.json
│  │  │  ├─ favicon.ico.body
│  │  │  ├─ favicon.ico.meta
│  │  │  ├─ index.html
│  │  │  ├─ index.meta
│  │  │  ├─ index.rsc
│  │  │  ├─ page.js
│  │  │  ├─ page.js.nft.json
│  │  │  ├─ page_client-reference-manifest.js
│  │  │  ├─ products.html
│  │  │  ├─ products.meta
│  │  │  ├─ products.rsc
│  │  │  ├─ _not-found/
│  │  │  │  ├─ page.js
│  │  │  │  ├─ page.js.nft.json
│  │  │  │  └─ page_client-reference-manifest.js
│  │  │  ├─ _not-found.html
│  │  │  ├─ _not-found.meta
│  │  │  └─ _not-found.rsc
│  │  ├─ app-paths-manifest.json
│  │  ├─ chunks/
│  │  │  ├─ 312.js
│  │  │  ├─ 627.js
│  │  │  ├─ 638.js
│  │  │  └─ 96.js
│  │  ├─ functions-config-manifest.json
│  │  ├─ interception-route-rewrite-manifest.js
│  │  ├─ middleware-build-manifest.js
│  │  ├─ middleware-manifest.json
│  │  ├─ middleware-react-loadable-manifest.js
│  │  ├─ next-font-manifest.js
│  │  ├─ next-font-manifest.json
│  │  ├─ pages/
│  │  │  ├─ 404.html
│  │  │  ├─ 500.html
│  │  │  ├─ _app.js
│  │  │  ├─ _app.js.nft.json
│  │  │  ├─ _document.js
│  │  │  ├─ _document.js.nft.json
│  │  │  ├─ _error.js
│  │  │  └─ _error.js.nft.json
│  │  ├─ pages-manifest.json
│  │  ├─ server-reference-manifest.js
│  │  ├─ server-reference-manifest.json
│  │  └─ webpack-runtime.js
│  ├─ static/
│  │  ├─ chunks/
│  │  │  ├─ 203.2b4c1ee4fbe3a7cf.js
│  │  │  ├─ 218.57a830a2c55ba802.js
│  │  │  ├─ 4bd1b696-cfbe69441526ea41.js
│  │  │  ├─ 517-574e0f9fc7c01dbf.js
│  │  │  ├─ 53c13509-cd98db2b175d7fe7.js
│  │  │  ├─ 591-7ca58c89cbc02398.js
│  │  │  ├─ 795d4814-9856e544593acbe2.js
│  │  │  ├─ 814-4e69334bb49ba9e5.js
│  │  │  ├─ 869-d14329ba3e412efa.js
│  │  │  ├─ 8e1d74a4-0071cc9786b28e42.js
│  │  │  ├─ 94730671-8a5e7159fa4b1985.js
│  │  │  ├─ 9c4e2130-0209947c4760868d.js
│  │  │  ├─ app/
│  │  │  │  ├─ (pages)/
│  │  │  │  │  ├─ product/
│  │  │  │  │  │  └─ [productId]/
│  │  │  │  │  │     └─ page-c9b2d9b64529da33.js
│  │  │  │  │  └─ products/
│  │  │  │  │     └─ page-184c74656b300ff3.js
│  │  │  │  ├─ layout-a0d897030a2fdf92.js
│  │  │  │  ├─ page-e6287091c27aaabf.js
│  │  │  │  └─ _not-found/
│  │  │  │     └─ page-39637d85418be6a7.js
│  │  │  ├─ ee560e2c-89e1a4e178bdcd34.js
│  │  │  ├─ framework-6b27c2b7aa38af2d.js
│  │  │  ├─ main-app-ee6f851dceb7dd60.js
│  │  │  ├─ main-b45a38056bc69915.js
│  │  │  ├─ pages/
│  │  │  │  ├─ _app-430fec730128923e.js
│  │  │  │  └─ _error-2d7241423c4a35ba.js
│  │  │  ├─ polyfills-42372ed130431b0a.js
│  │  │  └─ webpack-114b5b127db4c455.js
│  │  ├─ css/
│  │  │  └─ af9b3259fd513b55.css
│  │  ├─ K-7qF3g4PRF8W3UCmni2J/
│  │  │  ├─ _buildManifest.js
│  │  │  └─ _ssgManifest.js
│  │  └─ media/
│  │     ├─ 569ce4b8f30dc480-s.p.woff2
│  │     ├─ 747892c23ea88013-s.woff2
│  │     ├─ 93f479601ee12b01-s.p.woff2
│  │     └─ ba015fad6dcf6784-s.woff2
│  ├─ trace
│  └─ types/
│     ├─ app/
│     │  ├─ (pages)/
│     │  │  ├─ product/
│     │  │  │  └─ [productId]/
│     │  │  │     └─ page.ts
│     │  │  └─ products/
│     │  │     └─ page.ts
│     │  ├─ layout.ts
│     │  └─ page.ts
│     ├─ cache-life.d.ts
│     └─ package.json
├─ .prettierignore
├─ .prettierrc
├─ components.json
├─ eslint.config.mjs
├─ jsconfig.json
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public/
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ src/
│  ├─ app/
│  │  ├─ (pages)/
│  │  │  ├─ product/
│  │  │  │  ├─ [productId]/
│  │  │  │  │  └─ page.jsx
│  │  │  │  └─ _components/
│  │  │  │     ├─ AddButtons.jsx
│  │  │  │     ├─ CustomerReview.jsx
│  │  │  │     ├─ ImageMagnifier.jsx
│  │  │  │     ├─ ProductDetails.jsx
│  │  │  │     ├─ ProductInfo.jsx
│  │  │  │     ├─ ProductPreview.jsx
│  │  │  │     ├─ Sizes.jsx
│  │  │  │     └─ TimeLeft.jsx
│  │  │  └─ products/
│  │  │     └─ page.jsx
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.js
│  │  └─ page.js
│  ├─ components/
│  │  ├─ Card.jsx
│  │  ├─ magicui/
│  │  │  └─ magic-card.jsx
│  │  ├─ StoreForm.jsx
│  │  └─ ui/
│  │     └─ sonner.jsx
│  └─ lib/
│     └─ utils.js
└─ tailwind.config.mjs

```
