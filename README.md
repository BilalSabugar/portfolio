# Bilal Sabugar — Night Laboratory Portfolio

An interactive engineering portfolio built with Next.js, React Three Fiber, Three.js and Framer Motion. The experience is designed as a navigable robotics laboratory rather than a conventional stack of portfolio sections.

## Experience

- Interactive WebGL hexapod with component-level navigation
- Structured chapters for projects, systems, research, open source, Aetheron Labs and contact
- Verified GitHub project records and published research
- Recruiter-friendly work index
- Freelance and R&D enquiry flow
- Responsive desktop and mobile compositions
- Reduced-motion and keyboard-accessible controls

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```

The production build is exported to `out/` and does not require an application server.

## GitHub Pages

The included `.github/workflows/deploy-pages.yml` workflow builds and deploys the portfolio whenever `main` is pushed. The configuration automatically applies the repository base path for project Pages URLs such as `username.github.io/portfolio/`.

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

## Content maintenance

Portfolio records and profile links are maintained in `lib/atlas-data.ts`. The primary experience is implemented in `components/PortfolioExperience.tsx`, while the live Three.js assembly lives in `components/LivingSculpture.tsx`.
