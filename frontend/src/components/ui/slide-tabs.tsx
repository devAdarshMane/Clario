import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [selected, setSelected] = useState(0);
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const selectedTab = tabsRef.current[selected];
    if (selectedTab) {
      const { width } = selectedTab.getBoundingClientRect();
      setPosition({
        left: selectedTab.offsetLeft,
        width,
        opacity: 1,
      });
    }
  }, [selected]);

  return (
    <ul
      onMouseLeave={() => {
        const selectedTab = tabsRef.current[selected];
        if (selectedTab) {
            const { width } = selectedTab.getBoundingClientRect();
            setPosition({
                left: selectedTab.offsetLeft,
                width,
                opacity: 1,
            });
        }
      }}
      className="relative mx-auto flex w-fit rounded-full border border-border bg-background/80 backdrop-blur-md p-1 shadow-sm transition-colors duration-500"
    >
      {[
        { name: "How it works", id: "how-it-works" },
        { name: "Features", id: "features" },
        { name: "Pricing", id: "pricing" },
        { name: "Demo", id: "demo" },
      ].map((tab, i) => (
         <Tab
            key={tab.id}
            ref={(el: HTMLLIElement | null) => { tabsRef.current[i] = el; }}
            setPosition={setPosition}
            onClick={() => {
              setSelected(i);
              document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {tab.name}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<any>>;
  onClick: () => void;
}

const Tab = React.forwardRef<HTMLLIElement, TabProps>(
  ({ children, setPosition, onClick }, ref) => {
    return (
      <li
        ref={ref}
        onClick={onClick}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          const { width } = el.getBoundingClientRect();
          setPosition({
            left: el.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className="relative z-10 block cursor-pointer px-4 py-2 text-sm font-semibold text-foreground/70 hover:text-primary transition-colors duration-300"
      >
        {children}
      </li>
    );
  }
);
Tab.displayName = "Tab";

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-9 rounded-full bg-primary/20 border-2 border-primary shadow-[0_0_15px_rgba(0,0,0,0.1)]"
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    />
  );
};
