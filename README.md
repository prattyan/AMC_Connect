# AMC Connect

AMC Connect is a modern, responsive web application designed for a university guidance and support service. It helps students navigate their university journey with personalized support, course information, and application assistance.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices.
- **Dark/Light Mode**: Built-in theme switcher for user preference.
- **Single Page Navigation**: Smooth scrolling navigation between Home, About, Services, and Contact sections.
- **Contact Form**: Integrated with EmailJS for direct inquiries.
- **Legal Compliance**: Dedicated pages for Privacy Policy, Cookie Policy, Terms & Conditions, and Accessibility Statement.
- **Interactive UI**: Modern animations and transitions using Tailwind CSS.

## Tech Stack

- **Frontend Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)

## Prerequisites

Before you begin, ensure you have met the following requirements:
- **Node.js**: You need to have Node.js installed on your machine. (Recommended version: LTS)

## Installation

1.  **Clone the repository** (if applicable) or navigate to the project directory.

2.  **Install dependencies**:
    ```bash
    npm install
    ```

## Configuration

This project uses **EmailJS** for the contact form functionality. You need to set up environment variables.

1.  Create a `.env` file in the root directory of the project.
2.  Add the following variables with your EmailJS credentials:

    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID_CONTACT=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```

## Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

To create a production-ready build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory. You can preview the build using:

```bash
npm run preview
```

## Project Structure

-   `src/App.jsx`: The main application component containing the layout, navigation, and all page views (Home, Services, About, Contact).
-   `src/components/`: Contains legal page components (`LegalCookie.jsx`, `LegalPrivacy.jsx`, etc.).
-   `src/main.jsx`: The entry point of the React application.
-   `tailwind.config.js`: Configuration for Tailwind CSS.

## Client Information

**AMC Connect**
-   **Phone**: 07955 528885
-   **Email**: info@amc-connect.co.uk
-   **Address**: Unit 3, KD Tower, Cotterells, Hemel Hempstead, HP1 1FW
