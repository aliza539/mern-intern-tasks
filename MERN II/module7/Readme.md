Module 7: README.md
(Focus: SEO, Image Optimization, and Performance)

# Module 7: SEO & Performance Optimization

### Project Goal
The primary focus of this module was to implement Next.js 15+ performance and SEO patterns. The goal was to make the product catalog search-engine friendly and lightning-fast using built-in Next.js features.

### Key Implementation Features:
* **Dynamic Metadata:** Implemented `generateMetadata` in `products/[id]` to dynamically set titles, descriptions, and OpenGraph images for every product.
* **Image Optimization:** Used `next/image` for all product assets with `priority` loading for hero images and `blur` placeholders to prevent Layout Shifts (CLS).
* **Font Optimization:** Integrated `next/font/google` (Inter for body, Playfair Display for headings) to eliminate layout shifts and improve performance.
* **Streaming & Suspense:** Wrapped the product grid in `<Suspense>` to allow the page to stream UI components as they become ready.
* **Sitemap:** Created an automated `sitemap.ts` that generates URLs for all static and dynamic product pages for Google indexing.

### Note on Development:
* **UI Focus:** Minimal Tailwind CSS was used as the priority was technical SEO requirements over aesthetic design.
* **Simplified Logic:** Features like Login/Cart are kept basic to focus purely on the optimization metrics (Lighthouse score) and Route-based code splitting.
* **author:** Aliza