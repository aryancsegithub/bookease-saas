import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const MagneticButton = ({ children, className, ...props }: MagneticButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative px-8 py-4 rounded-full font-bold bg-white text-slate-950 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
