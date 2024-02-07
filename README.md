# E-Commerce Project

## Description

This repository contains an E-Commerce project built with Node.js, Express.js, MySQL, and EJS templating engine. The project allows users to browse products, add them to the cart, and make purchases.

## Features

- Browse products
- Add products to cart
- Checkout functionality
- User authentication (if implemented)

## Technologies Used

- Node.js
- Express.js
- MySQL
- EJS templating engine
- Bootstrap (for styling)

## Setup and Installation

Follow these steps to set up and run the project locally:

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- MySQL

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/username/e-commerce-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd e-commerce-project
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up the MySQL database:
   
   - Create a new MySQL database for the project.
   - Import the provided SQL file (`database.sql`) to set up the necessary tables.

5. Configure environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   DB_HOST=localhost
   DB_USER=username
   DB_PASSWORD=password
   DB_DATABASE=database_name
   ```

   Replace `username`, `password`, and `database_name` with your MySQL credentials.

6. Start the server:

   ```bash
   npm start
   ```

7. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Browse products: Visit the homepage to view available products.
- Add products to cart: Click on the "Add to Cart" button next to a product.
- Checkout: Proceed to the cart page and click on the checkout button to complete the purchase.
