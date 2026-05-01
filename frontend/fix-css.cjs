const fs = require('fs');

// 1. Update index.css
let css = fs.readFileSync('src/index.css', 'utf-8');

// Replace --color-xyz: hsl(var(--xyz)) with --color-xyz: var(--xyz)
css = css.replace(/--color-([a-zA-Z-]+):\s*hsl\(var\(--([a-zA-Z-]+)\)\);/g, '--color-$1: var(--$2);');

// Wrap numeric values in hsl()
css = css.replace(/(--[a-zA-Z-]+):\s*(\d+(?:\.\d+)?\s+\d+(?:\.\d+)?%\s+\d+(?:\.\d+)?%);/g, '$1: hsl($2);');

// Replace hsl(var(--border)) in body and * selectors
css = css.replace(/hsl\(var\(--border\)\)/g, 'var(--border)');
css = css.replace(/hsl\(var\(--background\)\)/g, 'var(--background)');
css = css.replace(/hsl\(var\(--foreground\)\)/g, 'var(--foreground)');

fs.writeFileSync('src/index.css', css);

// 2. Update App.tsx
let app = fs.readFileSync('src/App.tsx', 'utf-8');
app = app.replace(/hsl\(var\(--primary\)\)/g, 'var(--primary)');
app = app.replace(/hsl\(var\(--secondary\)\)/g, 'var(--secondary)');
fs.writeFileSync('src/App.tsx', app);

// 3. Update slide-tabs.tsx
let tabs = fs.readFileSync('src/components/ui/slide-tabs.tsx', 'utf-8');
tabs = tabs.replace(/hsl\(var\(--primary\)\)/g, 'var(--primary)');
tabs = tabs.replace(/hsl\(var\(--background\)\)/g, 'var(--background)');
fs.writeFileSync('src/components/ui/slide-tabs.tsx', tabs);

console.log('Fixed CSS variables across all files.');
