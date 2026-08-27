# Surya Associates, React

A cleaned-up React/Vite conversion of the original Surya Associates static website.

## Included

- React + Vite
- React Router
- Home, Services and Contact pages
- Responsive navigation with mobile menu
- Original partner/cover imagery retained
- Custom CSS replacing the old Bootstrap/jQuery/template dependencies

## Removed

The original project contained legacy template/demo files and dependencies that were not required by the Surya Associates site, including:

- `about.html` and `blog.html` demo pages
- Bootstrap, jQuery, FlexSlider, Modernizr, Respond and Waypoints scripts
- Source maps and old template/demo assets
- Icomoon demo files and unused fonts
- `.DS_Store`, `error_log`, `cgi-bin` and other backup/template artifacts
- Large commented-out HTML sections

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```
# surya-associates
