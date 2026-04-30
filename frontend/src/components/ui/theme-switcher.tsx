import { useEffect, useState } from "react";
import { Palette, Check } from "lucide-react";

const themes = [
  { name: "Sunrise Minimalist", class: "", color: "#f43f5e" }, // Default
  { name: "Deep Ocean", class: "theme-ocean", color: "#2dd4bf" },
  { name: "Cyberpunk Neon", class: "theme-cyberpunk", color: "#d946ef" },
  { name: "Forest Glass", class: "theme-forest", color: "#10b981" },
];

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(themes[0].class);

  useEffect(() => {
    // Remove all theme classes
    const root = document.documentElement;
    themes.forEach((t) => {
      if (t.class) root.classList.remove(t.class);
    });
    // Add selected theme class
    if (activeTheme) {
      root.classList.add(activeTheme);
    }
  }, [activeTheme]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-popover border border-border shadow-2xl p-4 rounded-2xl w-64 animate-in fade-in slide-in-from-bottom-4">
          <h4 className="font-bold text-sm text-foreground mb-3">Color Palette</h4>
          <div className="flex flex-col gap-2">
            {themes.map((theme) => (
              <button
                key={theme.name}
                onClick={() => setActiveTheme(theme.class)}
                className={`flex items-center justify-between w-full p-2 rounded-xl text-sm font-medium transition-colors hover:bg-muted ${
                  activeTheme === theme.class ? "bg-muted text-primary" : "text-muted-foreground"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-4 h-4 rounded-full shadow-sm"
                    style={{ backgroundColor: theme.color }}
                  ></span>
                  {theme.name}
                </div>
                {activeTheme === theme.class && <Check className="w-4 h-4 text-primary" />}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-primary-foreground p-4 rounded-full shadow-xl hover:scale-105 transition-transform flex items-center justify-center border-2 border-background"
      >
        <Palette className="w-6 h-6" />
      </button>
    </div>
  );
}
