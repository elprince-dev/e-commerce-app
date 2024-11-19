<p align="center">
  <img src="./public/yesmine-logo/png/logo-no-background.png" width="300" />
</p>

<p align="center">
	<img src="https://img.shields.io/github/license/elprince-dev/e-commerce-app?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/elprince-dev/e-commerce-app?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/elprince-dev/e-commerce-app?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/elprince-dev/e-commerce-app?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Next.js-000000.svg?style=flat&logo=Next.js&logoColor=white" alt="Next.js">
	<img src="https://img.shields.io/badge/WixStudio-0c6eaf.svg?style=flat&logo=wix&logoColor=white" alt="WixStudio">
    <img src="https://img.shields.io/badge/TailwindCSS-38B2AC.svg?style=flat&logo=tailwind-css&logoColor=white" alt="TailwindCSS">
</p>

<!-- <p align="center">
	<em>Live on</em> <a href="https://yesmine.vercel.app">writewell.vercel.app </a>
</p> -->
<!-- <p align="center"> <em>Watch the demo</em> <a href="https://www.youtube.com/watch?v=RGtlUeoG3tc">HERE</a></p> -->

<hr>

## Overview

**YesMine** is a modern, full-stack web application built to offer a seamless online shopping experience. Designed with Next.js, this app combines a dynamic and responsive frontend with a scalable and efficient backend. The platform supports essential e-commerce functionalities, enabling users to browse, add products to a cart, and complete purchases smoothly.

## Features

- **User Authentication**: Secure user registration and login.
- **Product Browsing**: View detailed product pages and add items to a shopping cart.
- **Shopping Cart Management**: Adjust item quantities and view a real-time total.
- **Checkout**: Streamlined checkout process.
- **Order History**: View and track past purchases.
- **Responsive Design**: Optimized for desktop and mobile.


## Technology Stack

### Frontend
- **Framework**: Next.js
  - Leverages server-side rendering and file-based routing for optimal performance.
  - Provides a responsive and dynamic user interface.


### Backend Integration

- **Wix Studio**:
  - Fetches products and orders directly from the Wix Studio dashboard.
  - Centralized management of e-commerce data without requiring an additional backend.

## Project Structure

```sh
└── e-commerce-app/
	├─ .eslintrc.json
	├─ .gitignore
	├─ LICENSE
	├─ README.md
	├─ jsconfig.json
	├─ next.config.mjs
	├─ package-lock.json
	├─ package.json
	├─ postcss.config.mjs
	├─ public
	│  ├─ cart.png
	│  ├─ category.png
	│  ├─ discover.png
	│  ├─ facebook.png
	│  ├─ instagram.png
	│  ├─ logo.png
	│  ├─ mastercard.png
	│  ├─ menu.png
	│  ├─ notification.png
	│  ├─ paypal.png
	│  ├─ pinterest.png
	│  ├─ product.png
	│  ├─ profile.png
	│  ├─ search.png
	│  ├─ skrill.png
	│  ├─ star.png
	│  ├─ visa.png
	│  ├─ woman.png
	│  ├─ x.png
	│  ├─ yesmine-logo
	│  │  ├─ pdf
	│  │  │  ├─ logo-black.pdf
	│  │  │  ├─ logo-color.pdf
	│  │  │  ├─ logo-no-background.pdf
	│  │  │  └─ logo-white.pdf
	│  │  ├─ png
	│  │  │  ├─ logo-black.png
	│  │  │  ├─ logo-color.png
	│  │  │  ├─ logo-no-background.png
	│  │  │  └─ logo-white.png
	│  │  └─ svg
	│  │     ├─ logo-black.svg
	│  │     ├─ logo-color.svg
	│  │     ├─ logo-no-background.svg
	│  │     └─ logo-white.svg
	│  └─ youtube.png
	├─ src
	│  ├─ app
	│  │  ├─ [slug]
	│  │  │  └─ page.jsx
	│  │  ├─ favicon.ico
	│  │  ├─ globals.css
	│  │  ├─ layout.js
	│  │  ├─ list
	│  │  │  └─ page.jsx
	│  │  ├─ login
	│  │  │  └─ page.jsx
	│  │  ├─ orders
	│  │  │  └─ [id]
	│  │  │     └─ page.jsx
	│  │  ├─ page.js
	│  │  ├─ profile
	│  │  │  └─ page.jsx
	│  │  └─ success
	│  │     └─ page.jsx
	│  ├─ components
	│  │  ├─ Add.jsx
	│  │  ├─ CartModal.jsx
	│  │  ├─ CategoryList.jsx
	│  │  ├─ CustomizedProduct.jsx
	│  │  ├─ Filter.jsx
	│  │  ├─ Footer.jsx
	│  │  ├─ Menu.jsx
	│  │  ├─ Navbar.jsx
	│  │  ├─ NavbarIcons.jsx
	│  │  ├─ Pagination.jsx
	│  │  ├─ ProductImages.jsx
	│  │  ├─ ProductList.jsx
	│  │  ├─ Reviews.jsx
	│  │  ├─ SearchBar.jsx
	│  │  ├─ Slider.jsx
	│  │  └─ UpdateButton.jsx
	│  ├─ context
	│  │  └─ wixContext.jsx
	│  ├─ hooks
	│  │  ├─ useCartStore.js
	│  │  └─ useWixClient.jsx
	│  ├─ lib
	│  │  ├─ actions.js
	│  │  └─ wixClientServer.js
	│  └─ middleware.js
	└─ tailwind.config.js
```

## Installation

To get a local copy up and running, follow these steps:

### Prerequisites

- **Node.js** (v14 or higher)
- **WixStudio** account with business plan subscription

### Installation Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/elprince-dev/e-commerce-app.git
   cd e-commerce-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create an .env file in the root directory with the following keys:

   ```bash
   NEXT_PUBLIC_WIX_CLIENT_ID=wix-client-id
   FEATURED_PRODUCTS_CATEGORY_ID=featured-products-category-id
   NEXT_PUBLIC_WIX_APP_ID=215238eb-22a5-4c36-9e7b-e7c08025e04e
   NEXT_PUBLIC_FERA_ID=reviews-app-id
   ```

4. **Start the development server**:

   ```bash
   npm run dev

   ```
## Usage

- **Homepage**: Browse products available on the store.
- **Product Details**: View individual product details and add items to the cart.
- **Checkout**: Proceed with the checkout to place an order.

### Deployment

1.  **Connect to Wix Studio**: Ensure your Wix Studio dashboard is configured with the necessary products and orders.

2.  **Deploy on Vercel** (or another hosting provider):

    - Connect your GitHub repository to Vercel.
    - Configure environment variables on Vercel as done locally.
    - Deploy the app directly from your Git repository.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

Yesmine is licensed under the MIT License. See the LICENSE file for details.