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

## This is the src directory's structure of my repository.

```
src/
├─ app/
│  ├─ (pages)/
│  │  ├─ product/
│  │  │  ├─ [productId]/
│  │  │  │  └─ page.jsx
│  │  │  └─ _components/
│  │  │     ├─ AddButtons.jsx
│  │  │     ├─ CustomerReview.jsx
│  │  │     ├─ ImageMagnifier.jsx
│  │  │     ├─ ProductDetails.jsx
│  │  │     ├─ ProductInfo.jsx
│  │  │     ├─ ProductPreview.jsx
│  │  │     ├─ Sizes.jsx
│  │  │     └─ TimeLeft.jsx
│  │  └─ products/
│  │     └─ page.jsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.js
│  └─ page.js
├─ components/
│  ├─ Card.jsx
│  ├─ magicui/
│  │  └─ magic-card.jsx
│  ├─ StoreForm.jsx
│  └─ ui/
│     └─ sonner.jsx
└─ lib/
   └─ utils.js

```
