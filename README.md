# Wharton Entrepreneurship Club Website

This project is the official website for the Wharton Entrepreneurship Club, built with modern web technologies. We kindly ask that you do not reproduce or distribute any part of this project.

## 🛠️ Technologies Used

- [Astro](https://astro.build) - Static site generator with excellent performance
- [Storyblok](https://www.storyblok.com) - Headless CMS for content management
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- [Bun](https://bun.sh) - JavaScript runtime & package manager


## 🚀 How to Run

To run the Wharton Entrepreneurship Club website locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/wharton-entrepreneurship-club.git
   cd wharton-entrepreneurship-club
   ```

2. **Install dependencies:**
   Make sure you have [Bun](https://bun.sh) installed. If not, you can install it by following the instructions on their website.
   ```sh
   bun install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your Storyblok token:
   ```sh
   STORYBLOK_TOKEN=your_storyblok_token
   ```

4. **Run the development server:**
   ```sh
   bun run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000` to see the website in action.

6. **Build for production:**
   To create an optimized production build, run:
   ```sh
   bun run build
   ```

7. **Preview the production build:**
   You can preview the production build locally by running:
   ```sh
   bun run preview
   ```

Follow these steps, and you'll have the Wharton Entrepreneurship Club website running on your local machine!
