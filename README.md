# AI Engineer Portfolio

A responsive dark portfolio starter built with React, Vite, Tailwind CSS, and Lucide icons.

## Run locally

1. Install Node.js (LTS).
2. Extract this folder.
3. Open a terminal in the project folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite (usually http://localhost:5173).

## Personalize before publishing

Search `src/main.jsx` for `const profile` and replace:
- `Your Name`
- `your.email@example.com`
- GitHub and LinkedIn URLs
- `resume: "/resume.pdf"` (add your PDF as `public/resume.pdf`)
- Location, intro, education details, and project information

Also review the project descriptions and tags. Keep only tools and work you can confidently discuss in an interview. Add actual repository links and screenshots when available.

## Build for deployment

```bash
npm run build
npm run preview
```

Deploy the generated `dist/` folder to Vercel, Netlify, or another static hosting provider. For Vercel, importing the GitHub repository and accepting the Vite defaults is usually sufficient.

## Notes

- The site uses responsive CSS for mobile, tablet, and desktop.
- No backend is required.
- Contact uses the visitor's email application (`mailto:`).
- The resume link expects `public/resume.pdf`.
